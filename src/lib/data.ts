export const links_admin = [
  {
    name: '배터리페이지 관리',
    path: '/admin/batteries',
  },
  {
    name: '수소페이지 관리',
    path: '/admin/hydrogens',
  },
  {
    name: '뉴스',
    path: '/admin/news',
  },
  {
    name: '카탈로그',
    path: '/admin/catelogs',
  },
  {
    name: '중양장형태 PDF',
    path: '/admin/esg-pdf',
  },
] as const
export const S3BucketUrl = 'https://ibt-bucket.s3.ap-northeast-2.amazonaws.com'

export const postData_admin = [
  {
    id: 0,
    postType: 'news',
    title: '뉴스 게시글',
    name: '뉴스',
    href: '/admin/news/add',
  },
  {
    id: 1,
    postType: 'catelog',
    title: '카탈로그 글',
    name: '카탈로그',
    href: '/admin/catelogs/add',
  },
  {
    id: 2,
    postType: 'esg-pdf',
    title: '중양장형태 활용실적명세',
    name: 'PDF',
    href: '/admin/esg-pdf/add',
  },
]
//************************************ 배터리 상세페이지 *************************************/
export const batteriesData_admin = [
  {
    id: 0,
    postType: 'defense',
    title: '방산',
    name: '적용제품',
  },
  {
    id: 1,
    postType: 'industry',
    title: '산업',
    name: '적용제품',
  },
  {
    id: 2,
    postType: 'power',
    title: '동력',
    name: '적용제품',
  },
  {
    id: 3,
    postType: 'energy',
    title: '에너지 저장',
    name: '적용제품',
  },
]
export const hydrogensData_admin = [
  {
    id: 0,
    postType: 'waterSys',
    title: '수전해 시스템',
    name: '적용제품',
  },
  {
    id: 1,
    postType: 'waterSer',
    title: '수전해 서비스',
    name: '적용제품',
  },
  {
    id: 2,
    postType: 'fuelCellSys',
    title: '연료전지 시스템',
    name: '적용제품',
  },
  {
    id: 3,
    postType: 'hydrogenSer',
    title: '수소발전 서비스',
    name: '적용제품',
  },
  {
    id: 4,
    postType: 'energyFac',
    title: '에너지자립 설비',
    name: '적용제품',
  },
  {
    id: 5,
    postType: 'energySer',
    title: '에너지 서비스',
    name: '적용제품',
  },
]

//************************************ Contact Us *************************************/
export const data_contactUs = {
  classification: ['분류', 'Classification'],
  select: ['선택해주세요', 'select'],
  name: ['이름', 'Name'],
  email: ['이메일', 'Email'],
  contact: ['연락처', 'Contact Information'],
  title: ['제목', 'Title'],
  content: ['내용', 'Content'],
  remove: ['지우기', 'Clear'],
  submit: ['보내기', 'Send'],
}
export const products_contactUs = [
  ['제품문의', '견적문의'],
  ['Product Inquiry', 'Quote Inquiry'],
]
//************************************ INTRO *************************************/
export const contents = [
  {
    title: ['친환경 에너지', 'Green Energy'],
    text: [
      '지속 가능한 미래를 만들어 가고 있는 IBT의 그린 에코 기술은\n지구 온난화와 기후 위기를 해결하고 인류의 삶의 질을 높이는 데에 기여할 것입니다.',
      `IBT's Green Eco Technology is contributing to a sustainable future,\nsolving climate crisis, and enhancing the quality of life for humanity.`,
    ],
    background: '/intro/intro1.png',
  },
  {
    title: ['행복한 에너지', 'Happy Energy'],
    text: [
      '끊임없는 도약으로 새로운 에너지 라이프스타일을 창조하는\nIBT는  안전하고 행복한 삶을 만들어 갑니다.',
      'IBT, constantly leaping forward to create a new energy lifestyle,\nis building a safe and happy life.',
    ],
    background: '/intro/intro2.png',
  },
  {
    title: ['차세대 에너지', 'Future Energy'],
    text: [
      '친환경 전지와 안전 관리 시스템을 중심으로,\n차세대를 책임질 에너지 시스템을 만들어가고 있습니다.\nIBT는 미래를 함께합니다.',
      'With fuel cells and hydrogen power systems,\nwe are creating energy that will lead the next generation.\nIBT is with you for the future',
    ],
    background: '/intro/intro3.png',
  },
]

export const IntroComponentData = [
  {
    // 4
    title: ['함께하는 IBT', 'IBT Partners'],
    contents: [
      'IBT는 신뢰를 바탕으로 국내외 기업들과\n함께 고민하고 해결해나갑니다.',
      'We always stand together with our partners.',
    ],
  },
  {
    // 5
    title: ['Since 1986 IBT'],
    contents: [
      '높은 수준의 기술을 바탕으로 방산·산업용 배터리 전문 기업으로 출발한 IBT는\n차세대 연료 전지 수소 에너지 관련 고도화 기업으로 성장하고 있습니다.\n연료전지 스택, 수소 추출기, 시스템 통합 설계 등 연료 전지 분야 All in One Solution을 공급합니다.',
      'IBT, originally established as a specialist in defense and industrial batteries based on high-\nlevel technology, is evolving into an advanced enterprise in next-generation fuel cell and\n hydrogen energy. We provide an All-in-One Solution in the fuel\ncell sector, including fuel cell stacks, hydrogen generators, and system integration design.',
    ],
    first: ['기술인증서', 'Technical certificate'],
    second: ['지식재산권', 'IPRs'],
    third: ['개발완료', 'development completion'],
  },
  {
    // 6
    title: ['연료 전지 분야', 'Energy '],
    title2: ['All in One Solution 공급', 'all in One Solution'],
    contents: [
      '연료전지 개발 생산 기업 IBT는\n수소 에너지 관련 고도화 기업으로 성장하고 있습니다.',
      'Innovate Today, Power Tomorrow',
    ],
    box: [
      {
        title: ['회사소개', 'Company'],
        description: ['IBT의 브랜드 아이덴티티 및 비전', ''],
        icon: ['/intro/companyIntro.svg', '/intro/companyIntro.svg'],
        width: [30, 30],
        height: [30, 30],
        path: '/companyInfo',
      },
      {
        title: ['Battery', 'Battery'],
        description: ['IBT 대표 제품 라인업 소개', ''],
        icon: '/intro/battery.svg',
        width: 17,
        height: 30,
        path: '/battery',
        animation: 'animate-fadeInDown2',
      },
      {
        title: ['Hydrogen', 'Hydrogen'],
        description: ['수소 연료전지의 소개와 도입효과 및 강점', ''],
        icon: '/intro/hydrogen.svg',
        width: 30,
        height: 30,
        path: '/hydrogen',
        animation: 'animate-fadeInDown3',
      },
      {
        title: ['고객문의', 'Contact us'],
        description: ['IBT에 자유롭게 문의하세요', ''],
        icon: '/intro/customer.svg',
        width: 30,
        height: 30,
        path: '/customer/contact-us',
        animation: 'animate-fadeInDown4',
      },
    ],
  },
  // 7
]

