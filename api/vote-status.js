const ADASTAT_API_URL = "https://adastat.net/api/rest/v1/governances/529dccaadaa000746c22f1682574cb3f436eeba4d19710b90791a54226dc96d700.json?currency=usd";
const ADASTAT_PAGE_URL = "https://adastat.net/governances/529dccaadaa000746c22f1682574cb3f436eeba4d19710b90791a54226dc96d700";
const GOVTOOL_PROPOSAL_API_URL = "https://gov.tools/api/proposal/get/529dccaadaa000746c22f1682574cb3f436eeba4d19710b90791a54226dc96d7%230";
const GOVTOOL_STAKE_API_URL = "https://gov.tools/api/network/total-stake";
const KOIOS_API_URL = "https://api.koios.rest/api/v1/proposal_voting_summary?_proposal_id=gov_action122wue2k65qq8gmpz795z2axt8apka6ay6xt3pwg8jxj5yfkujmtsqvlfpu7";

function toVoteCount(value) {
  const count = Number(value);
  return Number.isSafeInteger(count) && count >= 0 ? count : null;
}

function percentageFromStake(yesStake, eligibleVotingStake) {
  if (eligibleVotingStake <= 0n || yesStake > eligibleVotingStake) {
    throw new RangeError("Vote source returned inconsistent voting stake");
  }
  const percentageHundredths = (yesStake * 10_000n + eligibleVotingStake / 2n) / eligibleVotingStake;
  return Number(percentageHundredths) / 100;
}

function extractJsonInteger(text, field) {
  const match = text.match(new RegExp(`"${field}"\\s*:\\s*"?([0-9]+)"?`));
  if (!match) throw new TypeError(`Missing ${field}`);
  return BigInt(match[1]);
}

async function fetchText(url, timeoutMs, extraHeaders = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const upstream = await fetch(url, {
      headers: { Accept: "application/json", ...extraHeaders },
      cache: "no-store",
      signal: controller.signal,
    });
    if (!upstream.ok) throw new Error(`Upstream returned ${upstream.status}`);
    return upstream.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function readAdaStat() {
  const text = await fetchText(ADASTAT_API_URL, 4_500, { Referer: "https://adastat.net/" });
  const data = JSON.parse(text);
  const yesStake = extractJsonInteger(text, "drep_yes_stake");
  const totalStake = extractJsonInteger(text, "drep_total_stake");
  const abstainStake = extractJsonInteger(text, "drep_abstain_stake");
  const alwaysAbstainStake = extractJsonInteger(text, "drep_always_abstain_stake");
  const inactiveStake = extractJsonInteger(text, "drep_inactive_stake");
  const eligibleVotingStake = totalStake - abstainStake - alwaysAbstainStake - inactiveStake;

  return {
    yesPercent: percentageFromStake(yesStake, eligibleVotingStake),
    yesVotes: toVoteCount(data.drep_vote_yes ?? data.drep_yes),
    noVotes: toVoteCount(data.drep_vote_no ?? data.drep_no),
    abstainVotes: toVoteCount(data.drep_vote_abstain ?? data.drep_abstain),
    yesStake: yesStake.toString(),
    eligibleVotingStake: eligibleVotingStake.toString(),
    source: "AdaStat",
    sourceUrl: ADASTAT_PAGE_URL,
  };
}

async function readGovTool() {
  const [proposalText, stakeText] = await Promise.all([
    fetchText(GOVTOOL_PROPOSAL_API_URL, 6_000),
    fetchText(GOVTOOL_STAKE_API_URL, 6_000),
  ]);
  const yesStake = extractJsonInteger(proposalText, "dRepYesVotes");
  const abstainStake = extractJsonInteger(proposalText, "dRepAbstainVotes");
  const totalStake = extractJsonInteger(stakeText, "totalStakeControlledByDReps");
  const eligibleVotingStake = totalStake - abstainStake;

  return {
    yesPercent: percentageFromStake(yesStake, eligibleVotingStake),
    yesVotes: null,
    noVotes: null,
    abstainVotes: null,
    yesStake: yesStake.toString(),
    eligibleVotingStake: eligibleVotingStake.toString(),
    source: "GovTool",
    sourceUrl: "https://gov.tools/",
  };
}

async function readKoios() {
  const text = await fetchText(KOIOS_API_URL, 6_000);
  const data = JSON.parse(text);
  const summary = Array.isArray(data) ? data[0] : data;
  const yesPercent = Number(summary?.drep_yes_pct);
  if (!Number.isFinite(yesPercent) || yesPercent < 0 || yesPercent > 100) {
    throw new TypeError("Invalid Koios DRep Yes percentage");
  }

  return {
    yesPercent: Math.round(yesPercent * 100) / 100,
    yesVotes: toVoteCount(summary.drep_yes_votes_cast),
    noVotes: toVoteCount(summary.drep_no_votes_cast),
    abstainVotes: toVoteCount(summary.drep_abstain_votes_cast),
    yesStake: summary.drep_yes_vote_power ?? null,
    eligibleVotingStake: null,
    source: "Koios",
    sourceUrl: "https://api.koios.rest/",
  };
}

async function readPublicVoteStatus() {
  try {
    return await readAdaStat();
  } catch (error) {
    console.warn(`[vote-status] AdaStat unavailable: ${error instanceof Error ? error.message : "unknown error"}`);
  }

  const [govToolResult, koiosResult] = await Promise.allSettled([readGovTool(), readKoios()]);
  if (govToolResult.status === "fulfilled") {
    const status = govToolResult.value;
    if (koiosResult.status === "fulfilled") {
      status.yesVotes = koiosResult.value.yesVotes;
      status.noVotes = koiosResult.value.noVotes;
      status.abstainVotes = koiosResult.value.abstainVotes;
    }
    return status;
  }
  if (koiosResult.status === "fulfilled") return koiosResult.value;
  throw new Error("All public vote sources are unavailable");
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.setHeader("Cache-Control", "no-store");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const status = await readPublicVoteStatus();
    response.setHeader("Cache-Control", "public, s-maxage=45, stale-while-revalidate=300");
    return response.status(200).json({ ...status, fetchedAt: new Date().toISOString() });
  } catch (error) {
    console.error(`[vote-status] Live feed unavailable: ${error instanceof Error ? error.message : "unknown error"}`);
    response.setHeader("Cache-Control", "no-store");
    return response.status(502).json({ error: "Live vote feed unavailable" });
  }
};
