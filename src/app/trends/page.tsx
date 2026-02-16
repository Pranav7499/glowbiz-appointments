// 'use client';

// import { useState } from 'react';
// import { Clock } from 'lucide-react';

// type Category = 'all' | 'hair' | 'makeup' | 'nails' | 'spa';

// const CATEGORIES: { id: Category; label: string }[] = [
//   { id: 'all', label: 'All' },
//   { id: 'hair', label: 'Hair' },
//   { id: 'makeup', label: 'Makeup' },
//   { id: 'nails', label: 'Nails' },
//   { id: 'spa', label: 'Spa' },
// ];

// const TREND_TEXT: Record<string, { title: string; desc: string }> = {
//   textured_bob: {
//     title: 'Textured Bob',
//     desc: 'A modern, effortless cut with volume and movement.',
//   },
//   classic_fade: {
//     title: 'Classic Fade',
//     desc: 'Clean and sharp fade perfect for everyday style.',
//   },
//   copper_balayage: {
//     title: 'Copper Balayage',
//     desc: 'Warm copper tones blended for a natural glow.',
//   },
//   bridal_glow: {
//     title: 'Bridal Glow',
//     desc: 'Soft, radiant makeup for your special day.',
//   },
//   gel_extensions: {
//     title: 'Gel Extensions',
//     desc: 'Durable, elegant nails with long-lasting shine.',
//   },
//   keratin_smooth: {
//     title: 'Keratin Smooth',
//     desc: 'Silky smooth hair with frizz control.',
//   },
//   natural_curls: {
//     title: 'Natural Curls',
//     desc: 'Enhancing curls while maintaining hair health.',
//   },
//   spa_day: {
//     title: 'Spa Day',
//     desc: 'Relaxing treatments for total rejuvenation.',
//   },
// };

// const TRENDS = [
//   {
//     id: 1,
//     img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
//     key: 'textured_bob',
//     category: 'hair',
//     duration: '45 min',
//     tag: 'Trending',
//   },
//   {
//     id: 2,
//     img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
//     key: 'classic_fade',
//     category: 'hair',
//     duration: '30 min',
//     tag: 'Popular',
//   },
//   {
//     id: 3,
//     img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
//     key: 'copper_balayage',
//     category: 'hair',
//     duration: '90 min',
//     tag: 'Editor’s Pick',
//   },
//   {
//     id: 4,
//     img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
//     key: 'bridal_glow',
//     category: 'makeup',
//     duration: '60 min',
//     tag: 'Bridal',
//   },
//   {
//     id: 5,
//     img: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop',
//     key: 'gel_extensions',
//     category: 'nails',
//     duration: '50 min',
//     tag: 'Trending',
//   },
//   {
//     id: 6,
//     img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop',
//     key: 'keratin_smooth',
//     category: 'hair',
//     duration: '120 min',
//     tag: 'Smooth Care',
//   },
//   {
//     id: 7,
//     img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
//     key: 'natural_curls',
//     category: 'hair',
//     duration: '60 min',
//     tag: 'Natural',
//   },
//   {
//     id: 8,
//     img: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800&auto=format&fit=crop',
//     key: 'spa_day',
//     category: 'spa',
//     duration: '90 min',
//     tag: 'Relax',
//   },
// ];

// export default function TrendsPage() {
//   const [active, setActive] = useState<Category>('all');

//   const filtered =
//     active === 'all'
//       ? TRENDS
//       : TRENDS.filter((item) => item.category === active);

//   return (
//     <div className="min-h-screen bg-[#FBF7F2] pt-28 pb-16 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-serif text-[#2B2423] mb-4">
//             Trending Styles
//           </h1>
//           <p className="text-[#6B625B] text-lg">
//             Discover the latest beauty, hair, and wellness trends curated by our experts
//           </p>
//         </div>

//         {/* CATEGORY FILTER */}
//         <div className="flex justify-center gap-3 flex-wrap mb-12">
//           {CATEGORIES.map((c) => (
//             <button
//               key={c.id}
//               onClick={() => setActive(c.id)}
//               className={`px-5 py-2 rounded-full text-sm border transition
//                 ${
//                   active === c.id
//                     ? 'bg-[#4B3A2A] text-white'
//                     : 'bg-transparent text-[#4B3A2A] hover:bg-[#CBBBA0] hover:text-white'
//                 }`}
//             >
//               {c.label}
//             </button>
//           ))}
//         </div>

//         {/* MASONRY GRID */}
//         <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
//           {filtered.map((item) => {
//             const text = TREND_TEXT[item.key];

