
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  imageSrc,
  className,
  style,
}) => {
  return (
    <Link 
      to={`/product/${id}`}
      className={cn(
        "group block overflow-hidden animate-fade-in",
        className
      )}
      style={style}
    >
      <div className="product-image aspect-square mb-4 overflow-hidden transition-all duration-700">
        <div 
          className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>
      
      <div className="space-y-1">
        <div className="text-xs text-luxe-black/60 dark:text-luxe-white/60 uppercase tracking-wider">
          {category}
        </div>
        <h3 className="font-light text-base sm:text-lg">
          {name}
        </h3>
        <div className="font-light">
        ₹{price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
