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
  specialties?: string[];
  hours: string;
}

declare const groomingData: Grooming[];
export default groomingData;
