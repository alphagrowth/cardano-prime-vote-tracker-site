const teams = [
  { name: "Anvil", url: "https://ada-anvil.io/", logo: "anvil.svg" },
  { name: "Atlas", url: "https://www.atlasdefi.org/", logo: "atlas-defi.png", shape: "icon" },
  { name: "BankFi", url: "https://www.bankerlabs.io/market", logo: "bankfi.webp" },
  { name: "Butane", url: "https://butane.dev/", logoUrl: "https://github.com/butaneprotocol.png?size=400", shape: "icon" },
  { name: "CEXplorer", url: "https://cexplorer.io/", logo: "cexplorer.svg" },
  { name: "CSWAP", url: "https://www.cswap.fi/", logo: "cswap.svg" },
  { name: "Dano Finance", url: "https://dano.finance/", logo: "dano-finance.svg" },
  { name: "DexHunter", url: "https://app.dexhunter.io/", logo: "dexhunter.svg", shape: "icon" },
  { name: "Eternal", url: "https://eternl.io/", logo: "eternl.png", shape: "icon" },
  { name: "Flow", url: "https://surflending.org/", logo: "flow-surf.png" },
  { name: "Fluid", url: "https://fluidtokens.com/", logo: "fluidtokens.svg", shape: "icon" },
  { name: "Flux Point Studio", url: "https://fluxpointstudios.com/", logo: "flux-point-studios.png", shape: "icon" },
  { name: "Gravity", url: "https://gravitydex.app/", logo: "gravity.png", shape: "icon" },
  { name: "Indigo", url: "https://indigoprotocol.io/", logo: "indigo-labs.png" },
  { name: "Lace", url: "https://www.lace.io/", logo: "lace-wordmark.svg" },
  { name: "Liqwid", url: "https://www.liqwid.finance/", logo: "liqwid.svg" },
  {
    name: "Midgard Labs",
    url: "https://x.com/phil_uplc/status/2068021257434542489",
    logo: "midgard.png",
    linkLabel: "View the public support source for Midgard Labs",
  },
  { name: "Moneta/USDM", url: "https://moneta.global/", logo: "moneta-usdm.png" },
  { name: "Pandora", url: "https://pondora.org/", logo: "pondora.svg" },
  { name: "Pogun", url: "https://pogun.io/", logo: "pogun-wordmark.svg" },
  { name: "Pulse", url: "https://pulsecardano.org/", logo: "pulse.png" },
  { name: "RealFi", url: "https://realfi.co/", logo: "realfi-logo.svg" },
  { name: "SteelSwap", url: "https://steelswap.io/", logo: "steelswap.png", shape: "icon" },
  { name: "Strike Finance", url: "https://www.strikefinance.org/", logo: "strike-finance.svg" },
  { name: "Sundae Labs", url: "https://sundae.fi/", logo: "sundae-labs-dark.png" },
  { name: "Vespr", url: "https://vespr.xyz/", logo: "vespr.svg", shape: "icon" },
  { name: "Wingriders", url: "https://www.wingriders.com/", logo: "wingriders.svg" },
  { name: "Xerberus", url: "https://xerberus.io/", logo: "xerberus.png", shape: "icon" },
];

const constellation = [
  [0, 3, 15.3, 112, -0.28], [16.8, 2, 15.5, 108, 0.2], [33.6, 3, 15.4, 114, -0.18], [50.4, 2, 15.6, 110, 0.28], [67.2, 3, 15.3, 112, -0.24], [84, 2, 15.5, 108, 0.2],
  [8.4, 21, 15.5, 110, 0.18], [25.2, 20, 15.3, 114, -0.3], [42, 21, 15.6, 112, 0.22], [58.8, 20, 15.4, 108, -0.2], [75.6, 21, 15.5, 112, 0.26],
  [0, 39, 15.4, 110, -0.22], [16.8, 38, 15.5, 114, 0.26], [33.6, 39, 15.3, 116, -0.18], [50.4, 38, 15.6, 110, 0.2], [67.2, 39, 15.4, 112, -0.28], [84, 38, 15.5, 108, 0.18],
  [8.4, 57, 15.5, 112, 0.22], [25.2, 56, 15.3, 108, -0.26], [42, 57, 15.6, 114, 0.18], [58.8, 56, 15.4, 110, -0.22], [75.6, 57, 15.5, 112, 0.2],
  [0, 75, 15.4, 110, -0.18], [16.8, 74, 15.5, 114, 0.24], [33.6, 75, 15.3, 112, -0.22], [50.4, 74, 15.6, 108, 0.18], [67.2, 75, 15.4, 112, -0.24], [84, 74, 15.5, 110, 0.2],
];

