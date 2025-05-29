// TypeScript declaration file for dog_minders_data.js

interface DogMinder {
  id: number;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
}

declare const dogMinders: DogMinder[];
export default dogMinders;
