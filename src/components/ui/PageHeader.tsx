import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

const PageHeader = ({ title, subtitle, gradient = true }: PageHeaderProps) => {
  return (
    <section className={`py-16 md:py-24 ${gradient ? "bg-gradient-to-b from-primary/5 to-transparent" : "bg-white"}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6" data-aos="fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-500 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
