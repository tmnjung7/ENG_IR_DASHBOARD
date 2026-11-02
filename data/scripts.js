// ============================================================
// SPEAK 스크립트 — 텔레프롬프터용
// 원칙(10/26 L1 Capital 미팅 반영): 한 문장 = 한 메시지, 12단어 이내 목표,
//   나열은 First / Second / Third, 쉬운 단어(dip→fall, lag→delay 등)
// 구조: script → sections[] → paras[] { en, kr, pause? }
//   chips = 문단 위에 보여줄 숫자·키워드 (3~6개)
// 분기 교체 시: 맨 위 스크립트를 새 분기 것으로 바꾸고, 지난 분기는 아래로 내리거나 삭제
// ============================================================
window.KCC_SCRIPTS = [
  {
    id: "q3-2026-recent",
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
