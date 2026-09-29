import React, { useState, useMemo, useCallback, useDeferredValue } from 'react';
import { X, ArrowLeft, MessageSquare, RefreshCw, CheckCircle2, Thermometer } from 'lucide-react';

// Data statis ditaruh DI LUAR komponen agar tidak memakan alokasi RAM ulang saat re-render
const PRODUCT_CATALOG_DATA = [
  { id: 'f1', category: 'fasteners', name: 'High-Tensile Hex Bolts (Grade 8.8 / 10.9)', standard: 'DIN 931 / DIN 933 / ISO 4014', material: 'Alloy Steel, Hot-Dip Galvanized', maxTemp: 120 },
  { id: 'f2', category: 'fasteners', name: 'High-Tensile Hex Bolts (Grade 10.9 / 12.9)', standard: 'DIN 931 / DIN 933', material: 'Alloy Steel Black Oxide / Zinc Flake Coated', maxTemp: 180 },
  { id: 'f3', category: 'fasteners', name: 'ASTM A193 B7 Stud Bolts & A194 2H Nuts', standard: 'ASTM / ASME B18.2.1', material: 'Chromium-Molybdenum Steel', maxTemp: 450 },
  { id: 's1', category: 'seals', name: 'Standard Non-Asbestos Gasket Sheet', standard: 'Industrial Sealing Grade', material: 'Water, Oil & Mild Chemical Resistant Fiber', maxTemp: 120 },
  { id: 's2', category: 'seals', name: 'Spiral Wound Gasket (SWG) with Inner & Outer Ring', standard: 'ASME B16.20', material: 'SS316L + Flexible Graphite Filler', maxTemp: 250 },
  { id: 's3', category: 'seals', name: 'Expanded Pure Graphite Mechanical Packing', standard: 'High-Temp Gland Packing Spec', material: 'Inconel Wire Reinforced Pure Graphite', maxTemp: 650 },
  { id: 'd1', category: 'dust', name: 'Standard Polyester Felt Filter Bag', standard: 'ISO 16890 / EN 779 Standard', material: 'Needle Felt Polyester Bag (Singed Finish)', maxTemp: 130 },
  { id: 'd2', category: 'dust', name: 'Acrylic / P84 Blend Dust Collector Bag', standard: 'Medium Temp Industrial Spec', material: 'Acrylic / P84 Blended Fiber', maxTemp: 180 },
  { id: 'd3', category: 'dust', name: 'Nomex / Aramid High-Temp Filter Bag', standard: 'ISO 16890 / EN 779 Standard', material: 'Needle Felt Aramid (Nomex) Fiber', maxTemp: 220 },
  { id: 'l1', category: 'liquid', name: 'High-Flow Polypropylene Liquid Filter Bag', standard: 'FDA / EU Food Grade Compliant', material: 'PP Felt with Plastic Collar (1-200 µm)', maxTemp: 90 },
  { id: 'l2', category: 'liquid', name: 'High-Temperature Nylon Mesh Liquid Filter', standard: 'Micron Rating: 50 - 800 µm', material: 'Nylon Monofilament Mesh + Stainless Ring', maxTemp: 170 },
  { id: 'l3', category: 'liquid', name: 'PTFE Specialty Chemical Filter Vessel & Mesh', standard: 'High Chemical Resistance Spec', material: 'Pure PTFE Fiber & Stainless Frame', maxTemp: 260 },
];

const CATEGORIES = [
  { id: 'fasteners', label: 'Fasteners & Bolts', desc: 'Struktur berat, flange pipa, & bejana tekan', icon: '⚙️' },
  { id: 'seals', label: 'Seals & Gaskets', desc: 'Gasket flange, packing pompa, & uap panas', icon: '🛡️' },
  { id: 'dust', label: 'Dust & Air Filtration', desc: 'Baghouse, kiln, boiler, & pengumpul debu', icon: '💨' },
  { id: 'liquid', label: 'Liquid Filtration', desc: 'Filtrasi cairan kimia, water treatment, & produk cair', icon: '💧' },
];

