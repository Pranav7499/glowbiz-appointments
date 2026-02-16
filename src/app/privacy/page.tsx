'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, User } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* HERO */}
      <section className="bg-[#5B4332] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Privacy Policy
          </h1>

          <p className="text-white/80 text-lg">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* TOP INFO CARDS */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 grid md:grid-cols-4 gap-6 relative z-10">
        {[
          { icon: Shield, title: "Data Protection", desc: "Industry-standard security measures" },
          { icon: Eye, title: "Transparency", desc: "Clear about what we collect" },
          { icon: Lock, title: "Encryption", desc: "Your data is always encrypted" },
          { icon: User, title: "Your Rights", desc: "Full control over your data" }
        ].map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5DED5] text-center">
              <Icon className="mx-auto mb-4 text-[#4B3A2A]" size={28} />
              <h3 className="font-semibold text-[#2B2423] mb-2">{card.title}</h3>
              <p className="text-sm text-[#6B625B]">{card.desc}</p>
            </div>
          );
        })}
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-[#4B3A2A] space-y-14">

        {[
          {
            title: "1. Information We Collect",
            content: `We collect personal information such as name, email, phone number, service history, payment details (processed securely), and device information to improve our services.`
          },
          {
            title: "2. How We Use Your Information",
            content: `We use your information to manage appointments, personalize experiences, process payments, communicate promotions (with consent), and improve our services.`
          },
          {
            title: "3. Information Sharing",
            content: `We may share information with trusted service providers, comply with legal requirements, or during business transfers. We never sell your data.`
          },
          {
            title: "4. Data Security",
            content: `We implement encryption, secure servers, and access restrictions to protect your personal data.`
          },
          {
            title: "5. Your Rights",
            content: `You may request access, correction, deletion, opt-out of marketing, or request data portability.`
          },
          {
            title: "6. Cookies & Tracking",
            content: `We use cookies to enhance browsing experience and analyze traffic. You can manage cookie settings in your browser.`
          },
          {
            title: "7. Children's Privacy",
            content: `Our services are not directed to individuals under 16. We do not knowingly collect data from children.`
          },
          {
            title: "8. Changes to This Policy",
            content: `We may update this Privacy Policy periodically. Updates will be posted with a revised effective date.`
          },
          {
            title: "9. Contact Us",
            content: `If you have questions or concerns regarding this policy, please contact us through our website or visit us at any salon location.`
          }
        ].map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-serif mb-4">{section.title}</h2>
            <p className="text-[#6B625B] leading-relaxed">{section.content}</p>
            <div className="border-b border-[#E5DED5] mt-10"></div>
          </div>
        ))}

        {/* Bottom Box */}
        <div className="bg-[#EFE8DD] p-8 rounded-2xl text-center mt-16">
          <p className="text-[#6B625B] mb-4">
            Your privacy matters to us. If you have any concerns, don't hesitate to reach out.
          </p>

          <div className="flex justify-center gap-6 underline text-[#4B3A2A]">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/">Return Home</Link>
          </div>
        </div>

      </section>
    </main>
  );
}
