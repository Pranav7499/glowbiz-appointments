// "use client";

// import { useState } from "react";

// export default function GstCalculatorPage() {
//   const [amount, setAmount] = useState("");

//   const gstRate = 18;
//   const cgstRate = 9;
//   const sgstRate = 9;

//   const cgst = amount ? (amount * cgstRate) / 100 : 0;
//   const sgst = amount ? (amount * sgstRate) / 100 : 0;
//   const totalGst = cgst + sgst;
//   const finalAmount = amount ? Number(amount) + totalGst : 0;

//   return (
//     <div className="min-h-screen bg-[#F4ECDC] py-10">
//       <div className="max-w-3xl mx-auto px-6">

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-serif text-gray-800">
//             GST Calculator
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Calculate GST for salon services
//           </p>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">

//           {/* Input */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-800 mb-1">
//               Service Amount (₹)
//             </label>
//             <input
//   type="number"
//   value={amount}
//   onChange={(e) => setAmount(e.target.value)}
//   onWheel={(e) => e.target.blur()}
//   placeholder="Enter service amount"
//   className="
//     w-full
//     border
//     border-[#D6B24E]
//     rounded-xl
//     px-4
//     py-3
//     text-gray-800
//     placeholder:text-gray-400
//     focus:outline-none
//     focus:ring-2
//     focus:ring-[#D6B24E]
//   "
// />

//           </div>

//           {/* GST Info */}
//           <div className="grid grid-cols-2 gap-4">
//             <InfoBox label="GST Rate" value="18%" />
//             <InfoBox label="Service Type" value="Salon" />
//           </div>

//           {/* Calculation */}
//           <div className="bg-[#FBF3E4] rounded-xl p-5 space-y-3 text-gray-700">

//             <Row label="CGST (9%)" value={`₹ ${cgst.toFixed(2)}`} />
//             <Row label="SGST (9%)" value={`₹ ${sgst.toFixed(2)}`} />
//             <hr className="border-gray-300" />

//             <Row
//               label="Total GST"
//               value={`₹ ${totalGst.toFixed(2)}`}
//               bold
//             />
//           </div>

//           {/* Final Amount */}
//           <div className="flex items-center justify-between bg-[#DFF6EA] rounded-xl p-5">
//             <span className="font-medium text-gray-700">
//               Final Bill Amount
//             </span>
//             <span className="text-2xl font-semibold text-[#137A5A]">
//               ₹ {finalAmount.toFixed(2)}
//             </span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// /* ---------- Small Components ---------- */

// function InfoBox({ label, value }) {
//   return (
//     <div className="bg-gray-50 rounded-xl p-4">
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="font-medium text-gray-800">{value}</p>
//     </div>
//   );
// }

// function Row({ label, value, bold }) {
//   return (
//     <div className="flex justify-between items-center">
//       <span
//         className={`text-sm ${
//           bold ? "font-semibold text-gray-800" : "text-gray-600"
//         }`}
//       >
//         {label}
//       </span>
//       <span
//         className={`text-sm ${
//           bold ? "font-semibold text-gray-800" : "text-gray-700"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }



"use client";

export default function GstCalculatorPage() {
  // 🔹 STATIC DATA (simulating backend response)
  const serviceAmount = 1000;

  const cgstRate = 9;
  const sgstRate = 9;

  // 🔹 AUTO CALCULATION FROM STATIC DATA
  const cgst = (serviceAmount * cgstRate) / 100;
  const sgst = (serviceAmount * sgstRate) / 100;
  const totalGst = cgst + sgst;
  const finalAmount = serviceAmount + totalGst;

  return (
    <div className="min-h-screen bg-[#F4ECDC] py-10">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-gray-800">
            GST Calculation for Salon Billing
          </h1>
          {/* <p className="text-gray-500 mt-1">
            Salon billing (auto-calculated from records)
          </p> */}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">

          {/* Service Amount (READ ONLY) */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Service Amount (₹)
            </label>
            <input
              type="text"
              value={serviceAmount}
              readOnly
              className="
                w-full
                border
                border-[#D6B24E]
                rounded-xl
                px-4
                py-3
                text-gray-800
                bg-gray-50
                cursor-not-allowed
              "
            />
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4">
            <InfoBox label="GST Rate" value="18%" />
            <InfoBox label="Service Type" value="Salon" />
          </div>

          {/* GST Breakdown */}
          <div className="bg-[#FBF3E4] rounded-xl p-5 space-y-3 text-gray-700">
            <Row label="CGST (9%)" value={`₹ ${cgst.toFixed(2)}`} />
            <Row label="SGST (9%)" value={`₹ ${sgst.toFixed(2)}`} />
            <hr className="border-gray-300" />
            <Row
              label="Total GST"
              value={`₹ ${totalGst.toFixed(2)}`}
              bold
            />
          </div>

          {/* Final Amount */}
          <div className="flex items-center justify-between bg-[#DFF6EA] rounded-xl p-5">
            <span className="font-medium text-gray-700">
              Final Bill Amount
            </span>
            <span className="text-2xl font-semibold text-[#137A5A]">
              ₹ {finalAmount.toFixed(2)}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function InfoBox({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex justify-between items-center">
      <span
        className={`text-sm ${
          bold ? "font-semibold text-gray-800" : "text-gray-600"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm ${
          bold ? "font-semibold text-gray-800" : "text-gray-700"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
