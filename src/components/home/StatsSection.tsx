"use client";

import React, { useEffect, useRef, useState } from "react";
import { Clock, Heart, UserCheck, Globe } from "lucide-react";

const stats = [
  { icon: Clock, value: 1000000, suffix: "M+", display: "1M+", label: "TESTS CONDUCTED" },
  { icon: Heart, value: 500000, suffix: "K+", display: "500K+", label: "HAPPY FAMILIES" },
  { icon: UserCheck, value: 200, suffix: "+", display: "200+", label: "EXPERT DOCTORS" },
  { icon: Globe, value: 100, suffix: "+", display: "100+", label: "CITIES COVERED" },
];

function useCountUp(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatItem({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const raw = useCountUp(stat.value, 2000, started);

  const formatted = () => {
    if (stat.value >= 1000000) return `${(raw / 1000000).toFixed(raw >= 1000000 ? 0 : 1)}M+`;
    if (stat.value >= 1000) return `${Math.floor(raw / 1000)}K+`;
    return `${raw}+`;
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-1">
        <stat.icon className="w-7 h-7 text-emerald-300" />
      </div>
      <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
        {started ? formatted() : "0"}
      </span>
      <span className="text-xs font-bold text-emerald-300 uppercase tracking-[0.2em]">
        {stat.label}
      </span>
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section ref={ref} className="bg-[#0a4a2f] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center py-4 lg:py-0">
              <StatItem stat={stat} started={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
