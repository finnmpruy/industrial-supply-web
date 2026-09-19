import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustrySolutions from './components/IndustrySolutions';
import ProductSelectorSection from './components/ProductSelectorSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      <Navbar />
      
      <main>
        <Hero />
        <IndustrySolutions />
        <ProductSelectorSection />
      </main>

      <Footer />
    </div>
  );
}