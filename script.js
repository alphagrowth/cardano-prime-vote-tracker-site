const teams = [
  { name: "Anastasia Labs", url: "https://www.anastasialabs.com/", logo: "anastasia-labs-dark.png" },
  { name: "Sundae Labs", url: "https://sundae.fi/", logo: "sundae-labs-dark.png" },
  { name: "Input Output Global", url: "https://www.iog.io/", logo: "input-output.svg" },
  { name: "VIA Labs", url: "https://vialabs.io/", logo: "via-labs.svg" },
  { name: "Flux Point Studios", url: "https://fluxpointstudios.com/", logo: "flux-point-studios.png", shape: "icon" },
  { name: "FluidTokens", url: "https://fluidtokens.com/", logo: "fluidtokens.svg", shape: "icon" },
  { name: "Indigo Labs", url: "https://indigoprotocol.io/", logo: "indigo-labs.png" },
  { name: "Strike Finance", url: "https://www.strikefinance.org/", logo: "strike-finance.svg" },
  { name: "Artifi Labs", url: "https://artifi.finance/", logo: "artifi-labs.svg" },
  { name: "Lace Wallet", url: "https://www.lace.io/", logo: "lace-wordmark.svg" },
  { name: "Liqwid", url: "https://www.liqwid.finance/", logo: "liqwid.svg", status: "PUBLIC DISCUSSION" },
  { name: "Midnight", url: "https://midnight.network/", logo: "midnight-logo-light.svg" },
  { name: "Minswap", url: "https://minswap.org/", logo: "minswap.png", shape: "icon" },
  { name: "Modus Create", url: "https://moduscreate.com/", logo: "modus-create.svg", invert: true },
  { name: "Pogun", url: "https://pogun.io/", logo: "pogun-wordmark.svg" },
  { name: "RealFi", url: "https://realfi.co/", logo: "realfi-logo.svg", status: "PUBLIC SUPPORT" },
  { name: "Tweag", url: "https://www.tweag.io/", logo: "tweag-dark.png" },
  { name: "USDCx", url: "https://usdcx.iog.io/", logo: "usdcx.png", shape: "icon" },
  { name: "WingRiders", url: "https://www.wingriders.com/", logo: "wingriders.svg" },
];

const constellation = [
  [2, 5, 24, 132, -0.7], [31, 1, 17, 116, 0.4], [53, 7, 22, 126, -0.25], [80, 3, 18, 118, 0.65],
  [9, 25, 14, 118, 0.35], [29, 23, 16, 128, -0.6], [52, 29, 22, 132, 0.35], [77, 25, 20, 122, -0.3],
  [0, 47, 16, 116, -0.5], [21, 43, 18, 126, 0.55], [42, 50, 20, 134, -0.25], [67, 44, 18, 120, 0.45], [86, 48, 12, 116, -0.7],
  [9, 68, 20, 122, 0.3], [35, 72, 17, 118, -0.55], [59, 68, 18, 130, 0.4], [81, 73, 17, 118, -0.35],
  [22, 89, 14, 116, 0.65], [59, 88, 24, 124, -0.4],
];

