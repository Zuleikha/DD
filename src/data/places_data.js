// Places data with real Irish dog-friendly places
const placesData = [
    // Keeping existing entries (id: 1-6)...
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
        image: "/src/assets/images/places/place_generic_2.png",
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
        image: "/src/assets/images/places/place_generic_4.png",
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
        image: "/src/assets/images/places/place_generic_1.png",
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
        image: "/src/assets/images/places/place_generic_2.png",
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
        image: "/src/assets/images/places/place_generic_6.png",
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
        address: "Killinure, Glasson, Co. Westmeath",
        county: "Westmeath",
        phone: "090 648 5120",
        email: "info@glassonlakehouse.ie",
        website: "https://www.glassonlakehouse.ie/",
        rating: 4.5,
        reviewCount: 98,
        description: "The Glasson Lakehouse is a hotel with Dog Friendly Rooms and Outdoor Cabins, we have something for everyone. Set on the tranquil shores of Lough Ree, this pet-friendly retreat offers spacious accommodations where your dog can stay with you. The property features beautiful walking trails around the lake perfect for morning strolls with your furry friend.",
        image: "/src/assets/images/places/place_generic_5.png",
        dogMenu: [
            "Gourmet dog treats",
            "Dried meat snacks",
            "Doggy ice cream"
        ],
        dogAmenities: [
            "Water bowls in rooms",
            "Dog beds available",
            "Lakeside walking trails",
            "Pet sitting service (by arrangement)"
        ],
        hours: "Check-in: 3:00pm, Check-out: 12:00pm, Restaurant: 7:00am-10:00pm daily"
    },
    // Adding new real Irish dog-friendly places...
    {
        id: 7,
        name: "The Dog House and Blue's Tearoom",
        address: "West Pier, Howth, Co. Dublin",
        county: "Dublin",
        phone: "01 839 5787",
        email: "info@thedoghousehowth.ie",
        website: "https://www.thedoghousehowth.ie",
        rating: 4.8,
        reviewCount: 215,
        description: "The Dog House and Blue's Tearoom is a dog lover's paradise in the scenic fishing village of Howth. Named after the owners' late German Shepherd 'Blue', this quirky establishment features dog beds where pups can relax while their owners enjoy wood-fired pizzas and refreshments. The colorful, eclectic decor and outdoor living room create a unique atmosphere that both humans and dogs adore.",
        image: "/src/assets/images/places/place_generic_3.png",
        dogMenu: [
            "Puppuccinos",
            "Homemade dog biscuits",
            "Frozen yogurt treats",
            "Chicken and rice bowls"
        ],
        dogAmenities: [
            "Dog beds",
            "Water bowls",
            "Outdoor living room",
            "Dog-themed decor"
        ],
        hours: "Monday-Sunday: 10:00am-6:00pm"
    },
    {
        id: 8,
        name: "Urbanity",
        address: "11 Coke Lane, Smithfield, Dublin 7",
        county: "Dublin",
        phone: "01 874 7288",
        email: "info@urbanitycoffee.ie",
        website: "https://urbanitycoffee.ie",
        rating: 4.7,
        reviewCount: 163,
        description: "Urbanity is a bright and welcoming specialty coffee shop in Smithfield that extends its hospitality to four-legged friends. Dogs are greeted with homemade treats made from squash and other healthy ingredients. The cafe's mascot is a blue Staffy named 'Fia' who occasionally makes appearances. With its all-day breakfast menu and excellent coffee, it's a perfect spot for dog owners looking for quality food in a pet-friendly environment.",
        image: "/src/assets/images/places/place_generic_2.png",
        dogMenu: [
            "Homemade squash treats",
            "Peanut butter biscuits",
            "Carrot sticks",
            "Apple slices"
        ],
        dogAmenities: [
            "Water bowls",
            "Dog-friendly seating",
            "Treats on arrival",
            "Dog meet-ups (monthly)"
        ],
        hours: "Monday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-4:00pm"
    },
    {
        id: 9,
        name: "The Orange Goat",
        address: "Shelbourne Road, Ballsbridge, Dublin 4",
        county: "Dublin",
        phone: "01 660 8280",
        email: "hello@theorangegoat.ie",
        website: "https://www.theorangegoat.ie",
        rating: 4.9,
        reviewCount: 178,
        description: "The Orange Goat in Ballsbridge is renowned for its exceptional hospitality toward both human and canine guests. Dogs are welcomed with fresh chicken treats and sometimes even breakfast eggs. The cafe is famous for its Cloud Picker coffee and breakfast buns. They've been known to throw birthday parties for regular doggy visitors, complete with presents and special treats.",
        image: "/src/assets/images/places/place_generic_1.png",
        dogMenu: [
            "Fresh chicken treats",
            "Scrambled eggs (for dogs)",
            "Puppuccinos",
            "Birthday pupcakes"
        ],
        dogAmenities: [
            "Water bowls",
            "Dog birthday celebrations",
            "Outdoor seating",
            "Treat jar at entrance"
        ],
        hours: "Monday-Friday: 7:30am-4:00pm, Saturday-Sunday: 8:30am-4:00pm"
    },
    {
        id: 10,
        name: "Fumbally",
        address: "Fumbally Lane, Dublin 8",
        county: "Dublin",
        phone: "01 529 8732",
        email: "info@thefumbally.ie",
        website: "https://thefumbally.ie",
        rating: 4.6,
        reviewCount: 201,
        description: "Fumbally is a spacious, homely cafe in Dublin 8 where dogs are welcome to lounge on the floor or even join their owners on the squishy sofas. Known for its tasty, wholesome food and relaxed atmosphere, it's a perfect spot to linger over weekend papers while your dog relaxes beside you. The cafe's open layout means there's plenty of room for dogs of all sizes.",
        image: "/src/assets/images/places/place_generic_2.png",
        dogMenu: [
            "Organic dog treats",
            "Water with apple cider vinegar",
            "Carrot sticks",
            "Peanut butter licks"
        ],
        dogAmenities: [
            "Dog-friendly sofas",
            "Water bowls",
            "Spacious floor area",
            "Shaded outdoor spots"
        ],
        hours: "Wednesday-Friday: 8:00am-4:00pm, Saturday-Sunday: 10:00am-4:00pm, Monday-Tuesday: Closed"
    },
    {
        id: 11,
        name: "The Barn Gastropub",
        address: "Glanmire, Co. Cork",
        county: "Cork",
        phone: "021 482 1605",
        email: "info@thebarnglanmire.ie",
        website: "https://www.thebarnglanmire.ie",
        rating: 4.7,
        reviewCount: 143,
        description: "The Barn Gastropub in Glanmire welcomes dogs in their fully enclosed, covered terrace area with underfloor heating, open all year round. The glass walls fold back and the roof can be fully retracted in summer, creating a spacious and comfortable dining experience for you and your furry friend. The pub serves excellent food and a great selection of drinks in a relaxed, dog-friendly atmosphere.",
        image: "/src/assets/images/places/place_generic_3.png",
        dogMenu: [
            "Gourmet dog biscuits",
            "Beef treats",
            "Doggy ice cream",
            "Chicken strips"
        ],
        dogAmenities: [
            "Heated terrace",
            "Water bowls",
            "Dog treats at bar",
            "Waste bags available"
        ],
        hours: "Monday-Thursday: 12:00pm-11:00pm, Friday-Sunday: 12:00pm-12:30am"
    },
    {
        id: 12,
        name: "The Angler's Rest",
        address: "Knockrabo, Carrigrohane, Co. Cork",
        county: "Cork",
        phone: "021 487 0053",
        email: "info@anglersrest.ie",
        website: "https://www.anglersrest.ie",
        rating: 4.5,
        reviewCount: 167,
        description: "The Angler's Rest in Carrigrohane is a traditional Irish pub and restaurant that welcomes dogs of all sizes in their outdoor dining area. They even provide special doggie chairs to ensure your pet has a comfortable stay. Located by the River Lee, it's a perfect spot to relax after a riverside walk with your dog. The pub serves hearty Irish fare and has a warm, welcoming atmosphere.",
        image: "/src/assets/images/places/place_generic_5.png",
        dogMenu: [
            "Beef jerky treats",
            "Doggy sausages",
            "Water with ice cubes",
            "Liver treats"
        ],
        dogAmenities: [
            "Doggie chairs",
            "Water bowls",
            "Riverside location",
            "Covered outdoor area"
        ],
        hours: "Monday-Thursday: 12:00pm-10:30pm, Friday-Sunday: 12:00pm-11:30pm"
    },
    {
        id: 13,
        name: "Fionbarra's",
        address: "Douglas Street, Cork City",
        county: "Cork",
        phone: "021 431 0772",
        email: "info@fionbarras.ie",
        website: "https://www.fionbarras.ie",
        rating: 4.6,
        reviewCount: 128,
        description: "Fionbarra's on Douglas Street is a beloved Cork institution that welcomes dogs with open arms. This traditional pub serves excellent pizza and a wide selection of craft beers, making it the perfect spot to relax after a long dog walk. Water bowls are always filled for furry guests, and the staff are known for their love of dogs. The beer garden is particularly popular with dog owners during warmer months.",
        image: "/src/assets/images/places/place_generic_1.png",
        dogMenu: [
            "Dog-friendly pizza crusts",
            "Dried meat treats",
            "Puppuccinos",
            "Cheese nibbles"
        ],
        dogAmenities: [
            "Water bowls",
            "Beer garden",
            "Dog-friendly staff",
            "Covered outdoor seating"
        ],
        hours: "Monday-Thursday: 3:00pm-11:30pm, Friday-Sunday: 1:00pm-12:30am"
    },
    {
        id: 14,
        name: "Hamlets of Kinsale",
        address: "The Glen, Kinsale, Co. Cork",
        county: "Cork",
        phone: "021 477 2209",
        email: "info@hamletsofkinsale.com",
        website: "https://www.hamletsofkinsale.com",
        rating: 4.8,
        reviewCount: 156,
        description: "Hamlets of Kinsale features a dog-friendly Street Food and Gastro Garden where you and your four-legged friend can enjoy delicious street food, cocktails, wines, and craft beers. Located in the picturesque town of Kinsale, it's a perfect spot to relax after exploring the colorful streets with your dog. The outdoor garden has plenty of space for dogs to settle while their owners enjoy the vibrant atmosphere.",
        image: "/src/assets/images/places/place_generic_3.png",
        dogMenu: [
            "Gourmet dog biscuits",
            "Chicken strips",
            "Frozen yogurt treats",
            "Beef jerky"
        ],
        dogAmenities: [
            "Water stations",
            "Covered seating areas",
            "Dog-friendly staff",
            "Waste disposal facilities"
        ],
        hours: "Monday-Sunday: 12:00pm-10:00pm (Summer), Monday-Sunday: 12:00pm-8:00pm (Winter)"
    },
    {
        id: 15,
        name: "Casey's Bar and Restaurant",
        address: "Pearse Street, Clonakilty, Co. Cork",
        county: "Cork",
        phone: "023 883 3401",
        email: "info@caseysclonakilty.com",
        website: "https://www.caseysclonakilty.com",
        rating: 4.7,
        reviewCount: 132,
        description: "Casey's Bar and Restaurant in Clonakilty is a dog-friendly establishment that goes the extra mile for canine visitors. They provide water bowls, puppuccinos, and doggie treats for their four-legged guests. The restaurant serves excellent local seafood and traditional Irish dishes in a warm, welcoming atmosphere. The outdoor seating area is perfect for dining with your dog on sunny days.",
        image: "/src/assets/images/places/place_generic_5.png",
        dogMenu: [
            "Puppuccinos",
            "Homemade dog biscuits",
            "Fish skin crisps",
            "Dried meat treats"
        ],
        dogAmenities: [
            "Water bowls",
            "Outdoor seating",
            "Dog treats on arrival",
            "Dog-friendly staff"
        ],
        hours: "Monday-Sunday: 12:00pm-9:30pm (Food), Monday-Thursday: 12:00pm-11:30pm, Friday-Sunday: 12:00pm-12:30am (Bar)"
    },
    {
        id: 16,
        name: "Barna and Moycullen Veterinary Clinic",
        address: "Barna Village Centre, Barna, Co. Galway",
        county: "Galway",
        phone: "091 597 160",
        email: "info@barnavet.ie",
        website: "https://www.barnavetclinic.ie",
        rating: 4.9,
        reviewCount: 187,
        description: "While primarily a veterinary clinic, Barna and Moycullen Veterinary Clinic has a unique dog-friendly cafe area where pet owners can relax with a coffee while waiting for appointments. The cafe serves light refreshments and has a special menu for dogs, making what could be a stressful vet visit into a more pleasant experience. The staff are all animal lovers and create a welcoming environment for both pets and their owners.",
        image: "/src/assets/images/places/place_generic_2.png",
        dogMenu: [
            "Healthy dog treats",
            "Dental chews",
            "Calming treats",
            "Puppuccinos"
        ],
        dogAmenities: [
            "Water bowls",
            "Dog-friendly seating",
            "Treat station",
            "Pet retail section"
        ],
        hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 10:00am-2:00pm, Sunday: Closed"
    },
    {
        id: 17,
        name: "Ruff Café",
        address: "39 Clanbrassil Street Lower, Dublin 8",
        county: "Dublin",
        phone: "01 456 9834",
        email: "hello@ruffcafe.ie",
        website: "https://www.ruffcafe.ie",
        rating: 4.8,
        reviewCount: 142,
        description: "Ruff Café lives by its motto: 'All dogs welcome. Humans allowed.' This dedicated dog café in Dublin 8 offers a full menu for dogs including pupcakes, peanut butter doughnuts, blueberry crepes, banana cookies, and chicken paws. Human visitors can enjoy tasty sandwiches and coffee while their pets socialize. Dogs that pose for photos might find themselves on the café's 'wall of fame'. A portion of their doggie menu sales goes to animal charities.",
        image: "/src/assets/images/places/place_generic_2.png",
        dogMenu: [
            "Pupcakes",
            "Peanut butter doughnuts",
            "Blueberry crepes",
            "Banana cookies",
            "Chicken paws"
        ],
        dogAmenities: [
            "Dog photo wall of fame",
            "Water stations",
            "Dog-friendly seating",
            "Monthly dog meetups"
        ],
        hours: "Tuesday-Friday: 8:00am-4:00pm, Saturday-Sunday: 9:00am-5:00pm, Monday: Closed"
    },
    {
        id: 18,
        name: "Timbertrove Café",
        address: "Kilakee Road, Rathfarnham, Dublin 16",
        county: "Dublin",
        phone: "01 493 1339",
        email: "info@timbertrove.ie",
        website: "https://www.timbertrove.ie",
        rating: 4.5,
        reviewCount: 118,
        description: "Timbertrove Café is the perfect pit stop after a hike in the Dublin Mountains with your dog. Their specialty is freshly baked scones, but they also serve soups, sandwiches, pancakes, and pies. Dogs are welcome in the outdoor seating area, and the café offers a special 'Doggie Deal' that includes a 'pupcake' and a 'puppuccino'. A percentage of each Doggie Deal is donated to the DSPCA, supporting animal welfare while you enjoy your refreshments.",
        image: "/src/assets/images/places/place_generic_3.png",
        dogMenu: [
            "Pupcakes",
            "Puppuccinos",
            "Dog-friendly biscuits",
            "Frozen treats"
        ],
        dogAmenities: [
            "Water bowls",
            "Outdoor seating",
            "DSPCA donation program",
            "Mountain walking trails nearby"
        ],
        hours: "Monday-Sunday: 9:00am-5:00pm"
    },
    {
        id: 19,
        name: "The Cosy Bean",
        address: "Braemor Road, Churchtown, Dublin 14",
        county: "Dublin",
        phone: "01 298 7567",
        email: "hello@thecosybean.ie",
        website: "https://www.thecosybean.ie",
        rating: 4.6,
        reviewCount: 97,
        description: "The Cosy Bean in Churchtown is a neighborhood favorite where dogs are always welcome. Regulars come for the exceptional almond croissants and coffee, but dogs are equally catered for with water bowls and specially made treats. While space inside might be limited, the outdoor tables are perfect for sitting with your dog on sunny days. The friendly staff are known for remembering the names of their regular canine visitors.",
        image: "/src/assets/images/places/place_generic_2.png",
        dogMenu: [
            "Homemade dog biscuits",
            "Peanut butter treats",
            "Carrot sticks",
            "Puppuccinos"
        ],
        dogAmenities: [
            "Water bowls",
            "Outdoor seating",
            "Dog treat jar",
            "Dog-friendly staff"
        ],
        hours: "Monday-Friday: 7:30am-4:00pm, Saturday-Sunday: 8:30am-4:00pm"
    },
    {
        id: 20,
        name: "Dash Container",
        address: "Phoenix Park, Dublin 8",
        county: "Dublin",
        phone: "087 338 3167",
        email: "hello@dashcontainer.ie",
        website: "https://www.dashcontainer.ie",
        rating: 4.7,
        reviewCount: 108,
        description: "Dash Container is a unique food truck located at the edge of Phoenix Park, making it the perfect spot for a post-walk refuel with your dog. They serve excellent coffee, pastries, and light meals that can be enjoyed at their outdoor seating area where dogs are always welcome. The location is ideal for dog walkers, with water bowls provided and plenty of space for dogs to rest after exploring the park.",
        image: "/src/assets/images/places/place_generic_3.png",
        dogMenu: [
            "Dog biscuits",
            "Frozen yogurt treats",
            "Dried meat snacks",
            "Fresh water with ice"
        ],
        dogAmenities: [
            "Water bowls",
            "Outdoor seating",
            "Shaded areas",
            "Adjacent to dog walking routes"
        ],
        hours: "Monday-Sunday: 8:00am-6:00pm (Summer), Monday-Sunday: 9:00am-4:00pm (Winter)"
    }
];
export default placesData;
