"use client";

import { useState } from "react";

/* ---------------- Types ---------------- */

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  placeholder?: string;
};

type Errors = {
  email?: string;
  phone?: string;
};

/* ---------------- Helpers ---------------- */

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) =>
  /^[0-9]{10}$/.test(phone);

/* ---------------- Page ---------------- */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [robotChecked, setRobotChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  /* -------- Input Change -------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: value && !validateEmail(value)
          ? "Enter a valid email address"
          : undefined,
      }));
    }

    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: value && !validatePhone(value)
          ? "Phone number must be 10 digits"
          : undefined,
      }));
    }
  };

  /* -------- Submit -------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!robotChecked) {
      alert("Please confirm you are not a robot");
      return;
    }

    if (!validateEmail(form.email)) {
      setErrors({ email: "Enter a valid email address" });
      return;
    }

    if (!validatePhone(form.phone)) {
      setErrors({ phone: "Phone number must be 10 digits" });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
      setRobotChecked(false);
    } catch (err: any) {
      alert(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-[#F4ECDC] py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-serif text-gray-900">
            Send Us a Message
          </h1>
          <p className="text-gray-800 mt-2">
            We usually respond in less than 2 hours.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 space-y-6"
          style={{ opacity: 1 }}
        >

          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="FULL NAME"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />

            <div>
              <Input
                label="EMAIL ADDRESS"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Input
                label="PHONE NUMBER"
                name="phone"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <Input
            label="SUBJECT / SERVICE"
            name="subject"
            placeholder="Haircut / Spa / Bridal"
            value={form.subject}
            onChange={handleChange}
          />

          <Textarea
            label="Message"
            name="message"
            placeholder="Tell us about your requirement..."
            value={form.message}
            onChange={handleChange}
          />

          {/* Robot */}
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-gray-300 bg-white">
            <input
              type="checkbox"
              checked={robotChecked}
              onChange={(e) => setRobotChecked(e.target.checked)}
              className="w-6 h-6 rounded-md border-gray-400"
            />
            <span className="text-gray-900 font-medium">
              I'm not a robot
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full mt-6 flex items-center justify-center gap-3
              bg-[#1E5EFF] text-white tracking-wide
              py-5 rounded-2xl text-lg font-semibold
              shadow-lg hover:opacity-90
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? "Sending..." : "Send Message"}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 11l18-8-8 18-2-7-7-3z"
              />
            </svg>
          </button>

        </form>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Input({
  label,
  type = "text",
  value = "",
  ...props
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        {...props}
        required
        className="
          w-full bg-white text-gray-900
          border border-gray-300
          rounded-2xl px-5 py-4
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-600
        "
      />
    </div>
  );
}

function Textarea({
  label,
  value = "",
  ...props
}: {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  name: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-1">
        {label}
      </label>
      <textarea
        value={value}
        {...props}
        rows={5}
        className="
          w-full bg-white text-gray-900
          border border-gray-300
          rounded-2xl px-5 py-4
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-600
        "
      />
    </div>
  );
}