const supporters = [
  ["YUTA", "drep1y2200we9c904un36tzaearntzzl63snffuul9qsk0te4utqfkke0w", 2],
  ["CryptoCrow", "drep1ytfwpmt2fvdnyvlswyjyggpf8alwkpm7ha6cua9nsak525ssmvm57", 5],
  ["JAZZ", "drep1yt77crnmjuqkj9gcwjjsurez7s07jhwhyt4suxs3xeqftcsfrspun", 11],
  ["Phil UPLC", "drep1yg343cyuckglj48a6gpcey7fkfcy5x5f9g65wme3ne9q2mgaedmkm", 16],
  ["ranket", "drep1ygj6hupsan57ujlv6l0vw9naxzt5753uhpe79nluymqzlcq7fe4vs", 17],
  ["Martin Lang", "drep1ytwmwvtd0a8lr45ssner2tjxzv5y8q03w3606yeald9mdmgmwecja", 20],
  ["Patrick_Tobler", "drep1ygm9wxzrrdqpt0hek5kj7ys6tmsc8dycp7tkjwqxqrhjr6csq3s3t", 30],
  ["Linda - Cryptofly", "drep1yfu5d42qfu7e3euu4kkamcg3g3z2zn6sd674gkdww8ey63stlsrlt", 31],
  ["Liqwid DAO", "drep1ygctwczmpjxef8w3ljugkdth2d4upz2f2yfv9mvyxe0papswz26s6", 35],
  ["FIMI", "drep1ygeqtuysjy9s3mw3ej7essghq9rk3cnl08fehntu4jw3rtqfw96dg", 37],
  ["TERA DRep", "drep1ygtxcscvznhs2nqap9u8gtxa0dx0l6q5zhsqqlw46enwh8cttd07h", 40],
  ["Drep One", "drep1yfaaaaa270yjt6tu5skndugekprf5ykv5jshanl0c6gqx5qpstskf", 41],
  ["Blockjock (James Meidinger)", "drep1ygnypzfv2v8fmfelthahvn0rqyh54sf6z2aa5m7f3fkjgqqt8l2qq", 42],
  ["Kyle Solomon", "drep1ytzshxuma6cwrnlv2ucyclfqw3k4nu4nuudmh2z87j9hncsk9dhy4", 44],
  ["wolf31o2 (Chris Gianelloni)", "drep1yfa8r8r36x7x05htftce7qhafrn5nzzr6vazy95pzy6y5dqac0ss7", 45],
  ["DINO", "drep1ytfnmf4uftt4fe0h63xhadl0v402gr6nnhtcgrq2sas26kgaf3n5y", 49],
  ["Chris [STR8] - Straightpool", "drep1y27qjjnz9a7q6zmvpajzqpqylnka6lpkvcm9sgjrdheqt0qq6pchw", 53],
  ["忠実", "drep1ytrqcqg4qh35nwed29nzatke8jemsyelyhdencdc4hx5y0qh3adwe", 59],
  ["Corroon", "drep1yfpj9e6k9q2et7nsutu0e7ymqt0v00aj57chnltjvn0lu0s28xakv", 74],
  ["YOADA", "drep1y26sfka2km0p4xw073ujdq406wxxczhdyfh9vw7yxpfselchzkdjn", 81],
  ["Peter Horsfall", "drep1ytfas4axhm8yzrqqh4ru2uuqesu87zeq6fwg5pq8azqf7ecu4nu8s", 82],
  ["Earn Coin Pool", "drep1yg8vjs7ute7z7vyd8yez5tgjey6043djjfh8d3n7sjev35g064xxc", 87],
  ["Direct voter · …wj36md", "drep1yt4vlxgkllldxtwrmzj2ymwnc5qw0cmzvkn4nxpxkpgt4fgwj36md", 90],
  ["Direct voter · …lah2jj", "drep1y2r5kww2gj4j6l2h7065fk5jtfhzxwf37ryygkdx4qhmpvqlah2jj", 93],
  ["Cash", "drep1ygeyfh8nm03dnl5a2hxdtv09pu7uhep9l0cpg0zpr60jqys05cku2", 99],
  ["Anonymous Freeman", "drep1yfjfeq48d7ua9ur9revmjty00strnvawvc04yyz2f2ysdagx3fmsq", 107],
  ["No stress", "drep1y2t3t35yx7j8nnh3wkqn2zzhgwqksksn85zv62pjrwzjawczwgyv7", 109],
  ["Direct voter · …0sduqg", "drep1ygw6c6ljek5re3dq4vmtpneqqlvccvcgwc8l7gjljqdfa0g0sduqg", 110],
  ["ElRaulito (Smart DRep)", "drep1yd03fdd4ehdsswwlqf5kr9px3m6gvuurd4mh0f7qtl7j70s0uk7mf", 112],
  ["OCTAS DRep", "drep1y2t4hsu6zk98407q4ymj5jnm2d52rh76dv6whl88r9dts4qayakaf", 114],
  ["taichiyokoyama", "drep1yghm3canzwv736un9usqrxpfvxrm68k9hz0ppvrxe7n7lfgmsxru8", 123],
  ["This Corrosion", "drep1ytkzpmmukjy6qn6xd5skqm0ypcj5juw9rxddr5mmlzgjvtcghwqjr", 131],
  ["Direct voter · …zgtg0g", "drep1yt05vsgtruppuej5jzmswd7tj86ujanydq27qxc2nksrt8szgtg0g", 140],
  ["Next Epoch", "drep1y27a56gx9vm6yhjm9wsvvp847mt0dv4cyx93vz2r5rjytnsew90d6", 142],
  ["BreadAndRoses", "drep1yff7cs985wzeu2jjx48sld002rleqsrz8qtt3hp8whk9vnc5vq23n", 151],
  ["drep.collective", "drep1ydwtnlvdd8atlj5c5ylgw4kg5e640vyt8resattrjmwufyg4qclf7", 154],
  ["BRIAN", "drep1yg7svuv02gh9j2q574jv06l4xnzwyp63effljze28qe993caj8ras", 160],
  ["lido", "drep1yg7s3wsvh4jmmv5fys6hrsnrkch8x6zfamgd8nhfvhz5r2ctdy57k", 164],
  ["Todd", "drep1y2edf5yw90jcpt55pm4336y40gty468gk56un56z8pu2wfcklamyv", 165],
  ["Crypto Eats Legacy", "drep1ytd2mf58tfqv78z7e99fy0gnmfep0kscclnwpvx7qvwpc5srxwg5g", 190],
  ["CryptoOaj", "drep1ytwlmrm6ksc8sa5fdhm63prqve6hjzvghdc3053zwz6hyeg0ayhg2", 191],
  ["AustinAnthony", "drep1yg5v33dh3pvf9xelauyd5l9qsa3yd6lezf4u7kccp3xqwjspcz3py", 194],
  ["A$Y", "drep1yf94hp0xetd87e5stlxwrtlqwjq6qhqx6zfdu94wdr5dfagp38nd4", 247],
  ["FaridCZ", "drep1yfzzwr8jznn02mzepvs6y9n4329eskzpgygjdh4ew28szpcd5hr4f", 257],
  ["Direct voter · …pavmcg", "drep1yf7nwlcvdql5kqvaqvmzyj5azqcc5s4y4wm2sm0ng3nzkkgpavmcg", 258],
  ["ENVY Stake Pool", "drep1ygnwcy4wk6n7v9ksdefnhsy7jmz7q5ra0pvylan2eqfyr7qezgn8r", 266],
  ["BAT Community", "drep1y2hwk9gqua527ghfdysfjuzeuh4zcad7nveqzupm84h5adqjv22cu", 275],
  ["Javi M.", "drep1ytckh5852vysgdg0j5y63ga7k0q4udwfjuprgx4pjwwt8dsjehfza", 281],
  ["Direct voter · …94cxus", "drep1ytghtnjnet6dyhfgsucu9fyqhdxmph2z3e967ufduh9ypwq94cxus", 283],
  ["World Peace", "drep1yfgssww5qn4w5w9g2pmtj94rg0l2jtcz87w9d4m459dpqhqm9g4pu", 288],
  ["Direct voter · …xvnagh", "drep1y2x9n3y7mj92klgq6klnkrvwdawhwcsl8kfc3sctff5a86cxvnagh", 335],
  ["GoCharles", "drep1ygage0max8wmr48mr47d7ap9n7642njh0zsec9xrr3smhdcy4ssnp", 345],
  ["Anonymous", "drep1ytm2zedqf54prqf5kfvzq56dgr7s3p4h53w8z428z6l2c8cj8e33y", 347],
  ["eoniam/Chad the New Mexico DRep", "drep1yfltkppxdvpxjzv3meraz9wch4fzlmy8qxr6ey57gh0khqgug8qln", 365],
];

