// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// type Contact = {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   createdAt: number;
// };

// export default function AdminContactsPage() {
//   const [data, setData] = useState<Contact[]>([]);
//   const [search, setSearch] = useState("");
//   const [range, setRange] = useState("all");

//   /* Fetch data */
//   const fetchContacts = async () => {
//     const res = await fetch("/api/admin/contacts");
//     const text = await res.text();
// const json = text ? JSON.parse(text) : [];
// setData(json);

//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   /* Delete */
//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this message?")) return;

//     await fetch("/api/admin/contacts", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });

//     fetchContacts();
//   };

//   /* Filters (SEARCH + RANGE + LATEST FIRST) */
//   const now = Date.now();

//   const filtered = data
//     .filter((item) => {
//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         item.name.toLowerCase().includes(searchText) ||
//         item.email.toLowerCase().includes(searchText) ||
//         item.phone.includes(searchText) ||
//         item.message.toLowerCase().includes(searchText);

//       if (!matchesSearch) return false;

//       if (range === "all") return true;

//       let days = 0;
//       if (range === "today") days = 1;
//       else days = Number(range);

//       const rangeMs = days * 24 * 60 * 60 * 1000;

//       return item.createdAt >= now - rangeMs;
//     })
//     .sort((a, b) => b.createdAt - a.createdAt); // 🔥 latest first

//   return (
//     <div className="min-h-screen bg-[#F4ECDC] p-8">
//       <div className="max-w-6xl mx-auto">

//         <h1 className="text-4xl font-serif text-gray-900">
//           Admin · Contact Messages
//         </h1>
//         <p className="text-gray-700 mt-2">
//           Messages received from Contact Us page
//         </p>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 items-center mt-8 mb-6">

//           <input
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D6B24E]"
//           />

//           <select
//             value={range}
//             onChange={(e) => setRange(e.target.value)}
//             className="px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#D6B24E]"
//           >
//             <option value="all">All Time</option>
//             <option value="today">Today</option>
//             <option value="7">Last 7 Days</option>
//             <option value="30">Last 30 Days</option>
//             <option value="365">Last Year</option>
//           </select>

//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-xl overflow-hidden shadow-sm">
//           <table className="w-full text-left">
//             <thead className="bg-[#FBF3E4]">
//               <tr className="text-sm font-semibold text-gray-900">
//                 <th className="p-4">Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Message</th>
//                 <th>Date</th>
//                 <th></th>
//               </tr>
//             </thead>

//             <tbody>
//               {filtered.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-b last:border-none hover:bg-[#FFF8EC]"
//                 >
//                   <td className="p-4 font-medium">{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.phone}</td>
//                   <td className="max-w-xs truncate">{item.message}</td>
//                   <td>{new Date(item.createdAt).toLocaleString()}</td>
//                   <td className="pr-4 text-right space-x-4">
//                    <Link
//   href={`/admin/contacts/${item.id}`}
//   className="text-blue-600 font-medium hover:underline"
// >
//   View Details
// </Link>

//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {filtered.length === 0 && (
//                 <tr>
//                   <td colSpan={6} className="text-center p-6 text-gray-600">
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// }

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

export default function AdminContactsPage() {
  const [data, setData] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState("all");

  const fetchContacts = async () => {
    const res = await fetch("/api/admin/contacts");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;

    await fetch("/api/admin/contacts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchContacts();
  };

  const now = Date.now();

  const filtered = data.filter((item) => {
    const textMatch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.message.toLowerCase().includes(search.toLowerCase());

    let dateMatch = true;
    if (range !== "all") {
      const diff = now - item.createdAt;
      const days = diff / (1000 * 60 * 60 * 24);

      if (range === "today") dateMatch = days <= 1;
      if (range === "7") dateMatch = days <= 7;
      if (range === "30") dateMatch = days <= 30;
      if (range === "365") dateMatch = days <= 365;
    }

    return textMatch && dateMatch;
  });

  return (
    <div className="min-h-screen bg-[#F4ECDC] p-8">
      <div className="max-w-6xl mx-auto">

       <h1 className="text-4xl font-serif text-gray-900 tracking-tight">
  Admin · Contact Messages
</h1>
<p className="text-gray-600 mt-1 text-sm">
  Manage and review messages submitted via the Contact Us page
</p>


        {/* Filters */}
        <div className="bg-white rounded-2xl p-5 shadow-md flex flex-wrap gap-4 items-center mt-6 mb-8">

  <input
    placeholder="Search by name, email, phone or message…"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      flex-1 min-w-[260px]
      border border-gray-300
      rounded-xl
      px-5 py-3
      text-gray-900
      placeholder:text-gray-400
      focus:outline-none
      focus:ring-2
      focus:ring-[#D6B24E]
    "
  />

  <select
    value={range}
    onChange={(e) => setRange(e.target.value)}
    className="
      px-5 py-3
      rounded-xl
      border border-gray-300
      bg-white
      text-gray-900
      focus:ring-2
      focus:ring-[#D6B24E]
    "
  >
    <option value="all">All Time</option>
    <option value="today">Today</option>
    <option value="7">Last 7 Days</option>
    <option value="30">Last 30 Days</option>
    <option value="365">Last Year</option>
  </select>

</div>


        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">

          <table className="w-full text-left">
            <thead className="bg-[#FBF3E4]">
  <tr className="text-sm font-semibold text-gray-900">
    <th className="p-5">Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Message</th>
    <th>Date</th>
    <th className="text-right pr-6">Actions</th>
  </tr>
</thead>


            <tbody>
              {filtered.map((item) => (
                <tr
  key={item.id}
  className="
    border-b last:border-none
    hover:bg-[#FFF8EC]
    transition
  "
>

                  <td className="p-5 font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="text-gray-700">{item.email}</td>
                  <td className="text-gray-700">{item.phone}</td>
                  <td className="text-gray-800 max-w-xs truncate">
                    {item.message}
                  </td>
                  <td className="text-gray-600 whitespace-nowrap">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="pr-6 text-right space-x-4 white-space-nowrap">
                    <Link
                      href={`/admin/contacts/${item.id}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-10 text-gray-500">
                    No records found
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
