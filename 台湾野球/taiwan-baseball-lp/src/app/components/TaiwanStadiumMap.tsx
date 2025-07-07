'use client';

import React from 'react';

import { type StadiumData } from './stadium-data';

type TaiwanStadiumMapProps = {
  selectedStadiumId: string | null;
  onSelectStadium: (id: string) => void;
  stadiums: StadiumData[];
};

export default function TaiwanStadiumMap({ selectedStadiumId, onSelectStadium, stadiums }: TaiwanStadiumMapProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* マップ部分 */}
      <div className="bg-gradient-to-b from-blue-100 to-green-100 p-6 relative h-80">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">台湾球場マップ</h3>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
        >
          {/* 台湾の簡略地図 */}
          <path
            d="M20 20 L80 20 L80 85 L20 85 Z"
            fill="#34D399"
            opacity="0.3"
          />
          {stadiums.map((stadium) => (
            <g key={stadium.id}>
              <circle
                cx={stadium.coordinates.x}
                cy={stadium.coordinates.y}
                r={selectedStadiumId === stadium.id ? "5" : stadium.games && stadium.games > 0 ? "4" : "3"}
                fill={selectedStadiumId === stadium.id ? "#3B82F6" : stadium.games && stadium.games > 0 ? "#EF4444" : "#6B7280"}
                className="cursor-pointer hover:opacity-80 transition-all"
                onClick={() => onSelectStadium(stadium.id)}
              />
              {stadium.games && stadium.games > 0 && selectedStadiumId !== stadium.id && (
                <circle
                  cx={stadium.coordinates.x}
                  cy={stadium.coordinates.y}
                  r="6"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="0.5"
                  className="animate-ping"
                />
              )}
              {selectedStadiumId === stadium.id && (
                <circle
                  cx={stadium.coordinates.x}
                  cy={stadium.coordinates.y}
                  r="8"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              )}
              <text
                x={stadium.coordinates.x}
                y={stadium.coordinates.y - 8}
                textAnchor="middle"
                className="text-xs font-semibold fill-gray-700 cursor-pointer"
                onClick={() => onSelectStadium(stadium.id)}
              >
                {stadium.city}
              </text>
            </g>
          ))}
        </svg>
        
        {/* 凡例 */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>選択中</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>今週試合あり</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span>試合なし</span>
            </div>
          </div>
        </div>
      </div>

      {/* 球場リスト */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">球場一覧</h3>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {stadiums.map((stadium) => (
            <div
              key={stadium.id}
              className={`rounded-lg p-4 border-2 transition-all cursor-pointer ${
                selectedStadiumId === stadium.id
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
              }`}
              onClick={() => onSelectStadium(stadium.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className={`font-semibold ${selectedStadiumId === stadium.id ? 'text-blue-900' : 'text-gray-900'}`}>
                    {stadium.name}
                  </h4>
                  <p className="text-sm text-gray-600">{stadium.team}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {stadium.city} • 収容{stadium.capacity}人
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  {stadium.games && stadium.games > 0 && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                      今週{stadium.games}試合
                    </span>
                  )}
                  {selectedStadiumId === stadium.id && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      選択中
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}