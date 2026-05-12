"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { categoryMapping, allPackages } from "@/data/packages";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Clock, 
  ShieldCheck, 
  FlaskConical,
  CheckCircle2,
  Info,
  Tag,
  X,
  Maximize2
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const TestDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [showZoom, setShowZoom] = React.useState(false);
  const { addToCart, isInCart } = useCart();

  const pkg = allPackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-text-dark mb-4">Test not found</h2>
        <Link href="/tests" className="text-primary font-bold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to all tests
        </Link>
      </div>
    );
  }

  const categoryName = Object.entries(categoryMapping).find(([name, packages]) => 
    name !== "All" && packages.some(p => p.id === id)
  )?.[0] || "TESTS";

  const alreadyInCart = isInCart(id);

  const handleAddToCart = () => {
    if (alreadyInCart) return;
    addToCart({
      id: pkg.id,
      title: pkg.title,
      offerPrice: pkg.offerPrice,
      mrp: pkg.mrp,
      image: pkg.image,
      testCount: pkg.testCount
    });
  };

  const handleBookNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24 pt-28">
      {/* Zoom Modal */}
      {showZoom && pkg?.image && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10">
          <button 
            onClick={() => setShowZoom(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-text-dark font-bold hover:text-primary transition-colors group mb-8"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-soft flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to {categoryName.toUpperCase()}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 overflow-hidden">
              <div className="flex flex-col md:flex-row p-6 md:p-10 gap-10">
                {/* Image Section */}
                <div 
                  className="w-full md:w-[45%] rounded-2xl overflow-hidden bg-gray-50 flex flex-col items-center justify-center border border-gray-100 p-4 min-h-[300px] cursor-zoom-in relative group/img"
                  onClick={() => pkg.image && setShowZoom(true)}
                >
                  {pkg.image ? (
                    <>
                      <img 
                        src={pkg.image} 
                        alt={pkg.title} 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all transform scale-90 group-hover/img:scale-100">
                          <Maximize2 className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-300">
                      <FlaskConical className="w-16 h-16 opacity-20" />
                      <span className="text-xs font-bold uppercase tracking-widest">No Image Available</span>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex px-4 py-1.5 bg-red-50 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {categoryName}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-black text-text-dark leading-tight">
                    {pkg.title.toUpperCase()}
                  </h1>

                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {pkg.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl font-bold text-sm">
                      <FlaskConical className="w-4 h-4" />
                      {pkg.testCount} Tests Included
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-text-dark font-black text-lg">Report Delivery</p>
                      <p className="text-gray-400 font-bold">Within 24-48 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Parameters Section */}
            <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-text-dark">Package Includes</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-text-dark font-bold">Diagnostic Parameter {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] shadow-premium border border-gray-100 p-8 sticky top-24 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
              <h3 className="text-2xl font-black text-text-dark mb-10">Price Details</h3>
              
              <div className="space-y-8 mb-10">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">MRP</span>
                  <span className="text-xl text-gray-400 line-through font-bold">₹{pkg.mrp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-black text-text-dark uppercase tracking-widest text-sm">Offer Price</span>
                  <span className="text-5xl font-black text-red-500">₹{pkg.offerPrice}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={alreadyInCart}
                  className={`w-full py-5 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-[0.98] ${
                    alreadyInCart 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none" 
                    : "bg-[#E53E3E] text-white shadow-red-500/20 hover:bg-red-600"
                  }`}
                >
                  {alreadyInCart ? "Added to Cart" : "Add to Cart"}
                </button>
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-white text-red-500 border-2 border-red-500 py-5 rounded-2xl font-black text-xl hover:bg-red-50 transition-all active:scale-[0.98]"
                >
                  Book Now
                </button>
              </div>

              <div className="mt-10 p-5 bg-[#F0FFF4] rounded-2xl flex items-center gap-3 border border-green-100">
                <div className="text-yellow-500 flex-shrink-0">
                  <Tag className="w-5 h-5 fill-current" />
                </div>
                <p className="text-[11px] font-black text-green-700 uppercase tracking-widest leading-tight">
                  Free Professional Home Sample Collection Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetailPage;
