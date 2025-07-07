'use client';

import { useState } from 'react';

interface Team {
  id: string;
  name: string;
  englishName: string;
  city: string;
  founded: number;
  colors: {
    primary: string;
    secondary: string;
  };
  record: {
    wins: number;
    losses: number;
    winRate: number;
  };
  keyPlayers: string[];
  stadium: string;
  description: string;
}

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="h-32 relative"
        style={{ backgroundColor: team.colors.primary }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
        <div className="absolute top-4 left-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-lg">
              {team.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 px-2 py-1 rounded text-xs font-semibold">
            #{team.record.wins + team.record.losses > 50 ? '1位' : Math.floor(Math.random() * 6) + 1 + '位'}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {team.name}
          </h3>
          <p className="text-sm text-gray-600">
            {team.englishName} | {team.city}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-600">{team.record.wins}</div>
            <div className="text-xs text-gray-500">勝</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-600">{team.record.losses}</div>
            <div className="text-xs text-gray-500">敗</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">
              {(team.record.winRate * 100).toFixed(1)}%
            </div>
            <div className="text-xs text-gray-500">勝率</div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">ホーム球場:</span> {team.stadium}
          </div>
          
          {isHovered && (
            <div className="animate-fade-in">
              <div className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">主力選手:</span>
                <div className="mt-1">
                  {team.keyPlayers.slice(0, 3).map((player, index) => (
                    <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded text-xs mr-1 mb-1">
                      {player}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 line-clamp-2">
                {team.description}
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t">
          <button 
            className="w-full py-2 rounded-lg font-semibold text-sm transition-colors"
            style={{ 
              backgroundColor: team.colors.primary,
              color: 'white'
            }}
          >
            チーム詳細
          </button>
        </div>
      </div>
    </div>
  );
}