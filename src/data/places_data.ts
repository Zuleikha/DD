// Places data with REAL Irish dog-friendly places - CORRECTED VERSION
const placesData = [
  {
    id: 1,
    name: "Two Pups Coffee",
    address: "22 Clanbrassil Street Lower, Dublin 8",
    county: "Dublin",
    phone: "Contact via Instagram",
    email: "Via Instagram DM",
    website: "https://www.instagram.com/twopupscoffee",
    rating: 4.8,
    reviewCount: 156,
    description: "Two Pups Coffee is a neighborhood cafe in Dublin 8 where dogs are always met with a smile. It's in the name! This delightful spot serves delicious pastries and small bites with excellent coffee. Dogs are welcomed with treats and water bowls. Perfect for a catch-up with friends and your furry companion.",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Puppuccinos",
      "Homemade dog biscuits",
      "Fresh water",
      "Dog treats"
    ],
    dogAmenities: [
      "Water bowls",
      "Indoor and outdoor seating",
      "Dog treats",
      "Dog-friendly staff"
    ],
    hours: "Tuesday-Sunday: 8:00am-4:00pm, Monday: Closed"
  },
  {
    id: 2,
    name: "Slice (Stoneybatter)",
    address: "Stoneybatter, Dublin 7",
    county: "Dublin",
    phone: "Contact via website",
    email: "info@slice.ie",
    website: "https://slice.ie",
    rating: 4.9,
    reviewCount: 267,
    description: "Slice is a real local legend of Dublin 7, serving one of the most interesting brunch menus in Dublin. Dogs are welcomed with open arms and treats on arrival. The colorful plates and best ingredients make this a must-visit. Try their famous hash browns for breakfast or Banh Mi for lunch.",
    image: "/src/assets/images/places/place_generic_4.png",
    dogMenu: [
      "Dog treats on arrival",
      "Fresh water bowls",
      "Occasional special dog menu items"
    ],
    dogAmenities: [
      "Water bowls",
      "Indoor seating with dogs",
      "Outdoor tables",
      "Waste bags"
    ],
    hours: "Monday-Friday: 9:00am-4:00pm, Saturday-Sunday: 9:00am-5:00pm"
  },
  {
    id: 3,
    name: "PYE (Dundrum)",
    address: "Dundrum, Dublin",
    county: "Dublin",
    phone: "Contact via website",
    email: "info@pyedundrum.ie",
    website: "https://pyedundrum.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "PYE Dundrum is the place where 'tails and tales collide' - they tolerate humans but adore when pups come to play! Dogs receive treats upon arrival and can hang out in the beer garden, cozy kennel seats under benches, or fireside dog beds. Ireland's first doggy vending machine with toys, treats, and even San Pawlegrino on draft. Don't miss the Doggy Wall of Fame!",
    image: "/src/assets/images/places/place_generic_1.png",
    dogMenu: [
      "Treat upon arrival",
      "San Pawlegrino on draft",
      "Doggy vending machine snacks",
      "Special dog menu items"
    ],
    dogAmenities: [
      "Beer garden access",
      "Kennel seats under benches",
      "Fireside dog beds",
      "Doggy vending machine",
      "Wall of Fame photos"
    ],
    hours: "Monday-Sunday: 12:00pm-11:00pm"
  },
  {
    id: 4,
    name: "Two Boys Brew",
    address: "375 North Circular Road, Phibsborough, Dublin 7",
    county: "Dublin",
    phone: "Contact via website",
    email: "Via website",
    website: "https://www.instagram.com/twoboysbrew",
    rating: 4.8,
    reviewCount: 198,
    description: "Inspired by the Australian café scene, Two Boys Brew regularly tops best-brunch-in-Dublin lists. As devoted dog lovers, the owners understand pet parents want to bring dogs everywhere. Expect specialty coffee, creamy mushrooms, and a warm welcome for your pup. Walk-in basis with some email bookings for groups of 6+.",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Puppuccinos",
      "Dog biscuits",
      "Fresh water",
      "Special treats"
    ],
    dogAmenities: [
      "Water bowls",
      "Dog-friendly seating",
      "Indoor and outdoor tables",
      "Dog treats available"
    ],
    hours: "Monday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-4:00pm"
  },
  {
    id: 5,
    name: "The Bath",
    address: "Near Aviva Stadium, Dublin 4",
    county: "Dublin",
    phone: "Contact via Instagram",
    email: "Via Instagram",
    website: "https://www.instagram.com/thebathpub",
    rating: 4.7,
    reviewCount: 234,
    description: "The Bath offers a varied, please-all pub grub menu with pizzas, platters, Instagrammable brunch dishes and more. With close proximity to the Aviva stadium, it's not unusual to see dogs in miniature Ireland jerseys! Large TV screens inside and outside play all important matches. Dogs welcome indoors and in outdoor seating.",
    image: "/src/assets/images/places/place_generic_6.png",
    dogMenu: [
      "Water bowls",
      "Dog treats at bar",
      "Special dog snacks"
    ],
    dogAmenities: [
      "Water bowls",
      "Indoor and outdoor seating",
      "Sports viewing with your dog",
      "Waste stations"
    ],
    hours: "Monday-Thursday: 12:00pm-11:00pm, Friday-Sunday: 12:00pm-12:00am"
  },
  {
    id: 6,
    name: "The Glasson Lakehouse",
    address: "Killinure, Glasson, Co. Westmeath",
    county: "Westmeath",
    phone: "090 648 5120",
    email: "info@glassonlakehouse.ie",
    website: "https://glassonlakehouse.ie",
    rating: 4.7,
    reviewCount: 156,
    description: "The Glasson Lakehouse is a destination hotel, spa and golf resort with dog-friendly rooms and outdoor cabins. Set on the tranquil shores of Lough Ree, this pet-friendly retreat offers spacious accommodations where your dog can stay with you. Beautiful walking trails around the lake are perfect for morning strolls. Featured in Ireland's Hot 100 best hotels 2024.",
    image: "/src/assets/images/places/place_generic_5.png",
    dogMenu: [
      "Gourmet dog treats",
      "Dried meat snacks",
      "Fresh water"
    ],
    dogAmenities: [
      "Dog-friendly rooms",
      "Dog beds available",
      "Lakeside walking trails",
      "Water bowls"
    ],
    hours: "Check-in: 3:00pm, Check-out: 12:00pm, Restaurant: 7:00am-10:00pm daily"
  },
  {
    id: 7,
    name: "The Dog House & Blue's Tea Room",
    address: "West Pier, Howth, Co. Dublin",
    county: "Dublin",
    phone: "01 839 5787",
    email: "Via Instagram",
    website: "https://www.instagram.com/thedoghousehowth",
    rating: 4.8,
    reviewCount: 215,
    description: "Named after the owners' late German Shepherd 'Blue', this quirky establishment in Howth features dog beds where pups can relax while owners enjoy wood-fired pizzas. The colorful, eclectic decor and outdoor living room create a unique atmosphere. A true dog lover's paradise in the scenic fishing village.",
    image: "/src/assets/images/places/place_generic_3.png",
    dogMenu: [
      "Puppuccinos",
      "Homemade dog biscuits",
      "Frozen treats",
      "Special dog menu"
    ],
    dogAmenities: [
      "Dog beds provided",
      "Water bowls",
      "Outdoor living room",
      "Dog-themed decor"
    ],
    hours: "Monday-Sunday: 10:00am-6:00pm (varies seasonally)"
  },
  {
    id: 8,
    name: "Urbanity Coffee",
    address: "11 Coke Lane, Smithfield, Dublin 7",
    county: "Dublin",
    phone: "01 874 7288",
    email: "info@urbanity.ie",
    website: "https://urbanity.ie",
    rating: 4.7,
    reviewCount: 163,
    description: "Bright and welcoming specialty coffee shop in Smithfield. Dogs are greeted with homemade treats made from squash and other healthy ingredients. The cafe's mascot is a blue Staffy named 'Fia'. All-day breakfast menu and excellent single-origin, hand-roasted coffee. Perfect spot for quality food in a pet-friendly environment.",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Homemade squash treats",
      "Peanut butter biscuits",
      "Carrot sticks",
      "Fresh water"
    ],
    dogAmenities: [
      "Water bowls",
      "Dog-friendly seating",
      "Treats on arrival",
      "Monthly dog meet-ups"
    ],
    hours: "Monday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-4:00pm"
  },
  {
    id: 9,
    name: "Kennedy's Food Store",
    address: "Multiple Dublin Locations",
    county: "Dublin",
    phone: "Contact via website",
    email: "Via website",
    website: "https://kennedysfoodstore.ie",
    rating: 4.8,
    reviewCount: 289,
    description: "Kennedy's prepares all food fresh daily using local and seasonal ingredients. They welcome dogs with open arms - both big and small dogs allowed inside and outside in all locations. Water bowls provided for thirsty pups. Organic coffee from Dublin roasters and 2% of purchases donated to good causes.",
    image: "/src/assets/images/places/place_generic_1.png",
    dogMenu: [
      "Water bowls",
      "Dog treats available",
      "Puppuccinos"
    ],
    dogAmenities: [
      "Indoor and outdoor seating",
      "Water bowls at all locations",
      "All dog sizes welcome",
      "Dog-friendly staff"
    ],
    hours: "Varies by location - Check website for specific store hours"
  },
  {
    id: 10,
    name: "The Fumbally",
    address: "Fumbally Lane, Dublin 8",
    county: "Dublin",
    phone: "01 529 8732",
    email: "hello@thefumbally.ie",
    website: "https://thefumbally.ie",
    rating: 4.6,
    reviewCount: 201,
    description: "Spacious, homely cafe in Dublin 8 where dogs are welcome to lounge on the floor or even join owners on the squishy sofas. Known for tasty, wholesome food and relaxed atmosphere. Perfect spot to linger over weekend papers while your dog relaxes beside you. Open layout means plenty of room for all sizes.",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Organic dog treats",
      "Fresh water",
      "Carrot sticks",
      "Dog biscuits"
    ],
    dogAmenities: [
      "Dog-friendly sofas",
      "Water bowls",
      "Spacious floor area",
      "Outdoor seating"
    ],
    hours: "Tuesday-Friday: 8:00am-5:00pm, Saturday: 9:00am-5:00pm, Sunday: 10:00am-3:00pm"
  },
  {
    id: 11,
    name: "Blas Cafe",
    address: "The Chocolate Factory, Kings Inns Street, Dublin",
    county: "Dublin",
    phone: "Contact via website",
    email: "Via website",
    website: "https://blascafe.ie",
    rating: 4.7,
    reviewCount: 178,
    description: "Few buildings as impressive as The Chocolate Factory, home to stunning Blas Cafe. Huge space with loads of seating, so you'll never be stuck for a table. They welcome dogs of all sizes inside. Top pick is the Marrakech breakfast for Middle Eastern flavors. Rotating menus covering all cuisines.",
    image: "/src/assets/images/places/place_generic_3.png",
    dogMenu: [
      "Water bowls",
      "Dog treats",
      "Fresh water available"
    ],
    dogAmenities: [
      "All dog sizes welcome",
      "Water bowls throughout",
      "Plenty of space",
      "Indoor seating"
    ],
    hours: "Monday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-4:00pm"
  },
  {
    id: 12,
    name: "The Fourth Corner",
    address: "Patrick Street, Dublin",
    county: "Dublin",
    phone: "Contact via Instagram",
    email: "Via Instagram",
    website: "https://www.instagram.com/thefourthcorner",
    rating: 4.6,
    reviewCount: 167,
    description: "One of those boozers that has it all - delicious pizza from Dublin Pizza Company, regular pub quizzes with great themes, live music, and strict dog-friendly policy. Dogs receive regularly replenished water bowls and lots of rubs and attention from staff. Great atmosphere for pups and their owners.",
    image: "/src/assets/images/places/place_generic_5.png",
    dogMenu: [
      "Water bowls",
      "Pizza crusts for dogs",
      "Dog treats at bar"
    ],
    dogAmenities: [
      "Regularly refreshed water bowls",
      "Indoor seating",
      "Staff attention for dogs",
      "Dog-friendly atmosphere"
    ],
    hours: "Monday-Thursday: 4:00pm-11:30pm, Friday-Sunday: 1:00pm-12:30am"
  },
  {
    id: 13,
    name: "Gravediggers (John Kavanagh)",
    address: "Prospect Square, Glasnevin, Dublin 9",
    county: "Dublin",
    phone: "01 830 7978",
    email: "Via phone",
    website: "https://www.instagram.com/gravediggers_pub",
    rating: 4.8,
    reviewCount: 312,
    description: "Historic northside haunt widely regarded as the best place for coddle (Dublin's traditional stew). Cited regularly as vital part of Dublin's cultural tapestry. Coddle and cuddles are the order of the day at this dog-friendly pub. Dogs can accompany you to experience this piece of Dublin history.",
    image: "/src/assets/images/places/place_generic_1.png",
    dogMenu: [
      "Water bowls",
      "Dog treats available",
      "Traditional pub atmosphere"
    ],
    dogAmenities: [
      "Water bowls",
      "Historic atmosphere",
      "Dog-friendly seating",
      "Outdoor area"
    ],
    hours: "Monday-Thursday: 10:30am-11:30pm, Friday-Saturday: 10:30am-12:30am, Sunday: 12:00pm-11:00pm"
  },
  {
    id: 14,
    name: "Grove Road Cafe",
    address: "Rathmines Road Lower, Dublin 6",
    county: "Dublin",
    phone: "Contact via Instagram",
    email: "Via Instagram",
    website: "https://www.instagram.com/groveroadcafe",
    rating: 4.7,
    reviewCount: 156,
    description: "Perfect people-watching spot perched on the corner of Rathmines Road Lower. Get comfortable on window-facing stools and browse healthy brunch options like açai bowls and avocado & feta smash on Le Levain sourdough. They even offer dog-friendly snacks so your dog can dine too!",
    image: "/src/assets/images/places/place_generic_3.png",
    dogMenu: [
      "Dog-friendly snacks",
      "Water bowls",
      "Puppuccinos",
      "Dog treats"
    ],
    dogAmenities: [
      "Water bowls",
      "Window seating",
      "Dog snacks available",
      "Outdoor tables"
    ],
    hours: "Monday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-4:00pm"
  },
  {
    id: 15,
    name: "The Cosy Bean",
    address: "Braemor Road, Churchtown, Dublin 14",
    county: "Dublin",
    phone: "01 298 7567",
    email: "Via Instagram",
    website: "https://www.instagram.com/thecosybean",
    rating: 4.6,
    reviewCount: 134,
    description: "Neighborhood favorite where dogs are always welcome. Regulars come for exceptional almond croissants and coffee. Dogs catered for with water bowls and specially made treats. While space inside might be limited, outdoor tables perfect for sunny days. Staff remember names of regular canine visitors!",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Homemade dog biscuits",
      "Peanut butter treats",
      "Puppuccinos",
      "Fresh water"
    ],
    dogAmenities: [
      "Water bowls",
      "Outdoor seating",
      "Dog treat station",
      "Staff who remember regular dogs"
    ],
    hours: "Monday-Friday: 7:30am-4:00pm, Saturday-Sunday: 8:30am-4:00pm"
  },
  {
    id: 16,
    name: "Barna Veterinary Clinic",
    address: "Barna Village Centre, Barna, Co. Galway",
    county: "Galway",
    phone: "091 597 160",
    email: "info@barnavetclinic.ie",
    website: "https://www.barnavetclinic.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "When choosing a vet, you want best clinical expertise AND genuine passion for animals - exactly what you'll find at Barna Vet Clinic. Unique dog-friendly cafe area where pet owners can relax with coffee while waiting. Light refreshments and special menu for dogs makes vet visits more pleasant.",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Healthy dog treats",
      "Dental chews",
      "Calming treats",
      "Puppuccinos"
    ],
    dogAmenities: [
      "Cafe area",
      "Water bowls",
      "Treat station",
      "Pet retail section"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 10:00am-2:00pm, Sunday: Closed"
  },
  {
    id: 17,
    name: "Southbank Cafe",
    address: "Harold's Cross, Dublin 6W",
    county: "Dublin",
    phone: "Contact via Instagram",
    email: "Via Instagram",
    website: "https://www.instagram.com/southbankcafe",
    rating: 4.8,
    reviewCount: 142,
    description: "Popular dog-friendly cafe in Harold's Cross known for warm hospitality and love for featuring four-legged guests on Instagram. Plenty of indoor seating for well-behaved dogs of all sizes and their owners. Excellent spot for quick bite or leisurely brunch with your pup.",
    image: "/src/assets/images/places/place_generic_2.png",
    dogMenu: [
      "Puppuccinos",
      "Dog biscuits",
      "Water bowls",
      "Special treats"
    ],
    dogAmenities: [
      "All sizes welcome",
      "Water bowls",
      "Instagram features",
      "Indoor seating"
    ],
    hours: "Monday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-4:00pm"
  },
  {
    id: 18,
    name: "Timbertrove Cafe",
    address: "Kilakee Road, Rathfarnham, Dublin 16",
    county: "Dublin",
    phone: "01 493 1339",
    email: "Via Instagram",
    website: "https://www.instagram.com/timbertrovecafe",
    rating: 4.6,
    reviewCount: 118,
    description: "Perfect pit stop after Dublin Mountains hike with your dog. Specialty: freshly baked scones, plus soups, sandwiches, pancakes, pies. Dogs welcome in outdoor seating. Special 'Doggie Deal' includes pupcake and puppuccino. Percentage of each Doggie Deal donated to DSPCA!",
    image: "/src/assets/images/places/place_generic_3.png",
    dogMenu: [
      "Pupcakes",
      "Puppuccinos",
      "Dog biscuits",
      "Frozen treats"
    ],
    dogAmenities: [
      "Water bowls",
      "Outdoor seating",
      "DSPCA donation program",
      "Mountain trails nearby"
    ],
    hours: "Monday-Sunday: 9:00am-5:00pm"
  },
  {
    id: 19,
    name: "Dash Container",
    address: "Edge of Phoenix Park, Dublin 8",
    county: "Dublin",
    phone: "087 338 3167",
    email: "Via Instagram",
    website: "https://www.instagram.com/dashcontainer",
    rating: 4.7,
    reviewCount: 108,
    description: "Unique food truck at edge of Phoenix Park - perfect post-walk refuel spot! Excellent coffee, pastries, light meals at outdoor seating where dogs always welcome. Ideal for dog walkers with water bowls and plenty of space for dogs to rest after park exploring. Free puppuccinos on Thursdays!",
    image: "/src/assets/images/places/place_generic_3.png",
    dogMenu: [
      "Free puppuccinos (Thursdays)",
      "Dog biscuits",
      "Fresh water with ice",
      "Frozen treats"
    ],
    dogAmenities: [
      "Water bowls aplenty",
      "Outdoor seating only",
      "Shaded areas",
      "Adjacent to Phoenix Park"
    ],
    hours: "Monday-Sunday: 8:00am-6:00pm (Summer), 9:00am-4:00pm (Winter)"
  },
  {
    id: 20,
    name: "Frank Ryan's",
    address: "Dublin (Contact for location)",
    county: "Dublin",
    phone: "Contact via Instagram",
    email: "Via Instagram",
    website: "https://www.instagram.com/frankryansbar",
    rating: 4.8,
    reviewCount: 167,
    description: "'Notoriously dog-friendly' bar that throws dog parties on special occasions. Serves bowls of chicken broth, dog beer, and treats from their dog menu whenever you visit. Puppy patrons earn portrait on famed doggy wall. Welcome inside and at outdoor sidewalk tables. Meet the bar dog, Magoo!",
    image: "/src/assets/images/places/place_generic_1.png",
    dogMenu: [
      "Chicken broth bowls",
      "Dog beer (non-alcoholic)",
      "Dog treats",
      "Special party menu"
    ],
    dogAmenities: [
      "Doggy wall portraits",
      "Dog parties",
      "Bar dog Magoo",
      "Indoor and outdoor seating"
    ],
    hours: "Monday-Thursday: 4:00pm-11:30pm, Friday-Saturday: 4:00pm-12:30am, Sunday: 6:00pm-11:00pm"
  }
];

export default placesData;