const CONSTELLATION_COLUMNS = 6;
const CONSTELLATION_OVERFLOW_ROW_HEIGHT = 132;
const CONSTELLATION_OVERFLOW_FIELD_SPACE = 154;

function getConstellationSlot(index) {
  const slot = constellation[index];
  if (slot) {
    const [x, y, w, h, rotation] = slot;
    return { x, y, cardLeft: `${x}%`, cardTop: `${y}%`, w, h, rotation };
  }

  const overflowIndex = index - constellation.length;
  const column = overflowIndex % CONSTELLATION_COLUMNS;
  const row = Math.floor(overflowIndex / CONSTELLATION_COLUMNS);
  const rotations = [-0.18, 0.22, -0.24, 0.16, -0.2, 0.26];

  const x = Number((column * 16.8).toFixed(1));
  return {
    x,
    y: 0,
    cardLeft: `${x}%`,
    cardTop: `calc(var(--constellation-base-height) - 34px + ${row * CONSTELLATION_OVERFLOW_ROW_HEIGHT}px)`,
    w: 15.4 + (column % 2) * 0.2,
    h: 110 + (column % 3) * 2,
    rotation: rotations[column],
  };
}

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

const supporterProfiles = {
  "drep1y2200we9c904un36tzaearntzzl63snffuul9qsk0te4utqfkke0w": { image: "assets/dreps/yuta.png", kind: "person", source: "https://x.com/yuta_cryptox" },
  "drep1ytfwpmt2fvdnyvlswyjyggpf8alwkpm7ha6cua9nsak525ssmvm57": { image: "assets/dreps/crypto-crow.jpg", kind: "person", source: "https://x.com/jasonappleton" },
  "drep1yt77crnmjuqkj9gcwjjsurez7s07jhwhyt4suxs3xeqftcsfrspun": { image: "assets/dreps/jazz.jpg", kind: "person", source: "https://x.com/Hideki_Takeshi" },
  "drep1yg343cyuckglj48a6gpcey7fkfcy5x5f9g65wme3ne9q2mgaedmkm": { image: "assets/dreps/phil-uplc.jpg", kind: "person", source: "https://x.com/phil_uplc" },
  "drep1ytwmwvtd0a8lr45ssner2tjxzv5y8q03w3606yeald9mdmgmwecja": { image: "assets/dreps/martin-lang.jpg", kind: "person", source: "https://forum.cardano.org/t/martin-lang-individual-introduction/142574" },
  "drep1ygm9wxzrrdqpt0hek5kj7ys6tmsc8dycp7tkjwqxqrhjr6csq3s3t": { image: "assets/dreps/patrick-tobler.jpg", kind: "person", source: "https://x.com/Padierfind" },
  "drep1yfu5d42qfu7e3euu4kkamcg3g3z2zn6sd674gkdww8ey63stlsrlt": { image: "assets/dreps/linda-cryptofly.jpg", kind: "person", source: "https://x.com/Cryptofly777" },
  "drep1ygctwczmpjxef8w3ljugkdth2d4upz2f2yfv9mvyxe0papswz26s6": { image: "assets/ecosystem/liqwid.svg", kind: "logo", source: "https://x.com/liqwidfinance" },
  "drep1ygeqtuysjy9s3mw3ej7essghq9rk3cnl08fehntu4jw3rtqfw96dg": { image: "assets/dreps/fimi.png", kind: "logo", source: "https://fimi.vn/" },
  "drep1ygtxcscvznhs2nqap9u8gtxa0dx0l6q5zhsqqlw46enwh8cttd07h": { image: "assets/dreps/tera.png", kind: "logo", source: "https://cardano-tera.com/" },
  "drep1yfaaaaa270yjt6tu5skndugekprf5ykv5jshanl0c6gqx5qpstskf": { image: "assets/dreps/drep-one.png", kind: "person", source: "https://x.com/stakenuts" },
  "drep1ygnypzfv2v8fmfelthahvn0rqyh54sf6z2aa5m7f3fkjgqqt8l2qq": { image: "assets/dreps/blockjock.jpg", kind: "person", source: "https://x.com/blockjock2017" },
  "drep1ytzshxuma6cwrnlv2ucyclfqw3k4nu4nuudmh2z87j9hncsk9dhy4": { image: "assets/dreps/kyle-solomon.jpg", kind: "person", source: "https://x.com/ADAFrog_Pool" },
  "drep1yfa8r8r36x7x05htftce7qhafrn5nzzr6vazy95pzy6y5dqac0ss7": { image: "assets/dreps/wolf31o2.png", kind: "person", source: "https://x.com/wolf31o2" },
  "drep1ytfnmf4uftt4fe0h63xhadl0v402gr6nnhtcgrq2sas26kgaf3n5y": { image: "assets/dreps/dino.jpg", kind: "logo", source: "https://x.com/SPO_DINO" },
  "drep1y27qjjnz9a7q6zmvpajzqpqylnka6lpkvcm9sgjrdheqt0qq6pchw": { image: "assets/dreps/straightpool.svg", kind: "logo", source: "https://x.com/Straightpool4" },
  "drep1yfpj9e6k9q2et7nsutu0e7ymqt0v00aj57chnltjvn0lu0s28xakv": { image: "assets/dreps/corroon.jpg", kind: "person", source: "https://x.com/corroonian" },
  "drep1y26sfka2km0p4xw073ujdq406wxxczhdyfh9vw7yxpfselchzkdjn": { image: "assets/dreps/yoada.png", kind: "logo", source: "https://x.com/YoadaStakepool" },
  "drep1ytfas4axhm8yzrqqh4ru2uuqesu87zeq6fwg5pq8azqf7ecu4nu8s": { image: "assets/dreps/peter-horsfall.jpg", kind: "person", source: "https://x.com/blockchain_pete" },
  "drep1yg8vjs7ute7z7vyd8yez5tgjey6043djjfh8d3n7sjev35g064xxc": { image: "assets/dreps/earn-coin-pool.jpg", kind: "logo", source: "https://x.com/earncoinpool" },
  "drep1ygeyfh8nm03dnl5a2hxdtv09pu7uhep9l0cpg0zpr60jqys05cku2": { image: "assets/dreps/cash.png", kind: "person", source: "https://x.com/CashAnvil" },
  "drep1y2t3t35yx7j8nnh3wkqn2zzhgwqksksn85zv62pjrwzjawczwgyv7": { image: "assets/dreps/no-stress.jpg", kind: "logo", source: "https://x.com/EPOCHpool" },
  "drep1y2t4hsu6zk98407q4ymj5jnm2d52rh76dv6whl88r9dts4qayakaf": { image: "assets/dreps/octas.jpg", kind: "logo", source: "https://www.cardanocube.com/governance/dreps/drep1y2t4hsu6zk98407q4ymj5jnm2d52rh76dv6whl88r9dts4qayakaf" },
  "drep1yghm3canzwv736un9usqrxpfvxrm68k9hz0ppvrxe7n7lfgmsxru8": { image: "assets/dreps/taichiyokoyama.jpg", kind: "person", source: "https://x.com/taichiyokoyama" },
  "drep1ytkzpmmukjy6qn6xd5skqm0ypcj5juw9rxddr5mmlzgjvtcghwqjr": { image: "assets/dreps/this-corrosion.jpg", kind: "person", source: "https://www.cardanocube.com/governance/dreps/drep1ytkzpmmukjy6qn6xd5skqm0ypcj5juw9rxddr5mmlzgjvtcghwqjr" },
  "drep1y27a56gx9vm6yhjm9wsvvp847mt0dv4cyx93vz2r5rjytnsew90d6": { image: "assets/dreps/next-epoch.webp", kind: "person", position: "50% 24%", source: "https://x.com/Next_Epoch" },
  "drep1ydwtnlvdd8atlj5c5ylgw4kg5e640vyt8resattrjmwufyg4qclf7": { image: "assets/dreps/drep-collective.jpg", kind: "logo", source: "https://www.cardanocube.com/governance/dreps/drep1ydwtnlvdd8atlj5c5ylgw4kg5e640vyt8resattrjmwufyg4qclf7" },
  "drep1yg7svuv02gh9j2q574jv06l4xnzwyp63effljze28qe993caj8ras": { image: "assets/dreps/brian.jpg", kind: "person", source: "https://x.com/Brian67587820" },
  "drep1yg7s3wsvh4jmmv5fys6hrsnrkch8x6zfamgd8nhfvhz5r2ctdy57k": { image: "assets/dreps/lido-nation.jpg", kind: "logo", source: "https://x.com/LidoNation" },
  "drep1ytd2mf58tfqv78z7e99fy0gnmfep0kscclnwpvx7qvwpc5srxwg5g": { image: "assets/dreps/crypto-eats.jpg", kind: "person", source: "https://x.com/cryptoeatlegacy" },
  "drep1ytwlmrm6ksc8sa5fdhm63prqve6hjzvghdc3053zwz6hyeg0ayhg2": { image: "assets/dreps/crypto-oaj.jpg", kind: "person", source: "https://x.com/omid_ajorlou" },
  "drep1yg5v33dh3pvf9xelauyd5l9qsa3yd6lezf4u7kccp3xqwjspcz3py": { image: "assets/dreps/austin-anthony.jpg", kind: "person", source: "https://x.com/CardanoDrep" },
  "drep1yf94hp0xetd87e5stlxwrtlqwjq6qhqx6zfdu94wdr5dfagp38nd4": { image: "assets/dreps/asy.jpg", kind: "person", source: "https://x.com/ashiyapool" },
  "drep1yfzzwr8jznn02mzepvs6y9n4329eskzpgygjdh4ew28szpcd5hr4f": { image: "assets/dreps/faridcz.webp", kind: "person", source: "https://www.cardanoeco.cz/" },
  "drep1yf7nwlcvdql5kqvaqvmzyj5azqcc5s4y4wm2sm0ng3nzkkgpavmcg": { image: "assets/dreps/rcorreia.png", kind: "person", source: "https://x.com/paeancorreia" },
  "drep1ygnwcy4wk6n7v9ksdefnhsy7jmz7q5ra0pvylan2eqfyr7qezgn8r": { image: "assets/dreps/envy.jpg", kind: "logo", source: "https://x.com/envystakepool" },
  "drep1y2hwk9gqua527ghfdysfjuzeuh4zcad7nveqzupm84h5adqjv22cu": { image: "assets/dreps/bat-community.jpg", kind: "logo", source: "https://x.com/BAT_Community" },
  "drep1yfgssww5qn4w5w9g2pmtj94rg0l2jtcz87w9d4m459dpqhqm9g4pu": { image: "assets/dreps/world-peace.svg", kind: "logo", source: "https://x.com/robert_drep" },
  "drep1ytm2zedqf54prqf5kfvzq56dgr7s3p4h53w8z428z6l2c8cj8e33y": { image: "assets/dreps/anonymous.jpg", kind: "person", source: "https://x.com/AnonymousDRep" },
  "drep1yfltkppxdvpxjzv3meraz9wch4fzlmy8qxr6ey57gh0khqgug8qln": { image: "assets/dreps/chad-new-mexico.jpg", kind: "person", source: "https://adastat.net/dreps/drep1yfltkppxdvpxjzv3meraz9wch4fzlmy8qxr6ey57gh0khqgug8qln" },
};

