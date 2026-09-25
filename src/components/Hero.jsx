import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
// Import gambar latar dari folder assets
import heroBg from '../assets/hero-bg.jpg';

// Komponen Pembantu untuk Efek Putaran/Counter Angka
function CounterNumber({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      // Easing function (outQuad) agar melambat mulus di akhir
      const progress = currentFrame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(end * easeProgress);

      setCount(currentVal);

      if (currentFrame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Hero() {
  const stats = [
    { value: 1000, suffix: '+', label: 'Industrial Products' },
    { value: 25, suffix: '+', label: 'Industries Served' },
    { value: 500, suffix: '+', label: 'Happy Customers' },
    { value: 10, suffix: '+', label: 'Years of Experience' },
  ];

  return (
    <section className="relative bg-[#0B1120] text-white pt-16 pb-20 overflow-hidden border-b border-slate-800">
      {/* 1. Background Image Pabrik */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-75 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 2. Layer Overlay Gelap & Gradasi (Menjaga kontras teks) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B1120]/90 via-[#0B1120]/60 to-transparent" />

      {/* 3. Background Grid Pattern Halus */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      
      {/* Konten Hero (z-10 agar selalu di atas background) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Headline & CTA */}
        <div className="lg:col-span-8">
          <div className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-4">
            Filtration • Fasteners • Industrial Consumables
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-2xl">
            INDUSTRIAL PRODUCTS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              ENGINEERED AROUND
            </span> YOUR OPERATION.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Solusi teknis media filtrasi dan perlengkapan pabrik berstandar tinggi untuk lingkungan operasional ekstrem dan efisiensi jangka panjang.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('product-selector');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition shadow-sm cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Products</span>
                  <span>→</span>
            </button>

            <button 
              type="button"
              onClick={() => {
                const el = document.getElementById('equipment');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-white font-semibold px-6 py-3 rounded-md text-sm transition cursor-pointer"
            >
              Find by Application
            </button>

            <button className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition ml-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-500">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              Watch Video
            </button>
          </div>

          {/* 4 Kotak Metrik Statistik dengan Animasi Counter */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-baseline">
                  <CounterNumber target={item.value} duration={2000} />
                  <span className="text-amber-500 font-bold">{item.suffix}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Slogan */}
        <div className="hidden lg:flex lg:col-span-4 justify-end">
          <div className="border-l border-slate-800 pl-8 space-y-2">
            <p className="text-3xl font-black text-slate-700 tracking-wider leading-none">KEEP</p>
            <p className="text-3xl font-black text-slate-500 tracking-wider leading-none">INDUSTRY</p>
            <p className="text-3xl font-black text-amber-500 tracking-wider leading-none">CLEANER</p>
            <p className="text-3xl font-black text-slate-400 tracking-wider leading-none">SAFER</p>
            <p className="text-3xl font-black text-white tracking-wider leading-none">STRONGER</p>
          </div>
        </div>

      </div>
    </section>
  );
}