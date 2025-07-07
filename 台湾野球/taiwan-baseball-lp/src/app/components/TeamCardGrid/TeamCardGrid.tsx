'use client';

import { teamData } from './team-data';
import TeamCard from './TeamCard';

export default function TeamCardGrid() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          CPBLチーム
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          台湾プロ野球リーグの6チームをご紹介。各チームの特徴と最新情報をチェック
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          全チーム詳細を見る
        </button>
      </div>
    </section>
  );
}