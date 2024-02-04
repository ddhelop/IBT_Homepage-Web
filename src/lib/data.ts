export const links_coInfo = [
  {
    name: 'Vision',
    hash: '#vision',
  },
  {
    name: 'History',
    hash: '#history',
  },
  {
    name: 'Coop',
    hash: '#coop',
  },
  {
    name: 'TechAuth',
    hash: '#techauth',
  },
  {
    name: 'Location',
    hash: '#location',
  },
] as const

export const links_battery = [
  {
    name: 'Ni-cd',
    hash: '#ni-cd',
  },
  {
    name: '방산',
    hash: '#defense',
  },
  {
    name: 'Industry',
    hash: '#industry',
  },
  {
    name: 'Lithium',
    hash: '#lithium',
  },
  {
    name: '동력',
    hash: '#power',
  },
  {
    name: '에너지저장',
    hash: '#energy-save',
  },
  {
    name: '카탈로그',
    hash: '#catelog',
  },
  {
    name: 'Contact Us',
    hash: '#contact-us',
  },
] as const

////// 배터리 페이지 데이터 //////
export const batteryList = [
  {
    title: '방산용 Ni-cd',
    explain1: 'IBT는 저온 및 고온에서도 고출력의 고효율 제품을 공급하고 있습니다.',
    explain2: '소량화 및 경량화가 가능하며',
    explain3: '운용 안정성이 우수하여 혹한기 및 혹서기 등 열악한 환경에서도',
    explain4: '안전하게 사용할 수 있습니다.',
  },
  {
    title: '산업용 Ni-cd',
    explain1: '아이비티는 고객의 니즈에 따라',
    explain2: '고 에너지 밀도 고출력 특성을 갖춘 다양한 제품을 제공하고 있습니다.',
    explain3: '우수한 가격 경쟁력을 바탕으로',
    explain4: '내구성을 가지며 진동, 충격에 강한 특징을 가지고 있습니다.',
  },
  {
    title: '동력용 Lithium',
    explain1: '고 에너지 밀도 - 축전지, 니켈-카드뮴에 비하여 높은 에너지밀도로 부피가 작고 중량이 가볍습니다.',
    explain2: '높은 기전력 - 리튬인산철전지의 기전력은 3.2V로 높은 전력 요구 시 구성 수량 감소 효과가 나타납니다.',
    explain3: '관리용이 - Memory effect가 없어 완전히 방전시키지 않은 상태에서도 충전이 가능합니다.',
    explain4: '낮은 자가 방전율 - 5%/월 미만의 자가방전율로 자가 방전에 의한 전력 손실이 매우 적습니다.',
  },
  {
    title: '에너지저장용 Lithium',
    explain1: '고 에너지 밀도 - 축전지, 니켈-카드뮴에 비하여 높은 에너지밀도로 부피가 작고 중량이 가볍습니다.',
    explain2: '높은 기전력 - 리튬인산철전지의 기전력은 3.2V로 높은 전력 요구 시 구성 수량 감소 효과가 나타납니다.',
    explain3: '관리용이 - Memory effect가 없어 완전히 방전시키지 않은 상태에서도 충전이 가능합니다.',
    explain4: ' 낮은 자가 방전율 - 5%/월 미만의 자가방전율로 자가 방전에 의한 전력 손실이 매우 적습니다.',
  },
]

export const defenseList = [
  {
    title: '항공',
    backgroundImage: '/image/320방산용Ni-cd/321.0_방산용 Ni-cd 항공.png',
    itemFile: '/image/320방산용Ni-cd/321.1_방산용 Nicd_항공_제품사진.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemAdvanced: ['고율 방전 성능 우수', '극저온 출력 특성 우수', '운용 안정성 우수'],
  },
  {
    title: '육상',
    backgroundImage: '/image/320방산용Ni-cd/322.0_방산용 Ni-cd 육상.png',
    itemFile: '/image/320방산용Ni-cd/322.1_방산용 Nicd_육상_제품사진.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemAdvanced: ['고율 방전 성능 우수', '극저온 출력 특성 우수', '운용 안정성 우수'],
  },
  {
    title: '해상',
    backgroundImage: '/image/320방산용Ni-cd/323.0_방산용 Ni-cd 해상.png',
    itemFile: '/image/320방산용Ni-cd/323.1_방산용 Nicd_해상_제품사진.png',
    itemTitle: 'Ni-Cd battery Sintered Type',
    itemAdvanced: ['고율 방전 성능 우수', '극저온 출력 특성 우수', '운용 안정성 우수'],
  },
]

export const industryList = [
  {
    title: '철도용',
    backgroundImage: '/image/330산업용Ni-cd/331.0_산업용 Lithium 철도.png',
    itemFile: '/image/330산업용Ni-cd/331.1_산업용 Lithium_철도_제품.png',
    itemTitle: '철도 지하철용 Ni-cd 배터리',
    itemAdvanced: [
      '육안으로 내부 상태 확인 가능한 쉬운 유지 보수',
      '과 충 방전 특성 우수',
      '온도에 대한 변화가 거의 없어 안정된 변동성',
    ],
  },
  {
    title: 'UPS용',
    backgroundImage: '/image/330산업용Ni-cd/332.0_산업용 Lithium UPS.png',
    itemFile: '/image/330산업용Ni-cd/332.1_산업용 Lithium_UPS_제품.png',
    itemTitle: 'UPS용 Ni-cd 배터리',
    itemAdvanced: [
      '자기 방전의 최소화',
      '긴수명, 고성능 제품',
      '환수촉매기능을 적용하여 편리한 유지보수',
      '우수한 내 충격성',
      '유해가스 발생해소에 따른 안전성발전소, 수송망, 화학공장, 정유공장, 제철소 및 통제시스템의',
      '무정전 예비전원용',
    ],
  },
]

