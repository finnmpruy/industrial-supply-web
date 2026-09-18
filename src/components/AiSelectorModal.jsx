import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  MessageSquare
} from 'lucide-react';

export default function AiSelectorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('fasteners');
  const [environment, setEnvironment] = useState('heavy');

  if (!isOpen) return null;

  // Label kondisi lingkungan untuk teks pesan WA
  const environmentLabel = environment === 'heavy' 
    ? 'Beban Berat / Getaran Tinggi' 
    : 'Suhu Tinggi & Zat Korosif';

  // Logika rekomendasi berbasis input user
  const getRecommendation = () => {
    if (category === 'fasteners') {
      return {
        categoryName: 'Baut & Fasteners Baja',
        title: 'High-Tensile Alloy Fasteners (Grade 8.8 / 10.9 & ASTM A193 B7)',
        desc: 'Baut dan mur berkekuatan tarik tinggi dengan toleransi beban geser maksimal, direkomendasikan untuk flange pipa bertekanan dan struktur rangka alat berat.',
        specs: [
          'Standar Mutu: DIN / ANSI / ASME / ASTM',
          'Finishing: Black Oxide & Hot-Dip Galvanized',
          'Aplikasi Mesin: Rotary Kiln, Ball Mill & Chute Concreting',
        ],
      };
    } else if (category === 'seals') {
      return {
        categoryName: 'Gasket, Seal & Packing',
        title: 'Spiral Wound Gaskets & High-Temp Mechanical Seals',
        desc: 'Gasket logam kombinasi grafit/PTFE berdaya tahan suhu hingga 450°C guna mencegah kebocoran gas panas atau cairan kimia abrasif.',
        specs: [
          'Material Inti: SS304 / SS316 + Flexible Graphite Filler',
          'Pressure Rating: ANSI Class 150 – 900',
          'Sertifikasi Anti-Leakage & Tahan Bahan Kimia Keras',
        ],
      };
    } else if (category === 'tools') {
      return {
        categoryName: 'Engineering & Workshop Tools',
        title: 'Heavy-Duty Maintenance & Precision Workshop Tools',
        desc: 'Paket perlengkapan bengkel industri meliputi hydraulic torque wrench, heavy impact socket set, dan alat kalibrasi toleransi presisi.',
        specs: [
          'Insulasi Keselamatan: 1000V Certified (VDE)',
          'Bahan Tempa: Chrome-Vanadium / Hardened Alloy Steel',
          'Garansi Resmi Pabrikan Perkakas Industri',
        ],
      };
    } else {
      return {
        categoryName: 'Valves & Piping Supplies',
        title: 'Industrial High-Pressure Valves & Piping Supplies',
        desc: 'Ball valve, butterfly valve, dan flange baja karbon standar industri untuk aliran fluida bertekanan dan temperatur tinggi.',
        specs: [
          'Bodi: WCB / CF8M Stainless Steel',
          'End Connection: Flanged RF ANSI 150/300',
          'Hydrostatic Pressure Tested 100%',
        ],
      };
    }
  };

  const rec = getRecommendation();

  // Template Pesan WhatsApp Terstruktur & Rapi Sesuai Hasil Pilihan
  const generatedWhatsAppMessage = `Halo Tim Sales Industrial Supply & Engineering Tools,

Saya ingin meminta penawaran harga (RFQ) berdasarkan rekomendasi AI Advisor website:

📋 *Kategori:* ${rec.categoryName}
⚙️ *Kondisi Operasional:* ${environmentLabel}
⭐ *Rekomendasi Spesifikasi:* ${rec.title}

*Spesifikasi & Standar Teknis:*
${rec.specs.map((item) => `• ${item}`).join('\n')}

Mohon informasi ketersediaan stok, waktu pengiriman, dan penawaran harga resminya. Terima kasih.`;

  const handleReset = () => {
    setStep(1);
    setCategory('fasteners');
    setEnvironment('heavy');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0C1222] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-all">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                AI Engineering Supply Advisor
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Pencari spesifikasi perlengkapan & suku cadang industri
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Form Pertanyaan */}
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                1. Kategori Perlengkapan yang Anda Butuhkan:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'fasteners', label: 'Baut & Fasteners Baja' },
                  { id: 'seals', label: 'Gasket, Seal & Packing' },
                  { id: 'tools', label: 'Engineering & Workshop Tools' },
                  { id: 'valves', label: 'Valves & Piping Supplies' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                      category === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                2. Kondisi Lingkungan Operasional Mesin:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setEnvironment('heavy')}
                  className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                    environment === 'heavy'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Beban Berat / Getaran Tinggi
                </button>
                <button
                  type="button"
                  onClick={() => setEnvironment('temp')}
                  className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                    environment === 'temp'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Suhu Tinggi & Zat Korosif
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-xs sm:text-sm transition shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>Temukan Rekomendasi Suku Cadang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Step 2: Rekomendasi Hasil */
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-900 dark:text-slate-100">
              <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-1">
                Rekomendasi Spesifikasi Teknis ({rec.categoryName})
              </span>
              <h4 className="text-sm sm:text-base font-black leading-snug">
                {rec.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {rec.desc}
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Parameter Kualitas & Standar:
              </span>
              {rec.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Aksi / Follow up WhatsApp Dinamis */}
            <div className="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleReset}
                className="w-1/3 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi</span>
              </button>

              <a
                href={`https://wa.me/6285880427199?text=${encodeURIComponent(generatedWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-2/3 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-xs transition shadow-lg shadow-amber-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Minta Penawaran (RFQ)</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}