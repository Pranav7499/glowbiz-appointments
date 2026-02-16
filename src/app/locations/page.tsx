"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Country = {
  code: "IND" | "UAE";
  name: string;
  image: string;
  states: string[];
};

const COUNTRIES: Country[] = [
  {
    code: "IND",
    name: "India",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200",
    states: [
      "Maharashtra",
      "Delhi",
      "Karnataka",
      "Tamil Nadu",
      "Gujarat",
      "Punjab",
    ],
  },
  {
    code: "UAE",
    name: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    states: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Fujairah",
      "Ras Al Khaimah",
    ],
  },
];

export default function LocationPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleStateSelect = (state: string) => {
    localStorage.setItem("cutpoint_location", state);
    router.push(`/search?loc=${encodeURIComponent(state)}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-[#4a3728] mb-4">
            Choose Your Location
          </h1>
          <p className="text-[#7a6a5e] text-lg">
            Select your country & city to explore salons and spas near you
          </p>
        </div>

        {/* COUNTRY SELECTION */}
        {!selectedCountry && (
          <div className="grid md:grid-cols-2 gap-12">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountry(country)}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_30px_80px_rgba(166,134,93,0.35)] transition-all"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="font-serif text-4xl text-white tracking-wide">
                    {country.name}
                  </h2>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* STATE SELECTION */}
        {selectedCountry && (
          <>
            <button
              onClick={() => setSelectedCountry(null)}
              className="mb-8 text-[#a6865d] font-medium hover:underline"
            >
              ← Back to Countries
            </button>

            <h2 className="font-serif text-3xl text-[#4a3728] mb-10">
              Select a City in {selectedCountry.name}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedCountry.states.map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateSelect(state)}
                  className="
                    bg-white
                    border border-[#a6865d]/30
                    rounded-2xl
                    px-6 py-5
                    text-[#4a3728]
                    font-medium
                    shadow-sm
                    hover:bg-[#a6865d]
                    hover:text-white
                    transition-all
                  "
                >
                  {state}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
