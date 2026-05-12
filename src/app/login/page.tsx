"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Lock, ChevronRight, ArrowLeft } from "lucide-react";

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 py-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold">
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>

      <div className="w-full max-w-md" data-aos="zoom-in">
        <div className="bg-white rounded-[3rem] shadow-premium p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-lg shadow-primary/20">
              A
            </div>
            <h1 className="text-3xl font-bold text-text-dark mb-2">Welcome Back</h1>
            <p className="text-gray-500">Log in to manage your health reports and bookings.</p>
          </div>

          {/* Toggle Method */}
          <div className="flex bg-gray-50 p-1.5 rounded-2xl mb-8">
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                loginMethod === "phone" ? "bg-white text-primary shadow-sm" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Phone Number
            </button>
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                loginMethod === "email" ? "bg-white text-primary shadow-sm" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Email Address
            </button>
          </div>

          <form className="space-y-6">
            {loginMethod === "phone" ? (
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-dark ml-2">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold border-r border-gray-200 pr-3">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full pl-16 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-dark ml-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-sm font-bold text-text-dark">Password</label>
                    <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>
            )}

            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2 group">
              {loginMethod === "phone" ? "Send OTP" : "Log In"}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-sm text-gray-400 font-medium">Or continue with</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-sm">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="text-center mt-10 text-gray-500 font-medium">
            Don't have an account?{" "}
            <Link href="#" className="text-primary font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
