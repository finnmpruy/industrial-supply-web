import React, { useEffect } from 'react';
import IndustrySolutions from '../components/IndustrySolutions';


export default function IndustryPage() {
  // Scroll ke paling atas saat halaman diakses
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 transition-colors duration-200 pt-20">
      
      {/* Hero Header Singkat Halaman Industri */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase block mb-1">
            Industry & Equipment Hub
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            Sektor Industri & Pemetaan Mesin
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl">
            Pilih sektor industri Anda, eksplorasi titik-titik mesin interaktif, dan temukan rekomendasi sparepart serta consumable yang presisi sesuai standar operasional pabrik.
          </p>
        </div>
      </section>

      {/* Memanggil Komponen Utama IndustrySolutions & Start From Equipment */}
      <main>
        <IndustrySolutions />
      </main>

    </div>
  );
}