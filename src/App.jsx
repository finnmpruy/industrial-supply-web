import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustrySolutions from './components/IndustrySolutions';
import ProductSelectorSection from './components/ProductSelectorSection';
import Footer from './components/Footer';
import AiSelectorModal from './components/AiSelectorModal';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      
      {/* Navbar dengan akses buka AI */}
      <Navbar onOpenAi={() => setIsAiModalOpen(true)} />
      
      <main>
        <Hero onOpenAi={() => setIsAiModalOpen(true)} />
        <IndustrySolutions />
        <ProductSelectorSection onOpenAi={() => setIsAiModalOpen(true)} />
      </main>

      <Footer />

      {/* Komponen Modal AI Pop-up */}
      <AiSelectorModal 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
      />

    </div>
  );
}