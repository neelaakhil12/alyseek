"use client";

import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Clock, MessageSquare, ChevronRight, Send, Globe } from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      title: "Call Us",
      value: "1800 123 4567",
      icon: Phone,
      description: "Mon-Sat: 6 AM to 10 PM",
    },
    {
      title: "Email Support",
      value: "support@alyseek.com",
      icon: Mail,
      description: "24/7 Support for reports",
    },
    {
      title: "Corporate Office",
      value: "123 Healthcare Plaza, Delhi",
      icon: MapPin,
      description: "Global HQ, Medical District",
    },
    {
      title: "Social Support",
      value: "@alyseek_support",
      icon: MessageSquare,
      description: "Quick DM for queries",
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader 
        title="Get in Touch" 
        subtitle="We're here to help you with your health checkups, report queries, and home collection scheduling."
      />

      <section className="container mx-auto px-4 -mt-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-premium border border-gray-100" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-text-dark mb-8 flex items-center gap-4">
              <span className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Send className="w-6 h-6" />
              </span>
              Send us a Message
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter mobile number" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-2">Subject</label>
                <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium">
                  <option>Booking Inquiry</option>
                  <option>Report Issue</option>
                  <option>Payment Support</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="lg:col-span-2 space-y-2">
                <label className="text-sm font-bold text-text-dark ml-2">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                ></textarea>
              </div>
              <div className="lg:col-span-2">
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 group">
                  Send Message
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6" data-aos="fade-left">
            {contactMethods.map((method, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-50 shadow-soft hover:shadow-premium transition-all">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <method.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{method.title}</h3>
                    <p className="text-base md:text-lg font-black text-text-dark mb-1 break-all md:break-normal">{method.value}</p>
                    <p className="text-xs md:text-sm text-gray-500 truncate md:whitespace-normal">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-[300px] rounded-[2.5rem] overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Open in Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="container mx-auto px-4 py-12 text-center bg-primary/5 rounded-[3rem]">
        <h3 className="text-2xl font-bold text-text-dark mb-4">Have common questions?</h3>
        <p className="text-gray-500 mb-8">Check our frequently asked questions for instant help.</p>
        <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all">
          Visit FAQ Page <ChevronRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
};

export default ContactPage;
