"use client";

import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Users, Target, Shield, Heart, Award, Globe, History, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Tests Conducted", value: "1M+", icon: History },
    { label: "Happy Families", value: "500K+", icon: Heart },
    { label: "Expert Doctors", value: "200+", icon: Award },
    { label: "Cities Covered", value: "100+", icon: Globe },
  ];

  const values = [
    {
      title: "Integrity First",
      description: "We maintain the highest standards of medical ethics and report accuracy.",
      icon: Shield,
    },
    {
      title: "Patient Centric",
      description: "Every decision we make is centered around the comfort and health of our patients.",
      icon: Heart,
    },
    {
      title: "Innovation Driven",
      description: "We use the latest diagnostic technology and AI-driven verified reporting.",
      icon: Target,
    },
    {
      title: "Transparency",
      description: "No hidden costs, no unnecessary tests. Just clear, affordable healthcare.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader 
        title="About Alyseek" 
        subtitle="Empowering millions with accessible, affordable, and accurate diagnostic services."
      />

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://img.freepik.com/free-photo/medical-specialists-working-together-hospital_23-2149209531.jpg" 
                alt="Our Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl max-w-[140px] md:max-w-none">
              <p className="text-2xl md:text-4xl font-black">10+</p>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <div className="inline-block px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary font-bold text-sm">
              OUR STORY
            </div>
            <h2 className="text-4xl font-bold text-text-dark leading-tight">
              A Journey Driven by <br />
              <span className="text-primary">Medical Innovation</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Founded with a vision to democratize healthcare, Alyseek has grown from a small collection center to one of the most trusted diagnostic platforms in the country. 
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              We recognized that the biggest barrier to regular health checkups was inconvenience. By bringing the lab to the doorstep, we have helped over half a million families take a proactive approach to their health.
            </p>
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
              Read Full Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-text-dark py-24 my-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-4" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white">{stat.value}</h3>
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4" data-aos="fade-up">
            Our Core Values
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            The principles that guide every sample collection and every medical report.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-soft hover:shadow-premium transition-all text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
