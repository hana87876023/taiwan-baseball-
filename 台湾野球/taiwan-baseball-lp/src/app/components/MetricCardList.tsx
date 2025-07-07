'use client';

export default function MetricCardList() {
  const metrics = [
    {
      id: 'home-runs',
      title: '本塁打王',
      value: '28',
      player: '高國麟',
      team: '統一7-ELEVEn獅',
      icon: '⚾',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'batting-avg',
      title: '首位打者',
      value: '.342',
      player: '林安可',
      team: '統一7-ELEVEn獅',
      icon: '🏏',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'era',
      title: '防御率1位',
      value: '2.15',
      player: '王維中',
      team: '楽天モンキーズ',
      icon: '🥎',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'rbi',
      title: '打点王',
      value: '89',
      player: '林智勝',
      team: '中信兄弟',
      icon: '💪',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          リーグ統計
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          2024シーズンの主要部門リーダーをチェック
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`bg-gradient-to-r ${metric.color} p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{metric.icon}</span>
                <div className="text-right">
                  <div className="text-3xl font-bold">{metric.value}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{metric.title}</h3>
            </div>
            
            <div className="p-6">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {metric.player}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.team}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  詳細統計を見る →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
          全統計を見る
        </button>
      </div>
    </section>
  );
}