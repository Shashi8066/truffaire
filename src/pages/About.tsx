
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://i.pinimg.com/736x/4e/52/1c/4e521c245acfc59cb5fb33bf407e9b10.jpg)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxe-black to-transparent opacity-70" />
          </div>
          
          <div className="luxe-container relative z-10 h-full flex items-end pb-12">
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                Our Process
              </span>
              <h1 className="luxe-heading text-4xl md:text-5xl lg:text-6xl text-luxe-white mb-4">
                The Art and Science of Cultivation
              </h1>
              <p className="text-luxe-white/80 text-lg">
              Experience the perfect harmony of tradition and innovation as we cultivate the world’s finest truffles and mushrooms.
              </p>
            </div>
          </div>
        </section>
        
        {/* Cultivation Process */}
        <section className="luxe-section">
          <div className="luxe-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 inline-block">
                Our Commitment
              </span>
              <h2 className="luxe-heading text-3xl md:text-4xl mb-6">
                Purity in Every Stage
              </h2>
              <p className="text-luxe-black/70 dark:text-luxe-white/70">
              At Truffaire, we uphold an unwavering commitment to quality, transparency, and excellence. From the delicate beginnings of cultivation to the moment our products reach you, every step is meticulously designed to preserve the purity and authenticity of our truffles.
              </p>
            </div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 01
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                  Controlled Cultivation
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                  Our process begins in carefully controlled environments that mimic the natural habitat of truffles and gourmet mushrooms.

Sterile, pristine conditions to ensure purity.
Advanced climate control for optimal growth.

                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                  By eliminating contaminants and maintaining the perfect ecosystem, we allow each truffle to develop its signature aroma, texture, and richness.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://i.pinimg.com/736x/bf/99/c2/bf99c2a2665bf411e75dfb46ab85f687.jpg" 
                    alt="Pristine laboratory environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://i.pinimg.com/736x/f8/6e/65/f86e653084c752003d4d7e587c8dc1d9.jpg" 
                    alt="Optimal growing conditions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 02
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                  Precision Growth & Monitoring
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                  Each variety requires a unique combination of temperature, humidity, and soil conditions. Using state-of-the-art monitoring systems, we ensure:

Micro-adjustments to optimize truffle development.
Organic and chemical-free nurturing, preserving nature’s integrity.
                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                  Our cultivators oversee every detail, allowing each truffle to reach its full potential in flavor, aroma, and nutritional value.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 03
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                  Hand-Selected Harvesting
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                  Unlike mass-market operations, our expert foragers and cultivators carefully hand-select each truffle at its peak maturity.

Harvested at the precise moment for maximum potency.
Gentle handling and minimal intervention to preserve delicate characteristics.

                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                  This patience and precision result in exceptional quality, ensuring every truffle delivers the most luxurious experience.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://i.pinimg.com/736x/01/d2/37/01d237e46a29644ce868780e7cd510a7.jpg" 
                    alt="Perfect timing for harvest" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://i.pinimg.com/736x/36/e3/9e/36e39e1aa6a11097d672743d6f68b437.jpg" 
                    alt="Careful packaging and delivery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 04
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                  Preservation & Delivery
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                  From harvest to your table, our products are handled with the utmost care:

Fresh truffles are carefully packed in breathable, sustainable materials.
Specialized storage methods maintain aroma and texture.
Temperature-controlled shipping ensures they arrive in perfect condition.

                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                  Our goal is to deliver perfection—preserving the integrity of every truffle, just as nature intended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sustainability Section */}
        <section className="luxe-section bg-luxe-cream dark:bg-luxe-black/20">
          <div className="luxe-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 inline-block">
                Our Responsibility
              </span>
              <h2 className="luxe-heading text-3xl md:text-4xl mb-6">
                Sustainable Practices
              </h2>
              <p className="text-luxe-black/70 dark:text-luxe-white/70">
              At Truffaire, luxury and sustainability go hand in hand. We are committed to eco-conscious operations that respect both nature and tradition.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-luxe-white dark:bg-luxe-black/40 rounded-xl p-8 animate-fade-in">
                <div className="h-12 w-12 rounded-full bg-luxe-gold/20 flex items-center justify-center mb-6">
                  <span className="text-luxe-gold text-xl">♲</span>
                </div>
                <h3 className="text-xl font-light mb-4">Sustainable Cultivation</h3>
                <p className="text-luxe-black/70 dark:text-luxe-white/70">
                We use organic, biodegradable growing mediums and ensure minimal environmental impact.
                </p>
              </div>
              
              <div className="bg-luxe-white dark:bg-luxe-black/40 rounded-xl p-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="h-12 w-12 rounded-full bg-luxe-gold/20 flex items-center justify-center mb-6">
                  <span className="text-luxe-gold text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-light mb-4">Renewable Energy</h3>
                <p className="text-luxe-black/70 dark:text-luxe-white/70">
                Our facilities are powered by clean energy sources, reducing our carbon footprint.
                </p>
              </div>
              
              <div className="bg-luxe-white dark:bg-luxe-black/40 rounded-xl p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="h-12 w-12 rounded-full bg-luxe-gold/20 flex items-center justify-center mb-6">
                  <span className="text-luxe-gold text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-light mb-4">Eco-Packaging</h3>
                <p className="text-luxe-black/70 dark:text-luxe-white/70">
                We use compostable and recyclable materials, ensuring that sustainability extends beyond our farms and into your hands.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
