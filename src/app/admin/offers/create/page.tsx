"use client";

import { useState } from "react";

export default function AdminOffersPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    discount: "",
    quantity: "",
    couponCode: "",
    description: "",
    image: "",
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
      const res = await fetch("/api/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Offer created successfully ✅");
      setForm({
        name: "",
        price: "",
        discount: "",
        quantity: "",
        couponCode: "",
        description: "",
        image: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4ECDC] py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-serif text-gray-900">
            Create Salon Offer
          </h1>
          <p className="text-gray-600 mt-2">
            Add discounts and coupons for salon customers
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-8 space-y-6"
        >
          {/* Name */}
          <Input
            label="Offer Name"
            placeholder="Diwali Hair Spa"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          {/* Price & Discount */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Original Price (₹)"
              placeholder="1200"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
            <Input
              label="Discount (%)"
              placeholder="20"
              name="discount"
              value={form.discount}
              onChange={handleChange}
            />
          </div>

          {/* Quantity & Coupon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Available Quantity"
              placeholder="50"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />
            <Input
              label="Coupon Code"
              placeholder="DIWALI20"
              name="couponCode"
              value={form.couponCode}
              onChange={handleChange}
            />
          </div>

          {/* Image URL */}
          <Input
            label="Offer Image URL (optional)"
            placeholder="https://image-link"
            name="image"
            value={form.image}
            onChange={handleChange}
          />

          {/* Description */}
          <Textarea
            label="Offer Description"
            placeholder="Flat 20% off on hair spa services"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-sm">{success}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-[#D6B24E]
              text-white
              py-4
              rounded-2xl
              text-lg
              font-semibold
              shadow-md
              hover:opacity-90
              disabled:opacity-60
            "
          >
            {loading ? "Creating..." : "Create Offer"}
          </button>
        </form>

      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function Input({
  label,
  value,
  ...props
}: {
  label: string;
  value: string;
  [key: string]: any;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <input
        value={value}
        {...props}
        required
        className="
          w-full
          border border-gray-300
          rounded-xl
          px-4 py-3
          text-gray-900
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-[#D6B24E]
        "
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  ...props
}: {
  label: string;
  value: string;
  [key: string]: any;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <textarea
        value={value}
        {...props}
        rows={4}
        required
        className="
          w-full
          border border-gray-300
          rounded-xl
          px-4 py-3
          text-gray-900
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-[#D6B24E]
        "
      />
    </div>
  );
}
