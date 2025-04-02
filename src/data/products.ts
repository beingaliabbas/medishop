
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'scrub-1',
    name: 'Premium Medical Scrub Set',
    category: 'scrubs',
    price: 13999,
    priceUSD: 49.99,
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Comfortable, durable, and professional scrub set for medical professionals',
    description: 'This premium scrub set is made from high-quality, breathable fabric that ensures comfort during long shifts. The fabric is durable, wrinkle-resistant, and easy to clean. Features multiple pockets for storage and a modern fit that looks professional while allowing freedom of movement.',
    features: [
      'Moisture-wicking fabric',
      'Four-way stretch',
      'Antimicrobial treatment',
      'Multiple pocket design',
      'Wrinkle-resistant material'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: ['Navy Blue', 'Ceil Blue', 'Black', 'Wine', 'Teal'],
    stock: 25,
  },
  {
    id: 'scrub-2',
    name: 'Ultra-Soft Scrub Top',
    category: 'scrubs',
    price: 8399,
    priceUSD: 29.99,
    image: 'https://images.unsplash.com/photo-1643202948526-ed86f0c0ba0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1643202948526-ed86f0c0ba0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Exceptionally soft and comfortable scrub top with modern styling',
    description: 'Experience unmatched comfort with our Ultra-Soft Scrub Top. Made from a premium cotton-poly blend, this top feels soft against the skin while providing excellent durability. The modern V-neck design and strategic pockets offer both style and functionality for healthcare professionals.',
    features: [
      'Ultra-soft fabric blend',
      'Modern V-neck design',
      'Side vents for mobility',
      'Three functional pockets',
      'Tagless label for comfort'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Light Blue', 'Grey', 'Burgundy', 'Forest Green'],
    stock: 42,
  },
  {
    id: 'scrub-3',
    name: 'Performance Stretch Scrub Pants',
    category: 'scrubs',
    price: 9239,
    priceUSD: 32.99,
    image: 'https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Flexible, athletic-inspired scrub pants with maximum comfort',
    description: 'Our Performance Stretch Scrub Pants combine the comfort of athletic wear with professional medical attire. The yoga-inspired waistband and four-way stretch fabric allow for unrestricted movement during your busy shifts. Multiple pockets provide ample storage for medical essentials.',
    features: [
      'Four-way stretch fabric',
      'Yoga-inspired elastic waistband',
      'Seven functional pockets',
      'Moisture-wicking technology',
      'No-roll waistband'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: ['Navy Blue', 'Black', 'Charcoal', 'Royal Blue'],
    stock: 37,
  },
  {
    id: 'apron-1',
    name: 'Protective Medical Apron',
    category: 'aprons',
    price: 6999,
    priceUSD: 24.99,
    image: 'https://images.unsplash.com/photo-1590337318156-2ed149175a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1590337318156-2ed149175a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Durable and protective apron for medical environments',
    description: 'This high-quality medical apron provides excellent protection in various clinical settings. Made from waterproof and stain-resistant material, it offers superior protection against liquids, chemicals, and contaminants. The adjustable neck strap and waist ties ensure a secure and comfortable fit for all body types.',
    features: [
      'Waterproof material',
      'Stain-resistant surface',
      'Adjustable neck strap',
      'Secure waist ties',
      'Easy to clean and disinfect'
    ],
    sizes: ['One Size'],
    colors: ['White', 'Blue', 'Green'],
    stock: 50,
  },
  {
    id: 'apron-2',
    name: 'Disposable Medical Aprons (Pack of 100)',
    category: 'aprons',
    price: 13999,
    priceUSD: 49.99,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Convenient pack of 100 disposable aprons for medical use',
    description: 'Our disposable medical aprons are perfect for environments requiring frequent apron changes or single-use protection. Each pack contains 100 individually folded aprons made from lightweight, waterproof polyethylene. These aprons provide reliable protection against fluids and contaminants while being cost-effective for high-volume usage.',
    features: [
      '100 aprons per pack',
      'Waterproof polyethylene material',
      'Lightweight design',
      'Tie-back closure',
      'ASTM certified protection'
    ],
    sizes: ['One Size'],
    colors: ['White'],
    stock: 30,
  },
  {
    id: 'ot-dress-1',
    name: 'Sterile OT Surgical Gown',
    category: 'ot-dresses',
    price: 10079,
    priceUSD: 35.99,
    image: 'https://images.unsplash.com/photo-1579684288361-5c1a2957cc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1579684288361-5c1a2957cc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Sterile surgical gown designed for operating theater use',
    description: 'Our Sterile OT Surgical Gown is specifically designed for use in operating theaters and sterile environments. Each gown is individually packaged and sterilized, ready for immediate use. The fabric provides an effective barrier against fluids while remaining comfortable for extended procedures. Reinforced areas in critical zones offer additional protection.',
    features: [
      'Individually sterile packaged',
      'AAMI Level 3 barrier protection',
      'Reinforced critical zones',
      'Comfortable breathable material',
      'Secure back closure'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: ['Blue', 'Green'],
    stock: 45,
  },
  {
    id: 'ot-dress-2',
    name: 'Reusable Surgical OT Dress Set',
    category: 'ot-dresses',
    price: 18479,
    priceUSD: 65.99,
    image: 'https://images.unsplash.com/photo-1603855873822-0963209b5add?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1603855873822-0963209b5add?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'High-quality reusable OT dress set for medical professionals',
    description: 'This premium reusable OT dress set includes a top and bottom designed for comfort and protection during surgical procedures. Made from high-quality, autoclavable fabric that maintains its integrity through multiple sterilization cycles. The fabric is fluid-resistant while remaining breathable for comfort during long procedures.',
    features: [
      'Autoclavable material',
      'Fluid-resistant fabric',
      'Adjustable waistband',
      'Wrinkle-resistant',
      'Withstands multiple sterilization cycles'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Surgical Green', 'Surgical Blue'],
    stock: 20,
  },
  {
    id: 'stethoscope-1',
    name: 'Professional Cardiology Stethoscope',
    category: 'stethoscopes',
    price: 33599,
    priceUSD: 119.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'High-performance cardiology stethoscope with superior acoustics',
    description: 'Our Professional Cardiology Stethoscope delivers exceptional acoustic performance for accurate auscultation. The dual-lumen tubing eliminates noise interference, while the tunable diaphragm allows practitioners to hear both high and low-frequency sounds without repositioning. The ergonomic design ensures comfort during extended use.',
    features: [
      'Dual-lumen tubing design',
      'Tunable diaphragm technology',
      'Stainless steel chestpiece',
      'Anatomically designed headset',
      'Includes extra ear tips and diaphragm'
    ],
    sizes: ['One Size'],
    colors: ['Black', 'Navy Blue', 'Burgundy', 'Forest Green'],
    stock: 15,
  },
  {
    id: 'stethoscope-2',
    name: 'Classic Lightweight Stethoscope',
    category: 'stethoscopes',
    price: 13999,
    priceUSD: 49.99,
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    images: [
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    ],
    shortDescription: 'Reliable, lightweight stethoscope ideal for general examinations',
    description: 'This Classic Lightweight Stethoscope is perfect for general examinations and basic diagnostic procedures. Despite its lightweight design, it provides clear acoustics for detecting normal and abnormal heart, lung, and bowel sounds. The chrome-plated chestpiece and durable PVC tubing ensure long-lasting performance.',
    features: [
      'Lightweight design',
      'Chrome-plated chestpiece',
      'Durable PVC tubing',
      'Comfortable eartips',
      'Non-chill rim for patient comfort'
    ],
    sizes: ['One Size'],
    colors: ['Black', 'Blue', 'Red', 'Purple', 'Pink'],
    stock: 33,
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.shortDescription.toLowerCase().includes(lowercaseQuery)
  );
};
