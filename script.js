const teams = [
  { name: "RealFi", url: "https://realfi.co/", logo: "realfi-logo.svg", status: "PUBLIC SUPPORT" },
  { name: "Pogun", url: "https://pogun.io/", logo: "pogun-wordmark.svg" },
  { name: "Strike Finance", url: "https://www.strikefinance.org/", logo: "strike-finance.svg" },
  { name: "Sundae Labs", url: "https://sundae.fi/", logo: "sundae-labs-dark.png" },
  { name: "CSWAP DEX", url: "https://www.cswap.fi/", logo: "cswap.svg" },
  { name: "Liqwid", url: "https://www.liqwid.finance/", logo: "liqwid.svg", status: "PUBLIC SUPPORT" },
  { name: "Indigo Labs", url: "https://indigoprotocol.io/", logo: "indigo-labs.png" },
  { name: "Midgard", url: "https://midgardprotocol.com/", logo: "midgard.png" },
  { name: "Moneta / USDM", url: "https://moneta.global/", logo: "moneta-usdm.png" },
  { name: "SteelSwap", url: "https://steelswap.io/", logo: "steelswap.png", shape: "icon" },
  { name: "Eternl", url: "https://eternl.io/", logo: "eternl.png", shape: "icon" },
  { name: "VESPR", url: "https://vespr.xyz/", logo: "vespr.svg", shape: "icon" },
  { name: "BankFi", url: "https://www.bankerlabs.io/market", logo: "bankfi.webp" },
  { name: "Cexplorer.io", url: "https://cexplorer.io/", logo: "cexplorer.svg" },
  { name: "Xerberus", url: "https://xerberus.io/", logo: "xerberus.png", shape: "icon" },
  { name: "Anvil", url: "https://ada-anvil.io/", logo: "anvil.svg" },
  { name: "FluidTokens", url: "https://fluidtokens.com/", logo: "fluidtokens.svg", shape: "icon" },
  { name: "DexHunter", url: "https://app.dexhunter.io/", logo: "dexhunter.svg", shape: "icon" },
  { name: "Flux Point Studio", url: "https://fluxpointstudios.com/", logo: "flux-point-studios.png", shape: "icon" },
  { name: "WingRiders", url: "https://www.wingriders.com/", logo: "wingriders.svg" },
  { name: "Atlas DeFi", url: "https://www.atlasdefi.org/", logo: "atlas-defi.png", shape: "icon" },
  { name: "Harmonic Labs", url: "https://www.harmoniclabs.tech/", logo: "harmonic-labs.svg" },
  { name: "Flow / Surf", url: "https://surflending.org/", logo: "flow-surf.png" },
  { name: "Pulse", url: "https://pulsecardano.org/", logo: "pulse.png" },
  { name: "Pondora", url: "https://pondora.org/", logo: "pondora.svg" },
  { name: "Dano Finance", url: "https://dano.finance/", logo: "dano-finance.svg" },
  { name: "Gravity DEX", url: "https://gravitydex.app/", logo: "gravity.png", shape: "icon" },
];

const constellation = [
  [0, 1, 18, 132, -0.7], [20, 5, 16, 118, 0.4], [39, 0, 20, 126, -0.25], [62, 5, 17, 118, 0.65], [81, 1, 17, 122, -0.4],
  [7, 18, 19, 122, 0.35], [30, 21, 18, 128, -0.6], [54, 17, 18, 132, 0.35], [78, 21, 20, 122, -0.3],
  [0, 36, 17, 120, -0.5], [20, 39, 18, 126, 0.55], [40, 34, 18, 134, -0.25], [61, 40, 18, 120, 0.45], [82, 36, 16, 122, -0.7],
  [8, 54, 19, 122, 0.3], [31, 57, 18, 118, -0.55], [55, 53, 19, 130, 0.4], [79, 57, 18, 118, -0.35],
  [0, 72, 18, 122, 0.65], [20, 76, 18, 124, -0.4], [41, 71, 18, 120, 0.3], [62, 76, 18, 126, -0.5], [83, 72, 15, 118, 0.35],
  [9, 88, 19, 122, -0.3], [32, 91, 18, 120, 0.55], [56, 87, 18, 128, -0.25], [79, 91, 19, 122, 0.35],
];

