"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, FlaskConical } from "lucide-react";
import PackageCard from "@/components/ui/PackageCard";
import { allPackages, categoryMapping } from "@/data/packages";

const categories = Object.keys(categoryMapping);

const TestsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = useMemo(() => {
    const base =
      activeCategory === "All"
        ? allPackages
        : categoryMapping[activeCategory] || [];

    if (!searchQuery.trim()) return base;

    return base.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-soft">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FlaskConical className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-text-dark">
              Diagnostic Tests & Packages
            </h1>
          </div>
          <p className="text-gray-500 font-medium md:ml-13 md:pl-1 text-sm md:text-base">
            Explore our comprehensive range of diagnostic tests across all health categories.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mt-8">
            <input
              type="text"
              placeholder="Search tests & packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm font-medium shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-[88px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-10">
        {/* Count + active filter */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-text-dark font-black text-lg">
              {filteredPackages.length}
            </span>
            <span className="text-gray-500 font-medium ml-2">
              {filteredPackages.length === 1 ? "test" : "tests"} found
            </span>
            {activeCategory !== "All" && (
              <span className="ml-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                {activeCategory}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <SlidersHorizontal className="w-4 h-4" />
            {activeCategory}
          </div>
        </div>

        {/* Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="max-w-[340px] mx-auto w-full md:max-w-none">
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-black text-text-dark mb-2">
              No tests found
            </h3>
            <p className="text-gray-500 font-medium">
              Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestsPage;
