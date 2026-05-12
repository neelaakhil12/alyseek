"use client";

import React, { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 50) {
          clearInterval(timer);
          setTimeout(() => {
            setIsRevealed(true);
            setTimeout(() => {
              setShouldExit(true);
              setTimeout(onFinish, 800); // Wait for exit animation
            }, 1000);
          }, 500);
          return 50;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${shouldExit ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-12 flex items-center justify-center">
        {/* White circle backing for logo visibility */}
        <div 
          className={`absolute inset-0 bg-white rounded-full blur-[40px] transition-all duration-1000 ${isRevealed ? 'opacity-30 scale-125' : 'opacity-10 scale-90'}`}
        />
        
        <img
          src="/logo.png"
          alt="Alyseek Logo"
          className={`w-full h-full object-contain transition-all duration-1000 ease-out relative z-10 ${isRevealed ? 'blur-0 scale-110 opacity-100' : 'blur-md scale-90 opacity-80'}`}
        />
      </div>

      {/* Progress Section */}
      <div className={`w-64 md:w-80 transition-all duration-500 ${isRevealed ? 'opacity-0 translate-y-4' : 'opacity-100'}`}>
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white animate-pulse">Alyseek Loading</span>
          <span className="text-sm font-black text-white">{Math.round(progress)}</span>
        </div>
        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden relative border border-white/10">
          <div 
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-100 ease-linear"
            style={{ width: `${(progress / 50) * 100}%` }}
          />
        </div>
      </div>

      <p 
        className={`mt-6 text-[10px] font-bold text-white/60 uppercase tracking-widest transition-opacity duration-500 ${progress > 10 ? 'opacity-100' : 'opacity-0'}`}
      >
        Your Health, Our Priority
      </p>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