const supporters = [
  ["YUTA", "drep1y2200we9c904un36tzaearntzzl63snffuul9qsk0te4utqfkke0w", 432949136.044909, 2],
  ["CryptoCrow", "drep1ytfwpmt2fvdnyvlswyjyggpf8alwkpm7ha6cua9nsak525ssmvm57", 255170506.081448, 5],
  ["JAZZ", "drep1yt77crnmjuqkj9gcwjjsurez7s07jhwhyt4suxs3xeqftcsfrspun", 92202096.545619, 11],
  ["Phil UPLC", "drep1yg343cyuckglj48a6gpcey7fkfcy5x5f9g65wme3ne9q2mgaedmkm", 76686356.594795, 16],
  ["ranket", "drep1ygj6hupsan57ujlv6l0vw9naxzt5753uhpe79nluymqzlcq7fe4vs", 75238824.287591, 17],
  ["Martin Lang", "drep1ytwmwvtd0a8lr45ssner2tjxzv5y8q03w3606yeald9mdmgmwecja", 69417535.026659, 20],
  ["Patrick_Tobler", "drep1ygm9wxzrrdqpt0hek5kj7ys6tmsc8dycp7tkjwqxqrhjr6csq3s3t", 40052581.799154, 30],
  ["Linda - Cryptofly", "drep1yfu5d42qfu7e3euu4kkamcg3g3z2zn6sd674gkdww8ey63stlsrlt", 38368193.827081, 31],
  ["Liqwid DAO", "drep1ygctwczmpjxef8w3ljugkdth2d4upz2f2yfv9mvyxe0papswz26s6", 32167013.157596, 35],
  ["FIMI", "drep1ygeqtuysjy9s3mw3ej7essghq9rk3cnl08fehntu4jw3rtqfw96dg", 30964278.501295, 37],
  ["TERA DRep", "drep1ygtxcscvznhs2nqap9u8gtxa0dx0l6q5zhsqqlw46enwh8cttd07h", 27621570.940037, 40],
  ["Drep One", "drep1yfaaaaa270yjt6tu5skndugekprf5ykv5jshanl0c6gqx5qpstskf", 27328059.793024, 41],
  ["Blockjock (James Meidinger)", "drep1ygnypzfv2v8fmfelthahvn0rqyh54sf6z2aa5m7f3fkjgqqt8l2qq", 26135460.657706, 42],
  ["Kyle Solomon", "drep1ytzshxuma6cwrnlv2ucyclfqw3k4nu4nuudmh2z87j9hncsk9dhy4", 25208666.546324, 44],
  ["wolf31o2 (Chris Gianelloni)", "drep1yfa8r8r36x7x05htftce7qhafrn5nzzr6vazy95pzy6y5dqac0ss7", 23279040.707786, 45],
  ["DINO", "drep1ytfnmf4uftt4fe0h63xhadl0v402gr6nnhtcgrq2sas26kgaf3n5y", 21202570.621474, 49],
  ["Chris [STR8] - Straightpool", "drep1y27qjjnz9a7q6zmvpajzqpqylnka6lpkvcm9sgjrdheqt0qq6pchw", 19989229.059339, 53],
  ["忠実", "drep1ytrqcqg4qh35nwed29nzatke8jemsyelyhdencdc4hx5y0qh3adwe", 14070947.333366, 59],
  ["Corroon", "drep1yfpj9e6k9q2et7nsutu0e7ymqt0v00aj57chnltjvn0lu0s28xakv", 7286924.588149, 74],
  ["YOADA", "drep1y26sfka2km0p4xw073ujdq406wxxczhdyfh9vw7yxpfselchzkdjn", 5457153.288411, 81],
  ["Peter Horsfall", "drep1ytfas4axhm8yzrqqh4ru2uuqesu87zeq6fwg5pq8azqf7ecu4nu8s", 5335350.89702, 82],
  ["Earn Coin Pool", "drep1yg8vjs7ute7z7vyd8yez5tgjey6043djjfh8d3n7sjev35g064xxc", 4618821.184734, 87],
  ["Direct voter · …wj36md", "drep1yt4vlxgkllldxtwrmzj2ymwnc5qw0cmzvkn4nxpxkpgt4fgwj36md", 4182312.1868, 90],
  ["Direct voter · …lah2jj", "drep1y2r5kww2gj4j6l2h7065fk5jtfhzxwf37ryygkdx4qhmpvqlah2jj", 4013963.627915, 93],
  ["Cash", "drep1ygeyfh8nm03dnl5a2hxdtv09pu7uhep9l0cpg0zpr60jqys05cku2", 2862178.000631, 99],
  ["Anonymous Freeman", "drep1yfjfeq48d7ua9ur9revmjty00strnvawvc04yyz2f2ysdagx3fmsq", 2577514.842624, 107],
  ["No stress", "drep1y2t3t35yx7j8nnh3wkqn2zzhgwqksksn85zv62pjrwzjawczwgyv7", 2514370.968926, 109],
  ["Direct voter · …0sduqg", "drep1ygw6c6ljek5re3dq4vmtpneqqlvccvcgwc8l7gjljqdfa0g0sduqg", 2405146.430267, 110],
  ["ElRaulito (Smart DRep)", "drep1yd03fdd4ehdsswwlqf5kr9px3m6gvuurd4mh0f7qtl7j70s0uk7mf", 2372565.695503, 112],
  ["OCTAS DRep", "drep1y2t4hsu6zk98407q4ymj5jnm2d52rh76dv6whl88r9dts4qayakaf", 2253835.496887, 114],
  ["taichiyokoyama", "drep1yghm3canzwv736un9usqrxpfvxrm68k9hz0ppvrxe7n7lfgmsxru8", 1921198.432483, 123],
  ["This Corrosion", "drep1ytkzpmmukjy6qn6xd5skqm0ypcj5juw9rxddr5mmlzgjvtcghwqjr", 1660349.416193, 131],
  ["Direct voter · …zgtg0g", "drep1yt05vsgtruppuej5jzmswd7tj86ujanydq27qxc2nksrt8szgtg0g", 1310598.960277, 140],
  ["Next Epoch", "drep1y27a56gx9vm6yhjm9wsvvp847mt0dv4cyx93vz2r5rjytnsew90d6", 1268875.499074, 142],
  ["BreadAndRoses", "drep1yff7cs985wzeu2jjx48sld002rleqsrz8qtt3hp8whk9vnc5vq23n", 1014121.262921, 151],
  ["drep.collective", "drep1ydwtnlvdd8atlj5c5ylgw4kg5e640vyt8resattrjmwufyg4qclf7", 986987.778065, 154],
  ["BRIAN", "drep1yg7svuv02gh9j2q574jv06l4xnzwyp63effljze28qe993caj8ras", 934040.030263, 160],
  ["lido", "drep1yg7s3wsvh4jmmv5fys6hrsnrkch8x6zfamgd8nhfvhz5r2ctdy57k", 883052.843159, 164],
  ["Todd", "drep1y2edf5yw90jcpt55pm4336y40gty468gk56un56z8pu2wfcklamyv", 875417.630248, 165],
  ["Crypto Eats Legacy", "drep1ytd2mf58tfqv78z7e99fy0gnmfep0kscclnwpvx7qvwpc5srxwg5g", 589633.656998, 190],
  ["CryptoOaj", "drep1ytwlmrm6ksc8sa5fdhm63prqve6hjzvghdc3053zwz6hyeg0ayhg2", 587453.443375, 191],
  ["AustinAnthony", "drep1yg5v33dh3pvf9xelauyd5l9qsa3yd6lezf4u7kccp3xqwjspcz3py", 534774.359224, 194],
  ["A$Y", "drep1yf94hp0xetd87e5stlxwrtlqwjq6qhqx6zfdu94wdr5dfagp38nd4", 215473.709005, 247],
  ["FaridCZ", "drep1yfzzwr8jznn02mzepvs6y9n4329eskzpgygjdh4ew28szpcd5hr4f", 187196.428256, 257],
  ["Direct voter · …pavmcg", "drep1yf7nwlcvdql5kqvaqvmzyj5azqcc5s4y4wm2sm0ng3nzkkgpavmcg", 182165.669375, 258],
  ["ENVY Stake Pool", "drep1ygnwcy4wk6n7v9ksdefnhsy7jmz7q5ra0pvylan2eqfyr7qezgn8r", 159903.20067, 266],
  ["BAT Community", "drep1y2hwk9gqua527ghfdysfjuzeuh4zcad7nveqzupm84h5adqjv22cu", 131839.79263, 275],
  ["Javi M.", "drep1ytckh5852vysgdg0j5y63ga7k0q4udwfjuprgx4pjwwt8dsjehfza", 110837.847897, 281],
  ["Direct voter · …94cxus", "drep1ytghtnjnet6dyhfgsucu9fyqhdxmph2z3e967ufduh9ypwq94cxus", 107152.279491, 283],
  ["World Peace", "drep1yfgssww5qn4w5w9g2pmtj94rg0l2jtcz87w9d4m459dpqhqm9g4pu", 92547.737955, 288],
  ["Direct voter · …xvnagh", "drep1y2x9n3y7mj92klgq6klnkrvwdawhwcsl8kfc3sctff5a86cxvnagh", 15922.8029, 335],
  ["GoCharles", "drep1ygage0max8wmr48mr47d7ap9n7642njh0zsec9xrr3smhdcy4ssnp", 7974.795247, 345],
  ["Anonymous", "drep1ytm2zedqf54prqf5kfvzq56dgr7s3p4h53w8z428z6l2c8cj8e33y", 6810.30942, 347],
  ["eoniam/Chad the New Mexico DRep", "drep1yfltkppxdvpxjzv3meraz9wch4fzlmy8qxr6ey57gh0khqgug8qln", 681.576603, 365],
];

