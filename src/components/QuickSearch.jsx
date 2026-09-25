import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, FileText, UserCheck, Download, ArrowRight, Clock, CheckCircle2, MessageSquare, Image as ImageIcon } from 'lucide-react';

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

  // Helper fungsi untuk membuka WhatsApp (Support Mobile & Desktop Web)
  const openWhatsApp = (messageText) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const text = encodeURIComponent(messageText);
    const url = isMobile 
      ? `https://wa.me/6285880427199?text=${text}` 
      : `https://web.whatsapp.com/send?phone=6285880427199&text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Data Solutions
  const solutions = [
    {
      id: 'filtration',
      title: 'FILTRATION',
      status: 'active', // Katalog Siap
      badgeText: 'Katalog Siap',
      desc: 'Industrial filtration solutions engineered for demanding operating conditions.',
      linkText: 'Explore Filtration',
      categoryQuery: 'filtration',
      image: null, // Asset Placeholder
    },
    {
      id: 'fasteners',
      title: 'FASTENERS',
      status: 'ongoing', // On Going
      badgeText: 'On Going',
      desc: 'Industrial bolts, nuts and fastening solutions for critical applications.',
      linkText: 'Katalog Disiapkan',
      categoryQuery: 'fasteners',
      image: null, // Asset Placeholder
    },
    {
      id: 'consumables',
      title: 'INDUSTRIAL CONSUMABLES',
      status: 'ongoing', // On Going
      badgeText: 'On Going',
      desc: 'Essential MRO and plant maintenance products for reliable operation.',
      linkText: 'Katalog Disiapkan',
      categoryQuery: 'tools',
      image: null, // Asset Placeholder
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
            
            <button 
              type="button"
              onClick={() => openWhatsApp("Halo Tim Sales, saya ingin meminta penawaran harga (RFQ).")}
              className="group flex flex-col items-center text-center px-4 py-3 rounded-lg hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition cursor-pointer appearance-none border-none bg-transparent"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-105 transition">
                <FileText className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 whitespace-nowrap">
                Get a Quote
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Fast response</span>
            </button>

            <button 
              type="button"
              onClick={() => openWhatsApp("Halo, saya ingin konsultasi teknis dengan Engineer.")}
              className="group flex flex-col items-center text-center px-4 py-3 rounded-lg hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition cursor-pointer appearance-none border-none bg-transparent"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-105 transition">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 whitespace-nowrap">
                Talk to an Engineer
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Technical support</span>
            </button>

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
            <div>
              <span className="text-amber-500 font-extrabold text-[10px] tracking-widest uppercase block mb-0.5">
                Fokus Utama Suplai
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                Explore Our Solutions
              </h3>
            </div>
            
            <Link 
              to="/products" 
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const isActive = sol.status === 'active';

              return (
                <div 
                  key={sol.id}
                  className={`group rounded-2xl border bg-white dark:bg-[#0C1222] overflow-hidden transition flex flex-col justify-between ${
                    isActive
                      ? 'border-amber-500/70 dark:border-amber-500/50 shadow-md hover:shadow-amber-500/10'
                      : 'border-slate-200 dark:border-slate-800 opacity-85'
                  }`}
                >
                  <div>
                    {/* Container Gambar / UI Placeholder */}
                    <div className="relative w-full h-44 overflow-hidden bg-slate-100 dark:bg-slate-900/60 flex flex-col items-center justify-center border-b border-slate-200/60 dark:border-slate-800">
                      {sol.image ? (
                        <img 
                          src={sol.image} 
                          alt={sol.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        /* Asset Placeholder */
                        <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-2 select-none">
                          <div className="p-3 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50 shadow-inner">
                            <ImageIcon className="w-8 h-8 text-slate-400 dark:text-slate-500 stroke-[1.5]" />
                          </div>
                          <span className="text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                            Asset Placeholder
                          </span>
                        </div>
                      )}
                      
                      {/* Badge Status Top-Right */}
                      <div className="absolute top-3 right-3 z-10">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                            <CheckCircle2 className="w-3 h-3" />
                            {sol.badgeText}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow animate-pulse">
                            <Clock className="w-3 h-3" />
                            {sol.badgeText}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Deskripsi */}
                    <div className="p-4 sm:p-5">
                      <h4 className="text-sm sm:text-base font-black tracking-wider text-slate-950 dark:text-white uppercase group-hover:text-amber-500 transition-colors">
                        {sol.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tombol Aksi Bawah - Opsi 1 */}
                  <div className="px-5 pb-5 pt-1">
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      {isActive ? (
                        <>
                          <Link 
                            to={`/products?category=${sol.categoryQuery}`}
                            className="inline-flex items-center justify-between w-full py-2 px-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition shadow-sm"
                          >
                            <span>{sol.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          {/* Opsi Tanya Sales untuk Katalog Siap */}
                          <div className="flex items-center justify-end pt-0.5">
                            <button
                              type="button"
                              onClick={() => openWhatsApp(`Halo Sales, saya ingin bertanya tentang produk kategori ${sol.title}`)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 hover:underline cursor-pointer bg-transparent border-none p-0"
                            >
                              <MessageSquare className="w-3 h-3" />
                              Tanya Sales
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-between text-xs py-1">
                          <span className="font-semibold text-slate-400 dark:text-slate-500 text-[11px]">
                            {sol.linkText}
                          </span>
                          
                          <button
                            type="button"
                            onClick={() => openWhatsApp(`Halo Sales, saya ingin bertanya tentang produk kategori ${sol.title}`)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer bg-transparent border-none p-0"
                          >
                            <MessageSquare className="w-3 h-3" />
                            Tanya Sales
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}