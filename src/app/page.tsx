import React from "react";
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import HealthCategories from "@/components/home/HealthCategories";
import CategorySlider from "@/components/home/CategorySlider";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQ from "@/components/home/FAQ";
import TrustBanner from "@/components/home/TrustBanner";
import { popularPackages, allergyPackages, bonePackages, cancerPackages, fitnessPackages, fullBodyPackages, hairFallPackages, heartPackages, hormonePackages, individualTests, otherProfiles, diabeticProfiles } from "@/data/packages";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <StatsSection />
      <TrustBanner />
      
      <CategorySlider 
        title="Allergy Packages" 
        subtitle="Specialized profiles for food, inhalant, and drug allergies."
        packages={allergyPackages}
      />

      <CategorySlider 
        title="Bone Health" 
        subtitle="Comprehensive profiles for Arthritis, Bone density, and Muscle vitality."
        packages={bonePackages}
      />

      <CategorySlider 
        title="Cancer Screening" 
        subtitle="Advanced profiles for early detection of cancer risk markers for Men and Women."
        packages={cancerPackages}
      />

      <CategorySlider 
        title="Fitness & Sports" 
        subtitle="Performance-focused profiles for athletes and fitness enthusiasts."
        packages={fitnessPackages}
      />

      <CategorySlider 
        title="Full Body Health Check up" 
        subtitle="Comprehensive health checkup packages and diagnostic tests for total wellness."
        packages={fullBodyPackages}
      />

      <CategorySlider 
        title="Hair Fall Screening" 
        subtitle="Identify the root causes of hair loss with our advanced screening profiles."
        packages={hairFallPackages}
      />

      <CategorySlider 
        title="Heart Health" 
        subtitle="Specialized cardiac profiles to monitor cholesterol and heart disease risk factors."
        packages={heartPackages}
      />

      <CategorySlider 
        title="Hormone Profiles" 
        subtitle="Specialized screenings for PCOD, Infertility, and overall hormonal balance for Men and Women."
        packages={hormonePackages}
      />

      <CategorySlider 
        title="Individual Tests" 
        subtitle="Quick access to specific diagnostic tests, from Vitamin profiles to advanced PCR screenings."
        packages={individualTests}
      />

      <CategorySlider 
        title="Other Profiles" 
        subtitle="Specialized health profiles covering STD, Anemia, Hepatitis, and Skin Care diagnostics."
        packages={otherProfiles}
      />

      <CategorySlider 
        title="Sugar Profiles (Diabetic)" 
        subtitle="Comprehensive diabetic screening and monitoring packages for proactive blood sugar management."
        packages={diabeticProfiles}
      />

      <CategorySlider 
        title="Most Booked Health Packages" 
        subtitle="Our most trusted and frequently selected diagnostic profiles for general wellness."
        packages={popularPackages}
      />
      <CategorySlider 
        title="Aarogyam Series" 
        subtitle="Our most popular comprehensive health checkup packages for proactive wellness."
        packages={popularPackages.filter(p => p.title.includes("Aarogyam"))}
      />
      
      <HealthCategories />
      
      <HowItWorks />
      
      <CategorySlider 
        title="Thyrocare Specialist Profiles" 
        subtitle="Targeted tests for specific health concerns like Diabetes, Heart, and Vitamin deficiencies."
        packages={popularPackages.filter(p => !p.title.includes("Aarogyam"))}
      />

      <WhyChooseUs />

      <FAQ />

    </div>
  );
}
