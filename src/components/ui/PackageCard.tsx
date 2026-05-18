"use client";

import React from "react";
import { Eye, Clock } from "lucide-react";
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  // Helper to map package ID prefixes to friendly, high-contrast healthcare department badges
  const getCategoryLabel = (pkgId: string) => {
    if (pkgId.startsWith("al")) return "Allergy Profile";
    if (pkgId.startsWith("bn")) return "Bone & Joint Care";
    if (pkgId.startsWith("cn")) return "Cancer Screen";
    if (pkgId.startsWith("ft")) return "Sports Fitness";
    if (pkgId.startsWith("fb") || pkgId.startsWith("p")) return "Full Body Checkup";
    if (pkgId.startsWith("hf")) return "Hair Fall check";
    if (pkgId.startsWith("ht")) return "Cardiac Health";
    if (pkgId.startsWith("hm")) return "Hormone Screen";
    if (pkgId.startsWith("dp")) return "Sugar & Diabetic";
    if (pkgId.startsWith("it")) return "Individual Lab Test";
    if (pkgId.startsWith("op")) return "Advanced Profile";
    return "Diagnostic Package";
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-premium hover:border-primary/45 transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-1.5">
      


      {/* 2. BESTSELLER BADGE (stacked below discount if present) */}
      {isPopular && (
        <span className="absolute top-12 left-4 z-10 bg-gradient-to-r from-accent to-amber-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm select-none">
          Bestseller
        </span>
      )}

      {/* 3. IMAGE WRAPPER WITH VIEW DETAILS OVERLAY */}
      <Link 
        href={`/tests/${id}`} 
        className="relative h-40 md:h-48 overflow-hidden bg-white flex items-center justify-center border-b border-gray-50/50 cursor-pointer"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-200">
            <Eye className="w-8 h-8 opacity-25" />
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-300">No Package Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white text-primary p-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300" title="Quick View">
            <Eye className="w-5 h-5 text-primary" />
          </div>
        </div>
      </Link>

      {/* 4. PACKAGE INFO CONTENT */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Sub-category tag & Test parameter count row (madur.in format) */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold text-primary bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider select-none">
              {getCategoryLabel(id)}
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              {testCount} {testCount === 1 ? 'Parameter' : 'Parameters'}
            </span>
          </div>

          {/* Title */}
          <Link href={`/tests/${id}`}>
            <h3 className="font-poppins font-black text-text-dark text-base hover:text-primary transition duration-300 line-clamp-1 mb-1">
              {title}
            </h3>
          </Link>

          {/* View Details Link (madur.in style) */}
          <Link
            href={`/tests/${id}`}
            className="text-[9px] font-extrabold text-primary hover:text-emerald-700 uppercase tracking-widest hover:underline cursor-pointer flex items-center gap-1 mb-3"
          >
            View Details ➔
          </Link>

          {/* Short Description */}
          <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        <div>
          {/* Pricing & Add to Cart button (madur.in style) */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <div>
              <span className="text-[9px] text-gray-400 block leading-none font-bold uppercase mb-0.5">Special Price</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-lg font-black text-primary">₹{offerPrice}</span>
                {discount !== "0%" && (
                  <span className="text-xs text-gray-400 line-through font-semibold">₹{mrp}</span>
                )}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={alreadyInCart}
              className={cn(
                "flex items-center space-x-1 px-4 py-2 rounded-xl font-extrabold text-xs shadow-xs transition-all duration-300",
                alreadyInCart
                  ? "bg-primary text-white scale-95 cursor-default"
                  : "bg-primary hover:bg-emerald-700 text-white active:scale-95"
              )}
            >
              <span>{alreadyInCart ? 'Added ✓' : 'Add ＋'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5. FOOTER INFO */}
      <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest select-none">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-gray-300" />
          Report in 24 hrs
        </div>
        <div className="text-primary font-extrabold">
          Free Collection
        </div>
      </div>

    </div>
  );
};

export default PackageCard;
