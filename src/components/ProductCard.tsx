
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/use-cart';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group rounded-lg border overflow-hidden bg-white transition-all duration-300 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 product-image"
          />
        </div>
        {product.stock <= 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
        {product.stock > 0 && product.stock <= 5 && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded">
            Low Stock
          </div>
        )}
      </Link>
      <div className="p-4">
        <div className="min-h-[4rem]">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-medium text-gray-900 hover:text-medical-600 transition-colors mb-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-gray-900">PKR {product.price.toLocaleString()}</span>
           
          </div>
          <Button 
            onClick={handleAddToCart} 
            disabled={product.stock <= 0}
            variant="outline" 
            className="text-sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
