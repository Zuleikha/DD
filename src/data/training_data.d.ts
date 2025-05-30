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
  specialties?: string[]; // Make optional with ?
  trainingTypes?: string[];
  hours: string;
}

export type Trainings = Training[];

declare const trainingData: Trainings;

export default trainingData;
