export interface Park {
  id: number;
  name: string;
  address: string;
  county: string;
  phone?: string;
  email?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours: string;
}

declare const parksData: Park[];
export default parksData;

