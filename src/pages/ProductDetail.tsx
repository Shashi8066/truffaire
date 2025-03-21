
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Minus, Plus, Star, Leaf, Award, ShieldCheck } from 'lucide-react';

// Mock product data (this would typically come from an API)
const products = [
  {
    id: 'shiitake-premium',
    name: 'Premium Shiitake',
    category: 'Culinary',
    price: 24.99,
    imageSrc: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?q=80&w=1887&auto=format&fit=crop',
    description: 'Our premium shiitake mushrooms are known for their rich, savory flavor and meaty texture. Perfect for stir-fries, soups, and sauces.',
    details: [
      'Rich in B vitamins, copper, and selenium',
      'Harvested at peak maturity for optimal flavor',
      'Grown in organic, controlled environments',
      'Available fresh or dried'
    ],
    origin: 'Cultivated in Oregon, USA',
    rating: 4.8,
    reviews: 124,
    stock: 15
  },
  {
    id: 'reishi-organic',
    name: 'Organic Reishi',
    category: 'Medicinal',
    price: 39.99,
    imageSrc: 'https://images.unsplash.com/photo-1665140666193-9a33fcb06c8f?q=80&w=2070&auto=format&fit=crop',
    description: 'Our organic reishi mushrooms are prized for their adaptogenic properties. Used traditionally for centuries to support overall wellness and vitality.',
    details: [
      'Contains triterpenes and beta-glucans',
      'Carefully dried to preserve active compounds',
      'Certified organic cultivation',
      'Sustainably harvested'
    ],
    origin: 'Cultivated in Washington, USA',
    rating: 4.9,
    reviews: 86,
    stock: 8
  },
  {
    id: 'lions-mane',
    name: "Lion's Mane",
    category: 'Gourmet',
    price: 29.99,
    imageSrc: 'https://images.unsplash.com/photo-1624458497711-dac9afa55a25?q=80&w=2070&auto=format&fit=crop',
    description: 'Our Lion\'s Mane mushrooms offer a delicate seafood-like flavor reminiscent of crab or lobster. A gourmet delicacy with unique texture and taste.',
    details: [
      'Contains neuroactive compounds',
      'Sustainably grown in controlled environments',
      'Rare culinary delicacy',
      'Organic cultivation methods'
    ],
    origin: 'Cultivated in California, USA',
    rating: 4.7,
    reviews: 92,
    stock: 12
  },
  {
    id: 'truffle-black',
    name: "Black Truffle",
    category: 'Luxury',
    price: 89.99,
    imageSrc: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=2070&auto=format&fit=crop',
    description: 'Our premium black truffles are harvested at the peak of ripeness, delivering an intense earthy aroma and complex flavor profile that elevates any dish.',
    details: [
      'Foraged by experienced truffle hunters',
      'Authenticated for species and quality',
      'Carefully packaged to preserve aroma',
      'Limited seasonal availability'
    ],
    origin: 'Foraged in Oregon, USA',
    rating: 5.0,
    reviews: 46,
    stock: 5
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product from the mock data
  const product = products.find(p => p.id === id);
  
  // Handle product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <div className="luxe-container py-12 text-center">
            <h1 className="luxe-heading text-3xl mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/shop" className="luxe-button luxe-button-primary">
              Return to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const addToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`);
    // This would typically call a cart state management function
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="luxe-container py-12">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm text-luxe-black/60 dark:text-luxe-white/60">
              <li>
                <Link to="/" className="hover:text-luxe-gold transition-colors">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <Link to="/shop" className="hover:text-luxe-gold transition-colors">Shop</Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <Link to={`/shop/${product.category.toLowerCase()}`} className="hover:text-luxe-gold transition-colors">{product.category}</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-luxe-black/90 dark:text-luxe-white/90 font-medium">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="product-image rounded-2xl overflow-hidden animate-fade-in">
              <img 
                src={product.imageSrc} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Information */}
            <div className="animate-fade-in space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider text-luxe-gold mb-2">{product.category}</div>
                <h1 className="luxe-heading text-3xl md:text-4xl mb-2">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-luxe-gold text-luxe-gold' : 'text-luxe-black/20 dark:text-luxe-white/20'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="mx-2 text-luxe-black/40 dark:text-luxe-white/40">|</span>
                  <span className="text-sm text-luxe-black/60 dark:text-luxe-white/60">{product.reviews} reviews</span>
                </div>
                
                {/* Price */}
                <div className="text-2xl font-light mb-6">${product.price.toFixed(2)}</div>
                
                {/* Description */}
                <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                  {product.description}
                </p>
                
                {/* Origin */}
                <div className="flex items-center text-sm text-luxe-black/60 dark:text-luxe-white/60 mb-6">
                  <Leaf className="w-4 h-4 mr-2 text-luxe-green" />
                  {product.origin}
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex space-x-4 items-center">
                <div className="flex items-center border border-luxe-black/10 dark:border-luxe-white/10 rounded-full">
                  <button 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="w-8 h-8 flex items-center justify-center text-luxe-black/70 dark:text-luxe-white/70 disabled:opacity-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="w-8 h-8 flex items-center justify-center text-luxe-black/70 dark:text-luxe-white/70 disabled:opacity-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="text-sm text-luxe-black/60 dark:text-luxe-white/60">
                  {product.stock} in stock
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <button 
                onClick={addToCart}
                className="luxe-button luxe-button-primary w-full mt-6"
              >
                Add to Cart
              </button>
              
              {/* Product Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center text-center p-4 border border-luxe-black/10 dark:border-luxe-white/10 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-luxe-gold mb-2" />
                  <span className="text-sm font-medium">Organic</span>
                  <span className="text-xs text-luxe-black/60 dark:text-luxe-white/60">Certified</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-luxe-black/10 dark:border-luxe-white/10 rounded-xl">
                  <Leaf className="w-5 h-5 text-luxe-gold mb-2" />
                  <span className="text-sm font-medium">Sustainable</span>
                  <span className="text-xs text-luxe-black/60 dark:text-luxe-white/60">Eco-friendly</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-luxe-black/10 dark:border-luxe-white/10 rounded-xl">
                  <Award className="w-5 h-5 text-luxe-gold mb-2" />
                  <span className="text-sm font-medium">Premium</span>
                  <span className="text-xs text-luxe-black/60 dark:text-luxe-white/60">Quality</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="mt-16">
            <h2 className="luxe-heading text-2xl mb-6">Product Details</h2>
            <div className="border-t border-luxe-black/10 dark:border-luxe-white/10 py-6">
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-luxe-gold mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
