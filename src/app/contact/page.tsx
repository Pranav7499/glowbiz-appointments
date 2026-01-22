

"use client";

import { useState } from "react";
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


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone:"",
    subject: "",
    message: "",
  });

  const [robotChecked, setRobotChecked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Submit Clicked", form);

  if (!robotChecked) {
    alert("Please confirm you are not a robot");
    return;
  }

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

    alert("Message sent successfully ✅");

    // Reset form
    setForm({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

    setRobotChecked(false);

  } catch (err: any) {
    console.error(err);
    alert(err.message || "Failed to send message");
  }
};


  return (
    <div className="min-h-screen bg-[#F4ECDC] py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-serif text-gray-900">
            Send Us a Message
          </h1>
          <p className="text-gray-600 mt-2">
            We usually respond in less than 2 hours.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-6 space-y-5"
        >

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="FULL NAME"
              placeholder="John Doe"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="EMAIL ADDRESS"
              placeholder="john@example.com"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
  label="PHONE NUMBER"
  placeholder="9876543210"
  name="phone"
  value={form.phone}
  onChange={handleChange}
/>

          </div>

          {/* Subject */}
          <Input
            label="SUBJECT / SERVICE"
            placeholder="Haircut / Spa / Bridal"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />

          {/* Message */}
          <Textarea
            label="Message"
            placeholder="Tell us about your requirement..."
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          {/* Robot checkbox */}
          {/* Robot checkbox */}
<div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-gray-300 bg-white">
  <input
    type="checkbox"
    checked={robotChecked}
    onChange={(e) => setRobotChecked(e.target.checked)}
    className="
      w-6 h-6
      rounded-md
      border-gray-400
      text-blue-600
      focus:ring-blue-600
    "
  />
  <span className="text-gray-900 font-medium">
    I'm not a robot
  </span>
</div>


          {/* Button */}
          <button
  type="submit"
  className="
    w-full
    mt-6
    flex
    items-center
    justify-center
    gap-3
    bg-[#1E5EFF]
    text-white
    py-5
    rounded-2xl
    text-lg
    font-semibold
    shadow-lg
    hover:opacity-90
    transition
  "
>
  Send Message

  {/* Paper Plane Icon */}
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

/* ---------- Components ---------- */

function Input({
  label,
  type = "text",
  value = "",
  ...props
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}          // ✅ force controlled
        {...props}
        required
        className="
          w-full
          border
          border-gray-300
          rounded-2xl
          px-5
          py-4
          text-gray-900
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-600
        "
      />
    </div>
  );
}

type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
};


function Textarea({ label, value = "", ...props }: TextareaProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <textarea
        value={value}      // ✅ always controlled
        {...props}
        rows={5}
        className="
          w-full
          border
          border-gray-300
          rounded-2xl
          px-5
          py-4
          text-gray-900
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-600
        "
      />
    </div>
  );
}


