import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  SlidersHorizontal, 
  MessageSquare, 
  Image as ImageIcon,
  X
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'fasteners', name: 'Fasteners & Bolts' },
  { id: 'seals', name: 'Seals & Gaskets' },
  { id: 'tools', name: 'Workshop & Maintenance Tools' },
  { id: 'valves', name: 'Valves & Piping' },
];

const products = [
  {
    id: 1,
    category: 'fasteners',
    name: 'High-Tensile Hex Bolts (Grade 8.8 / 10.9)',
    standard: 'DIN 931 / DIN 933 / ISO 4014',
    material: 'Alloy Steel, Hot-Dip Galvanized / Black Oxide',
    application: 'Struktur berat, pondasi mesin, flange pipa tekanan tinggi',
    badge: 'Heavy Duty',
  },
  {
    id: 2,
    category: 'fasteners',
    name: 'ASTM A193 B7 Stud Bolts & A194 2H Nuts',
    standard: 'ASTM / ASME B18.2.1',
    material: 'Chromium-Molybdenum Steel',
    application: 'Sambungan flange bejana tekan, rotary kiln, & boiler',
    badge: 'High Temp',
  },
  {
    id: 3,
    category: 'seals',
    name: 'Spiral Wound Gasket (SWG) with Inner & Outer Ring',
    standard: 'ASME B16.20 / DIN EN 1514-2',
    material: 'SS316L + Flexible Graphite Filler + Carbon Steel Outer Ring',
    application: 'Saluran uap panas, fluida korosif, dan heat exchanger',
    badge: 'Critical Sealing',
  },
  {
    id: 4,
    category: 'seals',
    name: 'Expanded Pure Graphite Mechanical Packing',
    standard: 'Industrial Standard Non-Asbestos',
    material: 'Inconel Wire Reinforced Pure Graphite',
    application: 'Gland seal pompa sentrifugal tekanan tinggi & valve stem',
    badge: 'Max 650°C',
  },
  {
    id: 5,
    category: 'tools',
    name: 'Hydraulic Torque Wrench (Square Drive & Low Profile)',
    standard: 'ISO 6789 Certified Calibration',
    material: 'Aircraft Grade Titanium-Aluminum Alloy',
    application: 'Pengencangan baut flange kritis dengan nilai torsi presisi tinggi',
    badge: 'Precision Torque',
  },
  {
    id: 6,
    category: 'tools',
    name: 'Heavy Duty Industrial Impact Socket Set',
    standard: 'DIN 3129 / ISO 2725-2',
    material: 'Forged Chrome Molybdenum Steel (Cr-Mo)',
    application: 'Perawatan berkala mesin grinding, crusher, dan ball mill',
    badge: 'Impact Proof',
  },
  {
    id: 7,
    category: 'valves',
    name: 'High-Performance Lug/Wafer Butterfly Valve',
    standard: 'API 609 / ASME B16.34',
    material: 'Ductile Iron / CF8M Stainless Steel Body',
    application: 'Pengendalian aliran debu semen, udara bertekanan, & sirkulasi air',
    badge: 'Class 150/300',
  },
  {
    id: 8,
    category: 'valves',
    name: 'Cast Steel Flanged Ball Valve (Class 150 – 600)',
    standard: 'API 6D / Fire-Safe API 607',
    material: 'WCB Carbon Steel / CF8M',
    application: 'Isolasi pipa gas, minyak pelumas mesin, dan jalur fluida utama',
    badge: 'Zero Leakage',
  },
];

export default function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);

  useEffect(() => {
    if (searchParam) setSearchTerm(searchParam);
    if (categoryParam) setActiveCategory(categoryParam);
  }, [searchParam, categoryParam]);

  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchSearch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.standard.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.application.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleResetSearch = () => {
    setSearchTerm('');
    setSearchParams({});
  };

  return (
    <section id="produk" className="py-10 sm:py-16 bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Katalog */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-amber-500 font-extrabold text-xs tracking-widest uppercase block mb-1">
              Industrial Supply Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white uppercase tracking-tight">
              Katalog Produk Teknik
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Distribusi perlengkapan mekanikal, material pengikat tegangan tinggi, seal tahan panas, dan peralatan perkakas untuk operasional pabrik.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-lg shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-amber-500" />
            <span>Standar Internasional (DIN / ASTM / ASME)</span>
          </div>
        </div>

        {/* Notifikasi Hasil Pencarian */}
        {searchTerm && (
          <div className="mb-6 flex items-center justify-between p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs">
            <span>
              Menampilkan hasil untuk: <strong className="text-amber-700 dark:text-amber-400">"{searchTerm}"</strong>
            </span>
            <button
              onClick={handleResetSearch}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white font-semibold"
            >
              <X className="w-3.5 h-3.5" />
              <span>Hapus Pencarian</span>
            </button>
          </div>
        )}

        {/* Filter Kategori */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                if (cat.id === 'all') {
                  searchParams.delete('category');
                } else {
                  searchParams.set('category', cat.id);
                }
                setSearchParams(searchParams);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Produk */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#0C1222] rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-8">
            <p className="text-sm font-semibold text-slate-500">Tidak ada produk yang cocok dengan kriteria pencarian.</p>
            <button
              onClick={handleResetSearch}
              className="mt-3 text-xs font-bold text-amber-500 hover:underline"
            >
              Tampilkan Semua Produk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const waText = encodeURIComponent(
                `Halo Tim Sales Industrial Supply, saya ingin meminta penawaran harga dan ketersediaan stok untuk:\n\nProduk: *${product.name}*\nStandar: ${product.standard}\nMaterial: ${product.material}`
              );

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-amber-500/60 dark:hover:border-amber-500/60 transition shadow-sm group"
                >
                  <div>
                    <div className="w-full h-40 rounded-xl border border-blue-100/70 dark:border-slate-800 bg-[#F4F7FB] dark:bg-slate-900/60 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 mb-4 select-none group-hover:border-amber-400/40 transition">
                      <ImageIcon className="w-8 h-8 stroke-[1.5] mb-2 opacity-60 group-hover:text-amber-500 transition" />
                      <span className="text-[9px] font-bold tracking-wider uppercase opacity-75">
                        Asset Placeholder
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        {product.badge}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-amber-500 transition leading-snug">
                      {product.name}
                    </h3>

                    <div className="space-y-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 font-semibold block">Standar Mutu:</span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{product.standard}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 font-semibold block">Spesifikasi Material:</span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{product.material}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 font-semibold block">Rekomendasi Aplikasi:</span>
                        <span className="text-slate-600 dark:text-slate-400">{product.application}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                   <button
                        type="button"
                        onClick={() => {
                            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                            const text = encodeURIComponent(waText);
                            const url = isMobile 
                            ? `https://wa.me/6285880427199?text=${text}` 
                            : `https://web.whatsapp.com/send?phone=6285880427199&text=${text}`;
                            window.open(url, "_blank", "noopener,noreferrer");
                        }}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 bg-slate-100 hover:bg-amber-500 text-slate-800 hover:text-slate-950 dark:bg-slate-800/80 dark:hover:bg-amber-500 dark:text-slate-200 dark:hover:text-slate-950 font-bold rounded-xl text-xs transition duration-150 cursor-pointer"
                        >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>Minta Penawaran</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}