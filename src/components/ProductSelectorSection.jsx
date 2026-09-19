import React from 'react';
import { 
  ArrowRight, 
  Headphones, 
  Cpu, 
  BookOpen, 
  Layers, 
  Compass,
  Image as ImageIcon 
} from 'lucide-react';
import industryBg from '../assets/industry-bg.jpg';

export default function ProductSelectorSection() {
  // 10 placeholder item untuk digandakan agar loop berjalan mulus tanpa jeda
  const placeholders = Array.from({ length: 10 });

  return (
    <section className="w-full bg-white dark:bg-[#070B14] text-slate-800 dark:text-slate-200 transition-colors duration-200">
      
      {/* 1. ENGINEERING PRODUCT SELECTOR BANNER */}
      <div className="relative overflow-hidden bg-slate-950 text-white py-14 sm:py-16">
        <img
          src={industryBg}
          alt="Engineering Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sisi Kiri Banner */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
                Not Sure What You Need?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                ENGINEERING PRODUCT SELECTOR
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                Answer a few operating-condition questions and identify suitable products for your application.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm transition shadow-lg shadow-amber-500/20"
                >
                  <span>Start Product Selection</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Sisi Kanan: 4 Kotak Fitur */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5">
                <Cpu className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">AI Advisor</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Get recommendations</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5">
                <BookOpen className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Technical Library</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Standards & documentation</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5">
                <Layers className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Material Selector</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Compare materials</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5">
                <Compass className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Application Guide</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">By industry & equipment</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. TRUSTED BY INDUSTRY LEADERS (AUTO SLIDE INFINITE LOOP DARI KANAN KE KIRI) */}
      <div className="py-12 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0A0F1D] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-500 uppercase">
              Trusted by Industry Leaders
            </h4>
            <a href="#customers" className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1">
              <span>View All Customers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Jalur Marquee dengan Efek Fade di Ujung Kiri & Kanan */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50/90 dark:from-[#0A0F1D] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50/90 dark:from-[#0A0F1D] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max gap-4 animate-loop-scroll">
            {[...placeholders, ...placeholders].map((_, idx) => (
              <div 
                key={idx}
                className="w-36 sm:w-44 h-16 shrink-0 rounded-xl border border-blue-100/80 dark:border-slate-800 bg-[#F4F7FB] dark:bg-slate-900/60 flex flex-col items-center justify-center p-2 text-center shadow-sm select-none"
              >
                <ImageIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 mb-1 opacity-70" />
                <span className="text-[8px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase leading-none">
                  Asset Placeholder
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CALL TO ACTION BAWAH */}
      <div className="py-12 bg-white dark:bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
              Let's Build a Cleaner, Safer and More Productive Industry Together.
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Talk to our team for the right solution for your operation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/6285880427199?text=Halo,%20saya%20ingin%20Request%20a%20Quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition"
            >
              Request a Quote →
            </a>
            <a
              href="https://wa.me/6285880427199?text=Halo,%20saya%20ingin%20Talk%20to%20an%20Engineer."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition"
            >
              <Headphones className="w-4 h-4 text-amber-500" />
              <span>Talk to an Engineer</span>
            </a>
          </div>
        </div>
      </div>

      {/* Animasi CSS Loop Scroll */}
      <style>{`
        @keyframes loopScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-loop-scroll {
          animation: loopScroll 35s linear infinite;
        }
      `}</style>

    </section>
  );
}