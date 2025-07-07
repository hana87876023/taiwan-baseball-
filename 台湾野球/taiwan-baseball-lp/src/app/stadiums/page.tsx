'use client';

import { useState } from 'react';
import TaiwanStadiumMap from '../components/TaiwanStadiumMap';
import { stadiumData, type StadiumData } from '../components/stadium-data';

// 球場詳細表示コンポーネント
function StadiumDetail({ stadium }: { stadium: StadiumData }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* メイン画像 */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={stadium.images.main}
          alt={stadium.name}
          className="w-full h-full object-cover"
        />
        {stadium.games && stadium.games > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            今週{stadium.games}試合
          </div>
        )}
      </div>

      {/* 詳細情報 */}
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{stadium.name}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{stadium.city}</span>
            <span>•</span>
            <span>{stadium.team}</span>
            <span>•</span>
            <span>収容{stadium.capacity}人</span>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{stadium.description}</p>

        {/* 基本情報 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">開場年</h4>
            <p className="text-gray-600">{stadium.opened}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">グラウンド</h4>
            <p className="text-gray-600">{stadium.surface}</p>
          </div>
        </div>

        {/* 特徴 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">球場の特徴</h4>
          <div className="flex flex-wrap gap-2">
            {stadium.features.map((feature, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* アクセス情報 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">アクセス</h4>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div>
              <span className="font-medium">最寄り駅:</span> {stadium.access.station}
            </div>
            <div>
              <span className="font-medium">駅からの時間:</span> {stadium.access.walkTime}
            </div>
            <div>
              <span className="font-medium">駐車場:</span> {stadium.access.parking}
            </div>
            <div>
              <span className="font-medium">住所:</span> {stadium.address}
            </div>
          </div>
        </div>

        {/* フィールド寸法 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">フィールド寸法</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center bg-green-50 p-3 rounded-lg">
              <div className="font-semibold text-green-800">左翼</div>
              <div className="text-green-600">{stadium.dimensions.leftField}</div>
            </div>
            <div className="text-center bg-green-50 p-3 rounded-lg">
              <div className="font-semibold text-green-800">中堅</div>
              <div className="text-green-600">{stadium.dimensions.centerField}</div>
            </div>
            <div className="text-center bg-green-50 p-3 rounded-lg">
              <div className="font-semibold text-green-800">右翼</div>
              <div className="text-green-600">{stadium.dimensions.rightField}</div>
            </div>
          </div>
        </div>

        {/* ギャラリー */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">フォトギャラリー</h4>
          <div className="grid grid-cols-3 gap-2">
            {stadium.images.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${stadium.name} ギャラリー ${index + 1}`}
                className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StadiumsPage() {
  const [selectedStadiumId, setSelectedStadiumId] = useState<string | null>(stadiumData[0].id);
  const selectedStadium = stadiumData.find(s => s.id === selectedStadiumId) || stadiumData[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">台湾野球場ガイド</h1>
          <p className="text-xl opacity-90">CPBL各球場の詳細情報と特徴をご紹介</p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* 左側: マップとリスト */}
          <div className="lg:col-span-2">
            <TaiwanStadiumMap
              selectedStadiumId={selectedStadiumId}
              onSelectStadium={setSelectedStadiumId}
              stadiums={stadiumData}
            />
          </div>

          {/* 右側: 詳細表示 */}
          <div className="lg:col-span-3">
            <StadiumDetail stadium={selectedStadium} />
          </div>
        </div>
      </div>
    </div>
  );
}