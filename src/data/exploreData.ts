export type CategoryItem = {
  label: string;
  slug: string;
};

export type CityBlock = {
  city: string;
  categories: CategoryItem[];
};

export type CountryData = {
  code: string;
  name: string;
  cities: CityBlock[];
};

export const exploreData: CountryData[] = [
  {
    code: "IN",
    name: "India",
    cities: [
      {
        city: "Mumbai",
        categories: [
          { label: "Hair & Styling", slug: "hair" },
          { label: "Massage", slug: "massage" },
          { label: "Facial & Skincare", slug: "facial" },
          { label: "Spa", slug: "spa" },
        ],
      },
      {
        city: "Pune",
        categories: [
          { label: "Hair & Styling", slug: "hair" },
          { label: "Makeup", slug: "makeup" },
        ],
      },
    ],
  },
  {
    code: "AE",
    name: "UAE",
    cities: [
      {
        city: "Dubai",
        categories: [
          { label: "Hair & Styling", slug: "hair" },
          { label: "Massage", slug: "massage" },
          { label: "Spa", slug: "spa" },
        ],
      },
      {
        city: "Abu Dhabi",
        categories: [
          { label: "Facial & Skincare", slug: "facial" },
          { label: "Massage", slug: "massage" },
        ],
      },
    ],
  },
];
