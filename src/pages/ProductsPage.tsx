
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const categoryTitles: Record<string, string> = {
  'scrubs': 'Medical Scrubs',
  'aprons': 'Medical Aprons',
  'ot-dresses': 'OT Dresses',
  'stethoscopes': 'Stethoscopes',
};

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];
  const title = category ? categoryTitles[category] || 'Products' : 'All Products';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-2 text-gray-600">
              {category === 'scrubs' && 'Comfortable and durable medical scrubs for healthcare professionals.'}
              {category === 'aprons' && 'Protective aprons for medical environments.'}
              {category === 'ot-dresses' && 'Specialized attire for operating theaters.'}
              {category === 'stethoscopes' && 'Professional stethoscopes for accurate auscultation.'}
            </p>
          </header>
          
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
