import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';

import GoogleMap from '../components/maps/GoogleMap';
import SEO from '../components/common/SEO';

// Define a type for your listing objects for better type safety
interface Listing {
  id: number;
  title: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance: string;
  type: 'vet' | 'park' | 'grooming' | 'nutrition' | 'training' | 'place'; // More specific types
  image: string;
  featured?: boolean; // Optional property
  lat: number;
  lng: number;
  phone?: string;
  website?: string;
  email?: string;
  hours?: string;
  description: string;
  services?: string[]; // Specific to vets/grooming
  team?: { name: string; role: string; bio: string; }[]; // Specific to vets/grooming
  facilities?: string[]; // Specific to parks
  rules?: string[]; // Specific to parks
  bestTimes?: string; // Specific to parks
}

// Add Google Maps API key variable - leave empty until you have a valid key
// In a real application, you might load this from environment variables (e.g., process.env.REACT_APP_Maps_API_KEY)
const Maps_API_KEY = ""; // Replace with your actual API key when ready

// Mock database of all listings (typed)
const allListings: Listing[] = [
  // VET LISTINGS
  {
    id: 1,
    title: 'Village Vets Cabra',
    address: '2 Quarry Rd, Cabra East, Dublin 7, D07 FX97',
    rating: 4.8,
    reviewCount: 124,
    distance: '1.2 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    featured: true,
    lat: 53.3643,
    lng: -6.2977,
    phone: '01 869 2309',
    website: 'https://villagevets.ie',
    email: 'cabra@villagevets.ie',
    hours: 'Mon-Fri: 8am-7pm, Sat: 9am-1pm, Sun: Closed',
    description: 'Village Vets Cabra is a modern, fully-equipped veterinary clinic providing comprehensive healthcare services for dogs, cats, and small pets. Our team of experienced veterinarians offers preventative care, surgical procedures, dental treatments, and emergency services.',
    services: ['Vaccinations', 'Microchipping', 'Surgery', 'Dental Care', 'X-Ray & Ultrasound', 'Laboratory Testing', 'Nutritional Counseling'],
    team: [
      { name: 'Dr. Sarah Murphy', role: 'Lead Veterinarian', bio: 'Dr. Murphy has over 15 years of experience in small animal medicine and surgery.' },
      { name: 'Dr. James O\'Connor', role: 'Veterinary Surgeon', bio: 'Dr. O\'Connor specializes in orthopedic procedures and emergency medicine.' }
    ]
  },
  {
    id: 2,
    title: 'Botanic Veterinary Hospital',
    address: '183 Botanic Rd, Glasnevin, Dublin 9, D09 R9R2',
    rating: 4.7,
    reviewCount: 98,
    distance: '1.8 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    featured: false,
    lat: 53.3723,
    lng: -6.2701,
    phone: '01 837 3745',
    website: 'https://botanicvets.ie',
    email: 'info@botanicvets.ie',
    hours: 'Mon-Fri: 8:30am-6:30pm, Sat: 9am-1pm, Sun: Closed',
    description: 'Botanic Veterinary Hospital has been serving the Glasnevin community for over 25 years. We provide comprehensive care for pets of all kinds with a focus on preventative medicine and client education.',
    services: ['Wellness Exams', 'Vaccinations', 'Surgery', 'Dental Care', 'Diagnostic Imaging', 'Pet Passports', 'Behavioral Consultations'],
    team: [
      { name: 'Dr. Emma Kelly', role: 'Practice Owner', bio: 'Dr. Kelly founded Botanic Veterinary Hospital in 1998 and specializes in internal medicine.' },
      { name: 'Dr. Michael Byrne', role: 'Associate Veterinarian', bio: 'Dr. Byrne joined the practice in 2010 and has a special interest in dermatology.' }
    ]
  },
  {
    id: 3,
    title: 'Sandymount Pet Hospital',
    address: '19 Sandymount Green, Dublin 4, D04 V9Y0',
    rating: 4.9,
    reviewCount: 156,
    distance: '3.5 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1584553391301-23a229a443bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    featured: true,
    lat: 53.3344,
    lng: -6.2183,
    phone: '01 269 7745',
    website: 'https://sandymountpethospital.ie',
    email: 'info@sandymountpethospital.ie',
    hours: 'Mon-Fri: 8am-7pm, Sat: 9am-2pm, Sun: Emergency Only',
    description: 'Sandymount Pet Hospital is a state-of-the-art facility offering the highest standard of veterinary care. Our compassionate team is dedicated to providing personalized attention to each pet and their family.',
    services: ['Preventative Care', 'Advanced Surgery', 'Digital Radiography', 'Ultrasound', 'In-house Laboratory', 'Geriatric Care', 'Exotic Pet Services'],
    team: [
      { name: 'Dr. Laura Walsh', role: 'Medical Director', bio: 'Dr. Walsh is a graduate of UCD Veterinary School with additional training in advanced imaging.' },
      { name: 'Dr. David Chen', role: 'Surgical Specialist', bio: 'Dr. Chen completed his surgical residency at the Royal Veterinary College in London.' }
    ]
  },
  {
    id: 4,
    title: 'MyVet Firhouse',
    address: 'Unit 1, Woodlawn SC, Firhouse Rd, Dublin 24, D24 P7Y2',
    rating: 4.6,
    reviewCount: 87,
    distance: '7.2 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    featured: false,
    lat: 53.2787,
    lng: -6.3349,
    phone: '01 451 5395',
    website: 'https://myvet.ie',
    email: 'firhouse@myvet.ie',
    hours: 'Mon-Fri: 8:30am-7pm, Sat: 9am-2pm, Sun: Closed',
    description: 'MyVet Firhouse is part of the MyVet network of clinics across Dublin. We provide affordable, high-quality veterinary care with a focus on client communication and education.',
    services: ['Wellness Programs', 'Vaccinations', 'Neutering', 'Microchipping', 'Dental Care', 'Nutrition Advice', 'Senior Pet Care'],
    team: [
      { name: 'Dr. Niamh Doyle', role: 'Head Veterinarian', bio: 'Dr. Doyle has been with MyVet for 8 years and has a special interest in feline medicine.' },
      { name: 'Dr. Robert Wilson', role: 'Veterinary Surgeon', bio: 'Dr. Wilson joined the practice in 2019 after working in emergency medicine for 5 years.' }
    ]
  },
  {
    id: 5,
    title: 'Palmerstown Veterinary Hospital',
    address: 'Unit 3, Palmerstown SC, Dublin 20, D20 YV61',
    rating: 4.8,
    reviewCount: 112,
    distance: '5.8 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    featured: true,
    lat: 53.3558,
    lng: -6.3708,
    phone: '01 623 0911',
    website: 'https://palmerstownvets.ie',
    email: 'info@palmerstownvets.ie',
    hours: 'Mon-Fri: 8am-8pm, Sat: 9am-4pm, Sun: 10am-1pm',
    description: 'Palmerstown Veterinary Hospital offers comprehensive veterinary services in a modern, comfortable environment. Our extended hours make it convenient for working pet owners to access quality care.',
    services: ['Preventative Care', 'Surgery', 'Dentistry', 'Diagnostic Imaging', 'Laboratory Services', 'Puppy & Kitten Care', 'Emergency Services'],
    team: [
      { name: 'Dr. Claire Murphy', role: 'Practice Owner', bio: 'Dr. Murphy established Palmerstown Veterinary Hospital in 2012 after working in both general practice and emergency medicine.' },
      { name: 'Dr. John Fitzgerald', role: 'Associate Veterinarian', bio: 'Dr. Fitzgerald has a special interest in soft tissue surgery and pain management.' }
    ]
  },
  {
    id: 6,
    title: 'Raheny Veterinary Hospital',
    address: '168 Howth Rd, Raheny, Dublin 5, D05 Y9F4',
    rating: 4.7,
    reviewCount: 93,
    distance: '6.3 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    featured: false,
    lat: 53.3782,
    lng: -6.1791,
    phone: '01 831 2230',
    website: 'https://rahenyvets.ie',
    email: 'info@rahenyvets.ie',
    hours: 'Mon-Fri: 8:30am-6:30pm, Sat: 9am-1pm, Sun: Closed',
    description: 'Raheny Veterinary Hospital has been serving the north Dublin community for over 30 years. We provide compassionate care for pets in a family-friendly environment.',
    services: ['Wellness Exams', 'Vaccinations', 'Soft Tissue Surgery', 'Dental Procedures', 'Geriatric Care', 'Nutritional Counseling', 'Microchipping'],
    team: [
      { name: 'Dr. Patrick O\'Sullivan', role: 'Senior Veterinarian', bio: 'Dr. O\'Sullivan has been with the practice since 1995 and specializes in canine medicine.' },
      { name: 'Dr. Aoife Ryan', role: 'Associate Veterinarian', bio: 'Dr. Ryan joined in 2015 and has a particular interest in feline medicine and behavior.' }
    ]
  },
  {
    id: 7,
    title: 'Blackrock Veterinary Clinic',
    address: '27 Carysfort Ave, Blackrock, Co. Dublin, A94 X8K4',
    rating: 4.9,
    reviewCount: 142,
    distance: '8.1 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1598894000396-bc7e3242c75e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    featured: true,
    lat: 53.3018,
    lng: -6.1778,
    phone: '01 288 8443',
    website: 'https://blackrockvet.ie',
    email: 'info@blackrockvet.ie',
    hours: 'Mon-Fri: 8am-7pm, Sat: 9am-3pm, Sun: Emergency Only',
    description: 'Blackrock Veterinary Clinic combines cutting-edge technology with compassionate care. Our modern facility is equipped to handle a wide range of medical and surgical needs for your pets.',
    services: ['Preventative Medicine', 'Advanced Surgery', 'Digital Radiography', 'Ultrasound', 'Endoscopy', 'Dental Suite', 'Intensive Care'],
    team: [
      { name: 'Dr. Catherine Murray', role: 'Medical Director', bio: 'Dr. Murray completed advanced training in internal medicine and has been leading the clinic since 2010.' },
      { name: 'Dr. Thomas Lynch', role: 'Surgical Specialist', bio: 'Dr. Lynch has over 15 years of experience in advanced surgical procedures.' }
    ]
  },
  {
    id: 8,
    title: 'Clontarf Veterinary Hospital',
    address: '19 Vernon Ave, Clontarf, Dublin 3, D03 E977',
    rating: 4.8,
    reviewCount: 118,
    distance: '4.2 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1603077492137-9d7b98358022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    featured: false,
    lat: 53.3642,
    lng: -6.2091,
    phone: '01 833 2501',
    website: 'https://clontarfvets.ie',
    email: 'info@clontarfvets.ie',
    hours: 'Mon-Fri: 8:30am-7pm, Sat: 9am-2pm, Sun: Closed',
    description: 'Clontarf Veterinary Hospital is a full-service animal hospital committed to providing exceptional care throughout your pet\'s life. From routine preventative care to emergency treatment, we are equipped to handle all of your pet\'s health needs.',
    services: ['Wellness Care', 'Vaccinations', 'Surgery', 'Dental Care', 'Laboratory Services', 'Pharmacy', 'Behavioral Counseling'],
    team: [
      { name: 'Dr. Fiona Kelly', role: 'Practice Owner', bio: 'Dr. Kelly established Clontarf Veterinary Hospital in 2008 after working in both Ireland and the UK.' },
      { name: 'Dr. Brian McCarthy', role: 'Associate Veterinarian', bio: 'Dr. McCarthy has a special interest in exotic pet medicine and surgery.' }
    ]
  },

  // PARK LISTINGS
  {
    id: 9,
    title: 'Phoenix Park Dog Walking Area',
    address: 'Phoenix Park, Dublin 8',
    rating: 4.9,
    reviewCount: 87,
    distance: '2.5 km',
    type: 'park',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    lat: 53.3558,
    lng: -6.3308,
    description: 'Phoenix Park is one of Europe\'s largest enclosed recreational spaces, offering extensive areas for dog walking. The park spans 1,750 acres with numerous trails and open spaces perfect for dogs to run and play.',
    facilities: ['Off-leash areas', 'Water points', 'Waste bins', 'Picnic areas', 'Parking'],
    rules: ['Dogs must be under control at all times', 'Please clean up after your dog', 'Keep dogs away from deer and wildlife'],
    bestTimes: 'Early morning and late afternoon are quietest. Weekends can be busy.'
  },
  {
    id: 10,
    title: 'St. Stephen\'s Green Dog Area',
    address: 'St. Stephen\'s Green, Dublin 2',
    rating: 4.5,
    reviewCount: 62,
    distance: '1.1 km',
    type: 'park',
    image: 'https://images.unsplash.com/photo-1551651653-c5dcb914d809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    lat: 53.3382,
    lng: -6.2591,
    description: 'St. Stephen\'s Green has designated areas where dogs are permitted on leash. This historic park in the heart of Dublin offers beautiful walking paths around a lake and through manicured gardens.',
    facilities: ['On-leash walking paths', 'Waste bins', 'Seating areas', 'Water features'],
    rules: ['Dogs must be kept on leash at all times', 'Not permitted in certain areas of the park', 'Please clean up after your dog'],
    bestTimes: 'Weekday mornings before 9am are quietest. Avoid lunchtime hours when the park is busiest.'
  },
  {
    id: 11,
    title: 'Marlay Park Dog Trail',
    address: 'Marlay Park, Rathfarnham, Dublin 16',
    rating: 4.8,
    reviewCount: 93,
    distance: '7.3 km',
    type: 'park',
    image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    lat: 53.2987,
    lng: -6.2649,
    description: 'Marlay Park features a dedicated dog park where dogs can run off-leash in a secure environment. The park also offers extensive walking trails through woodlands and open spaces.',
    facilities: ['Enclosed off-leash area', 'Water points', 'Waste bins', 'Parking', 'Café nearby'],
    rules: ['Dogs can be off-leash in designated areas only', 'Please clean up after your dog', 'Dogs must be under control at all times'],
    bestTimes: 'Early mornings and weekdays are less crowded. The dog park can get busy on weekend afternoons.'
  },

  // GROOMING LISTINGS
  {
    id: 12,
    title: 'Paws & Relax Dog Grooming',
    address: '45 Grafton Street, Dublin 2',
    rating: 4.2,
    reviewCount: 29,
    distance: '0.8 km',
    type: 'grooming',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    lat: 53.3402,
    lng: -6.2736,
    phone: '01 679 4283',
    website: 'https://pawsandrelax.ie',
    email: 'info@pawsandrelax.ie',
    hours: 'Mon-Sat: 9am-6pm, Sun: Closed',
    description: 'Paws & Relax offers premium grooming services in the heart of Dublin. Our experienced groomers provide personalized care for dogs of all breeds and sizes in a calm, stress-free environment.',
    services: ['Full Grooming', 'Bath & Brush', 'Nail Trimming', 'Ear Cleaning', 'De-shedding Treatments', 'Breed-Specific Styling', 'Puppy Introduction Sessions'],
    team: [
      { name: 'Lisa O\'Connor', role: 'Head Groomer', bio: 'Lisa has over 10 years of experience and specializes in styling for show dogs.' },
      { name: 'Mark Brennan', role: 'Groomer', bio: 'Mark is known for his gentle approach with nervous dogs and senior pets.' }
    ]
  }
];

