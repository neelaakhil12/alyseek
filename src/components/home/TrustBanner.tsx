"use client";

import React from "react";
import { Shield, Award, CheckCircle2, FlaskConical } from "lucide-react";

const TrustBanner = () => {
  const certifications = [
    { label: "NABL Accredited", icon: Award },
    { label: "CAP Certified", icon: Shield },
    { label: "ICMR Approved", icon: CheckCircle2 },
    { label: "ISO Certified", icon: FlaskConical },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8">
        {certifications.map((cert, i) => (
          <div key={i} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary">
              <cert.icon className="w-6 h-6" />
            </div>
            <span className="font-bold text-sm text-text-dark uppercase tracking-widest">{cert.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;
