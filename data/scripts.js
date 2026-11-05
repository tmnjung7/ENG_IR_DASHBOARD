// ============================================================
// SPEAK 스크립트 — 텔레프롬프터용
// 원칙(10/26 L1 Capital 미팅 반영): 한 문장 = 한 메시지, 12단어 이내 목표,
//   나열은 First / Second / Third, 쉬운 단어(dip→fall, lag→delay 등)
// 구조: script → sections[] → paras[] { en, kr, pause? }
//   chips = 문단 위에 보여줄 숫자·키워드 (3~6개)
// 누적형: quarter("3Q 2026" 등 / 상시는 "Evergreen") + kind(Preview / Review / Topic / Intro).
//   새 분기는 새 스크립트를 위에 추가. 지난 분기 것은 지우지 않아도 분기 탭으로 분리되어 보임.
// ============================================================
window.KCC_SCRIPTS = [
  {
    id: "q3-2026-recent",
    quarter: "3Q 2026", kind: "Preview",
    title: "3Q 2026 — Recent Developments",
    titleKr: "3Q 외국인 주주 미팅 · 최근 동향",
    duration: "7–9 min",
    badge: "3Q 공시 전",
    note: "수치는 방향성으로만. [ ]는 공시 후 채움. 굵은 글씨 = 강조.",
    sections: [
      {
        title: "Opening & Key Point", time: "0:00 – 1:00",
        chips: ["Q2: 1.81tn / 128.9bn / +38% QoQ", "Q3 softer than Q2", "3 reasons", "Q4 recovery"],
        paras: [
          { en: "Thank you for your time today. I am [name] from the KCC IR team. Our third-quarter results will be disclosed shortly. So today I will give you the <b>direction</b>, not the numbers. Then I will take your questions.",
            kr: "3Q 공시 전이므로 수치가 아닌 방향성 중심으로 설명 후 질문." },
          { en: "Let me start with a short recap of the second quarter. It is the base for how we see the third. In Q2, revenue was <b>1.81 trillion won</b>, up 12 percent from Q1. Operating profit was <b>128.9 billion won</b>, up 38 percent.",
            kr: "2Q 복기: 매출 1.81조(+12%), OP 1,289억(+38%)." },
          { en: "Every segment grew from the first quarter. Silicone led, after the April price increase. Its EBITDA margin recovered from <b>9.5 to 13.5 percent</b>.",
            kr: "전 부문 QoQ 성장. 실리콘 EBITDA 9.5→13.5%." },
          { en: "For the third quarter, the key point is simple. <b>Profit will be somewhat lower than Q2.</b> We see it recovering in the fourth quarter.",
            kr: "3Q 헤드라인: 2Q보다 수익성 다소 하락, 4Q 회복.", pause: true },
          { en: "There are three reasons. <b>First</b>, the summer slow season. <b>Second</b>, raw materials we bought at the spring peak. <b>Third</b>, the stronger won.",
            kr: "세 가지 — 하계 비수기 · 봄 고가 원재료 · 원화 강세." }
        ]
      },
      {
        title: "The Three Drivers", time: "1:00 – 3:00",
        chips: ["Summer slow season — all segments", "Mar–Apr purchases → Q3 cost", "Cost ratio +2–3 pts vs Q2", "Easing from ~Nov", "KRW helps $ purchases", "Net profit: ~2tn valuation loss"],
        paras: [
          { en: "<b>First, the season.</b> The third quarter includes the summer holidays. It is a slow season across the group. Building materials, coatings and silicone all feel it.",
            kr: "①계절성: 하계 휴가·비수기, 전 부문." },
          { en: "<b>Second, raw materials.</b> In March and April, prices spiked after the Middle East disruption. We were not fully prepared, and we bought at high prices.",
            kr: "②원재료: 3~4월 중동 이슈로 급등, 고가 매입." },
          { en: "We cost inventory on an average basis. So that material went through cost of sales in the third quarter. Paint and PVC windows are the most exposed.",
            kr: "재고 평균단가 → 3Q 원가 반영. 도료·창호 노출." },
          { en: "As a result, our cost-of-sales ratio should rise by <b>two to three points</b> versus Q2.",
            kr: "연결 매출원가율 2Q 대비 2~3%p 상승." },
          { en: "The good news: this is a <b>delay, not a new trend</b>. Prices moderated after April. The stronger won makes our dollar purchases cheaper. So the cost burden eases from around November, and margins recover in Q4.",
            kr: "시차일 뿐 추세 아님. 4월 이후 완만, 원화 강세 유리 → 11월부터 완화, 4Q 회복.", pause: true },
          { en: "<b>Third, net profit.</b> You will see a large swing below the operating line. Samsung C&T’s share price fell in the quarter. The valuation loss is <b>around 2 trillion won</b>.",
            kr: "③순이익: 삼성물산 주가 하락, 평가손 약 2조원." },
          { en: "As I said in August, this is mark-to-market. It moves both ways. There are no other special items in the quarter.",
            kr: "시가평가·양방향. 그 외 특별 요인 없음." }
        ]
      },
      {
        title: "By Segment", time: "3:00 – 6:00",
        chips: ["BM: downturn, interior ↓, semiconductor initial volumes ↓", "Paint: auto & marine OK, margin below 1H", "Silicone: season + FX → Q4 recovery", "Gap widening: specialty ↑, low-end slow"],
        paras: [
          { en: "<b>Building materials.</b> The construction downturn continues. We had a small rebound in Q2. In Q3, demand softened again.",
            kr: "건자재: 다운사이클 지속. 2Q 소폭 반등 후 3Q 재둔화." },
          { en: "Interior demand weakened. The first volumes for the semiconductor cluster came off their Q2 level. In PVC windows, lower demand and the raw-material burden both weigh on profit. Gypsum board remains the stable core.",
            kr: "인테리어 수요↓, 반도체 클러스터 초도물량↓. 창호 이중 부담. 석고보드 안정." },
          { en: "<b>Paint.</b> Despite the slow season, demand in automotive and marine coatings continues. But because of the raw-material delay, profit will be below the first half.",
            kr: "도료: 비수기에도 자동차·선박 수요 지속. 원재료 시차로 상반기 대비 수익성↓." },
          { en: "Architectural coatings are the weak spot. Price pass-through is harder, and demand is still poor. On the positive side, our <b>overseas volumes</b> are growing steadily. We built them up to offset weaker domestic auto demand.",
            kr: "건축도료 약점(전가 어려움·수요 부진). 해외 물량 안정 신장.", pause: true },
          { en: "<b>Silicone.</b> Raw-material volatility is limited here. The pressure comes from two places.",
            kr: "실리콘: 원재료 변동성 제한적. 압박 요인 두 가지." },
          { en: "First, the summer slow season. It mainly hurts our low-end product lines versus Q2. Second, the stronger won. It reduces the translated value of silicone revenue and profit. So Q3 is down from Q2, and we expect a <b>recovery in Q4</b>.",
            kr: "①비수기 → 저가 제품군 수익성↓ ②원화 강세 → 환산 영향. 3Q↓ → 4Q 회복." },
          { en: "The structural picture is a <b>widening gap</b> within the portfolio. Low-end products are not improving as fast as we would like. Electronic materials and personal care keep growing, with solid margins.",
            kr: "구조: 양극화 심화 — 저가 개선 더딤, 전기전자·퍼스널케어 성장·준수한 마진." },
          { en: "For the full year, silicone operating profit should be up on last year. But reaching 100 billion won looks challenging.",
            kr: "연간 실리콘 OP 전년 대비 증가, 1,000억원은 쉽지 않음. (여기까지만 — 숫자 추가 금지)" }
        ]
      },
      {
        title: "Shareholder Returns — Update", time: "6:00 – 8:00",
        chips: ["Aug value-up disclosure", "Special dividend ≥50%, pre-tax", "Full effect from 2028", "Monetisation: intent unchanged, review slower", "Treasury: ~300k shares year-end, rest by 3Q27", "Employee 4%: no plan yet"],
        paras: [
          { en: "On shareholder returns, a short update since August. Our value-up disclosure formalised two things.",
            kr: "8월 이후 환원 업데이트. 밸류업 공시로 두 가지 명문화." },
          { en: "<b>One</b>: our intention to monetise financial assets at the right time, and return a portion of the gains. <b>Two</b>: a new special-dividend layer. At least <b>50 percent</b> of the special dividends we receive from Samsung C&T, calculated pre-tax, passed through to you.",
            kr: "①유동화 의지·차익 일부 환원 ②특별배당 층: 물산 특별배당의 최소 50%, 세전." },
          { en: "On timing. The full effect comes the year after next. Samsung C&T pays its dividend first. Then we decide ours, on the dividends actually received. So the step-up shows in our 2027 dividend, paid in 2028.",
            kr: "시차: 본격 효과 내후년. 물산 지급 → 당사 결정. 2027 배당(2028 지급)부터." },
          { en: "On monetisation. Given the recent share-price moves and the dividend developments, the review has slowed somewhat. The intention is unchanged. We keep reviewing in light of market conditions. But I would not want to give you a timetable today.",
            kr: "유동화: 변동성·배당 이슈로 검토 다소 둔화. 의지 불변. 시점표 없음.", pause: true },
          { en: "On treasury shares. As planned, we cancel about <b>300 thousand shares</b> at year-end. We complete the rest by the third quarter of next year.",
            kr: "자사주: 연말 약 30만주 소각, 잔여분 내년 3Q까지." },
          { en: "For the roughly 4 percent reserved for employee compensation, there is no concrete plan yet. If one is adopted, it would be paid out over a long period. Depending on timing, there could be some impact on the expense line.",
            kr: "임직원 보상용 4%: 구체안 없음. 도입 시 장기 분할 지급, 비용 영향 가능." }
        ]
      },
      {
        title: "Close → Q&A", time: "8:00 – 8:30",
        chips: ["Q3 softer — 3 known reasons", "Q4 recovery", "Specialty silicone growing", "Returns now formula-based"],
        paras: [
          { en: "To sum up. Q3 is a softer quarter for well-understood reasons: the season, a raw-material delay, and FX. We see Q4 recovering.",
            kr: "요약: 3Q 완만(계절성·원재료 시차·환율), 4Q 회복." },
          { en: "Structurally, the specialty end of silicone keeps growing. And our shareholder-return framework is now formula-based.",
            kr: "실리콘 스페셜티 성장, 환원은 공식 기반." },
          { en: "<b>That is our Q3 briefing. I am happy to take your questions.</b>",
            kr: "Q&A 진입 문장. (“can you give me a question?” 대체)" }
        ]
      }
    ]
  },
  {
    id: "value-up-5min",
    quarter: "Evergreen", kind: "Topic",
    title: "Value-up & Shareholder Return",
    titleKr: "밸류업·주주환원 5분",
    duration: "5 min",
    badge: "유지",
    note: "외국인 미팅 메인 토픽. 이행 → 3층 공식 → 금융자산 3트랙 → 마무리.",
    sections: [
      {
        title: "What We Delivered", time: "0:00 – 1:30",
        chips: ["Jul 2025 plan → Aug 2026 review", "Price +79% · TSR 87.5%", "DPS 10,000 → 15,000", "Cancel 13.2% by 3Q27", "Targets unchanged"],
        paras: [
          { en: "We published our first value-up plan in July 2025. In August this year, we published our first annual progress review.",
            kr: "’25.7 계획 → ’26.8 첫 연간 리뷰." },
          { en: "Since the disclosure, the share price has risen <b>79 percent</b>. Total shareholder return was 87.5 percent, against a cost of equity of 8.2. ROE improved from 6.5 to 23.5 percent.",
            kr: "주가 +79%, TSR 87.5%(자기자본비용 8.2%), ROE 6.5→23.5%." },
          { en: "Let me be straightforward. A large part of that ROE came from valuation gains and lower interest, not only from operations. That is exactly why the plan commits us to <b>earnings quality</b>, not headline ratios.",
            kr: "정직하게: ROE 상당 부분은 평가이익·이자 절감. 그래서 ‘이익의 질’에 약속." },
          { en: "On delivery. The dividend went up 50 percent to <b>15,000 won</b> per share, our 26th consecutive year-end dividend. We are cancelling <b>13.2 percent</b> of shares in four tranches by the third quarter of 2027. The first was done in April.",
            kr: "배당 15,000원(+50%, 26년 연속), 13.2% 4회 분할 소각(’27.3Q), 1회차 4월 완료." },
          { en: "We refinanced 650 million dollars of debt from over 7 percent to <b>1.75 percent</b>. Governance compliance rose to 86.7 percent, our 2030 target, four years early.",
            kr: "EB $650M 7%+ → 1.75%. 지배구조 준수율 86.7%(2030 목표 4년 조기 달성)." },
          { en: "Targets are unchanged. <b>PBR 0.5 by 2028.</b> PBR at or above 1.0 with 10 percent ROE by 2030. Moving targets after one good year would hurt our credibility.",
            kr: "목표 불변: ’28 PBR 0.5, ’30 PBR 1.0+·ROE 10%.", pause: true }
        ]
      },
      {
        title: "Three-Layer Formula", time: "1:30 – 3:00",
        chips: ["Layer 1: 6,000-won floor", "Layer 2: 10% of standalone OP above 100bn", "Layer 3: ≥50% of C&T special above 2,500 won, pre-tax", "1,000 won at C&T ≈ 17bn won to KCC"],
        paras: [
          { en: "Korean dividend policy has fairly been criticised as discretionary. What we built is a <b>formula</b>, in three layers.",
            kr: "재량적이라는 비판 → 3층 공식." },
          { en: "<b>Layer one</b> is a floor. A minimum dividend of 6,000 won per share, paid through the cycle.",
            kr: "①주당 6,000원 하한, 사이클 무관." },
          { en: "<b>Layer two</b> is earnings-linked. When standalone operating profit exceeds 100 billion won, we add 10 percent of standalone operating profit. The base is our stable domestic businesses, because silicone earnings are still volatile.",
            kr: "②별도 OP 1,000억 초과 시 별도 OP의 10%. 실리콘 제외(변동성)." },
          { en: "<b>Layer three</b> is new this year: the special dividend. We hold 10.49 percent of Samsung C&T, 17 million shares. Samsung C&T pays out 60 to 70 percent of the dividends it receives, with a 2,500-won floor.",
            kr: "③특별배당(신설). 물산 10.49%·1,700만주. 물산은 수취 배당의 60~70% 재배분, 2,500원 하한." },
          { en: "Whatever it pays above that floor is our special-dividend resource. We return <b>at least 50 percent</b> of it to you, calculated pre-tax. So the tax does not come out of your share.",
            kr: "2,500원 초과분이 재원. 최소 50%, 세전 기준 — 세금은 주주 몫에서 빠지지 않음." },
          { en: "Fifty percent is a floor, not a ceiling. Layers one and two are untouched. The rest goes to debt repayment, which flows straight back into earnings.",
            kr: "50%는 하한. 1·2층 불변. 잔여는 차입 상환 → 이익으로 환류." },
          { en: "For scale: every 1,000 won of special dividend per Samsung C&T share is roughly <b>17 billion won</b> to KCC. At least half of that becomes your special dividend. Analyst estimates vary, and they are not our guidance.",
            kr: "물산 주당 1,000원당 약 170억원 → 최소 절반 특별배당. 증권가 추정치 ≠ 가이던스.", pause: true }
        ]
      },
      {
        title: "Financial Assets — Three Tracks", time: "3:00 – 4:30",
        chips: ["FA 9.1tn vs cost 1.45tn", "Market cap ~4tn · net debt ~4tn", "Track 1 dividend = policy", "Track 2 EB = proven", "Track 3 disposal = intent on record", "Proceeds: silicone → balance sheet → returns"],
        paras: [
          { en: "At end-June, our financial assets had a cost of 1.45 trillion won and a fair value of <b>9.1 trillion</b>. Samsung C&T alone was about 8 trillion.",
            kr: "6월말 금융자산 취득 1.45조 / 공정가치 9.1조(물산 약 8조)." },
          { en: "Our market cap is roughly 4 trillion won, and net debt about 4 trillion. So the assets exceed our entire market cap, even after netting off all debt. That is before any value for a 6.5-trillion-won business. That gap is what the plan exists to close.",
            kr: "시총 ~4조, 순차입 ~4조. 차입 차감 후에도 자산 > 시총. 본업 6.5조 가치 제외. 이 갭이 플랜의 목적." },
          { en: "Three tracks, in order of finality. <b>Track one</b>, the dividend stream, is now policy. That is the formula I just described.",
            kr: "3트랙. ①배당 흐름 = 정책(공식)." },
          { en: "<b>Track two</b>, monetisation without selling, is proven. The KSOE exchangeable bond raised 650 million dollars at 1.75 percent without selling a share.",
            kr: "②비매각 유동화 = 입증(KSOE EB $650M, 1.75%)." },
          { en: "<b>Track three</b>, disposal, is intent on the record. We have formally disclosed that we intend to sell investment assets at an appropriate time and return a portion of the gains.",
            kr: "③매각 = 공시된 의지(적절 시점 매각, 차익 일부 환원)." },
          { en: "It is not a timetable, and I will not invent one today. Decisions start from concrete funding needs, not a percentage target. Proceeds go to silicone first, the balance sheet second, returns third.",
            kr: "시점표 아님. 자금 필요에서 출발. 용처 ①실리콘 ②재무 ③환원." }
        ]
      },
      {
        title: "Close → Q&A", time: "4:30 – 5:00",
        chips: ["Discretion → formula", "Asset ↔ cash return", "Next: earnings quality"],
        paras: [
          { en: "To close in one sentence. This year we replaced discretion with a formula. That formula connects our largest asset to your cash return.",
            kr: "재량 → 공식. 최대 자산 ↔ 주주 현금 연결." },
          { en: "We know the valuation gap has not closed yet. Closing it also needs earnings quality from the operating businesses. That is where the next phase of the plan is directed. <b>I am happy to take your questions.</b>",
            kr: "갭 미해소 — 본업 이익의 질이 다음 단계. 질문 받겠습니다." }
        ]
      }
    ]
  },
  {
    id: "q2-2026-results",
    quarter: "2Q 2026", kind: "Review",
    title: "2Q 2026 — Results Briefing",
    titleKr: "2Q 확정실적 10분 스크립트",
    duration: "10 min",
    badge: "확정 수치",
    note: "2Q 확정 수치 기준(8/25). 3Q 공시 후에는 수치 참고용으로만.",
    sections: [
      {
        title: "Opening & Group Results", time: "0:00 – 2:00",
        chips: ["Revenue 1.81tn +12% QoQ", "OP 128.9bn +38% QoQ", "Q1 OP restated 93.6bn", "All 3 divisions +10% QoQ", "1H: revenue +6%, OP −15% YoY"],
        paras: [
          { en: "Thank you for your time today. I am [name] from the KCC IR team. Today I will walk you through our second-quarter results, about ten minutes. Then I am happy to take your questions.",
            kr: "인사. 10분 2Q 실적 설명 후 질문." },
          { en: "Let me start with the headline numbers. In the second quarter, consolidated revenue was <b>1.81 trillion won</b>, up 12 percent from the first quarter. Operating profit was <b>128.9 billion won</b>, up 38 percent quarter-on-quarter.",
            kr: "매출 1조 8,060억(+12% QoQ), 영업이익 1,289억(+38% QoQ)." },
          { en: "One accounting note. We stopped our glass-fiber business this year. So from this quarter, past numbers are restated on a continuing-business basis. First-quarter operating profit is now shown as 93.6 billion won.",
            kr: "유리장섬유 중단 → 계속사업 기준 재분류. 1Q OP 936억." },
          { en: "What I like about this quarter is that the growth was broad-based. All three divisions grew about 10 percent or more from the first quarter: Silicone, Building Materials, and Paint.",
            kr: "고른 성장 — 3개 부문 모두 QoQ 10% 이상." },
          { en: "Year-on-year, first-half revenue was up about 6 percent, while operating profit was down about 15 percent. That gap came from higher raw-material costs after the geopolitical tensions. The second quarter shows the recovery is now underway.",
            kr: "상반기 매출 +6%, OP −15% YoY(원재료). 2분기부터 회복 국면.", pause: true }
        ]
      },
      {
        title: "Silicone — the Star", time: "2:00 – 4:30",
        chips: ["Volume 63 → 66kt", "ASP ~+5%", "EBITDA 9.5% → 13.5%", "Electronics +10%, high-30s margin", "Industrial −10% → −2%", "China utilisation ~61%"],
        paras: [
          { en: "Silicone was the main driver. Sales volume rose from 63 to 66 thousand tons, up 4 percent. Our blended selling price rose about 5 percent after the April price increase.",
            kr: "판매량 6.3→6.6만톤(+4%), 평균 판가 약 +5%." },
          { en: "As a result, the EBITDA margin improved from about 9.5 percent in the first quarter to <b>13.5 percent</b>. That is already our full-year target level.",
            kr: "EBITDA 마진 9.5% → 13.5% — 연간 목표 수준." },
          { en: "Three things drove this. <b>First</b>, the price increase. <b>Second</b>, specialty volumes. Electronics volume grew 10 percent quarter-on-quarter, with an EBITDA margin in the high thirties. Small in tons, but the biggest single contributor to profit. Personal care volume also grew more than 10 percent.",
            kr: "①판가 ②스페셜티 물량: 전기전자 +10%(마진 30% 후반, 이익 기여 1위), 퍼스널케어 +10%+." },
          { en: "<b>Third</b>, and this is structural, we fixed the fixed-cost problem in our low-end lines. The industrial segment’s EBITDA margin improved from about minus 10 percent to around minus 2 percent. This was not a one-off. It is the result of restructuring work since last year.",
            kr: "③저가 라인 고정비 해소(인더스트리얼 −10%→−2%). 구조적." },
          { en: "On the market: China is running joint production cuts, with utilisation around 61 percent. The market is clearly splitting. Commodity is weak, specialty is firm. That split works in favour of our mix-upgrade strategy.",
            kr: "중국 공동 감산(가동률 ~61%). 범용 약세/스페셜티 견조 — 믹스 전략에 유리." },
          { en: "Longer term, we are shifting from basic to specialty. Electronics is now 12 to 13 percent of silicone sales. We want to grow it to 20 percent. Our EBITDA margin target for 2028 to 2029 is 16 to 17 percent.",
            kr: "전자재료 12~13% → 20% 목표. 2028~29 EBITDA 16~17% 목표.", pause: true }
        ]
      },
      {
        title: "Building Materials", time: "4:30 – 6:00",
        chips: ["Revenue +10%+ QoQ", "OPM 13–14%", "Insulation ~30kt/quarter", "Gypsum 60–70% share, never a loss", "Housing recovery ~early 2028"],
        paras: [
          { en: "Building Materials grew more than 10 percent quarter-on-quarter, despite higher PVC costs. The operating margin improved to the 13 to 14 percent range.",
            kr: "건자재 매출 +10%+ QoQ, 영업이익률 13~14%." },
          { en: "The key driver was insulation. Volumes recovered toward 30 thousand tons a quarter, as semiconductor-cluster projects started taking materials, plus some data-centre demand. Higher utilisation matters a lot here, because insulation is a fixed-cost-heavy business.",
            kr: "핵심은 단열재: 반도체 클러스터 + 데이터센터로 분기 3만톤 회복. 장치산업 → 가동률 효과." },
          { en: "Gypsum board stayed solid. It is our cash cow. We hold a 60 to 70 percent domestic share, and this business has never recorded a loss.",
            kr: "석고보드 견조 — 점유율 60~70%, 무적자 캐시카우." },
          { en: "On the outlook, let me be balanced. We expect the third quarter to hold around the second-quarter level. The commercial segment improves from the second half. But the domestic housing market is still weak. We do not expect a real housing recovery until around early 2028. So we stay cautious.",
            kr: "3Q는 2Q 수준. 상업용 하반기 개선, 주택 본격 회복은 2028년 초 — 보수적.", pause: true }
        ]
      },
      {
        title: "Paint", time: "6:00 – 7:30",
        chips: ["Revenue +12–13% QoQ", "April price +10%", "Margin ~9%", "Marine orders ~2x YoY, solid to 2028", "FY target 9–10%"],
        paras: [
          { en: "Paint revenue grew 12 to 13 percent quarter-on-quarter, helped by our April price increase of about 10 percent and strong overseas volumes.",
            kr: "도료 매출 +12~13% QoQ(4월 약 10% 인상 + 해외)." },
          { en: "The margin came down slightly, to around 9 percent, because of the time lag in passing raw-material costs to prices. Internally, we see this as a solid defence in a rising-cost quarter.",
            kr: "마진 약 9%(시차). 원가 상승기 기준 선방." },
          { en: "By product: ship coatings are the bright spot. New orders roughly doubled year-on-year, and our order book is solid through 2028. Automotive and industrial coatings use market-linked pricing, which protects margins.",
            kr: "선박 하이라이트(수주 2배, ’28까지 견조). 자동차·공업용 시황연동." },
          { en: "The third quarter is the cost peak, given the lag. But we see room to raise architectural paint prices in the second half. Our goal is to keep the margin in the 9 to 10 percent range for the year.",
            kr: "3Q 원가 정점. 하반기 건축용 인상 여지. 연간 9~10% 목표.", pause: true }
        ]
      },
      {
        title: "Net Profit & Balance Sheet", time: "7:30 – 9:00",
        chips: ["C&T stake 4.3tn → 7.9tn", "Non-operating, moves both ways", "Funding rate 7–9% → <4%", "Interest saved 100bn+/yr", "Net debt ~3.9tn", "Debt ratio ~115% → target <100%"],
        paras: [
          { en: "Net profit improved sharply, mainly from valuation gains on our Samsung C&T shares. The stake was valued at 4.3 trillion won at the end of March, and 7.9 trillion at the end of June. Even after the recent pullback, it is around 7 trillion, roughly two times our market capitalisation.",
            kr: "삼성물산 평가액 4.3조 → 7.9조(현재 약 7조, 시총의 약 2배)." },
          { en: "Please remember this is a non-operating item, and it moves with share prices each quarter.",
            kr: "비영업 항목, 분기별 변동." },
          { en: "On the balance sheet, the story is steady improvement. Our average funding rate came down from 7 to 9 percent at the time of the acquisition, to <b>below 4 percent</b>. That saves more than 100 billion won of interest a year.",
            kr: "평균 조달금리 7~9% → 4% 미만, 이자 연 1,000억+ 절감." },
          { en: "Net debt is about 3.9 trillion won. Our debt ratio improved to about 115 percent, heading toward our long-term target of below 100 percent.",
            kr: "순차입금 약 3.9조, 부채비율 약 115% → 장기 목표 100% 미만.", pause: true }
        ]
      },
      {
        title: "Shareholder Returns & Close", time: "9:00 – 10:00",
        chips: ["Floor 6,000 won + 10% of standalone OP >100bn", "Cancel all treasury except ~4%, by Sep 2027", "C&T dividend ↑ → returns under review"],
        paras: [
          { en: "Finally, shareholder returns: three pillars. <b>One</b>: our dividend has a floor of 6,000 won per share, plus 10 percent of standalone operating profit above 100 billion won.",
            kr: "①주당 6,000원 하한 + 별도 OP 1,000억 초과분 10%." },
          { en: "<b>Two</b>: we are cancelling all treasury shares except about 4 percent for employee compensation, to be completed by September next year.",
            kr: "②자사주 전량 소각(4% 제외), 내년 9월까지." },
          { en: "<b>Three</b>: Samsung C&T’s dividend is linked to Samsung Electronics, so our dividend income could grow substantially. We are reviewing how to reflect that in shareholder returns.",
            kr: "③물산 배당 확대 → 환원 연계 검토. (8월 공시로 ≥50% 특별배당으로 확정됨)" },
          { en: "To sum up: the second quarter showed broad-based recovery, led by silicone. Our priorities for the second half are simple. Hold the silicone margin, pass costs through in paint, and stay disciplined on the balance sheet.",
            kr: "요약: 실리콘 주도 고른 회복. 하반기: 실리콘 마진 유지, 도료 전가, 재무 규율." },
          { en: "<b>Thank you very much. I am happy to take your questions.</b>",
            kr: "감사합니다. 질문 받겠습니다." }
        ]
      }
    ]
  },
  {
    id: "company-overview",
    quarter: "Evergreen", kind: "Intro",
    title: "Company Overview",
    titleKr: "회사 개요 · 신규 투자자용 1분",
    duration: "1 min",
    badge: "유지",
    note: "처음 만나는 투자자에게. 3개 부문 + 기타.",
    sections: [
      {
        title: "KCC in One Minute", time: "0:00 – 1:00",
        chips: ["3 segments + Others", "Momentive 100%, since 2019", "Plants in 8 countries", "Gypsum 60%+ · Insulation 55%+", "Coatings #1 in Korea"],
        paras: [
          { en: "KCC has three main businesses: <b>Silicone, Building Materials, and Coatings</b>. We also have a smaller Others division with advanced materials.",
            kr: "3대 부문 + 기타(소재)." },
          { en: "Silicone is our largest business, and it is global. Through Momentive, which we have fully owned since 2019, we are one of the largest specialty silicone producers in the world. We have plants in eight countries.",
            kr: "실리콘 최대·글로벌. 모멘티브 100%(2019~), 8개국 생산." },
          { en: "Building Materials is focused on Korea: gypsum board, insulation, and PVC windows. We hold over 60 percent share in gypsum board and over 55 percent in inorganic insulation.",
            kr: "건자재 국내 중심: 석고보드 60%+, 무기단열재 55%+." },
          { en: "Coatings covers automotive, marine, industrial and architectural. We are number one in Korea, with long-term relationships with Hyundai Motor Group and the major shipyards.",
            kr: "도료 국내 1위. 현대차그룹·조선사 장기 관계." },
          { en: "Others makes specialty materials: epoxy molding compounds, ceramic substrates and composites. That is KCC in one minute.",
            kr: "기타: EMC·세라믹 기판·복합소재." }
        ]
      }
    ]
  }
];

