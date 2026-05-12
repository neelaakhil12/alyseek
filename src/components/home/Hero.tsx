"use client";

import React from "react";
import Link from "next/link";
import { Search, ChevronRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const searchTags = [
    "Allergy",
    "Bone",
    "Cancer",
    "Fitness",
    "Heart",
    "Hormones",
    "Sugar",
    "Full Body Checkup",
  ];

  const features = [
    "NABL Certified Labs",
    "Trained Phlebotomists",
    "Hygienic Home Collection",
    "Trusted by Thousands",
  ];

  return (
    <section className="relative overflow-hidden pt-4 pb-24 md:pt-20 md:pb-32">
      {/* Background Blobs - hidden on mobile */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10 hidden md:block"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Left */}
          <div className="flex-1 text-center lg:text-left space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary font-semibold text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Health Checkups Made Simple
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-dark leading-tight">
              Aarogyam <br />
              <span className="gradient-text">Health Checkups</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Book NABL certified diagnostic tests and Aarogyam full body checkups online with free home sample collection.
            </p>

            {/* Prominent Search Bar */}
            <div className="max-w-2xl mx-auto lg:mx-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-white rounded-[1.8rem] shadow-xl overflow-hidden border border-gray-100">
                <Search className="absolute left-6 text-gray-400 w-6 h-6" />
                <input 
                  type="text" 
                  placeholder="Search for tests (e.g. Thyroid, CBC, Vitamin D)..." 
                  className="w-full pl-16 pr-4 py-6 text-lg focus:outline-none font-medium"
                />
                <button className="bg-primary text-white px-8 py-4 mr-2 rounded-2xl font-bold hover:shadow-lg transition-all hidden sm:block">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="/tests" 
                className="w-full sm:w-auto bg-text-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                Book a Test
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/packages" 
                className="w-full sm:w-auto bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all flex items-center justify-center"
              >
                Aarogyam Packages
              </Link>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 md:flex items-center gap-4 lg:gap-6 pt-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-text-dark">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Search Tags */}
            <div className="pt-6 space-y-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Common Searches</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {searchTags.map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:border-primary hover:text-primary hover:shadow-sm transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Right - hidden on mobile */}
          <div className="flex-1 relative hidden lg:block" data-aos="fade-left">
            <div className="relative z-10">
              <img 
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1715433000~exp=1715436600~hmac=..." 
                alt="Healthcare Professional"
                className="w-full max-w-xl mx-auto drop-shadow-2xl"
              />
              
              {/* Floating Cards - hidden on mobile, visible on lg+ */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-premium animate-bounce-slow flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Reports Status</p>
                  <p className="text-sm font-bold text-text-dark">Reports Delivered</p>
                </div>
              </div>

              <div className="absolute bottom-10 -right-4 bg-white p-4 rounded-2xl shadow-premium animate-bounce-slow-delayed flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Trusted By</p>
                  <p className="text-sm font-bold text-text-dark">10,000+ Families</p>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-2 border-primary/5 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        .animate-bounce-slow-delayed {
          animation: bounce-slow 4s infinite ease-in-out 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

const User = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default Hero;
