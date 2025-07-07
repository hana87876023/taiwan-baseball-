'use client';

import { useState, useEffect } from 'react';

interface LiveGameData {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  inning: string;
  outs: number;
  baseRunners: {
    first: boolean;
    second: boolean;
    third: boolean;
  };
  currentPitcher: string;
  currentBatter: string;
  lastUpdated: Date;
}

export function useLiveGame(gameId?: string) {
  const [gameData, setGameData] = useState<LiveGameData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLiveGameData = async () => {
      try {
        setIsLoading(true);
        
        // Mock WebSocket connection - replace with actual CPBL live data API
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockData: LiveGameData = {
          gameId: gameId || '1',
          homeTeam: '統一7-ELEVEn獅',
          awayTeam: '楽天モンキーズ',
          homeScore: 4,
          awayScore: 2,
          inning: '9回表',
          outs: 2,
          baseRunners: {
            first: true,
            second: false,
            third: true
          },
          currentPitcher: '王維中',
          currentBatter: '林安可',
          lastUpdated: new Date()
        };
        
        setGameData(mockData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch live game data');
        console.error('Error fetching live game data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveGameData();
    
    // Simulate WebSocket updates every 15 seconds
    const interval = setInterval(() => {
      if (gameData) {
        setGameData(prev => prev ? {
          ...prev,
          lastUpdated: new Date(),
          // Randomly update some values to simulate live updates
          outs: Math.floor(Math.random() * 3),
          baseRunners: {
            first: Math.random() > 0.7,
            second: Math.random() > 0.8,
            third: Math.random() > 0.9
          }
        } : null);
      }
    }, 15000);
    
    return () => clearInterval(interval);
  }, [gameId]);

  return { gameData, isLoading, error };
}