export const CompanyTitleData = {
  title: [`연혁`, `History`],
  contents: [
    `1986년부터 지금까지,
      도전정신으로 IBT는 성장하고 있습니다.`,
    `Since 1986,\n
      IBT has been growing with a spirit of challenge.`,
  ],
}
// 회사정보 페이지 데이터
export const CompanyInfoData = [
  {
    // 0
    title: [
      `IBT는 혁신적인 배터리 기술을 통해 지속 가능한 에너지 솔루션을 선도하며,
      새로운 에너지 라이프스타일을 창조하고 있습니다.`,
      `IBT leads sustainable energy solutions through innovative battery technology
      We are creating a new energy lifestyle`,
    ],
    contents: [
      `브랜드 컬러인 IBT 그린은 친환경 이념을, 우로 뻗는 타원은 끊임없이 도약하는 IBT의 혁신정신을 나타냅니다.
      ‘International Battery Technology’의 약자인 IBT는,세계를 선도하는 한국의 기업으로 성장할 것입니다.`,
      `The brand color IBT Green represents the eco-friendly ethos
      and the upward-extending ellipse symbolizes the relentless innovative spirit of IBT.
      "IBT," an acronym for "International Battery Technology," signifies the companys aspiration to
      grow as a leading enterprise within Korea, on a global scale.`,
    ],
  },
  // 연혁 데이터
  {
    // 1
    title: [`연혁`, `History`],
    contents: [
      `1986년부터 지금까지,
      도전정신으로 IBT는 성장하고 있습니다.`,
      `Since 1986,\n
      IBT has been growing with a spirit of challenge.`,
    ],
  },
  {
    // 2
    2023: ['수소발전 통합 제어 / 관제 시스템 개발', 'Hydrogen Integration / Monitoring System development projects'],
    2021: [
      'KAI(한국항공우주산업㈜) 의 LCH(소형민수헬기) 및 LAH(소형무장헬기) 개발사업 참여',
      'KAI (Korea Aerospace Industries) participates in LCH (Small Minsu Helicopter) and LAH (Small Armed Helicopter) development projects',
    ],
    2020: [
      '청소차용 리튬팩 개발\n중대형 친환경 선박 동력 ESS용 배터리 시스템 개발',
      'Development of Lithium Pack for Cleaning Car\nDevelopment of battery system for medium and large eco-friendly ship power ESS',
    ],
    2019: [
      'AGV 및 지게차용 리튬인산철 전지개발',
      'Development of lithium iron phosphate batteries for AGV and forklifts',
    ],
    2018: ['AS9100 항공우주 품질경영시스템 인증 획득', 'AS9100 Aerospace Quality Management System Certification'],
    2017: [
      `도시철도차량용 축전지,충전기 개발 및 표준화 연구\n태양전지식 고감도 항공장애 표시등 시스템 개발\n선박용 리튬인산철 전지 시스템 개발`,
      `Development and Standardization of Storage Batteries and Chargers for Urban Railroad Vehicles\n\nDevelopment of Solar Cell-type High-Sensitivity Air Disability Indicator System\n\nDevelopment of Lithium Iron Phosphate Cell System for Ships`,
    ],
    2015: [
      `광주광역시 강소기업 선정\n한전 배전지능화용 리튬인산철 전지팩 개발`,
      `Development of a lithium iron phosphate battery pack for power distribution intelligence selected by a small company in Gwangju Metropolitan City`,
    ],

    text1: ['친환경 에너지의 리더,\n지속 가능한 미래를 열다', 'Leader of green energy,\nopen a sustainable future'],

    2014: [`UPS, ESS 리튬인산철 전지시스템 개발`, `UPS develops ESS lithium iron phosphate battery system`],
    2013: [
      `마이크로그리드용 리튬인산철 전지시스템 개발`,
      `Development of Lithium Iron Phosphate Battery System for Micrologids`,
    ],
    2012: [
      `선박용 배터리시스템 개발\n레독스플로우배터리 시스템 개발(산업융합원천기술개발사업 수행)`,
      `Development of battery systems for ships\nDevelopment of Redox Flow Battery System (Industrial Convergence Technology Development Project)`,
    ],
    2011: [
      `포켓식 니켈수소 전지 KS인증 획득\n니켈수소 전지 녹색인증 획득\n발칸포용 니켈카드뮴배터리 개발`,
      `Acquisition of KS certification for pocket-type nickel-hydrogen battery\nAcquisition of green certification for nickel hydrogen battery\nDevelopment of Nickel Cadmium Battery for Balkan Foam`,
    ],
    2010: [
      `대용량 리튬인산철전지 시스템 출시\n골프카용 리튬전지팩 개발`,
      `Launch of Large Capacity Lithium Iron Phosphate Battery System\nDevelopment of a lithium battery pack for golf cars`,
    ],
    2009: [
      `광주광역시 선도산업 지원과제 수행 (NEV용 Ni-MH)`,
      `Gwangju Metropolitan City's Leading Industry Support Project (Ni-MH for NEV)`,
    ],
    2008: [
      `T-50 고등훈련기용 니켈카드뮴축전지 개발\nKTX 객차 및 동차용 니켈카드뮴 축전지 개발`,
      `Development of nickel cadmium storage batteries for T-50 advanced trainers\nDevelopment of nickel-cadmium storage batteries for KTX coaches and trains`,
    ],
    2006: [
      `배기식 니켈수소전지 특허등록\n500MD 헬기용 축전지 국산화 개발\nF-4/5 전투기용 축전지 국산화 개발\n우수재활용 제품(GR) 인증\n천마 지대공 유도무기용 축전지 개발`,
      `Patent Registration for Exhaust-type Nickel Hydrogen Battery\nLocalization Development of Storage Battery for 500MD Helicopters\nDevelopment of localization of storage batteries for F-4/5 fighter jets\nCertification of Excellent Recycling Products (GR)\nDevelopment of storage batteries for guided weapons of Cheonma surface-to-air use`,
    ],
    text2: [
      `국산화의 선두주자,\n글로벌 경쟁력을 강화하다`,
      `Front-runners in\ndomestication,\nStrengthening global\ncompetitiveness`,
    ],
    2005: [`ISO14001 인증 획득`, `Acquiring ISO14001 Certification`],
    2004: [
      `배기식 니켈 수소 전지 특허 출원\nUH-1H 헬기용 축전지 국산화 개발\nINNO-BIZ 기업 선정\nF-4 항공기용 축전지 국산화 개발`,
      `Patent Application for Exhaust Nickel Hydrogen Battery\nLocalization Development of Storage Battery for UH-1H Helicopters\nINNO-BIZ Companies Selection\nDevelopment of localization of storage batteries for F-4 aircraft`,
    ],
    2003: [
      `㈜아이비티 상호변경\n기업부설연구소 설립\n벤처기업인증 획득\n철도안전용품 인증 획득\n광주공장 신사옥 준공\nIEC 규격 인증획득`,
      `Change of name of IBT Co., Ltd\nEstablishment of an affiliated research institute for enterprises\nAcquisition of venture business certification\nAcquisition of Railway Safety Goods Certification\nConstruction of a new building in Gwangju factory\nAcquisition of IEC Specification Certification`,
    ],
    2002: [
      `항공기용 축전지 국산화 개발업체 선정(방위사업청)\nAGV용 축전지 개발\nISO 9001 인증 획득`,
      `Selection of localization development company for storage batteries for aircraft (Defense Business Administration)\nDevelopment of storage battery for AGV\nAcquire ISO 9001 certification`,
    ],
    2001: [`함포용 축전지 국산화 개발`, `Development of localization of storage batteries for inclusion`],
    2000: [
      `디젤 기관차용 축전지 국산화 개발\n항공기 시동용 축전지 국산화개발`,
      `Development of localization of storage batteries for diesel locomotives\nDevelopment of localization of storage batteries for aircraft start-up`,
    ],
    1998: [`소결식 니켈카드뮴 축전지 개발`, `Development of sintered nickel cadmium storage batteries`],
    1993: [`포켓식 니켈카드뮴 전지 KS 인증획득`, `Pocket-type nickel-cadmium battery KS certification obtained`],
    1987: [`일본 혼다전기와 기술 제휴`, `Technology partnership with Honda Electric Co., Ltd. in Japan`],
    1986: [`(주)로케트기전 설립`, `Establishment of Rocket Co.`],
    text3: [
      `배터리 산업의 개척자,\n기술력으로 초석을 다지다`,
      `Pioneer of the\nbattery industry,\nLaying the foundation\nwith technology's might`,
    ],
  },
  // 3
  {
    title: [`협력 / 제휴사`, `Partners`],
    contents: [`함께하는 IBT`, `IBT with partners`],
    desc: ['IBT는 신뢰를 바탕으로 국내외 기업들과\n함께 고민하고 해결해나갑니다.', ``],
  },

  // 4
  {
    title: [`기술 인증`, `Technology`],
    tab1: [`인증서`, `certificate`],
    tab2: [`지적 재산권`, `intellectual\nproperty`],
    tab3: [`연구개발`, `R&D`],
    tab4: [`연구개발확인서`, `Confirmation\nof R&D`],
  },
  // 5
  {
    column1: ['인허가명', 'Name of permission'],
    column2: ['인증기관', 'certification body'],
    column3: ['최초 인증일', 'Initial certification date'],
    column4: ['비고', 'Remarks'],
  },
  // 6
  {
    column1: ['구분', 'Category'],
    column2: ['발명의 명칭', 'designation of invention'],
    column3: ['출원일', 'Application date'],
    column4: ['출원번호', 'Application number'],
    column5: ['등록일', 'Registration date'],
    column6: ['특허번호', 'Patent number'],
  },
  // 7
  {
    column1: ['개발완료', 'Development completed'],
    column2: ['개발 제품명', 'Developed product name'],
    column3: ['개발내용', 'Development details'],
    column4: ['납품처', 'Delivery destination'],
    column5: ['비고', 'note'],
  },
  // 8
  {
    confirm1: ['천마 / 전지, 축전식', 'Cheonsma / Battery / Power storage'],
    confirm2: ['500MD 헬기 / 17AMP 밧데리', '500MD Helicopter / 17AMP Battery'],
    confirm3: ['500MD 헬기 / 17AMP 밧데리', '500MD Helicopter / Battery Assembly (Battery Cell)'],
    confirm4: ['F-4, F-5 항공기 / CELL, BATTERY', 'F-4, F-5 Aircraft / CELL, BATTERY'],
    confirm5: ['KT-1, KA-1 / 전지, 축전식', 'KT-1, KA-1 / Battery, Power storage'],
    confirm6: ['UH-1H헬기,AH-1J헬기/전지,축전지', 'UH-1H helicopter, AH-1J helicopter/battery, storage battery'],
    confirm7: ['UH-60 헬기 / 셀, 리치', 'UH-60 Helicopter / Cell, Richie'],
    confirm8: ['견인 발칸 / 전지, 축전식', 'Towing Balkans / Battery, Power Storage'],
    confirm9: ['육군군수사', 'an army investigation'],
    confirm10: ['국방기술품질원', 'Defense Agency for Technology and Quality'],
  },

  // 9 direction gwangju
  {
    direction: ['오시는길', 'Direction'],
    title: ['광주본사', 'Gwangju HeadQuarters'],
    address: ['주소', 'Address'],
    addressDetail: [
      '광주시 북구 첨단벤처소로 38번길 2',
      '2, Cheomdan venture so-ro 38beon-gil, Buk-gu, Gwangju, Republic of Korea',
    ],
    phone: ['연락처', 'Contact'],
    guide: ['안내', 'Guide'],
    guideDetail: [
      '호남고속도로(88번고속도로,남해안고속도로) → 광산 IC진입 → 우회전(광주과학\n기술원 방향) → 4Km 직진(AMKOR(구아남전자)탑) → 150m 진입 → 좌회전\n(AMKOR 후문) → 우회전(200m)',
      `Honam Expressway (Highway No. 88, Namhaean Expressway) → Enter Gwangsan IC → Turn right (towards Gwangju Institute of Science and Technology) → Go straight for 4Km (AMKOR (formerly Anam Electronics) tower) → Enter for 150m → Turn left (AMKOR back gate) → Turn right (200m)`,
    ],
  },

  // 10 direction seoul
  {
    direction: ['오시는길', 'Direction'],
    title: ['서울지점', 'Seoul Branch'],
    address: ['주소', 'Address'],
    addressDetail: [
      '서울특별시 성동구 성수일로 99\n서울숲 AK 벨리 1103호,1104호',
      'Seoul Forest AK Valley 1103, 1104, 99, Seongsuil-ro, Seongdong-gu, Seoul, Republic of Korea',
    ],
    phone: ['연락처', 'Contact'],
    guide: ['안내', 'Guide'],
    guideDetail: ['- 지하철 -\n2호선 | 뚝섬역 4번출구', '- Subway -\nLine 2 | Ttukseom Station Exit 4 '],
  },

  // 11 Floating
  {
    companyInfo: ['회사정보', 'Info'],
    vision: ['비전', 'Vision'],
    history: ['연혁', 'History'],
    partner: ['협력/제휴사', 'Partner'],
    certification: ['기술인증', 'Cert'],
    direction: ['오시는길', 'Direction'],
  },
]

