"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

type Category = "all" | "hair" | "makeup";

interface LookbookItem {
  id: number;
  category: "hair" | "makeup";
  title: string;
  description: string;
  aspect: "tall" | "wide" | "square";
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
  { id: 1, category: "hair", title: "Sun-Kissed Balayage", description: "Natural blonde highlights", aspect: "tall" },
  { id: 2, category: "makeup", title: "Bridal Elegance", description: "Soft romantic tones", aspect: "square" },
  { id: 3, category: "hair", title: "Textured Bob", description: "Modern choppy bob", aspect: "wide" },
  { id: 4, category: "makeup", title: "Editorial Glam", description: "Bold editorial look", aspect: "tall" },
  { id: 5, category: "hair", title: "Copper Dreams", description: "Dimensional copper tones", aspect: "square" },
  { id: 6, category: "makeup", title: "Natural Glow", description: "Everyday radiance", aspect: "wide" },
  { id: 7, category: "hair", title: "Romantic Waves", description: "Soft cascading waves", aspect: "tall" },
  { id: 8, category: "makeup", title: "Smoky Sophistication", description: "Modern smoky eye", aspect: "square" },
];

const FILTERS = [
  { id: "all" as Category, label: "All Looks", icon: Sparkles },
  { id: "hair" as Category, label: "Hair Styles", icon: Camera },
  { id: "makeup" as Category, label: "Makeup Looks", icon: Sparkles },
];

export default function LookbookPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === active);

  const aspectClass = (aspect: LookbookItem["aspect"]) => {
    if (aspect === "tall") return "row-span-2";
    if (aspect === "wide") return "col-span-2";
    return "";
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF]">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl text-[#2B2423] mb-4 sm:mb-6"
        >
          Our Lookbook
        </motion.h1>

        <p className="text-sm sm:text-base md:text-lg text-[#4A403A] max-w-2xl mx-auto">
          Explore our portfolio of stunning transformations and discover
          inspiration for your next look.
        </p>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full border transition
                ${
                  active === filter.id
                    ? "bg-[#4B3A2A] text-white border-[#4B3A2A]"
                    : "bg-transparent text-[#2B2423] border-[#2B2423]/30"
                }`}
            >
              <filter.icon size={14} />
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] gap-4">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group
                ${aspectClass(item.aspect)}
                ${item.category === "hair" ? "bg-[#D6CEC4]" : "bg-[#EFE6D6]"}`}
            >
              <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full capitalize text-[#2B2423]">
                {item.category}
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#2B2423]/20 flex items-center justify-center">
                  <Camera size={24} className="text-[#2B2423]/40" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="font-serif text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 sm:py-24 px-4 sm:px-6">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-[#2B2423] mb-4">
          Ready for Your Transformation?
        </h2>

        <p className="text-sm sm:text-base text-[#4A403A] mb-8 sm:mb-10 max-w-xl mx-auto">
          Book a consultation with one of our expert stylists and let us bring
          your vision to life.
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <button className="bg-[#4B3A2A] text-white px-8 sm:px-10 py-3 text-sm sm:text-base rounded-full">
            Book Consultation
          </button>
          <button className="border border-[#2B2423]/30 text-[#2B2423] px-8 sm:px-10 py-3 text-sm sm:text-base rounded-full">
            Contact Us
          </button>
        </div>
      </section>

    </main>
  );
}
