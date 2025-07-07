'use client';

import { useEffect, useState } from 'react';
import { useScores } from './useScores';

interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  inning: string;
  status: 'live' | 'final' | 'scheduled';
}

export default function ScoreTicker() {
  const { scores, isLoading } = useScores();
  const [currentIndex, setCurrentIndex] = useState(0);

  const mockGames: Game[] = [
    {
      id: '1',
      homeTeam: '統一7-ELEVEn獅',
      awayTeam: '楽天モンキーズ',
      homeScore: 4,
      awayScore: 2,
      inning: '9回表',
      status: 'live'
    },
    {
      id: '2',
      homeTeam: '中信兄弟',
      awayTeam: 'フォルモサ夢想家',
      homeScore: 7,
      awayScore: 5,
      inning: '最終',
      status: 'final'
    },
    {
      id: '3',
      homeTeam: '富邦ガーディアンズ',
      awayTeam: 'TSGホークス',
      homeScore: 0,
      awayScore: 0,
      inning: '19:00',
      status: 'scheduled'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockGames.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mockGames.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-red-500 animate-pulse';
      case 'final': return 'text-gray-500';
      case 'scheduled': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 text-white py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8">
          <div className="text-yellow-400 font-bold text-lg whitespace-nowrap">
            ライブスコア
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockGames.map((game, index) => (
                <div key={game.id} className="w-full flex-shrink-0 flex items-center justify-center">
                  <div className="flex items-center space-x-6 text-center">
                    <div>
                      <div className="text-sm opacity-75">{game.awayTeam}</div>
                      <div className="text-2xl font-bold">{game.awayScore}</div>
                    </div>
                    
                    <div className="text-xs">
                      <div>vs</div>
                    </div>
                    
                    <div>
                      <div className="text-sm opacity-75">{game.homeTeam}</div>
                      <div className="text-2xl font-bold">{game.homeScore}</div>
                    </div>
                    
                    <div className="ml-4">
                      <div className={`text-xs font-semibold ${getStatusColor(game.status)}`}>
                        {game.status === 'live' ? 'LIVE' : game.status === 'final' ? 'FINAL' : 'NEXT'}
                      </div>
                      <div className="text-xs opacity-75">{game.inning}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            {mockGames.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}