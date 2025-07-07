'use client';

export default function FooterNav() {
  const footerSections = [
    {
      title: 'リーグ情報',
      links: [
        { name: 'CPBL概要', href: '#' },
        { name: 'チーム一覧', href: '#' },
        { name: '試合スケジュール', href: '#' },
        { name: '順位表', href: '#' },
        { name: 'ルール・規則', href: '#' }
      ]
    },
    {
      title: '選手・統計',
      links: [
        { name: '個人成績', href: '#' },
        { name: 'チーム成績', href: '#' },
        { name: '記録・歴史', href: '#' },
        { name: '新人選手', href: '#' },
        { name: 'MVP・表彰', href: '#' }
      ]
    },
    {
      title: 'メディア',
      links: [
        { name: 'ライブ配信', href: '#' },
        { name: 'ハイライト', href: '#' },
        { name: 'ニュース', href: '#' },
        { name: 'フォトギャラリー', href: '#' },
        { name: 'ポッドキャスト', href: '#' }
      ]
    },
    {
      title: 'ファンサービス',
      links: [
        { name: 'チケット購入', href: '#' },
        { name: '公式アプリ', href: '#' },
        { name: 'グッズショップ', href: '#' },
        { name: 'ファンクラブ', href: '#' },
        { name: 'イベント情報', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                台湾プロ野球
              </h3>
              <p className="text-gray-400 text-sm">
                CPBL - Chinese Professional Baseball League
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                台湾最高峰のプロ野球リーグ。熱戦と感動をお届けします。
              </p>
              
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  📘
                </button>
                <button className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                  📸
                </button>
                <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  🐦
                </button>
                <button className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                  📺
                </button>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Chinese Professional Baseball League. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="hover:text-white transition-colors">
                利用規約
              </a>
              <a href="#" className="hover:text-white transition-colors">
                お問い合わせ
              </a>
              <a href="#" className="hover:text-white transition-colors">
                採用情報
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">
                このサイトは台湾プロ野球リーグ（CPBL）の魅力を紹介するファンサイトです
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
                <span>🏆 2024シーズン開催中</span>
                <span>•</span>
                <span>📱 公式アプリ配信中</span>
                <span>•</span>
                <span>🎟️ チケット販売中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}