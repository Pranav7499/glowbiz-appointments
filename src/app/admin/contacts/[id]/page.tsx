"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: number;
};

export default function ContactDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [contact, setContact] = useState<Contact | null>(null);
  const [contactId, setContactId] = useState<string>("");

  // ✅ unwrap params safely
  useEffect(() => {
    params.then((p) => setContactId(p.id));
  }, [params]);

  useEffect(() => {
    if (!contactId) return;

    fetch(`/api/admin/contacts/${contactId}`)
      .then((res) => res.json())
      .then(setContact);
  }, [contactId]);

  if (!contact) {
    return (
      <div className="p-10 text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4ECDC] py-10">
      <div className="max-w-4xl mx-auto px-6">

        <Link
          href="/admin/contacts"
          className="text-blue-600 font-medium"
        >
          ← Back to messages
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">
          <h1 className="text-3xl font-serif text-gray-900">
            {contact.subject}
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Received on{" "}
            {new Date(contact.createdAt).toLocaleString()}
          </p>

          <hr className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">
              Message
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {contact.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
