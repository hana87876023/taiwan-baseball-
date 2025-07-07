'use client';

export default function PrimaryCTA() {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 rounded-2xl text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 px-8 py-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            台湾野球の魅力を
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              体感しよう
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            ライブ観戦からアプリダウンロードまで、CPBLを楽しむすべてがここに
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🎟️</div>
              <h3 className="text-xl font-semibold mb-2">チケット購入</h3>
              <p className="text-sm opacity-75 mb-4">
                お気に入りのチームを球場で応援しよう
              </p>
              <button className="bg-red-600 hover:bg-red-700 w-full py-3 rounded-lg font-semibold transition-colors">
                チケットを購入
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">公式アプリ</h3>
              <p className="text-sm opacity-75 mb-4">
                ライブスコア、動画、統計をアプリで
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold transition-colors">
                アプリダウンロード
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
              今すぐ観戦予約
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-75">フォローする:</span>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  📘
                </button>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  📸
                </button>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  🐦
                </button>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  📺
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold">120+</div>
                <div className="text-sm opacity-75">試合/年</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">6</div>
                <div className="text-sm opacity-75">プロチーム</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">500K+</div>
                <div className="text-sm opacity-75">年間観客数</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">35年</div>
                <div className="text-sm opacity-75">リーグ歴史</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='white' stroke-width='2'/%3E%3Cpath d='M30 50 L70 50 M50 30 L50 70' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                 backgroundSize: '150px 150px',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'repeat'
               }}>
          </div>
        </div>
      </div>
    </section>
  );
}