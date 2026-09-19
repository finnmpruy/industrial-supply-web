import React, { useState } from 'react';
import { Search, Globe, X, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Jenama Syarikat */}
        <a href="#beranda" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-lg sm:text-xl shadow-sm shrink-0">
            ⚙️
          </div>
          <div className="shrink-0">
            <span className="block font-black text-slate-950 dark:text-white tracking-wider text-xs sm:text-base leading-none uppercase">
              INDUSTRIAL SUPPLY
            </span>
            <span className="block text-[8px] sm:text-[10px] tracking-wider text-amber-600 dark:text-amber-400 font-bold uppercase mt-0.5 sm:mt-1">
              & Engineering Tools
            </span>
          </div>
        </a>

        {/* Navigasi Mengikut Industri & Produk */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs 2xl:text-sm font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
          <a href="#beranda" className="text-amber-600 dark:text-amber-400 font-bold">Beranda</a>
          <a href="#industri" className="hover:text-amber-600 dark:hover:text-amber-400 transition">Industri</a>
          <a href="#equipment" className="hover:text-amber-600 dark:hover:text-amber-400 transition">Produk</a>
          <a href="#produk" className="hover:text-amber-600 dark:hover:text-amber-400 transition">Tentang Kami</a>
          <a href="#layanan" className="hover:text-amber-600 dark:hover:text-amber-400 transition">Layanan</a>
          <a href="#kontak" className="hover:text-amber-600 dark:hover:text-amber-400 transition">Hubungi Kami</a>
        </nav>

        {/* Carian, Tema & Minta Sebut Harga */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button 
            type="button"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsMobileMenuOpen(false);
            }}
            aria-label="Carian"
            className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>

          <button 
            type="button"
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>ID</span>
          </button>

          <ThemeToggle />

          <a
            href="#quote"
            className="hidden sm:inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg transition shadow-sm whitespace-nowrap"
          >
            Minta Penawaran
          </a>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsSearchOpen(false);
            }}
            aria-label="Buka Menu"
            className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 xl:hidden"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Bar Carian */}
      {isSearchOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari baut, gasket spiral, workshop tools, atau spesifikasi bahan..."
                className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-10 pr-20 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded-md text-xs"
              >
                Cari
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Menu Mudah Alih */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] px-4 py-5 space-y-3">
          <a href="#beranda" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-amber-600 dark:text-amber-400">Beranda</a>
          <a href="#industri" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Industri</a>
          <a href="#equipment" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Equipment</a>
          <a href="#produk" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Katalog Produk</a>
          <a href="#layanan" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Layanan</a>
          <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Hubungi Kami</a>
        </div>
      )}
    </header>
  );
}