export interface Park {
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
  amenities?: string[]; // Make optional with ?
  leashRules?: string; // Make optional with ?
  size?: string; // Make optional with ?
  hours: string;
}

export type Parks = Park[];

declare const parksData: Parks;

export default parksData;
