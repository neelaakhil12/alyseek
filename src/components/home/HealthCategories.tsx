"use client";

import React from "react";
import { categories } from "@/data/packages";

const HealthCategories = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              data-aos="zoom-in"
              data-aos-delay={i * 50}
              className="group bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-premium hover:border-primary/20 transition-all flex flex-col items-center gap-4 w-[140px] md:w-[160px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {cat.icon}
              </div>
              <span className="font-bold text-text-dark text-sm text-center">
                {cat.title}
              </span>
            </button>
          ))}
          <button
            data-aos="zoom-in"
            data-aos-delay={categories.length * 50}
            className="group bg-primary p-6 md:p-8 rounded-3xl shadow-lg shadow-primary/20 transition-all flex flex-col items-center gap-4 w-[140px] md:w-[160px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white text-3xl">
              ➕
            </div>
            <span className="font-bold text-white text-sm text-center">
              More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthCategories;