const logoField = document.querySelector("#logoField");
const drepGrid = document.querySelector("#drepGrid");
const emptyState = document.querySelector("#emptyState");
const supporterCount = document.querySelector("#supporterCount");
const drepResultCount = document.querySelector("#drepResultCount");
const liveVoteCore = document.querySelector("#liveVoteCore");
const liveVoteEyebrow = document.querySelector("#liveVoteEyebrow");
const liveYesPercent = document.querySelector("#liveYesPercent");
const liveVoteLabel = document.querySelector("#liveVoteLabel");
const liveVoteAnnouncement = document.querySelector("#liveVoteAnnouncement");
const heroYesCount = document.querySelector("#heroYesCount");
const supporterLiveCount = document.querySelector("#supporterLiveCount");
const orbitTeamCount = document.querySelector("#orbitTeamCount");
const orbitYesCount = document.querySelector("#orbitYesCount");
const overflowConstellationRows = Math.ceil(Math.max(0, teams.length - constellation.length) / CONSTELLATION_COLUMNS);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const countFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const counterStates = new WeakMap();
const counterElements = [...document.querySelectorAll("[data-count-animate]")];

if (logoField) {
  logoField.style.setProperty("--constellation-extra-space", `${overflowConstellationRows * CONSTELLATION_OVERFLOW_FIELD_SPACE}px`);
}

