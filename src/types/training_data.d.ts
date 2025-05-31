export interface Training {
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
  specialties: string[];
  trainingTypes?: string[]; // Optional
  hours: string;
}

declare const trainingData: Training[];
export default trainingData;
