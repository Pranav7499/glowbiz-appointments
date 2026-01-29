
"use client";

import { useEffect, useState } from "react";

type Offer = {
  id: string;
  name: string;
  price: number;
  discount: number;
  quantity: number;
  couponCode: string;
  description: string;
  image?: string;
  createdAt: number;
};

export default function AdminOffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOffers = async () => {
    try {
      const res = await fetch("/api/offers");
      const data = await res.json();
      setOffers(data);
    } catch (err) {
      console.error("Failed to fetch offers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this offer?")) return;

    await fetch("/api/offers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchOffers();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4ECDC] flex items-center justify-center">
        <p className="text-lg text-gray-700">Loading offers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4ECDC] p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-gray-900">
            Admin · Offers
          </h1>
          <p className="text-gray-600 mt-2">
            Manage salon & spa promotional offers
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#FBF3E4]">
              <tr className="text-sm font-semibold text-gray-900">
                <th className="p-4">Offer</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Coupon</th>
                <th>Qty</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {offers.map((offer) => (
                <tr
                  key={offer.id}
                  className="border-b last:border-none hover:bg-[#FFF8EC]"
                >
                  {/* Offer */}
                  <td className="p-4 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden">
                      {offer.image ? (
                        <img
                          src={offer.image}
                          alt={offer.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No Image
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {offer.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate max-w-xs">
                        {offer.description}
                      </p>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="text-gray-800">
                    ₹{offer.price}
                  </td>

                  {/* Discount */}
                  <td className="text-green-700 font-medium">
                    {offer.discount}% OFF
                  </td>

                  {/* Coupon */}
                  <td>
                    <span className="px-3 py-1 rounded-full text-xs bg-[#EDE9FE] text-[#4C1D95]">
                      {offer.couponCode}
                    </span>
                  </td>

                  {/* Quantity */}
                  <td className="text-gray-700">
                    {offer.quantity}
                  </td>

                  {/* Date */}
                  <td className="text-gray-600 text-sm whitespace-nowrap">
                    {new Date(offer.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="pr-4 text-right">
                    <button
                      onClick={() => handleDelete(offer.id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {offers.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center p-6 text-gray-600"
                  >
                    No offers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
