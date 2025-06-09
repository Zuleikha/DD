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
  services: string[];
  hours: string;
  delivers: boolean;
  deliveryArea?: string;
}

const petShopsData: PetShop[] = [
  {
    id: 1,
    name: "PetWorld Galway",
    address: "Westside Shopping Centre, Galway, Ireland",
    county: "Galway",
    phone: "+353 91 585783",
    email: "galway@petworlddirect.ie",
    website: "https://petworlddirect.ie/",
    rating: 4.6,
    reviewCount: 342,
    description: "Pet food, accessories, aquatics, and small animal care. Friendly and knowledgeable staff offering expert advice on all your pet needs.",
    services: ["Pet Food", "Accessories", "Aquatics", "Small Animals", "Expert Advice"],
    hours: "Mon-Sat: 9am–6pm, Sun: 12–5pm",
    delivers: true,
    deliveryArea: "Galway City and surrounding areas"
  },
  {
    id: 2,
    name: "Maxi Zoo Bray",
    address: "Unit 5, Bray Retail Park, Giltspur, Bray, Co. Wicklow, A98 TF84",
    county: "Wicklow",
    phone: "+353 1 204 0638",
    email: "bray@maxizoo.ie",
    website: "https://maxizoo.ie/",
    rating: 4.5,
    reviewCount: 637,
    description: "Leading pet supplies retailer offering premium pet food, toys, accessories and expert advice for dogs, cats, birds, fish and small animals.",
    services: ["Premium Pet Food", "Toys & Accessories", "Grooming Supplies", "Aquarium Products", "Bird Care"],
    hours: "Mon-Sat: 9am–7pm, Sun: 11am–6pm",
    delivers: true,
    deliveryArea: "Wicklow and South Dublin"
  },
  {
    id: 3,
    name: "Fishbowl Aquatic & Pet Stores",
    address: "Unit 1, Lucan Shopping Centre, Lucan, Co. Dublin",
    county: "Dublin",
    phone: "1890 948653",
    email: "info@fishbowl.ie",
    website: "https://fishbowl.ie/",
    rating: 4.7,
    reviewCount: 289,
    description: "Specialist aquatic and pet store with extensive range of tropical fish, marine fish, aquarium equipment and general pet supplies.",
    services: ["Tropical Fish", "Marine Fish", "Aquarium Equipment", "Pet Supplies", "Water Testing"],
    hours: "Mon-Sat: 9:30am–6pm, Sun: 12–5pm",
    delivers: true,
    deliveryArea: "Dublin and surrounding counties"
  },
  {
    id: 4,
    name: "Pet Mania Drogheda",
    address: "Unit 7, Southgate Shopping Centre, Drogheda, Co. Louth",
    county: "Louth",
    phone: "+353 41 987 8849",
    email: "drogheda@petmania.ie",
    website: "https://petmania.ie/",
    rating: 4.4,
    reviewCount: 198,
    description: "Ireland's leading pet retailer offering everything for your pet including food, toys, accessories, grooming and healthcare products.",
    services: ["Pet Food", "Healthcare Products", "Grooming", "Toys", "Training Aids"],
    hours: "Mon-Sat: 9am–6pm, Sun: 12–5pm",
    delivers: true,
    deliveryArea: "Louth and North Dublin"
  },
  {
    id: 5,
    name: "Newport Pet & Vet Supplies",
    address: "Main Street, Newport, Co. Mayo, F28 PX98",
    county: "Mayo",
    phone: "+353 98 41451",
    email: "info@newportpetvet.ie",
    website: "https://newportpetvet.ie/",
    rating: 4.8,
    reviewCount: 156,
    description: "Family-run pet and veterinary supplies store serving Mayo for over 20 years. Specializing in farm animal and pet care products.",
    services: ["Veterinary Supplies", "Farm Animal Care", "Pet Food", "Supplements", "Equipment"],
    hours: "Mon-Fri: 9am–6pm, Sat: 9am–5pm, Sun: Closed",
    delivers: true,
    deliveryArea: "Mayo and West Ireland"
  },
  {
    id: 6,
    name: "Pet-e-coats",
    address: "Meadow View, Ballymore Eustace East, Ballymore Eustace, Co. Kildare",
    county: "Kildare",
    phone: "+353 45 863419",
    email: "info@petecoats.ie",
    website: "https://petecoats.ie/",
    rating: 4.9,
    reviewCount: 87,
    description: "Specialist pet supplies retailer focusing on high-quality pet clothing, accessories and premium food brands for discerning pet owners.",
    services: ["Pet Clothing", "Premium Accessories", "Designer Collars", "Luxury Bedding", "Gourmet Treats"],
    hours: "Tue-Sat: 10am–5pm, Sun-Mon: Closed",
    delivers: true,
    deliveryArea: "Kildare and Dublin"
  },
  {
    id: 7,
    name: "Just4Pets Cork",
    address: "Unit 12, Blackpool Retail Park, Cork, T23 P2K6",
    county: "Cork",
    phone: "+353 21 430 1234",
    email: "cork@just4pets.ie",
    website: "https://just4pets.ie/",
    rating: 4.5,
    reviewCount: 423,
    description: "Comprehensive pet store offering everything from basic pet food to specialized equipment. Known for competitive prices and excellent customer service.",
    services: ["Pet Food", "Equipment", "Toys", "Healthcare", "Grooming Supplies"],
    hours: "Mon-Sat: 9am–7pm, Sun: 11am–6pm",
    delivers: true,
    deliveryArea: "Cork City and County"
  },
  {
    id: 8,
    name: "Goldfish Pet Store",
    address: "123 O'Connell Street, Limerick, V94 F2X8",
    county: "Limerick",
    phone: "+353 61 234567",
    email: "limerick@goldfish.ie",
    website: "https://goldfish.ie/",
    rating: 4.6,
    reviewCount: 267,
    description: "Modern pet store specializing in aquatics, with extensive tropical and marine fish selection plus complete range of pet supplies.",
    services: ["Aquatics", "Tropical Fish", "Marine Fish", "Pet Supplies", "Tank Maintenance"],
    hours: "Mon-Sat: 9:30am–6pm, Sun: 12–5pm",
    delivers: true,
    deliveryArea: "Limerick and surrounding areas"
  },
  {
    id: 9,
    name: "Pets Corner Waterford",
    address: "Unit 5, City Square Shopping Centre, Waterford, X91 P2F7",
    county: "Waterford",
    phone: "+353 51 123456",
    email: "waterford@petscorner.ie",
    website: "https://petscorner.ie/",
    rating: 4.3,
    reviewCount: 189,
    description: "Local pet store with personal service, offering quality pet food, accessories and expert advice for all types of pets and small animals.",
    services: ["Pet Food", "Small Animals", "Accessories", "Expert Advice", "Special Orders"],
    hours: "Mon-Sat: 9am–6pm, Sun: 12–5pm",
    delivers: false
  },
  {
    id: 10,
    name: "Animal Magic Kilkenny",
    address: "78 High Street, Kilkenny, R95 A2K9",
    county: "Kilkenny",
    phone: "+353 56 789012",
    email: "info@animalmagic.ie",
    website: "https://animalmagic.ie/",
    rating: 4.7,
    reviewCount: 145,
    description: "Charming independent pet store in the heart of Kilkenny, known for unique pet products and personalized customer service.",
    services: ["Unique Products", "Personalized Service", "Pet Food", "Toys", "Natural Products"],
    hours: "Mon-Sat: 9:30am–5:30pm, Sun: Closed",
    delivers: true,
    deliveryArea: "Kilkenny City and County"
  },
  {
    id: 11,
    name: "Paws & Claws Sligo",
    address: "Unit 3, Carrowroe Retail Park, Sligo, F91 X2Y8",
    county: "Sligo",
    phone: "+353 71 345678",
    email: "sligo@pawsandclaws.ie",
    website: "https://pawsandclaws.ie/",
    rating: 4.4,
    reviewCount: 112,
    description: "Northwest Ireland's premier pet store offering comprehensive range of pet supplies, food and accessories for all animals.",
    services: ["Pet Supplies", "Animal Feed", "Accessories", "Grooming Products", "Farm Supplies"],
    hours: "Mon-Sat: 9am–6pm, Sun: 12–5pm",
    delivers: true,
    deliveryArea: "Sligo and Northwest Ireland"
  },
  {
    id: 12,
    name: "The Pet Shop Online",
    address: "Warehouse: Industrial Estate, Athlone, Co. Westmeath, N37 F2K8",
    county: "Westmeath",
    phone: "+353 90 123456",
    email: "orders@petshop.ie",
    website: "https://petshoponline.ie/",
    rating: 4.8,
    reviewCount: 892,
    description: "Ireland's leading online pet retailer with fast nationwide delivery. Huge selection of pet products at competitive prices.",
    services: ["Online Shopping", "Fast Delivery", "Bulk Orders", "Subscription Service", "Price Matching"],
    hours: "Online 24/7, Customer Service: Mon-Fri 9am-6pm",
    delivers: true,
    deliveryArea: "Nationwide Ireland"
  }
];

export default petShopsData;