export const powerList = [
  {
    title: '지게차',
    backgroundImage: '/image/340동력용Lithium/341.0_동력용 Lithium_지게차.png',
    itemFile: '/image/340동력용Lithium/341.1_동력용 Lithium_제품(지게차 배터리).png',
    itemTitle: '지게차용 리튬 배터리',
    itemAdvanced: [
      '강력한 출력을 제공하는 리튬 인산철 축전지',
      '연중 무휴 운전',
      '유지 보수 비용 감소',
      '수명증대',
      '모니터링 및 관리를 통한 운영 안전 보장',
    ],
  },
  {
    title: 'AGV',
    backgroundImage: '/image/340동력용Lithium/342.0_동력용 Lithium_AGV.png',
    itemFile: '/image/340동력용Lithium/342.1_동력용 Lithium_제품(AGV 배터리).png',
    itemTitle: 'AGV용 리튬 배터리',
    itemAdvanced: [
      '강력한 출력을 제공하는 리튬 인산철 축전지',
      '연중 무휴 운전',
      '유지 보수 비용 감소',
      '수명증대',
      '모니터링 및 관리를 통한 운영 안전 보장',
    ],
  },
  {
    title: '선박',
    backgroundImage: '/image/340동력용Lithium/343.0_동력용 Lithium_선박.png',
    itemFile: '/image/340동력용Lithium/343.1_동력용 Lithium_제품(선박 배터리).png',
    itemTitle: '선박용 리튬 배터리',
    itemAdvanced: [
      '강력한 출력을 제공하는 리튬 인산철 축전지',
      '연중 무휴 운전',
      '유지 보수 비용 감소',
      '수명증대',
      '모니터링 및 관리를 통한 운영 안전 보장',
    ],
  },
  {
    title: '골프카',
    backgroundImage: '/image/340동력용Lithium/344.0_동력용 Lithium_골프카.png',
    itemFile: '/image/340동력용Lithium/344.1_동력용 Lithium_제품(골프카 배터리).png',
    itemTitle: '지게차용 리튬 배터리',
    itemAdvanced: [
      '강력한 출력을 제공하는 리튬 인산철 축전지',
      '연중 무휴 운전',
      '유지 보수 비용 감소',
      '수명증대',
      '모니터링 및 관리를 통한 운영 안전 보장',
    ],
  },
]
export const energySaveList = [
  {
    title: 'UPS용',
    backgroundImage: '/image/350에너지저장용Lithium/351.0_에너지저장용 Lithium_UPS.png',
    itemFile: '/image/350에너지저장용Lithium/351.1_에너지저장용 Lithium_기술 설명 사진(UPS).png',
    itemTitle: 'IBT in UPS',
    itemAdvanced: [
      '1. 경량화 소형화:',
      '납축전지 대비 더 가볍고 크기도 더 작아 설치가 쉬움',
      '2.긴 수명:',
      '배터리 교체에 대한 비용 절감',
      '3. 높은 충 방전 효율:',
      '빠른 충전과 고출력으로 운영성을 높여줌',
      '4. 통합 배터리 관리 시스템(BMS):',
      'BMS를 통해 지속적으로 배터리를 최적화 하여 성능을 극대화 하고 안정성 유지',
      '5. Module구성:',
      'Module 구성으로 필요한 용량 및 전압에 맞게 설치 가능',
    ],
  },
  {
    title: 'ESS용',
    backgroundImage: '/image/350에너지저장용Lithium/352.0_에너지저장용 Lithium_ESS.png',
    itemFile: '/image/350에너지저장용Lithium/352.1_에너지저장용 Lithium_기술설명사진(ESS).png',
    itemTitle: 'IBT in ESS',
    itemAdvanced: [
      '1. 고밀도 에너지 저장 능력:',
      '높은 에너지 밀도로 ESS의 효율성과 용량을 극대화합니다.',
      '2. 장기 안정성 및 내구성:',
      '수천 회의 충전 및 방전 주기에 걸쳐 일관된 성능을 유지합니다.',
      '3. 높은 충전 및 방전 효율:',
      '뛰어난 충전 및 방전 효율성으로 에너지 손실을 최소화하고 전체 시스템의 효율을 증가시킵니다.',
      '4. 환경적 지속 가능성:',
      '환경 친화적인 재료로 제작되어 재활용 가능성을 고려하여 환경 영향을 최소화합니다.',
      '5. 안전성:',
      '첨단 BMS(배터리 관리 시스템)이 과열, 과충전 및 과방전으로부터 보호해주어 안전성이 보장됩니다.',
      '6. 규제 및 표준 준수:',
      'IBT의 배터리는 국제적인 안전 및 환경 규제를 준수하며, 엄격한 표준을 따릅니다.',
      '7. 경제성:',
      '전체 소유 비용을 고려한 경제적 설계로, 장기적인 비용 절감이 가능합니다.',
      '8. 적응성 및 확장성:',
      '다양한 ESS 응용 분야에 적합하도록 설계되었으며, 시스템의 확장 요구 사항에 유연하게 대응할 수 있습니다.',
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
      itemAdvanced: [],
    },
    {
      item: 'AGV',
      itemAdvanced: [],
    },
    {
      item: '선박',
      itemAdvanced: [],
    },
    {
      item: '골프카',
      itemAdvanced: [],
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