const logoField = document.querySelector("#logoField");
const drepGrid = document.querySelector("#drepGrid");
const emptyState = document.querySelector("#emptyState");
const supporterCount = document.querySelector("#supporterCount");

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
    <img src="assets/ecosystem/${team.logo}" alt="${team.name}" loading="lazy" />
    <span class="team-name">${String(index + 1).padStart(2, "0")} · ${team.name}</span>
  </a>
  `;
}).join("");

function renderSupporters(items) {
  drepGrid.innerHTML = items.map(([name, id, rank]) => `
    <a
      class="drep-card"
      href="https://adastat.net/dreps/${id}"
      target="_blank"
      rel="noreferrer"
      title="${id}"
      aria-label="${name}, verified Yes vote, open DRep record"
    >
      <strong>${name}</strong>
      <span class="drep-meta"><span>RANK ${rank}</span><span class="verified-mark">YES ✓</span></span>
    </a>
  `).join("");
  supporterCount.textContent = supporters.length;
  emptyState.hidden = items.length !== 0;
}

renderSupporters(supporters);

document.querySelector("#drepSearch").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLocaleLowerCase();
  renderSupporters(supporters.filter(([name, id]) => `${name} ${id}`.toLocaleLowerCase().includes(query)));
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
    const maxSpread = Math.min(38, Math.max(25, fieldRect.width * .036));

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
      const x = Math.max(-40, Math.min(40, (-dx / safeDistance) * spread + rowPush));
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