const logoField = document.querySelector("#logoField");
const drepGrid = document.querySelector("#drepGrid");
const emptyState = document.querySelector("#emptyState");
const supporterCount = document.querySelector("#supporterCount");
const drepResultCount = document.querySelector("#drepResultCount");
const heroTeamRail = document.querySelector("#heroTeamRail");

const countTargets = {
  teams: ["#heroTeamCount", "#heroTeamMetric", "#ecosystemTeamCount"],
  supporters: ["#heroYesCount", "#supporterCount"],
};

countTargets.teams.forEach((selector) => {
  document.querySelector(selector).textContent = teams.length;
});
countTargets.supporters.forEach((selector) => {
  document.querySelector(selector).textContent = supporters.length;
});

const heroTeamNames = ["RealFi", "Sundae Labs", "Liqwid", "Indigo Labs", "Midgard", "Moneta / USDM", "Anvil", "Gravity DEX"];
const heroTeams = heroTeamNames.map((name) => teams.find((team) => team.name === name)).filter(Boolean);

heroTeamRail.innerHTML = heroTeams.map((team) => `
  <a href="${team.url}" target="_blank" rel="noreferrer" aria-label="Visit ${team.name}">
    <img src="assets/ecosystem/${team.logo}" alt="${team.name}" loading="eager" />
  </a>
`).join("");

