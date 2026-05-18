"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Alyseek Logo" 
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Experience premium healthcare diagnostic services at your doorstep. We provide NABL certified lab tests with home sample collection.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageCircle, Users].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-text-dark mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "All Tests", "All Packages", "Find a Lab", "Download Reports", "Investor Relations"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-lg font-bold text-text-dark mb-6">Health Categories</h4>
            <ul className="space-y-4">
              {["Full Body Checkup", "Diabetes Care", "Women Health", "Heart Health", "Thyroid Profile", "Vitamin Profile"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-text-dark mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-500">123 Healthcare Plaza, Medical District, Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-500">+91 1800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-500">support@alyseek.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center md:text-left">
          <p>© 2024 Alyseek Healthcare Services. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
