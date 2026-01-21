"use client";

import React, { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setSuccess("Message sent successfully");
    setForm({ name: "", email: "", phone: "", message: "" });

  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-[#F4ECDC] py-12">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-2">
            We’d love to hear from you
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-6 space-y-5"
        >
          <Input
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <Textarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-sm">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D6B24E] text-white py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: any;
  type?: string;
};

function Input({ label, type = "text", ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...props}
        required
        className="w-full border border-[#D6B24E] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D6B24E]"
      />
    </div>
  );
}

function Textarea({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <textarea
        {...props}
        required
        rows={4}
        className="w-full border border-[#D6B24E] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D6B24E]"
      />
    </div>
  );
}
