
"use client";

import Image from "next/image";

export default function BusinessSection() {
  return (
    <section className="bg-[#F4ECDC] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.1fr_1.4fr] gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Salonist for Business
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We connect you with top-notch salons, spas and professionals to
            help you look and feel your best. Salonist is a management system
            for salons, spa, fitness and barber shops to effectively manage
            their appointments and various other operations.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            We connect you with top-notch salons, spas, and professionals to
            help you look and feel your best.
          </p>

          {/* CTA */}
          <button className="bg-[#1E5EFF] text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Learn more
          </button>

          {/* Rating */}
          <div className="mt-8">
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Excellent 5/5
            </p>
            <div className="flex gap-1 text-yellow-400 text-xl">
              ★ ★ ★ ★ ★
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">
          <div className="relative w-[780px] h-[420px]">
            <Image
              src="/business-dashboard.png"
              alt="Salonist Business Dashboard"
              fill
              priority
              // className="object-contain rounded-3xl shadow-xl"
              className="object-contain p-6"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
