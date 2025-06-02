// Nutrition data with placeholder images
const nutritionData = [
  {
    id: 1,
    name: "Petstop",
    address: "Unit 5, Airside Retail Park, Swords, Co. Dublin",
    county: "Dublin",
    phone: "01 890 3737",
    email: "info@petstop.ie",
    website: "https://www.petstop.ie",
    rating: 4.7,
    reviewCount: 156,
    description: "Petstop is a comprehensive pet supply store offering a wide range of premium dog foods, supplements, and nutritional products. The store specializes in natural and holistic nutrition options, with knowledgeable staff who can provide personalized dietary recommendations based on your dog's breed, age, and specific health needs. Petstop also offers a loyalty program with regular discounts on nutritional products.",
    image: "https://via.placeholder.com/400x300?text=Petstop",
    brands: [
      "Royal Canin",
      "Hill's Science Diet",
      "Orijen",
      "Acana",
      "Burns",
      "Barking Heads",
      "Natures Menu",
      "Canagan"
    ],
    specialDiets: [
      "Grain-free",
      "Raw food",
      "Hypoallergenic",
      "Weight management",
      "Senior nutrition",
      "Puppy development"
    ],
    services: [
      "Nutritional consultations",
      "Food sampling",
      "Loyalty program",
      "Home delivery"
    ],
    hours: "Monday-Saturday: 9:00am-6:00pm, Sunday: 11:00am-5:00pm"
  },
  {
    id: 2,
    name: "Petmania",
    address: "Blanchardstown Retail Park, Dublin 15",
    county: "Dublin",
    phone: "01 821 4455",
    email: "blanchardstown@petmania.ie",
    website: "https://www.petmania.ie",
    rating: 4.6,
    reviewCount: 187,
    description: "Petmania is a leading Irish pet retailer with an extensive range of dog nutrition products to suit all breeds and dietary requirements. The store features a dedicated nutrition section with premium dry food, wet food, and supplements. The Petmania Nutrition Club offers personalized feeding plans and regular weight checks to monitor your dog's health. Staff members receive ongoing training in animal nutrition to provide expert advice to customers.",
    image: "https://via.placeholder.com/400x300?text=Petmania",
    brands: [
      "Royal Canin",
      "James Wellbeloved",
      "Taste of the Wild",
      "Purina Pro Plan",
      "Eukanuba",
      "Pedigree",
      "Forthglade",
      "Lily's Kitchen"
    ],
    specialDiets: [
      "Breed-specific nutrition",
      "Organic",
      "Limited ingredient",
      "Prescription diets",
      "High-protein",
      "Dental health"
    ],
    services: [
      "Nutrition Club membership",
      "Regular weight checks",
      "Feeding plan consultations",
      "Click and collect"
    ],
    hours: "Monday-Wednesday: 9:30am-7:00pm, Thursday-Friday: 9:30am-9:00pm, Saturday: 9:00am-6:00pm, Sunday: 11:00am-6:00pm"
  },
  {
    id: 3,
    name: "Maxi Zoo",
    address: "Liffey Valley Retail Park, Dublin 22",
    county: "Dublin",
    phone: "01 623 2240",
    email: "liffeyvalley@maxizoo.ie",
    website: "https://www.maxizoo.ie",
    rating: 4.8,
    reviewCount: 213,
    description: "Maxi Zoo is Europe's largest pet store chain, offering an extensive selection of dog food and nutritional supplements. The store's nutrition section is organized by dietary needs and life stages, making it easy to find the right food for your dog. The knowledgeable staff can provide detailed information about ingredients and nutritional benefits. Maxi Zoo's own-brand products offer quality nutrition at competitive prices, while their premium range includes specialized therapeutic diets.",
    image: "https://via.placeholder.com/400x300?text=Maxi+Zoo",
    brands: [
      "Select Gold",
      "Specific",
      "Advance",
      "Hill's",
      "Royal Canin",
      "Acana",
      "Wolfsblut",
      "Josera"
    ],
    specialDiets: [
      "Sensitive digestion",
      "Joint support",
      "Skin and coat health",
      "Performance nutrition",
      "Weight control",
      "Allergen-free"
    ],
    services: [
      "Nutritional advice",
      "Food weighing station",
      "Loyalty card",
      "Regular promotions"
    ],
    hours: "Monday-Friday: 9:00am-9:00pm, Saturday: 9:00am-7:00pm, Sunday: 10:00am-7:00pm"
  },
  {
    id: 4,
    name: "Equipet",
    address: "Fonthill Retail Park, Clondalkin, Dublin 22",
    county: "Dublin",
    phone: "01 643 7222",
    email: "fonthill@equipet.ie",
    website: "https://www.equipet.ie",
    rating: 4.7,
    reviewCount: 178,
    description: "Equipet is a premium pet supply store with a strong focus on quality dog nutrition. The store offers one of the largest selections of raw, fresh, and natural dog food options in Ireland. Equipet's nutrition experts can help you transition your dog to a raw diet or find the perfect premium kibble. The store regularly hosts nutrition workshops and brings in brand representatives to provide detailed information about their products.",
    image: "https://via.placeholder.com/400x300?text=Equipet",
    brands: [
      "Nutriment",
      "Natures Menu",
      "Barf",
      "K9 Natural",
      "Orijen",
      "Acana",
      "Canagan",
      "Eden"
    ],
    specialDiets: [
      "Raw feeding",
      "Biologically Appropriate Raw Food (BARF)",
      "Cold-pressed",
      "Air-dried",
      "Freeze-dried",
      "Human-grade ingredients"
    ],
    services: [
      "Raw feeding consultations",
      "Nutrition workshops",
      "Freezer section for raw food",
      "Bulk buying options"
    ],
    hours: "Monday-Wednesday: 9:30am-6:00pm, Thursday-Friday: 9:30am-8:00pm, Saturday: 9:30am-6:00pm, Sunday: 11:00am-6:00pm"
  },
  {
    id: 5,
    name: "Pets Direct",
    address: "Online store with warehouse in Naas, Co. Kildare",
    county: "Kildare",
    phone: "045 409 790",
    email: "info@petsdirect.ie",
    website: "https://www.petsdirect.ie",
    rating: 4.5,
    reviewCount: 142,
    description: "Pets Direct is an online pet supply store specializing in dog nutrition, with a wide range of premium and prescription foods delivered directly to your door. The website features detailed product information, ingredient lists, and customer reviews to help you make informed choices. Pets Direct offers competitive prices and regular discounts on bulk purchases. The customer service team includes nutrition specialists who can provide advice via phone or email.",
    image: "https://via.placeholder.com/400x300?text=Pets+Direct",
    brands: [
      "Royal Canin Veterinary",
      "Hill's Prescription Diet",
      "Purina Pro Plan Veterinary Diets",
      "Specific",
      "James Wellbeloved",
      "Arden Grange",
      "Fish4Dogs",
      "Forthglade"
    ],
    specialDiets: [
      "Prescription diets",
      "Veterinary exclusive formulas",
      "Therapeutic nutrition",
      "Recovery diets",
      "Elimination diets",
      "Digestive support"
    ],
    services: [
      "Auto-delivery subscription",
      "Free delivery on orders over €49",
      "Nutrition advice line",
      "Price match guarantee"
    ],
    hours: "Online store: 24/7, Customer Service: Monday-Friday: 9:00am-5:30pm"
  }
];

export default nutritionData;
