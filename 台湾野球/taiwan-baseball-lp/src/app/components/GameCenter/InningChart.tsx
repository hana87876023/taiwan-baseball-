'use client';

export default function InningChart() {
  const innings = [
    { inning: '1', away: 0, home: 1 },
    { inning: '2', away: 0, home: 0 },
    { inning: '3', away: 1, home: 2 },
    { inning: '4', away: 0, home: 0 },
    { inning: '5', away: 1, home: 0 },
    { inning: '6', away: 0, home: 1 },
    { inning: '7', away: 0, home: 0 },
    { inning: '8', away: 0, home: 0 },
    { inning: '9', away: '-', home: '-' }
  ];

  return (
    <div className="bg-white rounded-lg overflow-hidden border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2 text-left font-medium text-gray-700">チーム</th>
            {innings.map((inning) => (
              <th key={inning.inning} className="px-2 py-2 text-center font-medium text-gray-700 min-w-[32px]">
                {inning.inning}
              </th>
            ))}
            <th className="px-3 py-2 text-center font-medium text-gray-700 bg-yellow-50">R</th>
            <th className="px-3 py-2 text-center font-medium text-gray-700">H</th>
            <th className="px-3 py-2 text-center font-medium text-gray-700">E</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-3 py-2 font-medium text-gray-900">楽天モンキーズ</td>
            {innings.map((inning, index) => (
              <td key={index} className="px-2 py-2 text-center">
                <span className={inning.away === 0 ? 'text-gray-400' : 'font-semibold'}>
                  {inning.away}
                </span>
              </td>
            ))}
            <td className="px-3 py-2 text-center font-bold text-lg bg-yellow-50">2</td>
            <td className="px-3 py-2 text-center">8</td>
            <td className="px-3 py-2 text-center">0</td>
          </tr>
          <tr>
            <td className="px-3 py-2 font-medium text-gray-900">統一7-ELEVEn獅</td>
            {innings.map((inning, index) => (
              <td key={index} className="px-2 py-2 text-center">
                <span className={inning.home === 0 ? 'text-gray-400' : 'font-semibold'}>
                  {inning.home}
                </span>
              </td>
            ))}
            <td className="px-3 py-2 text-center font-bold text-lg bg-yellow-50">4</td>
            <td className="px-3 py-2 text-center">10</td>
            <td className="px-3 py-2 text-center">1</td>
          </tr>
        </tbody>
      </table>
      
      <div className="p-4 bg-gray-50 border-t">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="font-semibold text-gray-700 mb-1">投手成績</div>
            <div className="text-gray-600">
              王維中: 7.0回, 4奪三振, 1失点<br/>
              救援: 陳冠宇 (8回)
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">注目選手</div>
            <div className="text-gray-600">
              林安可: 3打数2安打, 1打点<br/>
              高國麟: 2本塁打, 3打点
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}