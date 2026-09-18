import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const solutions = [
  {
    id: 'filtration',
    title: 'FILTRATION',
    description: 'Industrial filtration solutions engineered for demanding operating conditions.',
    linkText: 'Explore Filtration',
    linkUrl: '#filtration',
  },
  {
    id: 'fasteners',
    title: 'FASTENERS',
    description: 'Industrial bolts, nuts, and fastening solutions for critical mechanical applications.',
    linkText: 'Explore Fasteners',
    linkUrl: '#fasteners',
  },
  {
    id: 'consumables',
    title: 'INDUSTRIAL CONSUMABLES',
    description: 'Essential MRO and plant maintenance products for reliable day-to-day operation.',
    linkText: 'Explore Consumables',
    linkUrl: '#consumables',
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white dark:bg-[#080d1a] py-14 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore Our Solutions
          </h2>
          <a
            href="#all-products"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 flex flex-col"
            >
              {/* Asset Placeholder Box */}
              <div className="relative h-52 sm:h-56 w-full bg-gradient-to-b from-slate-100 to-slate-200/60 dark:from-slate-800 dark:to-slate-850 flex flex-col items-center justify-center text-slate-400">
                <ImageIcon className="w-10 h-10 stroke-[1.5] text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-2">
                  Asset Placeholder
                </span>
                
                {/* Efek Gradasi Fade ke Bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-90" />
              </div>

              {/* Teks Deskripsi */}
              <div className="p-6 pt-2 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-lg font-black tracking-wide text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={item.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 tracking-wide transition"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}