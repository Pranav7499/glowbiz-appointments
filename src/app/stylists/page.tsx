"use client";

import { Instagram, Mail, Star } from "lucide-react";

export default function StylistsPage() {
  return (
    <main className="bg-[#F7F2EB] text-[#3A2E24]">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
          Meet the Team
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#7A6A5E]">
          Our talented team of professionals is dedicated to helping you look and
          feel your absolute best. Each specialist brings unique expertise and a
          passion for exceptional service.
        </p>
        <div className="w-16 sm:w-20 h-px bg-[#C8B8A8] mx-auto mt-8 sm:mt-10" />
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          {[
            {
              initials: "SL",
              name: "Sophia Laurent",
              role: "Master Stylist & Founder",
              desc:
                "With over 15 years of experience in luxury hair styling, Sophia brings Parisian elegance to every client.",
              tags: ["Balayage", "Color Correction", "Bridal Styling"],
              cert: "L'Oréal Color Expert Certified",
            },
            {
              initials: "MC",
              name: "Marcus Chen",
              role: "Senior Hair Colorist",
              desc:
                "Renowned for innovative color techniques and stunning natural highlights.",
              tags: ["Highlights", "Ombré", "Creative Color"],
              cert: "Wella Master Colorist",
            },
            {
              initials: "ER",
              name: "Elena Rossi",
              role: "Spa Director & Esthetician",
              desc:
                "Elena blends traditional European skincare with modern innovations.",
              tags: ["Facials", "Chemical Peels", "Anti-Aging"],
              cert: "International Dermal Institute Graduate",
            },
            {
              initials: "JW",
              name: "James Wright",
              role: "Men's Grooming Specialist",
              desc:
                "Expert in modern and classic men’s grooming with razor-sharp precision.",
              tags: ["Beard Design", "Precision Cuts", "Hot Towel Shaves"],
              cert: "Master Barber Certified",
            },
            {
              initials: "AN",
              name: "Aria Nakamura",
              role: "Nail Artist & Technician",
              desc:
                "Creates wearable nail art from minimalist elegance to bold designs.",
              tags: ["Nail Art", "Gel Extensions", "Japanese Manicure"],
              cert: "OPI Nail Art Champion 2023",
            },
            {
              initials: "DK",
              name: "David Kim",
              role: "Massage Therapist",
              desc:
                "Combines Eastern and Western massage traditions for deep healing.",
              tags: ["Deep Tissue", "Hot Stone", "Aromatherapy"],
              cert: "Licensed Massage Therapist",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#FBF8F4] rounded-3xl p-8 sm:p-10 text-center shadow-sm"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#4B3A2A] flex items-center justify-center text-white text-xl sm:text-2xl font-serif mb-5 sm:mb-6">
                {s.initials}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl">{s.name}</h3>
              <p className="text-xs sm:text-sm text-[#8A7A6C] mb-3 sm:mb-4">
                {s.role}
              </p>

              <p className="text-sm text-[#6F6156] mb-5 sm:mb-6">
                {s.desc}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-5 sm:mb-6">
                {s.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full bg-[#EDE6DD]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#7A6A5E] mb-5 sm:mb-6">
                🎓 {s.cert}
              </p>

              <div className="flex justify-center gap-5">
                <Instagram size={18} />
                <Mail size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-3 sm:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base text-[#7A6A5E] mb-10 sm:mb-12">
          Don’t just take our word for it — hear from our valued clients.
        </p>

        {[
          "Sophia understood exactly what I wanted and gave me the best haircut I've ever had.",
          "The facial treatment with Elena was incredibly relaxing and transformative.",
          "Marcus created the most beautiful balayage for my hair.",
        ].map((t, i) => (
          <div
            key={i}
            className="bg-[#FBF8F4] rounded-3xl p-8 sm:p-10 mb-6 sm:mb-8"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array(5)
                .fill(0)
                .map((_, s) => (
                  <Star key={s} size={16} fill="#4B3A2A" />
                ))}
            </div>
            <p className="italic text-sm sm:text-lg mb-3 sm:mb-4">
              “{t}”
            </p>
            <p className="text-xs sm:text-sm text-[#7A6A5E]">— Client</p>
          </div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#4B3A2A] text-white text-center py-20 sm:py-24 px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl mb-4 sm:mb-6">
          Ready to Experience Excellence?
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-lg mb-8 sm:mb-10 text-white/80">
          Book an appointment with one of our talented professionals and discover
          the difference expertise and dedication can make.
        </p>

        <button className="bg-white text-[#4B3A2A] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition text-sm sm:text-base">
          Book Your Appointment
        </button>
      </section>

    </main>
  );
}
