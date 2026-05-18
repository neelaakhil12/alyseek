"use client";

import React, { useState, useMemo } from "react";
import { Search, FlaskConical, ChevronRight, SlidersHorizontal, X, Menu } from "lucide-react";
import PackageCard from "@/components/ui/PackageCard";
import { allPackages, categoryMapping } from "@/data/packages";

const categories = Object.keys(categoryMapping);

// Map each category to a relevant emoji icon
const categoryIcons: Record<string, string> = {
  "All":              "🔬",
  "Allergy":          "🌿",
  "Bone":             "🦴",
  "Cancer":           "🎗️",
  "Fitness":          "🏃",
  "Hair Fall":        "💆",
  "Heart":            "❤️",
  "Hormones":         "🧬",
  "Sugar":            "🩸",
  "Full Body Checkup":"✅",
  "Individual":       "🧪",
  "Other Profiles":   "📋",
};

const TestsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]       = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── PAGE HEADER ── */}
      <div className="bg-white border-b border-gray-100 shadow-soft">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FlaskConical className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-text-dark">
              Diagnostic Tests &amp; Packages
            </h1>
          </div>
          <p className="text-gray-400 text-sm font-medium ml-13 pl-0.5">
            Explore our comprehensive range of diagnostic tests across all health categories.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tests &amp; packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── MOBILE: Open Sidebar Toggle ── */}
      <div className="md:hidden sticky top-[72px] z-30 bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between shadow-sm">
        <span className="text-sm font-bold text-text-dark">
          {filteredPackages.length} tests found
          {activeCategory !== "All" && (
            <span className="ml-2 text-primary">— {activeCategory}</span>
          )}
        </span>
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-xl text-xs font-bold"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Categories
        </button>
      </div>

      {/* ── MOBILE SIDEBAR DRAWER ── */}
      {mobileSidebarOpen && (
        <>
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-2xl flex flex-col md:hidden">
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-white">
              <span className="font-black text-text-dark text-base">Browse Categories</span>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:bg-emerald-50 hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>{categoryIcons[cat] || "🔬"}</span>
                    {cat}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeCategory === cat ? "text-white" : "text-gray-300"}`} />
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* ── MAIN LAYOUT: Sidebar + Cards Grid ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 flex gap-8 items-start">

        {/* LEFT SIDEBAR — desktop only */}
        <aside className="hidden md:flex flex-col w-60 xl:w-64 shrink-0 sticky top-[90px] self-start">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">

            {/* Sidebar Header */}
            <div className="px-5 py-4 border-b border-gray-50 bg-gradient-to-r from-emerald-50 to-white">
              <h2 className="text-xs font-extrabold text-text-dark uppercase tracking-widest flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
                Categories
              </h2>
            </div>

            {/* Category List */}
            <nav className="px-3 py-3 space-y-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 group ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-500 hover:bg-emerald-50/80 hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-sm">{categoryIcons[cat] || "🔬"}</span>
                    <span>{cat}</span>
                  </span>
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                    activeCategory === cat
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                  }`}>
                    {(categoryMapping[cat] || []).length}
                  </span>
                </button>
              ))}
            </nav>

            {/* Sidebar CTA */}
            <div className="px-5 py-4 border-t border-gray-50 bg-emerald-50/40">
              <p className="text-[10px] text-gray-400 font-semibold text-center leading-relaxed">
                🏠 Free home collection available on all tests
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <div className="flex-1 min-w-0">

          {/* Results Count Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-text-dark font-black text-lg">{filteredPackages.length}</span>
              <span className="text-gray-400 font-medium text-sm">
                {filteredPackages.length === 1 ? "test" : "tests"} found
              </span>
              {activeCategory !== "All" && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {categoryIcons[activeCategory]} {activeCategory}
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full">
                  &quot;{searchQuery}&quot;
                </span>
              )}
            </div>
            {(activeCategory !== "All" || searchQuery) && (
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-primary transition"
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </div>

          {/* Product Cards Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} {...pkg} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-3xl">
                🔍
              </div>
              <h3 className="text-xl font-black text-text-dark mb-2">No tests found</h3>
              <p className="text-gray-400 font-medium text-sm">
                Try a different search term or select another category.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