logoField.innerHTML = `
  <div class="field-core" aria-hidden="true">
    <span class="field-core__label"><span>CARDANO</span><strong>DeFi</strong><span>PRIME NETWORK</span></span>
  </div>
` + teams.map((team, index) => {
  const [x, y, w, h, rotation] = constellation[index];
  return `
  <a
    class="team-card"
    href="${team.url}"
    target="_blank"
    rel="noreferrer"
    data-shape="${team.shape || "wide"}"
    data-invert="${team.invert || false}"
    style="--x:${x};--y:${y};--w:${w};--h:${h};--base-r:${rotation}deg;--float-speed:${(7.2 + (index % 5) * .52).toFixed(2)};--delay:-${(index * 0.61).toFixed(2)}s"
    aria-label="Visit ${team.name}"
  >
    ${team.status ? `<span class="team-status">${team.status}</span>` : ""}
    <img src="assets/ecosystem/${team.logo}" alt="${team.name}" loading="${index < 8 ? "eager" : "lazy"}" />
    <span class="team-name">${String(index + 1).padStart(2, "0")} · ${team.name}</span>
  </a>
  `;
}).join("");

const orderedSupporters = [...supporters].sort((a, b) => b[2] - a[2]);

function getPowerTier(power) {
  if (power >= 100_000_000) return ["keystone", "KEYSTONE"];
  if (power >= 25_000_000) return ["major", "MAJOR"];
  if (power >= 5_000_000) return ["established", "ESTABLISHED"];
  if (power >= 1_000_000) return ["growing", "GROWING"];
  return ["community", "COMMUNITY"];
}