const DetailPage: React.FC = () => {
  const { id, type } = useParams<{ id: string, type: string }>();
  // Use the defined Listing type for the state
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<string>(''); // State for user input location

  useEffect(() => {
    const fetchListing = () => {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const foundListing = allListings.find(item => item.id === parseInt(id || '0'));

        if (foundListing) {
          setListing(foundListing);
        } else {
          setError('Listing not found. The provided ID might be incorrect.');
        }
      } catch (err) {
        console.error("Error fetching listing:", err); // Log the actual error
        setError('An unexpected error occurred while loading listing details.');
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id, type]); // Depend on id and type from useParams

  // Function to handle "Get Directions" button click
  const handleGetDirections = () => {
    if (!Maps_API_KEY) {
      alert('Google Maps functionality is currently unavailable. Please add your API key.');
      return;
    }
    if (!listing) return; // Should not happen if rendering component, but for type safety

    const destination = encodeURIComponent(listing.address);
    const origin = encodeURIComponent(userLocation); // Use user entered location
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}${origin ? `&origin=${origin}` : ''}`;
    window.open(googleMapsUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading details...</p>
          </div>
        </main>
        
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="min-h-screen flex flex-col">
       
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="bg-red-50 p-6 rounded-lg text-center">
            <p className="text-red-700 mb-4">{error || 'Listing not found.'}</p>
            <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Return to homepage
            </Link>
          </div>
        </main>
      
      </div>
    );
  }

  // SEO content
  const seoTitle = `${listing.title} | DogDays.ie`;
  const seoDescription = listing.type === 'vet'
    ? `Contact ${listing.title} for veterinary services in ${listing.address.split(',').slice(-2)[0].trim()}. Phone: ${listing.phone || 'N/A'}.`
    : `Visit ${listing.title} in ${listing.address.split(',').slice(-2)[0].trim()}. Rating: ${listing.rating}/5 from ${listing.reviewCount} reviews.`;

  // Determine the base path for canonical URL (e.g., /vets, /parks, /grooming)
  const canonicalBasePath = `/${listing.type}s`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        // Construct canonical URL more robustly
        canonicalUrl={`https://www.dogdays.ie${canonicalBasePath}/${listing.id}`}
      />


      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link to={canonicalBasePath} className="hover:text-blue-600">
                {/* Dynamically display category name */}
                {listing.type === 'vet' ? 'Vets' :
                 listing.type === 'park' ? 'Parks' :
                 listing.type === 'grooming' ? 'Grooming' :
                 listing.type === 'nutrition' ? 'Nutrition' :
                 listing.type === 'training' ? 'Training' :
                 listing.type === 'place' ? 'Places' : 'Listings'}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">{listing.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{listing.title}</h1>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{listing.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Details Column */}
            <div className="lg:col-span-2">
              {/* Rating and Contact */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-blue-50 px-3 py-1 rounded-full flex items-center">
                      <span className="text-blue-600 font-semibold mr-1">{listing.rating}</span>
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-gray-500 text-sm ml-1">({listing.reviewCount} reviews )</span>
                    </div>
                    {listing.featured && (
                      <span className="ml-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    {listing.phone && (
                      <a
                        href={`tel:${listing.phone}`}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </a>
                    )}
                    {listing.website && (
                      <a
                        href={listing.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Website
                      </a>
                    )}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.phone && (
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <p className="text-gray-800">
                          <a href={`tel:${listing.phone}`} className="hover:text-blue-600">
                            {listing.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {listing.email && (
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <p className="text-gray-800">
                          <a href={`mailto:${listing.email}`} className="hover:text-blue-600">
                            {listing.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {listing.website && (
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Website</h3>
                        <p className="text-gray-800">
                          <a href={listing.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            {listing.website.replace('https://', '')}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {listing.hours && (
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Hours</h3>
                        <p className="text-gray-800">{listing.hours}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">About {listing.title}</h2>
                <p className="text-gray-700 mb-6">
                  {listing.description || `${listing.title} is located in ${listing.address.split(',').slice(-2)[0].trim()}. It has a rating of ${listing.rating} out of 5 based on ${listing.reviewCount} reviews.`}
                </p>

                {/* Services for vets */}
                {listing.type === 'vet' && listing.services && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Services</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {listing.services.map((service: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Team for vets */}
                {listing.type === 'vet' && listing.team && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Team</h3>
                    <div className="space-y-4">
                      {listing.team.map((member: { name: string; role: string; bio: string; }, index: number) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                          <h4 className="font-medium text-gray-800">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                          <p className="mt-1 text-gray-700">{member.bio}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Facilities for parks */}
                {listing.type === 'park' && listing.facilities && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Facilities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {listing.facilities.map((facility: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          <span>{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rules for parks */}
                {listing.type === 'park' && listing.rules && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Park Rules</h3>
                    <ul className="space-y-2">
                      {listing.rules.map((rule: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="h-2 w-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                    {listing.bestTimes && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-md">
                        <p className="text-sm text-blue-800"><strong>Best Times to Visit:</strong> {listing.bestTimes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-white border-b">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 mb-4">{listing.address}</p>

                  {/* Get Directions */}
                  <div className="mb-4">
                    <input
                      type="text"
                      id="userLocationInput" // Added id
                      name="userLocation"   // Added name
                      placeholder="Enter your location (e.g., Dublin, Ireland)"
                      aria-label="Enter your starting location for directions" // Added ARIA label
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                    />
                    <button
                      className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center ${!Maps_API_KEY ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleGetDirections} // Call the new handler function
                      disabled={!Maps_API_KEY} // Disable if no API key
                    >
                      Get Directions
                    </button>
                  </div>
                </div>

                {/* Conditionally render Google Map Component based on API key */}
                {Maps_API_KEY ? (
                  <GoogleMap
                    locations={[{ lat: listing.lat, lng: listing.lng, title: listing.title }]}
                    center={{ lat: listing.lat, lng: listing.lng }}
                    apiKey={Maps_API_KEY}
                    zoom={15}
                  />
                ) : (
                  <div className="bg-gray-100 p-6 rounded-lg text-center" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p className="text-gray-700 mb-2 font-semibold">Map temporarily unavailable</p>
                    <p className="text-sm text-gray-500">Google Maps will be available soon (requires API Key)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default DetailPage;