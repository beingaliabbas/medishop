import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Retrieve the order details from localStorage (or wherever you store it)
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-lg text-red-500">Order details not found!</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { orderNumber, customerInfo, items, subtotal, shipping, tax, total } = orderDetails;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </span>
            <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
            <p className="mt-2 text-lg text-gray-600">
              Thank you for your purchase
            </p>
            <p className="mt-2 text-medical-600 font-medium">
              Order #{orderNumber}
            </p>
          </div>

          <Card className="mb-8 border-medical-100 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-center text-gray-800">Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-medical-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">Confirmed</h3>
                  <p className="text-sm text-gray-500">Your order is confirmed</p>
                </div>
                
                <div className="hidden md:block w-24 h-0.5 bg-medical-200"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-gray-900">Processing</h3>
                  <p className="text-sm text-gray-500">We're preparing your order</p>
                </div>
                
                <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Truck className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-gray-900">Shipped</h3>
                  <p className="text-sm text-gray-500">Your package is on its way</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-medical-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Shipping Information</h3>
                  <p className="text-gray-600">Name: {customerInfo.fullName}</p>
                  <p className="text-gray-600">Email: {customerInfo.email}</p>
                  <p className="text-gray-600">Phone: {customerInfo.phone}</p>
                  <p className="text-gray-600">Address: {customerInfo.address}</p>
                  <p className="text-gray-600">City: {customerInfo.city}</p>
                  <p className="text-gray-600">Zip Code: {customerInfo.zipCode}</p>
                  <p className="text-gray-600">State: {customerInfo.state}</p>
                  <p className="text-gray-600">Country: {customerInfo.country}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
                  <div className="space-y-2">
                    {items.map((item: any) => (
                      <div key={item.productId} className="flex justify-between">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>{item.price * item.quantity} PKR</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <span>Subtotal:</span>
                    <span>{subtotal} PKR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>0 PKR</span>
                  </div>
                  <div className="flex justify-between font-semibold mt-2">
                    <span>Total:</span>
                    <span>{total} PKR</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <CardFooter className="flex justify-center gap-4 pt-2 pb-6">
            <Button variant="outline" asChild className="border-medical-200 hover:bg-medical-50">
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button asChild className="bg-medical-600 hover:bg-medical-700">
              <Link to="/">Return Home</Link>
            </Button>
          </CardFooter>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
