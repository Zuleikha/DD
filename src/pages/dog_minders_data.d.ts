// TypeScript declaration file for enriched dog_minders_data.js

interface DogMinder {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  hours: string;
}

declare const dogMinders: DogMinder[];
export default dogMinders;
