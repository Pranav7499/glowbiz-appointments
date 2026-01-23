"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  createdAt: number;
};

export default function ContactDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ UNWRAP params (THIS FIXES THE ERROR)
  const { id } = use(params);

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/admin/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4ECDC] flex items-center justify-center">
        <p className="text-gray-600">Loading message...</p>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="min-h-screen bg-[#F4ECDC] flex items-center justify-center">
        <p className="text-gray-600">Message not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4ECDC] py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          href="/admin/contacts"
          className="text-blue-600 font-medium hover:underline inline-block mb-6"
        >
          ← Back to messages
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-md p-8">

          {/* Date */}
          <div className="mb-6">
            <span className="inline-block bg-[#FBF3E4] text-gray-700 text-sm px-4 py-2 rounded-full">
              Received on {new Date(contact.createdAt).toLocaleString()}
            </span>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Detail label="Name" value={contact.name} />
            <Detail label="Email" value={contact.email} />
            <Detail label="Phone" value={contact.phone} />

            {contact.subject && (
              <Detail label="Subject" value={contact.subject} />
            )}
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Message */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Message</p>
            <div className="bg-[#FFF8EC] border border-[#F0E0C0] rounded-2xl p-6 text-gray-800 leading-relaxed whitespace-pre-wrap">
              {contact.message}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- Small Component ---------- */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="font-semibold text-lg text-gray-900">{value}</p>
    </div>
  );
}