// ============================================================
// 추가분 — 2Q26 치트시트 v3.2(8/17)의 Momentive 5분 요약 + 실리콘 비전(대외 가능 정성 메시지만)
// ============================================================
window.KCC_SCRIPTS.push(
  {
    id: "momentive-5min",
    quarter: "2Q 2026", kind: "Topic",
    title: "Momentive — 5-minute Update",
    titleKr: "모멘티브 5분 요약 (실리콘 코멘트 뒤에)",
    duration: "5 min",
    badge: "방향성만",
    note: "Bridge 20초 → 포인트 5개 각 40~50초 → Closing 20초. 수치를 요구받으면 “Momentive’s stand-alone numbers are not separately disclosed.”",
    sections: [
      {
        title: "Bridge", time: "0:00 – 0:20",
        chips: ["US silicone subsidiary", "Directionally — not separately disclosed", "Five points"],
        paras: [
          { en: "Let me add some colour on <b>Momentive</b>, our US silicone subsidiary. I will speak directionally, since its stand-alone numbers are not separately disclosed. <b>Five points.</b>",
            kr: "미국 실리콘 자회사 모멘티브에 대해 방향성 중심으로 다섯 가지." }
        ]
      },
      {
        title: "1 · Profitability — turned the corner", time: "0:20 – 1:10",
        chips: ["1H pre-tax meaningfully better YoY", "Refinancing cut interest", "Operating side stable to improving", "Gap = execution, not demand"],
        paras: [
          { en: "<b>First, profitability.</b> Momentive’s first half was meaningfully better than a year ago at the pre-tax level. The refinancing cut interest costs sharply, and the operating side is stable to improving.",
            kr: "상반기 세전 손익 전년 대비 의미 있게 개선. 리파이낸싱으로 이자 급감, 영업은 안정~개선." },
          { en: "Where we are behind our own plan, it is our own execution — quality and delivery — <b>not demand</b>.",
            kr: "자체 계획 미달분은 수요가 아니라 품질·납기 실행 문제." }
        ]
      },
      {
        title: "2 · Demand is there — the issue is execution", time: "1:10 – 2:00",
        chips: ["Orders well above last year", "Backlog healthy", "Shortfall = orders not shipped on time", "Pricing absorbed raw-material inflation"],
        paras: [
          { en: "<b>Second, demand.</b> Order intake is running well above last year, and the backlog is healthy.",
            kr: "수주 전년 대비 크게 상회, 수주잔고 건전." },
          { en: "The shortfall is orders we could not ship on time, because of capacity bottlenecks or quality holds. Recovering those is the number-one priority for the second half. Pricing has so far absorbed raw-material inflation.",
            kr: "미달분은 설비 병목·품질 보류로 못 나간 주문 → 하반기 최우선 회복 과제. 가격이 원재료 인플레 흡수 중.", pause: true }
        ]
      },
      {
        title: "3 · Balance sheet — strong liquidity, goal is self-funding", time: "2:00 – 2:50",
        chips: ["Liquidity at multi-year high", "Interest far lower", "KCC support = investment, not losses", "Board: self-funding · monthly cash forecast"],
        paras: [
          { en: "<b>Third, the balance sheet.</b> Momentive’s liquidity is at its strongest level in several years, and interest costs are far lower after last year’s refinancing.",
            kr: "유동성 수년래 최고, 이자 급감." },
          { en: "KCC’s support this year is for the investment programme, not for covering losses. The clear direction from the board is for Momentive to become <b>self-funding</b>, with a monthly cash forecast and cash actions on inventory, purchasing and costs.",
            kr: "올해 KCC 지원은 투자 재원. 이사회 방향은 자립 — 월별 현금 전망, 재고·구매·비용 조치." }
        ]
      },
      {
        title: "4 · Strategy — scale down basics, focus specialty", time: "2:50 – 3:40",
        chips: ["Lost share in commodities to China", "Not fighting on price", "Cost ratio 80 → 75%", "Growth: personal care · electronics/thermal · healthcare · additives", "Specialty capacity in Asia"],
        paras: [
          { en: "<b>Fourth, strategy.</b> Momentive lost share in commoditised products to low-cost Chinese producers, and we are choosing not to fight on price there.",
            kr: "범용품에서 중국 저원가 업체에 점유율 상실 → 가격 경쟁 안 함." },
          { en: "Low-margin basics are being scaled down deliberately. That is what you see in our silicone cost ratio improving from about 80 to 75 percent. The growth focus is personal care, electronics and thermal management, healthcare, and specialty additives, with capital going into specialty capacity in Asia.",
            kr: "저마진 베이직 의도적 축소(원가율 80→75%). 성장 초점: 퍼스널케어·전자/열관리·헬스케어·스페셜티 첨가제. 아시아 스페셜티 증설.", pause: true }
        ]
      },
      {
        title: "5 · Execution — quality, delivery, KCC know-how", time: "3:40 – 4:40",
        chips: ["Quality & on-time delivery = main constraints", "New head of quality · SPC in every plant", "Lead time ~3 weeks → ~1 week", "KCC know-how · 18 months injury-free in Korea"],
        paras: [
          { en: "<b>Fifth, execution.</b> Management is candid that quality and on-time delivery are the main constraints today. There is a new head of quality, statistical process control is going into every plant, and the make-to-stock model is being rebuilt so key products ship within about a week instead of three.",
            kr: "품질·정시 납기가 현재 제약임을 인정. 새 품질 총괄, 전 공장 SPC, 리드타임 3주→약 1주." },
          { en: "And we are transferring KCC’s operational know-how: lead-time discipline, scrap reduction, safety. Our Korean sites have gone <b>eighteen months</b> without a recordable injury.",
            kr: "KCC 노하우 이전(리드타임·폐기·안전). 국내 사업장 18개월 무재해." }
        ]
      },
      {
        title: "Closing", time: "4:40 – 5:00",
        chips: ["Demand there", "Profitability turned", "Liquidity solid", "Next 18 months = execution"],
        paras: [
          { en: "So: demand is there, profitability has turned the corner, liquidity is solid, and the next eighteen months are about execution. You will see the progress in our silicone segment results each quarter.",
            kr: "수요 있음, 수익성 고비 넘음, 유동성 탄탄, 향후 18개월은 실행. 매 분기 실리콘 실적으로 확인." }
        ]
      }
    ]
  },
  {
    id: "silicone-vision",
    quarter: "Evergreen", kind: "Topic",
    title: "Silicone — Vision & Pipeline",
    titleKr: "실리콘 장기 비전·파이프라인 (3~4분)",
    duration: "3–4 min",
    badge: "유지",
    note: "장기 질문이 나올 때. 제품별 매출 전망·고객사명·배합 정보 금지.",
    sections: [
      {
        title: "Direction", time: "0:00 – 1:00",
        chips: ["Basic → specialty", "Leaner cost base: 80 → 75%", "EBITDA 11.8% → 13% → 13.5%", "Target 16–17% by 2028–29", "2030: 10tn won, global #2"],
        paras: [
          { en: "Our long-term direction is simple: move from basic silicone to <b>high-value specialty</b>, with a leaner cost base.",
            kr: "장기 방향: 베이직 → 고부가 스페셜티, 더 가벼운 원가 구조." },
          { en: "Silicone grows with big structural trends: electric vehicles, AI data centres, and healthcare. Our job is to put our silicone into those growth markets.",
            kr: "EV·AI 데이터센터·헬스케어 등 구조적 트렌드와 함께 성장." },
          { en: "We have been downscaling low-margin basics since the second half of last year. The cost-to-sales ratio improved from about 80 to about 75 percent, and the EBITDA margin from 11.8 percent in 2024 to 13.5 percent in Q2 this year.",
            kr: "저마진 베이직 축소. 원가율 80→75%, EBITDA 11.8%(’24)→13.5%(2Q26)." },
          { en: "Our targets: an EBITDA margin of <b>16 to 17 percent by 2028 to 2029</b>, high teens by the late 2020s. Under the value-up plan, silicone revenue of 10 trillion won by 2030 and a firm number-two position globally. The 10 trillion is a target, not a forecast.",
            kr: "목표: ’28~29 EBITDA 16~17%, 후반 하이틴. 2030 매출 10조·글로벌 2위 — 타겟이지 예측 아님.", pause: true }
        ]
      },
      {
        title: "Four Platforms", time: "1:00 – 2:30",
        chips: ["Mobility: tire silanes, release agents", "Electronics: gap fillers, EMI, adhesives", "Healthcare: USP Class VI tubing, skin adhesives, single-use", "Personal care & sustainability: naturals, PFAS-replacement"],
        paras: [
          { en: "<b>One, mobility.</b> We supply silane coupling agents for fuel-efficient tires, and tire release agents. As cars go electric, demand for our materials keeps growing.",
            kr: "①모빌리티: 고연비 타이어 실란 커플링제, 이형제. EV 전환으로 수요 증가." },
          { en: "<b>Two, electronics and thermal management.</b> Gap fillers, EMI shielding, and adhesives for electronics. AI data centres and EV chargers need to manage heat. That is a structural growth driver for silicone.",
            kr: "②전자·열관리: 갭필러·EMI 차폐·접착. AI DC·EV 충전기 발열 관리." },
          { en: "<b>Three, healthcare and bio-pharma.</b> Medical-grade tubing with USP Class VI certification, silicone skin adhesives, and single-use tubing for bio-pharma production. High barriers, high value.",
            kr: "③헬스케어: USP Class VI 튜빙, 의료용 점착제, 바이오 일회용 튜빙. 고진입장벽." },
          { en: "<b>Four, personal care and sustainability.</b> Natural-based personal-care ingredients, PFAS-replacement coatings, and eco-friendly polyurethane additives.",
            kr: "④퍼스널케어·지속가능: 천연 유래 성분, PFAS 대체 코팅, 친환경 PU 첨가제.", pause: true }
        ]
      },
      {
        title: "Proof Points & Close", time: "2:30 – 3:30",
        chips: ["NB-latex defoamer localised", "Railway LSR: HL3 under EN 45545-2", "Electronics 12–13% → 20% of sales", "Next-gen tire silane: pilot → 2028 decision"],
        paras: [
          { en: "Two quick proof points. We localised the silicone defoamer for NB-latex gloves, a market long dominated by foreign suppliers. And our liquid silicone rubber for railway bellows earned the highest fire-safety grade, HL3, under the European standard EN 45545-2.",
            kr: "사례: NB라텍스 소포제 국산화, 철도 벨로우즈 LSR HL3." },
          { en: "The engine is the specialty mix. Electronics is now 12 to 13 percent of silicone sales with an EBITDA margin above 30 percent, and we want to grow it to 20 percent. In tire silanes, we are commercialising a next-generation platform before competitors replace our own product.",
            kr: "전자 12~13% → 20%(마진 30%+). 타이어 실란 차세대 플랫폼 상업화." },
          { en: "In short, we are building the next decade of our silicone business on EV, electronics and healthcare, with a stronger cost base and a richer specialty mix.",
            kr: "요컨대 EV·전자·헬스케어 위에 다음 10년. 더 탄탄한 원가, 더 풍부한 스페셜티 믹스." }
        ]
      }
    ]
  }
);

