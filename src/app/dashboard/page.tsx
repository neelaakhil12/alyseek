"use client";

import React from "react";
import { User, Package, FileText, MapPin, CreditCard, Bell, LogOut, ChevronRight, Download, Clock, CheckCircle2 } from "lucide-react";

const DashboardPage = () => {
  const stats = [
    { label: "Active Bookings", value: "2", icon: Package, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Completed Tests", value: "12", icon: CheckCircle2, color: "text-teal-500", bg: "bg-teal-50" },
    { label: "Reports Ready", value: "8", icon: FileText, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Saved Addresses", value: "3", icon: MapPin, color: "text-orange-500", bg: "bg-orange-50" },
  ];

  const recentBookings = [
    {
      id: "BK1024",
      package: "Full Body Health Checkup",
      date: "May 12, 2024",
      status: "Scheduled",
      price: "₹1,499",
    },
    {
      id: "BK1018",
      package: "Vitamin D & B12 Profile",
      date: "Apr 28, 2024",
      status: "Completed",
      price: "₹899",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-24 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-4">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-gray-100 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-black mx-auto mb-6 border-4 border-white shadow-xl">
                AK
              </div>
              <h2 className="text-2xl font-bold text-text-dark">Akhil Kumar</h2>
              <p className="text-gray-400 text-sm font-medium mb-8">akhil@example.com</p>
              <button className="w-full bg-gray-50 text-text-dark py-4 rounded-2xl font-bold text-sm hover:bg-primary hover:text-white transition-all">
                Edit Profile
              </button>
            </div>

            <nav className="bg-white rounded-[2.5rem] p-4 shadow-soft border border-gray-100 space-y-1">
              {[
                { label: "Dashboard", icon: User, active: true },
                { label: "My Bookings", icon: Package },
                { label: "Test Reports", icon: FileText },
                { label: "Manage Address", icon: MapPin },
                { label: "Payment History", icon: CreditCard },
                { label: "Notifications", icon: Bell },
                { label: "Log Out", icon: LogOut, danger: true },
              ].map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                    item.active 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : item.danger ? "text-red-400 hover:bg-red-50" : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5" />
                    <span className="font-bold text-sm">{item.label}</span>
                  </div>
                  {!item.danger && <ChevronRight className={`w-4 h-4 ${item.active ? "text-white" : "text-gray-300"}`} />}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50 flex flex-col items-center text-center gap-4 group hover:shadow-premium transition-all">
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-text-dark">{stat.value}</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-text-dark">Recent Bookings</h3>
                <button className="text-primary font-bold text-sm hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {recentBookings.map((booking, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-gray-100 gap-6">
                    <div className="flex items-center gap-6 text-center md:text-left">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                        <Package className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-dark">{booking.package}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {booking.date}
                          </span>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">ID: {booking.id}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="font-black text-text-dark">{booking.price}</p>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                          booking.status === "Scheduled" ? "bg-blue-100 text-blue-600" : "bg-teal-100 text-teal-600"
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-md transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Tips / CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-[2.5rem] p-10 border border-primary/10 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-block bg-white px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest shadow-sm">Health Tip</div>
                <h3 className="text-2xl font-bold text-text-dark">Stay Hydrated and Active</h3>
                <p className="text-gray-500 max-w-xl">Drinking enough water and maintaining a consistent activity level can improve your lipid profile and blood sugar levels significantly.</p>
                <button className="text-primary font-bold flex items-center gap-2 group">
                  Read More Tips <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center opacity-10 -z-10">
                <FileText className="w-64 h-64 -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
