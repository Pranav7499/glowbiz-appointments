"use client";

import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b0a3d] via-[#5b0f3f] to-[#b91c1c]" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Download the App
          </h2>

          <p className="text-lg text-white/90 max-w-xl mb-6">
            The quickest, easiest way to book appointments and keep track of
            your salon and spa experiences.
          </p>

          <p className="text-sm text-white/80 mb-6">
            Scan the QR code to get the app now
          </p>

          {/* QR + Store Buttons */}
          <div className="flex flex-wrap gap-6 items-center">
            {/* QR Code */}
            <div className="bg-white p-3 rounded-xl">
              <Image
                src="/qr-placeholder.png" // 🔁 replace with real QR later
                alt="QR Code"
                width={120}
                height={120}
              />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col gap-3">
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={160}
                height={48}
              />
              <Image
                src="/app-store.png"
                alt="App Store"
                width={160}
                height={48}
              />
            </div>
          </div>
        </div>

        {/* RIGHT MOBILE MOCKUPS */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[260px] md:w-[300px]">
            <Image
              src="/mobile-1.png"
              alt="Mobile App"
              width={300}
              height={600}
              className="relative z-10"
            />
          </div>

          <div className="relative w-[260px] md:w-[300px] -ml-24 mt-12 hidden md:block">
            <Image
              src="/mobile-2.png"
              alt="Mobile App"
              width={300}
              height={600}
              className="relative z-0 opacity-95"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
