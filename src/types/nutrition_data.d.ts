export interface Nutrition {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  products?: string[]; // Optional
  brands?: string[];   // Optional
  hours: string;
}

declare const nutritionData: Nutrition[];
export default nutritionData;
