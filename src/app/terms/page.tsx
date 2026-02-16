'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="bg-[#F6F1EA] min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#5B4633] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white mb-10"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Terms & Conditions
          </h1>

          <p className="text-lg text-white/80">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16 text-[#2B2423]">

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              By accessing and using our salon and spa services, website, or booking
              platform, you agree to be bound by these Terms & Conditions. If you do
              not agree, please refrain from using our services.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              2. Services Offered
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              We provide a range of beauty, hair, skincare, nail, and spa services.
              All services are subject to availability and may vary by location.
              We reserve the right to modify, suspend, or discontinue any service
              at any time without prior notice.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              3. Appointments & Cancellations
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              Appointments can be booked online, by phone, or in person. We require
              at least 24 hours' notice for cancellations or rescheduling. Late
              cancellations or no-shows may incur a fee of up to 50% of the service
              cost. Repeated no-shows may result in a requirement to prepay for
              future appointments.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              4. Pricing & Payment
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              All prices are listed in the local currency and are subject to change
              without prior notice. Payment is due at the time of service unless
              otherwise arranged. We accept cash, major credit/debit cards, and
              approved digital payment methods. Gratuities are not included and are
              at the client's discretion.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              5. Gift Cards & Promotions
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              Gift cards are non-refundable and cannot be exchanged for cash.
              Promotional offers cannot be combined with other discounts unless
              explicitly stated. We reserve the right to modify or end promotions
              at any time.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              6. Health & Safety
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              Clients must inform their stylist or therapist of any allergies,
              medical conditions, or sensitivities before receiving services. We
              maintain strict hygiene and safety standards in accordance with local
              regulations. We are not liable for adverse reactions resulting from
              undisclosed conditions.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              7. Liability
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              While we take every precaution to deliver quality services, we are
              not liable for any dissatisfaction with results that fall within the
              normal range of professional outcomes. Claims regarding service
              quality must be made within 48 hours of the appointment. Our
              liability is limited to the cost of the service provided.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              All content on our website, including text, images, logos, and
              designs, is the property of our salon and is protected by copyright
              law. Unauthorized reproduction or use of our content is strictly
              prohibited.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              We reserve the right to update these Terms & Conditions at any time.
              Changes will be posted on our website and become effective
              immediately upon publication. Continued use of our services
              constitutes acceptance of the updated terms.
            </p>
            <hr className="mt-10 border-[#E5DED5]" />
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-serif mb-4">
              10. Contact Us
            </h2>
            <p className="text-[#6B625B] leading-relaxed">
              If you have any questions about these Terms & Conditions, please
              contact us through our website or visit us in person at any of our
              salon locations.
            </p>
          </div>

          {/* ================= BOTTOM BOX ================= */}
          <div className="bg-[#EDE6DC] rounded-2xl p-10 text-center mt-20">
            <p className="text-[#6B625B] mb-6">
              By using our services, you acknowledge that you have read and agree
              to these Terms & Conditions.
            </p>

            <div className="flex justify-center gap-8 text-[#2B2423] font-medium">
              <Link href="/privacy" className="underline hover:opacity-70">
                Privacy Policy
              </Link>

              <Link href="/" className="underline hover:opacity-70">
                Return Home
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}


