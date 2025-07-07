'use client';

import { useState, useEffect } from 'react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/slide-1.jpg',
      title: '迫力のスライディング',
      description: '熱戦が繰り広げられる台湾プロ野球の瞬間'
    },
    {
      image: '/images/slide-2.jpg',
      title: '伝統と情熱',
      description: '台湾野球の歴史を感じる一球一球'
    },
    {
      image: '/images/slide-3.jpg',
      title: '満員のスタジアム',
      description: '熱狂的なファンと共に観戦する興奮'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
      {/* スライダー背景 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
      ))}
      
      {/* スライドインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          {/* スライドごとのタイトル */}
          <div className="mb-4">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide ? 'block' : 'hidden'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  {slide.title}
                </h3>
                <p className="text-lg opacity-90">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            台湾プロ野球
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            CPBL - Chinese Professional Baseball League
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            台湾最高峰のプロ野球リーグをリアルタイムで体感しよう
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">今日の注目試合</h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-lg font-bold">統一7-ELEVEn獅</div>
                <div className="text-3xl font-bold text-yellow-400">4</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-75">9回表</div>
                <div className="text-xs opacity-60">LIVE</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">楽天モンキーズ</div>
                <div className="text-3xl font-bold text-yellow-400">2</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              ライブ観戦
            </button>
            <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              スケジュール
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}