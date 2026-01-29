
  // "use client";

  // import { useEffect, useState } from "react";

  // type Offer = {
  //   id: string;
  //   name: string;
  //   price: number;
  //   discount: number;
  //   quantity: number;
  //   couponCode: string;
  //   description: string;
  // };

  // export default function OffersPage() {
  //   const [offers, setOffers] = useState<Offer[]>([]);
  //   const [couponInputs, setCouponInputs] = useState<Record<string, string>>({});
  //   const [appliedOffer, setAppliedOffer] = useState<string | null>(null);

  //   useEffect(() => {
  //     fetch("/api/offers")
  //       .then((res) => res.json())
  //       .then(setOffers);
  //   }, []);

  //   const handleApply = (offer: Offer) => {
  //     const enteredCode = couponInputs[offer.id];

  //     if (!enteredCode) {
  //       alert("Please enter coupon code");
  //       return;
  //     }

  //     if (enteredCode !== offer.couponCode) {
  //       alert("Invalid coupon code");
  //       return;
  //     }

  //     if (offer.quantity <= 0) {
  //       alert("Offer out of stock");
  //       return;
  //     }

  //     setAppliedOffer(offer.id);

  //     alert(
  //       `Coupon applied!\nFinal price: ₹${
  //         offer.price - (offer.price * offer.discount) / 100
  //       }`
  //     );
  //   };

  //   return (
  //     <div className="min-h-screen bg-[#F4ECDC] py-16">
  //       <div className="max-w-6xl mx-auto px-6">

  //         <h1 className="text-5xl font-serif text-gray-900 mb-10">
  //           Salon Offers
  //         </h1>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //           {offers.map((offer) => {
  //             const discountedPrice =
  //               offer.price - (offer.price * offer.discount) / 100;

  //             return (
  //               <div
  //                 key={offer.id}
  //                 className="bg-white rounded-3xl p-6 shadow-sm"
  //               >
  //                 <h2 className="text-xl font-semibold text-gray-900">
  //                   {offer.name}
  //                 </h2>

  //                 <p className="text-gray-500 mt-1">
  //                   {offer.description}
  //                 </p>

  //                 <div className="mt-4">
  //                   <span className="line-through text-gray-400 mr-2">
  //                     ₹{offer.price}
  //                   </span>
  //                   <span className="text-2xl font-bold text-gray-900">
  //                     ₹{discountedPrice}
  //                   </span>
  //                   <span className="ml-2 text-green-600 font-medium">
  //                     ({offer.discount}% OFF)
  //                   </span>
  //                 </div>

  //                 <p className="text-sm text-gray-500 mt-2">
  //                   Available: {offer.quantity}
  //                 </p>

  //                 {/* Coupon Input */}
  //                 <input
  //                   type="text"
  //                   placeholder="Enter coupon code"
  //                   value={couponInputs[offer.id] || ""}
  //                   onChange={(e) =>
  //                     setCouponInputs({
  //                       ...couponInputs,
  //                       [offer.id]: e.target.value.toUpperCase(),
  //                     })
  //                   }
  //                   className="
  //   w-full
  //   mt-4
  //   border
  //   border-gray-400
  //   rounded-xl
  //   px-4
  //   py-3
  //   text-gray-900
  //   bg-white
  //   placeholder-gray-400
  //   placeholder-opacity-100
  //   focus:outline-none
  //   focus:ring-2
  //   focus:ring-black
  //   focus:border-black
  // "

  //                 />

  //                 <button
  //                   onClick={() => handleApply(offer)}
  //                   className="
  //                     w-full
  //                     mt-4
  //                     bg-black
  //                     text-white
  //                     py-3
  //                     rounded-xl
  //                     font-semibold
  //                     hover:opacity-90
  //                   "
  //                 >
  //                   {appliedOffer === offer.id
  //                     ? "Offer Applied ✓"
  //                     : "Apply Offer"}
  //                 </button>
  //               </div>
  //             );
  //           })}
  //         </div>

  //       </div>
  //     </div>
  //   );
  // }


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
  };

  export default function OffersPage() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [couponInputs, setCouponInputs] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);

    /* Fetch offers */
    useEffect(() => {
      fetch("/api/offers")
        .then((res) => res.json())
        .then(setOffers)
        .finally(() => setLoading(false));
    }, []);

    /* Apply Offer */
    const handleApplyOffer = async (offer: Offer) => {
  const enteredCoupon =
    couponInputs[offer.id]?.trim().toUpperCase() || "";
  const actualCoupon = offer.couponCode.trim().toUpperCase();

  if (!enteredCoupon) {
    alert("Please enter coupon code");
    return;
  }

  if (enteredCoupon !== actualCoupon) {
    alert("Invalid coupon code ❌");
    return;
  }

  if (offer.quantity <= 0) {
    alert("Offer out of stock ❌");
    return;
  }

  try {
    const res = await fetch("/api/offers", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: offer.id }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    // Update UI instantly
    setOffers((prev) =>
      prev.map((o) =>
        o.id === offer.id
          ? { ...o, quantity: o.quantity - 1 }
          : o
      )
    );

    const discountedPrice =
      offer.price - (offer.price * offer.discount) / 100;

    alert(`Coupon applied ✅\nFinal Price: ₹${discountedPrice}`);
  } catch (err: any) {
    alert(err.message || "Failed to apply offer");
  }
};


    if (loading) {
      return (
        <div className="min-h-screen bg-[#F4ECDC] flex items-center justify-center">
          <p className="text-lg">Loading offers...</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#F4ECDC] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-10">Salon Offers</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer) => {
              const discountedPrice =
                offer.price - (offer.price * offer.discount) / 100;

              return (
                <div
                  key={offer.id}
                  className="bg-white rounded-3xl shadow-sm p-8"
                >
                  {/* Title */}
                  <h2 className="text-2xl font-semibold">
                    {offer.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {offer.description}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-center gap-3">
                    <span className="line-through text-gray-400">
                      ₹{offer.price}
                    </span>
                    <span className="text-3xl font-bold">
                      ₹{discountedPrice}
                    </span>
                    <span className="text-green-600 font-medium">
                      ({offer.discount}% OFF)
                    </span>
                  </div>

                  <p className="text-gray-700 mt-2">
                    Available: {offer.quantity}
                  </p>

                  {/* Coupon Input */}
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponInputs[offer.id] || ""}
                    onChange={(e) =>
                      setCouponInputs({
                        ...couponInputs,
                        [offer.id]: e.target.value,
                      })
                    }
                    className="
                      w-full
                      mt-5
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      text-gray-900
                      placeholder:text-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-black
                      bg-white
                    "
                  />

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyOffer(offer)}
                    className="
                      w-full
                      mt-4
                      bg-black
                      text-white
                      py-4
                      rounded-xl
                      text-lg
                      font-semibold
                      hover:opacity-90
                    "
                  >
                    Apply Offer
                  </button>
                </div>
              );
            })}

            {offers.length === 0 && (
              <p className="text-gray-600">
                No offers available
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
