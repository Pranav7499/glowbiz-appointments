"use client";

import { Search, MapPin, Calendar } from "lucide-react";

export default function HeroSearch() {
  return (
    <section className="w-full bg-[#F8F2EA] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif text-[#2B145E] mb-4">
          Discover the Best Salons, Spas,
          <br /> and Wellness Services
        </h1>

        <p className="text-[#3A2F6B] text-lg mb-12">
          Your one-stop destination for beauty, relaxation, and self-care.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-xl flex items-center overflow-hidden max-w-5xl mx-auto">
          
          {/* Service */}
          <div className="flex items-center gap-3 px-6 py-5 w-full">
            <Search className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Service or Salon"
              className="w-full text-gray-800 placeholder-gray-400 outline-none bg-transparent text-base"
            />
          </div>

          <div className="h-8 w-px bg-gray-200" />

          {/* Location */}
          <div className="flex items-center gap-3 px-6 py-5 w-full">
            <MapPin className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Location"
              className="w-full text-gray-800 placeholder-gray-400 outline-none bg-transparent text-base"
            />
          </div>

          <div className="h-8 w-px bg-gray-200" />

          {/* Date */}
          <div className="flex items-center gap-3 px-6 py-5 w-full">
            <Calendar className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Select Date"
              className="w-full text-gray-800 placeholder-gray-400 outline-none bg-transparent text-base"
            />
          </div>

          {/* Search Button */}
          <button
            className="bg-[#2B145E] text-white px-10 py-6 rounded-r-full font-semibold text-lg hover:bg-[#3A1B7A] transition"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
