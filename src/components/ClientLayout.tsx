"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { CartProvider } from "@/context/CartContext";
import SplashScreen from "./ui/SplashScreen";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = React.useState(true);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 0,
      mirror: true, // Allow animations to play when scrolling up too
    });
  }, []);

  // Handle route changes: scroll to top and refresh AOS
  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
      // Small delay to ensure the new page content is rendered
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, showSplash]);

  return (
    <CartProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className={showSplash ? "hidden" : "block transition-opacity duration-500"}>
        <Navbar />
        <main className="min-h-screen pt-20 overflow-x-hidden">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