//             return (
//               <div
//                 key={item.id}
//                 className="break-inside-avoid relative group rounded-2xl overflow-hidden
//                            shadow-sm hover:shadow-xl transition-all duration-500"
//               >
//                 <img
//                   src={item.img}
//                   alt={text.title}
//                   className="w-full h-auto object-cover transition-transform duration-700
//                              group-hover:scale-110"
//                 />

//                 {/* TAG */}
//                 <div className="absolute top-3 left-3">
//                   <span className="bg-white/90 text-[#4B3A2A] text-xs px-3 py-1 rounded-full">
//                     {item.tag}
//                   </span>
//                 </div>

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-black/45 opacity-0
//                                 group-hover:opacity-100 transition flex flex-col
//                                 items-center justify-center p-4 text-center">
//                   <h3 className="text-white font-serif text-xl mb-2">
//                     {text.title}
//                   </h3>

//                   <p className="text-white/80 text-sm mb-3">
//                     {text.desc}
//                   </p>

//                   <div className="flex items-center gap-2 text-white text-xs mb-4">
//                     <Clock size={14} /> {item.duration}
//                   </div>

//                   <button className="bg-white text-[#4B3A2A] px-6 py-2 rounded-full
//                                      text-xs font-semibold tracking-wider
//                                      hover:bg-[#CBBBA0] hover:text-white transition">
//                     Book This Look
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import {
//   TrendingUp,
//   Scissors,
//   Palette,
//   Heart,
//   Leaf,
//   Star,
//   Clock,
//   ArrowRight,
// } from 'lucide-react';

// type Category = 'all' | 'hair' | 'makeup' | 'spa' | 'nails' | 'skincare';

// interface TrendItem {
//   id: number;
//   category: Exclude<Category, 'all'>;
//   title: string;
//   description: string;
//   details: string;
//   image: string;
//   aspect: 'tall' | 'wide' | 'square';
//   trending: boolean;
//   isNew: boolean;
//   duration: string;
//   popularity: number;
// }

// const trends: TrendItem[] = [
//   {
//     id: 1,
//     category: 'hair',
//     title: 'Sun-Kissed Balayage',
//     description: 'Natural blonde highlights',
//     details:
//       'A seamless blend from root to tip creating a sun-drenched, beachy finish.',
//     image:
//       'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop',
//     aspect: 'tall',
//     trending: true,
//     isNew: false,
//     duration: '2–3 hrs',
//     popularity: 98,
//   },
//   {
//     id: 2,
//     category: 'makeup',
//     title: 'Glass Skin Glow',
//     description: 'Korean-inspired dewy look',
//     details:
//       'Multi-step hydration routine for luminous, flawless-looking skin.',
//     image:
//       'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop',
//     aspect: 'wide',
//     trending: true,
//     isNew: false,
//     duration: '1 hr',
//     popularity: 97,
//   },
//   {
//     id: 3,
//     category: 'nails',
//     title: 'Aura Nails',
//     description: 'Dreamy gradient nails',
//     details:
//       'A viral TikTok trend with soft airbrushed color transitions.',
//     image:
//       'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=900&auto=format&fit=crop',
//     aspect: 'square',
//     trending: true,
//     isNew: true,
//     duration: '1 hr',
//     popularity: 99,
//   },
//   {
//     id: 4,
//     category: 'spa',
//     title: 'Hot Stone Therapy',
//     description: 'Deep muscle relaxation',
//     details:
//       'Heated basalt stones melt away stress and restore balance.',
//     image:
//       'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=900&auto=format&fit=crop',
//     aspect: 'tall',
//     trending: false,
//     isNew: false,
//     duration: '90 min',
//     popularity: 88,
//   },
//   {
//     id: 5,
//     category: 'hair',
//     title: 'Textured Bob',
//     description: 'Modern French bob',
//     details:
//       'Chin-length cut with soft layers for effortless movement.',
//     image:
//       'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop',
//     aspect: 'square',
//     trending: true,
//     isNew: true,
//     duration: '1 hr',
//     popularity: 95,
//   },
//   {
//     id: 6,
//     category: 'skincare',
//     title: 'LED Light Therapy',
//     description: 'Advanced skin rejuvenation',
//     details:
//       'Boosts collagen and improves skin clarity using LED technology.',
//     image:
//       'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop',
//     aspect: 'wide',
//     trending: true,
//     isNew: true,
//     duration: '30 min',
//     popularity: 91,
//   },
// ];

// const categories = [
//   { id: 'all', label: 'All Trends', icon: TrendingUp },
//   { id: 'hair', label: 'Hair Styles', icon: Scissors },
//   { id: 'makeup', label: 'Makeup', icon: Palette },
//   { id: 'spa', label: 'Spa & Wellness', icon: Leaf },
//   { id: 'nails', label: 'Nail Art', icon: Heart },
//   { id: 'skincare', label: 'Skincare', icon: Star },
// ];

// export default function TrendsPage() {
//   const [active, setActive] = useState<Category>('all');

//   const filtered =
//     active === 'all'
//       ? trends
//       : trends.filter((t) => t.category === active);

//   return (
//     <main className="min-h-screen bg-[#FBF7F2] pt-28 pb-20 px-4">

//       {/* HEADER */}
//       <section className="text-center mb-16">
//         <div className="flex justify-center items-center gap-2 mb-4 text-[#4B3A2A]">
//           <TrendingUp size={18} />
//           <span className="tracking-widest text-sm font-medium">
//             2026 BEAUTY TRENDS
//           </span>
//         </div>

//         <h1 className="text-4xl md:text-6xl font-serif text-[#2B2423] mb-6">
//           Trending Now
//         </h1>

//         <p className="max-w-2xl mx-auto text-lg text-[#6B625B]">
//           Discover the hottest beauty trends — from viral looks to timeless classics.
//         </p>
//       </section>

//       {/* FILTERS */}
//       <div className="flex flex-wrap justify-center gap-3 mb-12">
//         {categories.map((c) => {
//           const Icon = c.icon;
//           return (
//             <button
//               key={c.id}
//               onClick={() => setActive(c.id as Category)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full border text-sm transition
//                 ${
//                   active === c.id
//                     ? 'bg-[#4B3A2A] text-white'
//                     : 'bg-white border-[#E5DED5] hover:bg-[#4B3A2A] hover:text-white'
//                 }`}
//             >
//               <Icon size={16} />
//               {c.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* GRID */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">

//         {filtered.map((item) => (
//           <div
//             key={item.id}
//             className={`relative rounded-2xl overflow-hidden group
//               ${
//                 item.aspect === 'tall'
//                   ? 'row-span-2'
//                   : item.aspect === 'wide'
//                   ? 'col-span-2'
//                   : ''
//               }`}
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition" />

//             {/* Badges */}
//             <div className="absolute top-3 left-3 z-10 flex gap-2">
//               <span className="bg-white/90 text-xs px-3 py-1 rounded-full">
//                 {item.category}
//               </span>
//               {item.trending && (
//                 <span className="bg-[#4B3A2A] text-white text-xs px-3 py-1 rounded-full">
//                   Trending
//                 </span>
//               )}
//               {item.isNew && (
//                 <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
//                   New
//                 </span>
//               )}
//             </div>

//             {/* Popularity */}
//             <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1 z-10">
//               <Star size={14} className="text-yellow-500 fill-yellow-500" />
//               <span className="text-xs font-medium">{item.popularity}%</span>
//             </div>

//             {/* Content */}
//             <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
//               <h3 className="font-serif text-lg mb-1">{item.title}</h3>
//               <p className="text-sm text-white/80 mb-2">{item.description}</p>
//               <p className="text-xs text-white/70 mb-3 line-clamp-2">
//                 {item.details}
//               </p>

//               <div className="flex items-center justify-between">
//                 <span className="flex items-center gap-1 text-xs text-white/70">
//                   <Clock size={14} />
//                   {item.duration}
//                 </span>
//                 <button className="bg-white text-[#2B2423] px-4 py-2 rounded-full text-xs font-medium hover:bg-[#EFE8DD] transition">
//                   Book Look <ArrowRight size={12} className="inline ml-1" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </main>
//   );
// }


'use client';

import { useState } from 'react';
import {
  TrendingUp,
  Scissors,
  Palette,
  Heart,
  Leaf,
  Star,
  Clock,
  ArrowRight,
} from 'lucide-react';

type Category = 'all' | 'hair' | 'makeup' | 'spa' | 'nails' | 'skincare';

interface TrendItem {
  id: number;
  category: Exclude<Category, 'all'>;
  title: string;
  description: string;
  details: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  trending: boolean;
  isNew: boolean;
  duration: string;
  popularity: number;
}

/* ✅ KEEP OLD IMAGES + ADD MORE (placeholders allowed) */
const trendItems: TrendItem[] = [
  {
    id: 1,
    category: 'hair',
    title: 'Sun-Kissed Balayage',
    description: 'Natural blonde highlights',
    details: 'Soft blended highlights for a beachy glow.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop',
    aspect: 'tall',
    trending: true,
    isNew: false,
    duration: '2–3 hrs',
    popularity: 98,
    
  },

 

  
  {
    id: 2,
    category: 'hair',
    title: 'Textured Bob',
    description: 'Modern layered bob',
    details: 'Effortless volume with chic movement.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop',
    aspect: 'wide',
    trending: true,
    isNew: true,
    duration: '1 hr',
    popularity: 95,
  },
  {
    id: 3,
    category: 'makeup',
    title: 'Glass Skin Glow',
    description: 'Dewy Korean finish',
    details: 'Hydrated luminous complexion.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop',
    aspect: 'square',
    trending: true,
    isNew: false,
    duration: '1 hr',
    popularity: 97,
  },
  {
    id: 4,
    category: 'spa',
    title: 'Hot Stone Therapy',
    description: 'Deep relaxation',
    details: 'Heated stones release stress.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=900&auto=format&fit=crop',
    aspect: 'tall',
    trending: false,
    isNew: false,
    duration: '90 min',
    popularity: 88,
  },

  /* ➕ EXTRA ITEMS (you can replace images later) */
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: 5 + i,
    category: (['hair', 'makeup', 'spa', 'nails', 'skincare'] as const)[i % 5],
    title: `Trend Look ${i + 1}`,
    description: 'Popular seasonal style',
    details: 'Highly requested trend curated by experts.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop',
    aspect: (i % 3 === 0
  ? 'tall'
  : i % 3 === 1
  ? 'wide'
  : 'square') as 'tall' | 'wide' | 'square',

    trending: i % 2 === 0,
    isNew: i % 3 === 0,
    duration: '45–90 min',
    popularity: 85 + (i % 10),
  })),
];

 const categoryCounts = {
  all: trendItems.length,
  hair: trendItems.filter(i => i.category === 'hair').length,
  makeup: trendItems.filter(i => i.category === 'makeup').length,
  spa: trendItems.filter(i => i.category === 'spa').length,
  nails: trendItems.filter(i => i.category === 'nails').length,
  skincare: trendItems.filter(i => i.category === 'skincare').length,
};

