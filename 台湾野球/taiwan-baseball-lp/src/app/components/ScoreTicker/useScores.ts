'use client';

import { useState, useEffect } from 'react';

interface ScoreData {
  games: any[];
  lastUpdated: Date;
}

export function useScores() {
  const [scores, setScores] = useState<ScoreData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setIsLoading(true);
        
        // Mock API call - replace with actual CPBL API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockData: ScoreData = {
          games: [
            {
              id: '1',
              homeTeam: '統一7-ELEVEn獅',
              awayTeam: '楽天モンキーズ',
              homeScore: 4,
              awayScore: 2,
              inning: '9回表',
              status: 'live'
            }
          ],
          lastUpdated: new Date()
        };
        
        setScores(mockData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch scores');
        console.error('Error fetching scores:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
    
    // Refresh every 30 seconds for live updates
    const interval = setInterval(fetchScores, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { scores, isLoading, error };
}