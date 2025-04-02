
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-medical-700 mb-4">MediShop</h3>
            <p className="text-gray-600 mb-4">
              Your trusted source for high-quality medical wear and equipment.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+92 348 3469617</span>
              </div>
            </div>
            <div className="flex space-x-4 text-gray-600 mt-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>aliabbaszounr213@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/scrubs" className="text-gray-600 hover:text-medical-600">
                  Scrubs
                </Link>
              </li>
              <li>
                <Link to="/products/aprons" className="text-gray-600 hover:text-medical-600">
                  Aprons
                </Link>
              </li>
              <li>
                <Link to="/products/ot-dresses" className="text-gray-600 hover:text-medical-600">
                  OT Dresses
                </Link>
              </li>
              <li>
                <Link to="/products/stethoscopes" className="text-gray-600 hover:text-medical-600">
                  Stethoscopes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-medical-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-medical-600">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-medical-600">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-medical-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-gray-600 hover:text-medical-600">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-600 hover:text-medical-600">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MediShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
