"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { CartProvider } from "@/context/CartContext";
import SplashScreen from "./ui/SplashScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = React.useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Changed to false to allow re-triggering during testing
      easing: "ease-out-cubic",
      offset: 100,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    if (!showSplash) {
      // Small delay to ensure DOM is rendered and visible before refreshing AOS
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [showSplash]);

  return (
    <CartProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className={showSplash ? "hidden" : "block"}>
        <Navbar />
        <main className="min-h-screen pt-20 overflow-x-hidden">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
