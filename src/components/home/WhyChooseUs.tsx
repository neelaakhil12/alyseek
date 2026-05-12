"use client";

import React from "react";
import { ShieldCheck, Zap, Home, DollarSign, Award, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "NABL Certified Labs",
      description: "All samples are processed in state-of-the-art certified laboratories.",
      icon: Award,
    },
    {
      title: "Home Sample Collection",
      description: "Our professional phlebotomists collect samples from your doorstep.",
      icon: Home,
    },
    {
      title: "Fast & Accurate Reports",
      description: "Get digital reports on your dashboard within 24-48 hours.",
      icon: Zap,
    },
    {
      title: "Affordable Pricing",
      description: "Save up to 60% compared to traditional labs without compromising quality.",
      icon: DollarSign,
    },
    {
      title: "Secure Data",
      description: "Your health data is encrypted and secure with us at all times.",
      icon: ShieldCheck,
    },
    {
      title: "Flexible Slots",
      description: "Book early morning or late evening slots as per your convenience.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Left */}
          <div className="flex-1 space-y-8" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-text-dark leading-tight">
              Why Choose <span className="text-primary">Alyseek</span> for Your Health?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We are committed to providing the highest quality diagnostic services with the convenience of home collection.
            </p>
            
            <div className="space-y-6">
              {[
                "100% Secure & Private",
                "Verified Healthcare Professionals",
                "Latest Technology & Equipment",
                "Transparent Pricing No Hidden Charges"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Right */}
          <div className="flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
