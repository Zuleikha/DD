// Training data with placeholder images
const trainingData = [
  {
    id: 1,
    name: "Liberty K9 Training",
    address: "123 Training Lane, Swords, Co. Dublin",
    county: "Dublin",
    phone: "01 234 5678",
    email: "info@libertyk9.ie",
    website: "https://www.libertyk9.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "Liberty K9 Training offers comprehensive dog training services with a focus on positive reinforcement techniques. Their experienced trainers work with dogs of all ages, from puppies to senior dogs, addressing a wide range of behavioral issues and training needs. The facility includes indoor and outdoor training areas, allowing for year-round sessions regardless of weather conditions. Liberty K9 specializes in creating customized training plans tailored to each dog's personality and the owner's specific goals.",
    image: "https://via.placeholder.com/400x300?text=Liberty+K9+Training",
    services: [
      "Puppy socialization",
      "Basic obedience training",
      "Advanced obedience",
      "Behavior modification",
      "Agility training",
      "Reactive dog rehabilitation",
      "Service dog training",
      "One-on-one sessions"
    ],
    methods: "Positive reinforcement, clicker training, reward-based methods",
    classTypes: [
      "Group classes (max 6 dogs)",
      "Private sessions",
      "Board and train programs",
      "Online consultations"
    ],
    hours: "Monday-Friday: 9:00am-7:00pm, Saturday: 10:00am-4:00pm, Sunday: Closed"
  },
  {
    id: 2,
    name: "Paws Learn",
    address: "45 Canine Avenue, Malahide, Co. Dublin",
    county: "Dublin",
    phone: "01 876 5432",
    email: "training@pawslearn.ie",
    website: "https://www.pawslearn.ie",
    rating: 4.8,
    reviewCount: 156,
    description: "Paws Learn is a dog training school that emphasizes the importance of the human-canine bond in the training process. Their methodology focuses on teaching owners how to communicate effectively with their dogs, creating a strong foundation for lifelong learning. The trainers at Paws Learn are certified in various training disciplines and regularly update their skills through continuing education. The facility offers both indoor and outdoor training spaces in a calm, distraction-controlled environment.",
    image: "https://via.placeholder.com/400x300?text=Paws+Learn",
    services: [
      "Puppy foundations",
      "Basic manners",
      "Loose-leash walking",
      "Recall training",
      "Trick training",
      "Therapy dog preparation",
      "Behavioral consultations",
      "Owner education workshops"
    ],
    methods: "Force-free training, relationship-based approach, science-based methods",
    classTypes: [
      "Small group classes (max 4 dogs)",
      "Private training",
      "Day training",
      "Workshops for specific skills"
    ],
    hours: "Tuesday-Friday: 10:00am-8:00pm, Saturday-Sunday: 9:00am-5:00pm, Monday: Closed"
  },
  {
    id: 3,
    name: "Bark Busters",
    address: "78 Woofington Road, Lucan, Co. Dublin",
    county: "Dublin",
    phone: "01 555 7890",
    email: "dublin@barkbusters.ie",
    website: "https://www.barkbusters.ie",
    rating: 4.7,
    reviewCount: 213,
    description: "Bark Busters offers in-home dog training services, bringing professional training directly to your doorstep. Their unique approach focuses on understanding canine communication and teaching owners how to establish themselves as the pack leader. The trainers address a wide range of behavioral issues, from basic obedience to complex problems like aggression and separation anxiety. Bark Busters' programs include lifetime support, ensuring continued assistance as new challenges arise throughout your dog's life.",
    image: "https://via.placeholder.com/400x300?text=Bark+Busters",
    services: [
      "In-home training",
      "Puppy management",
      "Obedience training",
      "Aggression rehabilitation",
      "Separation anxiety treatment",
      "Excessive barking solutions",
      "Door manners",
      "Leash reactivity"
    ],
    methods: "Vocal communication, body language, consistency training",
    classTypes: [
      "One-on-one in-home sessions",
      "Behavior adjustment programs",
      "Lifetime support guarantee"
    ],
    hours: "Monday-Saturday: 8:00am-8:00pm (by appointment), Sunday: Limited appointments"
  },
  {
    id: 4,
    name: "Canine College",
    address: "12 Dogwood Business Park, Blanchardstown, Dublin 15",
    county: "Dublin",
    phone: "01 276 8901",
    email: "enroll@caninecollege.ie",
    website: "https://www.caninecollege.ie",
    rating: 4.9,
    reviewCount: 178,
    description: "Canine College is a premier dog training academy offering structured training programs from basic obedience to specialized skills. Their facility features purpose-built training rooms, agility equipment, and simulated home environments for real-world training scenarios. The trainers hold certifications from internationally recognized organizations and use evidence-based training methods. Canine College offers a unique curriculum-based approach with clear progression through different levels, allowing dogs and owners to build skills systematically.",
    image: "https://via.placeholder.com/400x300?text=Canine+College",
    services: [
      "Puppy kindergarten",
      "Basic obedience levels 1-3",
      "Advanced obedience",
      "Canine Good Citizen preparation",
      "Agility training",
      "Scent work",
      "Trick training certification",
      "Specialized problem-solving"
    ],
    methods: "Balanced training, positive reinforcement, structured learning",
    classTypes: [
      "Structured group classes",
      "Private lessons",
      "Intensive boot camps",
      "Specialized workshops"
    ],
    hours: "Monday-Friday: 10:00am-9:00pm, Saturday: 9:00am-6:00pm, Sunday: 10:00am-4:00pm"
  },
  {
    id: 5,
    name: "Dog Training Ireland",
    address: "56 Kennel Lane, Bray, Co. Wicklow",
    county: "Wicklow",
    phone: "01 287 6543",
    email: "hello@dogtrainingireland.ie",
    website: "https://www.dogtrainingireland.ie",
    rating: 4.6,
    reviewCount: 142,
    description: "Dog Training Ireland offers a holistic approach to dog training, addressing physical, mental, and emotional aspects of canine behavior. Their training programs incorporate elements of play, enrichment, and relationship-building alongside traditional obedience work. The facility includes secure training fields, sensory gardens, and obstacle courses designed to develop confidence and problem-solving skills. Dog Training Ireland specializes in working with rescue dogs and those with complex behavioral needs, using gentle, progressive methods.",
    image: "https://via.placeholder.com/400x300?text=Dog+Training+Ireland",
    services: [
      "Rescue dog rehabilitation",
      "Confidence building",
      "Environmental enrichment",
      "Impulse control training",
      "Socialization therapy",
      "Reactive dog classes",
      "Senior dog engagement",
      "Adventure walks with training"
    ],
    methods: "Holistic approach, enrichment-based training, gentle guidance",
    classTypes: [
      "Specialized group sessions",
      "Rehabilitation programs",
      "Enrichment workshops",
      "Training walks"
    ],
    hours: "Wednesday-Sunday: 9:00am-6:00pm, Monday-Tuesday: Closed"
  }
];

export default trainingData;
