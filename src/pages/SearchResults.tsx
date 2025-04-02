
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { searchProducts } from '@/data/products';
import { Product } from '@/types';

const SearchResults = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      const results = searchProducts(query);
      setProducts(results);
    } else {
      setProducts([]);
    }
  }, [location.search]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Search Results for "{searchQuery}"
            </h1>
            <p className="mt-2 text-gray-600">
              {products.length} {products.length === 1 ? 'result' : 'results'} found
            </p>
          </header>
          
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No products found matching your search.</p>
              <p className="text-gray-500">Try using different keywords or browsing our product categories.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
