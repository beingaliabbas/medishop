
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Ahmad Ali',
    role: 'Cardiologist',
    text: 'The quality of the scrubs I purchased exceeded my expectations. They\'re comfortable for long shifts and have held up well after multiple washes.',
  },
  {
    id: 2,
    name: 'Yousif Zaid',
    role: 'ER Nurse',
    text: 'I\'ve tried many brands, but these are by far the most comfortable scrubs I\'ve worn. The sizing is perfect and they look professional.',
  },
  {
    id: 3,
    name: 'Dr. Parmar Rathore',
    role: 'Surgeon',
    text: 'The OT dresses are perfect for my needs - sterile, comfortable and durable. Delivery was quick and the customer service was excellent.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-medical-100 text-medical-700 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
