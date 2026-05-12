"use client";

import React from "react";
import { Search, CalendarCheck, Home, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose Test",
      description: "Search and select diagnostic tests or health packages.",
      icon: Search,
      color: "bg-blue-500",
    },
    {
      title: "Book Online",
      description: "Add address and select a convenient appointment slot.",
      icon: CalendarCheck,
      color: "bg-teal-500",
    },
    {
      title: "Home Collection",
      description: "Our certified healthcare staff collects samples at your home.",
      icon: Home,
      color: "bg-purple-500",
    },
    {
      title: "Get Reports",
      description: "Receive accurate digital reports online within 24-48 hours.",
      icon: FileText,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4" data-aos="fade-up">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Booking a diagnostic test with Alyseek is simple, fast, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative mb-8">
                <div className={`w-24 h-24 rounded-3xl ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute top-0 left-0 w-24 h-24 rounded-3xl bg-gray-100 -rotate-6 -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center font-bold text-text-dark z-20">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
