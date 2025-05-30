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
  brands?: string[];
  products?: string[]; // Make optional with ?
  hours: string;
}

export type Nutritions = Nutrition[];

declare const nutritionData: Nutritions;

export default nutritionData;
