"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PackageCard from "../ui/PackageCard";
import { Package } from "@/data/packages";

interface CategorySliderProps {
  title: string;
  subtitle?: string;
  packages: Package[];
}

const CategorySlider = ({ title, subtitle, packages }: CategorySliderProps) => {

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
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8"
          style={{ overscrollBehaviorX: "contain" }}
          data-aos="fade-up"
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[360px] shrink-0">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
