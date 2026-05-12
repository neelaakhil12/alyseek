"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import PackageCard from "../ui/PackageCard";
import { Package } from "@/data/packages";

interface CategorySliderProps {
  title: string;
  subtitle?: string;
  packages: Package[];
}

const CategorySlider = ({ title, subtitle, packages }: CategorySliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-text-dark mb-2" data-aos="fade-right">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-500 max-w-xl" data-aos="fade-right" data-aos-delay="100">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4" data-aos="fade-left">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all ml-4">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory px-[10%] md:px-0"
          data-aos="fade-up"
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[380px] snap-center">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
