
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-luxe-white/80 dark:bg-luxe-black/80 backdrop-blur-lg border-b border-luxe-black/5 dark:border-luxe-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="luxe-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-light">
            <span className="animate-fade-in">TRUFFAIRE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm hover:text-luxe-gold transition-colors duration-200">
              Shop
            </Link>
            <Link to="/about" className="text-sm hover:text-luxe-gold transition-colors duration-200">
              Our Process
            </Link>
            <Link to="/certifications" className="text-sm hover:text-luxe-gold transition-colors duration-200">
              Certifications
            </Link>
            <Link to="/contact" className="text-sm hover:text-luxe-gold transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-luxe-black/5 dark:bg-luxe-white/5 hover:bg-luxe-black/10 dark:hover:bg-luxe-white/10 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link to="/cart" className="relative h-9 w-9 inline-flex items-center justify-center rounded-full bg-luxe-black/5 dark:bg-luxe-white/5 hover:bg-luxe-black/10 dark:hover:bg-luxe-white/10 transition-colors duration-200">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] flex items-center justify-center bg-luxe-gold text-luxe-black font-medium rounded-full">
                0
              </span>
            </Link>
            <button
              className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-luxe-black/5 dark:bg-luxe-white/5 hover:bg-luxe-black/10 dark:hover:bg-luxe-white/10 transition-colors duration-200 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-luxe-white dark:bg-luxe-black z-40 flex flex-col pt-20 px-6 animate-fade-in md:hidden">
          <nav className="flex flex-col space-y-6 pt-8">
            <Link 
              to="/shop" 
              className="text-2xl font-light hover:text-luxe-gold transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-2xl font-light hover:text-luxe-gold transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link 
              to="/certifications" 
              className="text-2xl font-light hover:text-luxe-gold transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/contact" 
              className="text-2xl font-light hover:text-luxe-gold transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
