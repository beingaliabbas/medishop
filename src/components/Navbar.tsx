
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/hooks/use-cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useCart();
  const itemCount = cart.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-medical-700">MediShop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative w-64">
              <form onSubmit={handleSearch}>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </form>
            </div>
            
            <div className="flex space-x-4">
              <Link to="/products/scrubs" className="text-gray-700 hover:text-medical-600">
                Scrubs
              </Link>
              <Link to="/products/aprons" className="text-gray-700 hover:text-medical-600">
                Aprons
              </Link>
              <Link to="/products/ot-dresses" className="text-gray-700 hover:text-medical-600">
                OT Dresses
              </Link>
              <Link to="/products/stethoscopes" className="text-gray-700 hover:text-medical-600">
                Stethoscopes
              </Link>
            </div>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-medical-600">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative mr-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-medical-600">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <div className="py-2">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </form>
            </div>

            <Link 
              to="/products/scrubs" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-medical-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Scrubs
            </Link>
            <Link 
              to="/products/aprons" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-medical-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Aprons
            </Link>
            <Link 
              to="/products/ot-dresses" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-medical-600"
              onClick={() => setIsMenuOpen(false)}
            >
              OT Dresses
            </Link>
            <Link 
              to="/products/stethoscopes" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-medical-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Stethoscopes
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
