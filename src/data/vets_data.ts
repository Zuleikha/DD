// Vets data with placeholder images
const vetsData = [
  // Existing entries (id: 1–5)...
  {
    id: 1,
    name: "Grey Abbey Vets",
    address: "123 Main Street, Kildare Town, Co. Kildare",
    county: "Kildare",
    phone: "(045) 522 390",
    email: "info@greyabbeyvets.ie",
    website: "https://www.greyabbeyvets.com",
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
    name: "The Animal Hospital",
    address: "37A Main Rd, Tallaght, Co. Dublin",
    county: "Dublin",
    phone: "01 4515930",
    email: " ",
    website: " ",
    rating: 4.8,
    reviewCount: 0,
    description: "State-of-the-art facility offering comprehensive medical, surgical, and emergency care for dogs.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",  // Example URL (adjust if incorrect)
    services: [
      "Ambulance Service",
      "Annual Health Examination",
      "Canine Vaccines",
      "Clinic Service",
      "Dental Procedure",
      "Dog Grooming",
      "Flea Treatment",
      "Health Checks",
      "Large Animal",
      "Oral Health",
      "Pet Care",
      "Preventative Health Care",
      "Puppy Party",
      "Veterinary Practice",
      "Veterinary Surgeries",
      "Vets Practice"
    ],
    specialties: [
      "Emergency and critical care",
  
    ],
    hours: "Sunday - Monday 9.00 am - 7.30 pm, Saturday 9.30 am - 4.00 pm, 7 days a week"
  },
  {
    id: 3,
    name: "Village Vets",
    address: "Avondale Terrace, 1 Avondale Square, Dunboyne, Co. Meath, A86 RF66",
    county: "Meath",
    phone: "(01) 825 1125",
    email: "info@villagevets.ie",
    website: "https://www.villagevets.ie/clinics/dunboyne-vets",
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
    hours: "Monday-Friday: 9:00 am-7:00pm, Saturday: 9:00am-1:00pm, Sunday: Closed"
  },
  {
    id: 4,
    name: "Blacklion Pet Hospital",
    address: "12 Veterinary Way, Greystones, Co. Wicklow",
    county: "Wicklow",
    phone: "(01) 287 5283",
    email: "reception@vets.ie",
    website: "https://www.vets.ie/?utm_source=gmb&utm_medium=organic&utm_campaign=attribute",
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
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-12:00pm, Sunday: 10:00am-1:00pm (emergencies only)"
  },
  {
    id: 5,
    name: "Palmerstown Veterinary Clinic",
    address: "Old Lucan Road, Palmerstown Lower, Dublin, D20 HC86",
    county: "Dublin",
    phone: "01 623 70 44",
    email: "info@palmerstownvet.ie",
    website: "https://www.palmerstownvets.ie",
    rating: 4.6,
    reviewCount: 142,
    description: "Family-run veterinary practice offering trusted care in a warm setting.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
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
    phone: "064 6637333",
    email: "allcarevetskillarney@gmail.com",
    website: "https://www.allcarevets.ie",
    rating: 4.8,
    reviewCount: 132,
    description: "Trusted family-run veterinary hospital providing compassionate care with modern facilities in the heart of Kerry.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image
    services: ["Routine checkups", "Dental surgery", "X-ray", "Spay & neuter", "Microchipping"],
    specialties: ["Small animal surgery", "Preventative care"],
    hours: "Monday-Friday: 8:30am-6:00pm, Saturday: 9:00am-6:00pm"
  },
  {
    id: 8,
    name: "Sunbeam Veterinary Hospital",
    address: "Northpoint Business Park, Cork, T23 FXY9",
    county: "Cork",
    phone: "+353 21 439 1600",
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
    address: "Adare Veterinary Clinic,Curraghbeg, Adare, Co. Limerick, V94EW6R",
    county: "Limerick",
    phone: "061 396390",
    email: "info@adarevets.com",
    website: "https://www.adarevets.com",
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
    address: "Lanesboro Road,Roscommon Town Co. Roscommon",
    county: "Roscommon",
    phone: "090 662 6898",
    email: "allcreatures1234@gmail.com",
    website: "https://allcreaturesvets.ie",
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
    website: "https://www.vetme.ie",

    description: "Provide Comprehensive list of vet clinics in Irealand",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80", // Generic vet clinic image

  }
];

export default vetsData;
