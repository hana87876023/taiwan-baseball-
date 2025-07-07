import HeroBanner from './components/HeroBanner';
import ScoreTicker from './components/ScoreTicker/ScoreTicker';
import GameCenter from './components/GameCenter/GameCenter';
import TeamCardGrid from './components/TeamCardGrid/TeamCardGrid';
import MetricCardList from './components/MetricCardList';
import TaiwanStadiumMap from './components/TaiwanStadiumMap';
import { stadiumData } from './components/stadium-data';
import Link from 'next/link';
import { useState } from 'react';
import MediaOptionTabs from './components/MediaOptionTabs';
import LightboxGallery from './components/LightboxGallery';
import PrimaryCTA from './components/PrimaryCTA';
import FooterNav from './components/FooterNav';

'use client';

export default function Home() {
  const [selectedStadiumId, setSelectedStadiumId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <HeroBanner />
      <ScoreTicker />
      <GameCenter />
      <div className="container mx-auto px-4 py-8 space-y-12">
        <TeamCardGrid />
        <MetricCardList />
        <div className="relative">
          <section className="py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                台湾球場マップ
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                CPBLの各球場の場所と今週の試合予定をチェック
              </p>
            </div>
            <TaiwanStadiumMap
              selectedStadiumId={selectedStadiumId}
              onSelectStadium={setSelectedStadiumId}
              stadiums={stadiumData}
            />
          </section>
          <div className="absolute top-4 right-4">
            <Link 
              href="/stadiums" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-lg"
            >
              詳細ページへ →
            </Link>
          </div>
        </div>
        <MediaOptionTabs />
        <LightboxGallery />
        <PrimaryCTA />
      </div>
      <FooterNav />
    </main>
  );
}
