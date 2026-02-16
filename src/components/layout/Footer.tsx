"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    // Simulate submit / API call
    console.log("SUBSCRIBE DATA:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <footer className="bg-[#2B2423] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div>
          <h3 className="text-2xl font-serif mb-4">
            Glow <span className="text-[#E0B84C]">Biz</span>
          </h3>

          <p className="text-sm text-white/70 leading-relaxed mb-6">
            Where style meets precision. Experience premium hair care and spa
            treatments designed to refine your look and rejuvenate your spirit.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* ================= EXPLORE ================= */}
        <div>
          <h4 className="text-[#E0B84C] font-semibold mb-4">Explore</h4>
          <ul className="space-y-3 text-sm text-white/70 mb-6">

            <li>
              <Link href="/services" className="hover:text-yellow-400 transition">
                Our Services
              </Link>
            </li>

            <li>
              <Link href="/stylists" className="hover:text-yellow-400 transition">
                Meet the Stylists
              </Link>
            </li>
            
            {/* <li>
              <Link href="/pricing" className="hover:text-yellow-400 transition">
                Pricing
              </Link>
            </li> */}

            <li>
              <Link href="/lookbook" className="hover:text-yellow-400 transition">
                Lookbook
              </Link>
            </li>

            <li>
              <Link href="/careers" className="hover:text-yellow-400 transition">
                Join the Team
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= VISIT US ================= */}
        <div>
          <h4 className="text-[#E0B84C] font-semibold mb-4">Visit Us</h4>

          <p className="text-sm font-semibold text-white mb-1">Location</p>
          <p className="text-sm text-white/80 mb-4">
            Gauri Complex, 601, Sector 11,<br />
            CBD Belapur, Navi Mumbai<br />
            Maharashtra 400614
          </p>

          <p className="text-sm font-semibold text-white mb-1">Contact</p>
          <p className="text-sm text-white/80 mb-4">
            +91 9619901999<br />
            info@aryahsworld.com
          </p>

          <p className="text-sm text-white/80">
            <strong>Hours</strong><br />
            Mon – Sat: 10:00 AM – 8:00 PM<br />
            Sun: 11:00 AM – 5:00 PM
          </p>
        </div>

        {/* ================= SUBSCRIBE ================= */}
        <div>
          <h4 className="text-[#E0B84C] font-semibold mb-4">
            Stay Stylish
          </h4>

          <p className="text-sm text-white/70 mb-4">
            Subscribe for exclusive offers and style tips.
          </p>

          {submitted ? (
            <p className="text-green-400 text-sm">
              ✅ Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 text-sm placeholder:text-white/50 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 text-sm placeholder:text-white/50 focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 text-sm placeholder:text-white/50 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#E0B84C] text-black py-2 rounded-md font-semibold hover:bg-[#f0c85a] transition"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-white/50 mt-3">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Glow Biz. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
