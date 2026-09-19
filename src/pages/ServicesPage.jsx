import React from 'react';
import { Wrench, ShieldCheck, Truck, Cog, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: 'Custom Fabrication & Machining',
    desc: 'Pembuatan gasket custom (non-standard dimensions), stud bolt spesifikasi khusus (ASTM/DIN), dan modifikasi flange sesuai gambar teknik pabrik.',
    points: ['Material tracing & certificate', 'Toleransi presisi tinggi', 'Dukungan gambar CAD/DWG']
  },
  {
    icon: ShieldCheck,
    title: 'Material Testing & Quality Assurance',
    desc: 'Pengujian kekuatan tarik baut (tensile test), pengujian kebocoran valve (hydrotest), dan sertifikasi material (Mill Test Certificate 3.1).',
    points: ['Standar API, ASME, DIN', 'Inspeksi pihak ketiga (Third-party)', 'Laporan uji komprehensif']
  },
  {
    icon: Wrench,
    title: 'On-Site Technical & Bolting Support',
    desc: 'Bantuan teknis di lapangan untuk perhitungan torsi flange, instalasi torque wrench hidrolik, dan asistensi penanganan kebocoran seal/piping.',
    points: ['Tim teknis tersertifikasi', 'Peralatan kalibrasi ISO', 'Layanan emergency shut-down']
  },
  {
    icon: Truck,
    title: 'Scheduled Supply & Vendor Management',
    desc: 'Kontrak suplai berkala untuk kebutuhan maintenance rutin pabrik, manajemen stok konsinyasi, dan pengiriman darurat 24/7 ke lokasi site.',
    points: ['Jaminan ketersediaan stok', 'Harga kontrak tetap', 'Pengiriman ekspres ke area industri']
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#070B14] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-amber-500 font-extrabold text-xs tracking-widest uppercase block mb-2">
            Technical & Supply Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Layanan Rekayasa & Suplai Industri
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Lebih dari sekadar distributor komponen, kami mendampingi operasional pabrik Anda dengan dukungan teknis, kustomisasi material, dan kepatuhan standar mutu internasional.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/60 transition shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {svc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href="https://wa.me/6285880427199?text=Halo%20Tim%20Teknis%2C%20saya%20ingin%20konsultasi%20layanan%20industri"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition"
                  >
                    <span>Konsultasikan Kebutuhan Teknis</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}