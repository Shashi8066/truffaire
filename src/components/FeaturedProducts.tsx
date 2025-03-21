
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

// Mock featured products data
const featuredProducts = [
  {
    id: 'shiitake-premium',
    name: 'Premium Shiitake',
    category: 'Culinary',
    price: 24.99,
    imageSrc: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?q=80&w=1887&auto=format&fit=crop'
  },
  {
    id: 'reishi-organic',
    name: 'Organic Reishi',
    category: 'Medicinal',
    price: 39.99,
    imageSrc: 'https://images.unsplash.com/photo-1665140666193-9a33fcb06c8f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'lions-mane',
    name: "Lion's Mane",
    category: 'Gourmet',
    price: 29.99,
    imageSrc: 'https://images.unsplash.com/photo-1624458497711-dac9afa55a25?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'truffle-black',
    name: "Black Truffle",
    category: 'Luxury',
    price: 89.99,
    imageSrc: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=2070&auto=format&fit=crop'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="luxe-section">
      <div className="luxe-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 block">
              Featured Collection
            </span>
            <h2 className="luxe-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Exceptional Varieties
            </h2>
            <p className="text-luxe-black/70 dark:text-luxe-white/70 max-w-2xl">
              Our most sought-after premium mushrooms, selected for their exceptional flavor profiles and health benefits.
            </p>
          </div>
          <Link to="/shop" className="luxe-button luxe-button-outline mt-6 md:mt-0">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              {...product}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 * (index + 1)}ms`, animationFillMode: 'forwards' } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
