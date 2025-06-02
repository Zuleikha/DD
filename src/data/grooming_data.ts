// Grooming data with placeholder images
const groomingData = [
  {
    id: 1,
    name: "Fitzsimons Dog Grooming",
    address: "123 Pamper Lane, Blackrock, Co. Dublin",
    county: "Dublin",
    phone: "01 234 5678",
    email: "info@fitzsimonsgrooming.ie",
    website: "https://www.fitzsimonsgrooming.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "Fitzsimons Dog Grooming is a premium grooming salon offering a comprehensive range of services for dogs of all breeds and sizes. Their experienced groomers specialize in breed-specific cuts as well as creative styling. The salon uses high-quality, natural products and takes a gentle approach to ensure a stress-free experience for your dog. Fitzsimons prides itself on attention to detail and creating a calm, welcoming environment for their four-legged clients.",
    image: "https://via.placeholder.com/400x300?text=Fitzsimons+Dog+Grooming",
    services: [
      "Full groom (bath, dry, brush, cut, style)",
      "Bath and brush",
      "Breed-specific styling",
      "Hand-stripping",
      "De-shedding treatments",
      "Nail trimming",
      "Ear cleaning",
      "Teeth brushing"
    ],
    specialties: [
      "Show dog preparation",
      "Nervous dog handling",
      "Senior dog care",
      "Puppy introduction to grooming"
    ],
    hours: "Tuesday-Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 2,
    name: "Posh Paws",
    address: "45 Canine Avenue, Dun Laoghaire, Co. Dublin",
    county: "Dublin",
    phone: "01 876 5432",
    email: "appointments@poshpaws.ie",
    website: "https://www.poshpaws.ie",
    rating: 4.8,
    reviewCount: 156,
    description: "Posh Paws is a boutique dog grooming salon that combines luxury treatments with holistic care for your canine companion. The salon features spa-like amenities including aromatherapy, massage, and premium organic products. Each grooming session is tailored to the individual dog's needs and temperament, with extra time allocated to ensure a relaxed experience. Posh Paws specializes in transforming rescue dogs and helping dogs with skin conditions through specialized treatments.",
    image: "https://via.placeholder.com/400x300?text=Posh+Paws",
    services: [
      "Luxury full groom",
      "Spa packages",
      "Aromatherapy baths",
      "Massage therapy",
      "Paw treatments",
      "Facial scrubs",
      "Medicated baths",
      "Creative coloring (pet-safe dyes)"
    ],
    specialties: [
      "Rescue dog transformation",
      "Skin condition treatments",
      "Anxiety reduction techniques",
      "Coat restoration"
    ],
    hours: "Monday-Friday: 8:00am-6:00pm, Saturday: 9:00am-4:00pm, Sunday: Closed"
  },
  {
    id: 3,
    name: "Fluffy Friends",
    address: "78 Woofington Road, Swords, Co. Dublin",
    county: "Dublin",
    phone: "01 555 7890",
    email: "hello@fluffyfriends.ie",
    website: "https://www.fluffyfriends.ie",
    rating: 4.7,
    reviewCount: 213,
    description: "Fluffy Friends is a family-run dog grooming salon with a focus on creating a positive, fear-free grooming experience. The salon uses a cage-free approach, allowing dogs to relax in open spaces between grooming stages. Their team is trained in low-stress handling techniques and takes time to build rapport with each dog. Fluffy Friends is particularly well-regarded for their work with puppies, introducing them gradually to the grooming process to build positive associations for life.",
    image: "https://via.placeholder.com/400x300?text=Fluffy+Friends",
    services: [
      "Full grooming service",
      "Express grooming",
      "Puppy packages",
      "Breed-specific styling",
      "De-matting",
      "Flea treatments",
      "Anal gland expression",
      "Paw pad trimming"
    ],
    specialties: [
      "Fear-free grooming",
      "Puppy introduction programs",
      "Double-coated breed management",
      "Anxious dog handling"
    ],
    hours: "Tuesday-Saturday: 8:30am-5:30pm, Sunday-Monday: Closed"
  },
  {
    id: 4,
    name: "Pampered Pooch",
    address: "12 Dogwood Business Park, Santry, Dublin 9",
    county: "Dublin",
    phone: "01 276 8901",
    email: "groom@pamperedpooch.ie",
    website: "https://www.pamperedpooch.ie",
    rating: 4.9,
    reviewCount: 178,
    description: "Pampered Pooch is a modern, state-of-the-art dog grooming salon offering premium services in a clean, bright environment. The salon features hydraulic tables, high-velocity dryers, and specialized bathing systems for efficient, thorough grooming. Each groomer at Pampered Pooch is certified and specializes in particular breeds or coat types. The salon takes a methodical approach to grooming, with detailed records kept of each dog's preferences, sensitivities, and styling requirements for consistent results.",
    image: "https://via.placeholder.com/400x300?text=Pampered+Pooch",
    services: [
      "Comprehensive grooming",
      "Styling consultations",
      "Hydro bath therapy",
      "Specialized coat treatments",
      "Nail grinding",
      "Ear plucking",
      "Sanitary trims",
      "Paw balm application"
    ],
    specialties: [
      "Precision hand-scissoring",
      "Asian fusion styling",
      "Show preparation",
      "Corrective grooming"
    ],
    hours: "Monday-Friday: 8:00am-6:00pm, Saturday: 8:00am-4:00pm, Sunday: Closed"
  },
  {
    id: 5,
    name: "Doggy Style Grooming",
    address: "56 Kennel Lane, Bray, Co. Wicklow",
    county: "Wicklow",
    phone: "01 287 6543",
    email: "woof@doggystyle.ie",
    website: "https://www.doggystyle.ie",
    rating: 4.6,
    reviewCount: 142,
    description: "Doggy Style Grooming offers creative and traditional grooming services with a focus on the latest trends in dog styling. The salon specializes in transformative grooms that enhance your dog's natural features while keeping them comfortable and functional. The team regularly attends international grooming competitions and workshops to stay current with techniques and styles. Doggy Style is known for their before-and-after transformation photos and their ability to work with challenging coats.",
    image: "https://via.placeholder.com/400x300?text=Doggy+Style+Grooming",
    services: [
      "Custom styling",
      "Creative grooming",
      "Pattern work",
      "Traditional breed cuts",
      "De-shedding treatments",
      "Color enhancement (pet-safe)",
      "Facial styling",
      "Paw-dicures"
    ],
    specialties: [
      "Creative styling",
      "Mixed breed custom cuts",
      "Coat pattern design",
      "Extreme makeovers"
    ],
    hours: "Wednesday-Sunday: 9:00am-6:00pm, Monday-Tuesday: Closed"
  }
];

export default groomingData;