function formatPower(power) {
  if (power >= 1_000_000) return `${(power / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (power >= 1_000) return `${(power / 1_000).toFixed(power >= 100_000 ? 0 : 1).replace(/\.0$/, "")}K`;
  return Math.round(power).toLocaleString("en-US");
}

function renderSupporters(items) {
  drepGrid.innerHTML = items.map(([name, id, power, rank]) => {
    const [tier, tierLabel] = getPowerTier(power);
    const order = orderedSupporters.findIndex((supporter) => supporter[1] === id) + 1;
    return `
    <a
      class="drep-card"
      data-tier="${tier}"
      href="https://adastat.net/dreps/${id}"
      target="_blank"
      rel="noreferrer"
      title="${id}"
      aria-label="${name}, ${formatPower(power)} ADA voting power, verified Yes vote, open DRep record"
    >
      <span class="drep-card__top">
        <span class="drep-order">#${String(order).padStart(2, "0")} · RANK ${rank}</span>
        <span class="drep-tier">${tierLabel}</span>
      </span>
      <strong>${name}</strong>
      <span class="drep-card__bottom">
        <span class="drep-power"><b>${formatPower(power)}</b><small>ADA voting power</small></span>
        <span class="verified-mark">YES ✓</span>
      </span>
    </a>
  `;
  }).join("");
  supporterCount.textContent = supporters.length;
  drepResultCount.textContent = `Showing ${items.length} of ${supporters.length} verified Yes voters`;
  emptyState.hidden = items.length !== 0;
}

renderSupporters(orderedSupporters);

document.querySelector("#drepSearch").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLocaleLowerCase();
  renderSupporters(orderedSupporters.filter(([name, id]) => `${name} ${id}`.toLocaleLowerCase().includes(query)));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -4%" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const fieldObserver = new IntersectionObserver(([entry]) => {
  logoField.classList.toggle("is-in-view", entry.isIntersecting);
}, { rootMargin: "180px 0px" });
fieldObserver.observe(logoField);

const finePointer = window.matchMedia("(pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (finePointer && !reducedMotion) {
  const root = document.documentElement;
  const halo = document.querySelector(".cursor-halo");
  const dot = document.querySelector(".cursor-dot");
  const magneticCards = [...document.querySelectorAll(".team-card")];
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let haloX = pointerX;
  let haloY = pointerY;
  let magnetFrame = null;
  let cardSnapshots = [];
  let fieldActive = false;

  const setCardMotion = (card, x = 0, y = 0, z = 0, rotation = 0, scale = 1, opacity = 1) => {
    card.style.setProperty("--mag-x", `${x.toFixed(2)}px`);
    card.style.setProperty("--mag-y", `${y.toFixed(2)}px`);
    card.style.setProperty("--mag-z", `${z.toFixed(2)}px`);
    card.style.setProperty("--mag-r", `${rotation.toFixed(2)}deg`);
    card.style.setProperty("--mag-scale", scale.toFixed(3));
    card.style.setProperty("--mag-opacity", opacity.toFixed(3));
  };

  const measureCards = () => {
    magneticCards.forEach((card) => setCardMotion(card));
    cardSnapshots = magneticCards.map((card) => {
      const rect = card.getBoundingClientRect();
      return { card, centerX: rect.left + rect.width / 2, centerY: rect.top + rect.height / 2, width: rect.width, height: rect.height };
    });
  };

  const resetCards = () => {
    if (magnetFrame) cancelAnimationFrame(magnetFrame);
    magnetFrame = null;
    fieldActive = false;
    logoField.removeAttribute("data-active");
    magneticCards.forEach((card) => setCardMotion(card));
  };

  const updateMagnets = () => {
    magnetFrame = null;
    if (!fieldActive) return;
    const fieldRect = logoField.getBoundingClientRect();
    logoField.style.setProperty("--field-cursor-x", `${(pointerX - fieldRect.left).toFixed(1)}px`);
    logoField.style.setProperty("--field-cursor-y", `${(pointerY - fieldRect.top).toFixed(1)}px`);
    const radius = Math.min(380, Math.max(260, fieldRect.width * .42));
    const maxSpread = Math.min(32, Math.max(22, fieldRect.width * .031));

    cardSnapshots.forEach(({ card, centerX, centerY, width, height }) => {
      const dx = pointerX - centerX;
      const dy = pointerY - centerY;
      const distance = Math.hypot(dx, dy);
      const influence = Math.max(0, 1 - distance / radius);
      if (influence <= 0) return setCardMotion(card);

      const power = influence * influence * (3 - 2 * influence);
      const safeDistance = Math.max(distance, 20);
      const insideBoost = Math.max(0, 1 - distance / Math.max(width, height));
      const spread = maxSpread * power + 11 * insideBoost;
      const rowPush = (centerX >= pointerX ? 1 : -1) * maxSpread * .34 * Math.max(0, 1 - Math.abs(dy) / (height * 1.45));
      const x = Math.max(-34, Math.min(34, (-dx / safeDistance) * spread + rowPush));
      const y = (-dy / safeDistance) * spread - 7 * power;
      const z = 24 * power;
      const rotation = Math.max(-5, Math.min(5, (-dx / Math.max(width, 1)) * 5 * power));
      setCardMotion(card, x, y, z, rotation, 1 + .032 * power, 1);
    });
  };

  logoField.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    measureCards();
    fieldActive = true;
    logoField.setAttribute("data-active", "true");
  });

  logoField.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    if (!fieldActive) {
      measureCards();
      fieldActive = true;
      logoField.setAttribute("data-active", "true");
    }
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!magnetFrame) magnetFrame = requestAnimationFrame(updateMagnets);
  }, { passive: true });

  logoField.addEventListener("pointerleave", resetCards);
  logoField.addEventListener("pointercancel", resetCards);
  window.addEventListener("resize", resetCards, { passive: true });

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    root.style.setProperty("--cursor-x", `${pointerX}px`);
    root.style.setProperty("--cursor-y", `${pointerY}px`);
    dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
    document.body.classList.add("cursor-visible");
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    document.body.classList.toggle("cursor-link", Boolean(event.target.closest("a, button, input")));
  });

  let cursorFrame = null;
  const animateCursor = () => {
    haloX += (pointerX - haloX) * 0.16;
    haloY += (pointerY - haloY) * 0.16;
    halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
    if (Math.abs(pointerX - haloX) > .1 || Math.abs(pointerY - haloY) > .1) {
      cursorFrame = requestAnimationFrame(animateCursor);
    } else {
      cursorFrame = null;
    }
  };

  window.addEventListener("pointermove", () => {
    if (!cursorFrame) cursorFrame = requestAnimationFrame(animateCursor);
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-visible", "cursor-link");
    if (cursorFrame) cancelAnimationFrame(cursorFrame);
    cursorFrame = null;
  });
}
