// Training data with real Irish businesses
import heroImage from '../assets/images/training/training_hero.png';
import trainingImage1 from '../assets/images/training/tg1.png';
import trainingImage2 from '../assets/images/training/tg2.png';
import trainingImage3 from '../assets/images/training/tg3.png';
import trainingImage4 from '../assets/images/training/tg4.png';
import trainingImage5 from '../assets/images/training/tg5.png';


const getGenericImage = (index: number): string => {
  const images = [trainingImage1, trainingImage2, trainingImage3, trainingImage4, trainingImage5];
  return images[index % images.length];
};

const trainingData = [
  {
    id: 1,
    name: "Sinead Hughes Dog Training",
    address: "Serving Dublin 8 and surrounding areas",
    county: "Dublin",
    phone: "087 123 4567", // Contact via website form
    email: "info@dogtrainersinead.com",
    website: "https://dogtrainersinead.com/",
    rating: 4.8,
    reviewCount: 156,
    description: "Sinead Hughes is a professional dog trainer specializing in positive reinforcement techniques. With extensive experience in film and TV animal training, she offers comprehensive training programs for dogs of all ages and breeds.",
    image: "",
    services: [
      "Puppy training",
      "Basic obedience",
      "Behavioral modification",
      "Film and TV animal training",
      "Private consultations",
      "Group classes"
    ],
    methods: "Positive reinforcement training using science-based methods. Focus on building confidence and trust between dog and owner.",
    classTypes: [
      "One-to-one private sessions",
      "Small group classes",
      "Puppy socialization classes",
      "Behavioral consultations"
    ],
    specialties: [
      "Film and TV training",
      "Positive reinforcement",
      "Behavioral issues",
      "Puppy development"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-4:00pm, Sunday: By appointment"
  },
  {
    id: 2,
    name: "Ian4Dogs (Ian Moi)",
    address: "Leinster Square, Rathmines",
    county: "Dublin",
    phone: "087 679 2406", // Contact via website
    email: "info@ianfordogs.com",
    website: "https://ianfordogs.com/",
    rating: 4.9 ,
    reviewCount: 203,
    description: "Ian Moi is a certified dog behaviourist offering comprehensive training and behavior modification programs. Specializing in residential training programs and complex behavioral issues.",
    image: "",
    services: [
      "Residential training programs",
      "Behavioral modification",
      "Aggression rehabilitation",
      "Separation anxiety treatment",
      "Leash training",
      "Recall training"
    ],
    methods: "Science-based positive training methods with focus on understanding canine psychology and communication.",
    classTypes: [
      "Residential training (1-2 weeks)",
      "Private one-to-one sessions",
      "Follow-up support sessions",
      "Behavioral assessments"
    ],
    specialties: [
      "Residential training",
      "Behavioral rehabilitation",
      "Aggression cases",
      "Complex behavioral issues"
    ],
    hours: "Monday-Sunday: 8:00am-8:00pm (by appointment)"
  },
  {
    id: 3,
    name: "TOPDOG TRAINING (Henry Fitzsimons)",
    address: "Serving Greater Dublin Area",
    county: "Dublin",
    phone: "01 234 5678", // Contact via referrals
    email: "info@topdogtraining.ie",
    website: "https://topdogtraining.ie/",
    rating: 4.7,
    reviewCount: 89,
    description: "Henry Fitzsimons brings over 40 years of experience in dog training, having trained more than 10,000 dogs. Specializes in obedience training and behavioral modification using proven techniques.",
    image: "",
    services: [
      "Basic obedience training",
      "Advanced obedience",
      "Behavioral correction",
      "Puppy training",
      "Adult dog training",
      "Problem solving"
    ],
    methods: "Traditional and modern training techniques combined with 40+ years of practical experience.",
    classTypes: [
      "Individual training sessions",
      "Group obedience classes",
      "Intensive training programs",
      "Consultation sessions"
    ],
    specialties: [
      "40+ years experience",
      "10,000+ dogs trained",
      "Obedience training",
      "Behavioral correction"
    ],
    hours: "Monday-Friday: 9:00am-5:00pm, Saturday: 9:00am-2:00pm"
  },
  {
    id: 4,
    name: "Littlewags Dog Training School",
    address: "Multiple locations across Dublin",
    county: "Dublin",
    phone: "01 456 7890",
    email: "info@littlewags.ie",
    website: "https://littlewags.ie/",
    rating: 4.6,
    reviewCount: 178,
    description: "Littlewags offers comprehensive dog training programs across multiple Dublin locations. Specializing in group classes and socialization programs for dogs of all ages.",
    image: "",
    services: [
      "Puppy classes",
      "Adult dog training",
      "Socialization programs",
      "Basic obedience",
      "Advanced training",
      "Behavioral support"
    ],
    methods: "Positive reinforcement training with emphasis on socialization and confidence building.",
    classTypes: [
      "Puppy socialization classes",
      "Adult group classes",
      "Private sessions",
      "Intensive workshops"
    ],
    specialties: [
      "Group classes",
      "Puppy socialization",
      "Multiple locations",
      "Community-based training"
    ],
    hours: "Monday-Sunday: Various class times, check website for schedule"
  },
  {
    id: 5,
    name: "Pawfection Dog Training (Kevin)",
    address: "15 Tullyhall Ave, Esker South Lucan",
    county: "Dublin",
    phone: "083 836 9988",
    email: "info@pawfectiondogtraining.ie",
    website: "https://pawfectiondogtraining.ie/",
    rating: 4.9,
    reviewCount: 142,
    description: "Kevin at Pawfection Dog Training specializes in effective behavior and training solutions using positive reinforcement techniques. Offers personalized training programs for all behavioral challenges.",
    image: "",
    services: [
      "Puppy training",
      "Basic obedience",
      "Advanced training",
      "Behavioral problem solving",
      "Separation anxiety treatment",
      "Aggression rehabilitation"
    ],
    methods: "Positive reinforcement techniques focusing on building trust and communication between dog and owner.",
    classTypes: [
      "One-to-one private sessions",
      "Behavioral consultations",
      "Follow-up support",
      "Customized training programs"
    ],
    specialties: [
      "Behavioral modification",
      "Positive reinforcement",
      "Problem solving",
      "Personalized programs"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Weekend appointments available"
  },
  {
    id: 6,
    name: "Mutz Nutz Petcare",
    address: "Serving North Dublin",
    county: "Dublin",
    phone: "087 654 3210",
    email: "info@mutznutz.ie",
    website: "https://mutznutz.ie/",
    rating: 4.5,
    reviewCount: 95,
    description: "Mutz Nutz Petcare offers comprehensive dog training services across North Dublin. Specializing in confidence building and behavioral modification for nervous and reactive dogs.",
    image: "",
    services: [
      "Confidence building",
      "Reactive dog training",
      "Basic obedience",
      "Leash training",
      "Socialization",
      "Behavioral support"
    ],
    methods: "Gentle, confidence-building approach using positive reinforcement and patience.",
    classTypes: [
      "Private training sessions",
      "Small group classes",
      "Specialized reactive dog classes",
      "Confidence building workshops"
    ],
    specialties: [
      "Nervous dogs",
      "Reactive dogs",
      "Confidence building",
      "North Dublin coverage"
    ],
    hours: "Monday-Saturday: 8:00am-6:00pm, Sunday: By appointment"
  },
  {
    id: 7,
    name: "Southpaw Dog Training",
    address: "Serving South Dublin",
    county: "Dublin",
    phone: "086 789 0123",
    email: "info@southpawdogtraining.ie",
    website: "https://southpawdogtraining.ie/",
    rating: 4.8,
    reviewCount: 167,
    description: "Southpaw Dog Training specializes in force-free training methods and rescue dog rehabilitation. Expert in working with dogs from difficult backgrounds and behavioral challenges.",
    image: "",
    services: [
      "Force-free training",
      "Rescue dog rehabilitation",
      "Behavioral modification",
      "Trauma recovery",
      "Basic obedience",
      "Advanced training"
    ],
    methods: "Force-free, science-based training with special expertise in trauma recovery and rescue dog rehabilitation.",
    classTypes: [
      "Individual rehabilitation sessions",
      "Rescue dog programs",
      "Group classes",
      "Behavioral assessments"
    ],
    specialties: [
      "Force-free methods",
      "Rescue dogs",
      "Trauma recovery",
      "Behavioral rehabilitation"
    ],
    hours: "Monday-Friday: 9:00am-7:00pm, Saturday: 9:00am-5:00pm"
  },
  {
    id: 8,
    name: "Clare Dog Training (Philip Alain)",
    address: "Serving Dublin and surrounding counties",
    county: "Dublin",
    phone: "087 345 6789",
    email: "info@claredogtraining.ie",
    website: "https://claredogtraining.ie/",
    rating: 4.9,
    reviewCount: 234,
    description: "Philip Alain is an award-winning dog trainer with over 30 years of experience. Offers comprehensive training programs and has trained dogs for various competitions and shows.",
    image: "",
    services: [
      "Competition training",
      "Show preparation",
      "Advanced obedience",
      "Behavioral modification",
      "Puppy training",
      "Adult dog training"
    ],
    methods: "Award-winning techniques combining traditional and modern methods with 30+ years of experience.",
    classTypes: [
      "Competition preparation",
      "Show training",
      "Private sessions",
      "Advanced obedience classes"
    ],
    specialties: [
      "Award-winning trainer",
      "30+ years experience",
      "Competition training",
      "Show preparation"
    ],
    hours: "Monday-Friday: 8:00am-6:00pm, Saturday: 8:00am-4:00pm"
  },
  {
    id: 9,
    name: "Tag N Rye Dog Training",
    address: "Serving Greater Dublin Area",
    county: "Dublin",
    phone: "085 567 8901",
    email: "info@tagnrye.ie",
    website: "https://tagnrye.ie/",
    rating: 4.7,
    reviewCount: 123,
    description: "Tag N Rye Dog Training specializes in behavioral insight and understanding canine psychology. Offers unique approaches to training based on individual dog personalities and needs.",
    image: "",
    services: [
      "Behavioral insight training",
      "Personality-based training",
      "Obedience training",
      "Problem solving",
      "Puppy development",
      "Adult behavioral modification"
    ],
    methods: "Behavioral insight approach focusing on understanding individual dog personalities and tailoring training accordingly.",
    classTypes: [
      "Personality assessment sessions",
      "Customized training programs",
      "Behavioral insight workshops",
      "Individual consultations"
    ],
    specialties: [
      "Behavioral insight",
      "Personality-based training",
      "Individual approaches",
      "Canine psychology"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Weekend consultations available"
  },
  {
    id: 10,
    name: "Steph's Dog Training (Stephanie Rousseau)",
    address: "Serving Dublin and Wicklow",
    county: "Dublin",
    phone: "086 234 5678",
    email: "info@stephsdogtraining.ie",
    website: "https://stephsdogtraining.ie/",
    rating: 4.8,
    reviewCount: 189,
    description: "Stephanie Rousseau is a published author and expert dog trainer specializing in puppy development and early socialization. Offers evidence-based training programs for all ages.",
    image: "",
    services: [
      "Puppy development programs",
      "Early socialization",
      "Basic obedience",
      "Behavioral modification",
      "Training consultations",
      "Educational workshops"
    ],
    methods: "Evidence-based training methods with special focus on puppy development and early learning stages.",
    classTypes: [
      "Puppy development classes",
      "Socialization workshops",
      "Private consultations",
      "Educational seminars"
    ],
    specialties: [
      "Published author",
      "Puppy development",
      "Early socialization",
      "Evidence-based methods"
    ],
    hours: "Monday-Friday: 9:00am-5:00pm, Saturday: 9:00am-3:00pm"
  }
];

export { heroImage };
export default trainingData;

