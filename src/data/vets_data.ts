// Vets data with placeholder images
const vetsData = [
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
    description: "Grey Abbey Vets is a modern, fully-equipped veterinary practice dedicated to providing exceptional care for dogs and other pets. The clinic offers comprehensive services including preventative care, surgery, dental treatments, and emergency services. The team of experienced veterinarians specializes in canine medicine and is committed to ensuring the health and wellbeing of your furry family members through all stages of their lives.",
    image: "https://via.placeholder.com/400x300?text=Grey+Abbey+Vets",
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
    description: "Dublin Animal Hospital is a state-of-the-art veterinary facility offering comprehensive medical, surgical, and emergency care for dogs. The hospital features advanced diagnostic equipment, a modern surgical suite, and dedicated dog wards designed to minimize stress during hospitalization. The team includes specialists in various fields of veterinary medicine, ensuring your dog receives the highest standard of care for any condition.",
    image: "https://via.placeholder.com/400x300?text=Dublin+Animal+Hospital",
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
    description: "Village Vets is a network of veterinary clinics with a strong focus on community and personalized care for dogs and their families. The Dunboyne clinic offers a comprehensive range of services in a friendly, low-stress environment. The practice emphasizes preventative care and client education, helping dog owners make informed decisions about their pets' health. The team prides itself on building lasting relationships with clients and their canine companions.",
    image: "https://via.placeholder.com/400x300?text=Village+Vets",
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
    description: "Blacklion Pet Hospital is a purpose-built veterinary facility dedicated to providing exceptional care for dogs in a compassionate environment. The hospital offers comprehensive services from routine check-ups to complex surgical procedures. The team's approach focuses on fear-free handling techniques to reduce anxiety during veterinary visits. State-of-the-art equipment and a dedicated staff ensure that dogs receive the best possible care tailored to their individual needs.",
    image: "https://via.placeholder.com/400x300?text=Blacklion+Pet+Hospital",
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
    description: "Palmerstown Veterinary Clinic is a family-run practice with a special interest in canine medicine. The clinic offers a personal touch, with the same veterinarians seeing your dog at each visit to build trust and familiarity. The practice provides a comprehensive range of services in a warm, welcoming environment designed to make both dogs and their owners feel comfortable. Preventative care plans are tailored to each dog's specific needs based on breed, age, and lifestyle.",
    image: "https://via.placeholder.com/400x300?text=Palmerstown+Veterinary+Clinic",
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
  }
];

export default vetsData;
