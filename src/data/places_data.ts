// Places data with placeholder images
const placesData = [
  {
    id: 1,
    name: "Dog House Cafe",
    address: "123 Bark Street, Dublin 2",
    county: "Dublin",
    phone: "01 234 5678",
    email: "woof@doghousecafe.ie",
    website: "https://www.doghousecafe.ie",
    rating: 4.8,
    reviewCount: 156,
    description: "The Dog House Cafe is a dog-friendly establishment where you can enjoy a coffee or meal with your furry friend by your side. The cafe features a special menu for dogs, including puppuccinos and homemade treats. The outdoor seating area is particularly popular with dog owners, providing water bowls and comfortable spaces for dogs to relax while their owners dine.",
    image: "https://via.placeholder.com/400x300?text=Dog+House+Cafe",
    dogMenu: [
      "Puppuccino",
      "Beef and vegetable bites",
      "Frozen yogurt treats",
      "Peanut butter biscuits"
    ],
    dogAmenities: [
      "Water bowls",
      "Outdoor seating",
      "Dog treats",
      "Waste bags"
    ],
    hours: "Monday-Sunday: 8:00am-6:00pm"
  },
  {
    id: 2,
    name: "Bark & Brew",
    address: "45 Canine Lane, Dublin 4",
    county: "Dublin",
    phone: "01 876 5432",
    email: "hello@barkandbrew.ie",
    website: "https://www.barkandbrew.ie",
    rating: 4.7,
    reviewCount: 132,
    description: "Bark & Brew combines a craft beer pub with a dog-friendly atmosphere. The establishment welcomes dogs of all sizes and offers a range of specialty dog treats to complement your pint. The spacious outdoor beer garden is particularly popular with dog owners, providing plenty of space for dogs to socialize while their owners enjoy a drink. Regular 'Yappy Hour' events offer discounts for customers with dogs.",
    image: "https://via.placeholder.com/400x300?text=Bark+And+Brew",
    dogMenu: [
      "Gourmet dog biscuits",
      "Meat and cheese platter",
      "Doggy ice cream"
    ],
    dogAmenities: [
      "Water stations",
      "Dog beds",
      "Off-leash area in beer garden",
      "Waste stations"
    ],
    hours: "Monday-Thursday: 12:00pm-11:00pm, Friday-Sunday: 12:00pm-12:00am"
  },
  {
    id: 3,
    name: "Paws & Pints",
    address: "78 Woofington Road, Dublin 6",
    county: "Dublin",
    phone: "01 555 7890",
    email: "info@pawsandpints.ie",
    website: "https://www.pawsandpints.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "Paws & Pints is Dublin's first dedicated dog pub, designed with both canines and their owners in mind. The venue features a special off-leash play area supervised by trained staff, allowing dogs to socialize while owners enjoy craft beers and cocktails. The menu includes items for both humans and dogs, with 'Mutt Mondays' offering special deals for dog owners. Regular events include dog birthday parties and adoption drives.",
    image: "https://via.placeholder.com/400x300?text=Paws+And+Pints",
    dogMenu: [
      "Beef stew",
      "Chicken and rice bowl",
      "Frozen peanut butter treats",
      "Vegetable medley"
    ],
    dogAmenities: [
      "Supervised play area",
      "Dog washing station",
      "Professional dog photographer (weekends)",
      "Dog birthday party packages"
    ],
    hours: "Monday-Sunday: 12:00pm-11:00pm"
  },
  {
    id: 4,
    name: "Pupp Cafe",
    address: "34 Clanbrassil Street, Dublin 8",
    county: "Dublin",
    phone: "01 453 6339",
    email: "hello@pupp.ie",
    website: "https://www.pupp.ie",
    rating: 4.6,
    reviewCount: 124,
    description: "Pupp is a specialty cafe that caters to both dogs and their owners with equal attention to quality. The cafe serves excellent coffee and brunch for humans, alongside a nutritionist-developed menu for dogs. The stylish interior features dog-friendly seating areas and retail space selling premium dog accessories and treats. Pupp regularly hosts educational events on dog nutrition, training, and wellness.",
    image: "https://via.placeholder.com/400x300?text=Pupp+Cafe",
    dogMenu: [
      "Bone broth",
      "Mini burgers",
      "Sweet potato chews",
      "Carrot and apple biscuits"
    ],
    dogAmenities: [
      "Dog beds at tables",
      "Water bowls",
      "Retail section with premium dog products",
      "Dog nutritionist consultations (by appointment)"
    ],
    hours: "Tuesday-Friday: 8:30am-4:00pm, Saturday-Sunday: 9:30am-4:00pm, Monday: Closed"
  },
  {
    id: 5,
    name: "The Dog House",
    address: "12 Howl Street, Bray, Co. Wicklow",
    county: "Wicklow",
    phone: "01 276 8901",
    email: "bark@thedoghouse.ie",
    website: "https://www.thedoghouse.ie",
    rating: 4.5,
    reviewCount: 98,
    description: "The Dog House is a cozy pub in Bray that welcomes dogs with open arms. This traditional Irish pub has embraced dog culture, with walls adorned with dog portraits and a special 'Doggy Hall of Fame' featuring regular canine visitors. The pub offers a selection of dog treats behind the bar and hosts monthly 'Bring Your Dog' quiz nights. The large beer garden is particularly popular during summer months, with plenty of space for dogs to relax.",
    image: "https://via.placeholder.com/400x300?text=The+Dog+House",
    dogMenu: [
      "Pub snacks for dogs",
      "Dried meat treats",
      "Doggy beer (non-alcoholic)"
    ],
    dogAmenities: [
      "Water bowls",
      "Dog treats at the bar",
      "Spacious beer garden",
      "Dog photo wall"
    ],
    hours: "Monday-Thursday: 3:00pm-11:00pm, Friday-Sunday: 12:00pm-12:30am"
  },
  {
    id: 6,
    name: "The Glasson Lakehouse",
    address: "Killinure, Glasson,",
    county: "Co. Westmeath",
    phone: "01 276 8901",
    email: "thedeangroup@karlaotto.com",
    website: "https://www.glassonlakehouse.ie/",
    rating: 4.5,
    reviewCount: 98,
    description: "The Glasson Lakehouse is a hotel with Dog Friendly Rooms and Outdoor Cabins, we have something for everyone.",
    image: "https://via.placeholder.com/400x300?text=The+Glasson+Lakehouse",
    dogMenu: [
      "Pub snacks for dogs",
      "Dried meat treats",
      "Doggy beer (non-alcoholic)"
    ],
    dogAmenities: [
      "Water bowls",
      "Dog treats at the bar",
      "Spacious beer garden",
      "Dog photo wall"
    ],
    hours: "All week"
  }
];

export default placesData;
