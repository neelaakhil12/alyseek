"use client";

import React from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, removeFromCart, totalPrice, totalItems } = useCart();

  const subtotal = totalPrice;
  const mrpTotal = items.reduce((acc, item) => acc + item.mrp, 0);
  const discount = mrpTotal - subtotal;

  return (
    <div className="pb-24 bg-background min-h-screen">
      <PageHeader 
        title="Your Shopping Cart" 
        subtitle="Review your selected tests and proceed to secure checkout."
      />

      <div className="container mx-auto px-4 -mt-12">
        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Items List */}
            <div className="flex-[2] space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 flex flex-col md:flex-row items-center gap-6 group hover:shadow-premium transition-all">
                  <div className="w-full md:w-40 h-32 rounded-2xl overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold text-text-dark">{item.title}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <span className="text-2xl font-black text-primary">₹{item.offerPrice}</span>
                      <span className="text-sm text-gray-400 line-through">₹{item.mrp}</span>
                      <span className="text-xs font-bold text-secondary bg-secondary/5 px-2 py-1 rounded">Save ₹{item.mrp - item.offerPrice}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest pt-2">
                      <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> NABL Certified</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 24hr Report</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="w-12 h-12 flex items-center justify-center text-red-400 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Address Preview */}
              <div className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-50 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-dark flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Collection Address
                  </h3>
                  <button className="text-primary font-bold text-sm hover:underline">Change</button>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <p className="font-bold text-text-dark">Home</p>
                  <p className="text-gray-500">123, Healthcare Plaza, Medical District, Delhi - 110001</p>
                  <p className="text-gray-500 mt-2">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="flex-1">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-premium border border-gray-100 sticky top-28">
                <h3 className="text-2xl font-bold text-text-dark mb-8">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-text-dark">₹{subtotal + discount}</span>
                  </div>
                  <div className="flex justify-between text-secondary">
                    <span>Discount</span>
                    <span className="font-bold">-₹{discount}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Home Collection</span>
                    <span className="text-secondary font-bold uppercase text-xs">Free</span>
                  </div>
                  <div className="h-px bg-gray-100 my-4"></div>
                  <div className="flex justify-between text-xl font-black text-text-dark">
                    <span>Total</span>
                    <span className="text-primary">₹{subtotal}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Coupon Code" 
                      className="w-full pl-4 pr-24 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none"
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-6 bg-text-dark text-white rounded-xl text-sm font-bold">Apply</button>
                  </div>
                  <button className="w-full bg-primary text-white py-5 rounded-[1.5rem] font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3 group">
                    Checkout Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4 opacity-50 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Paypal" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center shadow-soft border border-gray-50">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-gray-300">
              <ShoppingCart className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">Your cart is empty</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8 md:mb-10 text-sm md:text-base">
              Looks like you haven't added any health packages yet. Start exploring our curated tests for your health.
            </p>
            <Link href="/tests" className="bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all inline-flex items-center gap-2">
              Explore Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