function getCounterState(element) {
  let state = counterStates.get(element);
  if (!state) {
    state = { frame: null, hasPlayed: false, motionId: 0, motionTimer: null, target: null, value: null, visible: false };
    counterStates.set(element, state);
  }
  return state;
}

function renderCounter(element, value) {
  const formattedValue = countFormatter.format(value);
  const state = getCounterState(element);
  state.value = value;
  element.textContent = formattedValue;
  if (element.dataset.countLabel) element.setAttribute("aria-label", `${formattedValue} ${element.dataset.countLabel}`);
}

function pulseCounter(element, state) {
  const motionId = ++state.motionId;
  element.classList.remove("is-counting");
  if (state.motionTimer) window.clearTimeout(state.motionTimer);
  requestAnimationFrame(() => {
    if (state.motionId === motionId) element.classList.add("is-counting");
  });
  state.motionTimer = window.setTimeout(() => {
    if (state.motionId === motionId) element.classList.remove("is-counting");
  }, 820);
}

function animateCounter(element, target, { from = 0 } = {}) {
  const state = getCounterState(element);
  if (state.frame) cancelAnimationFrame(state.frame);

  if (prefersReducedMotion || from === target) {
    renderCounter(element, target);
    state.frame = null;
    state.hasPlayed = true;
    return;
  }

  state.hasPlayed = false;
  pulseCounter(element, state);
  const startedAt = performance.now();
  const duration = 720;
  const step = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 4);
    renderCounter(element, Math.round(from + (target - from) * eased));
    if (progress < 1) {
      state.frame = requestAnimationFrame(step);
      return;
    }
    renderCounter(element, target);
    state.frame = null;
    state.hasPlayed = true;
  };
  state.frame = requestAnimationFrame(step);
}

