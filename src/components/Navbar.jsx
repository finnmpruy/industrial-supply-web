import React, { useState } from 'react';
import { Search, Globe, X, Menu, ArrowRight, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenAi }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Kiri: Logo & Brand Sementara */}
        <a href="#beranda" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-lg sm:text-xl shadow-sm shrink-0 text-amber-500">
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

        {/* 2. Tengah: Menu Navigasi Desktop (Flat Links) */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs 2xl:text-sm font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
          <a href="#beranda" className="text-amber-600 dark:text-amber-400 font-bold">
            Beranda
          </a>
          <a href="#industri" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
            Industri
          </a>
          <a href="#equipment" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
            Equipment
          </a>
          <a href="#produk" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
            Produk & Tools
          </a>
          <a href="#layanan" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
            Layanan
          </a>
          <a href="#tentang" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
            Tentang Kami
          </a>
          <a href="#kontak" className="hover:text-amber-600 dark:hover:text-amber-400 transition">
            Kontak
          </a>
        </nav>

        {/* 3. Kanan: AI Trigger, Search, Theme, CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Tombol AI Advisor di Navbar */}
          <button
            type="button"
            onClick={onOpenAi}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold transition shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden md:inline">AI Advisor</span>
          </button>

          {/* Tombol Search */}
          <button 
            type="button"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsMobileMenuOpen(false);
            }}
            aria-label="Toggle Pencarian" 
            className={`p-1.5 sm:p-2 rounded-lg transition cursor-pointer ${
              isSearchOpen 
                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400' 
                : 'text-slate-600 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>

          {/* Tombol Bahasa */}
          <button 
            type="button"
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>ID</span>
          </button>

          {/* Tombol Dark Mode */}
          <ThemeToggle />

          {/* Tombol CTA */}
          <a
            href="#quote"
            className="hidden sm:inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg transition shadow-sm whitespace-nowrap"
          >
            Minta Penawaran
          </a>

          {/* Tombol Hamburger Menu Mobile */}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsSearchOpen(false);
            }}
            aria-label="Toggle Menu"
            className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 xl:hidden cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* 4. Dropdown Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3 shadow-inner transition-all">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari perlengkapan industri, gasket spiral, baut ASTM A193 B7, tools..."
                className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-10 pr-24 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded-md text-xs transition cursor-pointer"
              >
                Cari
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 5. Mobile Nav Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] px-4 py-5 shadow-lg space-y-3">
          <a href="#beranda" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-amber-600 dark:text-amber-400">Beranda</a>
          <a href="#industri" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Industri</a>
          <a href="#equipment" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Equipment</a>
          <a href="#produk" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Produk & Tools</a>
          <a href="#layanan" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Layanan</a>
          <a href="#tentang" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Tentang Kami</a>
          <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Kontak</a>
          
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAi();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold text-sm py-2.5 rounded-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Buka AI Technical Advisor</span>
            </button>

            <a
              href="#quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold text-sm py-2.5 rounded-lg shadow-sm"
            >
              <span>Minta Penawaran</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}