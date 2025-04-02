
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-medical-50 to-medical-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Medical Wear<br />
              <span className="text-medical-700">For Healthcare Heroes</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md">
              High-quality medical uniforms and equipment designed for comfort, durability, and professional appearance.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Medical Professionals" 
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