function setCountTarget(element, value) {
  if (!element) return;
  const parsedValue = Number(value);
  if (!Number.isFinite(parsedValue) || parsedValue < 0) return;
  const target = Math.round(parsedValue);
  const state = getCounterState(element);
  const changed = state.target !== target;
  state.target = target;
  element.dataset.countTarget = String(target);

  if (prefersReducedMotion) {
    renderCounter(element, target);
    state.hasPlayed = true;
    return;
  }

  if (!state.visible) {
    if (state.value === null) renderCounter(element, 0);
    return;
  }

  if (state.frame || (!changed && state.hasPlayed)) return;
  animateCounter(element, target, { from: state.hasPlayed && state.value !== null ? state.value : 0 });
}

function replayCounter(element) {
  const state = getCounterState(element);
  if (prefersReducedMotion || !state.visible || state.target === null) return;
  animateCounter(element, state.target, { from: 0 });
}

const counterObserver = typeof IntersectionObserver === "undefined" || prefersReducedMotion
  ? null
  : new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const state = getCounterState(entry.target);
      state.visible = true;
      if (state.target !== null && !state.hasPlayed && !state.frame) animateCounter(entry.target, state.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.55 });

counterElements.forEach((element) => {
  const state = getCounterState(element);
  if (counterObserver) counterObserver.observe(element);
  else state.visible = true;
  element.addEventListener("pointerenter", () => replayCounter(element), { passive: true });
});

const countTargets = {
  teams: ["#heroTeamMetric", "#ecosystemTeamCount", "#orbitTeamCount"],
  supporters: ["#supporterCount"],
};

countTargets.teams.forEach((selector) => {
  setCountTarget(document.querySelector(selector), teams.length);
});
countTargets.supporters.forEach((selector) => {
  setCountTarget(document.querySelector(selector), supporters.length);
});

let lastLiveVoteStatus = null;
let lastAnnouncedVoteKey = "";
let liveVoteRefreshInFlight = false;

