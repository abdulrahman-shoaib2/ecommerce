// Single item in the "data" array (with category field)
export interface ISubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string; // reference to parent category ID
  createdAt?: string; // ISO date string
  updatedAt?: string; // ISO date string
}
