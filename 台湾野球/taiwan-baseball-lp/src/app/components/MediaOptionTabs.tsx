'use client';

import { useState } from 'react';

export default function MediaOptionTabs() {
  const [activeTab, setActiveTab] = useState<'live' | 'highlights' | 'stats'>('live');

  const liveStreams = [
    {
      id: '1',
      title: '統一7-ELEVEn獅 vs 楽天モンキーズ',
      status: 'ライブ中',
      viewers: '12,480',
      platform: 'CPBL TV'
    },
    {
      id: '2',
      title: '中信兄弟 vs フォルモサ夢想家',
      status: '19:00開始予定',
      viewers: '8,250',
      platform: 'ELEVEN SPORTS'
    }
  ];

  const highlights = [
    {
      id: '1',
      title: '高國麟の逆転満塁ホームラン！',
      duration: '2:15',
      views: '45,623',
      thumbnail: '🏟️'
    },
    {
      id: '2',
      title: '王維中の完封勝利ハイライト',
      duration: '3:42',
      views: '32,891',
      thumbnail: '⚾'
    },
    {
      id: '3',
      title: '林安可の華麗なダイビングキャッチ',
      duration: '1:28',
      views: '28,754',
      thumbnail: '🤾'
    }
  ];

  const playerStats = [
    { name: '高國麟', stat: '本塁打', value: '28', team: '統一7-ELEVEn獅' },
    { name: '林安可', stat: '打率', value: '.342', team: '統一7-ELEVEn獅' },
    { name: '王維中', stat: '防御率', value: '2.15', team: '楽天モンキーズ' },
    { name: '林智勝', stat: '打点', value: '89', team: '中信兄弟' }
  ];

  const tabs = [
    { id: 'live', label: 'ライブ配信', icon: '📺' },
    { id: 'highlights', label: 'ハイライト', icon: '🎬' },
    { id: 'stats', label: '選手成績', icon: '📊' }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          メディア & 統計
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ライブ配信、ハイライト動画、選手成績をまとめてチェック
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'live' && (
            <div className="space-y-4">
              {liveStreams.map((stream) => (
                <div key={stream.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{stream.title}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span className={`${stream.status === 'ライブ中' ? 'text-red-600' : 'text-blue-600'}`}>
                        {stream.status}
                      </span>
                      <span>👥 {stream.viewers}人視聴中</span>
                      <span>📺 {stream.platform}</span>
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    {stream.status === 'ライブ中' ? '視聴する' : '予約'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-4xl mb-3 group-hover:bg-gray-300 transition-colors">
                    {video.thumbnail}
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center space-x-3 mt-1 text-sm text-gray-600">
                    <span>⏱️ {video.duration}</span>
                    <span>👁️ {video.views}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-4">
              {playerStats.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600">
                        {player.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{player.name}</h4>
                      <p className="text-sm text-gray-600">{player.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{player.value}</div>
                    <div className="text-sm text-gray-600">{player.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}