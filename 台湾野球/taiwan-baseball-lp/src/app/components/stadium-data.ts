export type StadiumData = {
  id: string;
  name: string;
  city: string;
  capacity: string;
  team: string;
  coordinates: { x: number; y: number };
  games?: number;
  // 詳細情報を追加
  description: string;
  features: string[];
  access: {
    station: string;
    walkTime: string;
    parking: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  address: string;
  opened: string;
  surface: string;
  dimensions: {
    leftField: string;
    centerField: string;
    rightField: string;
  };
};

export const stadiumData: StadiumData[] = [
  {
    id: 'taipei-dome',
    name: '台北ドーム',
    city: '台北',
    capacity: '40,000',
    team: '統一7-ELEVEn獅',
    coordinates: { x: 50, y: 30 },
    games: 3,
    description: '台湾初の屋内野球場として2023年に開場した最新鋭の球場。LEDスクリーンや最新の音響設備を備え、天候に左右されない快適な観戦環境を提供します。',
    features: [
      '台湾最大の屋内球場',
      '最新のLEDスクリーン',
      '全天候型観戦',
      '34の豪華スイート',
      '最新音響システム'
    ],
    access: {
      station: 'MRT台北101/世貿駅',
      walkTime: '徒歩5分',
      parking: '地下駐車場完備（1,000台）'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508344928928-7165b67de128?w=600&q=80',
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
        'https://images.unsplash.com/photo-1567654854594-609e3b14b23e?w=600&q=80'
      ]
    },
    address: '台北市信義区松壽路20号',
    opened: '2023年',
    surface: '人工芝',
    dimensions: {
      leftField: '99m',
      centerField: '122m',
      rightField: '99m'
    }
  },
  {
    id: 'taoyuan-stadium',
    name: '桃園国際野球場',
    city: '桃園',
    capacity: '20,000',
    team: '楽天モンキーズ',
    coordinates: { x: 45, y: 35 },
    games: 2,
    description: '2009年に開場した桃園の誇る野球場。楽天モンキーズの本拠地として、熱狂的なファンの声援で知られています。近代的な設備と伝統的な野球文化が融合した球場です。',
    features: [
      '楽天モンキーズの本拠地',
      '熱狂的なファン文化',
      '近代的な照明設備',
      'ファンゾーン充実',
      '大型ビジョン完備'
    ],
    access: {
      station: '桃園駅',
      walkTime: 'バス15分',
      parking: '周辺駐車場多数'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1590508751339-1a5e9b72a2a6?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1536122522160-72e3eb09863e?w=600&q=80',
        'https://images.unsplash.com/photo-1566479117151-c10615f43073?w=600&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80'
      ]
    },
    address: '桃園市中壢区領航北路一段251号',
    opened: '2009年',
    surface: '天然芝',
    dimensions: {
      leftField: '100m',
      centerField: '122m',
      rightField: '100m'
    }
  },
  {
    id: 'taichung-stadium',
    name: '台中洲際球場',
    city: '台中',
    capacity: '20,000',
    team: '中信兄弟',
    coordinates: { x: 40, y: 50 },
    games: 0,
    description: '2006年開場の台中洲際球場は、中信兄弟の本拠地として親しまれています。台湾の野球文化の中心地の一つで、多くの名勝負が繰り広げられてきました。',
    features: [
      '中信兄弟の本拠地',
      '歴史ある球場',
      '観客席からの視認性良好',
      '伝統的な野球文化',
      '充実した売店'
    ],
    access: {
      station: '台中駅',
      walkTime: 'バス20分',
      parking: '専用駐車場完備'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1570185552685-b12b2c62c0a6?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&q=80',
        'https://images.unsplash.com/photo-1569163139394-de4798d8c3a9?w=600&q=80',
        'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=600&q=80'
      ]
    },
    address: '台中市北屯区崇德路三段835号',
    opened: '2006年',
    surface: '天然芝',
    dimensions: {
      leftField: '100m',
      centerField: '122m',
      rightField: '100m'
    }
  },
  {
    id: 'tainan-stadium',
    name: '台南市立野球場',
    city: '台南',
    capacity: '12,000',
    team: '統一7-ELEVEn獅',
    coordinates: { x: 35, y: 70 },
    games: 1,
    description: '台湾南部の野球の聖地として知られる台南市立野球場。歴史と伝統を感じさせる球場で、地元ファンの熱い応援が特徴的です。',
    features: [
      '南部野球の聖地',
      '地元密着型球場',
      'アットホームな雰囲気',
      '歴史と伝統',
      '地元グルメ充実'
    ],
    access: {
      station: '台南駅',
      walkTime: 'バス10分',
      parking: '周辺パーキング利用'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?w=600&q=80',
        'https://images.unsplash.com/photo-1602491052854-64c03921de87?w=600&q=80',
        'https://images.unsplash.com/photo-1593201464350-96ec57065aa2?w=600&q=80'
      ]
    },
    address: '台南市南区体育路10号',
    opened: '1931年',
    surface: '天然芝',
    dimensions: {
      leftField: '97m',
      centerField: '120m',
      rightField: '97m'
    }
  },
  {
    id: 'kaohsiung-stadium',
    name: '澄清湖球場',
    city: '高雄',
    capacity: '12,000',
    team: 'TSGホークス',
    coordinates: { x: 30, y: 75 },
    games: 1,
    description: '高雄にある歴史ある球場で、2024年からTSGホークスの本拠地となりました。美しい景観と伝統的な雰囲気を併せ持つ球場です。',
    features: [
      'TSGホークスの本拠地',
      '美しい景観',
      '歴史ある球場',
      '南国の雰囲気',
      'リニューアル施設'
    ],
    access: {
      station: '高雄駅',
      walkTime: 'バス25分',
      parking: '専用駐車場あり'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508344928928-7165b67de128?w=600&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
      ]
    },
    address: '高雄市鳥松区澄清路834号',
    opened: '1999年',
    surface: '天然芝',
    dimensions: {
      leftField: '100m',
      centerField: '122m',
      rightField: '100m'
    }
  }
]; 