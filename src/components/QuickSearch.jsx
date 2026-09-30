import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  UserCheck, 
  Download, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Image as ImageIcon,
  X,
  ChevronRight,
  ShieldAlert,
  AlertTriangle,
  Wrench,
  Thermometer
} from 'lucide-react';

export default function QuickSearch() {
  const [query, setQuery] = useState('');
  const [activeModalData, setActiveModalData] = useState(null);
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

  // Navigasi ke Halaman Produk Berdasarkan Masalah Spesifik
  const handleSelectProblem = (categoryQuery, problemQuery) => {
    setActiveModalData(null);
    navigate(`/products?category=${categoryQuery}&problem=${problemQuery}`);
  };

  // Data Solutions (Tetap menjaga struktur tampilan luar + ditambahkan data opsi problem/aplikasi)
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
      problems: [
        {
          id: 'p-dust-leak',
          title: 'Kebocoran Debu & Emisi Melebihi Threshold',
          desc: 'Filter bag sering robek/tersumbat cepat akibat debu abrasif & tekanan tinggi.',
          icon: ShieldAlert,
          recommendedProducts: ['Woven Fiberglass Filter Bag', 'PTFE Membrane Coated Bag', 'Galvanized Star Cages'],
          targetQuery: 'dust-collector-bags',
        },
        {
          id: 'p-acid-gas',
          title: 'Paparan Gas Asam Korosif (SOx / NOx)',
          desc: 'Gas hasil pembakaran merusak kantong filter standar di area Baghouse / Preheater.',
          icon: AlertTriangle,
          recommendedProducts: ['P84 / PPS Acid Proof Felt Bags', 'SS316 Anti-Corrosion Filter Cages'],
          targetQuery: 'acid-proof-filtration',
        },
        {
          id: 'p-pulse-valve',
          title: 'Pembersihan Filter Tidak Optimal (Pulse Jet Weak)',
          desc: 'Tekanan hembusan angin pulse valve berkurang memicu penumpukan caking debu.',
          icon: Wrench,
          recommendedProducts: ['Diaphragm Pulse Valves 1.5"', 'Pneumatic Solenoid Controls'],
          targetQuery: 'pulse-valves',
        },
      ],
    },
    {
      id: 'fasteners',
      title: 'FASTENERS',
      status: 'ongoing', // On Going
      badgeText: 'On Going',
      desc: 'Industrial bolts, nuts and fastening solutions for critical applications.',
      linkText: 'Explore Fasteners',
      categoryQuery: 'fasteners',
      image: null, // Asset Placeholder
      problems: [
        {
          id: 'p-high-temp-leak',
          title: 'Kebocoran Flange & Baut Patah Suhu Tinggi',
          desc: 'Suhu ekstrim (300°C–600°C) di Boiler/Kiln menyebabkan baut cepat aus & flange bocor.',
          icon: Thermometer,
          recommendedProducts: ['ASTM A193 B7 / B16 Stud Bolts', 'Spiral Wound Gaskets SS316L'],
          targetQuery: 'high-temp-bolting',
        },
        {
          id: 'p-vibration-loose',
          title: 'Baut Sering Kendor Akibat Getaran Ekstrem',
          desc: 'Vibrasi terus menerus pada Crusher & Vibrating Screen membuat sambungan kendor.',
          icon: Wrench,
          recommendedProducts: ['HuckBolts Structural Fasteners', 'Structural Hex Bolts Grade 10.9'],
          targetQuery: 'anti-vibration-fasteners',
        },
      ],
    },
    {
      id: 'consumables',
      title: 'INDUSTRIAL CONSUMABLES',
      status: 'ongoing', // On Going
      badgeText: 'On Going',
      desc: 'Essential MRO and plant maintenance products for reliable operation.',
      linkText: 'Explore Consumables',
      categoryQuery: 'tools',
      image: null, // Asset Placeholder
      problems: [
        {
          id: 'p-heavy-wear',
          title: 'Keausan Dini Komponen Akibat Abrasi Parah',
          desc: 'Gesekan batuan & besi pada Chute/Conveyor menyebabkan downtime penggantian tinggi.',
          icon: ShieldAlert,
          recommendedProducts: ['Polyurethane Belt Scraper', 'Impact Rubber Skirting', 'Hardox Wear Plates'],
          targetQuery: 'wear-resistant-mro',
        },
        {
          id: 'p-conveyor-spill',
          title: 'Tumpahan Material & Debu Liar di Conveyor',
          desc: 'Material tercecer di transfer point merusak bearing roller conveyor.',
          icon: Wrench,
          recommendedProducts: ['Dust Containment Rubber Curtains', 'Conveyor Belt Cleaners'],
          targetQuery: 'conveyor-maintenance',
        },
      ],
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

                  {/* Tombol Aksi Bawah */}
                  <div className="px-5 pb-5 pt-1">
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <button 
                        type="button"
                        onClick={() => setActiveModalData(sol)}
                        className="inline-flex items-center justify-between w-full py-2 px-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
                      >
                        <span>{sol.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Tanya Sales */}
                      <div className="flex items-center justify-between pt-0.5">
                        <span className="font-semibold text-slate-400 dark:text-slate-500 text-[11px]">
                          {isActive ? '' : 'Katalog Disiapkan'}
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
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* MODAL PILIH KELUHAN / PROBLEM CUSTOMER */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-5">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 tracking-wider">
                  Solusi Aplikasi & Problem
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-1.5">
                  Apa Keluhan Spesifik di Area {activeModalData.title}?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Pilih masalah yang sedang dihadapi di pabrik Anda untuk menemukan produk rekomendasi yang presisi.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalData(null)}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List Keluhan / Problem Cards */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {activeModalData.problems.map((prob) => {
                const IconComp = prob.icon;
                return (
                  <div
                    key={prob.id}
                    className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-amber-500 dark:hover:border-amber-500 transition group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-amber-500 transition">
                          {prob.title}
                        </h4>
                      </div>
                      
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                        {prob.desc}
                      </p>

                      {/* Tag Produk Rekomendasi */}
                      <div className="pl-7 flex flex-wrap gap-1.5 pt-1">
                        {prob.recommendedProducts.map((prod) => (
                          <span
                            key={prod}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            ✓ {prod}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tombol Pilih Masalah Ini */}
                    <div className="flex sm:flex-col gap-2 w-full sm:w-auto shrink-0 pl-7 sm:pl-0 border-t sm:border-t-0 border-slate-200/60 dark:border-slate-700/60 pt-3 sm:pt-0">
                      <button
                        type="button"
                        onClick={() => handleSelectProblem(activeModalData.categoryQuery, prob.targetQuery)}
                        className="flex-1 sm:flex-initial py-2 px-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap shadow-xs"
                      >
                        <span>Lihat Produk</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openWhatsApp(`Halo Sales, pabrik kami mengalami keluhan: "${prob.title}" di area ${activeModalData.title}. Mohon saran produk & penawarannya.`)}
                        className="py-2 px-3.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-500 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                        <span>Konsultasi</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <span>Punya kendala lain yang tidak tercantum?</span>
              <button
                type="button"
                onClick={() => openWhatsApp(`Halo Sales, saya ada kendala kustom operasional pabrik untuk area ${activeModalData.title}.`)}
                className="font-bold text-amber-500 hover:underline cursor-pointer bg-transparent border-none p-0"
              >
                Hubungi Sales Engineer →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}