// ============================================================
// 사업부별 1분 코멘트 — 투자자가 “walk me through X”라고 할 때 읽는 짧은 스크립트
// 기준: 3Q 스크립트(10/26) 스탠스 + 2Q 확정 수치. kind: "Segment"
// ============================================================
window.KCC_SCRIPTS.push(
  {
    id: "seg-bm-3q26",
    quarter: "3Q 2026", kind: "Segment",
    title: "Building Materials — 1-minute comment",
    titleKr: "건자재 1분 코멘트 + 예상 질문 2개",
    duration: "1–2 min",
    badge: "3Q 공시 전",
    note: "Q2 복기 → Q3 방향 → view → Q&A 2개.",
    sections: [
      {
        title: "Building Materials", time: "0:00 – 1:00",
        chips: ["Q2: 262.3bn / 37.9bn · strongest in 5", "Gypsum 60–70% share, never a loss", "Q3 demand softer", "Commercial first, housing ~early 2028"],
        paras: [
          { en: "Let me recap Q2 first. Building Materials had its <b>strongest quarter in five</b>: revenue 262.3 billion won, up 13.7 percent, operating profit 37.9 billion, up about 40 percent. Volume into semiconductor sites and data centres carried it, while housing stayed weak.",
            kr: "2Q 복기: 5개 분기 내 최고. 매출 2,623억(+13.7%), OP 379억(+40%). 하이테크·DC 견인, 주택 부진." },
          { en: "For Q3, the construction downturn continues. Interior demand weakened, and the first semiconductor volumes came off their Q2 level. In PVC windows, lower demand and the raw-material burden both weigh on profit. <b>Gypsum board remains the stable core.</b>",
            kr: "3Q: 다운사이클 지속. 인테리어↓, 반도체 초도물량↓. 창호 이중 부담. 석고보드 안정." },
          { en: "Our view is unchanged: <b>commercial first, housing later</b>. Gypsum board lags housing starts by about two years, so we do not expect a genuine housing recovery until around early 2028, and we hold even that loosely.",
            kr: "view 불변: 상업용 먼저, 주택 ’28 초. 석고보드 2년 후행. 단정 금지." }
        ]
      },
      {
        title: "Likely questions", time: "Q&A",
        chips: ["Recovery? → Commercial first", "Data centres? → positive, not yet game-changer"],
        paras: [
          { en: "<b>When does it recover?</b> Commercial first, housing later. Commercial is already working; housing around early 2028, and we stay conservative.",
            kr: "회복 시점 → 상업용 먼저, 주택 ’28 초, 보수적." },
          { en: "<b>Data centres?</b> Positive, but not yet a game-changer for volumes. A mid-size building uses about 200 tons. Hyperscale would change that — upside, not base case.",
            kr: "DC → 긍정적이나 아직 게임체인저 아님(~200톤/동). 하이퍼스케일은 업사이드." }
        ]
      }
    ]
  },
  {
    id: "seg-paint-3q26",
    quarter: "3Q 2026", kind: "Segment",
    title: "Paint & Coatings — 1-minute comment",
    titleKr: "도료 1분 코멘트 + 예상 질문 2개",
    duration: "1–2 min",
    badge: "3Q 공시 전",
    note: "Q2 복기 → Q3 원가 시차 → 제품별 → Q&A 2개.",
    sections: [
      {
        title: "Paint & Coatings", time: "0:00 – 1:00",
        chips: ["Q2: 545.9bn / 48.5bn · April +10%", "Q3 = cost peak, below 1H", "Auto & marine demand OK · architectural weak", "FY margin 9–10%"],
        paras: [
          { en: "Quick recap of Q2. Paint grew revenue 15.9 percent to 545.9 billion won, on our April price increase of about 10 percent and strong overseas volumes. The margin came down to around 9 percent because of the lag in passing raw-material costs through.",
            kr: "2Q: 매출 5,459억(+15.9%), 4월 ~10% 인상·해외. 마진 ~9%(시차)." },
          { en: "In Q3, demand in automotive and marine continues despite the slow season. But because of the raw-material delay, profit will be below the first half. <b>Q3 is the cost peak.</b> Architectural is the weak spot: pass-through is harder and demand is poor.",
            kr: "3Q: 자동차·선박 수요 지속. 원재료 시차로 상반기 대비↓. 3Q 원가 정점. 건축 약점." },
          { en: "By product, <b>marine is the bright spot</b>: mid-teens margins and an order book solid through 2028. Auto runs at around 10 percent on market-linked pricing. Overseas volumes keep growing. For the year we aim to hold the margin in the 9 to 10 percent range.",
            kr: "선박 미드틴·수주 ’28 견조. 자동차 ~10% 시황연동. 해외 성장. 연간 9~10%." }
        ]
      },
      {
        title: "Likely questions", time: "Q&A",
        chips: ["Raw materials? → pass-through with a lag", "Price cuts if oil falls? → position lets us hold"],
        paras: [
          { en: "<b>How do you manage raw materials?</b> Price pass-through, with a lag. Auto and marine use market-linked or spec pricing; architectural is constrained. Q3 is the peak, and in Q4 the lag works for us.",
            kr: "원가 → 시차 두고 전가. 자동차·선박 시황연동, 건축 제약. 4Q엔 시차가 유리하게." },
          { en: "<b>Price cuts if oil falls?</b> Our market position lets us hold price. Dominant domestic and marine shares, and repair coatings grow double digits on the installed base.",
            kr: "유가 하락 시 인하? → 시장 지위로 판가 유지. 보수선 두 자릿수 성장." }
        ]
      }
    ]
  },
  {
    id: "seg-silicone-3q26",
    quarter: "3Q 2026", kind: "Segment",
    title: "Silicone — 1-minute comment",
    titleKr: "실리콘 1분 코멘트 + 예상 질문 3개",
    duration: "1–2 min",
    badge: "3Q 공시 전",
    note: "가장 많이 묻는 부문. Q2 복기 → Q3 두 가지 압박 → 양극화 → Q&A 3개. 깊이 들어가면 Momentive 5분 요약으로.",
    sections: [
      {
        title: "Silicone", time: "0:00 – 1:00",
        chips: ["Q2: OP 2.6 → 37.3bn · EBITDA 9.5 → 13.5%", "Q3 down vs Q2: season + FX", "Q4 recovery · FY EBITDA 12–13%", "Specialty up, low-end slow", "FY OP up YoY, 100bn ‘challenging’"],
        paras: [
          { en: "Silicone was the swing factor in Q2. Operating profit went from 2.6 billion won to <b>37.3 billion</b>, and the EBITDA margin from 9.5 to 13.5 percent, on the April price increase, volume up from 63 to 66 thousand tons, and the low-end restructuring showing through.",
            kr: "2Q: OP 26→373억, EBITDA 9.5→13.5%. 4월 인상·물량 6.3→6.6만톤·저가 라인 구조조정." },
          { en: "In Q3, raw-material volatility is limited. The pressure comes from two places. First, the summer slow season, which mainly hurts our low-end lines. Second, the stronger won, which reduces the translated value. So <b>Q3 is down from Q2, and we expect Q4 to recover.</b> Full-year EBITDA margin should be in the 12 to 13 percent range.",
            kr: "3Q: ①비수기 → 저가 제품군 ②원화 강세 → 환산. 3Q↓, 4Q 회복. 연간 EBITDA 12~13%." },
          { en: "Structurally, the gap inside the portfolio is widening. Low-end products are not improving as fast as we would like. Electronic materials and personal care keep growing with solid margins. For the year, silicone operating profit should be up on last year, but 100 billion won looks challenging.",
            kr: "양극화: 저가 더딤, 전자·퍼스널케어 성장. 연간 OP 전년 대비 증가, 1,000억은 쉽지 않음(여기까지)." }
        ]
      },
      {
        title: "Likely questions", time: "Q&A",
        chips: ["Sustainable? → price trigger, supply side sustains", "Normalise when? → specialty there, low-end drag", "Momentive? → 5-min update script"],
        paras: [
          { en: "<b>Is the recovery sustainable?</b> Price was the trigger; the supply side makes it sustainable — Chinese cuts, peers raising prices, and our own specialty mix. Early in the recovery, so I would not overstate it.",
            kr: "지속성 → 가격 촉발, 공급이 지속(중국 감산·경쟁사 인상·믹스). 회복 초기." },
          { en: "<b>When does the margin normalise?</b> The specialty side is already there; the low-end side is the drag. Q4 recovers; full-year 12 to 13 percent. We benchmark against Wacker and have not closed the gap yet.",
            kr: "정상화 → 스페셜티는 이미, 저가가 발목. 4Q 회복, 연간 12~13%. Wacker 갭 인정." },
          { en: "<b>Momentive?</b> Let me give you five points directionally — stand-alone numbers are not separately disclosed. <i>(→ Momentive 5-minute Update)</i>",
            kr: "모멘티브 → 5분 요약 스크립트로 전환." }
        ]
      }
    ]
  },
  {
    id: "seg-materials-3q26",
    quarter: "3Q 2026", kind: "Segment",
    title: "Advanced Materials (Others) — 1-minute comment",
    titleKr: "소재·기타 1분 코멘트",
    duration: "1 min",
    badge: "유지",
    note: "질문이 있을 때만. EMC·세라믹 기판.",
    sections: [
      {
        title: "Advanced Materials", time: "0:00 – 1:00",
        chips: ["Q2: 112.5bn / 1.3bn · substrate capex", "EMC: power modules · not HBM", "AMB (EV) / DCB (industrial)", "Jeonju AMB Nov · Vietnam DCB", "Share ~7% · 20+ Chinese entrants"],
        paras: [
          { en: "Our advanced-materials business sits in the Others segment: revenue 112.5 billion won in Q2 with a thin 1.3 billion operating profit, because we are investing in ceramic-substrate capacity. <b>Small today, but this is where the semiconductor and EV exposure sits.</b>",
            kr: "기타 = 첨단소재. 2Q 매출 1,125억·OP 13억(기판 투자). 반도체·EV 익스포저." },
          { en: "In EMC our strength is power-module compounds. We do not directly supply HBM molding compounds; we supply WOP-type EMC for DRAM, and our liquid products are being evaluated for other packaging applications.",
            kr: "EMC: 파워모듈 강점. HBM 직접 공급 아님, DRAM용 WOP." },
          { en: "Ceramic substrates go into power modules inside inverters, for EV drivetrains and AI data-centre power. AMB is the EV-grade high end, DCB the industrial workhorse. Jeonju AMB expansion completes in November. With twenty-plus Chinese entrants and the EV slowdown, profitability needs time; our share is around 7 percent. The positives are the Hyundai Mobis channel, customers de-risking from China, and AI power demand.",
            kr: "기판 = 인버터 속 파워모듈. AMB(EV)/DCB(산업). 전주 11월. 중국 20+·캐즘 → 시간 필요, 점유 ~7%. 모비스·탈중국·AI 전력." }
        ]
      }
    ]
  }
);

