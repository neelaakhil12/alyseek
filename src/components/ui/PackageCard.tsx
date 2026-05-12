"use client";

import React from "react";
import { ShoppingCart, Eye, Tag, Clock, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface PackageCardProps {
  id: string;
  title: string;
  description: string;
  testCount: number;
  mrp: number;
  offerPrice: number;
  discount: string;
  image: string;
  isPopular?: boolean;
}

const PackageCard = ({
  id,
  title,
  description,
  testCount,
  mrp,
  offerPrice,
  discount,
  image,
  isPopular,
}: PackageCardProps) => {
  const { addToCart, isInCart } = useCart();
  const alreadyInCart = isInCart(id);

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e && (e.currentTarget as HTMLElement).tagName === "BUTTON") {
      e.preventDefault();
    }
    
    if (alreadyInCart) return;
    
    addToCart({
      id,
      title,
      offerPrice,
      mrp,
      image,
      testCount
    });
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col h-full relative">

      {isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          Best Seller
        </div>
      )}

      {/* Image Wrapper */}
      <Link href={`/tests/${id}`} className="relative h-40 md:h-48 overflow-hidden bg-white flex items-center justify-center border-b border-gray-50">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <Eye className="w-10 h-10 opacity-20" />
            <span className="text-[10px] font-bold uppercase tracking-widest">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white hover:text-red-500 transition-all">
            <Eye className="w-4 h-4" />
            View Details
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-primary font-semibold text-[10px] md:text-xs mb-2 md:mb-3 uppercase tracking-widest">
          <FlaskConical className="w-3 h-3 md:w-4 md:h-4" />
          {testCount} Tests Included
        </div>
        
        <Link href={`/tests/${id}`}>
          <h3 className="text-lg md:text-xl font-bold text-text-dark mb-1 md:mb-2 group-hover:text-red-500 transition-colors line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem] flex items-center">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="text-xl md:text-2xl font-black text-text-dark">
              ₹{offerPrice}
            </div>
            <div className="text-xs md:text-sm text-gray-400 line-through">
              ₹{mrp}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <button 
              onClick={handleAddToCart}
              disabled={alreadyInCart}
              className={cn(
                "flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all",
                alreadyInCart 
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                  : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
              )}
            >
              <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
              {alreadyInCart ? "Added" : "Add"}
            </button>
            <Link 
              href="/cart"
              onClick={handleAddToCart}
              className="bg-primary text-white hover:shadow-lg hover:shadow-primary/30 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all active:scale-95 flex items-center justify-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Report Info */}
      <div className="px-4 md:px-6 py-2 md:py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <div className="flex items-center gap-1">
          <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" />
          Report in 24 hrs
        </div>
        <div className="text-primary">
          Free Collection
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
