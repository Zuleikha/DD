export interface Place {
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
  placeType?: string;
  dogRules?: string;
  hours: string;
}

export type Places = Place[];

declare const placesData: Places;

export default placesData;
