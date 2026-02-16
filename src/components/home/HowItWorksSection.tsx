"use client";

import Image from "next/image";

const STEPS = [
  {
    step: 1,
    title: "Search for the service you need or browse categories.",
    image: "/how-it-works/search.png", // add image
  },
  {
    step: 2,
    title: "Discover top-rated professionals and businesses near you.",
    image: "/how-it-works/discover.png",
  },
  {
    step: 3,
    title: "Book your appointment and enjoy a fantastic experience.",
    image: "/how-it-works/book.png",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#FBF7F2]">
      <h2 className="text-4xl font-serif text-center text-[#1F1449] mb-16">
        How It Works
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {STEPS.map((item) => (
          <div
            key={item.step}
            className="relative rounded-3xl bg-gradient-to-br
                       from-[#EEF5EC] to-[#F8EAE4]
                       p-8 flex flex-col items-center text-center"
          >
            {/* Step number */}
            <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full
                            bg-[#8ED1A5] text-white flex items-center justify-center
                            font-semibold">
              {item.step}
            </div>

            {/* Image */}
            <div className="relative w-full h-[220px] mb-6">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-lg text-[#1F1449] max-w-sm">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
