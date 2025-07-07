'use client';

import { useState } from 'react';
import GameTable from './GameTable';
import InningChart from './InningChart';
import { useLiveGame } from './useLiveGame';

export default function GameCenter() {
  const [activeTab, setActiveTab] = useState<'live' | 'schedule' | 'results'>('live');
  const { gameData, isLoading } = useLiveGame();

  const tabs = [
    { id: 'live', label: 'ライブ', count: 2 },
    { id: 'schedule', label: '今後の試合', count: 5 },
    { id: 'results', label: '結果', count: 8 }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ゲームセンター
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            リアルタイムで試合状況を追跡し、詳細な統計とライブアップデートを確認できます
          </p>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-gray-100 text-gray-600 py-1 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'live' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  ライブゲーム詳細
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">アウェイ</div>
                      <div className="font-bold text-lg">楽天モンキーズ</div>
                      <div className="text-2xl font-bold text-blue-600">2</div>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-xs text-gray-500">9回表</div>
                      <div className="text-xs text-red-500 font-semibold">LIVE</div>
                      <div className="text-xs text-gray-500">2アウト</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">ホーム</div>
                      <div className="font-bold text-lg">統一7-ELEVEn獅</div>
                      <div className="text-2xl font-bold text-blue-600">4</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">現在の状況</div>
                    <div className="text-sm">
                      <span className="font-semibold">投手:</span> 王維中 (7回投球, 4奪三振)<br/>
                      <span className="font-semibold">打者:</span> 林安可 (.285打率)<br/>
                      <span className="font-semibold">走者:</span> 1塁, 3塁
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">イニングチャート</h3>
                <InningChart />
              </div>
            </div>

            <GameTable type="live" />
          </div>
        )}

        {activeTab === 'schedule' && (
          <GameTable type="schedule" />
        )}

        {activeTab === 'results' && (
          <GameTable type="results" />
        )}
      </div>
    </section>
  );
}