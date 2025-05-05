
import React from "react";
import { cn } from "@/lib/utils";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brand,
  price,
  imageUrl,
  category,
  isNew = false,
  isBestseller = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-md transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-black/10" />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="inline-block bg-luxe-magenta text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {isBestseller && (
            <span className="inline-block bg-luxe-charcoal text-white text-xs px-2 py-1 rounded">Bestseller</span>
          )}
        </div>
        
        {/* Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 transform translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-luxe-rosegold transition-colors">
            <Heart className="h-4 w-4 text-luxe-charcoal" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-luxe-rosegold transition-colors">
            <ShoppingBag className="h-4 w-4 text-luxe-charcoal" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col p-3">
        <span className="text-xs text-gray-500 uppercase">{brand}</span>
        <h3 className="mt-1 font-medium leading-tight group-hover:text-luxe-magenta transition-colors">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">${price.toFixed(2)}</span>
          {category && <span className="text-xs text-gray-500">{category}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
