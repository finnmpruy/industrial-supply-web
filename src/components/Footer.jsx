import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-[#060911] text-slate-800 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Kolom 1 & 2: Identitas Perusahaan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 flex items-center justify-center text-xl shadow-sm shrink-0">
                👑
              </div>
              <div>
                <span className="block font-black text-slate-950 dark:text-white tracking-wider text-base leading-none">
                  THE KING FILTER
                </span>
                <span className="block text-[10px] tracking-wider text-slate-500 dark:text-slate-400 font-semibold uppercase mt-1">
                  Industrial Supply & Engineering Tools
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Mitra fabrikasi media filtrasi industri, filter bag, cage, serta perlengkapan rekayasa mekanik berstandar mutu tinggi untuk efisiensi operasional pabrik.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Testing Certified</span>
            </div>
          </div>

          {/* Kolom 3: Katalog Produk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Katalog Produk
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#dust-collector" className="hover:text-amber-500 transition">Kategori 01</a></li>
              <li><a href="#filter-cage" className="hover:text-amber-500 transition">Kategori 02</a></li>
              <li><a href="#liquid-filter" className="hover:text-amber-500 transition">Kategori 03</a></li>
              <li><a href="#high-temp" className="hover:text-amber-500 transition">Kategori 04</a></li>
              <li><a href="#fasteners" className="hover:text-amber-500 transition">Kategori 05</a></li>
            </ul>
          </div>

          {/* Kolom 4: Navigasi Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#tentang" className="hover:text-amber-500 transition">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-amber-500 transition">Layanan Fabrikasi</a></li>
              <li><a href="#proyek" className="hover:text-amber-500 transition">Studi Kasus Proyek</a></li>
              <li><a href="#tools" className="hover:text-amber-500 transition">Engineering Selector</a></li>
              <li><a href="#kontak" className="hover:text-amber-500 transition">Hubungi Sales</a></li>
            </ul>
          </div>

          {/* Kolom 5: Kontak Kantor (Sudah dirapikan dari testing) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Kontak Kantor
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Testing Alamat</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+62 (021) 5000-xxxx (Hunting)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>sales@thekingfilter.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Baris Legalitas / Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Industry Supply & Engineer tools, All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:underline">Kebijakan Privasi</a>
            <a href="#terms" className="hover:underline">Syarat & Ketentuan</a>
            <a href="#sitemap" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}