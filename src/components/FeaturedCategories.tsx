
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'scrubs',
    name: 'Scrubs',
    description: 'Comfortable and durable medical uniforms',
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'aprons',
    name: 'Aprons',
    description: 'Protection with professional style',
    image: 'https://images.unsplash.com/photo-1590337318156-2ed149175a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
  },

  {
    id: 'stethoscopes',
    name: 'Stethoscopes',
    description: 'Essential diagnostic equipment',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop By Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
