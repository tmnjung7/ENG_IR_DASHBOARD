// ============================================================
// ANSWER 뱅크 — 질문 유형별 카드 (누적형)
// 원칙: 대외 발언 가능한 문장만. 내부 수치·MBR·개별 기관 대화 내용 없음.
// 구조: cat(카테고리) · period(시기 태그, 예 "3Q26") · updated(최종 수정일)
//       → fixed(미팅마다 흔들리지 않게 못 박는 문장) → core(한 문장, 가장 크게)
//       → support(근거 2~4문장) → numbers(숫자 3개) → kr(통역용 국문 2문장 이내)
//       → terms(통역 오류가 났던 용어) → hold(여기까지만 — 발언 경계선)
// 새 분기: 기존 카드를 지우지 말고 period/updated만 바꿔 갱신하거나, 새 질문은 카드를 추가.
//          같은 주제라도 스탠스가 달라졌으면 새 카드(period 새 분기)로 두면 이력이 남음.
// 검색: label · labelKr · tags · core · support · kr · terms 전부 검색 대상.
// ============================================================
window.KCC_ANSWER_CATS = [
  { id: "group",    label: "Group",            labelKr: "공통",
    subs: [
      { id: "cost",    label: "Cost & Pricing",   labelKr: "원가·판가" },
      { id: "fx-ni",   label: "FX & Net Profit",  labelKr: "환율·순이익" },
      { id: "outlook", label: "Outlook & Other",  labelKr: "전망·기타" }
    ] },
  { id: "bm",       label: "Building Mat.",    labelKr: "건자재" },
  { id: "paint",    label: "Paint",            labelKr: "도료" },
  { id: "silicone", label: "Silicone",         labelKr: "실리콘",
    subs: [
      { id: "margin",   label: "Results & Margin",    labelKr: "실적·마진" },
      { id: "market",   label: "Market & Competition", labelKr: "시황·수요·경쟁" },
      { id: "mom-fin",  label: "Momentive Finance",   labelKr: "모멘티브 재무" },
      { id: "strategy", label: "Strategy & Big Bets", labelKr: "전략·Big Bets" },
      { id: "ops",      label: "Operations & Integration", labelKr: "운영·품질·통합" }
    ] },
  { id: "returns",  label: "Dividend & Returns", labelKr: "배당·주주환원" },
  { id: "asset",    label: "Asset Monetisation", labelKr: "자산활용" },
  { id: "capex",    label: "CAPEX & Balance Sheet", labelKr: "CAPEX·재무" },
  { id: "gov",      label: "Governance & IR",  labelKr: "거버넌스·IR" },
  { id: "materials", label: "Advanced Materials", labelKr: "소재·기타" }
];
window.KCC_ANSWERS = [
  {
    id: "cnt-when-how",
    cat: "asset", period: "3Q26", updated: "2026-10-26",
    n: 1, icon: "🏢",
    label: "Samsung C&T — when / how",
    labelKr: "삼성물산 유동화 — 시점·방식",
    tags: ["monetisation", "EB", "block trade"],
    fixed: [
      "The intention is on the record. The timing is not decided.",
      "Methods are open: exchangeable bond, direct sale, or a structure that keeps the dividend."
    ],
    core: "Our intention to sell down is on the record, but I cannot give you a date today.",
    support: [
      "The review has slowed with the recent share-price moves and the dividend changes.",
      "The methods are open. An exchangeable bond, a direct sale, or a structure that keeps the dividend link.",
      "We start from funding needs, not from a percentage target.",
      "Proceeds go to silicone first, then the balance sheet, then shareholder returns."
    ],
    numbers: [
      { v: "10.49%", l: "stake · 17m shares" },
      { v: "~8tn won", l: "fair value (end-Jun)" },
      { v: "No date", l: "review continues" }
    ],
    kr: [
      "유동화 의지는 공시되어 있습니다. 다만 시점은 아직 정해지지 않았고, 오늘 시점을 말씀드리기는 어렵습니다.",
      "방식은 교환사채, 직접 매각 등 열려 있으며, 자금 필요에서 출발합니다. 용처는 실리콘, 재무구조, 환원 순입니다."
    ],
    terms: [
      { kr: "유동화", en: "monetisation / sell-down", note: "‘liquidation’은 청산이라는 뜻 — 쓰지 말 것" },
      { kr: "교환사채", en: "exchangeable bond (EB)", note: "convertible bond(전환사채) 아님" },
      { kr: "블록딜", en: "block trade / block sale" },
      { kr: "배당 연계 유지", en: "keep the dividend linkage" }
    ],
    hold: "날짜·규모·할인율은 말하지 않음. “no timetable today”에서 멈춤."
  },
  {
    id: "special-dividend",
    cat: "returns", period: "3Q26", updated: "2026-10-26",
    n: 2, icon: "💰",
    label: "Special dividend — ≥50%? lag? quarterly?",
    labelKr: "특별배당 — 비율·시차·분기배당",
    tags: ["dividend", "floor", "pre-tax"],
    fixed: [
      "At least 50% of the special dividend we receive from Samsung C&T — the part above its 2,500-won floor — pre-tax.",
      "50% is a floor, not a ceiling."
    ],
    core: "Fifty percent is a floor set by disclosure. The figure above it is a board decision.",
    support: [
      "The board balances the extra amount against debt reduction.",
      "The lag is structural. Samsung C&T pays first. Then we decide on the dividends we actually received.",
      "So the full effect shows in our 2027 dividend, paid in 2028.",
      "There is no quarterly or interim plan to shorten this at this stage."
    ],
    numbers: [
      { v: "≥50%", l: "pre-tax, disclosed floor" },
      { v: "2,500 won", l: "C&T floor — above this counts" },
      { v: "~17bn won", l: "per 1,000 won of C&T special" }
    ],
    kr: [
      "50%는 공시된 하한이며, 그 이상은 이사회가 차입 감축과 균형을 보며 결정합니다.",
      "시차는 구조적입니다. 삼성물산이 지급한 뒤 실제 수취액 기준으로 정하므로, 본격 효과는 2028년 지급 배당부터입니다."
    ],
    terms: [
      { kr: "특별배당", en: "special dividend" },
      { kr: "하한", en: "floor (not ‘minimum limit’)" },
      { kr: "세전 기준", en: "calculated pre-tax" },
      { kr: "분기배당", en: "quarterly dividend" },
      { kr: "수취 배당 기준", en: "based on dividends actually received" }
    ],
    hold: "60~70% 같은 상향 숫자는 확인하지 않음. 증권가 추정치는 “analyst estimates, not our guidance”."
  },
  {
    id: "special-proposal-or-firm",
    cat: "returns", period: "3Q26", updated: "2026-10-26",
    n: 3, icon: "📜",
    label: "Special dividend — proposal or commitment?",
    labelKr: "특별배당 — ‘제안’인가 ‘확정’인가",
    tags: ["commitment", "board"],
    fixed: [
      "The 50% floor is a disclosed commitment. Only the figure above it is a board decision."
    ],
    core: "It is a disclosed commitment, not a proposal. The floor is binding.",
    support: [
      "We put the 50% floor in our value-up disclosure in August.",
      "That is the first numerical floor on a discretionary item at KCC.",
      "The exact figure above 50% is finalised by the board each year.",
      "The existing 6,000-won floor and the earnings-linked layer are untouched."
    ],
    numbers: [
      { v: "Aug 2026", l: "value-up disclosure" },
      { v: "6,000 won", l: "base floor unchanged" },
      { v: "3 layers", l: "floor · earnings · special" }
    ],
    kr: [
      "제안이 아니라 공시된 약속입니다. 50% 하한은 구속력이 있고, 그 이상의 수치만 매년 이사회가 확정합니다.",
      "기존 주당 6,000원 하한과 이익연동 층은 그대로입니다."
    ],
    terms: [
      { kr: "공시된 약속", en: "a disclosed commitment" },
      { kr: "구속력 있는", en: "binding" },
      { kr: "재량적", en: "discretionary" },
      { kr: "이사회가 확정", en: "finalised by the board" }
    ],
    hold: "“guaranteed(보장)”라는 단어는 피함 — “committed by disclosure”까지."
  },
  {
    id: "silicone-margin",
    cat: "silicone", sub: "margin", period: "3Q26", updated: "2026-10-26",
    n: 4, icon: "🧪",
    label: "Silicone margin — normalisation",
    labelKr: "실리콘 마진 — 정상화 시점",
    tags: ["EBITDA", "low-end", "Q4"],
    fixed: [
      "Specialty is already there. The low-end lines are the drag.",
      "Full-year EBITDA margin: 12 to 13 percent range."
    ],
    core: "The specialty side is already normal. The low-end side is what holds us back.",
    support: [
      "Prices were raised in April. Volume held.",
      "Q3 is lower than Q2. Two reasons: the summer slow season hurt our low-end lines, and the stronger won reduced the translated value.",
      "We expect Q4 to recover. For the full year, the EBITDA margin should be in the 12 to 13 percent range.",
      "We benchmark against Wacker. We have not closed that gap yet."
    ],
    numbers: [
      { v: "9.5% → 13.5%", l: "EBITDA margin Q1 → Q2" },
      { v: "12–13%", l: "full-year range" },
      { v: "16–17%", l: "target 2028–29" }
    ],
    kr: [
      "스페셜티는 이미 정상화되었고, 저가 제품군이 발목을 잡고 있습니다.",
      "3분기는 비수기와 원화 강세로 2분기보다 낮고, 4분기 회복을 봅니다. 연간 EBITDA 마진은 12~13% 범위입니다."
    ],
    terms: [
      { kr: "정상화", en: "return to normal (normalisation)" },
      { kr: "저가 제품군", en: "low-end products" },
      { kr: "양극화", en: "the gap is widening (polarisation)" },
      { kr: "비수기", en: "slow season" },
      { kr: "환산", en: "translation (into won)" }
    ],
    hold: "연간 실리콘 영업이익은 “up on last year, but 100 billion won looks challenging”까지. 숫자 추가 금지."
  },
  {
    id: "price-increase",
    cat: "group", sub: "cost", period: "3Q26", updated: "2026-10-26",
    n: 5, icon: "🏷️",
    label: "Price increases — Q4?",
    labelKr: "4분기 추가 가격 인상 여부",
    tags: ["pricing", "pass-through"],
    fixed: [
      "Product by product, where costs and demand justify it. No blanket percentage."
    ],
    core: "We look at it product by product, where costs and demand justify it.",
    support: [
      "Electronic-materials prices went up in Q2. Other silicone lines are unchanged so far.",
      "In paint, auto and marine use market-linked pricing. Architectural is harder to pass through.",
      "There is no blanket percentage across the portfolio.",
      "We do not confirm an effect before we actually see it."
    ],
    numbers: [
      { v: "+10–15%", l: "silicone, April (blended ~+5%)" },
      { v: "~+10%", l: "paint, April" },
      { v: "EM only", l: "raised in Q2" }
    ],
    kr: [
      "일괄 인상이 아니라 제품별로, 원가와 수요가 뒷받침되는 곳에서 검토합니다.",
      "전자재료는 2분기에 인상했고, 그 외는 아직 변경이 없습니다. 효과는 확인된 뒤에 말씀드립니다."
    ],
    terms: [
      { kr: "판가 인상", en: "price increase (we raised prices — ✕ rose)" },
      { kr: "일괄", en: "across the board / blanket" },
      { kr: "시황연동 가격", en: "market-linked pricing" },
      { kr: "제품별로", en: "product by product" }
    ],
    hold: "인상 시점·폭을 미리 확정하지 않음."
  },
  {
    id: "raw-materials",
    cat: "group", sub: "cost", period: "3Q26", updated: "2026-10-26",
    n: 6, icon: "🛢️",
    label: "Raw materials — lag, how long",
    labelKr: "원재료 — 시차, 얼마나 가나",
    tags: ["cost lag", "inventory", "November"],
    fixed: [
      "It is a delay, not a new trend.",
      "The burden eases from around November."
    ],
    core: "It is a delay, not a new trend.",
    support: [
      "We bought at high prices in March and April, after the Middle East disruption.",
      "We cost inventory on an average basis. So that material hit cost of sales in Q3.",
      "Paint and PVC windows are the most exposed. Silicone is much less exposed.",
      "Prices moderated after April, and the stronger won helps our dollar purchases. So the burden eases from around November, and margins recover in Q4."
    ],
    numbers: [
      { v: "+2–3 pts", l: "cost ratio vs Q2 (Q3 view)" },
      { v: "~Nov", l: "burden starts to ease" },
      { v: "<10%", l: "raw materials in specialty silicone cost" }
    ],
    kr: [
      "추세가 아니라 시차입니다. 3~4월 고가 매입분이 재고 평균단가로 3분기 원가에 반영되었습니다.",
      "4월 이후 가격이 완만해졌고 원화 강세도 도움이 되어, 11월경부터 부담이 완화되고 4분기 마진이 회복됩니다."
    ],
    terms: [
      { kr: "시차", en: "a time lag — say: a delay" },
      { kr: "재고 평균단가", en: "average-cost inventory" },
      { kr: "판가 전가", en: "price pass-through" },
      { kr: "매출원가율", en: "cost-of-sales ratio" }
    ],
    hold: "원재료별 구체 단가·내자/외자 비율은 말하지 않음."
  },
  {
    id: "net-debt-fcf-capex",
    cat: "capex", period: "3Q26", updated: "2026-10-26",
    n: 7, icon: "🏦",
    label: "Net debt / FCF / CAPEX",
    labelKr: "순차입금 · 현금흐름 · 투자",
    tags: ["balance sheet", "interest", "capex"],
    fixed: [
      "Debt reduction and returns are not alternatives. The formula does both."
    ],
    core: "Debt reduction and shareholder returns are not a choice between two things. The formula does both.",
    support: [
      "Dividend income funds the returns. The rest goes to debt repayment.",
      "Net debt is about 4 trillion won. Debt-to-equity improved from 115 to 92 percent.",
      "Our average funding rate is now below 4 percent. That saves more than 100 billion won of interest a year.",
      "Capex is disciplined, about 300 billion won for the group this year, funded by interest savings, not new debt."
    ],
    numbers: [
      { v: "~4tn won", l: "net debt" },
      { v: "92%", l: "debt-to-equity (end-Jun)" },
      { v: "100bn+/yr", l: "interest saved" }
    ],
    kr: [
      "차입 감축과 환원은 택일이 아닙니다. 배당수익은 환원으로, 잔여는 차입 상환으로 갑니다.",
      "순차입금은 약 4조원, 부채비율은 115%에서 92%로 개선되었고, 연간 투자는 약 3,000억원 수준으로 규율을 지킵니다."
    ],
    terms: [
      { kr: "순차입금", en: "net debt" },
      { kr: "부채비율", en: "debt-to-equity ratio" },
      { kr: "잉여현금흐름", en: "free cash flow (FCF)" },
      { kr: "규율 있는 투자", en: "disciplined capex" }
    ],
    hold: "미승인 장기 CAPEX 계획·내부 현금 수치는 말하지 않음."
  },
  {
    id: "net-debt-ebitda",
    cat: "capex", period: "3Q26", updated: "2026-10-26",
    n: 8, icon: "📐",
    label: "Net debt / EBITDA vs peers",
    labelKr: "순차입금/EBITDA 배수 — 피어 대비",
    tags: ["leverage", "multiple", "rating"],
    fixed: [
      "We manage to debt-to-equity and absolute net debt. Direction: down."
    ],
    core: "We manage to debt-to-equity and absolute net debt, and both are moving down.",
    support: [
      "Net debt is about 4 trillion won. Debt-to-equity is 92 percent, with a long-term target below 100 percent.",
      "Our credit rating is a key management indicator. The acquisition debt is why it is low, and we are working it down.",
      "On the exact EBITDA multiple against peers, let me come back to you after the meeting with the precise figure."
    ],
    numbers: [
      { v: "[  ]x", l: "net debt / EBITDA — 공시 후 채움" },
      { v: "92%", l: "debt-to-equity" },
      { v: "<100%", l: "long-term target" }
    ],
    kr: [
      "저희는 부채비율과 절대 순차입금을 관리 지표로 보고 있으며, 둘 다 낮아지는 방향입니다.",
      "피어 대비 정확한 EBITDA 배수는 미팅 후 확인해서 회신드리겠습니다."
    ],
    terms: [
      { kr: "배수", en: "multiple (e.g., 3 times EBITDA)" },
      { kr: "동종업체", en: "peers" },
      { kr: "신용등급", en: "credit rating" },
      { kr: "레버리지", en: "leverage" }
    ],
    hold: "확인되지 않은 배수를 즉석에서 계산해 말하지 않음 — follow-up으로."
  },
  {
    id: "momentive",
    cat: "silicone", sub: "mom-fin", period: "3Q26", updated: "2026-10-26",
    n: 9, icon: "🌐",
    label: "Momentive — injection? IPO? spin-off?",
    labelKr: "모멘티브 — 추가 출자·IPO·인적분할",
    tags: ["Momentive", "IPO", "self-funding"],
    fixed: [
      "The 2026 injection was planned as the last.",
      "IPO discussions are paused. No spin-off is under review."
    ],
    core: "The 2026 injection was planned as the last. IPO talks are paused, and no spin-off is under review.",
    support: [
      "We own 100 percent, and we are building Momentive as our core growth engine.",
      "The priority is self-funding: from cash burn, to break-even, to positive free cash flow.",
      "The capital structure was fixed first. Debt fell from 1.64 billion dollars to under 0.9 billion, and the rate from 7.1 to 4.6 percent.",
      "Recovery to KCC comes through Momentive’s own cash flow and, in time, dividends."
    ],
    numbers: [
      { v: "$800M → $100M", l: "equity 2025 (debt) → 2026 (capex, last planned)" },
      { v: "$1.64B → <$0.9B", l: "Momentive gross debt" },
      { v: "7.1% → 4.6%", l: "weighted rate" }
    ],
    kr: [
      "2026년 출자가 마지막으로 계획된 것입니다. IPO 논의는 중단되었고, 인적분할은 검토하지 않습니다.",
      "100% 자회사로서 핵심 성장동력으로 키우며, 자체 현금흐름으로 자립하는 것이 우선입니다."
    ],
    terms: [
      { kr: "출자", en: "capital injection / equity injection" },
      { kr: "인적분할", en: "spin-off" },
      { kr: "물적분할", en: "carve-out" },
      { kr: "자립", en: "self-funding" },
      { kr: "손익분기", en: "break-even" }
    ],
    hold: "“never again”이라고 단정하지 않음 — “planned as the last”까지."
  },
  {
    id: "building-materials",
    cat: "bm", period: "3Q26", updated: "2026-10-26",
    n: 10, icon: "🏗️",
    label: "Building materials — recovery timing",
    labelKr: "건자재 — 회복 시점",
    tags: ["housing", "gypsum", "2028"],
    fixed: [
      "Commercial first, housing later. Housing around early 2028."
    ],
    core: "Commercial first, housing later. We see housing recovering around early 2028.",
    support: [
      "Commercial demand is already working: data centres and semiconductor plants.",
      "Gypsum board follows housing starts with about a two-year delay.",
      "In Q3, interior demand weakened, and the first semiconductor volumes came off the Q2 level. PVC windows carry both lower demand and the raw-material burden.",
      "Gypsum board is the stable core. It has never recorded a loss."
    ],
    numbers: [
      { v: "60–70%", l: "gypsum board share, never a loss" },
      { v: "~2 years", l: "gypsum lag behind housing starts" },
      { v: "early 2028", l: "housing recovery view" }
    ],
    kr: [
      "상업용이 먼저, 주택은 나중입니다. 주택 회복은 2028년 초경으로 보고 있습니다.",
      "석고보드는 착공 대비 약 2년 후행하며, 안정적인 핵심 사업입니다."
    ],
    terms: [
      { kr: "다운사이클", en: "downcycle / downturn" },
      { kr: "착공", en: "housing starts" },
      { kr: "후행", en: "lags (by about two years)" },
      { kr: "석고보드", en: "gypsum board" },
      { kr: "단열재", en: "insulation" }
    ],
    hold: "2028 회복은 “our view, held loosely” — 단정 금지. 데이터센터는 “positive, not yet a game-changer for volumes”."
  },
  {
    id: "paint-margins",
    cat: "paint", period: "3Q26", updated: "2026-10-26",
    n: 11, icon: "🎨",
    label: "Paint — marine / auto margins",
    labelKr: "도료 — 선박·자동차 마진",
    tags: ["marine", "automotive", "architectural"],
    fixed: [
      "Marine is the bright spot. Auto is steady on market-linked pricing. Architectural is the weak spot."
    ],
    core: "Marine is the bright spot. Auto is steady with market-linked pricing.",
    support: [
      "Marine margins are in the mid-teens, and the order book is solid through 2028.",
      "Auto runs at around 10 percent. Market-linked pricing protects that.",
      "Architectural is the weak spot. Pass-through is harder and demand is still poor.",
      "Our full-year goal is to hold the paint margin in the 9 to 10 percent range."
    ],
    numbers: [
      { v: "mid-teens", l: "marine margin, orders to 2028" },
      { v: "~10%", l: "auto margin" },
      { v: "9–10%", l: "full-year paint target" }
    ],
    kr: [
      "선박이 가장 좋습니다. 마진은 미드틴이고 수주는 2028년까지 견조합니다. 자동차는 시황연동 가격으로 약 10%입니다.",
      "건축용은 전가가 어렵고 수요가 약합니다. 연간 도료 마진은 9~10%를 지키는 것이 목표입니다."
    ],
    terms: [
      { kr: "선박도료", en: "marine coatings" },
      { kr: "건축도료", en: "architectural coatings" },
      { kr: "보수선", en: "repair coatings / MRO" },
      { kr: "수주잔고", en: "order book" },
      { kr: "미드틴", en: "mid-teens (about 14–16%)" }
    ],
    hold: "고객명·신조 할증 수치는 말하지 않음."
  },
  {
    id: "fx",
    cat: "group", sub: "fx-ni", period: "3Q26", updated: "2026-10-26",
    n: 12, icon: "💱",
    label: "FX — KRW strength",
    labelKr: "환율 — 원화 강세 영향",
    tags: ["FX", "translation", "dollar purchases"],
    fixed: [
      "At group level the effects largely offset. FX is not a major swing factor."
    ],
    core: "At group level the effects largely offset, so FX is not a major swing factor.",
    support: [
      "A stronger won makes our dollar raw-material purchases cheaper. That helps the Q4 margin recovery.",
      "But silicone revenue is booked in dollars and translated into won. So reported silicone revenue in won can be lower.",
      "The silicone currency mix is roughly 40 percent euro and 20 to 30 percent dollar."
    ],
    numbers: [
      { v: "~40%", l: "silicone revenue in euro" },
      { v: "20–30%", l: "silicone revenue in dollar" },
      { v: "Offsets", l: "at group level" }
    ],
    kr: [
      "전사 차원에서는 대체로 상쇄되어 환율이 큰 변동 요인은 아닙니다.",
      "달러 원재료 매입에는 긍정적이지만, 실리콘 매출은 달러로 집계되어 원화 환산 매출은 줄어들 수 있습니다."
    ],
    terms: [
      { kr: "원화 강세", en: "a stronger won" },
      { kr: "환산 효과", en: "translation effect" },
      { kr: "상쇄", en: "offset" },
      { kr: "변동 요인", en: "swing factor" }
    ],
    hold: "환율 전망·헤지 포지션 세부는 말하지 않음."
  },
  {
    id: "net-profit-swing",
    cat: "group", sub: "fx-ni", period: "3Q26", updated: "2026-10-26",
    n: 13, icon: "📉",
    label: "Net profit — valuation swing",
    labelKr: "순이익 — 평가손익 변동",
    tags: ["mark-to-market", "Samsung C&T", "non-cash"],
    fixed: [
      "It is mark-to-market on our Samsung C&T shares. It moves both ways. Model the business on operating profit."
    ],
    core: "The swing is mark-to-market on our Samsung C&T shares, and it moves both ways.",
    support: [
      "In Q2 the gain was very large. In Q3 the share price fell, and the valuation loss is around 2 trillion won.",
      "It is non-cash and non-operating. There are no other special items in the quarter.",
      "When you build your model, please look at operating profit for the business and treat the equity valuation separately."
    ],
    numbers: [
      { v: "2.84tn won", l: "Q2 net profit (valuation gain)" },
      { v: "~−2tn won", l: "Q3 valuation loss (view)" },
      { v: "Both ways", l: "non-cash, non-operating" }
    ],
    kr: [
      "삼성물산 지분의 시가평가에 따른 변동이며, 양방향으로 움직입니다. 3분기에는 약 2조원의 평가손실입니다.",
      "비현금·비영업 항목이므로, 사업은 영업이익으로 봐주시기 바랍니다."
    ],
    terms: [
      { kr: "평가손익", en: "valuation gain / loss" },
      { kr: "시가평가", en: "mark-to-market" },
      { kr: "미실현", en: "unrealised" },
      { kr: "비영업 항목", en: "non-operating item" }
    ],
    hold: "3Q 공시 전에는 “around 2 trillion won” — 소수점 수치 금지."
  },
  {
    id: "treasury-shares",
    cat: "returns", period: "3Q26", updated: "2026-10-26",
    n: 14, icon: "📄",
    label: "Treasury shares — schedule, employee 4%",
    labelKr: "자사주 — 소각 일정·임직원 4%",
    tags: ["cancellation", "tranche", "employees"],
    fixed: [
      "About 300 thousand shares cancelled at year-end. The rest by Q3 next year.",
      "Employee 4%: no concrete plan yet."
    ],
    core: "We cancel about 300 thousand shares at year-end, and the rest by the third quarter of next year.",
    support: [
      "In total we are cancelling 13.2 percent of shares outstanding in four tranches. The first was done in April.",
      "About 4 percent is reserved for employee compensation. There is no concrete plan for it yet.",
      "If a plan is adopted, we expect it to be paid out over a long period. Depending on timing, there could be some impact on the expense line."
    ],
    numbers: [
      { v: "13.2%", l: "cancelled by 3Q 2027, 4 tranches" },
      { v: "~300k", l: "shares at year-end 2026" },
      { v: "~4%", l: "reserved for employees" }
    ],
    kr: [
      "연말에 약 30만주를 소각하고, 잔여분은 내년 3분기까지 소각을 완료합니다.",
      "임직원 보상용 약 4%는 아직 구체적인 안이 없으며, 도입 시 장기간 분할 지급을 예상합니다."
    ],
    terms: [
      { kr: "자사주", en: "treasury shares" },
      { kr: "소각", en: "cancellation (we cancel shares)" },
      { kr: "분할(차수)", en: "tranche" },
      { kr: "임직원 보상", en: "employee compensation" }
    ],
    hold: "임직원 보상 제도 세부(대상·방식)는 말하지 않음."
  },
  {
    id: "value-up-targets",
    cat: "returns", period: "3Q26", updated: "2026-08-21",
    n: 15, icon: "🎯",
    label: "Value-up targets — PBR / ROE",
    labelKr: "밸류업 목표 — PBR·ROE 2028/2030",
    tags: ["PBR", "ROE", "dividend formula"],
    fixed: [
      "Targets are unchanged: PBR 0.5 by 2028; PBR 1.0 or above and ROE 10% by 2030.",
      "Dividend formula: 6,000-won floor + 10% of standalone OP above 100bn + ≥50% of C&T special."
    ],
    core: "Our targets are unchanged: PBR 0.5 by 2028, and PBR 1.0 with ROE 10 percent by 2030.",
    support: [
      "Since the July 2025 plan, the share price is up 79 percent, and the dividend rose 50 percent to 15,000 won.",
      "A large part of the ROE came from valuation gains and lower interest, not only from operations. That is why we commit to earnings quality.",
      "Moving targets after one good year would hurt the credibility we are building.",
      "The next phase is earnings quality from the operating businesses."
    ],
    numbers: [
      { v: "15,000 won", l: "DPS FY2025, 26th consecutive" },
      { v: "0.5 → ≥1.0", l: "PBR 2028 → 2030" },
      { v: "86.7%", l: "governance compliance" }
    ],
    kr: [
      "목표는 불변입니다. 2028년 PBR 0.5, 2030년 PBR 1.0 이상과 ROE 10%입니다.",
      "배당은 주당 6,000원 하한, 별도 영업이익 1,000억원 초과분의 10%, 삼성물산 특별배당의 50% 이상, 세 층의 공식으로 정합니다."
    ],
    terms: [
      { kr: "주가순자산비율", en: "PBR — price-to-book ratio" },
      { kr: "자기자본이익률", en: "ROE — return on equity" },
      { kr: "별도 기준", en: "standalone basis" },
      { kr: "재량 → 공식", en: "from discretion to a formula" }
    ],
    hold: "목표주가·과거 기준가는 언급하지 않음."
  },
  {
    id: "governance-activists",
    cat: "gov", period: "3Q26", updated: "2026-10-26",
    n: 16, icon: "🤝",
    label: "Governance — activists",
    labelKr: "거버넌스 — 행동주의·주주 소통",
    tags: ["Truston", "AGM", "engagement"],
    fixed: [
      "Our dialogue with major shareholders is regular and constructive.",
      "We do not comment on any single institution’s private dialogue."
    ],
    core: "Our dialogue with major shareholders is regular and constructive.",
    support: [
      "We meet Truston once or twice a quarter.",
      "They withdrew their shareholder proposal after we shared our monetisation intent and return plans.",
      "Their latest ideas are under internal review and reported to the board. That is a review, not a commitment.",
      "We are preparing for next year’s AGM with this engagement in mind."
    ],
    numbers: [
      { v: "1–2 / quarter", l: "meetings with Truston" },
      { v: "21%+", l: "foreign ownership" },
      { v: "Withdrawn", l: "shareholder proposal" }
    ],
    kr: [
      "주요 주주와 정기적으로, 건설적으로 소통하고 있습니다. 트러스톤은 분기 1~2회 만나며, 저희 계획 공유 후 주주제안을 철회했습니다.",
      "최근 제안은 내부 검토 중이며 이사회에 보고됩니다. 특정 기관과의 개별 대화 내용은 말씀드리지 않습니다."
    ],
    terms: [
      { kr: "행동주의 펀드", en: "activist fund / activist-leaning investor" },
      { kr: "주주제안", en: "shareholder proposal" },
      { kr: "철회", en: "withdrew (the proposal)" },
      { kr: "정기 주주총회", en: "AGM — annual general meeting" },
      { kr: "건설적", en: "constructive" }
    ],
    hold: "특정 연기금·기관과의 비공개 대화는 존재 여부 포함 언급하지 않음."
  },
  {
    id: "ir-engagement",
    cat: "gov", period: "3Q26", updated: "2026-10-26",
    n: 17, icon: "✈️",
    label: "IR engagement — NDR, coverage, site tour",
    labelKr: "IR 활동 — NDR·커버리지·공장 방문",
    tags: ["NDR", "coverage", "site tour"],
    fixed: [
      "We are expanding foreign-investor engagement."
    ],
    core: "We are expanding our engagement with foreign investors.",
    support: [
      "More one-on-one meetings and an NDR each quarter. Stronger English disclosure.",
      "Analyst coverage has grown from 3 to 7.",
      "A site tour is possible. Let me follow up after the meeting with options."
    ],
    numbers: [
      { v: "3 → 7", l: "analyst coverage" },
      { v: "10+ / month", l: "investor meetings" },
      { v: "Quarterly", l: "NDR" }
    ],
    kr: [
      "해외 투자자와의 소통을 확대하고 있습니다. 일대일 미팅과 분기별 NDR을 늘리고, 영문 공시를 강화했습니다.",
      "애널리스트 커버리지는 3개에서 7개로 늘었고, 사업장 방문은 미팅 후 일정을 제안드리겠습니다."
    ],
    terms: [
      { kr: "기업설명회(해외 로드쇼)", en: "NDR — non-deal roadshow" },
      { kr: "커버리지", en: "analyst coverage" },
      { kr: "사업장 방문", en: "site tour / plant visit" },
      { kr: "영문 공시", en: "English disclosure" }
    ],
    hold: "—"
  },
  {
    id: "risk-upside",
    cat: "group", sub: "outlook", period: "3Q26", updated: "2026-10-26",
    n: 18, icon: "⚖️",
    label: "Segment risk vs upside",
    labelKr: "부문별 리스크 vs 업사이드 (한 문장씩)",
    tags: ["risk", "upside", "one sentence each"],
    fixed: [
      "One risk and one upside per segment. Short sentences."
    ],
    core: "Each segment has one main risk and one main upside. Let me take them in turn.",
    support: [
      "Silicone. Risk: low-end profitability stays weak. Upside: electronics and personal care keep growing with good margins.",
      "Building materials. Risk: housing stays weak for longer. Upside: data-centre and semiconductor volumes.",
      "Paint. Risk: raw-material costs and weak architectural demand. Upside: the marine order book to 2028 and overseas growth.",
      "Group. Risk: Samsung C&T share-price swings in net profit. Upside: the formula now connects that asset to your cash return."
    ],
    numbers: [
      { v: "4 lines", l: "Silicone · BM · Paint · Group" },
      { v: "2028", l: "marine order book" },
      { v: "Formula", l: "asset → cash return" }
    ],
    kr: [
      "실리콘은 저가 제품군이 리스크, 전자·퍼스널케어 성장이 업사이드입니다. 건자재는 주택 부진 장기화가 리스크, 데이터센터·반도체 물량이 업사이드입니다.",
      "도료는 원재료와 건축용 수요가 리스크, 2028년까지의 선박 수주와 해외 성장이 업사이드입니다. 전사는 삼성물산 평가손익 변동이 리스크, 공식 기반 환원이 업사이드입니다."
    ],
    terms: [
      { kr: "리스크 요인", en: "downside risk" },
      { kr: "상승 여력", en: "upside" },
      { kr: "차례로", en: "in turn / one by one" }
    ],
    hold: "각 한 문장. 수치 추가 없이 끝냄."
  },
  {
    id: "cost-actions",
    cat: "group", sub: "cost", period: "3Q26", updated: "2026-10-26",
    n: 19, icon: "🛠️",
    label: "Cost actions in our control",
    labelKr: "회사가 통제 가능한 원가 조치",
    tags: ["sourcing", "pricing", "hedging"],
    fixed: [
      "Three things are in our control: sourcing, pricing, and FX management."
    ],
    core: "Three things are in our control: sourcing, pricing, and FX.",
    support: [
      "First, sourcing. We diversified suppliers after April. We do not expect a repeat of the April panic.",
      "Second, pricing. We pass costs through with a lag. Auto and marine use market-linked pricing.",
      "Third, FX. A stronger won helps dollar purchases, and group-level effects largely offset.",
      "And structurally, specialty silicone is less exposed: raw materials can be under 10 percent of cost."
    ],
    numbers: [
      { v: "First / Second / Third", l: "sourcing · pricing · FX" },
      { v: "Q3 peak", l: "cost, easing from ~Nov" },
      { v: "<10%", l: "raw materials in specialty silicone" }
    ],
    kr: [
      "저희가 통제할 수 있는 것은 세 가지입니다. 첫째 공급처 다변화, 둘째 시차를 두고 판가에 전가, 셋째 환율 관리입니다.",
      "4월 이후 공급처를 다변화했고, 자동차·선박은 시황연동 가격을 적용합니다."
    ],
    terms: [
      { kr: "공급처 다변화", en: "supplier diversification" },
      { kr: "헤지", en: "hedging" },
      { kr: "원가 전가", en: "pass costs through" },
      { kr: "통제 가능한", en: "within our control" }
    ],
    hold: "헤지 비율·계약 조건 세부는 말하지 않음."
  }
];

