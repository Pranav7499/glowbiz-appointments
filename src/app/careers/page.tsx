"use client";

import { Send, Heart, Clock, Award, Users } from "lucide-react";

export default function JoinOurTeamPage() {
  return (
    <main className="bg-[#FBF7F2] text-[#2B2423]">

      {/* ================= HERO ================= */}
      <section className="text-center py-16 sm:py-20 md:py-24 px-6">
        <p className="tracking-widest text-xs sm:text-sm mb-3">CAREERS</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6">
          Join Our Team
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6B625B]">
          Be part of a passionate team dedicated to making every client feel beautiful.
          We're always looking for talented individuals who share our vision.
        </p>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-[#F6F1EA]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6">
            Why Work With Us
          </h2>

          <p className="text-base sm:text-lg text-[#6B625B] mb-12 sm:mb-16">
            Join a team that values creativity, growth, and well-being
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: <Heart />, title: "Health & Wellness", desc: "Comprehensive health coverage and complimentary spa treatments" },
              { icon: <Clock />, title: "Flexible Schedule", desc: "Work-life balance with flexible hours and generous PTO" },
              { icon: <Award />, title: "Growth & Training", desc: "Continuous education, certifications, and career advancement" },
              { icon: <Users />, title: "Team Culture", desc: "Supportive environment with team events and celebrations" },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-full bg-white flex items-center justify-center text-[#5C4A3D]">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg sm:text-xl mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#6B625B]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
            Open Positions
          </h2>
          <p className="text-base sm:text-lg text-[#6B625B]">
            Explore our current opportunities and find your perfect role
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "Senior Hair Stylist",
              desc: "Experienced stylist with 5+ years in cutting, coloring, and styling.",
              tags: ["5+ years experience", "Color certification preferred", "Strong portfolio"],
            },
            {
              title: "Makeup Artist",
              desc: "Create stunning looks for bridal, editorial, and everyday clients.",
              tags: ["3+ years experience", "Bridal experience", "Professional kit"],
            },
            {
              title: "Junior Stylist",
              desc: "Perfect for recent graduates looking to grow with hands-on training.",
              tags: ["Cosmetology license", "Passion for learning", "Team player"],
            },
            {
              title: "Spa Receptionist",
              desc: "Be the welcoming face of our salon and manage client experiences.",
              tags: ["Customer service", "Excellent phone manner", "Organized"],
            },
          ].map((job) => (
            <div
              key={job.title}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm text-left"
            >
              <h3 className="text-xl sm:text-2xl font-serif mb-3">
                {job.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B625B] mb-5">
                {job.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-[#EFE8DD] text-xs sm:text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLY FORM ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3">
            Apply Now
          </h2>
          <p className="text-base sm:text-lg text-[#6B625B]">
            Ready to join our team? Fill out the form below and we'll be in touch
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            <Field label="Full Name *" placeholder="Your name" />
            <Field label="Email *" placeholder="your@email.com" />

            <Field label="Phone Number" placeholder="(555) 123-4567" />
            <Field label="Position of Interest *" placeholder="e.g. Senior Hair Stylist" />

          </div>

          <div className="mt-5 sm:mt-6">
            <Field label="Years of Experience *" placeholder="e.g. 5 years" />
          </div>

          <div className="mt-5 sm:mt-6">
            <label className="block text-xs sm:text-sm mb-2 text-[#6B625B]">
              Tell Us About Yourself *
            </label>

            <textarea
              placeholder="Share your experience, skills, and why you'd like to join our team..."
              className="w-full min-h-[140px] rounded-2xl bg-[#FBF7F2] border border-[#E5DED5]
                         px-5 sm:px-6 py-4 text-sm sm:text-base
                         placeholder-[#9B8E82]
                         resize-none overflow-hidden focus:outline-none
                         focus:ring-1 focus:ring-[#CBBBA0]"
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = el.scrollHeight + "px";
              }}
            />
          </div>

          <button className="mt-8 sm:mt-10 w-full bg-[#4B3A2A] text-white py-3 sm:py-4 rounded-full
                             text-base sm:text-lg flex items-center justify-center gap-3
                             hover:opacity-90 transition">
            <Send size={18} />
            Submit Application
          </button>
        </div>
      </section>

      {/* ================= FOOT NOTE ================= */}
      <section className="py-12 sm:py-16 text-center text-sm sm:text-base text-[#6B625B]">
        <p>Have questions about working with us?</p>
        <p className="mt-2 underline cursor-pointer">
          Contact us for more information →
        </p>
      </section>
    </main>
  );
}

/* ================= REUSABLE FIELD ================= */
function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs sm:text-sm mb-2 text-[#6B625B]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-full bg-[#FBF7F2] border border-[#E5DED5]
                   px-5 sm:px-6 py-3 sm:py-[14px]
                   text-sm sm:text-base
                   placeholder-[#9B8E82]
                   focus:outline-none focus:ring-1 focus:ring-[#CBBBA0]"
      />
    </div>
  );
}
