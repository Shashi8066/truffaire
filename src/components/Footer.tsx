
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-luxe-black/10 dark:border-luxe-white/10 py-12 md:py-16 bg-luxe-cream dark:bg-luxe-black/20">
      <div className="luxe-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-light">
              LUXE MUSHROOM
            </Link>
            <p className="mt-4 text-sm text-luxe-black/70 dark:text-luxe-white/70 max-w-xs">
              Premium cultivated mushrooms harvested at peak potency for culinary excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/culinary" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Culinary Collection
                </Link>
              </li>
              <li>
                <Link to="/shop/medicinal" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Medicinal Selection
                </Link>
              </li>
              <li>
                <Link to="/shop/rare" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Rare Varieties
                </Link>
              </li>
              <li>
                <Link to="/shop/gifts" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Cultivation Process
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-luxe-black/10 dark:border-luxe-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
              Instagram
            </a>
            <a href="#" className="text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
              Facebook
            </a>
            <a href="#" className="text-luxe-black/70 dark:text-luxe-white/70 hover:text-luxe-gold dark:hover:text-luxe-gold transition-colors">
              Pinterest
            </a>
          </div>
          <div className="text-sm text-luxe-black/50 dark:text-luxe-white/50">
            © {new Date().getFullYear()} Luxe Mushroom. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
