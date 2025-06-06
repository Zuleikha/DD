// petshops_data.d.ts
export interface PetShop {
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
  products?: string[];
  services: string[];
  brands?: string[];
  hours: string;
}

declare const petShopsData: PetShop[];
export default petShopsData;
