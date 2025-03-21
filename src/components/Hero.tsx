
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden flex items-center">
      {/* Background image with subtle animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 animate-scale-in opacity-70"
          style={{ 
            backgroundImage: 'url(/src/components/logo.jpg)',
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxe-black/30 via-transparent to-luxe-black/90" />
      </div>
      
      {/* Hero content */}
      <div className="luxe-container relative z-10 mt-16 md:mt-0">
        <div className="max-w-3xl">
          <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4 sm:mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Premium Cultivated Mushrooms
          </span>
          <h1 className="luxe-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-luxe-black-bold mb-4 sm:mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Nature's Excellence,<br />Cultivated to Perfection
          </h1>
          <p className="text-luxe-white/800 text-lg md:text-xl max-w-xl mb-8 md:mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            Experience our premium organic mushrooms, grown with meticulous care for exceptional taste and potency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <Link to="/shop" className="luxe-button luxe-button-secondary">
              Shop Collection
            </Link>
            <Link to="/about" className="luxe-button luxe-button-outline border-luxe-white/20 text-luxe-white hover:bg-luxe-white/10">
              Our Process
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}>
        <span className="text-luxe-white/60 text-xs tracking-wider uppercase mb-2">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-luxe-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
