'use client';

interface GameTableProps {
  type: 'live' | 'schedule' | 'results';
}

export default function GameTable({ type }: GameTableProps) {
  const liveGames = [
    {
      id: '1',
      time: '19:00',
      away: '楽天モンキーズ',
      home: '統一7-ELEVEn獅',
      awayScore: 2,
      homeScore: 4,
      status: '9回表',
      stadium: '台南球場'
    },
    {
      id: '2',
      time: '19:00',
      away: 'フォルモサ夢想家',
      home: '中信兄弟',
      awayScore: 5,
      homeScore: 7,
      status: 'ファイナル',
      stadium: '台中洲際球場'
    }
  ];

  const scheduleGames = [
    {
      id: '3',
      time: '19:00',
      away: '富邦ガーディアンズ',
      home: 'TSGホークス',
      status: '今日',
      stadium: '桃園球場'
    },
    {
      id: '4',
      time: '18:30',
      away: '統一7-ELEVEn獅',
      home: '楽天モンキーズ',
      status: '明日',
      stadium: '桃園球場'
    }
  ];

  const games = type === 'live' ? liveGames : type === 'schedule' ? scheduleGames : liveGames;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                時間
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                アウェイ
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                スコア
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ホーム
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                状況
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                球場
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {games.map((game) => (
              <tr key={game.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {game.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div className="text-sm font-medium text-gray-900">
                      {game.away}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {type === 'schedule' ? (
                    <span className="text-gray-500">vs</span>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg font-bold">{(game as any).awayScore}</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-lg font-bold">{(game as any).homeScore}</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div className="text-sm font-medium text-gray-900">
                      {game.home}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      game.status.includes('回') 
                        ? 'bg-red-100 text-red-800'
                        : game.status === 'ファイナル'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {game.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {game.stadium}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}