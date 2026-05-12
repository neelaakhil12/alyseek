"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the home collection process work?",
    answer: "Once you book a test, our certified phlebotomist will arrive at your provided address at the scheduled time. They will follow all safety protocols to collect your sample and transport it to our NABL certified lab.",
  },
  {
    question: "When will I receive my reports?",
    answer: "Most reports are delivered within 24-48 hours. You will receive an SMS and email notification once your reports are ready. You can also download them from your Alyseek dashboard.",
  },
  {
    question: "Are the labs NABL certified?",
    answer: "Yes, all our partner laboratories are NABL (National Accreditation Board for Testing and Calibration Laboratories) certified, ensuring the highest standards of accuracy and quality.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and popular digital wallets.",
  },
  {
    question: "Do I need to fast before my blood test?",
    answer: "Fasting requirements depend on the specific test. For full body checkups and sugar tests, 8-12 hours of fasting is usually required. Our system will provide specific instructions for your selected tests.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500" data-aos="fade-up" data-aos-delay="100">
            Find answers to common questions about our services and booking process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className={cn(
                "border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300",
                openIndex === i ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-white hover:bg-gray-50"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-text-dark">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <div
                className={cn(
                  "px-8 transition-all duration-300 overflow-hidden",
                  openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                )}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
