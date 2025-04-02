
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import ProductGrid from '@/components/ProductGrid';
import TestimonialSection from '@/components/TestimonialSection';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FeaturedCategories />
          
          <div className="mt-16">
            <ProductGrid 
              products={featuredProducts} 
              title="Featured Products" 
            />
          </div>
        </div>
        
        <TestimonialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