const categories = [
  { id: 'all', label: 'All Trends', icon: TrendingUp },
  { id: 'hair', label: 'Hair Styles', icon: Scissors },
  { id: 'makeup', label: 'Makeup', icon: Palette },
  { id: 'spa', label: 'Spa & Wellness', icon: Leaf },
  { id: 'nails', label: 'Nail Art', icon: Heart },
  { id: 'skincare', label: 'Skincare', icon: Star },
];

export default function TrendsPage() {
  const [active, setActive] = useState<Category>('all');

  const filtered =
    active === 'all'
      ? trendItems
      : trendItems.filter((t) => t.category === active);

  return (
    <main className="min-h-screen bg-[#FBF7F2] pt-28 pb-20 px-4">
      {/* HEADER */}
      <section className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 mb-4 text-[#4B3A2A]">
          <TrendingUp size={18} />
          <span className="tracking-widest text-sm font-medium">
            2026 BEAUTY TRENDS
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-[#2B2423] mb-6">
          Trending Now
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-[#6B625B]">
          Discover the hottest beauty trends — from viral looks to timeless classics.
        </p>

        {/* STATS */}
<div className="flex justify-center gap-10 mt-6 text-sm text-[#6B625B]">
  <div className="flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-[#6B625B]" />
    <strong className="text-[#2B2423]">
      {trendItems.filter(t => t.trending).length}
    </strong>
    Trending
  </div>

  <div className="flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-green-600" />
    <strong className="text-[#2B2423]">
      {trendItems.filter(t => t.isNew).length}
    </strong>
    New This Month
  </div>

  <div className="flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-[#6B625B]" />
    <strong className="text-[#2B2423]">
      {trendItems.length}
    </strong>
    Total Looks
  </div>
</div>

      </section>

     {/* FILTERS (MATCHES LOVABLE UI) */}
<div className="flex flex-wrap justify-center gap-3 mb-14">
  {categories.map((c) => {
    const Icon = c.icon;
    const isActive = active === c.id;

    return (
      <button
        key={c.id}
        onClick={() => setActive(c.id as Category)}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm border transition
          ${
            isActive
              ? 'bg-[#4B3A2A] text-white border-[#4B3A2A]'
              : 'bg-[#FBF7F2] text-[#2B2423] border-[#E5DED5] hover:bg-[#EFE8DD]'
          }`}
      >
        <Icon size={16} />

        <span>{c.label}</span>

        {/* COUNT BADGE */}
        <span
          className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium
            ${
              isActive
                ? 'bg-white/20 text-white'
                : 'bg-[#EDE6DC] text-[#4B3A2A]'
            }`}
        >
          {categoryCounts[c.id as keyof typeof categoryCounts]}
        </span>
      </button>
    );
  })}
</div>


      {/* IMAGE GRID (UNCHANGED) */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-2xl overflow-hidden group
              ${
                item.aspect === 'tall'
                  ? 'row-span-2'
                  : item.aspect === 'wide'
                  ? 'col-span-2'
                  : ''
              }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute top-3 left-3 z-10 flex gap-2">
              <span className="bg-white/90 text-xs px-3 py-1 rounded-full capitalize">
                {item.category}
              </span>
              {item.trending && (
                <span className="bg-[#4B3A2A] text-white text-xs px-3 py-1 rounded-full">
                  Trending
                </span>
              )}
              {item.isNew && (
                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1 z-10">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-medium">{item.popularity}%</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="font-serif text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-white/80 mb-2">{item.description}</p>
              <p className="text-xs text-white/70 mb-3 line-clamp-2">
                {item.details}
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-white/70">
                  <Clock size={14} />
                  {item.duration}
                </span>
                <button className="bg-white text-[#2B2423] px-4 py-2 rounded-full text-xs font-medium hover:bg-[#EFE8DD] transition">
                  Book Look <ArrowRight size={12} className="inline ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TREND INSIGHTS ================= */}
<section className="py-20 bg-[#FBF7F2]">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-serif text-[#2B2423] mb-4">
        Trend Insights
      </h2>
      <p className="text-lg text-[#6B625B] max-w-2xl mx-auto">
        Stay ahead of the curve with our expert analysis of what's hot in beauty right now.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">
      
      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 border border-[#E5DED5]">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-full bg-[#EFE8DD] flex items-center justify-center">
            <TrendingUp className="text-[#4B3A2A]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#2B2423]">2B+</div>
            <div className="text-sm text-[#6B625B]">Social Views</div>
          </div>
        </div>

        <h3 className="font-serif text-xl text-[#2B2423] mb-2">
          Viral on Social
        </h3>
        <p className="text-[#6B625B] text-sm leading-relaxed">
          Aura Nails and Glass Skin are dominating TikTok with over 2B combined views.
          Our stylists are trained in these exact techniques.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 border border-[#E5DED5]">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-full bg-[#EFE8DD] flex items-center justify-center">
            <Star className="text-[#4B3A2A]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#2B2423]">#1</div>
            <div className="text-sm text-[#6B625B]">Most Requested</div>
          </div>
        </div>

        <h3 className="font-serif text-xl text-[#2B2423] mb-2">
          Celebrity Approved
        </h3>
        <p className="text-[#6B625B] text-sm leading-relaxed">
          Glazed Donut Nails, made famous by Hailey Bieber, continue to be our most
          requested nail service this season.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 border border-[#E5DED5]">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-full bg-[#EFE8DD] flex items-center justify-center">
            <Leaf className="text-[#4B3A2A]" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-[#2B2423]">40%</div>
            <div className="text-sm text-[#6B625B]">Growth YoY</div>
          </div>
        </div>

        <h3 className="font-serif text-xl text-[#2B2423] mb-2">
          Wellness Focus
        </h3>
        <p className="text-[#6B625B] text-sm leading-relaxed">
          Skincare treatments are up 40% as clients prioritize skin health.
          LED therapy and Hydrafacials lead the charge.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ================= CTA SECTION ================= */}
<section className="py-24 bg-[#F6F1EA]">
  <div className="max-w-4xl mx-auto px-4 text-center">

    <h2 className="text-4xl md:text-5xl font-serif text-[#2B2423] mb-6">
      Ready for Your Transformation?
    </h2>

    <p className="text-lg text-[#6B625B] max-w-2xl mx-auto mb-10">
      Book a consultation with one of our trend-savvy stylists and let us bring your
      vision to life.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-10 py-4 rounded-full bg-[#4B3A2A] text-white text-lg font-medium hover:opacity-90 transition">
        Book Consultation
      </button>

      <button className="px-10 py-4 rounded-full bg-white border border-[#E5DED5] text-[#2B2423] text-lg font-medium hover:bg-[#EFE8DD] transition">
        Contact Us
      </button>
    </div>

  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="py-10 bg-[#FBF7F2] border-t border-[#E5DED5]">
  <div className="text-center text-sm text-[#6B625B]">
    © 2026 Serenity Spa. All rights reserved.
  </div>
</footer>

    </main>
  );
}