// ============================================================
// 추가분 — 2Q26 외국인 미팅 치트시트(8/14 v2.1, 8/17 v3.2 Momentive 반영)에서 발췌
// 🟢/🟡(대외 언급 가능·방향성) 문장만 옮김. 🔒(이사회 자료 수치·고객사명·사업장)는 제외.
// 실리콘·Momentive 보강: 외국인 질문의 대부분이 실리콘 → 14개 카드
// ============================================================
window.KCC_ANSWERS.push(
  // ---------------- 실리콘 · Momentive ----------------
  {
    id: "sil-sustainable",
    cat: "silicone", sub: "margin", period: "2Q26", updated: "2026-08-17",
    n: 20, icon: "🧪",
    label: "Silicone recovery — sustainable, or just the April price?",
    labelKr: "실리콘 회복 — 지속 가능? 가격 효과뿐?",
    tags: ["sustainability", "price vs volume", "China cuts"],
    fixed: ["Price was the trigger. The supply side is what makes it sustainable.", "Both price and volume contributed."],
    core: "Price was the trigger, but the supply side is what makes it sustainable.",
    support: [
      "First, China’s production cuts and industry restructuring are easing the oversupply.",
      "Second, global silicone peers are broadly raising prices.",
      "Third, our own mix is shifting to specialty, and higher utilisation eased the fixed-cost burden.",
      "That said, I would not overstate it. Operating profit is still down year on year. We are early in the recovery."
    ],
    numbers: [
      { v: "63 → 66kt", l: "volume Q1 → Q2" },
      { v: "~+5%", l: "blended price after April" },
      { v: "−8.8% YoY", l: "Q2 silicone OP — not yet recovered" }
    ],
    kr: [
      "가격이 촉발 요인이었지만, 지속성은 공급 측면에서 나옵니다. 중국 감산, 경쟁사 가격 인상, 저희 믹스 개선 세 가지입니다.",
      "가격과 물량 모두 기여했습니다. 다만 전년 대비로는 아직 감익이라 회복 초기 단계입니다."
    ],
    terms: [
      { kr: "지속 가능성", en: "sustainability (is it sustainable?)" },
      { kr: "공급과잉", en: "oversupply" },
      { kr: "감산", en: "production cuts" },
      { kr: "가동률", en: "utilisation" }
    ],
    hold: "가격 vs 물량 정확한 기여도 분해는 제공하지 않음 — “both contributed”."
  },
  {
    id: "sil-how-to-read",
    cat: "silicone", sub: "margin", period: "2Q26", updated: "2026-08-17",
    n: 21, icon: "📖",
    label: "Silicone — how to read the business (seasonality, spreads)",
    labelKr: "실리콘 — 분석가가 자주 틀리는 것 (계절성·스프레드)",
    tags: ["seasonality", "cycle", "spread", "month"],
    fixed: ["No intra-year seasonality. A three-to-four-year macro cycle. Interpret by quarter, not by month."],
    core: "Silicone follows a three-to-four-year macro cycle, not a seasonal pattern.",
    support: [
      "There is no intra-year seasonality. The business follows GDP and PMI.",
      "Maintenance is spread across the year. There is no ‘shutdown month’.",
      "Petrochemical-style spread analysis does not fit specialties. Raw materials can be under 10 percent of cost.",
      "Please interpret by quarter, not by month."
    ],
    numbers: [
      { v: "3–4 yrs", l: "macro cycle" },
      { v: "<10%", l: "raw materials in specialty cost" },
      { v: "Quarterly", l: "right lens" }
    ],
    kr: [
      "실리콘은 연중 계절성이 없고 GDP·PMI를 따르는 3~4년 주기의 사업입니다. 정비는 연중 분산되어 셧다운 월이 따로 없습니다.",
      "석유화학식 스프레드 분석은 스페셜티에 맞지 않습니다. 월별이 아니라 분기별로 봐주시기 바랍니다."
    ],
    terms: [
      { kr: "계절성", en: "seasonality" },
      { kr: "스프레드 분석", en: "spread analysis (price minus feedstock)" },
      { kr: "정기보수", en: "maintenance (turnaround)" }
    ],
    hold: "3Q의 ‘summer slow season’ 언급과 충돌하지 않게: 3Q는 저가 제품군·휴가 영향이지 구조적 계절성이 아님."
  },
  {
    id: "sil-market-backdrop",
    cat: "silicone", sub: "market", period: "2Q26", updated: "2026-08-17",
    n: 22, icon: "🌏",
    label: "Silicone market — China cuts, DMC, Dow Europe",
    labelKr: "실리콘 시황 — 중국 감산·DMC·Dow 유럽",
    tags: ["China", "DMC", "Dow", "Shin-Etsu", "supply"],
    fixed: ["The supply side is finally working in our favour.", "Commodity weak, specialty firm — that split favours our mix strategy."],
    core: "The supply side is finally working in our favour: Chinese cuts and peer restructuring are stabilising the market.",
    support: [
      "Chinese producers are running joint production cuts, with utilisation around 61 percent.",
      "DMC bottomed in mid-2025 and has recovered. Silicon metal is flat at a low level. That spread shows in our margin.",
      "Dow is shutting about a third of European siloxane capacity, and Dow and Shin-Etsu raised prices again in Q2.",
      "The market is splitting: commodity weak, specialty firm. Our low-end issue was fixed costs, not DMC."
    ],
    numbers: [
      { v: "~61%", l: "China utilisation under joint cuts" },
      { v: "13–14.8k RMB", l: "DMC, from ~10k low" },
      { v: "~1/3", l: "European siloxane capacity Dow is closing" }
    ],
    kr: [
      "공급 측면이 마침내 우호적입니다. 중국 공동 감산(가동률 약 61%)과 경쟁사 구조조정으로 시장이 안정되고 있습니다.",
      "DMC는 2025년 중반 저점 이후 회복했고, Dow의 유럽 감축과 경쟁사 인상이 이어집니다. 범용은 약하고 스페셜티는 견조해 저희 믹스 전략에 유리합니다."
    ],
    terms: [
      { kr: "유기실리콘", en: "organic silicone / siloxane" },
      { kr: "DMC(기초 단량체)", en: "DMC — the basic silicone monomer" },
      { kr: "금속 실리콘", en: "silicon metal (feedstock)" },
      { kr: "구조조정", en: "restructuring" }
    ],
    hold: "중국 JV 가동률·‘판매’ 표현 금지. 가격 전망 수치 금지."
  },
  {
    id: "sil-demand-by-business",
    cat: "silicone", sub: "market", period: "2Q26", updated: "2026-08-17",
    n: 23, icon: "🧭",
    label: "Silicone — where demand is strong / weak",
    labelKr: "실리콘 — 사업별 강약 (어디가 좋고 어디가 약한가)",
    tags: ["personal care", "electronics", "tire", "silanes", "industrial"],
    fixed: ["Strong: personal care, urethane additives, electronic materials, healthcare. Weak: tire & silanes, coatings. Industrial mixed."],
    core: "Personal care, additives and electronics are strong. Tire-silanes and coatings are the weak side.",
    support: [
      "Personal care and urethane additives are performing well.",
      "Electronic materials, including thermal management for data centres and EVs, has strong customer demand. The constraint has been our own quality and service, which we are fixing.",
      "Healthcare and bio-pharma demand is strong, with some shipments deferred by supply issues.",
      "On the weaker side, tire and silanes margins were squeezed by earlier price concessions and raw-material inflation. Coatings faces aggressive competition. Industrial is mixed: LSR is oversold, construction sealants are slower."
    ],
    numbers: [
      { v: "12–13%", l: "electronics share of silicone sales" },
      { v: "10–12%", l: "personal care share" },
      { v: "Low-end", l: "the drag, by design" }
    ],
    kr: [
      "퍼스널케어·우레탄 첨가제·전자재료·헬스케어는 수요가 강합니다. 전자재료는 수요보다 저희 품질·서비스가 제약이었고 개선 중입니다.",
      "타이어·실란은 연초 가격 양보와 원재료 인플레로 마진이 눌렸고, 코팅은 경쟁이 심합니다. 산업용은 혼조입니다."
    ],
    terms: [
      { kr: "우레탄 첨가제", en: "urethane additives" },
      { kr: "열관리", en: "thermal management" },
      { kr: "액상 실리콘 고무", en: "LSR — liquid silicone rubber" },
      { kr: "실런트", en: "sealants" },
      { kr: "초과 수주", en: "oversold (demand exceeds capacity)" }
    ],
    hold: "사업별 매출·EBITDA 수치, 고객사명, 지역별 계획 대비는 말하지 않음."
  },
  {
    id: "sil-long-term",
    cat: "silicone", sub: "strategy", period: "2Q26", updated: "2026-08-21",
    n: 24, icon: "🚀",
    label: "Silicone — long-term targets & strategy",
    labelKr: "실리콘 — 장기 목표·전략 (베이직 → 스페셜티)",
    tags: ["2030", "16–17%", "specialty", "electronics 20%"],
    fixed: ["From basic to specialty, with a leaner cost base.", "EBITDA 16–17% by 2028–29. 10 trillion won silicone revenue by 2030 — a target, not a forecast."],
    core: "Our direction is simple: from basic silicone to high-value specialty, with a leaner cost base.",
    support: [
      "We have been downscaling low-margin basics since the second half of last year. Cost-to-sales improved from about 80 to about 75 percent.",
      "EBITDA margin went from 11.8 percent in 2024, to 13 percent in 2025, to 13.5 percent in Q2 this year.",
      "Targets: 16 to 17 percent EBITDA margin by 2028–29, high teens by the late 2020s. Growth is volume-led, around 5 percent a year.",
      "Electronics is 12 to 13 percent of silicone sales with margins above 30 percent. We want it at 20 percent. The 2030 revenue target of 10 trillion won assumes pipeline expansion and structural options, not organic growth alone."
    ],
    numbers: [
      { v: "80% → 75%", l: "cost-to-sales" },
      { v: "16–17%", l: "EBITDA target 2028–29" },
      { v: "10tn won", l: "2030 revenue target (global #2)" }
    ],
    kr: [
      "방향은 명확합니다. 베이직에서 스페셜티로, 더 가벼운 원가 구조로 갑니다. 원가율은 약 80%에서 75%로 개선됐습니다.",
      "목표는 2028~29년 EBITDA 16~17%, 전자재료 비중 20%, 2030년 실리콘 매출 10조원입니다. 10조는 예측이 아닌 목표입니다."
    ],
    terms: [
      { kr: "베이직 → 스페셜티", en: "from basic to specialty" },
      { kr: "물량 주도 성장", en: "volume-led growth" },
      { kr: "목표 vs 예측", en: "a target, not a forecast" },
      { kr: "원가율", en: "cost-to-sales ratio" }
    ],
    hold: "플랫폼 설명은 모빌리티·전자/열관리·헬스케어·지속가능성 4개까지. 제품별 매출 전망·고객사명 금지."
  },
  {
    id: "sil-big-bets",
    cat: "silicone", sub: "strategy", period: "2Q26", updated: "2026-08-17",
    n: 25, icon: "🎯",
    label: "Big bets — thermal, bio-pharma, tire silane, AI data centres",
    labelKr: "Big Bets — 열관리·바이오파마·타이어 실란·AI 데이터센터",
    tags: ["big bets", "thermal", "gap filler", "bio-pharma", "tire silane", "AI"],
    fixed: ["Three big bets: thermal management, bio-pharma, and a new tire-silane platform.", "AI thermal: meaningful early orders, one of the 2027 growth drivers, scaling step by step."],
    core: "Three big bets: thermal management for electronics, bio-pharma, and a new tire-silane platform.",
    support: [
      "Thermal management — gap fillers and thermal interface materials for data centres, EVs and power electronics — is already the fastest-growing part of new-product sales.",
      "Bio-pharma is a high-barrier market where our single-use tubing and elastomers fit well.",
      "In tires, we are scaling a silane technology that lets carbon-black compounds reach silica-level rolling resistance. Pilot and first shipments this year; a full commercial decision is targeted for 2028.",
      "Management cut the long tail of small projects by about two-thirds to concentrate on these. We do not give product-level revenue targets."
    ],
    numbers: [
      { v: "3", l: "big bets" },
      { v: "~2/3", l: "small projects cut to focus" },
      { v: "2028", l: "tire-silane commercial decision" }
    ],
    kr: [
      "세 가지 Big Bet은 전자용 열관리, 바이오파마, 신규 타이어 실란 플랫폼입니다. 열관리는 신제품 매출 중 가장 빠르게 성장하는 영역입니다.",
      "타이어 실란은 카본블랙 배합에서 실리카급 저회전저항을 내는 기술로, 올해 파일럿·초도 출하, 2028년 상업화 결정이 목표입니다. 제품별 매출 목표는 제공하지 않습니다."
    ],
    terms: [
      { kr: "갭필러 / TIM", en: "gap filler / thermal interface material" },
      { kr: "일회용 튜빙", en: "single-use tubing" },
      { kr: "회전저항", en: "rolling resistance" },
      { kr: "소형 과제 정리", en: "cutting the long tail of small projects" }
    ],
    hold: "제품명(CRUZ 등)·시장 규모·고객사명·IRR 금지. AI 열관리는 “meaningful early orders, one of the 2027 growth drivers”까지. 휴머노이드는 원론(TIM·포팅·씰링)만."
  },
  {
    id: "mom-profitable",
    cat: "silicone", sub: "mom-fin", period: "2Q26", updated: "2026-08-17",
    n: 26, icon: "💵",
    label: "Momentive — is it profitable now?",
    labelKr: "모멘티브 — 지금 흑자인가? 언제 순이익 기여?",
    tags: ["Momentive", "pre-tax", "EBITDA", "refinancing"],
    fixed: ["Momentive’s stand-alone numbers are not separately disclosed.", "Substantially better than last year, and the direction is clearly positive."],
    core: "Profitability improved substantially versus last year, and the direction is clearly positive.",
    support: [
      "Two things came together. First, last year’s refinancing cut interest costs sharply.",
      "Second, the operating turnaround — pricing, mix and volume recovery — is adding on top.",
      "The first half was meaningfully better than a year ago at the pre-tax level. EBITDA is broadly stable, and the interest burden is far lower.",
      "In KCC’s consolidated numbers, the silicone entity returned to a net profit of 4.7 billion won in Q2, though still at a first-half net loss."
    ],
    numbers: [
      { v: "4.7bn won", l: "Q2 net profit (silicone entity, consolidated)" },
      { v: "−15.3bn won", l: "1H net loss — early in recovery" },
      { v: "7.1% → 4.6%", l: "Momentive weighted rate" }
    ],
    kr: [
      "모멘티브 단독 수치는 별도 공시하지 않습니다. 다만 전년 대비 수익성이 크게 개선됐고 방향은 분명히 긍정적입니다.",
      "작년 리파이낸싱으로 이자가 급감했고, 가격·믹스·물량의 영업 턴어라운드가 더해졌습니다. 상반기 세전 손익은 전년 대비 의미 있게 개선됐습니다."
    ],
    terms: [
      { kr: "세전이익", en: "pre-tax profit (IBT)" },
      { kr: "흑자 전환", en: "turned profitable / swung to a profit" },
      { kr: "별도 공시하지 않음", en: "not separately disclosed" },
      { kr: "리파이낸싱", en: "refinancing" }
    ],
    hold: "Momentive 단독 매출·EBITDA·IBT 달러 수치, 계획 대비 수치 금지. “directionally …”로 선 긋기."
  },
  {
    id: "mom-behind-plan",
    cat: "silicone", sub: "mom-fin", period: "2Q26", updated: "2026-08-17",
    n: 27, icon: "📉",
    label: "Momentive — why behind plan? full-year picture?",
    labelKr: "모멘티브 — 계획 미달 이유·연간 전망",
    tags: ["Momentive", "execution", "distressed volume", "full year"],
    fixed: ["Execution, not demand.", "Full year: EBITDA around or slightly above last year; pre-tax clearly positive."],
    core: "Execution, not demand.",
    support: [
      "The first quarter carried most of the shortfall: weather, inflation and plant inefficiency. The second quarter was much closer to plan.",
      "The remaining gap is mostly our own quality and operational issues that held back shipments.",
      "Part of the volume shortfall is deliberate. We are scaling down basic feedstocks.",
      "For the full year we expect EBITDA around or slightly above last year, and pre-tax profit clearly positive versus a loss last year. Cost and cash actions are in place to close the gap."
    ],
    numbers: [
      { v: "Q1 ≫ Q2", l: "where the shortfall sat" },
      { v: "≈ / slightly above", l: "FY EBITDA vs last year" },
      { v: "Positive", l: "FY pre-tax vs loss last year" }
    ],
    kr: [
      "수요가 아니라 실행의 문제입니다. 1분기에 격차 대부분이 발생했고(기상·인플레·공장 비효율), 2분기는 계획에 근접했습니다.",
      "잔여 격차는 품질·운영 이슈로 못 나간 출하분이며, 물량 미달 일부는 베이직 축소라는 의도적 선택입니다. 연간 EBITDA는 전년 수준 이상, 세전은 확실한 흑자를 예상합니다."
    ],
    terms: [
      { kr: "실행(력)", en: "execution" },
      { kr: "출하 지연 주문", en: "distressed orders / orders on hold" },
      { kr: "의도적 축소", en: "deliberately scaling down" },
      { kr: "비용·현금 조치", en: "cost and cash actions" }
    ],
    hold: "계획 대비 달러 격차, 분기별 목표, 조치 규모($)는 말하지 않음."
  },
  {
    id: "mom-cash-drain",
    cat: "silicone", sub: "mom-fin", period: "2Q26", updated: "2026-08-17",
    n: 28, icon: "🏦",
    label: "Momentive — cash drain? when self-funding?",
    labelKr: "모멘티브 — 자금 블랙홀? 자립 시점?",
    tags: ["Momentive", "self-funding", "liquidity", "injection"],
    fixed: ["Last year was refinancing. This year is investment. The goal is self-funding.", "Liquidity is at a multi-year high."],
    core: "Last year was a refinancing, this year is investment, and the goal is self-funding.",
    support: [
      "The large injection last year replaced expensive debt with equity. Momentive’s interest burden fell sharply as a result.",
      "This year’s support is earmarked for the capital programme — reliability and specialty growth capex — not for covering losses.",
      "Momentive’s liquidity is at its strongest level in several years.",
      "The board has been explicit: the company should become self-sustaining. Management runs a detailed monthly cash forecast and cash actions on inventory, purchasing and costs."
    ],
    numbers: [
      { v: "$800M", l: "2025 equity → debt repaid" },
      { v: "$100M", l: "Jun 2026, capex programme" },
      { v: "Multi-year high", l: "liquidity" }
    ],
    kr: [
      "작년은 리파이낸싱(부채를 자본으로 대체), 올해는 투자 재원입니다. 손실 보전이 아니며 목표는 자립입니다.",
      "모멘티브 유동성은 수년래 최고 수준이고, 이사회는 자립을 명시했습니다. 월별 현금 전망과 재고·구매·비용 조치로 관리합니다."
    ],
    terms: [
      { kr: "자립", en: "self-funding / self-sustaining" },
      { kr: "유동성", en: "liquidity" },
      { kr: "손실 보전", en: "covering losses" },
      { kr: "신뢰성 투자", en: "reliability capex" }
    ],
    hold: "현금·순현금·ABL·차입 달러 수치 금지. 추가 출자 ‘없음’ 단정 금지 — “planned as the last”."
  },
  {
    id: "mom-china-share",
    cat: "silicone", sub: "market", period: "2Q26", updated: "2026-08-17",
    n: 29, icon: "🇨🇳",
    label: "Losing share to Chinese producers?",
    labelKr: "중국 업체에 점유율 상실? 어떻게 경쟁?",
    tags: ["China", "market share", "commodity", "specialty"],
    fixed: ["In commoditised products, yes — and we are choosing not to fight on price there."],
    core: "In commoditised products, yes. And we are choosing not to fight on price there.",
    support: [
      "Over the past several years Momentive lost share in the commoditised part of the portfolio, where low-cost Chinese producers moved fast.",
      "Our response: deliberately scale down low-margin basics, and focus on specialty where quality, service and patents matter.",
      "You already see the effect in the cost ratio and the mix.",
      "In parallel, we are investing in specialty capacity and labs in Asia to be closer to demand. High-end customers avoid Chinese material on quality and brand grounds."
    ],
    numbers: [
      { v: "80% → 75%", l: "cost-to-sales as basics shrink" },
      { v: "Asia", l: "specialty capacity & labs" },
      { v: "Quality · service · patents", l: "where we compete" }
    ],
    kr: [
      "범용 제품에서는 그렇습니다. 그리고 거기서는 가격 경쟁을 하지 않기로 선택했습니다.",
      "저마진 베이직을 의도적으로 줄이고, 품질·서비스·특허가 통하는 스페셜티에 집중합니다. 아시아에 스페셜티 설비와 연구소를 늘려 수요에 가까이 갑니다."
    ],
    terms: [
      { kr: "범용화된", en: "commoditised" },
      { kr: "점유율 상실", en: "lost share" },
      { kr: "가격 경쟁을 하지 않다", en: "not fight on price" },
      { kr: "저원가 업체", en: "low-cost producers" }
    ],
    hold: "2019~25 CAGR·사업별 물량 수치, 2030 달러 목표 금지."
  },
  {
    id: "mom-biggest-risk",
    cat: "silicone", sub: "ops", period: "2Q26", updated: "2026-08-17",
    n: 30, icon: "⚠️",
    label: "Momentive — biggest risk today? (quality, delivery)",
    labelKr: "모멘티브 — 최대 리스크 (품질·납기)",
    tags: ["risk", "quality", "OTIF", "make-to-stock"],
    fixed: ["Execution — quality and on-time delivery — more than the market."],
    core: "Execution, quality and on-time delivery, more than the market.",
    support: [
      "Demand and order intake are healthy. What held us back is our own operations: quality on some legacy products and delivery reliability.",
      "That is where management is investing: a new head of quality from outside, statistical process control at every plant, and a rebuilt make-to-stock model so key products ship in about a week instead of three.",
      "We are also transferring KCC’s operational know-how: lead-time discipline, scrap reduction and safety. Our Korean sites have gone eighteen months without a recordable injury.",
      "Externally we watch raw-material inflation, tariffs and the Middle East. Pricing has so far absorbed them."
    ],
    numbers: [
      { v: "3 wks → ~1 wk", l: "lead time, key products" },
      { v: "18 months", l: "Korean sites, no recordable injury" },
      { v: "Every plant", l: "statistical process control" }
    ],
    kr: [
      "시장보다 실행, 즉 품질과 정시 납기가 최대 리스크입니다. 수요와 수주는 건전합니다.",
      "외부 영입 품질 총괄, 전 공장 통계적 공정관리, 핵심 제품 리드타임 3주에서 약 1주로 단축하는 재고생산 모델 재구축, KCC 운영 노하우 이전으로 대응하고 있습니다."
    ],
    terms: [
      { kr: "정시·전량 납품", en: "on-time-in-full (OTIF) delivery" },
      { kr: "재고생산 / 주문생산", en: "make-to-stock / make-to-order" },
      { kr: "통계적 공정관리", en: "statistical process control (SPC)" },
      { kr: "폐기 감축", en: "scrap reduction" },
      { kr: "무재해", en: "no recordable injury" }
    ],
    hold: "OTIF %·불만율·특정 제품 품질사고·인사 교체 수치 금지."
  },
  {
    id: "mom-capex-footprint",
    cat: "silicone", sub: "ops", period: "2Q26", updated: "2026-08-17",
    n: 31, icon: "🏭",
    label: "Momentive — capex, five-year plan, plant closures?",
    labelKr: "모멘티브 — 설비투자·5개년 계획·사업장 정리?",
    tags: ["capex", "five-year plan", "footprint", "sites"],
    fixed: ["Capex is stepping up after years of under-investment, with much stricter discipline.", "I cannot comment on specific sites."],
    core: "Capex is stepping up after years of under-investment, with much stricter discipline.",
    support: [
      "Maintenance spending had run below industry benchmarks. Part of the plan is catching up on plant reliability.",
      "The rest is growth: specialty capacity mostly in Asia, plus automation and digital.",
      "A five-year capital plan goes to the board later this year. Every project now passes a tougher business-case review.",
      "On the footprint, the direction is simplification: fewer hand-offs between regions and more regional supply. I cannot comment on specific sites."
    ],
    numbers: [
      { v: "Reliability + growth", l: "two halves of the plan" },
      { v: "Asia", l: "specialty capacity" },
      { v: "5-year plan", l: "to the board in Nov" }
    ],
    kr: [
      "수년간의 과소투자 이후 투자를 늘리되 규율은 훨씬 엄격합니다. 설비 신뢰성 만회와 아시아 스페셜티 증설, 자동화·디지털이 축입니다.",
      "5개년 투자 계획은 연내 이사회에 상정됩니다. 공급망은 단순화 방향이며, 개별 사업장은 코멘트할 수 없습니다."
    ],
    terms: [
      { kr: "과소투자", en: "under-investment" },
      { kr: "유지보수 투자", en: "maintenance capex" },
      { kr: "사업장 구조(풋프린트)", en: "footprint" },
      { kr: "사업성 검토", en: "business-case review" }
    ],
    hold: "🔒 특정 사업장 폐쇄·통합 계획, capex 달러 수치, 5개년 총액 절대 금지."
  },
  {
    id: "mom-macro-tariffs",
    cat: "silicone", sub: "market", period: "2Q26", updated: "2026-08-17",
    n: 32, icon: "🌪️",
    label: "Momentive — Middle East, tariffs, inflation impact",
    labelKr: "모멘티브 — 중동·관세·인플레 영향",
    tags: ["tariffs", "inflation", "Middle East", "supply routes"],
    fixed: ["Manageable so far. Pricing and supply-chain actions are working."],
    core: "Manageable so far. Pricing and supply-chain actions are working.",
    support: [
      "Inflation pressure is the highest since 2022, driven by trade and the Middle East.",
      "Tariff cost recovery has offset most of the inflation impact. We secured alternative supply routes and run scenario planning in case the disruption lasts.",
      "Asia is the most exposed region on supply.",
      "Where costs rise further, we will keep taking targeted price actions."
    ],
    numbers: [
      { v: "Since 2022", l: "highest inflation pressure" },
      { v: "Asia", l: "most exposed on supply" },
      { v: "Targeted", l: "price actions" }
    ],
    kr: [
      "지금까지는 관리 가능한 수준입니다. 가격 조치와 공급망 조치가 작동하고 있습니다.",
      "관세 비용 회수로 인플레 영향 대부분을 상쇄했고, 대체 공급 경로와 시나리오 플래닝을 운영합니다. 공급 리스크는 아시아가 가장 큽니다."
    ],
    terms: [
      { kr: "관세 비용 회수", en: "tariff cost recovery" },
      { kr: "대체 공급 경로", en: "alternative supply routes" },
      { kr: "시나리오 플래닝", en: "scenario planning" },
      { kr: "선별적 가격 인상", en: "targeted price increases" }
    ],
    hold: "—"
  },
  {
    id: "mom-korea-fit",
    cat: "silicone", sub: "ops", period: "2Q26", updated: "2026-08-17",
    n: 33, icon: "🤝",
    label: "Korean silicone + Momentive — synergy, integration",
    labelKr: "국내 실리콘과 모멘티브 — 시너지·통합 현황",
    tags: ["One Momentive", "integration", "synergy", "Korea"],
    fixed: ["One Momentive: one management, one system, two-way know-how transfer."],
    core: "One Momentive: one management, one system, and two-way know-how transfer.",
    support: [
      "The Korean silicone sites are managed as part of the Momentive network: same operating system, same KPIs, integrated data.",
      "Korea contributes operational discipline: eighteen months without a recordable injury, and know-how on lead-time management and scrap reduction now applied across Momentive.",
      "In return, the Korean sites gain access to Momentive’s specialty technology and global customers.",
      "Integration is focused on cost and mix: plant efficiency, cost reduction, and the shift to specialty."
    ],
    numbers: [
      { v: "1", l: "operating system & KPI set" },
      { v: "18 months", l: "Korea, no recordable injury" },
      { v: "Two-way", l: "know-how transfer" }
    ],
    kr: [
      "하나의 모멘티브입니다. 하나의 경영, 하나의 시스템과 KPI, 양방향 노하우 이전입니다.",
      "한국은 운영 규율(18개월 무재해, 리드타임·폐기 관리)을 기여하고, 대신 모멘티브의 스페셜티 기술과 글로벌 고객 접근을 얻습니다."
    ],
    terms: [
      { kr: "통합", en: "integration" },
      { kr: "시너지", en: "synergy" },
      { kr: "운영 규율", en: "operational discipline" },
      { kr: "핵심성과지표", en: "KPIs" }
    ],
    hold: "국내 사업장별 투자액·가동률 과제·사업장 재편은 말하지 않음."
  },

  // ---------------- 공통 · 재무 · 회계 ----------------
  {
    id: "glass-fiber-restated",
    cat: "group", sub: "outlook", period: "2Q26", updated: "2026-08-17",
    n: 34, icon: "📑",
    label: "Why did prior-quarter numbers change? (glass fiber)",
    labelKr: "전분기 수치가 왜 바뀌었나 — 유리장섬유 재분류",
    tags: ["restated", "discontinued", "glass fiber", "Other segment"],
    fixed: ["Glass fiber became a discontinued operation. Comparatives are restated on the same basis. Net profit is unchanged."],
    core: "We classified glass fiber as a discontinued operation and restated the comparatives on the same basis.",
    support: [
      "The business sat in our Other segment. It was removed from that segment only. Building Materials, Paint and Silicone are unchanged.",
      "Q1 revenue restated from 1,626.4 to 1,609.7 billion won, and operating profit from 88.1 to 93.6 billion. The business was loss-making, so removing it raises operating profit.",
      "Net profit is unchanged, because it includes discontinued operations.",
      "If asked sale or closure: it is classified as held for sale / discontinued. Beyond what is disclosed, I cannot comment on terms."
    ],
    numbers: [
      { v: "88.1 → 93.6", l: "Q1 OP restated (bn won)" },
      { v: "217.0bn", l: "Q1 net profit, unchanged" },
      { v: "Other only", l: "segment affected" }
    ],
    kr: [
      "유리장섬유를 중단영업으로 분류하고 비교수치를 같은 기준으로 재작성했습니다. 기타부문에서만 제외됐고 다른 부문은 변동 없습니다.",
      "적자 사업이라 제외 시 영업이익이 올라갑니다. 당기순이익은 중단영업을 포함하므로 변동이 없습니다."
    ],
    terms: [
      { kr: "중단영업", en: "discontinued operation" },
      { kr: "소급 재작성", en: "restated comparatives" },
      { kr: "매각예정", en: "held for sale" },
      { kr: "유리장섬유", en: "glass fiber" }
    ],
    hold: "매각 상대·대금·시점은 공시 범위 내에서만."
  },
  {
    id: "guidance-h2",
    cat: "group", sub: "outlook", period: "2Q26", updated: "2026-08-17",
    n: 35, icon: "🧭",
    label: "Guidance? (we don’t give numbers)",
    labelKr: "가이던스 요청 — 수치 가이던스 없음",
    tags: ["guidance", "outlook", "direction"],
    fixed: ["We do not give numerical guidance. Directionally: gradual improvement."],
    core: "We do not give numerical guidance. Directionally, we expect a gradual improvement.",
    support: [
      "The drivers: commercial volume in building materials, price pass-through in paint, and the silicone recovery through price, mix and utilisation.",
      "The risks: oil and FX, the raw-material lag, and any demand softening from tighter policy.",
      "Where we have said a range, it stays: silicone EBITDA margin 12 to 13 percent, paint margin 9 to 10 percent for the year."
    ],
    numbers: [
      { v: "12–13%", l: "silicone EBITDA, FY" },
      { v: "9–10%", l: "paint OP margin, FY" },
      { v: "No number", l: "group guidance" }
    ],
    kr: [
      "수치 가이던스는 제공하지 않습니다. 방향성은 완만한 개선입니다.",
      "동력은 건자재 상업용 물량, 도료 판가 전가, 실리콘 회복이고, 리스크는 유가·환율·원재료 시차·긴축에 따른 수요 둔화입니다."
    ],
    terms: [
      { kr: "가이던스", en: "guidance" },
      { kr: "방향성으로는", en: "directionally" },
      { kr: "완만한 개선", en: "gradual improvement" }
    ],
    hold: "실리콘 연간 OP 수치, MBR 전망 금지."
  },
  {
    id: "valuation-accounting",
    cat: "group", sub: "fx-ni", period: "2Q26", updated: "2026-08-17",
    n: 36, icon: "🧾",
    label: "Valuation gains distort P&L — change the accounting?",
    labelKr: "평가손익이 손익 왜곡 — 회계처리 변경?",
    tags: ["accounting", "mark-to-market", "FVTPL", "disclosure"],
    fixed: ["We understand the volatility concern. What we control is transparent, separated disclosure."],
    core: "We understand the volatility concern. What we control is transparent, separated disclosure.",
    support: [
      "The treatment follows the applicable standards. Any change would need careful review.",
      "In the meantime we consistently separate operating performance from the mark-to-market effect, as we did today.",
      "I would encourage you to model the two separately."
    ],
    numbers: [
      { v: "Standards", l: "treatment follows them" },
      { v: "Separated", l: "operating vs valuation" },
      { v: "Both ways", l: "it reverses when prices fall" }
    ],
    kr: [
      "변동성 우려는 이해합니다. 회계처리는 기준서에 따르며 변경은 신중한 검토가 필요합니다.",
      "저희가 할 수 있는 것은 영업실적과 시가평가 효과를 항상 분리해 설명하는 것입니다. 모델링도 분리해 주시길 권합니다."
    ],
    terms: [
      { kr: "당기손익-공정가치 측정", en: "fair value through profit or loss" },
      { kr: "회계기준", en: "accounting standards" },
      { kr: "분리 공시", en: "separated disclosure" }
    ],
    hold: "회계 변경 가능성·시점을 암시하지 않음."
  },
  {
    id: "current-ratio",
    cat: "capex", period: "2Q26", updated: "2026-08-17",
    n: 37, icon: "📊",
    label: "Current ratio below 100% — liquidity concern?",
    labelKr: "유동비율 100% 미만 — 유동성 우려?",
    tags: ["current ratio", "liquidity", "reclassification", "maturity"],
    fixed: ["No. It is a maturity reclassification, and gross debt actually went down."],
    core: "No. It is a maturity reclassification, and gross debt actually went down.",
    support: [
      "Long-term borrowings of 644.9 billion won moved into the current portion as they approach maturity. That mechanically lowers the ratio to 91.5 percent.",
      "Gross debt fell from 5,437 to 5,266 billion won in the quarter. Debt dependency improved from 29.8 to 24.9 percent.",
      "We hold about 1.2 trillion won in cash and short-term instruments, and bond-market access is intact: we issued 398.9 billion won in the first half."
    ],
    numbers: [
      { v: "91.5%", l: "current ratio (end-Jun)" },
      { v: "−171.9bn", l: "gross debt in Q2" },
      { v: "1,203bn", l: "cash & short-term instruments" }
    ],
    kr: [
      "아닙니다. 만기 도래에 따른 계정 재분류이며, 총차입금은 오히려 줄었습니다.",
      "장기차입금 6,449억원이 유동성으로 대체되어 유동비율이 기계적으로 91.5%가 됐습니다. 현금성 1조 2천억원을 보유하고 회사채 발행도 정상적으로 이어지고 있습니다."
    ],
    terms: [
      { kr: "유동비율", en: "current ratio" },
      { kr: "유동성 대체(재분류)", en: "reclassification to current" },
      { kr: "차입금의존도", en: "debt dependency (debt / assets)" },
      { kr: "만기 도래", en: "approaching maturity" }
    ],
    hold: "—"
  },
  {
    id: "rating-low",
    cat: "capex", period: "2Q26", updated: "2026-08-17",
    n: 38, icon: "🏷️",
    label: "Why is the credit rating low despite big assets?",
    labelKr: "자산 많은데 신용등급은 왜 낮나",
    tags: ["rating", "acquisition debt", "interest", "deleveraging"],
    fixed: ["The acquisition debt — and we are working it down.", "Cost fixed first; now the absolute amount."],
    core: "The acquisition debt is why, and we are working it down.",
    support: [
      "The Momentive acquisition added more than 1.5 trillion won of debt. In 2024 the priority was the cost of debt, not the amount.",
      "The KSOE exchangeable bond at 1.75 percent and Momentive’s 700-million-dollar bond took out the high-cost portion. Average funding rate is now below 4 percent.",
      "Now the focus is the absolute amount: net debt around 4 trillion won, debt-to-equity from the 160 percent range to 92 percent, long-term target below 100.",
      "Rating improvement is a key management indicator. Most of the recent ratio improvement is the denominator — equity rose on revaluation — so real deleveraging comes with asset monetisation."
    ],
    numbers: [
      { v: "7–9% → <4%", l: "average funding rate" },
      { v: "160% → 92%", l: "debt-to-equity" },
      { v: "<100%", l: "long-term target" }
    ],
    kr: [
      "모멘티브 인수금융 때문이며, 이를 줄여가는 중입니다. 2024년에는 차입의 양보다 비용이 우선이었고, 평균 조달금리를 4% 미만으로 낮췄습니다.",
      "이제 초점은 절대 규모입니다. 순차입금 약 4조원, 부채비율 92%, 장기 목표 100% 미만이며 등급 상향이 경영 지표입니다. 최근 비율 개선은 분모 효과가 커서 진짜 디레버리징은 자산 유동화와 함께 옵니다."
    ],
    terms: [
      { kr: "인수금융", en: "acquisition financing / acquisition debt" },
      { kr: "디레버리징", en: "deleveraging" },
      { kr: "분모 효과", en: "denominator effect" },
      { kr: "보증채", en: "guaranteed bond" }
    ],
    hold: "KCC–Momentive 내부거래 조건(보증료·대여금리·스왑) 금지."
  },

  // ---------------- 자산활용 · 주주환원 ----------------
  {
    id: "close-the-gap",
    cat: "asset", period: "2Q26", updated: "2026-08-17",
    n: 39, icon: "📐",
    label: "Stock trades far below your holdings — how do you close the gap?",
    labelKr: "보유자산 대비 저평가 — 어떻게 해소?",
    tags: ["discount", "NAV", "gap", "three ways"],
    fixed: ["We recognise the gap, and we address it in three ways: core business, gradual monetisation, shareholder returns."],
    core: "We recognise the gap, and we are addressing it in three ways.",
    support: [
      "First, improving the core business, especially the silicone turnaround.",
      "Second, gradual monetisation of financial assets at the right time.",
      "Third, shareholder returns: the formula-based dividend and the treasury cancellation.",
      "The assets exceed our market cap even after netting all debt, before any value for the operating business. Consistent execution on the three narrows the discount."
    ],
    numbers: [
      { v: "9.1tn vs ~4tn", l: "financial assets vs market cap" },
      { v: "3 ways", l: "business · monetisation · returns" },
      { v: "~4tn", l: "net debt to net off" }
    ],
    kr: [
      "괴리는 인지하고 있고, 세 가지로 대응합니다. 본업 개선(실리콘 턴어라운드), 금융자산의 단계적 유동화, 그리고 주주환원입니다.",
      "세 가지를 일관되게 실행하면 할인이 좁혀진다고 봅니다."
    ],
    terms: [
      { kr: "할인(저평가)", en: "discount (to asset value)" },
      { kr: "괴리", en: "gap" },
      { kr: "본업", en: "core / operating business" }
    ],
    hold: "목표주가·NAV 목표치 금지."
  },
  {
    id: "eb-vs-sale",
    cat: "asset", period: "2Q26", updated: "2026-08-17",
    n: 40, icon: "🔁",
    label: "Why an EB rather than an outright sale?",
    labelKr: "왜 직매각이 아니라 교환사채(EB)인가",
    tags: ["EB", "exchangeable", "outright sale", "dividend linkage", "tax"],
    fixed: ["An EB keeps the dividend linkage and the holding premium while funding at very low cost."],
    core: "An EB keeps the dividend income and the holding premium, while raising funds at very low cost.",
    support: [
      "Our KSOE EB carries a 1.75 percent coupon, with a 30 percent premium, five years. It raised 650 million dollars without selling a share.",
      "Selling outright gives up the growing dividend stream. The special-dividend layer now makes that stream even more valuable to you.",
      "On an outright sale the embedded gain is large versus a 1.08 trillion won cost, so tax and market impact matter. Timing and structure will likely be examined around the EB maturity window in two to three years.",
      "Samsung C&T was considered as an underlying when we reviewed an EB last year."
    ],
    numbers: [
      { v: "1.75%", l: "KSOE EB coupon, 5y, 30% premium" },
      { v: "$650M", l: "raised, no share sold" },
      { v: "1.08tn won", l: "Samsung C&T cost vs ~8tn value" }
    ],
    kr: [
      "교환사채는 배당수익과 보유 프리미엄을 유지하면서 매우 낮은 비용으로 자금을 조달합니다. KSOE EB는 1.75% 쿠폰에 한 주도 팔지 않고 6.5억달러를 조달했습니다.",
      "직매각은 커지는 배당 흐름을 포기하는 것이고, 큰 내재 이익에 대한 세금과 시장 영향도 고려해야 합니다. 세금·구조는 EB 만기 즈음 검토될 것입니다."
    ],
    terms: [
      { kr: "교환사채", en: "exchangeable bond (EB) — not convertible" },
      { kr: "직매각", en: "outright sale" },
      { kr: "내재 이익", en: "embedded gain" },
      { kr: "교환 프리미엄", en: "exchange premium" }
    ],
    hold: "물산 EB 규모·할인율·시점 금지. 과거 기준가 언급 금지."
  },
  {
    id: "dividend-vs-buyback",
    cat: "returns", period: "2Q26", updated: "2026-08-21",
    n: 41, icon: "⚖️",
    label: "Dividend vs buyback? If C&T pays no special, does ours fall?",
    labelKr: "배당 vs 자사주? 물산 특별배당 없으면 우리 배당 줄어드나?",
    tags: ["buyback", "dividend", "contingent", "layers"],
    fixed: ["We are doing both.", "If Samsung C&T pays no special dividend, layers one and two are unaffected."],
    core: "We are doing both. Buyback and cancellation now, and a formula-based dividend on top.",
    support: [
      "13.2 percent of shares are being retired by Q3 2027. The special dividend is additive and a pass-through.",
      "The mix may be revisited after the cancellation programme completes.",
      "If Samsung C&T pays no special dividend, our dividend does not fall. Layer one, the 6,000-won floor, and layer two, earnings-linked, are unaffected. The third layer is contingent by design."
    ],
    numbers: [
      { v: "13.2%", l: "shares retired by 3Q27" },
      { v: "6,000 won", l: "floor stays" },
      { v: "Contingent", l: "layer 3 by design" }
    ],
    kr: [
      "둘 다 합니다. 자사주 소각(13.2%, 2027년 3분기까지)에 공식 기반 배당이 더해집니다. 소각 완료 후 조합은 다시 볼 수 있습니다.",
      "물산이 특별배당을 하지 않으면 3층만 없을 뿐, 6,000원 하한과 이익연동 층은 영향이 없습니다."
    ],
    terms: [
      { kr: "자사주 매입", en: "buyback" },
      { kr: "추가적인(덧붙는)", en: "additive" },
      { kr: "조건부", en: "contingent" },
      { kr: "전달(패스스루)", en: "pass-through" }
    ],
    hold: "—"
  },

  // ---------------- 건자재 · 도료 · 소재 ----------------
  {
    id: "bm-insulation-dc",
    cat: "bm", period: "2Q26", updated: "2026-08-21",
    n: 42, icon: "🧱",
    label: "Insulation / data centres — was Q2 sustainable?",
    labelKr: "단열재·데이터센터 — 2Q 호조 지속되나?",
    tags: ["insulation", "data centre", "utilisation", "glass wool"],
    fixed: ["The high-tech volume is structural; the price tailwind was not.", "Data centres: positive, but not yet a game-changer for volumes."],
    core: "The high-tech volume is structural. The price tailwind was not.",
    support: [
      "Insulation is fixed-cost heavy, so utilisation matters. It recovered toward 90 percent in Q2 as semiconductor-cluster projects started taking material.",
      "Part of Q2 was a one-off price advantage over organic insulation that has faded with oil. So Q3 is around Q2 levels, not above.",
      "Data centres are positive but not yet a game-changer for volumes. A mid-size building uses about 200 tons. Hyperscale would change that — upside, not base case.",
      "For H2 we push the conversion of sandwich-panel cores to glass wool."
    ],
    numbers: [
      { v: "~90%", l: "insulation utilisation, Q2" },
      { v: "~200 t", l: "per mid-size data centre" },
      { v: "55%+", l: "inorganic insulation share" }
    ],
    kr: [
      "하이테크 물량은 구조적이고, 가격 우위는 일회성이었습니다. 단열재는 고정비 사업이라 가동률이 핵심인데 2분기에 약 90%까지 회복했습니다.",
      "데이터센터는 긍정적이지만 아직 물량 게임체인저는 아닙니다. 중형 1동에 약 200톤이고, 하이퍼스케일은 업사이드입니다."
    ],
    terms: [
      { kr: "무기단열재", en: "inorganic insulation (glass wool, mineral wool)" },
      { kr: "유기단열재", en: "organic insulation (EPS, PIR)" },
      { kr: "샌드위치패널 심재", en: "sandwich-panel core" },
      { kr: "장치산업", en: "fixed-cost-heavy business" }
    ],
    hold: "하이테크 비중(15~20%)·직납 스펙 목표는 질문 시만."
  },
  {
    id: "paint-oil-mro",
    cat: "paint", period: "2Q26", updated: "2026-08-21",
    n: 43, icon: "🛳️",
    label: "Paint — price cuts if oil falls? newbuild peak-out?",
    labelKr: "도료 — 유가 하락 시 판가 인하? 신조 피크아웃?",
    tags: ["oil", "price cuts", "MRO", "repair", "antifouling"],
    fixed: ["Our market position lets us hold price.", "If newbuild peaks, repair and maintenance takes over."],
    core: "Our market position lets us hold price, and repair coatings take over if newbuild peaks.",
    support: [
      "We hold dominant domestic and marine shares. The medium-term marine margin target is mid-teens.",
      "Repair coatings are growing double digits every year on our installed base, plus silicone antifouling.",
      "Raw materials settled: toluene and xylene 15 to 25 percent above the March baseline, titanium dioxide about 23 percent. Costs feed through with lags, solvents first, resins later.",
      "We do not expect a repeat of the April panic. Sourcing is diversified."
    ],
    numbers: [
      { v: "Mid-teens", l: "marine margin, medium term" },
      { v: "Double digits", l: "repair coatings growth / yr" },
      { v: "+15–25%", l: "solvents vs March; TiO2 +23%" }
    ],
    kr: [
      "국내와 선박에서 지배적 점유율이라 판가를 지킬 수 있습니다. 신조가 정점을 지나면 보수선 도료가 이어받습니다. 보수선은 매년 두 자릿수 성장하고 실리콘 방오도료도 있습니다.",
      "원재료는 3월 대비 용제 15~25%, 이산화티타늄 약 23% 위에서 안정됐고, 4월식 패닉 재현은 예상하지 않습니다."
    ],
    terms: [
      { kr: "보수선 도료", en: "repair coatings / MRO (maintenance, repair, overhaul)" },
      { kr: "방오도료", en: "antifouling coatings" },
      { kr: "신조선 피크아웃", en: "newbuild peak-out" },
      { kr: "용제 / 수지", en: "solvents / resins" }
    ],
    hold: "신조 할증 수치·고객명·공정위 관련·러시아산 원료 금지."
  },
  {
    id: "materials-emc-substrate",
    cat: "materials", period: "2Q26", updated: "2026-08-21",
    n: 44, icon: "🔬",
    label: "EMC, HBM, ceramic substrates — the Others segment",
    labelKr: "EMC·HBM·세라믹 기판 — 기타(소재) 부문",
    tags: ["EMC", "HBM", "AMB", "DCB", "power module", "Others"],
    fixed: ["We do not directly supply HBM molding compounds.", "Substrates: AMB for EV, DCB for industrial — capacity build-out phase."],
    core: "Others is our advanced-materials business: small today, but it is where the semiconductor and EV exposure sits.",
    support: [
      "Q2 revenue was 112.5 billion won with a thin 1.3 billion operating profit, because we are investing in ceramic-substrate capacity.",
      "In EMC our strength is power-module compounds. We do not directly supply HBM molding compounds; liquid EMC from Japanese suppliers dominates there. We supply WOP-type EMC for DRAM.",
      "Ceramic substrates go into power modules in inverters: EV drivetrains and AI data-centre power. AMB is the EV-grade high end, DCB the industrial workhorse. Jeonju AMB expansion completes in November; Vietnam DCB is expanded.",
      "With 20-plus Chinese entrants and the EV slowdown, profitability needs time. Our share is around 7 percent. Positives: the Hyundai Mobis channel, customers de-risking from China, AI power demand."
    ],
    numbers: [
      { v: "112.5 / 1.3", l: "Q2 revenue / OP (bn won)" },
      { v: "~7%", l: "substrate market share" },
      { v: "Nov", l: "Jeonju AMB expansion complete" }
    ],
    kr: [
      "기타는 첨단소재 사업입니다. 규모는 작지만 반도체·전기차 익스포저가 있는 곳이고, 세라믹 기판 증설 투자로 이익이 얇습니다.",
      "EMC는 파워모듈용이 강점이며 HBM용 몰딩 컴파운드는 직접 공급하지 않습니다. 기판은 AMB(전기차)와 DCB(산업용)이며, 중국 업체 20여 곳과 EV 캐즘 때문에 수익화에 시간이 필요합니다."
    ],
    terms: [
      { kr: "에폭시 몰딩 컴파운드", en: "EMC — epoxy molding compound" },
      { kr: "세라믹 기판", en: "ceramic substrate (AMB / DCB)" },
      { kr: "파워모듈", en: "power module (inside inverters)" },
      { kr: "EV 캐즘", en: "the EV slowdown / chasm" }
    ],
    hold: "EMC 중국 JV 검토, 내부 자성 발언 금지."
  },
  {
    id: "ownership-succession",
    cat: "gov", period: "2Q26", updated: "2026-08-21",
    n: 45, icon: "👥",
    label: "Ownership / succession — are you suppressing the share price?",
    labelKr: "지배구조·승계 — 주가를 누르고 있나?",
    tags: ["succession", "controlling family", "ownership"],
    fixed: ["The controlling family already holds a majority. The next generation holds under 2 percent. The claim is simply not true."],
    core: "The controlling family already holds a majority, so the priority is company-wide returns.",
    support: [
      "The next generation holds under 2 percent.",
      "The claim that we suppress the share price is simply not true. A higher share price raises the value of what the family already owns.",
      "The value-up plan, the formula dividend and the cancellation programme all point the same way."
    ],
    numbers: [
      { v: "Majority", l: "controlling family holding" },
      { v: "<2%", l: "next generation" },
      { v: "Same direction", l: "plan · dividend · cancellation" }
    ],
    kr: [
      "지배주주 일가가 이미 과반을 보유하고 있어 우선순위는 전사 차원의 주주환원입니다. 차세대 지분은 2% 미만입니다.",
      "주가를 누른다는 주장은 사실이 아닙니다."
    ],
    terms: [
      { kr: "승계", en: "succession" },
      { kr: "지배주주 일가", en: "the controlling family" },
      { kr: "주가 억제", en: "suppressing the share price" }
    ],
    hold: "개인별 지분·승계 계획 세부는 말하지 않음."
  }
);
