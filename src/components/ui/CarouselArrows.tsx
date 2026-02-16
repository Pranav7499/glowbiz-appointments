"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecommendedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-[#1F1449]">
          Recommended
        </h2>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-[#F6D5C9] flex items-center justify-center hover:opacity-80"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-[#F6D5C9] flex items-center justify-center hover:opacity-80"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src="/recommended-1.jpg"
              alt="Salon"
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-[#F2E9FF] text-[#2B145E]">
                Body Treatments
              </span>

              <h3 className="font-semibold text-[#1F1449]">
                Ksenses World Ladies Salon
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Dubai Hills Mall
              </p>

              <div className="mt-2 text-sm text-gray-600">
                ⭐ 5.0 (10)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
