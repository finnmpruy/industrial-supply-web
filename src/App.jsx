import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// 1. Layout Global
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import IndustryPage from './pages/IndustryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Helper Reset Scroll saat berpindah halaman
function RouteScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] transition-colors duration-200">
      <RouteScrollReset />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/industries" element={<IndustryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}