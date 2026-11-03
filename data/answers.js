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
  { id: "group",    label: "Group",            labelKr: "공통" },
  { id: "bm",       label: "Building Mat.",    labelKr: "건자재" },
  { id: "paint",    label: "Paint",            labelKr: "도료" },
  { id: "silicone", label: "Silicone",         labelKr: "실리콘" },
  { id: "returns",  label: "Dividend & Returns", labelKr: "배당·주주환원" },
  { id: "asset",    label: "Asset Monetisation", labelKr: "자산활용" },
  { id: "capex",    label: "CAPEX & Balance Sheet", labelKr: "CAPEX·재무" },
  { id: "gov",      label: "Governance & IR",  labelKr: "거버넌스·IR" }
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
    cat: "silicone", period: "3Q26", updated: "2026-10-26",
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
    cat: "group", period: "3Q26", updated: "2026-10-26",
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
    cat: "group", period: "3Q26", updated: "2026-10-26",
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
    cat: "silicone", period: "3Q26", updated: "2026-10-26",
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
    cat: "group", period: "3Q26", updated: "2026-10-26",
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
    cat: "group", period: "3Q26", updated: "2026-10-26",
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
    cat: "group", period: "3Q26", updated: "2026-10-26",
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
    cat: "group", period: "3Q26", updated: "2026-10-26",
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