// ============================================================
// 2026.11 MBR 「발언가능」 기준 — 실리콘 3Q 리뷰 + 4Q 전망 토픽 스크립트 (수치 없음)
// ============================================================
window.KCC_SCRIPTS.push(
  {
    id: "silicone-3q4q-update",
    quarter: "4Q 2026", kind: "Topic",
    title: "Silicone — 3Q Review & 4Q Outlook",
    titleKr: "실리콘·모멘티브 3Q 리뷰 + 4Q 전망 (2~3분, 수치 없음)",
    duration: "2–3 min",
    badge: "방향성만",
    note: "11월 MBR 반영. 수치 요구 시 “Momentive’s stand-alone numbers are not separately disclosed.” 고객사명·사업장명·2027 목표치 금지.",
    sections: [
      {
        title: "3Q — what happened", time: "0:00 – 0:50",
        chips: ["Demand held", "Execution + cost, not FX", "Quality holds · production", "Focus on what we control"],
        paras: [
          { en: "Let me give you the silicone picture directionally, since Momentive’s stand-alone numbers are not separately disclosed.",
            kr: "브리지: 방향성 중심, 단독 수치 미공시." },
          { en: "In the third quarter, <b>demand held</b>. Order intake and the backlog stayed healthy. The shortfall against our own plan came from <b>execution and higher costs</b>: quality holds and production issues delayed shipments, and cost inflation returned.",
            kr: "3Q: 수요 유지. 미달은 실행(품질 보류·생산)과 원가 상승." },
          { en: "FX moved both ways across the year and largely offsets, so we do not use it to explain the quarter. Management is focused on what we control: volume, price and execution.",
            kr: "환율은 연간 상쇄 — 설명 요인으로 쓰지 않음. 통제 가능한 것에 집중.", pause: true }
        ]
      },
      {
        title: "4Q — the target", time: "0:50 – 1:30",
        chips: ["Improvement vs Q3 — a target", "Price increases from mid-Nov", "Backlog → shipments", "EM · Healthcare stronger", "Freight surcharge = cost recovery"],
        paras: [
          { en: "For the fourth quarter we <b>target an improvement over Q3</b>. Three levers: the recent sales outlook, price increases that take effect from mid-November, and converting the backlog into shipments. Electronic materials and healthcare are the relatively stronger businesses.",
            kr: "4Q: 3Q 대비 개선 목표. 판매 전망·11월 중순 가격 인상·백로그 실행. EM·헬스케어 상대 강세." },
          { en: "On costs, we are recovering higher freight through surcharges. That is cost recovery, not upside. And pricing decisions now sit closer to the regions, so we react faster when inflation moves.",
            kr: "운송비 할증으로 회수(업사이드 아님). 가격 결정 지역화 → 더 빠른 대응.", pause: true }
        ]
      },
      {
        title: "Cash & execution", time: "1:30 – 2:10",
        chips: ["Priority: working capital, own cash", "Liquidity solid", "Owner + action per item", "Quality: improving, repeated verification", "Safety strong"],
        paras: [
          { en: "On cash, Momentive’s top priority is <b>working-capital efficiency and generating its own cash</b>. Liquidity, including undrawn facilities, remains solid. Fourth-quarter shipments feed receivables and cash in early 2027.",
            kr: "현금: 운전자본 효율화·자체 현금 창출 최우선. 유동성 탄탄. 4Q 출하 → 2027 초 현금." },
          { en: "On execution, the management rhythm changed. Unshipped orders, out-of-spec material, complaints and inventory each have an owner and an action, tracked daily and weekly. Quality is improving, but we are in a repeated-verification phase and do not call it solved. Safety at the major sites is strong, with no incidents through shutdown and restart.",
            kr: "실행: 항목별 담당자·조치, 일·주 단위. 품질 개선 중이나 반복 검증. 안전 양호." }
        ]
      },
      {
        title: "Next year & close", time: "2:10 – 2:40",
        chips: ["AI thermal: qualification progressed", "2027: above-market growth, better profitability", "Plan not final — no numbers"],
        paras: [
          { en: "Looking to next year: customer qualification in AI data-centre thermal materials has progressed, and we expect it to contribute to growth, scaling step by step as raw-material constraints ease.",
            kr: "AI 열관리 고객 인증 진전 → 내년 성장 기여, 단계적." },
          { en: "We are planning for <b>growth above market growth and improved profitability</b>. The plan is not final, so I will not give you numbers today. <b>That is the silicone update. Happy to take questions.</b>",
            kr: "2027: 시장 이상 성장·수익성 개선 목표로 수립 중. 수치 없음. Q&A." }
        ]
      }
    ]
  }
);
