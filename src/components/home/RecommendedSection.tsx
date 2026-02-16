"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const RECOMMENDED = [
  {
    title: "Ksenses World Ladies Salon",
    category: "Body Treatments",
    rating: "0.0",
    reviews: "(0)",
    address: "Fashion Entrance P4 Retail 007 Dubai Hills",
    image: "/recommended/1.png",
  },
  {
    title: "Anamel Beauty & Nail Care Salon",
    category: "Hair Removal",
    rating: "5.0",
    reviews: "(10)",
    address: "Sharjah Gate Building, Industrial Area",
    image: "/recommended/2.png",
  },
  {
    title: "Palorma Beauty Lounge",
    category: "Eyebrows & Eyelashes",
    rating: "5.0",
    reviews: "(8)",
    address: "Casablanca Street, Dubai",
    image: "/recommended/3.png",
  },
  {
    title: "Trend Style Gents Salon",
    category: "Barbershop",
    rating: "0.0",
    reviews: "(0)",
    address: "Ayla Residence, Jumeirah",
    image: "/recommended/4.png",
  },
];


export default function RecommendedSection() {
  return (
    <section className="bg-[#FBF6EF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif text-[#1F1449]">
            Recommended
          </h2>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-[#F1D8CC] flex items-center justify-center">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F1D8CC] flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECOMMENDED.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <span className="inline-block text-xs bg-[#EEDDF3] text-[#2B145E] px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>

                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                <div className="text-sm text-gray-600 mb-2">
                  {item.rating} ⭐ {item.reviews}
                </div>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.address}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
