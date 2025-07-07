'use client';

import { useState } from 'react';

export default function LightboxGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      title: '台南球場での熱戦',
      description: '統一7-ELEVEn獅のホームゲーム',
      category: '球場',
      thumbnail: '🏟️'
    },
    {
      id: 2,
      title: '高國麟のホームランシーン',
      description: '決勝打を放つ瞬間',
      category: '選手',
      thumbnail: '⚾'
    },
    {
      id: 3,
      title: 'ファンの熱狂的な応援',
      description: '台中洲際球場での応援風景',
      category: 'ファン',
      thumbnail: '🎉'
    },
    {
      id: 4,
      title: '王維中の投球フォーム',
      description: 'エース投手の美しい投球',
      category: '選手',
      thumbnail: '🥎'
    },
    {
      id: 5,
      title: '桃園球場の夜景',
      description: 'ライトアップされた美しい球場',
      category: '球場',
      thumbnail: '🌃'
    },
    {
      id: 6,
      title: 'チームの勝利セレモニー',
      description: '優勝を喜ぶ選手たち',
      category: 'チーム',
      thumbnail: '🏆'
    }
  ];

  const categories = ['すべて', '球場', '選手', 'ファン', 'チーム'];
  const [activeCategory, setActiveCategory] = useState('すべて');

  const filteredImages = activeCategory === 'すべて' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          フォトギャラリー
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          CPBLの熱戦と感動の瞬間を写真でお楽しみください
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg aspect-square flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300 shadow-md group-hover:shadow-lg">
              {image.thumbnail}
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                {image.title}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-1">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                {filteredImages[selectedImage].title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg aspect-video flex items-center justify-center text-8xl mb-4">
                {filteredImages[selectedImage].thumbnail}
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-600">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📁 {filteredImages[selectedImage].category}</span>
                  <span>📷 CPBL公式</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 border-t">
              <button
                onClick={() => setSelectedImage(
                  selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1
                )}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← 前の画像
              </button>
              <span className="text-sm text-gray-500">
                {selectedImage + 1} / {filteredImages.length}
              </span>
              <button
                onClick={() => setSelectedImage(
                  selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0
                )}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                次の画像 →
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
          もっと見る
        </button>
      </div>
    </section>
  );
}