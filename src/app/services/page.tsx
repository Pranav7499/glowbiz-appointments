
"use client";

import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Flower2,
  Palette,
  User,
  Clock,
  Award,
  Heart,
  Leaf,
  Phone,
  MapPin,
} from "lucide-react";

export default function OurServicesPage() {
  return (
    <main className="bg-[#FBF7F2] text-[#2B2423]">

      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 sm:pb-24 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">
          Our Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#6B625B] leading-relaxed">
          Discover a sanctuary of beauty and wellness. Our curated services are
          designed to nurture your body, elevate your spirit, and reveal your
          most radiant self.
        </p>
        <div className="w-16 h-[1px] bg-[#CBBBA0] mx-auto mt-8 sm:mt-10" />
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              icon: <Scissors size={24} />,
              title: "Hair",
              desc: "Expert cuts, styling, and color treatments tailored to enhance your natural beauty and personal style.",
            },
            {
              icon: <Sparkles size={24} />,
              title: "Facial",
              desc: "Rejuvenating facial treatments using premium products to restore your skin's natural radiance and glow.",
            },
            {
              icon: <Flower2 size={24} />,
              title: "Body",
              desc: "Luxurious body treatments and massages designed to relax, restore, and revitalize your senses.",
            },
            {
              icon: <Palette size={24} />,
              title: "Makeup",
              desc: "Professional makeup artistry for any occasion, from subtle everyday looks to glamorous transformations.",
            },
            {
              icon: <User size={24} />,
              title: "Grooming",
              desc: "Refined grooming services including precision beard styling, skincare, and tailored treatments for gentlemen.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-sm"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EFE8DD] flex items-center justify-center mx-auto mb-5 sm:mb-6 text-[#5C4A3D]">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B625B] leading-relaxed">
                {item.desc}
              </p>
              <div className="w-10 h-[1px] bg-[#CBBBA0] mx-auto mt-5 sm:mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#F6F1EA] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B625B] mb-12 sm:mb-16">
            We're committed to providing an exceptional experience from the
            moment you walk through our doors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
            {[
              {
                icon: <Clock />,
                title: "Flexible Scheduling",
                desc: "Book appointments that fit your lifestyle with our convenient online booking system.",
              },
              {
                icon: <Award />,
                title: "Expert Professionals",
                desc: "Our team of certified specialists brings years of experience and ongoing training.",
              },
              {
                icon: <Heart />,
                title: "Personalized Care",
                desc: "Every treatment is customized to your unique needs and preferences.",
              },
              {
                icon: <Leaf />,
                title: "Premium Products",
                desc: "We use only the finest organic and cruelty-free products for your wellbeing.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-5 sm:mb-6 text-[#5C4A3D]">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#6B625B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED TREATMENTS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-4 sm:mb-6">
          Featured Treatments
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-[#6B625B] mb-12 sm:mb-16">
          Our most beloved services, handpicked for those seeking the ultimate
          in relaxation and rejuvenation.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {[
            { title: "Signature Relaxation Massage", desc: "A deeply soothing full-body massage combining Swedish and aromatherapy techniques.", time: "60 min" },
            { title: "Hydrating Facial Treatment", desc: "Intensive moisture therapy to restore and rejuvenate dehydrated skin.", time: "45 min" },
            { title: "Balayage Color Service", desc: "Hand-painted highlights for a natural, sun-kissed look that grows out beautifully.", time: "120 min" },
            { title: "Gentleman's Grooming Package", desc: "Complete grooming experience including haircut, beard trim, and facial treatment.", time: "75 min" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm"
            >
              <div>
                <h3 className="font-serif text-lg sm:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B625B]">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[#6B625B] text-sm">
                  <Clock size={16} /> {item.time}
                </div>
                <Link
                  href="/book"
                  className="px-6 py-2 rounded-full border border-[#CBBBA0] hover:bg-[#EFE8DD] transition text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#4B3A2B] text-white py-20 sm:py-28 text-center px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
          Begin Your Journey to Wellness
        </h2>
        <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-10 sm:mb-12">
          Take the first step towards a more relaxed, radiant you. Our team is
          ready to create a personalized experience tailored just for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="tel:+919619901999"
            className="inline-flex items-center gap-3 bg-[#EFE8DD] text-[#2B2423] px-8 py-3 rounded-full font-medium hover:bg-white transition text-sm sm:text-base"
          >
            <Phone size={18} /> Call Us Today
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white/40 px-8 py-3 rounded-full hover:bg-white/10 transition text-sm sm:text-base"
          >
            <MapPin size={18} /> Visit Our Spa
          </Link>
        </div>
      </section>

      {/* ================= HOURS ================= */}
      <section className="bg-[#FBF7F2] py-12 sm:py-16 text-center text-[#6B625B] tracking-widest text-xs sm:text-sm">
        EXPERIENCE TRANQUILITY
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-10">
          <span>Mon – Fri: 9am – 8pm</span>
          <span>Sat – Sun: 10am – 6pm</span>
        </div>
      </section>

    </main>
  );
}
