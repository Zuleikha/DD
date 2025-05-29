// Real dog minder data collected from Irish platforms
const dogMinders = [
  {
    id: 1,
    name: "Shay - Give Me Your Paw",
    address: "Dublin, Ireland",
    rating: 5.0,
    reviewCount: 195,
    description: "Super Sitter with 41 repeat guests. Shay is just the best. So kind and patient and calming. She speaks dog!",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Sarah Jane - K9 Manners Home Boarding",
    address: "Claremorris, Ireland",
    rating: 5.0,
    reviewCount: 199,
    description: "Dog boarding and training services with 22 repeat guests. Professional trainer offering personalized care.",
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Niamh - The Dog Mother",
    address: "Dublin, Ireland",
    rating: 5.0,
    reviewCount: 667,
    description: "Super Sitter with 43 repeat guests. Very accommodating for overnight stays, even at short notice.",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Ruth - Ultimate Dog Paradise",
    address: "Galway, Ireland",
    rating: 5.0,
    reviewCount: 178,
    description: "Super Sitter offering a pet-free home for your dog with 25 repeat guests. Dogs love staying here!",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    name: "Freda - A Home From Home",
    address: "Cork, Ireland",
    rating: 5.0,
    reviewCount: 332,
    description: "Super Sitter with 55 repeat guests. Freda and her dog Kim provide a loving environment for your pet.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 6,
    name: "Charlie - Happy Paws",
    address: "Dublin, Ireland",
    rating: 4.9,
    reviewCount: 217,
    description: "Super Sitter with 26 repeat guests. Charlie is great with puppies and first-time boarders.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 7,
    name: "Natalia - PetHomecare",
    address: "Limerick, Ireland",
    rating: 5.0,
    reviewCount: 193,
    description: "Super Sitter with 33 repeat guests. Pets sleep like babies and get plenty of updates during their stay.",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 8,
    name: "Rupert - Wolf Hall Dog Haven",
    address: "Dublin, Ireland",
    rating: 5.0,
    reviewCount: 174,
    description: "Super Sitter with 31 repeat guests. Rupert is a dog lover and enthusiast who provides exceptional care.",
    image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 9,
    name: "Mary - Galway City",
    address: "Galway, Ireland",
    rating: 5.0,
    reviewCount: 120,
    description: "Super Sitter offering dog boarding and walking services in Galway City with excellent reviews.",
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 10,
    name: "Pet Sitters Ireland",
    address: "Nationwide, Ireland",
    rating: 4.9,
    reviewCount: 245,
    description: "Award-winning pet sitting service covering all of Ireland. 2025 Pet Sitting Business of the Year.",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 11,
    name: "Castleknock Dog Boarding",
    address: "Northside, County Dublin",
    rating: 4.8,
    reviewCount: 87,
    description: "Family-run dog boarding service in Castleknock with a spacious garden for dogs to play.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 12,
    name: "Kai's Pet Care",
    address: "Dublin, County Dublin",
    rating: 4.9,
    reviewCount: 156,
    description: "Professional pet care service offering boarding, walking, and daycare in Dublin.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 13,
    name: "Walking Paws",
    address: "Dublin, County Dublin",
    rating: 4.8,
    reviewCount: 112,
    description: "Specialized dog walking and pet sitting service with experienced handlers.",
    image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 14,
    name: "Sara's Pet Taxi",
    address: "Dublin, County Dublin",
    rating: 4.7,
    reviewCount: 68,
    description: "Pet taxi and sitting service, helping transport your pets safely across Dublin.",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 15,
    name: "Bark & Stay Dog Minders",
    address: "Cork, Ireland",
    rating: 4.7,
    reviewCount: 92,
    description: "Family-run dog minding service in Cork with a large secure garden and plenty of walks.",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 16,
    name: "Paws & Relax",
    address: "Waterford, Ireland",
    rating: 4.8,
    reviewCount: 76,
    description: "Home-based dog minding service offering a calm, relaxing environment for your pet.",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 17,
    name: "Happy Tails Dog Care",
    address: "Kilkenny, Ireland",
    rating: 4.9,
    reviewCount: 64,
    description: "Professional dog minding with daily updates and photos of your pet's adventures.",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 18,
    name: "Woof & Wag Minders",
    address: "Belfast, Northern Ireland",
    rating: 4.8,
    reviewCount: 108,
    description: "Experienced dog minders offering home boarding, daycare, and walking services.",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 19,
    name: "Fetch & Stay",
    address: "Galway, Ireland",
    rating: 4.7,
    reviewCount: 83,
    description: "Dog minding service with a focus on exercise and outdoor activities for active dogs.",
    image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 20,
    name: "Pawsome Care",
    address: "Limerick, Ireland",
    rating: 4.9,
    reviewCount: 71,
    description: "Loving home environment for your dog with experienced minders and regular updates.",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

export default dogMinders;