export default function ProductSelectorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tempValue, setTempValue] = useState(100);

  // Mencegah lag UI saat menggeser slider suhu secara efisien
  const deferredTemp = useDeferredValue(tempValue);

  // Memoisasi handler fungsi agar instance fungsi tidak di-recreate berulang kali
  const handleClose = useCallback(() => {
    setStep(1);
    setSelectedCategory(null);
    setTempValue(100);
    onClose();
  }, [onClose]);

  const handleSelectCategory = useCallback((catId) => {
    setSelectedCategory(catId);
    setStep(2);
  }, []);

  const handleSendRFQ = useCallback((product) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = '6285880427199';
    const catLabel = CATEGORIES.find((c) => c.id === selectedCategory)?.label || '';
    
    const message = `Halo Tim Sales Industrial Supply, saya membutuhkan informasi stok & penawaran harga berdasarkan hasil Product Selector:

- *Kategori*: ${catLabel}
- *Kondisi Suhu Operasional*: ${tempValue}°C
- *Rekomendasi Produk*: *${product.name}*
- *Standar/Spesifikasi*: ${product.standard} (${product.material})
- *Batas Temp Maksimum*: s/d ${product.maxTemp}°C

Mohon dapat diinfokan ketersediaan unit dan estimasi harganya. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }, [selectedCategory, tempValue]);

  // Memoisasi hasil pencarian/filtering produk agar array tidak dikalkulasi ulang jika input tidak berubah
  const matchingProducts = useMemo(() => {
    if (!selectedCategory) return [];
    const tempLimit = Number(deferredTemp);
    return PRODUCT_CATALOG_DATA.filter(
      (item) => item.category === selectedCategory && item.maxTemp >= tempLimit
    );
  }, [selectedCategory, deferredTemp]);

  // 1. Unmount total jika modal tertutup -> RAM langsung bersih & 0% overhead
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-all text-slate-800 dark:text-slate-100">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
          <div>
            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase">
              Engineering Product Selector
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Langkah {step} dari 3</p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: Pilih Kategori Utama */}
        {step === 1 && (
          <div>
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Langkah 1: Pilih Kategori Kebutuhan
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Pilih sistem atau jenis produk yang ingin Anda cari kriteria spesifiknya.
            </p>
            
            <div className="space-y-3">
              {CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectCategory(item.id)}
                  className="w-full flex items-center p-3.5 border rounded-xl border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 bg-slate-50 dark:bg-slate-800/50 hover:bg-amber-500/5 transition text-left group cursor-pointer"
                >
                  <span className="text-2xl mr-3.5">{item.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-amber-500">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Input Suhu Fleksibel */}
        {step === 2 && (
          <div>
            <button
              onClick={() => setStep(1)}
              className="text-xs font-bold text-amber-500 hover:underline mb-3 inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Kembali
            </button>
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Langkah 2: Tentukan Suhu Kerja Operasional
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Geser slider atau masukkan angka suhu (°C) sistem Anda secara fleksibel.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-amber-500" /> Target Temperatur:
                </span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="0"
                    max="600"
                    value={tempValue}
                    onChange={(e) => setTempValue(Math.max(0, Number(e.target.value)))}
                    className="w-20 px-2 py-1 text-right text-sm font-black text-amber-600 dark:text-amber-400 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400">°C</span>
                </div>
              </div>

              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={tempValue}
                onChange={(e) => setTempValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-2">
                <span>20°C (Ambient)</span>
                <span>200°C (Medium)</span>
                <span>500°C+ (Extreme)</span>
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-md transition cursor-pointer"
            >
              Cari Rekomendasi Produk Sesuai Suhu Ini
            </button>
          </div>
        )}

        {/* STEP 3: Daftar Hasil Filter */}
        {step === 3 && (
          <div>
            <div className="mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                Hasil Filter Rekomendasi
              </span>
              <h4 className="text-sm font-black text-slate-900 dark:text-white mt-0.5">
                Produk yang mendukung suhu hingga ≥ {tempValue}°C ({matchingProducts.length}):
              </h4>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 mb-5">
              {matchingProducts.length > 0 ? (
                matchingProducts.map((prod) => (
                  <div key={prod.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                            {prod.name}
                          </h5>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md shrink-0">
                            Max {prod.maxTemp}°C
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          <strong>Std:</strong> {prod.standard}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          <strong>Mat:</strong> {prod.material}
                        </p>
                        <button
                          onClick={() => handleSendRFQ(prod)}
                          className="mt-2.5 w-full py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Minta Penawaran Produk Ini</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400">
                    Tidak ada produk standar yang mendukung suhu {tempValue}°C pada kategori ini.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Silakan konsultasikan spesifikasi khusus dengan tim engineering kami.
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-2 border-t border-slate-200 dark:border-slate-800 pt-3">
              <button
                onClick={() => setStep(2)}
                className="w-1/2 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Ubah Suhu
              </button>
              <button
                onClick={handleClose}
                className="w-1/2 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}