"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tests", href: "/tests" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Alyseek Logo" 
            className="h-16 md:h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium text-sm transition-colors hover:text-primary",
                isScrolled ? "text-text-dark" : "text-text-dark"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center relative max-w-xs w-full mx-4">
          <input
            type="text"
            placeholder="Search tests, packages..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
          />
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/support"
            className="hidden md:flex items-center gap-2 text-primary font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span>Support</span>
          </Link>

          <Link href="/cart" className="relative p-2 text-text-dark hover:text-primary transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
          >
            <User className="w-4 h-4" />
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search tests..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-text-dark py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/login"
              className="w-full bg-primary text-white text-center py-3 rounded-xl font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login / Sign Up
            </Link>
            <Link
              href="/support"
              className="w-full bg-primary/10 text-primary text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Call Support
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
