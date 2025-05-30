export interface Grooming {
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
  specialties?: string[]; // Make optional with ?
  hours: string;
}

export type Groomings = Grooming[];

declare const groomingData: Groomings;

export default groomingData;
