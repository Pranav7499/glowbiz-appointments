
// export default function AppointmentsPage() {
//   return (
//     <div className="min-h-screen bg-[#F4ECDC] py-10">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-serif text-gray-800">
//             Appointments
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage your salon bookings and schedule
//           </p>
//         </div>

//         {/* Top controls */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex bg-white rounded-xl p-1 shadow-sm">
//             <button className="px-5 py-2 rounded-lg bg-[#D6B24E] text-white font-medium">
//               Salon
//             </button>
//             <button className="px-5 py-2 rounded-lg text-gray-600">
//               Spa
//             </button>
//           </div>

//           <button className="bg-[#D6B24E] text-white px-6 py-3 rounded-xl font-semibold shadow-sm">
//             + New Appointment
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-xl p-4 flex flex-wrap items-center gap-3 mb-8 shadow-sm">
//           <span className="text-gray-600 font-medium mr-2">Filters:</span>

//           <FilterButton text="Today" />
//           <FilterButton text="This Week" />
//           <FilterButton text="All Time" active />

//           <label className="flex items-center gap-2 text-sm ml-4">
//             <input type="checkbox" />
//             Show Past Appointments
//           </label>

//           <select className="ml-auto border rounded-lg px-4 py-2 text-sm">
//             <option>All Status</option>
//             <option>Confirmed</option>
//             <option>Pending</option>
//           </select>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//           <Stat title="TOTAL FETCHED" value="15" />
//           <Stat title="CONFIRMED" value="10" valueColor="text-green-600" />
//           <Stat title="PENDING" value="5" valueColor="text-yellow-600" />
//           <Stat title="REVENUE" value="₹15,000" valueColor="text-[#D6B24E]" />
//         </div>

//         {/* Appointment list */}
//         <div className="bg-white rounded-xl shadow-sm">
//           <div className="px-6 py-4 border-b">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Appointments Schedule
//             </h2>
//             <p className="text-sm text-gray-500">
//               All Time · 15 appointments
//             </p>
//           </div>

//           <AppointmentRow
//             time="17:30"
//             date="2026-01-14"
//             duration="30 min"
//             name="Rahul Padwal"
//             service="Hair Cut & Styling"
//             status="Pending"
//             amount="₹400"
//           />

//           <AppointmentRow
//             time="21:30"
//             date="2026-01-14"
//             duration="75 min"
//             name="Guest"
//             service="Facial Glow"
//             status="Confirmed"
//             amount="₹1100"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// /* ---------- Components ---------- */

// function FilterButton({ text, active }) {
//   return (
//     <button
//       className={`px-4 py-2 rounded-lg text-sm font-medium ${
//         active
//           ? "bg-[#D6B24E] text-white"
//           : "bg-gray-100 text-gray-600"
//       }`}
//     >
//       {text}
//     </button>
//   );
// }

// function Stat({ title, value, valueColor = "text-gray-800" }) {
//   return (
//     <div className="bg-white rounded-xl p-5 shadow-sm">
//       <p className="text-xs tracking-wide text-gray-500 mb-1">
//         {title}
//       </p>
//       <p className={`text-3xl font-semibold ${valueColor}`}>
//         {value}
//       </p>
//     </div>
//   );
// }

// function AppointmentRow({
//   time,
//   date,
//   duration,
//   name,
//   service,
//   status,
//   amount,
// }) {
//   return (
//     <div className="flex items-center justify-between px-6 py-5 border-b last:border-none">
//       <div className="w-32">
//         <p className="font-semibold">{time}</p>
//         <p className="text-sm text-gray-500">{date}</p>
//         <p className="text-xs text-gray-400">{duration}</p>
//       </div>

//       <div className="flex-1">
//         <p className="font-medium">{name}</p>
//         <p className="text-sm text-gray-500">{service}</p>
//       </div>

//       <div className="text-right space-y-2">
//         <span className="inline-block px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
//           {status}
//         </span>
//         <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
//           Paid {amount}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-[#F4ECDC] py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif text-gray-800">
              Appointments
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your salon bookings and schedule
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-white rounded-xl p-1 shadow-sm">
              <button className="px-5 py-2 rounded-lg bg-[#D6B24E] text-white font-medium">
                Salon
              </button>
              <button className="px-5 py-2 rounded-lg text-gray-600">
                Spa
              </button>
            </div>

            <button className="bg-[#D6B24E] text-white px-6 py-3 rounded-xl font-semibold shadow-sm">
              + New Appointment
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 flex flex-wrap items-center gap-3 mb-8 shadow-sm">
          <span className="text-gray-600 font-medium mr-2">Filters:</span>

          <FilterButton text="Today" />
          <FilterButton text="This Week" />
          <FilterButton text="All Time" active />

          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 ml-4">
            <input type="checkbox" className="accent-[#D6B24E]" />
            Show Past Appointments
          </label>

          <select className="ml-auto bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* ✅ STATS CARDS (RESTORED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <Stat title="TOTAL FETCHED" value="15" sub="Showing: 15" />
          <Stat title="CONFIRMED" value="10" valueColor="text-green-600" />
          <Stat title="PENDING" value="5" valueColor="text-yellow-600" />
          <Stat title="REVENUE" value="₹15,000" valueColor="text-[#D6B24E]" />
        </div>

        {/* Appointment Card */}
        <div className="rounded-xl shadow-sm overflow-hidden bg-white">
          <div className="bg-[#FBF3E4] px-6 py-4 flex items-center gap-2 border-b">
            <span>📅</span>
            <h2 className="text-lg font-semibold text-gray-800">
              Appointments Schedule
            </h2>
            <span className="text-sm text-gray-500 ml-2">
              All Time · 15 appointments
            </span>
          </div>

          <AppointmentRow
            time="17:30"
            date="2026-01-14"
            duration="30 min"
            name="Rahul Padwal"
            service="Hair Cut & Styling"
            status="Pending"
            amount="₹400"
          />

          <AppointmentRow
            time="21:30"
            date="2026-01-14"
            duration="75 min"
            name="Guest"
            service="Facial Glow"
            status="Confirmed"
            amount="₹1100"
          />
        </div>

      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function FilterButton({ text, active }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium ${
        active
          ? "bg-[#D6B24E] text-white"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {text}
    </button>
  );
}

function Stat({ title, value, sub, valueColor = "text-gray-800" }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-xs tracking-wide text-gray-500 mb-1">
        {title}
      </p>
      <p className={`text-3xl font-semibold ${valueColor}`}>
        {value}
      </p>
      {sub && (
        <p className="text-xs text-gray-400 mt-1">{sub}</p>
      )}
    </div>
  );
}

function AppointmentRow({
  time,
  date,
  duration,
  name,
  service,
  status,
  amount,
}) {
  return (
    <div className="grid grid-cols-[120px_1fr_220px] items-center px-6 py-6 border-b last:border-none">

      <div>
        <p className="text-lg font-semibold text-gray-800">{time}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-xs text-gray-400">{duration}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8D7A3] to-[#D6B24E] flex items-center justify-center text-white font-semibold">
          {name[0]}
        </div>
        <div>
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{service}</p>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <span className="px-4 py-1 rounded-full text-xs bg-[#FFF1C1] text-[#9A7B00]">
          ⏳ {status}
        </span>
        <span className="px-4 py-1 rounded-full text-xs bg-[#DFF6EA] text-[#137A5A]">
          💳 Paid {amount}
        </span>
      </div>
    </div>
  );
}
