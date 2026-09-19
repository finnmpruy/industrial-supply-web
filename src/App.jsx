import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import IndustrySolutions from './components/IndustrySolutions';
import ProductSelectorSection from './components/ProductSelectorSection';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function HomePage() {
  return (
    <main>
      <Hero />
      <QuickSearch />
      <IndustrySolutions />
      <ProductSelectorSection />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}