import React from 'react';
import Hero from '../components/Hero';
import QuickSearch from '../components/QuickSearch';
import IndustrySolutions from '../components/IndustrySolutions';
import ProductSelectorSection from '../components/ProductSelectorSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickSearch />
      <IndustrySolutions showViewAll={true} />
      <ProductSelectorSection />
    </main>
  );
}