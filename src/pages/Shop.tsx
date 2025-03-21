
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

// Mock product data
const products = [
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
  },
  {
    id: 'morel-wild',
    name: 'Wild Morel',
    category: 'Gourmet',
    price: 49.99,
    imageSrc: 'https://images.unsplash.com/photo-1640116345135-b0c9e42b1f2f?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'chanterelle-fresh',
    name: 'Fresh Chanterelle',
    category: 'Culinary',
    price: 34.99,
    imageSrc: 'https://images.unsplash.com/photo-1586944176091-3dad82021d25?q=80&w=1964&auto=format&fit=crop'
  },
  {
    id: 'oyster-pearl',
    name: 'Pearl Oyster',
    category: 'Culinary',
    price: 19.99,
    imageSrc: 'https://images.unsplash.com/photo-1577487200001-a1c521af0b7d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'cordyceps-wild',
    name: 'Wild Cordyceps',
    category: 'Medicinal',
    price: 59.99,
    imageSrc: 'https://images.unsplash.com/photo-1587334207809-3a0a56dbce7f?q=80&w=1965&auto=format&fit=crop'
  }
];

// Categories for filtering
const categories = ['All', 'Culinary', 'Medicinal', 'Gourmet', 'Luxury'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') {
      return a.price - b.price;
    } else if (sortOption === 'price-high') {
      return b.price - a.price;
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    // Default: featured, no specific sorting
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="luxe-container py-12">
          <div className="text-center mb-12">
            <h1 className="luxe-heading text-4xl md:text-5xl mb-4">Shop Collection</h1>
            <p className="text-luxe-black/70 dark:text-luxe-white/70 max-w-2xl mx-auto">
              Explore our premium selection of carefully cultivated mushrooms, harvested at peak potency.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-luxe-black text-luxe-white dark:bg-luxe-white dark:text-luxe-black' 
                      : 'bg-luxe-black/5 text-luxe-black dark:bg-luxe-white/5 dark:text-luxe-white hover:bg-luxe-black/10 dark:hover:bg-luxe-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Sort options */}
            <div className="w-full md:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full md:w-auto px-4 py-2 rounded-full border border-luxe-black/10 dark:border-luxe-white/10 bg-luxe-white dark:bg-luxe-black/20 focus:outline-none focus:ring-2 focus:ring-luxe-gold/50 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-luxe-black/70 dark:text-luxe-white/70">
                No products found in this category. Please try another selection.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
