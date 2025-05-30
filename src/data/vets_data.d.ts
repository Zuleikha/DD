export interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile?: string;
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

export type Vets = Vet[];

declare const vetsData: Vets;

export default vetsData;
