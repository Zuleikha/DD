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

const nutritionData: Nutrition[] = [
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
    image: "/src/assets/images/nutrition/nutrition_generic_1.png",
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
    products: [
      "Premium dry food",
      "Wet food",
      "Raw food",
      "Supplements",
      "Treats",
      "Prescription diets"
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
    image: "/src/assets/images/nutrition/nutrition_generic_2.png",
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
    products: [
      "Breed-specific nutrition",
      "Organic food",
      "Limited ingredient diets",
      "Prescription diets",
      "High-protein food",
      "Dental health treats"
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
    name: "Irish Dog Foods",
    address: "Naas Industrial Estate, Naas, Co. Kildare",
    county: "Kildare",
    phone: "045 872 701",
    email: "info@irishdogfoods.com",
    website: "https://irishdogfoods.com",
    rating: 4.8,
    reviewCount: 89,
    description: "Irish Dog Foods is an award-winning Irish pet food manufacturer with over 25 years of expertise in canine nutrition. They produce premium, natural dog food using locally sourced ingredients and innovative formulations. The company holds BRCGS AA+ rating and exports to over 100 countries worldwide. They offer bespoke formulations and private label services, focusing on quality nutrition that makes pets happy and healthy.",
    image: "/src/assets/images/nutrition/nutrition_generic_3.png",
    brands: [
      "Irish Dog Foods",
      "Premium Irish Range",
      "Natural Selection",
      "Working Dog Formula"
    ],
    products: [
      "Premium dry food",
      "Natural treats",
      "Working dog nutrition",
      "Puppy formulas",
      "Senior dog food",
      "Grain-free options"
    ],
    services: [
      "Bespoke formulations",
      "Private label services",
      "Nutritional consultancy",
      "Bulk supply"
    ],
    hours: "Monday-Friday: 9:00am-5:00pm"
  },
  {
    id: 4,
    name: "Dublin Dog Care",
    address: "Online Consultation Service, Dublin",
    county: "Dublin",
    phone: "083 070 2739",
    email: "info@dublindogcare.ie",
    website: "https://dublindogcare.ie",
    rating: 4.9,
    reviewCount: 67,
    description: "Dublin Dog Care is a specialized canine health nutritionist service offering holistic approaches to improve your dog's life through proper nutrition. They provide personalized diet plans, allergy testing, and natural treatment options. Services include transitioning to raw/fresh food diets, managing health conditions through nutrition, and comprehensive wellness plans. All consultations are conducted online via WhatsApp, email, or phone with 12-week support included.",
    image: "/src/assets/images/nutrition/nutrition_generic_4.png",
    brands: [
      "Raw diet specialists",
      "Natural supplements",
      "Holistic nutrition"
    ],
    products: [
      "Custom diet plans",
      "Allergy testing",
      "Natural supplements",
      "Raw food guidance",
      "Home-cooked recipes"
    ],
    services: [
      "Allergy testing and plans",
      "Advanced wellness consultations",
      "Raw food transition support",
      "12-week follow-up support",
      "Online consultations"
    ],
    hours: "Monday: 9:00am-5:30pm, Consultations by appointment"
  },
  {
    id: 5,
    name: "Dogs First",
    address: "Online Service, Ireland",
    county: "Nationwide",
    phone: "01 234 5678",
    email: "info@dogsfirst.ie",
    website: "https://dogsfirst.ie",
    rating: 4.8,
    reviewCount: 124,
    description: "Dogs First is led by Dr. Conor Brady, author of the top-rated manual on canine nutrition 'Feeding Dogs' and award-winning pet food manufacturer. The service provides trusted, research-based information on dog nutrition and health. They offer raw feeding consultations, nutrition courses, and access to expert advice through 'The Den' membership program. Dr. Brady holds a doctorate in the effects of nutrition on mammalian behavior and gut morphology.",
    image: "/src/assets/images/nutrition/nutrition_generic_5.png",
    brands: [
      "Raw feeding specialists",
      "Natural nutrition",
      "Research-based formulas"
    ],
    products: [
      "Raw feeding guides",
      "Nutrition courses",
      "Expert consultations",
      "Educational resources",
      "Supplement recommendations"
    ],
    services: [
      "Raw feeding consultations",
      "Online nutrition courses",
      "The Den membership program",
      "Expert nutrition advice",
      "Research-based guidance"
    ],
    hours: "Online service available 24/7, Consultations by appointment"
  },
  {
    id: 6,
    name: "Petworld Cork Blackpool",
    address: "Unit 9, Moremiles Retail Centre, Dublin Hill Lwr., Blackpool, Co. Cork",
    county: "Cork",
    phone: "021 242 7856",
    email: "blackpool@petworlddirect.ie",
    website: "https://petworlddirect.ie",
    rating: 4.5,
    reviewCount: 98,
    description: "Petworld Cork Blackpool is part of Ireland's leading pet store chain with over 11 locations nationwide. The store offers thousands of top-quality pet food and supplies with expert nutritional advice and tailored recommendations. They feature a free pet weighing station and provide next-day delivery on most orders. The store stocks premium brands and offers competitive prices with regular promotions and loyalty rewards.",
    image: "/src/assets/images/nutrition/nutrition_generic_6.png",
    brands: [
      "Royal Canin",
      "Hill's",
      "Purina Pro Plan",
      "James Wellbeloved",
      "Eukanuba",
      "Specific",
      "Burns",
      "Arden Grange"
    ],
    products: [
      "Premium dry food",
      "Wet food",
      "Prescription diets",
      "Puppy nutrition",
      "Senior dog food",
      "Working dog formulas"
    ],
    services: [
      "Free pet weighing station",
      "Nutritional advice",
      "Next-day delivery",
      "Loyalty rewards program",
      "Click and collect"
    ],
    hours: "Monday-Saturday: 9:00am-6:00pm, Sunday: 11:00am-5:00pm"
  },
  {
    id: 7,
    name: "Buy4PetsOnline",
    address: "Online Store, Nationwide Delivery, Ireland",
    county: "Nationwide",
    phone: "01 234 5679",
    email: "info@buy4petsonline.ie",
    website: "https://buy4petsonline.ie",
    rating: 4.4,
    reviewCount: 156,
    description: "Buy4PetsOnline is a 100% Irish-owned online pet store offering a wide range of premium pet food and supplies at competitive prices. They provide free nationwide delivery on orders over €50 and specialize in quality nutrition products from trusted brands. The company focuses on customer service and offers expert advice on pet nutrition through their online platform and customer support team.",
    image: "/src/assets/images/nutrition/nutrition_generic_1.png",
    brands: [
      "Royal Canin",
      "Hill's Science Diet",
      "Purina",
      "James Wellbeloved",
      "Burns",
      "Arden Grange",
      "Fish4Dogs",
      "Lily's Kitchen"
    ],
    products: [
      "Premium dog food",
      "Prescription diets",
      "Natural treats",
      "Supplements",
      "Grain-free options",
      "Raw food products"
    ],
    services: [
      "Free delivery over €50",
      "Online nutrition advice",
      "Customer support",
      "Competitive pricing",
      "Irish-owned service"
    ],
    hours: "Online store: 24/7, Customer Service: Monday-Friday: 9:00am-5:00pm"
  },
  {
    id: 8,
    name: "Fetch Your Pet Needs",
    address: "Online Service, Ireland",
    county: "Nationwide",
    phone: "01 234 5680",
    email: "info@fetchyourpetneeds.ie",
    website: "https://www.fetchyourpetneeds.ie",
    rating: 4.6,
    reviewCount: 78,
    description: "Fetch Your Pet Needs is a family-run business since 2016, specializing in high-quality pet products with a strong focus on pet nutrition. They offer wellbeing consultations and believe that proper nutrition plays a significant role in keeping pets healthy. The company provides personalized advice on pet nutrition and supportive supplements, with expertise in dietary management and health optimization.",
    image: "/src/assets/images/nutrition/nutrition_generic_2.png",
    brands: [
      "Premium nutrition brands",
      "Natural supplements",
      "Holistic health products"
    ],
    products: [
      "High-quality pet food",
      "Nutritional supplements",
      "Health optimization products",
      "Specialized diets",
      "Natural treats"
    ],
    services: [
      "Wellbeing consultations",
      "Nutritional advice",
      "Supplement recommendations",
      "Personalized feeding plans",
      "Health assessments"
    ],
    hours: "Online consultations by appointment, Customer service: Monday-Friday: 9:00am-5:00pm"
  },
  {
    id: 9,
    name: "Petworld Galway Terryland",
    address: "Terryland Retail Park, Headford Road, Co. Galway",
    county: "Galway",
    phone: "091 564 517",
    email: "terryland@petworlddirect.ie",
    website: "https://petworlddirect.ie",
    rating: 4.5,
    reviewCount: 112,
    description: "Petworld Galway Terryland is part of Ireland's most trusted pet shop chain, offering thousands of premium pet products at competitive prices. The store provides expert nutritional advice and tailored recommendations for dogs of all ages and breeds. They feature a comprehensive nutrition section with both premium and prescription diets, plus a free pet weighing station to monitor your dog's health progress.",
    image: "/src/assets/images/nutrition/nutrition_generic_3.png",
    brands: [
      "Royal Canin",
      "Hill's",
      "Purina Pro Plan",
      "Eukanuba",
      "James Wellbeloved",
      "Specific",
      "Burns",
      "Arden Grange"
    ],
    products: [
      "Premium dry food",
      "Wet food",
      "Prescription diets",
      "Puppy nutrition",
      "Senior formulas",
      "Weight management"
    ],
    services: [
      "Free pet weighing station",
      "Nutritional consultations",
      "Expert advice",
      "Loyalty program",
      "Next-day delivery"
    ],
    hours: "Monday-Saturday: 9:00am-6:00pm, Sunday: 11:00am-5:00pm"
  },
  {
    id: 10,
    name: "Pet Food Depot",
    address: "Online Store, Ireland",
    county: "Nationwide",
    phone: "01 234 5681",
    email: "info@petfooddepot.ie",
    website: "https://petfooddepot.ie",
    rating: 4.3,
    reviewCount: 89,
    description: "Pet Food Depot has been Ireland's trusted and reliable pet store since 2011, offering a diverse selection of premium pet food and supplies for dogs, cats, birds, and small animals. They focus on providing big brands at small prices, with competitive pricing on quality nutrition products. The company specializes in online sales with efficient delivery services across Ireland.",
    image: "/src/assets/images/nutrition/nutrition_generic_4.png",
    brands: [
      "Royal Canin",
      "Hill's",
      "Purina",
      "James Wellbeloved",
      "Eukanuba",
      "Burns",
      "Arden Grange",
      "Fish4Dogs"
    ],
    products: [
      "Premium dog food",
      "Budget-friendly options",
      "Prescription diets",
      "Natural treats",
      "Supplements",
      "Bulk buying options"
    ],
    services: [
      "Competitive pricing",
      "Online ordering",
      "Delivery services",
      "Bulk discounts",
      "Customer support"
    ],
    hours: "Online store: 24/7, Customer Service: Monday-Friday: 9:00am-5:00pm"
  },
  {
    id: 11,
    name: "Mutz Nutz Pet Shop",
    address: "Online Service, Ireland",
    county: "Nationwide",
    phone: "01 234 5682",
    email: "info@mutznutz.ie",
    website: "https://mutznutz.ie",
    rating: 4.7,
    reviewCount: 67,
    description: "Mutz Nutz Pet Shop & Pet Care specializes in top-quality dog food from trusted sources, ensuring your furry friend gets the nutrition they deserve. They offer a wide range of premium nutrition products and focus on providing excellent customer service with expert advice on canine dietary needs. The company is committed to pet health and wellness through proper nutrition.",
    image: "/src/assets/images/nutrition/nutrition_generic_5.png",
    brands: [
      "Premium trusted brands",
      "Natural nutrition",
      "Quality dog food"
    ],
    products: [
      "Top-quality dog food",
      "Premium nutrition products",
      "Natural treats",
      "Health supplements",
      "Specialized diets"
    ],
    services: [
      "Expert nutrition advice",
      "Quality assurance",
      "Customer support",
      "Product recommendations",
      "Health consultations"
    ],
    hours: "Online service: 24/7, Customer support by appointment"
  },
  {
    id: 12,
    name: "Direct-Vet",
    address: "Online Veterinary Supply, Ireland",
    county: "Nationwide",
    phone: "01 234 5683",
    email: "info@direct-vet.ie",
    website: "https://www.direct-vet.ie",
    rating: 4.6,
    reviewCount: 94,
    description: "Direct-Vet specializes in veterinary-exclusive nutrition products, offering prescription diets and therapeutic nutrition solutions. They provide Specific brand foods and other veterinary-recommended nutrition products with free delivery on orders over €29. The service focuses on clinical nutrition for dogs with specific health conditions and dietary requirements, working closely with veterinary professionals.",
    image: "/src/assets/images/nutrition/nutrition_generic_6_alt.png",
    brands: [
      "Specific",
      "Royal Canin Veterinary",
      "Hill's Prescription Diet",
      "Purina Pro Plan Veterinary"
    ],
    products: [
      "Prescription diets",
      "Therapeutic nutrition",
      "Veterinary-exclusive formulas",
      "Clinical nutrition products",
      "Specialized supplements"
    ],
    services: [
      "Veterinary nutrition products",
      "Free delivery over €29",
      "Clinical diet consultation",
      "Professional recommendations",
      "Prescription diet supply"
    ],
    hours: "Online service: 24/7, Professional support: Monday-Friday: 9:00am-5:00pm"
  }
];

export default nutritionData;

