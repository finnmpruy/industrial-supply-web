import React, { useState } from 'react';
import { Search, FileText, UserCheck, Download } from 'lucide-react';

export default function QuickSearch() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', query);
  };

  return (
    <section className="bg-slate-50 dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 py-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Pencarian */}
          <div className="lg:col-span-7">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              What are you looking for?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 mb-3">
              Search product, SKU, equipment or application...
            </p>

            <form onSubmit={handleSearch} className="relative flex items-center">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder='Try "Nomex filter bag", "M22 stud bolt", or "cement kiln"'
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg pl-11 pr-28 py-3 text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2 rounded-md text-xs sm:text-sm transition shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Kolom 3 Tombol Cepat */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-4 lg:pt-0 lg:pl-6">
            
            <a 
              href="#quote" 
              className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-105 transition">
                <FileText className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                Get a Quote
              </span>
              <span className="text-[11px] text-slate-400">Fast response</span>
            </a>

            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-105 transition">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                Talk to an Engineer
              </span>
              <span className="text-[11px] text-slate-400">Technical support</span>
            </a>

            <a 
              href="#catalog" 
              className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-105 transition">
                <Download className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                Download Catalog
              </span>
              <span className="text-[11px] text-slate-400">Product resources</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}