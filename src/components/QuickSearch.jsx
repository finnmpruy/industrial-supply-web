import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, FileText, UserCheck, Download, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function QuickSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      navigate('/products');
      return;
    }
    navigate(`/products?search=${encodeURIComponent(query.trim())}`);
  };

  const solutions = [
    {
      id: 'filtration',
      title: 'FILTRATION',
      desc: 'Industrial filtration solutions engineered for operating conditions.',
      linkText: 'Explore Filtration →',
      categoryQuery: 'seals',
    },
    {
      id: 'fasteners',
      title: 'FASTENERS',
      desc: 'Industrial bolts, nuts and fastening solutions for critical applications.',
      linkText: 'Explore Fasteners →',
      categoryQuery: 'fasteners',
    },
    {
      id: 'consumables',
      title: 'INDUSTRIAL CONSUMABLES',
      desc: 'Essential MRO and plant maintenance products for reliable operation.',
      linkText: 'Explore Consumables →',
      categoryQuery: 'tools',
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Kolom Pencarian & 3 Tombol Quick Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Form Pencarian */}
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
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2 rounded-md text-xs sm:text-sm transition shadow-sm cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* 3 Tombol Kontak Cepat */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-4 lg:pt-0 lg:pl-6">
            
            <a 
              href="https://wa.me/6285880427199?text=Halo%20Tim%20Sales,%20saya%20ingin%20meminta%20penawaran%20harga%20(RFQ)."
              target="_blank" 
              rel="noreferrer"
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
              href="https://wa.me/6285880427199?text=Halo,%20saya%20ingin%20konsultasi%20teknis%20dengan%20Engineer." 
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

            <Link 
              to="/products"
              className="group flex flex-col items-center text-center p-2 rounded-lg hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-105 transition">
                <Download className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                Download Catalog
              </span>
              <span className="text-[11px] text-slate-400">Product resources</span>
            </Link>

          </div>

        </div>

        {/* Explore Our Solutions */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 dark:text-white">
              Explore Our Solutions
            </h3>
            {/* Navigasi ke Katalog Produk */}
            <Link 
              to="/products" 
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div 
                key={sol.id}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1222] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="p-4 sm:p-5">
                  <div className="w-full h-44 rounded-xl border border-blue-100/70 dark:border-slate-800 bg-[#F4F7FB] dark:bg-slate-900/60 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 mb-4 select-none group-hover:border-amber-400/40 transition">
                    <ImageIcon className="w-8 h-8 stroke-[1.5] mb-2 opacity-60 group-hover:text-amber-500 transition" />
                    <span className="text-[9px] font-bold tracking-wider uppercase opacity-75">
                      Asset Placeholder
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black tracking-wider text-slate-950 dark:text-white uppercase">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <Link 
                    to={`/products?category=${sol.categoryQuery}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300"
                  >
                    <span>{sol.linkText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}