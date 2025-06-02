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
  //amenities?: string[];
  dogPolicy?: string;
  dogMenu: string[];
  dogAmenities: string[]; // This should be explicitly typed
  hours: string;
}

declare const placesData: Place[];
export default placesData;
