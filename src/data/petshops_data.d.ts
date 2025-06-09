// petshops_data.d.ts
export interface PetShop {

  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  email?: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  hours: string;
  delivers: boolean;
  deliveryArea?: string;
}

declare const petShopsData: PetShop[];
export default petShopsData;
