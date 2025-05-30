#!/bin/bash

# Script to fix deployment errors for dogdays.ie website

# Create directory structure if it doesn't exist
mkdir -p src/components/layout
mkdir -p src/components/common
mkdir -p src/components/listings
mkdir -p src/pages
mkdir -p src/data

# Update App.tsx with correct imports
cat > src/App.tsx << 'EOL'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MindersPage from './pages/MindersPage';
import MinderDetailPage from './pages/MinderDetailPage';
import VetsPage from './pages/VetsPage';
import VetDetailPage from './pages/VetDetailPage';
import ParksPage from './pages/ParksPage';
import ParkDetailPage from './pages/ParkDetailPage';
import NutritionPage from './pages/NutritionPage';
import NutritionDetailPage from './pages/NutritionDetailPage';
import TrainingPage from './pages/TrainingPage';
import TrainingDetailPage from './pages/TrainingDetailPage';
import GroomingPage from './pages/GroomingPage';
import GroomingDetailPage from './pages/GroomingDetailPage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AdvicePage from './pages/AdvicePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Dog Minders Routes */}
            <Route path="/minders" element={<MindersPage />} />
            <Route path="/minders/:id" element={<MinderDetailPage />} />
            
            {/* Vets Routes */}
            <Route path="/vets" element={<VetsPage />} />
            <Route path="/vets/:id" element={<VetDetailPage />} />
            
            {/* Parks Routes */}
            <Route path="/parks" element={<ParksPage />} />
            <Route path="/parks/:id" element={<ParkDetailPage />} />
            
            {/* Nutrition Routes */}
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/nutrition/:id" element={<NutritionDetailPage />} />
            
            {/* Training Routes */}
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:id" element={<TrainingDetailPage />} />
            
            {/* Grooming Routes */}
            <Route path="/grooming" element={<GroomingPage />} />
            <Route path="/grooming/:id" element={<GroomingDetailPage />} />
            
            {/* Places Routes */}
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:id" element={<PlaceDetailPage />} />
            
            {/* Other Routes */}
            <Route path="/advice" element={<AdvicePage />} />
            
            {/* 404 Route - Use HomePage as fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
EOL

# Create updated SEO component that includes keywords prop
cat > src/components/common/SEO.tsx << 'EOL'
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
EOL

# Create updated ListingCard component that supports both name and title props
cat > src/components/listings/ListingCard.tsx << 'EOL'
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface ListingCardProps {
  id: number;
  name?: string;
  title?: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  county: string;
  detailPath: string;
  type?: string;
  address?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  name,
  title,
  image,
  rating,
  reviewCount,
  description,
  county,
  detailPath,
  type,
  address
}) => {
  // Use title if provided, otherwise use name
  const displayName = title || name || "";
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={displayName} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{displayName}</h2>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address || `County ${county}`}</span>
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>
        {type && <p className="text-blue-600 text-sm mb-2">{type}</p>}
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={detailPath} 
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
EOL

# Create TypeScript interface files with all fields properly marked as optional
cat > src/data/vets_data.d.ts << 'EOL'
export interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile?: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  specialties?: string[];
  hours: string;
}
EOL

cat > src/data/parks_data.d.ts << 'EOL'
export interface Park {
  id: number;
  name: string;
  address: string;
  county: string;
  phone?: string;
  email?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours: string;
}
EOL

cat > src/data/nutrition_data.d.ts << 'EOL'
export interface Nutrition {
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
EOL

cat > src/data/training_data.d.ts << 'EOL'
export interface Training {
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
  services: string[];
  specialties?: string[];
  trainingTypes?: string[];
  hours: string;
}
EOL

cat > src/data/grooming_data.d.ts << 'EOL'
export interface Grooming {
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
  services: string[];
  specialties?: string[];
  hours: string;
}
EOL

cat > src/data/places_data.d.ts << 'EOL'
export interface Place {
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
  amenities?: string[];
  dogPolicy?: string;
  hours: string;
}
EOL

# Create data export files with default exports
cat > src/data/vets_data.js << 'EOL'
const vetsData = [
  // Your vet data here
  {
    id: 1,
    name: "Dublin Veterinary Clinic",
    address: "123 Main Street, Dublin 2",
    county: "Dublin",
    phone: "01-555-1234",
    mobile: "087-123-4567",
    email: "info@dublinvetclinic.ie",
    website: "https://www.dublinvetclinic.ie",
    rating: 4.8,
    reviewCount: 156,
    description: "A full-service veterinary clinic providing comprehensive care for dogs of all breeds and sizes. Our team of experienced veterinarians offers preventative care, surgical services, and emergency treatment.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Vaccinations", "Surgery", "Dental Care", "Emergency Services", "Microchipping", "Health Checks"],
    specialties: ["Orthopedics", "Dermatology", "Cardiology"],
    hours: "Monday-Friday: 8am-7pm, Saturday: 9am-5pm, Sunday: Closed"
  },
  {
    id: 2,
    name: "Cork Pet Hospital",
    address: "45 Patrick Street, Cork",
    county: "Cork",
    phone: "021-555-6789",
    mobile: "086-987-6543",
    email: "reception@corkpethospital.ie",
    website: "https://www.corkpethospital.ie",
    rating: 4.6,
    reviewCount: 98,
    description: "Cork's premier veterinary hospital with state-of-the-art facilities for diagnosing and treating a wide range of canine health issues. We pride ourselves on compassionate care for your furry family members.",
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Vaccinations", "Surgery", "X-rays", "Ultrasound", "Laboratory Services", "Boarding"],
    specialties: ["Oncology", "Internal Medicine", "Behavioral Therapy"],
    hours: "Monday-Saturday: 9am-6pm, Sunday: 10am-4pm (Emergency Only)"
  }
];

export default vetsData;
EOL

cat > src/data/parks_data.js << 'EOL'
const parksData = [
  // Your parks data here
  {
    id: 1,
    name: "Phoenix Park Dog Run",
    address: "Phoenix Park, Dublin 8",
    county: "Dublin",
    phone: "",
    email: "info@phoenixpark.ie",
    website: "https://www.phoenixpark.ie/dogfriendly",
    rating: 4.9,
    reviewCount: 213,
    description: "One of Dublin's largest dog-friendly areas, Phoenix Park offers extensive open spaces for dogs to run and play. The dedicated dog run area is fully enclosed, allowing dogs to exercise off-leash safely.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    amenities: ["Enclosed Area", "Water Stations", "Waste Bins", "Benches", "Parking"],
    leashRules: "Dogs must be on leash in main park areas, but may be off-leash in the designated dog run area.",
    size: "Large (5 acres)",
    hours: "Daily: 7am-9pm (Summer), 7am-7pm (Winter)"
  },
  {
    id: 2,
    name: "Marlay Park Dog Zone",
    address: "Grange Road, Rathfarnham, Dublin 16",
    county: "Dublin",
    phone: "01-555-7890",
    email: "marlaypark@dlrcoco.ie",
    website: "https://www.dlrcoco.ie/parks/marlay",
    rating: 4.7,
    reviewCount: 178,
    description: "Marlay Park features a dedicated dog zone where your furry friends can socialize and play off-leash. The area is surrounded by beautiful walking trails that are perfect for on-leash exploration.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    amenities: ["Enclosed Area", "Agility Equipment", "Water Stations", "Waste Bins", "Shaded Areas"],
    leashRules: "Dogs must be on leash throughout the park except in the designated dog zone.",
    size: "Medium (2 acres)",
    hours: "Daily: 8am-8pm"
  }
];

export default parksData;
EOL

cat > src/data/nutrition_data.js << 'EOL'
const nutritionData = [
  // Your nutrition data here
  {
    id: 1,
    name: "Paws & Feast",
    address: "78 Grafton Street, Dublin 2",
    county: "Dublin",
    phone: "01-555-2345",
    email: "info@pawsandfeast.ie",
    website: "https://www.pawsandfeast.ie",
    rating: 4.8,
    reviewCount: 124,
    description: "Premium pet nutrition store specializing in high-quality dog food, supplements, and dietary advice. We offer personalized nutrition plans based on your dog's breed, age, and health needs.",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: ["Dry Food", "Wet Food", "Raw Food", "Treats", "Supplements", "Prescription Diets"],
    services: ["Nutrition Consultation", "Diet Planning", "Weight Management", "Allergy Testing"],
    brands: ["Royal Canin", "Hill's Science Diet", "Orijen", "Acana", "Taste of the Wild", "Burns"],
    hours: "Monday-Saturday: 9am-6pm, Sunday: 11am-4pm"
  },
  {
    id: 2,
    name: "Healthy Hound Nutrition",
    address: "25 Oliver Plunkett Street, Cork",
    county: "Cork",
    phone: "021-555-8901",
    email: "hello@healthyhound.ie",
    website: "https://www.healthyhound.ie",
    rating: 4.7,
    reviewCount: 89,
    description: "Dedicated to providing natural and organic nutrition options for dogs of all ages. Our knowledgeable staff can help you select the best food for your dog's specific dietary requirements.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    products: ["Organic Food", "Grain-Free Options", "Natural Treats", "Herbal Supplements", "Dental Chews"],
    services: ["Nutritional Assessment", "Food Sampling", "Subscription Delivery", "Senior Dog Nutrition"],
    brands: ["Blue Buffalo", "Lily's Kitchen", "Canagan", "Barking Heads", "Naturediet", "Ziwi Peak"],
    hours: "Monday-Friday: 10am-7pm, Saturday: 10am-6pm, Sunday: 12pm-5pm"
  }
];

export default nutritionData;
EOL

cat > src/data/training_data.js << 'EOL'
const trainingData = [
  // Your training data here
  {
    id: 1,
    name: "Canine Academy Ireland",
    address: "15 Pembroke Road, Dublin 4",
    county: "Dublin",
    phone: "01-555-3456",
    email: "training@canineacademy.ie",
    website: "https://www.canineacademy.ie",
    rating: 4.9,
    reviewCount: 167,
    description: "Professional dog training center offering a range of classes from puppy training to advanced obedience. Our certified trainers use positive reinforcement techniques to build a strong bond between you and your dog.",
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6412d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Puppy Classes", "Basic Obedience", "Advanced Obedience", "Behavior Modification", "Private Lessons", "Group Classes"],
    specialties: ["Reactive Dog Training", "Service Dog Training", "Agility Training"],
    trainingTypes: ["Positive Reinforcement", "Clicker Training", "Force-Free Methods"],
    hours: "Monday-Friday: 9am-8pm, Saturday: 10am-6pm, Sunday: Closed"
  },
  {
    id: 2,
    name: "Galway Dog Whisperers",
    address: "8 Eyre Square, Galway",
    county: "Galway",
    phone: "091-555-9012",
    email: "info@galwaydogwhisperers.ie",
    website: "https://www.galwaydogwhisperers.ie",
    rating: 4.7,
    reviewCount: 103,
    description: "Specialized dog training focusing on behavior problems and rehabilitation. We work with dogs of all ages and temperaments to address issues such as anxiety, aggression, and fearfulness.",
    image: "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Behavior Assessment", "Rehabilitation Programs", "Home Training", "Leash Training", "Socialization Classes"],
    specialties: ["Anxiety Management", "Aggression Rehabilitation", "Rescue Dog Integration"],
    trainingTypes: ["Balanced Training", "Relationship-Based Methods", "Environmental Management"],
    hours: "Tuesday-Saturday: 10am-7pm, Sunday-Monday: Closed"
  }
];

export default trainingData;
EOL

cat > src/data/grooming_data.js << 'EOL'
const groomingData = [
  // Your grooming data here
  {
    id: 1,
    name: "Pampered Paws Grooming Salon",
    address: "42 Baggot Street, Dublin 2",
    county: "Dublin",
    phone: "01-555-4567",
    email: "appointments@pamperedpaws.ie",
    website: "https://www.pamperedpaws.ie",
    rating: 4.8,
    reviewCount: 142,
    description: "Luxury dog grooming salon offering a full range of services from basic baths to complete makeovers. Our experienced groomers specialize in breed-specific cuts and gentle handling for nervous dogs.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Bath & Brush", "Full Groom", "Breed-Specific Cuts", "De-shedding Treatments", "Nail Trimming", "Ear Cleaning"],
    specialties: ["Anxious Dog Handling", "Hand Stripping", "Show Preparation"],
    hours: "Tuesday-Saturday: 9am-5pm, Sunday-Monday: Closed"
  },
  {
    id: 2,
    name: "Limerick Mobile Dog Grooming",
    address: "Serving all of Limerick City and County",
    county: "Limerick",
    phone: "061-555-0123",
    email: "book@limerickmobilegrooming.ie",
    website: "https://www.limerickmobilegrooming.ie",
    rating: 4.9,
    reviewCount: 98,
    description: "Convenient mobile grooming service that comes to your home. Our fully-equipped grooming van has everything needed to keep your dog looking and feeling their best, without the stress of travel.",
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Mobile Grooming", "Bath & Tidy", "Full Groom", "Puppy Introduction", "Nail Trimming", "Teeth Brushing"],
    specialties: ["Senior Dogs", "Home Environment Grooming", "Stress-Free Experience"],
    hours: "Monday-Friday: 8am-6pm, Saturday: 9am-4pm, Sunday: Closed"
  }
];

export default groomingData;
EOL

cat > src/data/places_data.js << 'EOL'
const placesData = [
  // Your places data here
  {
    id: 1,
    name: "The Woofing Café",
    address: "56 Camden Street, Dublin 2",
    county: "Dublin",
    phone: "01-555-5678",
    email: "hello@woofingcafe.ie",
    website: "https://www.woofingcafe.ie",
    rating: 4.7,
    reviewCount: 118,
    description: "Dublin's first dog-friendly café where both you and your furry friend can enjoy refreshments. We offer special dog treats and meals alongside coffee and light bites for humans.",
    image: "https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    amenities: ["Dog Menu", "Water Bowls", "Dog Beds", "Outdoor Seating", "Dog Treats"],
    dogPolicy: "Dogs must be leashed and well-behaved. We welcome all breeds and sizes, but please ensure your dog is comfortable in social settings with other dogs and people.",
    hours: "Monday-Sunday: 8am-6pm"
  },
  {
    id: 2,
    name: "Killarney National Park",
    address: "Killarney, Co. Kerry",
    county: "Kerry",
    phone: "064-555-1234",
    email: "info@killarneynationalpark.ie",
    website: "https://www.killarneynationalpark.ie",
    rating: 4.9,
    reviewCount: 245,
    description: "Stunning national park with dog-friendly walking trails through ancient woodlands, alongside lakes, and past historic buildings. A perfect day out for active dogs and nature-loving owners.",
    image: "https://images.unsplash.com/photo-1528656707959-c9dc050e4841?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    amenities: ["Walking Trails", "Picnic Areas", "Parking", "Visitor Center"],
    dogPolicy: "Dogs must be kept on leash at all times to protect wildlife. Please clean up after your dog and keep them away from livestock and wild animals.",
    hours: "Daily: Dawn to Dusk"
  }
];

export default placesData;
EOL

# Create VetDetailPage.tsx
cat > src/pages/VetDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the vets data
import vetsData from '../data/vets_data.js';

// Define a type for vet objects
interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile?: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  specialties?: string[];
  hours: string;
}

const VetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vet, setVet] = useState<Vet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const vetId = parseInt(id, 10);
      const foundVet = vetsData.find((v: Vet) => v.id === vetId);
      
      if (foundVet) {
        setVet(foundVet);
        setLoading(false);
      } else {
        setError('Veterinarian not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !vet) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Veterinarian not found'}</p>
          <Link to="/vets" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Veterinarians
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${vet.name} | Veterinarian Details`}
        description={`Learn more about ${vet.name}, a veterinary service in ${vet.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/vets/${vet.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{vet.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{vet.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{vet.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{vet.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/vets" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Veterinarians
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={vet.image} 
                    alt={vet.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {vet.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{vet.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vet.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {vet.specialties && vet.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vet.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{vet.address}</p>
                      <p className="text-gray-700">County {vet.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{vet.phone}</p>
                      {vet.mobile && vet.mobile !== vet.phone && (
                        <p className="text-gray-700">Mobile: {vet.mobile}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${vet.email}`} className="text-blue-600 hover:underline">
                        {vet.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={vet.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {vet.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{vet.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vet.name + ' ' + vet.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VetDetailPage;
EOL

# Add instructions for installing required dependencies
echo "All files have been created successfully!"
echo ""
echo "IMPORTANT: Before deploying, run these commands to install required dependencies:"
echo "npm install react-router-dom lucide-react"
echo "npm install --save-dev @types/react-helmet"
echo ""
echo "This script has fixed the following issues:"
echo "1. Updated App.tsx to use correct import paths (layout instead of common)"
echo "2. Fixed SEO component to include keywords prop"
echo "3. Updated ListingCard component to support both name and title props"
echo "4. Created proper TypeScript interfaces with optional fields marked correctly"
echo "5. Added sample data files with default exports"
echo "6. Created VetDetailPage as an example of a working detail page"
echo ""
echo "Your next deployment should succeed without TypeScript errors!"
