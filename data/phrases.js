// ============================================================
// PHRASES — 미팅 영어 (생존영어 · 쉬운 단어 사전 · 발음 · 숫자 · 흔한 실수)
// 비즈니스 영어 수준 → 미팅에서 바로 쓰는 짧은 문장 위주. 분기 무관, 유지.
// ============================================================
window.KCC_PHRASES = {
  categories: [
    {
      id: "open", title: "Opening", titleKr: "시작",
      items: [
        { en: "Thank you for your time today. I am [name] from the KCC IR team.", kr: "시간 내주셔서 감사합니다. KCC IR팀 [이름]입니다." },
        { en: "Can you hear me clearly? Good.", kr: "(Zoom) 잘 들리시나요?" },
        { en: "I will keep this to about eight minutes, and then take your questions.", kr: "약 8분 설명 후 질문 받겠습니다." },
        { en: "Today I will give you the direction, not the numbers.", kr: "오늘은 수치가 아닌 방향성 중심으로 (공시 전)." },
        { en: "Please stop me at any point if you have a question.", kr: "중간에 언제든 질문하셔도 됩니다." }
      ]
    },
    {
      id: "transition", title: "Transitions", titleKr: "전환·연결",
      items: [
        { en: "Let me start with a short recap of Q2. It is the base for Q3.", kr: "2Q 복기 후 3Q로." },
        { en: "First… Second… Third…", kr: "나열은 항상 First/Second/Third로 (복합문 금지)." },
        { en: "Now, moving to the segments.", kr: "이제 부문별로." },
        { en: "That brings me to shareholder returns.", kr: "주주환원으로 넘어가면." },
        { en: "To sum up…", kr: "요약하면." },
        { en: "One more point before I close.", kr: "마무리 전 한 가지 더." }
      ]
    },
    {
      id: "qa-entry", title: "Into Q&A / During Q&A", titleKr: "Q&A 진입·진행",
      items: [
        { en: "That is our Q3 briefing. I am happy to take your questions.", kr: "낭독 후 자연스러운 Q&A 진입 (“can you give me a question?” 대체)." },
        { en: "That is a good question.", kr: "좋은 질문입니다 (시간 벌기 1초)." },
        { en: "Let me answer in two parts.", kr: "두 부분으로 답하겠습니다." },
        { en: "The short answer is yes. The longer answer is…", kr: "짧게는 예, 길게 말하면…" },
        { en: "Does that answer your question?", kr: "답이 되었나요?" },
        { en: "Shall I move on to the next point?", kr: "다음으로 넘어갈까요?" },
        { en: "Any other questions? Otherwise I will wrap up.", kr: "다른 질문 없으시면 마무리하겠습니다." }
      ]
    },
    {
      id: "didnt-get", title: "Didn’t Understand", titleKr: "못 알아들었을 때",
      items: [
        { en: "Sorry, could you repeat the question, please?", kr: "다시 말씀해 주시겠습니까?" },
        { en: "Could you say that a little more slowly?", kr: "조금 천천히 말씀해 주시겠어요?" },
        { en: "If I understand correctly, you are asking about [topic]. Is that right?", kr: "[주제] 질문이 맞으신가요? (확인 후 답변 — 가장 안전)" },
        { en: "Do you mean A, or B?", kr: "A인가요, B인가요?" },
        { en: "Sorry, I missed the last part. Could you repeat it?", kr: "뒷부분을 놓쳤습니다." },
        { en: "Could you type the question in the chat as well?", kr: "(Zoom) 채팅으로도 적어주시겠어요?" }
      ]
    },
    {
      id: "buy-time", title: "Buying Time", titleKr: "시간 벌기·확인",
      items: [
        { en: "Let me think about that for a second.", kr: "잠시 생각해 보겠습니다." },
        { en: "Let me get back to you on that after the meeting.", kr: "미팅 후 확인해서 회신드리겠습니다." },
        { en: "I do not have the exact figure with me. I will send it by email today.", kr: "정확한 수치는 지금 없고, 오늘 이메일로 보내드리겠습니다." },
        { en: "Let me check with my colleague.", kr: "동료와 확인해 보겠습니다." },
        { en: "I will take that as a follow-up.", kr: "후속 확인 사항으로 하겠습니다." }
      ]
    },
    {
      id: "cant-say", title: "Cannot Disclose", titleKr: "비공개·미확정",
      items: [
        { en: "That is a detail we do not disclose, but I can give you the direction.", kr: "세부는 비공개, 방향성은 드릴 수 있습니다." },
        { en: "Those are analyst estimates, not our guidance.", kr: "증권가 추정치 ≠ 가이던스." },
        { en: "That is a matter for the board to decide.", kr: "이사회 판단 영역입니다." },
        { en: "Nothing has been finalised yet.", kr: "확정된 것은 없습니다." },
        { en: "That is not confirmed. I would not want to speculate.", kr: "미확정이라 추측은 하지 않겠습니다." },
        { en: "I cannot give you a date today.", kr: "오늘 시점은 말씀드릴 수 없습니다." },
        { en: "We do not comment on individual customers or institutions.", kr: "개별 고객·기관은 코멘트하지 않습니다." },
        { en: "I will stay at the level of direction on that one.", kr: "그 부분은 방향성 수준에서 말씀드리겠습니다." }
      ]
    },
    {
      id: "hedge", title: "Careful Outlook", titleKr: "보수적 전망·단서",
      items: [
        { en: "We expect a gradual improvement.", kr: "완만한 개선을 예상합니다." },
        { en: "We remain cautious, given the uncertainty.", kr: "불확실성 때문에 보수적으로 봅니다." },
        { en: "This is our view, and we hold it loosely.", kr: "저희 view이며 단정은 아닙니다." },
        { en: "It is a delay, not a new trend.", kr: "추세가 아니라 시차입니다." },
        { en: "That said, …", kr: "그렇긴 하지만…" },
        { en: "Directionally, yes. On the exact number, let me come back to you.", kr: "방향은 맞고, 정확한 숫자는 확인 후." },
        { en: "I want to be upfront about this one.", kr: "이건 먼저 밝히고 가겠습니다." }
      ]
    },
    {
      id: "pushback", title: "Handling Pushback", titleKr: "반론·압박 대응",
      items: [
        { en: "That is a fair point. Here is how we see it.", kr: "타당한 지적입니다. 저희는 이렇게 봅니다." },
        { en: "I understand the concern.", kr: "우려는 이해합니다." },
        { en: "We see it a little differently.", kr: "저희는 조금 다르게 봅니다." },
        { en: "Let me be precise. It is X, not Y.", kr: "정확히 말하면 X이고 Y가 아닙니다." },
        { en: "Sorry, let me correct that.", kr: "방금 말씀을 수정하겠습니다." },
        { en: "I take your point, and I will pass it on to management.", kr: "의견 접수하고 경영진에 전달하겠습니다." }
      ]
    },
    {
      id: "interpreter", title: "With an Interpreter", titleKr: "통역 동반 시",
      items: [
        { en: "I will answer in Korean, and my colleague will interpret.", kr: "국문으로 답하고 통역이 전달합니다." },
        { en: "Let me answer the key point in English first, and then add detail in Korean.", kr: "핵심은 영어로 먼저, 세부는 국문으로." },
        { en: "To be clear, I mean an exchangeable bond, not a convertible bond.", kr: "통역 오류 교정: 교환사채(EB) ≠ 전환사채." },
        { en: "The word is ‘monetisation’, selling down the stake, not ‘liquidation’.", kr: "유동화 = monetisation. liquidation(청산) 아님." },
        { en: "Let me repeat the number: 128.9 billion won.", kr: "숫자는 본인이 영어로 한 번 더 말하기." }
      ]
    },
    {
      id: "zoom", title: "Zoom / Tech", titleKr: "온라인 미팅",
      items: [
        { en: "I think you are on mute.", kr: "음소거 상태이신 것 같습니다." },
        { en: "Sorry, we lost you for a second. Could you repeat that?", kr: "잠깐 끊겼습니다." },
        { en: "Let me share my screen.", kr: "화면 공유하겠습니다." },
        { en: "Can you see the slide?", kr: "슬라이드 보이시나요?" },
        { en: "The connection is unstable. Let me turn off my camera.", kr: "연결이 불안정해 카메라를 끄겠습니다." }
      ]
    },
    {
      id: "close", title: "Closing", titleKr: "마무리",
      items: [
        { en: "Thank you for your time today. It was good to speak with you.", kr: "오늘 감사합니다." },
        { en: "I will send the follow-up items by email this week.", kr: "후속 사항은 이번 주 이메일로." },
        { en: "Please feel free to reach out anytime.", kr: "언제든 연락 주십시오." },
        { en: "We would be happy to arrange a site visit.", kr: "사업장 방문도 기꺼이 준비하겠습니다." },
        { en: "I look forward to seeing you at the next NDR.", kr: "다음 NDR에서 뵙겠습니다." }
      ]
    }
  ],

  // 어려운 단어 → 쉬운 단어 (10/26 L1 Capital 미팅에서 전달이 흔들린 단어 포함)
  easyWords: [
    { hard: "dip", easy: "fall / lower", kr: "하락" },
    { hard: "lag", easy: "delay", kr: "시차" },
    { hard: "core business", easy: "main business", kr: "핵심 사업" },
    { hard: "seasonality", easy: "the summer slow season", kr: "계절성" },
    { hard: "headline", easy: "the key point", kr: "요점" },
    { hard: "normalise", easy: "return to normal", kr: "정상화" },
    { hard: "polarisation", easy: "the gap is widening", kr: "양극화" },
    { hard: "monetise", easy: "sell down / raise money from", kr: "유동화" },
    { hard: "mark-to-market", easy: "valued at market price", kr: "시가평가" },
    { hard: "sequentially", easy: "from the previous quarter", kr: "전분기 대비" },
    { hard: "moderate (adj.)", easy: "smaller / slower", kr: "완만한" },
    { hard: "headwind / tailwind", easy: "something that hurts / helps", kr: "역풍 / 순풍" },
    { hard: "pass-through", easy: "raise our prices to cover costs", kr: "판가 전가" },
    { hard: "disposal / divest", easy: "sale / sell", kr: "매각" },
    { hard: "residual", easy: "the rest", kr: "잔여" },
    { hard: "utilisation", easy: "how full the plants run", kr: "가동률" },
    { hard: "destocking", easy: "customers cutting inventory", kr: "재고 조정" },
    { hard: "front-loaded", easy: "came early (in Q2)", kr: "선반영" },
    { hard: "constructive", easy: "positive", kr: "건설적" },
    { hard: "discretionary", easy: "decided case by case", kr: "재량적" },
    { hard: "contingent", easy: "depends on", kr: "조건부" },
    { hard: "formalised", easy: "put in writing / made official", kr: "명문화" },
    { hard: "swing factor", easy: "a big up-or-down item", kr: "변동 요인" },
    { hard: "exposure", easy: "how much we are affected", kr: "노출" },
    { hard: "below the operating line", easy: "outside operating profit", kr: "영업외" }
  ],

  // 발음 — 대문자 = 강세
  pronounce: [
    { word: "gypsum", say: "JIP-sum", kr: "석고" },
    { word: "silicone", say: "SIL-ih-kohn", kr: "실리콘 (silicon ‘SIL-ih-kun’=반도체 실리콘과 구분)" },
    { word: "siloxane", say: "sy-LOK-sayn", kr: "실록산" },
    { word: "silane", say: "SY-layn", kr: "실란" },
    { word: "monetisation", say: "mon-eh-ty-ZAY-shun", kr: "유동화" },
    { word: "exchangeable", say: "eks-CHAYN-juh-bul", kr: "교환(사채)" },
    { word: "dividend", say: "DIV-ih-dend", kr: "배당" },
    { word: "treasury", say: "TREZH-uh-ree", kr: "자사주(treasury shares)" },
    { word: "tranche", say: "TRAHNSH", kr: "분할 차수" },
    { word: "architectural", say: "ar-kih-TEK-chuh-rul", kr: "건축용" },
    { word: "antifouling", say: "an-tee-FOW-ling", kr: "방오" },
    { word: "consolidated", say: "kun-SOL-ih-day-tid", kr: "연결" },
    { word: "depreciation", say: "dih-pree-shee-AY-shun", kr: "감가상각" },
    { word: "impairment", say: "im-PAIR-munt", kr: "손상" },
    { word: "EBITDA", say: "EE-bit-dah", kr: "에비따" },
    { word: "Momentive", say: "moh-MEN-tiv", kr: "모멘티브" },
    { word: "Wacker", say: "VAH-ker", kr: "바커 (독일식)" },
    { word: "Shin-Etsu", say: "shin-ET-soo", kr: "신에츠" },
    { word: "specialty", say: "SPESH-ul-tee", kr: "스페셜티" },
    { word: "inventory", say: "IN-vun-tor-ee", kr: "재고" },
    { word: "preliminary", say: "prih-LIM-ih-nair-ee", kr: "잠정(실적)" },
    { word: "volatility", say: "vol-uh-TIL-ih-tee", kr: "변동성" },
    { word: "liquidity", say: "lih-KWID-ih-tee", kr: "유동성" },
    { word: "governance", say: "GUV-er-nunss", kr: "지배구조" },
    { word: "activist", say: "AK-tiv-ist", kr: "행동주의" }
  ],

  // 한국인이 자주 틀리는 표현
  mistakes: [
    { wrong: "We rose prices.", right: "We raised prices. / Prices rose.", kr: "raise(올리다, 타동사) vs rise(오르다, 자동사)" },
    { wrong: "for holding margins", right: "to maintain margins", kr: "목적은 to + 동사" },
    { wrong: "on the second quarter", right: "in the second quarter", kr: "분기·연도 앞은 in" },
    { wrong: "compared to last year, it increased 5%", right: "up 5 percent from last year", kr: "짧게: up/down X percent from…" },
    { wrong: "1,000억 = 1 billion", right: "1,000억 = 100 billion won", kr: "억 단위 함정: 1억 = 100 million, 1,000억 = 100 billion, 1조 = 1 trillion" },
    { wrong: "margin rose 2 percent (9%→11%)", right: "margin rose 2 percentage points", kr: "마진 차이는 percentage points (줄여서 ‘points’)" },
    { wrong: "revenues were / a revenue", right: "revenue was (uncountable in IR usage)", kr: "revenue는 단수 취급" },
    { wrong: "decreased to 5%", right: "decreased by 5% (5% 감소) / decreased to 5% (5%로 하락)", kr: "by = 폭, to = 도달치" },
    { wrong: "almost 2 trillion (실제 2.0조 근처)", right: "around 2 trillion / roughly 2 trillion", kr: "almost = ‘조금 못 미침’. 근사치는 around" },
    { wrong: "Our company…, our company…", right: "We…", kr: "주어는 we로 짧게" },
    { wrong: "Can you give me a question?", right: "I am happy to take your questions.", kr: "Q&A 진입 문장" },
    { wrong: "profit went down (quarter) — ambiguous", right: "profit was lower than Q2 / down from Q2", kr: "비교 기준(QoQ/YoY)을 항상 붙이기" }
  ],

  // 자주 쓰는 숫자 읽기
  numberExamples: [
    { kr: "1조 8,060억원", en: "1.81 trillion won  (or: 1,806 billion won)" },
    { kr: "1,289억원", en: "128.9 billion won" },
    { kr: "373억원", en: "37.3 billion won" },
    { kr: "2조 8,392억원", en: "2.84 trillion won" },
    { kr: "6.5억달러 / 7억달러", en: "650 million dollars / 700 million dollars" },
    { kr: "16.4억달러", en: "1.64 billion dollars" },
    { kr: "주당 6,000원 / 15,000원", en: "6,000 won per share / 15,000 won per share" },
    { kr: "1,700만주 / 30만주", en: "17 million shares / 300 thousand shares" },
    { kr: "6.6만톤", en: "66 thousand tons" },
    { kr: "+12% QoQ / −13% YoY", en: "up 12 percent quarter-on-quarter / down 13 percent year-on-year" },
    { kr: "2~3%p 상승", en: "up two to three percentage points" },
    { kr: "9.5% → 13.5%", en: "from nine point five to thirteen point five percent" },
    { kr: "2028~29년", en: "twenty twenty-eight to twenty twenty-nine" },
    { kr: "3분기 / 하반기 / 내후년", en: "the third quarter (Q3) / the second half (H2) / the year after next" },
    { kr: "연매출 23억달러 (Momentive 규모감)", en: "annual revenue of about two point three billion dollars" },
    { kr: "세전이익 흑자 전환", en: "turned profitable at the pre-tax level / swung to a pre-tax profit" },
    { kr: "계획 대비 소폭 미달", en: "slightly behind our own plan" },
    { kr: "수주 전년 대비 +12%", en: "order intake up about twelve percent year-on-year" },
    { kr: "주력제품 잠식", en: "core product erosion" },
    { kr: "재고생산 / 주문생산", en: "make-to-stock / make-to-order" }
  ]
};
