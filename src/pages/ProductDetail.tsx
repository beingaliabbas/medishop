
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';
import { getProductById } from '@/data/products';
import { useCart } from '@/hooks/use-cart';
import { MinusIcon, PlusIcon, PackageIcon, ShoppingCart } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = productId ? getProductById(productId) : undefined;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : undefined
  );
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/')}>
              Return to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product.stock > quantity) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Maximum quantity reached",
        description: `Only ${product.stock} units available in stock.`,
        variant: "destructive",
      });
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={product.images ? product.images[selectedImage] : product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded overflow-hidden border ${selectedImage === index ? 'border-medical-600' : 'border-gray-200'}`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`} 
                        className="w-full h-auto object-cover aspect-square"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                <p className="text-2xl font-semibold text-medical-700">PKR {product.price.toLocaleString()}</p>
                
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{product.shortDescription}</p>
              </div>
              
              <div className="mb-6">
                {product.stock > 0 ? (
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full ${product.stock > 5 ? 'bg-green-500' : 'bg-amber-500'} mr-2`}></div>
                    <span className="text-sm font-medium">
                      {product.stock > 5 ? 'In Stock' : `Low Stock - Only ${product.stock} left`}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm font-medium">Out of Stock</span>
                  </div>
                )}
              </div>
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <Select 
                    value={selectedSize} 
                    onValueChange={setSelectedSize}
                  >
                    <SelectTrigger id="size-select" className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label htmlFor="color-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <Select 
                    value={selectedColor} 
                    onValueChange={setSelectedColor}
                  >
                    <SelectTrigger id="color-select" className="w-full">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increaseQuantity}
                    disabled={product.stock <= quantity}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart / Buy Now */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className="flex-1"
                  variant="outline"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  disabled={product.stock <= 0}
                  className="flex-1 bg-medical-600 hover:bg-medical-700"
                >
                  Buy Now
                </Button>
              </div>
              
              {/* Delivery Information */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <PackageIcon className="h-5 w-5 text-medical-600 mr-2" />
                  <span className="font-medium">Delivery Information</span>
                </div>
                <p className="text-sm text-gray-600">
                  Free shipping on all orders over PKR 2000. Standard delivery in 3-5 business days within Pakistan.
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Description Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