async function refreshLiveVoteStatus() {
  if (!liveVoteCore || !liveVoteEyebrow || !liveYesPercent || !liveVoteLabel) return;
  if (liveVoteRefreshInFlight) return;

  liveVoteRefreshInFlight = true;
  liveVoteCore.setAttribute("aria-busy", "true");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12_000);

  try {
    const response = await fetch("api/vote-status", {
      headers: { Accept: "application/json" },
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Vote feed returned ${response.status}`);

    const status = await response.json();
    const yesPercent = Number(status.yesPercent);
    if (!Number.isFinite(yesPercent) || yesPercent < 0 || yesPercent > 100) {
      throw new Error("Vote feed returned an invalid percentage");
    }

    const yesVotes = status.yesVotes === null || status.yesVotes === "" ? null : Number(status.yesVotes);
    const hasValidYesVotes = Number.isSafeInteger(yesVotes) && yesVotes >= 0;
    const sourceName = ["AdaStat", "GovTool", "Koios"].includes(status.source) ? status.source : "public on-chain data";
    const sourceLabel = sourceName.toUpperCase();
    const refreshedAt = new Date(status.fetchedAt);
    const refreshedLabel = Number.isNaN(refreshedAt.getTime())
      ? "just now"
      : refreshedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const voterDetail = hasValidYesVotes ? ` ${yesVotes} DReps currently vote Yes.` : "";
    const accessibleStatus = `${yesPercent.toFixed(2)}% of eligible DRep voting power is Yes.${voterDetail} Live from ${sourceName}, refreshed ${refreshedLabel}.`;

    lastLiveVoteStatus = { yesPercent, yesVotes: hasValidYesVotes ? yesVotes : null, accessibleStatus, sourceName };

    liveVoteEyebrow.textContent = `LIVE · ${sourceLabel}`;
    liveYesPercent.textContent = `${yesPercent.toFixed(2)}%`;
    liveVoteLabel.textContent = "DREP YES POWER";
    liveVoteCore.dataset.feedState = "live";
    liveVoteCore.setAttribute("aria-label", `${accessibleStatus} Open the live AdaStat tracker.`);
    liveVoteCore.setAttribute("title", accessibleStatus);
    liveVoteCore.setAttribute("aria-busy", "false");
    if (hasValidYesVotes) {
      setCountTarget(heroYesCount, yesVotes);
      setCountTarget(supporterLiveCount, yesVotes);
      setCountTarget(orbitYesCount, yesVotes);
    }

    const announcementKey = `${yesPercent.toFixed(2)}:${hasValidYesVotes ? yesVotes : "unknown"}`;
    if (liveVoteAnnouncement && announcementKey !== lastAnnouncedVoteKey) {
      liveVoteAnnouncement.textContent = accessibleStatus;
      lastAnnouncedVoteKey = announcementKey;
    }
  } catch (error) {
    if (lastLiveVoteStatus) {
      liveVoteEyebrow.textContent = `${lastLiveVoteStatus.sourceName.toUpperCase()} · LAST LIVE`;
      liveVoteLabel.textContent = "RECONNECTING";
      liveVoteCore.dataset.feedState = "stale";
      liveVoteCore.setAttribute("aria-label", `${lastLiveVoteStatus.accessibleStatus} The live refresh is temporarily unavailable. Open the AdaStat tracker.`);
      liveVoteCore.setAttribute("title", "Showing the last live value while reconnecting to AdaStat");
      if (liveVoteAnnouncement && lastAnnouncedVoteKey !== `stale:${lastLiveVoteStatus.yesPercent}`) {
        liveVoteAnnouncement.textContent = `The live ${lastLiveVoteStatus.sourceName} refresh is temporarily unavailable. Showing the last successful value.`;
        lastAnnouncedVoteKey = `stale:${lastLiveVoteStatus.yesPercent}`;
      }
    } else {
      liveVoteEyebrow.textContent = "ADASTAT";
      liveYesPercent.textContent = "--.--%";
      liveVoteLabel.textContent = "FEED UNAVAILABLE";
      liveVoteCore.dataset.feedState = "error";
      liveVoteCore.setAttribute("aria-label", "The live DRep Yes voting-power feed is temporarily unavailable. Open the AdaStat tracker.");
      liveVoteCore.setAttribute("title", "Live vote feed temporarily unavailable");
      if (liveVoteAnnouncement && lastAnnouncedVoteKey !== "error") {
        liveVoteAnnouncement.textContent = "The live AdaStat vote feed is temporarily unavailable.";
        lastAnnouncedVoteKey = "error";
      }
    }
    liveVoteCore.setAttribute("aria-busy", "false");
  } finally {
    window.clearTimeout(timeout);
    liveVoteRefreshInFlight = false;
  }
}

if (liveVoteCore) {
  refreshLiveVoteStatus();
  window.setInterval(refreshLiveVoteStatus, 60_000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshLiveVoteStatus();
  });
}

logoField.innerHTML = `
  <div class="field-core" aria-hidden="true">
    <span class="field-core__label"><span>CARDANO</span><strong>DeFi</strong><span>PRIME NETWORK</span></span>
  </div>
` + teams.map((team, index) => {
  const { x, y, cardLeft, cardTop, w, h, rotation } = getConstellationSlot(index);
  const logoSource = team.logoUrl || `assets/ecosystem/${team.logo}`;
  return `
  <a
    class="team-card"
    href="${team.url}"
    target="_blank"
    rel="noreferrer"
    data-shape="${team.shape || "wide"}"
    data-invert="${team.invert || false}"
    style="--x:${x};--y:${y};--card-left:${cardLeft};--card-top:${cardTop};--w:${w};--h:${h};--base-r:${rotation}deg;--float-speed:${(7.2 + (index % 5) * .52).toFixed(2)};--delay:-${(index * 0.61).toFixed(2)}s"
    aria-label="${team.linkLabel || `Visit ${team.name}`}"
  >
    ${team.status ? `<span class="team-status">${team.status}</span>` : ""}
    <img src="${logoSource}" alt="${team.name}" loading="${index < 8 ? "eager" : "lazy"}" />
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

function formatAccessiblePower(power) {
  return power.toLocaleString("en-US", { maximumFractionDigits: 6 });
}

function getSupporterInitials(name) {
  if (name.startsWith("Direct voter")) return name.slice(-2).toUpperCase();
  const words = name
    .replace(/\([^)]*\)/g, "")
    .replace(/[^\p{L}\p{N}$]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return "DR";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words.at(-1)[0]}`.toUpperCase();
}

function renderSupporters(items) {
  drepGrid.innerHTML = items.map(([name, id, power, rank]) => {
    const [tier, tierLabel] = getPowerTier(power);
    const order = orderedSupporters.findIndex((supporter) => supporter[1] === id) + 1;
    const profile = supporterProfiles[id];
    const profileLabel = profile ? (profile.kind === "logo" ? "VERIFIED ORGANIZATION" : "VERIFIED PUBLIC PROFILE") : "ON-CHAIN DREP";
    const initials = getSupporterInitials(name);
    return `
    <a
      class="drep-card"
      role="listitem"
      data-tier="${tier}"
      href="https://adastat.net/dreps/${id}"
      target="_blank"
      rel="noreferrer"
      title="${id}"
      aria-label="${name}, ${formatAccessiblePower(power)} ADA voting power, verified Yes vote, open DRep record"
    >
      <span class="drep-card__top">
        <span class="drep-order">#${String(order).padStart(2, "0")} · RANK ${rank}</span>
        <span class="drep-tier">${tierLabel} <span aria-hidden="true">↗</span></span>
      </span>
      <span class="drep-card__identity">
        <span class="drep-avatar" data-kind="${profile?.kind || "fallback"}" aria-hidden="true">
          <span>${initials}</span>
          ${profile ? `<img src="${profile.image}" alt="" loading="lazy" decoding="async"${profile.position ? ` style="object-position:${profile.position}"` : ""} onerror="this.remove()" />` : ""}
        </span>
        <span class="drep-card__name">
          <strong>${name}</strong>
          <small>${profileLabel}</small>
        </span>
      </span>
      <span class="drep-card__bottom">
        <span class="drep-power"><b>${formatPower(power)}</b><small>ADA voting power</small></span>
        <span class="verified-mark">YES ✓</span>
      </span>
    </a>
  `;
  }).join("");
  setCountTarget(supporterCount, supporters.length);
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

if (finePointer && !prefersReducedMotion) {
  const root = document.documentElement;
  const halo = document.querySelector(".cursor-halo");
  const dot = document.querySelector(".cursor-dot");
  const magneticCards = [...document.querySelectorAll(".team-card")];
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let haloX = pointerX;
  let haloY = pointerY;
  let magnetFrame = null;
  let motionFrame = null;
  let lastMotionAt = 0;
  let cardSnapshots = [];
  let fieldActive = false;
  const cardMotions = new Map(magneticCards.map((card) => [card, {
    x: 0,
    y: 0,
    z: 0,
    rotation: 0,
    scale: 1,
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    targetRotation: 0,
    targetScale: 1
  }]));

  const renderCardMotion = (card, x, y, z, rotation, scale) => {
    card.style.setProperty("--mag-x", `${x.toFixed(2)}px`);
    card.style.setProperty("--mag-y", `${y.toFixed(2)}px`);
    card.style.setProperty("--mag-z", `${z.toFixed(2)}px`);
    card.style.setProperty("--mag-r", `${rotation.toFixed(2)}deg`);
    card.style.setProperty("--mag-scale", scale.toFixed(4));
  };

  const setCardTarget = (card, x = 0, y = 0, z = 0, rotation = 0, scale = 1) => {
    const motion = cardMotions.get(card);
    if (!motion) return;
    motion.targetX = x;
    motion.targetY = y;
    motion.targetZ = z;
    motion.targetRotation = rotation;
    motion.targetScale = scale;
  };

  const animateCardMotion = (now) => {
    const elapsed = lastMotionAt ? Math.max(1, Math.min(32, now - lastMotionAt)) : 16.7;
    const blend = 1 - Math.exp(-elapsed / (fieldActive ? 92 : 145));
    lastMotionAt = now;
    let isSettling = false;

    cardMotions.forEach((motion, card) => {
      motion.x += (motion.targetX - motion.x) * blend;
      motion.y += (motion.targetY - motion.y) * blend;
      motion.z += (motion.targetZ - motion.z) * blend;
      motion.rotation += (motion.targetRotation - motion.rotation) * blend;
      motion.scale += (motion.targetScale - motion.scale) * blend;

      const hasSettled =
        Math.abs(motion.targetX - motion.x) < .025 &&
        Math.abs(motion.targetY - motion.y) < .025 &&
        Math.abs(motion.targetZ - motion.z) < .025 &&
        Math.abs(motion.targetRotation - motion.rotation) < .006 &&
        Math.abs(motion.targetScale - motion.scale) < .00005;

      if (hasSettled) {
        motion.x = motion.targetX;
        motion.y = motion.targetY;
        motion.z = motion.targetZ;
        motion.rotation = motion.targetRotation;
        motion.scale = motion.targetScale;
      } else {
        isSettling = true;
      }
      renderCardMotion(card, motion.x, motion.y, motion.z, motion.rotation, motion.scale);
    });

    if (isSettling) {
      motionFrame = requestAnimationFrame(animateCardMotion);
      return;
    }

    motionFrame = null;
    if (!fieldActive) logoField.removeAttribute("data-active");
  };

  const requestCardMotion = () => {
    if (!motionFrame) {
      lastMotionAt = 0;
      motionFrame = requestAnimationFrame(animateCardMotion);
    }
  };

  const measureCards = () => {
    const fieldRect = logoField.getBoundingClientRect();
    cardSnapshots = magneticCards.map((card) => {
      return {
        card,
        centerX: fieldRect.left + card.offsetLeft + card.offsetWidth / 2,
        centerY: fieldRect.top + card.offsetTop + card.offsetHeight / 2,
        width: card.offsetWidth,
        height: card.offsetHeight
      };
    });
  };

  const resetCards = () => {
    if (magnetFrame) cancelAnimationFrame(magnetFrame);
    magnetFrame = null;
    fieldActive = false;
    document.body.classList.remove("cursor-over-logos");
    magneticCards.forEach((card) => setCardTarget(card));
    requestCardMotion();
  };

  const updateMagnets = () => {
    magnetFrame = null;
    if (!fieldActive) return;
    const fieldRect = logoField.getBoundingClientRect();
    const radius = Math.min(300, Math.max(210, fieldRect.width * .32));
    const maxSpread = Math.min(15, Math.max(11, fieldRect.width * .014));

    cardSnapshots.forEach(({ card, centerX, centerY, width, height }) => {
      const dx = pointerX - centerX;
      const dy = pointerY - centerY;
      const distance = Math.hypot(dx, dy);
      const influence = Math.max(0, 1 - distance / radius);
      if (influence <= 0) return setCardTarget(card);

      const power = influence * influence * (3 - 2 * influence);
      const safeDistance = Math.max(distance, 24);
      const insideBoost = Math.max(0, 1 - distance / Math.max(width, height));
      const spread = maxSpread * power + 4 * insideBoost;
      const rowInfluence = Math.max(0, 1 - Math.abs(dy) / Math.max(height * 1.55, 1));
      const horizontalSide = Math.tanh((centerX - pointerX) / Math.max(width * .34, 1));
      const rowPush = horizontalSide * maxSpread * .18 * rowInfluence;
      const x = Math.max(-18, Math.min(18, (-dx / safeDistance) * spread + rowPush));
      const y = Math.max(-18, Math.min(13, (-dy / safeDistance) * spread - 3.5 * power));
      const z = 15 * power;
      const rotation = Math.max(-2.5, Math.min(2.5, (-dx / Math.max(width, 1)) * 2.5 * power));
      setCardTarget(card, x, y, z, rotation, 1 + .018 * power);
    });
    requestCardMotion();
  };

  logoField.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    measureCards();
    fieldActive = true;
    logoField.setAttribute("data-active", "true");
    document.body.classList.add("cursor-over-logos");
  });

  logoField.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    if (!fieldActive) {
      measureCards();
      fieldActive = true;
      logoField.setAttribute("data-active", "true");
      document.body.classList.add("cursor-over-logos");
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
    document.body.classList.remove("cursor-over-logos");
    if (cursorFrame) cancelAnimationFrame(cursorFrame);
    cursorFrame = null;
  });
}
