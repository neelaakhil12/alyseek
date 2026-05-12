"use client";

import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import HowItWorksSection from "@/components/home/HowItWorks";
import { Search, CalendarCheck, Home, FileText, ChevronRight, PlayCircle } from "lucide-react";

const HowItWorksPage = () => {
  const detailedSteps = [
    {
      title: "1. Select your Test",
      description: "Browse from our extensive menu of 1000+ tests and health packages. You can search by test name, category, or health concern.",
      icon: Search,
    },
    {
      title: "2. Schedule Home Collection",
      description: "Choose a date and time slot that works best for you. Our phlebotomists are available as early as 6:00 AM.",
      icon: CalendarCheck,
    },
    {
      title: "3. Professional Sample Collection",
      description: "Our certified healthcare professional will arrive at your home with a specialized kit to collect your sample hygienically.",
      icon: Home,
    },
    {
      title: "4. Rapid Lab Processing",
      description: "Samples are transported in temperature-controlled containers to our NABL certified central processing laboratory.",
      icon: PlayCircle,
    },
    {
      title: "5. Digital Report Delivery",
      description: "Once processed, your reports are verified by qualified doctors and sent to you via Email, SMS, and your Alyseek Dashboard.",
      icon: FileText,
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader 
        title="How Alyseek Works" 
        subtitle="Simple, secure, and professional diagnostic services delivered right to your doorstep."
      />

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-text-dark leading-tight">
              Experience the Future of <br />
              <span className="text-primary">Diagnostic Services</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We have re-imagined the diagnostic journey to make it as convenient as ordering food online. No more traveling to labs or waiting in long queues.
            </p>
            <div className="space-y-6">
              {detailedSteps.map((step, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-50 shadow-soft hover:shadow-premium transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-dark mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="sticky top-28">
              <div className="bg-gradient-to-br from-primary to-accent rounded-[3rem] p-1 overflow-hidden shadow-2xl">
                <img 
                  src="/images/how-it-works.png" 
                  alt="Home Diagnostic Collection" 
                  className="w-full h-auto rounded-[2.8rem]"
                />
              </div>
              <div className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-10 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-premium border border-gray-100 max-w-[220px] md:max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="font-bold text-text-dark text-base md:text-lg">Reports Ready!</p>
                </div>
                <p className="text-xs md:text-sm text-gray-500 leading-tight md:leading-normal">Your Vitamin D profile report has been successfully generated and is ready for download.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      
      {/* Call to Action */}
      <section className="container mx-auto px-4 pt-12">
        <div className="bg-text-dark rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-0"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">Ready to prioritize your health?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto relative z-10">Join thousands of happy customers who trust Alyseek for their regular health checkups.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
              Book a Test Now <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              View All Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default HowItWorksPage;
