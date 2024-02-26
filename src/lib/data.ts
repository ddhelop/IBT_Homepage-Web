import React from 'react'
import { GrCatalogOption } from 'react-icons/gr'
import { RiNewspaperFill } from 'react-icons/ri'
import { FaFilePdf, FaPager } from 'react-icons/fa6'

export const links_admin = [
  {
    name: '뉴스',
    icon: React.createElement(RiNewspaperFill),
    path: '/admin',
  },
  {
    name: '카탈로그',
    icon: React.createElement(GrCatalogOption),
    path: '/admin/catelogs',
  },
  {
    name: '배터리페이지 관리',
    icon: React.createElement(FaPager),
    path: '/admin/batteries',
  },
  {
    name: '지우장학회 PDF',
    icon: React.createElement(FaFilePdf),
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
    href: '/admin/add',
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
    title: '지우장학회 활용실적명세',
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
// intro_data
export const contents = [
  {
    title: ['친환경 에너지', 'Green Energy'],
    text: [
      '지속 가능한 미래를 만들어 가고 있는 IBT의 그린 에코 기술은 \n지구 온난화와 기후 위기를 해결하고 인류의 삶의 질을 높이는 데에 기여할 것입니다.',
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
        path: ['/companyInfo', '/companyInfo'],
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
      `브랜드 컬러인 IBT 그린은 친환경 이념을,
      우로 뻗는 타원은 끊임없이 도약하는 IBT의 혁신정신을 나타냅니다.
      ‘International Battery Technology’의 약자인 IBT는,
      세계를 선도하는 한국의 기업으로 성장할 것입니다.`,
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
    2023: ['수소발전 통합 제어 / 관제 시스템 개발', ''],
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
      `도시철도차량용 축전지,충전기 개발 및 표준화 연구태양전지식 고감도 항공장애 표시등
    시스템 개발선 박용 리튬인산철 전지 시스템 개발`,
      `Development and Standardization of Storage Batteries and Chargers for Urban Railroad Vehicles\n\nDevelopment of Solar Cell-type High-Sensitivity Air Disability Indicator System\n\nDevelopment of Lithium Iron Phosphate Cell System for Ships`,
    ],
    2015: [
      `광주광역시 강소기업 선정한전 배전지능화용 리튬인산철 전지팩 개발`,
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
    2008: [`T-50 고등훈련기용 니켈카드뮴축전지 개발\nKTX 객차 및 동차용 니켈카드뮴 축전지 개발`, ``],
    2006: [
      `배기식 니켈수소전지 특허등록\n500MD 헬기용 축전지 국산화 개발\nF-4/5 전투기용 축전지 국산화 개발\n우수재활용 제품(GR) 인증\n천마 지대공 유도무기용 축전지 개발`,
      `Development of nickel cadmium storage batteries for T-50 advanced trainers\nDevelopment of nickel-cadmium storage batteries for KTX coaches and trains`,
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
      `Pioneer of the battery industry,\nLaying the foundation with\ntechnology's might`,
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

////// 배터리 페이지 데이터 //////

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

// //////////////////

export const batteryList = [
  {
    title: '방산용 Ni-cd',
    explain: [
      'IBT는 운용 안정성이 우수하고 혹한기 및 혹서기 등 열악한 환경에서도',
      '안전하게 사용할 수 있는 고출력의 고효율의 방산 전문 Ni-cd 배터리를',
      '신뢰를 바탕으로 공급해왔습니다.',
    ],
  },
  {
    title: '산업용 Ni-cd',
    explain: [
      'IBT는 고객의 니즈에 따라',
      '고에너지 밀도 고출력 특성을 갖춘 다양한 제품을 제공하고 있습니다.',
      '우수한 가격 경쟁력과 진동, 충격에 강한 내구성을 가지고 있습니다.',
    ],
  },
  {
    title: '동력용 Lithium',
    explain: [
      '고 에너지 밀도 - 축전지, 니켈-카드뮴에 비하여 높은 에너지밀도로 부피가 작고 중량이 가볍습니다.',
      '높은 기전력 - 리튬인산철전지의 기전력은 3.2V로 높은 전력 요구 시 구성 수량 감소 효과가 나타납니다.',
      '관리용이 - Memory effect가 없어 완전히 방전시키지 않은 상태에서도 충전이 가능합니다.',
      '낮은 자가 방전율 - 5%/월 미만의 자가방전율로 자가 방전에 의한 전력 손실이 매우 적습니다.',
    ],
  },
  {
    title: '에너지저장용 Lithium',
    explain: [
      '고 에너지 밀도 - 축전지, 니켈-카드뮴에 비하여 높은 에너지밀도로 부피가 작고 중량이 가볍습니다.',
      '높은 기전력 - 리튬인산철전지의 기전력은 3.2V로 높은 전력 요구 시 구성 수량 감소 효과가 나타납니다.',
      '관리용이 - Memory effect가 없어 완전히 방전시키지 않은 상태에서도 충전이 가능합니다.',
      '낮은 자가 방전율 - 5%/월 미만의 자가방전율로 자가 방전에 의한 전력 손실이 매우 적습니다.',
    ],
  },
]

export const defenseList = [
  {
    title: '항공',
    itemFile: '/image/320방산용Ni-cd/321.1_방산용 Nicd_항공_제품사진.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemSubTitle: '',
    itemAdvanced: [
      '다양한 항공용 무기 모델에 적용되는 Ni-cd 배터리입니다.',
      '항공 무기의 에너지 공급원으로서 중요한 진동, 충격 및 고도특성이 우수하여 안전합니다.',
    ],
  },
  {
    title: '육상',
    itemFile: '/image/320방산용Ni-cd/322.1_방산용 Nicd_육상_제품사진.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemSubTitle: '',
    itemAdvanced: [
      '단거리 유도무기인 천마와 발칸포의 회전 및 발사 시 필요한 에너지를 공급하는 육상 무기용 배터리입니다.',
      '1차 동력원을 확보하고 체계운용에 따라 엔진 가동없이 탑재 장비에 직전력을 공급하며,',
      '탑재 장비의 작동 시 과도한 전압 발생을 상쇄시키는 등 체계의 중요한 역할을 수행합니다.',
      '열악한 주위 환경에서도 원활한 엔진 시동으로 운용 안정성이 우수합니다.',
    ],
  },
  {
    title: '해상',
    itemFile: '/image/320방산용Ni-cd/323.1_방산용 Nicd_해상_제품사진.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemSubTitle: '',
    itemAdvanced: [
      '근거리 대공용 함포의 사격, 함포 회전 및 발사 시 필요한 에너지를 공급하는',
      '혹한기 및 혹서기 등 열악한 환경에서도 안전하게 사용할 수 있는 배기식 니켈 카드뮴 축전지 제품입니다.',
      '고율 방전 성능이 우수하여 운용 안정성이 높습니다.',
    ],
  },
]

export const industryList = [
  {
    title: '철도용',
    itemFile: '/image/330산업용Ni-cd/331.1_산업용 Lithium_철도_제품.png',
    itemTitle: '철도 지하철용 Ni-cd 배터리',
    itemSubTitle: '20년 노하우의 철도 지하철 전용 제품',
    itemAdvanced: [
      '고품질의 투명한 전조 사용으로 육안으로 내부 상태 확인이 가능해 유지 보수가 쉬우며',
      '과충전시 활물질 탈락이 없고, 종지 전압 이하까지 방전이 진행되어도',
      '성능 회복이 가능하여 과충전 방전 특성이 우수합니다. 내산성, 내충격에 강한 설계로',
      '긴 사이클 수명을 보장하며, 온도에 따른 변화가 거의 없어',
      '35℃ ~ 50℃에 이르는 광범위한 온도에서도 강력한 성능을 발휘합니다.',
    ],
  },
  {
    title: 'UPS용',
    itemFile: '/image/330산업용Ni-cd/332.1_산업용 Lithium_UPS_제품.png',
    itemTitle: 'UPS용 Ni-cd 배터리',
    itemSubTitle: '무정전 예비전원용 배터리',
    itemAdvanced: [
      '발전소, 수송망, 화학공장, 정유공장, 제철소 및 통제시스템의 무정전 예비전원용 배터리입니다.',
      'IBT의 UPS용 Ni-cd 모델은 내충격성이 우수하고 자기 방전이 최소화되어 수명이 길고 성능이 강력합니다.',
      '환수촉매기능을 적용하여 유지보수가 편리하며 유해가스 발생 문제를 해소하여 안전한 제품입니다.',
    ],
  },
]

export const powerList = [
  {
    title: '지게차',
    itemFile: '/image/340동력용Lithium/341.1_동력용 Lithium_제품(지게차 배터리).png',
    itemTitle: '지게차용 리튬 배터리',
    itemSubTitle: '지게차에 강력한 출력을 제공하는 리튬 인산철 축전지',
    itemAdvanced: [
      '지게차용 리튬 배터리는 급속 충전 및 장시간 사용으로 여분의 배터리가 불필요하며',
      '2&3 Shift 사용처에 적용이 가능합니다. 전해액 보충이 불필요한 효율적인 충전으로 유지비용이 절감되며',
      '충, 방전 중 유해가스 발생이 없어 쾌적한 작업환경과 건강한 사업장 실현이 가능합니다.',
      '납산 대비 3배 이상의 수명과 모니터링 관리로, 연중 무휴 운영 안전이 보장됩니다.',
    ],
  },
  {
    title: 'AGV',
    itemFile: '/image/340동력용Lithium/342.1_동력용 Lithium_제품(AGV 배터리).png',
    itemTitle: 'AGV용 리튬 배터리',
    itemSubTitle: 'AGV (Automatic Guided Vehicle)\n강력한 출력을 제공하는 리튬 인산철 축전지',
    itemAdvanced: [
      '납축전지 4배 장수명, 소형 경량, 급속충전 등의 특징을 가지고 있는 AGV용 리튬 배터리는',
      '증류수 보충이 필요하지 않아 유지보수가 용이하며 높은 충 방전 효율로 전기세 등 운영비용이 감소합니다.',
      '전용 BMS를 통해 편리고 안정적인 운영이 가능합니다.',
    ],
  },
  {
    title: '선박',
    itemFile: '/image/340동력용Lithium/343.1_동력용 Lithium_제품(선박 배터리).png',
    itemTitle: '선박용 리튬 배터리',
    itemSubTitle: '강력한 출력을 제공하는 친환경 선박의 동력 시스템 솔루션',
    itemAdvanced: [
      '에너지 밀도와 안정성이 높은 선박용 배터리는\n모듈화를 통해 선박의 다양한 스펙에 맞춤 구현이 가능하며',
      '자체 냉각 기술과 신뢰성 높은 자사 BMS 기술로 안정적인 관리와 안전이 보장됩니다.',
      '에너지 절감 효과가 있는 친환경 제품으로, 오염을 방지하여 깨끗한 해양 환경 조성에 기여합니다.',
    ],
  },
  {
    title: '골프카',
    itemFile: '/image/340동력용Lithium/344.1_동력용 Lithium_제품(골프카 배터리).jpg',
    itemTitle: '지게차용 리튬 배터리',
    itemSubTitle: '골프카에 강력한 출력과 BMS를 제공하는 운용 솔루션',
    itemAdvanced: [
      '여러 효용으로 기존 사용되던 연축전지가 리튬 전지로 대체되고 있는 변화의 흐름에 따라,',
      '이 모델 또한 연축전지를 대체하는 모델로서 추가 비용 없이 교체가 가능하며',
      '무게는 1/2, 출력 및 수명은 2배라는 강력한 특징을 가집니다. 기존 골프카 충전기와 호환이 되며,',
      '자체보유한 BMS 기술으로  배터리 실시간 모니터링이 가능하여 편리하고 안정적인 운용이 가능합니다.',
    ],
  },
  {
    title: '청소차',
    itemFile: '/image/340동력용Lithium/344.1_동력용 Lithium_제품(골프카 배터리).jpg',
    itemTitle: '청소용 리튬 배터리',
    itemSubTitle: 'AM특장차에 강력한 출력을 제공하는 리튬인산철 배터리',
    itemAdvanced: [
      '에너지 밀도와 안정성이 높은 선박용 배터리는\n모듈화를 통해 선박의 다양한 스펙에 맞춤 구현이 가능하며',
      '자체 냉각 기술과 신뢰성 높은 자사 BMS 기술로 안정적인 관리와 안전이 보장됩니다.',
      '에너지 절감 효과가 있는 친환경 제품으로, 오염을 방지하여 깨끗한 해양 환경 조성에 기여합니다.',
    ],
  },
]

export const energySaveList = [
  {
    title: 'UPS용',
    itemFile: '/image/350에너지저장용Lithium/351.1_에너지저장용 Lithium_기술 설명 사진(UPS).png',
    itemTitle: 'IBT in UPS',
    itemSubTitle: '',
    itemAdvanced: [
      `리튬 배터리를 사용하는 UPS(무정전 전원 공급장치)는 높은 에너지 밀도와 긴 수명으로 비상 전원 솔루션에 혁신을 가져왔습니다.
      이 배터리는 빠른 충전 시간과 낮은 유지보수 비용으로 경제적이며, 데이터 센터, 의료 시설, 통신 인프라, 제조업 및 산업 시설,
      금융 거래소, 공공 기관, 주거/상업 건물 등 중요시설에서 전력 중단 시 안정적인 전원을 보장하여 시스템의 전력 공급을 강화합니다. 
      리튬 UPS는 환경에 미치는 영향이 적고, 장기적인 비용 효율성을 제공하여 지속 가능한 에너지 솔루션으로 주목받고 있습니다.`,
      `IBT는 경량화, 소형화된 배터리와 통합 배터리 관리 시스템 BMS를 통해 지속적으로 배터리를 최적화 하여 성능을 극대화 하고
      안정성을 유지하며, Module 구성으로 필요한 용량 및 전압에 맞게 제공합니다.`,
    ],
  },
  {
    title: 'ESS용',
    itemFile: '/image/350에너지저장용Lithium/352.1_에너지저장용 Lithium_기술설명사진(ESS).png',
    itemTitle: 'IBT in ESS',
    itemSubTitle: '',
    itemAdvanced: [
      `ESS(Energy Storage Systems)는 재생 가능한 에너지 소스와 결합하여 전력망의 안정성을 향상시키고 에너지 효율을 높이는 혁신적인
      기술입니다. 이 시스템은 과잉 에너지를 저장하여 수요가 높을 때 이를 방출함으로써 전력 공급의 균형을 유지합니다. ESS는 피크 시간의 전력 사용을
      최적화하고, 재생 에너지의 변동성을 관리하여 더욱 신뢰할 수 있는 전력 공급망을 구축합니다. 이러한 기술은 장기적인 에너지 비용 절감과
      함께 친환경적인 에너지 관리 솔루션으로 각광받고 있습니다.`,
      `IBT는 종합에너지 시스템으로써 신재생에너지 연계, 주파수 조정, 피크 저감, Micorgrid 등 다양한 용도의 ESS(Energy Storage System)을
      구축하였고 다양한 배터리 시스템 및 PCS 선정, 설계, 제조 및 운용 기술과 3단계의 첨단 BMS를 이용하여 위험을 최소화한 신뢰성 높은 시스템을
      제공하고 있습니다. 다양한 ESS 응용 분야에 적합하도록 설계되어, 시스템의 확장 요구 사항에 유연하게 대응할 수 있는 IBT는 부하 패턴 분석을 통한
      최적 용량 및 신뢰도 높은 배터리로 고객 맞춤형 ESS 공급과 통합 EMS를 통한 효율적이고 안정적인 운영을 보장합니다.`,
    ],
  },
]

export const ModelInfo = [
  [
    {
      item: '항공',
      itemAdvanced: [
        {
          imagePath: '/image/320방산용Ni-cd/321.2_방산용 Nicd_항공_적용모델 (SURION)',
          name: 'SURION',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.3_방산용 Nicd_항공_적용모델(T-50).png',
          name: 'T-50',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.4_방산용 Nicd_항공_적용모델(KT-1).png',
          name: 'KT-1',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.5_방산용 Nicd_항공_적용모델(500MD).png',
          name: '500MD',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.6_방산용 Nicd_항공_적용모델(UH-60H).png',
          name: 'UH-60H',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.7_방산용 Nicd_항공_적용모델 (UH-1H).png',
          name: 'UH-1H',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.8_방산용 Nicd_항공_적용모델(F-45).png',
          name: 'F-4/5',
        },
        {
          imagePath: '/image/320방산용Ni-cd/321.9_방산용 Nicd_항공_적용모델 (LAH,LCH).png',
          name: 'LAH/LCH',
        },
      ],
    },
    {
      item: '육상',
      itemAdvanced: [
        {
          imagePath: '/image/320방산용Ni-cd/322.2_방산용 Nicd_육상_적용모델(발칸).png',
          name: '발칸',
        },
        {
          imagePath: '/image/320방산용Ni-cd/322.2-방산용 Nicd_육상_적용모델(천마).png',
          name: '천마',
        },
      ],
    },
    {
      item: '해상',
      itemAdvanced: [
        {
          imagePath: '/image/320방산용Ni-cd/323.2_방산용 Nicd_해상_적용모델 (함포).png',
          name: '함포',
        },
        {
          imagePath: '/image/320방산용Ni-cd/323.2_방산용 Nicd_해상_적용모델 (해상골키퍼).png',
          name: '해상골키퍼',
        },
      ],
    },
  ],
  [
    {
      item: '철도',
      itemAdvanced: [
        {
          imagePath: '/image/330산업용Ni-cd/331.2_산업용 Lithium_적용모델(고속철도).png',
          name: '고속철도',
        },
        {
          imagePath: '/image/330산업용Ni-cd/331.3_산업용 Lithium_적용모델(지하철).png',
          name: '지하철',
        },
        {
          imagePath: '/image/330산업용Ni-cd/331.4_산업용 Lithium_적용모델(경전철).png',
          name: '경전철',
        },
        {
          imagePath: '/image/330산업용Ni-cd/331.5_산업용 Lithium_적용모델(디젤기관차).png',
          name: '디젤기관차',
        },
      ],
    },
    {
      item: 'UPS',
      itemAdvanced: [],
    },
  ],
  [
    {
      item: '지게차',
      itemAdvanced: [
        {
          imagePath: '/image/동력리튬샘플/지게차1.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/지게차2.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/지게차3.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/지게차4.png',
          name: '',
        },
      ],
    },
    {
      item: 'AGV',
      itemAdvanced: [
        {
          imagePath: '/image/동력리튬샘플/AGV1.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/AGV2.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/AGV3.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/AGV4.png',
          name: '',
        },
      ],
    },
    {
      item: '선박',
      itemAdvanced: [
        {
          imagePath: '/image/동력리튬샘플/선박1.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/선박2.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/선박3.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/선박4.png',
          name: '',
        },
      ],
    },
    {
      item: '골프카',
      itemAdvanced: [
        {
          imagePath: '/image/동력리튬샘플/골프카1.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/골프카2.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/골프카3.png',
          name: '',
        },
      ],
    },
    {
      item: '청소차',
      itemAdvanced: [
        {
          imagePath: '/image/동력리튬샘플/골프카1.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/골프카2.png',
          name: '',
        },
        {
          imagePath: '/image/동력리튬샘플/골프카3.png',
          name: '',
        },
      ],
    },
  ],
  [
    {
      item: 'UPS',
      itemAdvanced: [
        {
          imagePath: '/image/350에너지저장용Lithium/351.2_에너지저장용 Lithium_적용분야(지하철).png',
          name: '지하철',
        },
        {
          imagePath: '/image/350에너지저장용Lithium/351.3_에너지저장용 Lithium_적용분야(플랜트).png',
          name: '플랜트',
        },
        {
          imagePath: '/image/350에너지저장용Lithium/351.4_에너지저장용 Lithium_적용분야(전력).png',
          name: '전력',
        },
        {
          imagePath: '/image/350에너지저장용Lithium/351.5_에너지저장용 Lithium_적용분야(가정).png',
          name: '가정',
        },
      ],
    },
    {
      item: 'ESS',
      itemAdvanced: [
        {
          imagePath: '/image/350에너지저장용Lithium/352.2_에너지저장용 Lithium_적용분야(지하철).png',
          name: '지하철',
        },
        {
          imagePath: '/image/350에너지저장용Lithium/352.3_에너지저장용 Lithium_적용분야(플랜트).png',
          name: '플랜트',
        },
        {
          imagePath: '/image/350에너지저장용Lithium/352.4_에너지저장용 Lithium_적용분야(전력).png',
          name: '전력',
        },
        {
          imagePath: '/image/350에너지저장용Lithium/352.5_에너지저장용 Lithium_적용분야(가정).png',
          name: '가정',
        },
      ],
    },
  ],
]
export const companyEmail = 'sales2@ibteng.co.kr'
