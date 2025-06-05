// Vets data with placeholder images
const vetsData = [
  // Existing entries (id: 1–5)...
  {
    id: 1,
    name: "Grey Abbey Vets",
    address: "123 Main Street, Kildare Town, Co. Kildare",
    county: "Kildare",
    phone: "045 123 4567",
    email: "info@greyabbeyvets.ie",
    website: "https://www.greyabbeyvets.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "Grey Abbey Vets is a modern, fully-equipped veterinary practice dedicated to providing exceptional care for dogs and other pets.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", 
    services: [
      "Wellness examinations",
      "Vaccinations",
      "Microchipping",
      "Surgery",
      "Dental care",
      "X-ray and ultrasound",
      "Laboratory testing",
      "Emergency services"
    ],
    specialties: [
      "Canine medicine",
      "Orthopedic surgery",
      "Geriatric care"
    ],
    hours: "Monday-Friday: 8:00am-7:00pm, Saturday: 9:00am-4:00pm, Sunday: Emergency only"
  },
  {
    id: 2,
    name: "Dublin Animal Hospital",
    address: "45 Bark Avenue, Dublin 4",
    county: "Dublin",
    phone: "01 765 4321",
    email: "reception@dublinanimalhospital.ie",
    website: "https://www.dublinanimalhospital.ie",
    rating: 4.8,
    reviewCount: 243,
    description: "State-of-the-art facility offering comprehensive medical, surgical, and emergency care for dogs.",
   image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",  // Example URL (adjust if incorrect)
    services: [
      "24/7 emergency care",
      "Advanced diagnostics",
      "Complex surgery",
      "Internal medicine",
      "Cardiology",
      "Dermatology",
      "Rehabilitation therapy",
      "Intensive care"
    ],
    specialties: [
      "Emergency and critical care",
      "Soft tissue surgery",
      "Oncology",
      "Neurology"
    ],
    hours: "Open 24 hours, 7 days a week"
  },
  {
    id: 3,
    name: "Village Vets",
    address: "78 Paws Lane, Dunboyne, Co. Meath",
    county: "Meath",
    phone: "01 825 9465",
    email: "info@villagevets.ie",
    website: "https://www.villagevets.ie",
    rating: 4.7,
    reviewCount: 176,
    description: "Village Vets is a community-focused network of clinics with personalized care for dogs.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", 
    services: [
      "Preventative care",
      "Vaccinations",
      "Microchipping",
      "Surgery",
      "Dental care",
      "Nutritional counseling",
      "Behavior consultations",
      "Puppy wellness programs"
    ],
    specialties: [
      "Preventative medicine",
      "Dental health",
      "Weight management"
    ],
    hours: "Monday-Friday: 8:30am-6:30pm, Saturday: 9:00am-1:00pm, Sunday: Closed"
  },
  {
    id: 4,
    name: "Blacklion Pet Hospital",
    address: "12 Veterinary Way, Greystones, Co. Wicklow",
    county: "Wicklow",
    phone: "01 287 4321",
    email: "care@blacklionpethospital.ie",
    website: "https://www.blacklionpethospital.ie",
    rating: 4.9,
    reviewCount: 215,
    description: "Compassionate veterinary care with modern facilities in Greystones.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", 
    services: [
      "Wellness care",
      "Vaccinations",
      "Surgery",
      "Dental procedures",
      "Digital radiography",
      "Ultrasound",
      "In-house laboratory",
      "Pharmacy"
    ],
    specialties: [
      "Fear-free practice",
      "Soft tissue surgery",
      "Senior dog care"
    ],
    hours: "Monday-Friday: 8:00am-7:00pm, Saturday: 9:00am-4:00pm, Sunday: 10:00am-1:00pm (emergencies only)"
  },
  {
    id: 5,
    name: "Palmerstown Veterinary Clinic",
    address: "56 Kennel Road, Palmerstown, Dublin 20",
    county: "Dublin",
    phone: "01 623 7890",
    email: "info@palmerstownvet.ie",
    website: "https://www.palmerstownvet.ie",
    rating: 4.6,
    reviewCount: 142,
    description: "Family-run veterinary practice offering trusted care in a warm setting.",
    image:"https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
    services: [
      "Wellness examinations",
      "Vaccinations",
      "Microchipping",
      "Neutering",
      "Dental care",
      "Geriatric care",
      "Nutritional advice",
      "Minor surgical procedures"
    ],
    specialties: [
      "Breed-specific health management",
      "Geriatric medicine",
      "Preventative care"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-1:00pm, Sunday: Closed"
  },

  // 🔽 NEW entries start here
  {
    id: 6,
    name: "Veterinary Specialists Ireland",
    address: "Clonmahon, Summerhill, Co. Meath",
    county: "Meath",
    phone: "046 955 7551",
    email: "info@vetspecialists.ie",
    website: "https://vetspecialists.ie",
    rating: 4.9,
    reviewCount: 98,
    description: "A referral-only veterinary hospital offering cutting-edge diagnostics and treatment across specialties such as neurology, oncology, and orthopaedics.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    services: ["Advanced diagnostics", "Specialist consultations", "MRI/CT imaging", "Emergency surgery"],
    specialties: ["Neurology", "Orthopaedics", "Oncology"],
    hours: "Monday-Friday: 8:00am-6:00pm, Emergency on-call 24/7"
  },
  {
    id: 7,
    name: "All Care Veterinary Hospital",
    address: "Park Road, Killarney, Co. Kerry",
    county: "Kerry",
    phone: "064 663 5889",
    email: "info@allcarevet.ie",
    website: "https://www.allcarevet.ie",
    rating: 4.8,
    reviewCount: 132,
    description: "Trusted family-run veterinary hospital providing compassionate care with modern facilities in the heart of Kerry.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    services: ["Routine checkups", "Dental surgery", "X-ray", "Spay & neuter", "Microchipping"],
    specialties: ["Small animal surgery", "Preventative care"],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 10:00am-2:00pm"
  },
  {
    id: 8,
    name: "Sunbeam Veterinary Hospital",
    address: "Unit 1, Blackpool Retail Park, Cork",
    county: "Cork",
    phone: "021 439 7722",
    email: "info@sunbeamvets.com",
    website: "https://www.sunbeamvets.com",
    rating: 4.7,
    reviewCount: 201,
    description: "Sunbeam offers top-tier veterinary services across Cork with branches in Blackpool, Passage West, and Cobh.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    services: ["Vaccinations", "Diagnostics", "Surgery", "Dental care", "Puppy classes"],
    specialties: ["Rehabilitation", "Canine behavior", "Chronic pain management"],
    hours: "Monday-Saturday: 8:00am-7:00pm, Sunday: Emergencies only"
  },
  {
    id: 9,
    name: "Adare Veterinary Clinic",
    address: "Main Street, Adare, Co. Limerick",
    county: "Limerick",
    phone: "061 396 800",
    email: "hello@adarevets.ie",
    website: "https://www.adarevets.ie",
    rating: 4.8,
    reviewCount: 87,
    description: "Friendly and experienced veterinary team in Adare offering complete pet care and diagnostics.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    services: ["Examinations", "Microchipping", "Surgery", "Flea/tick treatment"],
    specialties: ["Dermatology", "Puppy care", "Diagnostics"],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-1:00pm"
  },
  
  {
    id: 10,
    name: "All Creatures Veterinary Clinic",
    address: "Circular Road, Roscommon Town, Co. Roscommon",
    county: "Roscommon",
    phone: "090 662 5822",
    email: "reception@allcreatures.ie",
    website: "https://www.allcreatures.ie",
    rating: 4.7,
    reviewCount: 94,
    description: "Providing compassionate and professional pet care in Roscommon for over 20 years.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    services: ["Vaccinations", "Diagnostics", "Surgery", "Dental work", "Pet travel documentation"],
    specialties: ["General practice", "Canine wellness", "Soft tissue surgery"],
    hours: "Monday-Friday: 9:00am-5:30pm, Saturday: 9:00am-12:00pm"
  },
  {
    id: 11,
    name: "Vet Me Featured Listing",
    website: "https://https://www.vetme.ie/",
    
    description: "Provide Comprehensive list of vet clinics in Irealand",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    
  }
];

export default vetsData;