// 회사 소개 표 데이터
export const TableData1 = [
  {
    authorization: ['품질경영시스템(AS9100)', 'Quality Management\nSystem (AS9100)'],
    Institution: ['IAQG', 'IAQG'],
    date: ['2018.03.20', '2018.03.20'],
    note: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    authorization: ['제품인증(IEC 62619)', 'Product Certification\n(IEC 62619) '],
    Institution: ['TUV SUD', 'TUV SUD'],
    date: ['2018.06.11', '2018.06.11'],
    note: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    authorization: ['기술혁신형 중소기업(INNO-BIZ)', 'Technology-Innovative\nEnterprises(INNO-BIZ)'],
    Institution: ['중소기업청', 'Ministry of Business Administration'],
    date: ['2013.12.09', '2013.12.09'],
    note: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    authorization: [
      '유량형배열증(Li-ion battery pack system)',
      `European Union certification\n(Li-ion battery pack system) `,
    ],
    Institution: ['TUV', 'TUV'],
    date: ['2013.04.16', '2013.04.16'],
    note: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    authorization: ['한국산업규격표시인증(KS C 8544)', `Korea Standards Association (KSC 8544) `],
    Institution: ['한국품질재단', 'Korea Standards Association'],
    date: ['2011.03.09', '2011.03.09'],
    note: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    authorization: ['녹색인증', 'Green certification'],
    Institution: ['산업통상자원부', 'Ministry of Trade,\nIndustry and Energy '],
    date: ['2011.02.17', '2011.02.17'],
    note: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    authorization: ['신재생에너지 전문기업', 'company specializing\nin renewable energy'],
    Institution: ['산업자원부', 'Ministry of\nIndustry and Energy'],
    date: ['2007.02.21', '2007.02.21'],
    note: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    authorization: ['환경경영체제인증(ISO14001)', `Environmental Management\nSystem Certification (ISO14001)`],
    Institution: ['한국품질재단', `Korea Standards Association`],
    date: ['2005.03.09', `2005.03.09`],
    note: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    authorization: ['환경표지 인증서', `Environmental sign certificate`],
    Institution: ['한국환경산업기술원', `Korea Institute of Environmental\nIndustry and Technology`],
    date: ['2004.11.09', '2004.11.09'],
    note: ['친환경 축전지', 'Eco-friendly\nstorage battery'],
    color: ['#f7f7f7'],
  },
  {
    authorization: ['유량형배열증', `European Union certification`],
    Institution: ['TUV RW', 'TUV RW'],
    date: ['2004.12.12', '2004.12.12'],
    note: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    authorization: ['도시청동용품 품질인증서', 'Certificate of Quality\nof Urban Rail Products'],
    Institution: ['건설교통부', 'Ministry of Construction\nand Transportation'],
    date: ['2003.12.30', '2003.12.30'],
    note: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    authorization: ['품질경영체제인증(ISO9001)', 'Quality Management\nSystem Certification (ISO9001)'],
    Institution: ['한국품질재단', 'Korea Standards Association'],
    date: ['2004.08.04', '2004.08.04'],
    note: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    authorization: ['한국산업규격표시인증(KS)', 'Korea Industrial Standards\nMarking Certification (KS)'],
    Institution: ['한국품질재단', 'Korea Standards Association'],
    date: ['1993.12.10', '1993.12.10'],
    note: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
]

export const intellectualData = [
  {
    check: ['Ni-MH', 'Ni-MH'],
    name: ['철도 차량용 배터리 시스템', 'Battery System for Railway Vehicles'],
    applicant: ['(주)아이비티', 'IBT Inc.'],
    applicationNumber: ['10-2018-0170765', '10-2018-0170765'],
    registrationDate: ['2020-03-19', '2020-03-19'],
    patentNumber: ['2093106', '2093106'],
    color: ['#f7f7f7', '#f7f7f7'],
    rowSpan: 7,
    totalRowSpan: 23,
  },
  {
    name: ['밸런싱 전류 가변 배터리 팩 균등 충전 장치 및 방법', 'Balancing Current Variable Battery Pack Equally Char'],
    applicationNumber: ['10-2016-0036250', '10-2016-0036250'],
    registrationDate: ['2017-03-23', '2017-03-23'],
    patentNumber: ['1720960', '1720960'],
    color: ['#fff', '#fff'],
  },
  {
    name: [
      '충전특성곡선을 이용한 배터리 팩 균등 충전 장치 및 방법',
      'Battery pack equal charging apparatus and method using charging characteristic curve',
    ],
    applicationNumber: ['10-2016-0036252', '10-2016-0036252'],
    registrationDate: ['2016-10-14', '2016-10-14'],
    patentNumber: ['166791', '166791'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: ['입출력부 일체 배터리 관리 시스템', 'Input/Output Integrated Battery Management System'],
    applicationNumber: ['10-2014-0019257', '10-2014-0019257'],
    registrationDate: ['2016-08-29', '2016-08-29'],
    patentNumber: ['1653700', '1653700'],
    color: ['#fff', '#fff'],
  },
  {
    name: ['배터리팩의 수명 추정 장치', 'Battery Pack Life Estimation Device'],
    applicationNumber: ['10-2014-0004289', '10-2014-0004289'],
    registrationDate: ['2015-11-23', '2015-11-23'],
    patentNumber: ['1572494', '1572494'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: [
      '무정전전원공급장치용 전지 충전방법 및 장치',
      'Battery Charging Method and Device for Uninterruptible Power Supply',
    ],
    applicationNumber: ['10-2011-0123131', '10-2011-0123131'],
    registrationDate: ['2013-09-06', '2013-09-06'],
    patentNumber: ['10-1308280', '10-1308280'],
    color: ['#fff', '#fff'],
  },
  {
    name: [
      '전지 전압 관리방법 및 이를 위한 전압 관리장치',
      'Battery voltage management method and voltage management device for this',
    ],
    applicationNumber: ['10-2011-0071195', '10-2011-0071195'],
    registrationDate: ['2013-07-26', '2013-07-26'],
    patentNumber: ['1292117', '1292117'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    check: ['리튬전지', 'Lithium Battery'],
    name: [
      '우선순위에 따라 전력 공급이 가능한 마이크로그리드 시스템',
      'A Microgrid system capable of supplying power in accordance with lithium battery priorities',
    ],
    applicationNumber: ['10-2020-0141922', '10-2020-0141922'],
    registrationDate: ['2021-08-25', '2021-08-25'],
    patentNumber: ['2295922', '2295922'],
    color: ['#fff', '#fff'],
    rowSpan: 14,
  },
  {
    name: ['빌딩 마이크로그리드 시스템', 'Building Microgrid System'],
    applicationNumber: ['10-2019-0088761', '10-2019-0088761'],
    registrationDate: ['2021-02-04', '2021-02-04'],
    patentNumber: ['2214905', '2214905'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: ['배터리 팩의 셀 온도 균일화 시스템', 'Battery pack cell temperature equalization system'],
    applicationNumber: ['10-2018-0142128', '10-2018-0142128'],
    registrationDate: ['2019-12-04', '2019-12-04'],
    patentNumber: ['2054202', '2054202'],
    color: ['#fff', '#fff'],
  },
  {
    name: [
      '블루투스 통신 기반 사물인터넷을 이용한 밸런싱 전류 가변 배터리 팩 균등 충전 장치',
      'Balancing Current Variable Battery Pack Equal Charging Device Using Bluetooth Communication-Based Internet of Things',
    ],
    applicationNumber: ['10-2017-0029493', '10-2017-0029493'],
    registrationDate: ['2018-04-13', '2018-04-13'],
    patentNumber: ['1850295', '1850295'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: [
      '골프카트용 리튬이온전지의 원격 관리 시스템',
      'Remote Management System for Lithium-Ion Batteries in Golf Cart',
    ],
    applicationNumber: ['10-2014-0002271', '10-2014-0002271'],
    registrationDate: ['2015-11-23', '2015-11-23'],
    patentNumber: ['1572489', '1572489'],
    color: ['#fff', '#fff'],
  },
  {
    name: ['전동차용 리튬이온전지의 원격 관리 시스템', 'Remote management system of lithium-ion batteries for trains'],
    applicationNumber: ['10-2014-0002272', '10-2014-0002272'],
    registrationDate: ['2015-11-23', '2015-11-23'],
    patentNumber: ['1572493', '1572493'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: [
      '무정전전원공급장치용 전지 충전방법 및 장치',
      'Battery Charging Method and device for unconstant power supply',
    ],
    applicationNumber: ['10-2011-0123131', '10-2011-0123131'],
    registrationDate: ['2013-09-06', '2013-09-06'],
    patentNumber: ['10-1308280', '10-1308280'],
    color: ['#fff', '#fff'],
  },
  {
    name: [
      '전지전압관리방법 및 이를 위한 전압관리장치',
      'Battery Voltage Management Method and Voltage Management Device for it',
    ],
    applicationNumber: ['10-2011-0071195', '10-2011-0071195'],
    registrationDate: ['2013-07-26', '2013-07-26'],
    patentNumber: ['10-1292117', '10-1292117'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: ['각형 전지 케이스의 제조방법', 'MANUFACTURING METHOD OF SQUARE BATTERY CASE'],
    applicationNumber: ['10-2011-0050344', '10-2011-0050344'],
    registrationDate: ['2012.09.07', '2012.09.07'],
    patentNumber: ['10118264', '10118264'],
    color: ['#fff', '#fff'],
  },
  {
    name: ['전기 트럭의 부하 기반 배터리 제어 시스템', 'Load-Based Battery Control System for Electric Trucks'],
    applicationNumber: ['10-2019-0055786', '10-2019-0055786'],
    registrationDate: ['', ''],
    patentNumber: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: ['전기 트럭의 배터리 팩 장착 장치', 'Battery Pack Mounting Device for Electric Trucks'],
    applicationNumber: ['10-2019-0065093', '10-2019-0065093'],
    registrationDate: ['', ''],
    patentNumber: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    name: ['전기 도로 청소차의 배터리 제어 시스템', 'Battery Control System for Electric Road Cleaning vehicles'],
    applicationNumber: ['10-2019-0123558', '10-2019-0123558'],
    registrationDate: ['', ''],
    patentNumber: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    name: ['전기 노면 청소차의 배터리 제어 시스템', 'Battery Control System for Electric Road Shaft'],
    applicationNumber: ['10-2020-0159254', '10-2020-0159254'],
    registrationDate: ['', ''],
    patentNumber: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    name: ['BMS가 구비되지 않은 배터리 시스템용 충전기', 'Charger Safety for Battery Systems not equipped With BMS'],
    applicationNumber: ['10-2021-0097116', '10-2021-0097116'],
    registrationDate: ['', ''],
    patentNumber: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    check: ['안전장치', 'Safety Device'],
    name: ['과충전 방지기능이 부가된 무정전 전원장치', 'Uninterruptible Power Supply with Overcharge Prevention'],
    applicationNumber: ['10-2007-0050339', '10-2007-0050339'],
    registrationDate: ['2009-08-18', '2009-08-18'],
    patentNumber: ['10-0913824', '10-0913824'],
    color: ['#fff', '#fff'],
    rowSpan: 1,
  },
  {
    check: ['풍력', 'Wind Power'],
    name: [
      '금속보강재를 채용한 등가 하중 지지 구조 로터 블레이드',
      'Equivalent Load Supporting Structure Rotor Blade with Metal Reinforcement',
    ],
    applicationNumber: ['10-2012-0098264', '10-2012-0098264'],
    registrationDate: ['', ''],
    patentNumber: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
    rowSpan: 1,
  },
]
// {
//   complete: ['2021.07', '2021.07'],
//   productName: ['LAH 주 배터리 국산화', 'LAH State Battery Localization'],
//   contents: ['LAH 주 배터리 개발', 'LAH Main Battery Development'],
//   deliveryDestination: ['한국항공우주산업', 'Korea Aerospace Industries Co., Ltd'],
//   etc: ['', ''],
//   color: ['#f7f7f7', '#f7f7f7'],
// },
// {
//   complete: ['2013.11', '2013.11'],
//   productName: ['전지, 축전식/트레이, 전지용', 'Battery, Power Storage/Tray, Battery'],
//   contents: [
//     'T-50, TA-50, FA-50용 축전지 국산화개발',
//     'Localization Development of Storage Batteries for T-50, TA-50, FA-50',
//   ],
//   deliveryDestination: ['한국항공', 'Korean Air'],
//   etc: ['', ''],
//   color: ['#fff', '#fff'],
// },
// {
//   complete: ['2011.06', '2011.06'],
//   productName: ['발칸용 전지', 'Batteries for Balkans'],
//   contents: ['20mm 발관포용 축전지 개발', 'Development of Storage Batteries for 20mm Balkan Bags'],
//   deliveryDestination: ['방위사업청', 'Defense Acquisition Program Administration'],
//   etc: ['', ''],
//   color: ['#f7f7f7', '#f7f7f7'],
// },
// {
//   complete: ['2010.01', '2010.01'],
//   productName: ['리튬인산철 전지', 'Lithium Iron Phosphate Battery'],
//   contents: ['전동카트용 리튬전지', 'A Lithium Battery for an Electric Cart'],
//   deliveryDestination: ['나라장터', 'Nara Market'],
//   etc: ['', ''],
//   color: ['#fff', '#fff'],
// },
// {
//   complete: ['2010.04', '2010.04'],
//   productName: ['UH-60 축전지', 'UH-60 Storage Battery'],
//   contents: ['UH-60 헬기용 축전지 개발사업', 'Development of Storage Batteries for UH-60 Helicopters'],
//   deliveryDestination: ['방위사업청', 'Defense Industry Agency'],
//   etc: ['', ''],
//   color: ['#f7f7f7', '#f7f7f7'],
// },
// {
//   complete: ['2008.04', '2008.04'],
//   productName: ['고속훈련기용 축전지개발', 'Development of storage batteries for advanced trainers'],
//   contents: ['T-50 항공기 축전지 개발사업', 'T-50 Aircraft Storage Battery Development Project'],
//   deliveryDestination: ['한국항공', 'Korean Air'],
//   etc: ['항공우주부품 기술개발사업', 'Aerospace Component Technology Development Project'],
//   color: ['#fff', '#fff'],
// },
// {
//   complete: ['2008.04', '2008.04'],
//   productName: ['KTX 축전지', 'KTX Storage Battery'],
//   contents: ['KTX 축전지 개발 사업', 'KTX Storage Battery Development Project'],
//   deliveryDestination: ['철도공사', 'Korea Railroad Corporation'],
//   etc: ['중기청 구매조건부신제품 개발사업', 'New Product Development Project'],
//   color: ['#f7f7f7', '#f7f7f7'],
// },
// {
//   complete: ['2007.01', '2007.01'],
//   productName: [
//     '초고율대용량 니켈수소 축전지 국산화 개발',
//     'Localized development of ultra-high capacity nickel hydrogen storage batteries',
//   ],
//   contents: [
//     '대용량 전력용 니켈수소 축전지 개발 사업',
//     'Development Project of Nickel Hydrogen Storage Battery for High Capacity Power ',
//   ],
//   deliveryDestination: ['한국전력공사', 'Korea Electric Power Corporation'],
//   etc: ['전력산업 연구개발 사업', 'Power business research and development business'],
//   color: ['#fff', '#fff'],
// },

//   {
//     complete: ['2006.12', '2006.12'],
//     productName: ['전지, 축전식', 'Battery, Power storage'],
//     contents: ['유량 천마 장갑차용 축전지 개발', 'Development of storage batteries for Army Cheonma Armored Vehicles'],
//     deliveryDestination: ['육군 군수사령부', 'Army Munitions Command'],
//     etc: ['', ''],
//     color: ['#f7f7f7', '#f7f7f7'],
//   },
//   {
//     complete: ['2004.04', '2004.04'],
//     productName: ['배기식 니켈수소 전지', 'exhaust Nickel Hydrogen Battery'],
//     contents: ['환경친화적 니켈수소 전지 개발', 'Development of Environmentally Friendly Nickel Hydrogen Battery'],
//     deliveryDestination: ['포스코, 수원시청, 효성중공업', 'POSCO, Suwon City Hall, Hyosung Heavy Industries'],
//     etc: ['특허출원', 'Patent Application'],
//     color: ['#fff', '#fff'],
//   },
//   {
//     complete: ['2004.05', '2004.05'],
//     productName: ['F-4/5 축전지', 'F-4/5 Storage Batteries'],
//     contents: [
//       'F-4/5 전투기용 축전지 국산화 개발',
//       'Development of localized storage batteries for F-4/5 fighter jets',
//     ],
//     deliveryDestination: ['공군군수사령부', 'Air Force Headquarters'],
//     etc: [
//       '중기청 구매조건부신제품 개발사업 (개발 사업비: 1억4천만원)',
//       'New Product Development Project with Purchase Conditions of the Small and Medium Business Administration (development project cost: KRW 140 million)',
//     ],
//     color: ['#f7f7f7', '#f7f7f7'],
//   },
//   {
//     complete: ['2003.12', '2003.12'],
//     productName: ['UH-1H 축전지', 'UH-1H storage battery'],
//     contents: ['UH-1H 헬기용 축전지 국산화 개발', 'Localized development of storage batteries for UH-1H helicopters'],
//     deliveryDestination: ['육군군수사령부', 'Army Headquarters'],
//     etc: ['', ''],
//     color: ['#fff', '#fff'],
//   },
//   {
//     complete: ['2003.12', '2003.12'],
//     productName: ['500MD 축전지', '500MD Storage Battery'],
//     contents: ['500MD 헬기용 축전지 국산화 개발', 'Development of Localized Storage Battery for 500MD Helicopters'],
//     deliveryDestination: ['육군군수사령부', 'Army Headquarters'],
//     etc: ['', ''],
//     color: ['#f7f7f7', '#f7f7f7'],
//   },
//   {
//     complete: ['2003.08', '2003.08'],
//     productName: ['AGV용 축전지', 'Storage battery for AGV'],
//     contents: ['Localized storage battery development for AGV (unmanned loan)'],
//     deliveryDestination: [
//       'LG필립스, LG전자, 삼성전자, BOEHYDIS',
//       'LG Philips, LG Electronics, Samsung Electronics, BOEHYDIS',
//     ],
//     etc: ['', ''],
//     color: ['#fff', '#fff'],
//   },
//   {
//     complete: ['1999.08', '1999.08'],
//     productName: ['지하철차량용 축전지', 'Development of storage batteries for subway cars'],
//     contents: ['지하철 차량용 축전지 국산화 개발', 'Localization of storage batteries for subway cars'],
//     deliveryDestination: ['도시철도공사 지하철공사', 'Urban Railroad Corporation'],
//     etc: [
//       '도시철도용품 품질인증획득(건설교통부)',
//       'Acquisition of quality certification for urban railway products (Ministry of Construction and Transportation)',
//     ],
//     color: ['#f7f7f7', '#f7f7f7'],
//   },
//   {
//     complete: ['1999.04', '1999.04'],
//     productName: ['디젤기관차용 축전지', 'A storage battery for diesel locomotives'],
//     contents: [
//       '디젤기관차 시동용 축전지 국산화 개발',
//       'Development of localized storage batteries for starting diesel locomotives',
//     ],
//     deliveryDestination: ['철도청', 'Korea Railroad Administration'],
//     etc: [
//       '철도용품 품질인증 획득(철도청/철도기술연구원)',
//       'Acquisition of quality certification for railroad products (Korea Railroad Administration/Korea Railroad Research Institute)',
//     ],
//     color: ['#fff', '#fff'],
//   },
// ]

export const researchData = [
  {
    complete: ['2021.07', '2021.07'],
    productName: ['LAH 주 배터리 국산화', 'LAH State Battery Localization'],
    contents: ['LAH 주 배터리 개발', 'LAH Main Battery Development'],
    deliveryDestination: ['한국항공우주산업', 'Korea Aerospace Industries Co., Ltd'],
    etc: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2013.11', '2013.11'],
    productName: ['전지, 축전식/트레이, 전지용', 'Battery, Power Storage/Tray, Battery'],
    contents: [
      'T-50, TA-50, FA-50용 축전지 국산화개발',
      'Localization Development of Storage Batteries for T-50, TA-50, FA-50',
    ],
    deliveryDestination: ['한국항공', 'Korean Air'],
    etc: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['2011.06', '2011.06'],
    productName: ['발칸용 전지', 'Batteries for Balkans'],
    contents: ['20mm 발관포용 축전지 개발', 'Development of Storage Batteries for 20mm Balkan Bags'],
    deliveryDestination: ['방위사업청', 'Defense Acquisition Program Administration'],
    etc: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2010.01', '2010.01'],
    productName: ['리튬인산철 전지', 'Lithium Iron Phosphate Battery'],
    contents: ['전동카트용 리튬전지', 'A Lithium Battery for an Electric Cart'],
    deliveryDestination: ['나라장터', 'Nara Market'],
    etc: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['2010.04', '2010.04'],
    productName: ['UH-60 축전지', 'UH-60 Storage Battery'],
    contents: ['UH-60 헬기용 축전지 개발사업', 'Development of Storage Batteries for UH-60 Helicopters'],
    deliveryDestination: ['방위사업청', 'Defense Industry Agency'],
    etc: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2008.04', '2008.04'],
    productName: ['고속훈련기용 축전지개발', 'Development of storage batteries for advanced trainers'],
    contents: ['T-50 항공기 축전지 개발사업', 'T-50 Aircraft Storage Battery Development Project'],
    deliveryDestination: ['한국항공', 'Korean Air'],
    etc: ['항공우주부품 기술개발사업', 'Aerospace Component Technology Development Project'],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['2008.04', '2008.04'],
    productName: ['KTX 축전지', 'KTX Storage Battery'],
    contents: ['KTX 축전지 개발 사업', 'KTX Storage Battery Development Project'],
    deliveryDestination: ['철도공사', 'Korea Railroad Corporation'],
    etc: ['중기청 구매조건부신제품 개발사업', 'New Product Development Project'],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2007.01', '2007.01'],
    productName: [
      '초고율대용량 니켈수소 축전지 국산화 개발',
      'Localized development of ultra-high capacity nickel hydrogen storage batteries',
    ],
    contents: [
      '대용량 전력용 니켈수소 축전지 개발 사업',
      'Development Project of Nickel Hydrogen Storage Battery for High Capacity Power ',
    ],
    deliveryDestination: ['한국전력공사', 'Korea Electric Power Corporation'],
    etc: ['전력산업 연구개발 사업', 'Power business research and development business'],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['2006.12', '2006.12'],
    productName: ['전지, 축전식', 'Battery, Power storage'],
    contents: ['유량 천마 장갑차용 축전지 개발', 'Development of storage batteries for Army Cheonma Armored Vehicles'],
    deliveryDestination: ['육군 군수사령부', 'Army Munitions Command'],
    etc: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2004.04', '2004.04'],
    productName: ['배기식 니켈수소 전지', 'exhaust Nickel Hydrogen Battery'],
    contents: ['환경친화적 니켈수소 전지 개발', 'Development of Environmentally Friendly Nickel Hydrogen Battery'],
    deliveryDestination: ['포스코, 수원시청, 효성중공업', 'POSCO, Suwon City Hall, Hyosung Heavy Industries'],
    etc: ['특허출원', 'Patent Application'],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['2004.05', '2004.05'],
    productName: ['F-4/5 축전지', 'F-4/5 Storage Batteries'],
    contents: [
      'F-4/5 전투기용 축전지 국산화 개발',
      'Development of localized storage batteries for F-4/5 fighter jets',
    ],
    deliveryDestination: ['공군군수사령부', 'Air Force Headquarters'],
    etc: [
      '중기청 구매조건부신제품 개발사업 (개발 사업비: 1억4천만원)',
      'New Product Development Project with Purchase Conditions of the Small and Medium Business Administration (development project cost: KRW 140 million)',
    ],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2003.12', '2003.12'],
    productName: ['UH-1H 축전지', 'UH-1H storage battery'],
    contents: ['UH-1H 헬기용 축전지 국산화 개발', 'Localized development of storage batteries for UH-1H helicopters'],
    deliveryDestination: ['육군군수사령부', 'Army Headquarters'],
    etc: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['2003.12', '2003.12'],
    productName: ['500MD 축전지', '500MD Storage Battery'],
    contents: ['500MD 헬기용 축전지 국산화 개발', 'Development of Localized Storage Battery for 500MD Helicopters'],
    deliveryDestination: ['육군군수사령부', 'Army Headquarters'],
    etc: ['', ''],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['2003.08', '2003.08'],
    productName: ['AGV용 축전지', 'Storage battery for AGV'],
    contents: ['Localized storage battery development for AGV (unmanned loan)'],
    deliveryDestination: [
      'LG필립스, LG전자, 삼성전자, BOEHYDIS',
      'LG Philips, LG Electronics, Samsung Electronics, BOEHYDIS',
    ],
    etc: ['', ''],
    color: ['#fff', '#fff'],
  },
  {
    complete: ['1999.08', '1999.08'],
    productName: ['지하철차량용 축전지', 'Development of storage batteries for subway cars'],
    contents: ['지하철 차량용 축전지 국산화 개발', 'Localization of storage batteries for subway cars'],
    deliveryDestination: ['도시철도공사 지하철공사', 'Urban Railroad Corporation'],
    etc: [
      '도시철도용품 품질인증획득(건설교통부)',
      'Acquisition of quality certification for urban railway products (Ministry of Construction and Transportation)',
    ],
    color: ['#f7f7f7', '#f7f7f7'],
  },
  {
    complete: ['1999.04', '1999.04'],
    productName: ['디젤기관차용 축전지', 'A storage battery for diesel locomotives'],
    contents: [
      '디젤기관차 시동용 축전지 국산화 개발',
      'Development of localized storage batteries for starting diesel locomotives',
    ],
    deliveryDestination: ['철도청', 'Korea Railroad Administration'],
    etc: [
      '철도용품 품질인증 획득(철도청/철도기술연구원)',
      'Acquisition of quality certification for railroad products (Korea Railroad Administration/Korea Railroad Research Institute)',
    ],
    color: ['#fff', '#fff'],
  },
]

// ESG_500 페이지 데이터
export const ESG500Data = [
  // 0
  {
    title: [
      `미래를 위해 지속 가능한\n에너지 솔루션을 구현하다`,
      `Implementing\nSustainable Energy Solutions\nfor the Future`,
    ],
    contents: [
      `우리는 지구의 미래와 다가오는 세대의 번영을 위해 지속 가능한 에너지 사용을 촉진하는 혁신적인 솔루션을 개발하고 있습니다.\n\n우리의 목표는 보유한 친환경 배터리 기술과 수소 에너지 통합 시스템으로 화석 연료의 의존도를 줄이고, 탄소 배출을 최소화하여 전 세계적으로 환경 영향을 감소시키는 것입니다.\n\n우리는 지속 가능한 미래를 위해 필요한 변화를 주도하는 것을 넘어, 이러한 변화를 실현하기 위해 전 세계 파트너와 협력하고 있습니다.\n\n"미래를 위한 지속 가능한 에너지 솔루션을 구현하다"는 단순한 구호가 아닙니다.이는 우리의 약속, 우리의 행동, 그리고 우리가 추구하는 목표의 반영입니다.\n\n우리는 모두가 더 밝고, 더 깨끗하고, 더 안전한 미래를 누릴 수 있도록 오늘을 바꾸기 위해 노력하고 있습니다.`,
      `We are developing innovative solutions to promote sustainable energy use for the future of our planet and the prosperity of generations to come.\n\nOur goal is to reduce reliance on fossil fuels and minimize carbon emissions globally through our eco-friendly battery technology and integrated hydrogen energy systems.\n\nWe aim to lead the necessary changes for a sustainable future and go beyond by collaborating with partners worldwide to realize these changes.\n\n"Implementing Sustainable Energy Solutions for the Future" is not just a slogan. It reflects our commitment, our actions, and the goals we strive to achieve.\n\nWe are working to change today so that everyone can enjoy a brighter, cleaner, and safer future.`,
    ],
  },
  // 1 tab
  {
    tab1: [`(재) 지우장학회`, `Jiwoo Scholarship Foundation`],
    tab2: [`중양 장형태 장학재단`, `Jungyang Jang Hyeong-tae\nScholarship Foundation`],
  },
  // 2 contribution1
  {
    subTitle1: [`재단소개 및 사업내용`, `Foundation introduction and business details`],
    contents1: [
      `안녕하세요. 지우장학회 이사장 장민기입니다.\n지우장학회는 2000년 광주, 전남 지역의 골프 스포츠 인재 육성을 위해 설립되었습니다. 설립 이후 대회 후원과 골프 유망주 지원 등을 꾸준히 이어오고 있습니다.\n재단 이사회는 골프 스포츠에 대한 전문성이 높아 장학사업에 많은 도움을 줄 수 있는 분들로 구성 되어 있어 공정 한 장학생 선발이 가능합니다.\n설립 이후 총 81명에게 1억6천6백만원의 장학금을 지급 하였고, 대회 후원으로 6천만원을 지급하여 총 2억2천6백 만원의 장학 후원을 하였습니다.`,
      `Hello, I am Min-gi Jang, the chairman of the Jiwoo Scholarship Foundation.\nThe Jiwoo Scholarship Foundation was established in 2000 to nurture golf sports talents in the Gwangju and Jeollanam-do regions.\nSince its establishment, we have consistently sponsored tournaments and supported promising golfers.\nOur board of directors is composed of individuals with high expertise in golf sports, enabling us to select scholarship recipients fairly.\nSince its establishment, we have awarded scholarships totaling 166 million won to a total of 81 individuals and provided 60 million won in tournament sponsorship, totaling 226 million won in scholarship support.
      `,
    ],
    subTitle2: [`투명 경영`, `Transparent Management`],
    contents2: [
      `지우장학회는 운영과 관련한 모든 법률과 규정을 준수 하고 있으며, 회계 전문가를 통해 철저히 내부 관리를 실시하고 있습니다.\n기부 빛 후원은 '기부금품의 모집 및 사용에 관한 법률'등 관련 법률을 따르고 있습니다.`,
      `The Jiwoo Scholarship Foundation complies with all relevant laws and regulations in its operations and conducts thorough internal management through accounting professionals. Our fundraising and sponsorship activities adhere to laws such as the "Act on the Collection and Use of Donations."`,
    ],
    tableTitle: [`기부금 모금 및 사용 현황`, `Donations and fundraising status`],
    unit: [`(단위:만원)`, `(unit:10,000 won)`],
    tableContent: [
      `기부금은 장학 목적 사업에만 사용 됩니다.`,
      `Donations are exclusively used for scholarship-related projects.`,
    ],
    support: [`기부 및 후원 문의`, `Donation and sponsorship inquiries`],
    supportContent1: [
      `기부 및 후원은 전액 장학 목적 사업에만 사용되며 문의사항은 아래로 부탁드립니다.`,
      `All donations and sponsorships are exclusively used for scholarship purposes.`,
    ],
    supportContent2: [
      `광주 북구 첨단벤처소로28번길 2(월출동) 062-971-7983\n서울 광진구 광나루토 56길 85, 1902호(구의동) 02-3424-1988 재단법인 중양장형태기념재단 재단법인 지우장학회 고객지원센터`,
      `For inquiries, please contact us at:\n\nGwangju, Buk-gu, Cheomdan Venture So-ro 28beon-gil 2 (Wolchul-dong) 062-971-7983\nSeoul, Gwangjin-gu, Gwangnaru-ro 56-gil 85, Room 1902 (Guui-dong) 02-3424-1988\nJungyang Janghyungtae Memorial Foundation, Jiwoo Scholarship Foundation Customer Support Center`,
    ],

    fundraising: ['기부금 모금', 'Fundraising for Donations'],
    use: ['기부금 사용', 'Usage of Donations'],
  },

  // 3 contribution2
  {
    subTitle1: [`재단소개 및 사업내용`, `Foundation introduction and business details`],
    contents1: [
      `안녕하세요. 중양장 형태기념재단 이사장 허상만입니다.\n중양 장형태기념재단은 2013년 작고하신 중양 장형태 전 전남도지사님의 뜻을 이어 받아 젊은 인재들을 지원, 육성하여 사회에 기여하고자 설립 되었습니다.\n재단 이사회는 사회 각계의 명망 있는 분들로 구성 되어 있으며 장학생 선발과 장학금 지급을 공정히 하기 위해 노력하고 있습니다.\n2014년 첫 장학생 선발 이후 2020년 현재까지 총 23명의 광주, 전남 지역 고등학생과 대학생에게 1억8천4백만원의 장학금을 지원하고 있습니다.`,
      `Hello, I am Sangman Heo, the chairman of the Jungyang Janghyungtae Memorial Foundation.\nThe foundation was established in 2013 to honor the will of the late former governor of Jeollanam-do, Jungyang Janghyungtae, by supporting and nurturing young talents to contribute to society.\nOur board of directors consists of reputable individuals from various sectors of society, and we strive to ensure fairness in the selection of scholarship recipients and the distribution of scholarships.\nSince selecting our first scholarship recipients in 2014, we have supported a total of 23 high school and college students from the Gwangju and Jeollanam-do regions with scholarships amounting to 184 million won as of 2020.
      `,
    ],
    subTitle2: [`투명 경영`, `Transparent Management`],
    contents2: [
      `중양 장형태기념재단은 운영과 관련한 모든 법률과 규정을 준수 하고 있으며, 회계법인을 통해 철저한 감사를 실시 하고 있습니다.\n기부 및 후원은 ‘기부금품의 모집 및 사용에 관한 법률’ 등 관련 법률을 따르고 있으며, 운영 내용은 국세청 ‘공익법인 결산서류 등 공시시스템’에 매년 공시 하고 있습니다.`,
      `Transparent ManagementThe Jungyang Janghyungtae Memorial Foundation complies with all relevant laws and regulations in its operations and conducts thorough audits through an accounting firm.\nOur fundraising and sponsorship activities adhere to laws such as the "Act on the Collection and Use of Donations," and our operational details are disclosed annually on the National Tax Service's "Public Interest Corporations Financial Statement Disclosure System.""`,
    ],
    tableTitle: [`기부금 모금 및 사용 현황`, `Donations and fundraising status`],
    unit: [`(단위:만원)`, `(unit:10,000 won)`],
    tableContent: [
      `기부금은 장학 목적 사업에만 사용 됩니다.`,
      `Donations are exclusively used for scholarship-related projects.`,
    ],
    support: [`기부 및 후원 문의`, `Donation and sponsorship inquiries`],
    supportContent1: [
      `기부 및 후원은 전액 장학 목적 사업에만 사용되며 문의사항은 아래로 부탁드립니다.`,
      `All donations and sponsorships are exclusively used for scholarship purposes.`,
    ],
    supportContent2: [
      `광주 북구 첨단벤처소로28번길 2(월출동) 062-971-7983\n서울 광진구 광나루토 56길 85, 1902호(구의동) 02-3424-1988 재단법인 중양장형태기념재단 재단법인 지우장학회 고객지원센터`,
      `For inquiries, please contact us at:\n\nGwangju, Buk-gu, Cheomdan Venture So-ro 28beon-gil 2 (Wolchul-dong) 062-971-7983\nSeoul, Gwangjin-gu, Gwangnaru-ro 56-gil 85, Room 1902 (Guui-dong) 02-3424-1988\nJungyang Janghyungtae Memorial Foundation, Jiwoo Scholarship Foundation Customer Support Center`,
    ],

    fundraising: ['모금', 'Fundraising'],
    use: ['사용', 'Use'],
  },

  // 4 reliable governance
  {
    title: ['지식, 윤리, 인재의 힘', '"The Power of Knowledge, Ethics, and Human Resources"'],
    contents: [
      `우리는 지속 가능한 미래를 향한 여정에서 'Reliable Governance'를 핵심 가치로 삼고 있습니다.\n이는 단순히 우리의 운영 체계를 넘어서,\n모든 결정과 행동이 윤리적 원칙, 인재의 성장, 그리고 지식의 발전에 기반하도록 하는 우리의 약속입니다.`,
      `In our journey towards a sustainable future, we hold 'Reliable Governance' as a core value.\nThis extends beyond just our operational systems,\nembodying our commitment to ensure that all decisions and actions are grounded in ethical principles,\nthe growth of talent, and the advancement of knowledge.`,
    ],
    subTitle1: [`인재 경영: 우리의 가장 큰 자산`, `Talent Management:\nOur Greatest Asset`],
    subTitle2: [`윤리경영: 신뢰의 기반`, `Ethical anagement:\nFoundation of Trust`],
    subTitle3: [`지식경영: 끊임없는 혁신의 동력`, `Knowledge Management:\nThe Power of Endless Innovation`],
    contents1: [
      `인재는 우리 조직의 가장 큰 자산입니다.\n\n우리는 직원들이 자신의 잠재력을 최대한 발휘할 수 있는 환경을 조성하는 데 전념하고 있습니다. \n\n개인의 성장과 발전이 있을 때, 우리는 함께 더 강해질 수 있다고 믿습니다.`,
      `Talent is the greatest asset of our organization.\n\nWe are committed to creating an environment where employees can fully realize their potential.\n\nWe believe that when individual growth and development occur, we can become stronger together.`,
    ],
    contents2: [
      `우리는 투명성과 정직성을 우리 사업의 근간으로 삼습니다.\n\n모든 이해관계자와의 관계에서 공정하고 윤리적인 행동을 최우선으로 하며, 이는 우리가 시장에서 신뢰를 얻는 기반이 됩니다. \n\n우리는 윤리적 결정이 장기적으로 회사와 사회에 가장 큰 가치를 제공한다고 믿습니다.`,
      `We base our business on transparency and integrity.\n\nWe prioritize fair and ethical behavior in all our relationships with stakeholders, which forms the foundation of our trust in the market. \n\nWe believe that ethical decisions provide the greatest value to both the company and society in the long term.`,
    ],
    contents3: [
      `지식은 변화하는 시장과 기술에 대응하기 위한 우리의 열쇠입니다.\n\n우리는 지속적인 학습과 혁신을 통해 경쟁력을 강화하고, 새로운 기회를 창출합니다.\n\n지식 공유와 협업을 장려함으로써, IBT는 업계의 선도적인 위치를 유지하고, 지속 가능한 성장을 이끌어갈 수 있습니다`,
      `Knowledge is our key to responding to changing markets and technologies.\n\nBy fostering continuous learning and innovation, we enhance our competitiveness and create new opportunities.\n\nBy encouraging knowledge sharing and collaboration, we can maintain our leading position in the industry and drive sustainable growth.`,
    ],
  },
]

//************************************ 배터리 페이지 *************************************/

export const batteryIntroData = {
  title: ['IBT는 다릅니다', 'IBT is different'],
  subTitle: [
    'IBT는 자체 보유한 BMS 기술을 바탕으로 개별화된 A/S 서비스와\n신뢰성 있는 고객케어를 제공하고 있습니다.',
    'Based on our own BMS technology,\nwe have personalized A/S service.\nWe provide reliable customer care.',
  ],
}

export const batteryList = [
  {
    title: ['방산용 Ni-Cd', 'Defense Ni-Cd'],
    explain: [
      [
        'IBT는 운용 안정성이 우수하고 혹한기 및 혹서기 등 열악한 환경에서도',
        '안전하게 사용할 수 있는 고출력의 고효율의 방산 전문 Ni-Cd 배터리를',
        '신뢰를 바탕으로 공급해왔습니다.',
      ],
      [
        'We have supplied high-power, high-efficiency, defense-specialized Ni-Cd batteries based on trust that have excellent operational stability',
        'and can be safely used in poor environments such as cold and hot weather.',
      ],
    ],
  },
  {
    title: ['산업용 Ni-Cd', 'Industrial Ni-Cd'],
    explain: [
      [
        'IBT는 고객의 니즈에 따라',
        '고에너지 밀도 고출력 특성을 갖춘 다양한 제품을 제공하고 있습니다.',
        '우수한 가격 경쟁력과 진동, 충격에 강한 내구성을 가지고 있습니다.',
      ],
      [
        'We provide a variety of products with high energy density and high output characteristics according to customer needs',
        'It has excellent price competitiveness and strong durability against vibration and shock.',
      ],
    ],
  },
  {
    title: ['동력용 Lithium', 'Power Lithium'],
    explain: [
      [
        '고 에너지 밀도 - 축전지, 니켈-카드뮴에 비하여 높은 에너지밀도로 부피가 작고 중량이 가볍습니다.',
        '높은 기전력 - 리튬인산철전지의 기전력은 3.2V로 높은 전력 요구 시 구성 수량 감소 효과가 나타납니다.',
        '관리용이 - Memory effect가 없어 완전히 방전시키지 않은 상태에서도 충전이 가능합니다.',
        '낮은 자가 방전율 - 5%/월 미만의 자가방전율로 자가 방전에 의한 전력 손실이 매우 적습니다.',
      ],
      [
        'High Energy Density - High energy density compared to storage batteries and nickel-cadmium, it is smaller in volume and lighter in weight.',
        'High electromotive force - The electromotive force of a lithium iron phosphate battery is 3.2V, which reduces the number of components when high power is required.',
        'Easy to manage - There is no Memory effect, so it can be charged even when it is not completely discharged.',
        'Low self-discharge rate - less than 5%/month self-discharge rate with very little power loss due to self-discharge.',
      ],
    ],
  },
  {
    title: ['에너지저장용 Lithium', 'Energy Storage Lithium'],
    explain: [
      [
        '고 에너지 밀도 - 축전지, 니켈-카드뮴에 비하여 높은 에너지밀도로 부피가 작고 중량이 가볍습니다.',
        '높은 기전력 - 리튬인산철전지의 기전력은 3.2V로 높은 전력 요구 시 구성 수량 감소 효과가 나타납니다.',
        '관리용이 - Memory effect가 없어 완전히 방전시키지 않은 상태에서도 충전이 가능합니다.',
        '낮은 자가 방전율 - 5%/월 미만의 자가방전율로 자가 방전에 의한 전력 손실이 매우 적습니다.',
      ],
      [
        'High Energy Density - High energy density compared to storage batteries and nickel-cadmium, it is smaller in volume and lighter in weight.',
        'High electromotive force - The electromotive force of a lithium iron phosphate battery is 3.2V, which reduces the number of components when high power is required.',
        'Easy to manage - There is no Memory effect, so it can be charged even when it is not completely discharged.',
        'Low self-discharge rate - less than 5%/month self-discharge rate with very little power loss due to self-discharge.',
      ],
    ],
  },
]

export const hydrogenIntroData = {
  title: ['원스톱 서비스', 'a one-stop service'],
  subTitle: [
    '아이비티는 친환경 에너지 솔루션을 제공합니다.\n국내외 유수의 신재생 에너지 기업들과의 실증 사업을 통해\n수소경제 밸류체인을 구축하였습니다.',
    'IBT offers eco-friendly energy solutions.\nThrough demonstration projects with leading domestic and foreign renewable energy companies\nWe have established a hydrogen economy value chain.',
  ],
}

export const hydrogenListData = [
  {
    title: ['수전해 시스템', 'Water Electrolysis System'],
    explain: [
      ['국내외 수소 영역 대기업 및 외국 기업과', '수전해 프로젝트를 진행하고 있습니다.'],
      ['We are conducting water electrolysis projects with large domestic and foreign companies in the hydrogen area.'],
    ],
  },
  {
    title: ['수전해 서비스', 'Water Electrolysis Services'],
    explain: [
      ['국내외 수소 영역 대기업 및 외국 기업과', '수전해 프로젝트를 진행하고 있습니다.'],
      ['We are conducting water electrolysis projects with large domestic and foreign companies in the hydrogen area.'],
    ],
  },
  {
    title: ['연료전지 시스템', 'Fuel Cell System'],
    explain: [
      ['국내외 수소 영역 대기업 및 외국 기업과', '수소 프로젝트를 진행하고 있습니다.'],
      ['We are conducting hydrogen projects with large domestic and foreign companies in the hydrogen field'],
    ],
  },
  {
    title: ['연료전지 서비스', 'Fuel Cell Services'],
    explain: [
      ['국내외 수소 영역 대기업 및 외국 기업과', '수소 프로젝트를 진행하고 있습니다.'],
      ['We are conducting hydrogen projects with large domestic and foreign companies in the hydrogen field'],
    ],
  },
  {
    title: ['에너지자립시스템 설비', 'Energy Independence System Facility'],
    explain: [['통합 제어 시스템'], ['Integrated Control System']],
  },
  {
    title: ['에너지자립시스템 서비스', 'Energy Independence System Services'],
    explain: [['통합 제어 시스템'], ['Integrated Control System']],
  },
]

export const companyEmail = 'sales2@ibteng.co.kr'

export const headerData = [
  {
    title: ['회사정보', 'COMPANY'],
    subTitle1: ['비전', 'Vision'],
    subTitle2: ['연혁', 'History'],
    subTitle3: ['협력/제휴사', 'Partners'],
    subTitle4: ['기술인증', 'Technology'],
    subTitle5: ['오시는길', 'Directions'],
  },
  {
    title: ['BATTERY'],
    subTitle1: ['Ni-Cd'],
    subTitle2: ['Lithium'],
    subTitle3: ['기타', 'Others'],
  },
  {
    title: ['HYDROGEN'],
    subTitle1: ['수전해 발전', 'Electrolysis'],
    subTitle2: ['수소 발전', 'Hydrogen'],
    subTitle3: ['에너지 자립', 'Independence'],
    subTitle4: ['기타', 'Others'],
  },
  {
    title: ['고객지원', 'CUSTOMER'],
    subTitle1: ['카탈로그', 'Catalog'],
    subTitle2: ['IBT News'],
    subTitle3: ['Contact Us'],
  },
  {
    title: ['ESG'],
    subTitle1: ['IBT ESG'],
  },
]

export const TempHydrogenData = [
  {
    // hydrogen 임시 데이터
    src: ['/image/hydrogen/hydrogen_intro.png', '/image/hydrogen/hydrogen-en.png'],
  },
]
