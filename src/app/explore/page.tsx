

"use client";

import { useState } from "react";

import HeroSearch from "@/components/home/HeroSearch";
import DownloadAppSection from "@/components/home/DownloadAppSection";
import BusinessSection from "@/components/home/BusinessSection";
import Footer from "@/components/layout/Footer";
import RecommendedCarousel from "@/components/ui/CarouselArrows";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import { CATEGORIES } from "@/constants/locations";
import { ArrowLeft, ArrowRight } from "lucide-react";




/* ======================
   DATA
====================== */

const COUNTRIES = {
  IND: {
    name: "India",
    cities: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Delhi",
      "Jammu and Kashmir",
      "Ladakh",
      "Chandigarh",
      "Puducherry",
      "Andaman and Nicobar Islands",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
    ],
  },

  UAE: {
    name: "United Arab Emirates",
    cities: [
      "Abu Dhabi",
      "Dubai",
      "Sharjah",
      "Ajman",
      "Umm Al Quwain",
      "Ras Al Khaimah",
      "Fujairah",
    ],
  },
};


const FEATURES = [
  {
    title: "Verified Salons & Spas",
    desc: "Only trusted and verified partners",
  },
  {
    title: "Instant Booking",
    desc: "Book your appointment in seconds",
  },
  {
    title: "Best Offers",
    desc: "Exclusive deals & discounts",
  },
];

const TESTIMONIALS = [
  {
    name: "Henry",
    location: "New York, USA",
    text:
      "Since moving to a new city, Salonist has been my go-to for finding top salons.",
  },
  {
    name: "David",
    location: "Los Angeles, USA",
    text:
      "Salonist offers the best booking experience. Everything is so easy!",
  },
  {
    name: "Mark",
    location: "Vancouver, Canada",
    text:
      "Finding and booking appointments has never been easier.",
  },
];

/* ======================
   PAGE
====================== */

export default function ExplorePage() {
  const [country, setCountry] = useState<"IND" | "UAE">("IND");

  return (
    <div className="bg-[#FBF7F2]">

      {/* ================= HERO ================= */}
      <HeroSearch />

      {/* ================= RECOMMENDED ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <RecommendedCarousel />
      </section>

      {/* ================= COUNTRY TABS ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto pb-6">
          {(Object.keys(COUNTRIES) as Array<"IND" | "UAE">).map((key) => (
            <button
              key={key}
              onClick={() => setCountry(key)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition
                ${
                  country === key
                    ? "bg-[#2B145E] text-white"
                    : "bg-white text-[#2B145E]"
                }`}
            >
              {COUNTRIES[key].name}
            </button>
          ))}
        </div>
      </section>

     {/* ================= CITY / SERVICES ================= */}
<section className="max-w-7xl mx-auto px-6 pt-6 pb-16 relative">

  {/* LEFT ARROW */}
 <button
  onClick={() =>
    document.getElementById("city-scroll")?.scrollBy({
      left: -360,
      behavior: "smooth",
    })
  }
  className="hidden lg:flex absolute left-[-14px] top-[130px]
             w-11 h-11 rounded-full
             bg-[#F4D6C9]
             items-center justify-center
             shadow-[0_6px_14px_rgba(0,0,0,0.12)]
             z-20 hover:scale-105 transition"
>
  <ArrowLeft size={20} strokeWidth={2} className="text-[#1F1449]" />
</button>






  {/* RIGHT ARROW */}
<button
  onClick={() =>
    document.getElementById("city-scroll")?.scrollBy({
      left: 360,
      behavior: "smooth",
    })
  }
  className="hidden lg:flex absolute right-[-14px] top-[130px]
             w-11 h-11 rounded-full
             bg-[#F4D6C9]
             items-center justify-center
             shadow-[0_6px_14px_rgba(0,0,0,0.12)]
             z-20 hover:scale-105 transition"
>
  <ArrowRight size={20} strokeWidth={2} className="text-[#1F1449]" />
</button>






  {/* SCROLLABLE CONTENT */}
  <div
    id="city-scroll"
    className="flex gap-20 overflow-x-auto pb-4 scrollbar-hide"
  >
    {COUNTRIES[country].cities.map((state) => (
      <div key={state} className="min-w-[240px]">

        {/* STATE NAME */}
        <h3 className="text-lg font-semibold text-[#1F1449] mb-4">
          {state}
        </h3>

        <ul className="space-y-2">
          {CATEGORIES.map((category) => (
            <li
              key={`${category}-${state}`}
              className="text-[#3A2F6B] text-sm cursor-pointer
                         hover:text-[#2B145E] hover:underline transition"
            >
              {category} in {state}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>




      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-serif text-[#1F1449] text-center mb-14">
    Why Choose Salonist
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {FEATURES.map((f) => (
      <div
        key={f.title}
        className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-center"
      >
        <h3 className="font-semibold text-lg text-[#1F1449] mb-3">
          {f.title}
        </h3>
        <p className="text-sm text-[#3A2F6B] leading-relaxed">
          {f.desc}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ================= HOW IT WORKS ================= */}
      {/* ================= HOW IT WORKS ================= */}
<HowItWorksSection />


      {/* ================= TESTIMONIALS ================= */}
<section className="bg-[#FBF6EF]">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-serif text-center mb-12 text-[#1F1449]">
      Clients Review
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t) => (
        <div
          key={t.name}
          className="bg-white rounded-2xl p-6 shadow-md"
        >
          <div className="text-yellow-400 mb-3 text-lg">
            ★★★★★
          </div>

          <p className="mb-4 text-gray-700 leading-relaxed">
            {t.text}
          </p>

          <p className="font-semibold text-gray-900">
            {t.name}
          </p>

          <p className="text-sm text-gray-600">
            {t.location}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= DOWNLOAD APP ================= */}
      <DownloadAppSection />

      {/* ================= BUSINESS ================= */}
      <BusinessSection />

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}
