'use client';

export default function HeroBanner() {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            台湾プロ野球
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            CPBL - Chinese Professional Baseball League
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            台湾最高峰のプロ野球リーグをリアルタイムで体感しよう
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">今日の注目試合</h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-lg font-bold">統一7-ELEVEn獅</div>
                <div className="text-3xl font-bold text-yellow-400">4</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">9回表</div>
                <div className="text-xs opacity-60">LIVE</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">楽天モンキーズ</div>
                <div className="text-3xl font-bold text-yellow-400">2</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              ライブ観戦
            </button>
            <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              スケジュール
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
               backgroundSize: '200px 200px',
               backgroundPosition: 'center'
             }}>
        </div>
      </div>
    </section>
  );
}