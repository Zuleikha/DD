// training data
const trainingData = [
  {
    id: 1,
    name: "Liberty K9 Training",
    address: "Killucan, Co. Westmeath",
    county: "Westmeath",
    phone: "+353 44 93 19 880",
    email: "hello@libertyk9.ie",
    website: "https://libertyk9.ie",
    rating: 4.9,
    reviewCount: 187,
    description: "Liberty K9 Training is Ireland's premier dog training facility, specializing in behavior modification and obedience training. Based in County Westmeath, they have a solid reputation for handling challenging dog behavior with a high success rate. Their unique and effective approach consistently delivers results that create a happy and harmonious relationship between dogs and their owners. All training is conducted in real-world environments to ensure each dog reaches its full potential. Liberty K9 is one of the few trainers who successfully work with and rehabilitate aggressive dogs with a history of biting.",
    image: "https://via.placeholder.com/400x300?text=Liberty+K9+Training",
    services: [
      "Residential Training Programs",
      "Behavior Modification",
      "Aggression Rehabilitation",
      "Obedience Training",
      "Real-World Training",
      "Family Integration"
    ],
    specialties: [
      "Aggressive Dog Rehabilitation",
      "Behavior Modification",
      "Family Pet Training",
      "Problem Solving"
    ],
    hours: "Monday-Friday: 9:00am-5:00pm, Saturday: 10:00am-3:00pm, Sunday: Closed"
  },
  {
    id: 2,
    name: "TOPDOG TRAINING",
    address: "Nationwide Service - Based in Dublin",
    county: "Dublin",
    phone: "01 685 1154",
    email: "info@topdogtraining.ie",
    website: "https://www.topdogtraining.ie",
    rating: 4.8,
    reviewCount: 342,
    description: "TOPDOG TRAINING is Ireland's leading dog training and behavior modification service, with over 40 years of experience. Led by Henry, a world-renowned dog trainer and behaviorist, they offer in-home training throughout Ireland. Their approach focuses on understanding canine psychology and teaching owners how to effectively communicate with their dogs. TOPDOG specializes in resolving behavioral issues such as aggression, anxiety, and excessive barking, using humane and effective methods. Their personalized programs are tailored to each dog's specific needs and the owner's lifestyle.",
    image: "https://via.placeholder.com/400x300?text=TOPDOG+TRAINING",
    services: [
      "In-Home Training",
      "Behavior Modification",
      "Puppy Training",
      "Aggression Rehabilitation",
      "Anxiety Management",
      "Owner Education"
    ],
    specialties: [
      "Behavioral Problem Solving",
      "Aggression Management",
      "Separation Anxiety",
      "Excessive Barking"
    ],
    hours: "Monday-Saturday: 8:00am-8:00pm, Sunday: By appointment only"
  },
  {
    id: 3,
    name: "K9 Security Ireland",
    address: "Clondalkin, Dublin 22",
    county: "Dublin",
    phone: "087 259 9330",
    email: "info@k9securityireland.com",
    website: "https://www.k9securityireland.com",
    rating: 4.7,
    reviewCount: 156,
    description: "K9 Security Ireland offers comprehensive dog training programs for all breeds, from basic obedience to advanced control. Their experienced trainers work with family pets, security dogs, and everything in between. Based in Dublin but serving nationwide, they provide both group classes and private sessions. Their training methodology emphasizes positive reinforcement while establishing clear boundaries. K9 Security Ireland also specializes in protection dog training for families seeking an added layer of security. Their facility includes indoor and outdoor training areas for year-round sessions.",
    image: "https://via.placeholder.com/400x300?text=K9+Security+Ireland",
    services: [
      "Basic Obedience Training",
      "Advanced Control Training",
      "Protection Dog Training",
      "Family Pet Training",
      "Group Classes",
      "Private Sessions"
    ],
    specialties: [
      "Protection Training",
      "Obedience Training",
      "Family Pet Integration",
      "Security Dog Training"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 10:00am-4:00pm, Sunday: Closed"
  },
  {
    id: 4,
    name: "Paws Academy Dog Training",
    address: "Castlebar, Co. Mayo",
    county: "Mayo",
    phone: "094 902 5678",
    email: "info@pawsacademy.ie",
    website: "https://www.thetrainingofdogs.com",
    rating: 4.9,
    reviewCount: 132,
    description: "Paws Academy Dog Training in Mayo offers comprehensive training programs designed to enhance your dog's behavior and skills. Their positive reinforcement-based approach creates a fun and engaging learning environment for both dogs and their owners. Serving the West of Ireland, Paws Academy provides puppy socialization classes, basic and advanced obedience training, and behavior modification for specific issues. Their experienced trainers work with dogs of all ages, breeds, and temperaments, tailoring programs to meet individual needs. The academy also offers workshops and seminars for owners to deepen their understanding of canine behavior.",
    image: "https://via.placeholder.com/400x300?text=Paws+Academy",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "Owner Workshops",
      "Private Sessions"
    ],
    specialties: [
      "Positive Reinforcement Training",
      "Puppy Development",
      "Rural Dog Training",
      "Recall Training"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 5,
    name: "Samantha Rawson Dog Training",
    address: "Newbridge, Co. Kildare",
    county: "Kildare",
    phone: "087 244 9848",
    email: "info@samantharawson.ie",
    website: "https://www.samantharawson.ie",
    rating: 4.8,
    reviewCount: 198,
    description: "Samantha Rawson is one of Ireland's leading dog trainers and behaviorists, offering a range of services from her base in Kildare. Her approach focuses on positive reinforcement and building a strong relationship between dogs and their owners. Samantha provides private consultations, group classes, residential training, and specialized puppy programs. With over 20 years of experience, she has developed effective methods for addressing various behavioral issues, including aggression, anxiety, and reactivity. Samantha is also a regular contributor to national media on dog behavior topics and conducts workshops for dog professionals.",
    image: "https://via.placeholder.com/400x300?text=Samantha+Rawson",
    services: [
      "Behavior Consultations",
      "Private Training",
      "Group Classes",
      "Residential Training",
      "Puppy Programs",
      "Professional Workshops"
    ],
    specialties: [
      "Reactive Dog Rehabilitation",
      "Positive Reinforcement Methods",
      "Puppy Development",
      "Media Contributions"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 10:00am-4:00pm, Sunday: Closed"
  },
  {
    id: 6,
    name: "Clare Dog Training",
    address: "Ennis, Co. Clare",
    county: "Clare",
    phone: "065 684 5678",
    email: "info@claredogtraining.com",
    website: "https://claredogtraining.com",
    rating: 4.7,
    reviewCount: 145,
    description: "Clare Dog Training is led by Philip Alain, an award-winning dog behaviorist and trainer with over 30 years of experience. Serving County Clare and surrounding areas, Philip specializes in in-home dog training, addressing behavioral issues in the environment where they occur. His holistic approach considers the dog's physical, mental, and emotional well-being, as well as the family dynamics. Clare Dog Training offers personalized programs for puppies, adult dogs, and seniors, focusing on creating harmonious relationships between dogs and their families. Philip's expertise extends to working with rescue dogs and those with traumatic backgrounds.",
    image: "https://via.placeholder.com/400x300?text=Clare+Dog+Training",
    services: [
      "In-Home Training",
      "Behavior Modification",
      "Puppy Training",
      "Rescue Dog Rehabilitation",
      "Senior Dog Programs",
      "Family Integration"
    ],
    specialties: [
      "Rescue Dog Rehabilitation",
      "In-Home Training",
      "Holistic Approach",
      "Trauma Recovery"
    ],
    hours: "Monday-Saturday: 9:00am-7:00pm, Sunday: By appointment only"
  },
  {
    id: 7,
    name: "Sinead Hughes Dog Training",
    address: "Dublin City, Co. Dublin",
    county: "Dublin",
    phone: "087 123 4567",
    email: "info@dogtrainersinead.com",
    website: "https://dogtrainersinead.com",
    rating: 4.6,
    reviewCount: 178,
    description: "Sinead Hughes is a Dublin-based dog trainer specializing in positive reinforcement methods. She works on a private one-to-one basis, traveling to clients' homes to help them train their dogs in their everyday environment. Sinead's approach focuses on building a strong relationship between dogs and their owners through clear communication and reward-based training. Her services include puppy training, basic and advanced obedience, and addressing specific behavioral issues. Sinead is particularly skilled at working with nervous and reactive dogs, helping them gain confidence and develop appropriate social skills.",
    image: "https://via.placeholder.com/400x300?text=Sinead+Hughes",
    services: [
      "In-Home Training",
      "Positive Reinforcement Training",
      "Puppy Development",
      "Reactive Dog Rehabilitation",
      "Basic Obedience",
      "Advanced Obedience"
    ],
    specialties: [
      "Positive Reinforcement Methods",
      "Nervous Dog Rehabilitation",
      "Urban Dog Training",
      "Reactive Dog Management"
    ],
    hours: "Monday-Friday: 10:00am-8:00pm, Saturday: 10:00am-5:00pm, Sunday: Closed"
  },
  {
    id: 8,
    name: "Bark Busters Home Dog Training",
    address: "Nationwide Service - Based in Cork",
    county: "Cork",
    phone: "1800 067 710",
    email: "ireland@barkbusters.com",
    website: "https://www.barkbusters.ie",
    rating: 4.7,
    reviewCount: 256,
    description: "Bark Busters Home Dog Training provides in-home dog training services throughout Ireland. Their unique approach focuses on understanding canine communication and teaching owners how to establish themselves as the pack leader. Bark Busters trainers work with dogs of all ages, breeds, and behavioral issues, from basic obedience to severe aggression. Their programs are tailored to each dog's specific needs and the family's lifestyle. The company offers a lifetime guarantee, providing ongoing support whenever needed. Bark Busters' methods are dog-friendly, using voice control and body language rather than treats or physical force.",
    image: "https://via.placeholder.com/400x300?text=Bark+Busters",
    services: [
      "In-Home Training",
      "Behavior Modification",
      "Puppy Training",
      "Aggression Rehabilitation",
      "Lifetime Support Guarantee",
      "Owner Education"
    ],
    specialties: [
      "Canine Communication",
      "Pack Leadership",
      "Voice Control Training",
      "Lifetime Support"
    ],
    hours: "Monday-Saturday: 9:00am-7:00pm, Sunday: By appointment only"
  },
  {
    id: 9,
    name: "Positive Dog Training Galway",
    address: "Oranmore, Co. Galway",
    county: "Galway",
    phone: "091 786 5432",
    email: "info@positivedogtraininggalway.ie",
    website: "https://www.positivedogtraininggalway.ie",
    rating: 4.8,
    reviewCount: 167,
    description: "Positive Dog Training Galway specializes in force-free, science-based training methods that focus on building a strong relationship between dogs and their owners. Serving Galway and surrounding counties, they offer puppy classes, basic and advanced obedience, and behavior modification programs. Their experienced trainers use positive reinforcement techniques to teach dogs new skills and address unwanted behaviors. The center features indoor and outdoor training areas, allowing for year-round sessions in various environments. They also provide specialized programs for reactive dogs, agility training, and scent work to provide mental stimulation and build confidence.",
    image: "https://via.placeholder.com/400x300?text=Positive+Dog+Training+Galway",
    services: [
      "Puppy Classes",
      "Basic Obedience",
      "Advanced Obedience",
      "Reactive Dog Classes",
      "Agility Training",
      "Scent Work"
    ],
    specialties: [
      "Force-Free Methods",
      "Positive Reinforcement",
      "Reactive Dog Rehabilitation",
      "Canine Enrichment"
    ],
    hours: "Tuesday-Friday: 10:00am-8:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 10,
    name: "Canine College Ireland",
    address: "Naas, Co. Kildare",
    county: "Kildare",
    phone: "045 876 5432",
    email: "info@caninecollegeireland.ie",
    website: "https://www.caninecollegeireland.ie",
    rating: 4.9,
    reviewCount: 213,
    description: "Canine College Ireland is a premier dog training facility in Kildare, offering a comprehensive range of services for dogs of all ages and breeds. Their team of certified trainers specializes in puppy education, obedience training, and behavior modification. The college features purpose-built indoor and outdoor training areas, including agility equipment and sensory enrichment zones. Their methodology combines positive reinforcement with clear boundaries, creating well-balanced and obedient dogs. Canine College also offers specialized programs for working dogs, therapy dog training, and competitive obedience. Their residential training program provides intensive training while ensuring dogs receive proper care and attention.",
    image: "https://via.placeholder.com/400x300?text=Canine+College+Ireland",
    services: [
      "Puppy Education",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "Residential Training",
      "Therapy Dog Training"
    ],
    specialties: [
      "Balanced Training Approach",
      "Working Dog Development",
      "Therapy Dog Preparation",
      "Competitive Obedience"
    ],
    hours: "Monday-Friday: 9:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday: 10:00am-3:00pm"
  },
  {
    id: 11,
    name: "Tails of Success Dog Training",
    address: "Limerick City, Co. Limerick",
    county: "Limerick",
    phone: "061 456 7890",
    email: "info@tailsofsuccess.ie",
    website: "https://www.tailsofsuccess.ie",
    rating: 4.7,
    reviewCount: 189,
    description: "Tails of Success Dog Training in Limerick offers comprehensive training programs for dogs of all ages and breeds. Their approach focuses on positive reinforcement and clear communication between dogs and their owners. Services include puppy socialization, basic and advanced obedience, and behavior modification for specific issues. The center features indoor training facilities for year-round sessions and secure outdoor areas for real-world practice. Their experienced trainers work with family pets, rescue dogs, and those with behavioral challenges. Tails of Success also offers specialized programs for therapy dog preparation and assistance dog training.",
    image: "https://via.placeholder.com/400x300?text=Tails+of+Success",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "Therapy Dog Preparation",
      "Assistance Dog Training"
    ],
    specialties: [
      "Positive Reinforcement Methods",
      "Rescue Dog Rehabilitation",
      "Therapy Dog Training",
      "Urban Dog Skills"
    ],
    hours: "Tuesday-Friday: 10:00am-8:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 12,
    name: "Canine Behavior Ireland",
    address: "Sandyford, Dublin 18",
    county: "Dublin",
    phone: "01 295 8765",
    email: "info@caninebehaviorireland.ie",
    website: "https://www.caninebehaviorireland.ie",
    rating: 4.8,
    reviewCount: 234,
    description: "Canine Behavior Ireland specializes in addressing complex behavioral issues in dogs through science-based methods and a deep understanding of canine psychology. Based in Dublin but serving nationwide, their team of certified behaviorists works with dogs experiencing anxiety, aggression, reactivity, and other challenging behaviors. Their approach begins with a comprehensive assessment of the dog's behavior, environment, and family dynamics, followed by a tailored modification program. Canine Behavior Ireland works closely with veterinarians to ensure any underlying medical issues are addressed. They offer both in-home consultations and clinic-based sessions, depending on the dog's specific needs.",
    image: "https://via.placeholder.com/400x300?text=Canine+Behavior+Ireland",
    services: [
      "Behavior Assessments",
      "Anxiety Management",
      "Aggression Rehabilitation",
      "Reactivity Reduction",
      "Veterinary Collaboration",
      "Follow-up Support"
    ],
    specialties: [
      "Complex Behavior Cases",
      "Canine Psychology",
      "Veterinary Behavioral Medicine",
      "Scientific Approach"
    ],
    hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 10:00am-4:00pm, Sunday: Closed"
  },
  {
    id: 13,
    name: "Pawsitive Steps Dog Training",
    address: "Waterford City, Co. Waterford",
    county: "Waterford",
    phone: "051 876 5432",
    email: "info@pawsitivesteps.ie",
    website: "https://www.pawsitivesteps.ie",
    rating: 4.6,
    reviewCount: 156,
    description: "Pawsitive Steps Dog Training in Waterford offers force-free, reward-based training programs for dogs of all ages and breeds. Their services include puppy foundations, basic and advanced obedience, and specialized behavior modification. The center features indoor training facilities and secure outdoor areas for practical skills development. Their experienced trainers focus on building a strong relationship between dogs and their owners through positive reinforcement and clear communication. Pawsitive Steps also offers workshops on canine body language, enrichment activities, and first aid for dog owners. Their community classes provide ongoing support and socialization opportunities for graduates of their training programs.",
    image: "https://via.placeholder.com/400x300?text=Pawsitive+Steps",
    services: [
      "Puppy Foundations",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "Owner Workshops",
      "Community Classes"
    ],
    specialties: [
      "Force-Free Methods",
      "Reward-Based Training",
      "Canine Enrichment",
      "Owner Education"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-4:00pm, Sunday-Monday: Closed"
  },
  {
    id: 14,
    name: "K9 Connections",
    address: "Sligo Town, Co. Sligo",
    county: "Sligo",
    phone: "071 912 3456",
    email: "info@k9connections.ie",
    website: "https://www.k9connections.ie",
    rating: 4.7,
    reviewCount: 142,
    description: "K9 Connections in Sligo provides comprehensive dog training services for the Northwest region of Ireland. Their approach focuses on building a strong bond between dogs and their owners through positive reinforcement and clear communication. Services include puppy socialization, basic and advanced obedience, and behavior modification for specific issues. The center offers both group classes and private sessions, tailored to each dog's needs and learning style. K9 Connections specializes in working with high-energy breeds, providing structured activities and training to channel their energy positively. They also offer specialized programs for farm dogs, helping them integrate safely with livestock and rural environments.",
    image: "https://via.placeholder.com/400x300?text=K9+Connections",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "High-Energy Dog Programs",
      "Farm Dog Training"
    ],
    specialties: [
      "High-Energy Breed Management",
      "Rural Dog Skills",
      "Farm Dog Training",
      "Positive Reinforcement Methods"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 15,
    name: "Canine Campus",
    address: "Kilkenny City, Co. Kilkenny",
    county: "Kilkenny",
    phone: "056 778 9012",
    email: "info@caninecampus.ie",
    website: "https://www.caninecampus.ie",
    rating: 4.8,
    reviewCount: 176,
    description: "Canine Campus in Kilkenny offers a modern approach to dog training, combining positive reinforcement with structured learning environments. Their purpose-built facility includes indoor and outdoor training areas, sensory enrichment zones, and agility equipment. Services include puppy foundations, basic and advanced obedience, and specialized behavior modification programs. Their experienced trainers work with dogs of all ages, breeds, and temperaments, tailoring programs to meet individual needs. Canine Campus also offers day training options for busy owners, where dogs receive professional training during the day and practice sessions with owners in the evening.",
    image: "https://via.placeholder.com/400x300?text=Canine+Campus",
    services: [
      "Puppy Foundations",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "Day Training",
      "Agility Training"
    ],
    specialties: [
      "Structured Learning Environments",
      "Day Training Programs",
      "Sensory Enrichment",
      "Agility Skills"
    ],
    hours: "Monday-Friday: 9:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday: Closed"
  },
  {
    id: 16,
    name: "Canine Coach Cork",
    address: "Douglas, Cork City, Co. Cork",
    county: "Cork",
    phone: "021 456 7890",
    email: "info@caninecoachcork.ie",
    website: "https://www.caninecoachcork.ie",
    rating: 4.9,
    reviewCount: 198,
    description: "Canine Coach Cork provides professional dog training services throughout Cork City and county. Their team of certified trainers specializes in puppy education, obedience training, and behavior modification using positive, force-free methods. Services include private in-home sessions, small group classes, and specialized workshops for specific skills and behaviors. Canine Coach Cork is particularly known for their work with rescue dogs, helping them adjust to family life and overcome past traumas. They also offer specialized programs for reactive dogs, providing safe and controlled environments for rehabilitation. Their ongoing support ensures lasting results and continued development for both dogs and their owners.",
    image: "https://via.placeholder.com/400x300?text=Canine+Coach+Cork",
    services: [
      "In-Home Training",
      "Small Group Classes",
      "Puppy Education",
      "Rescue Dog Rehabilitation",
      "Reactive Dog Programs",
      "Specialized Workshops"
    ],
    specialties: [
      "Force-Free Methods",
      "Rescue Dog Integration",
      "Reactive Dog Rehabilitation",
      "Ongoing Support"
    ],
    hours: "Monday-Friday: 10:00am-8:00pm, Saturday: 9:00am-5:00pm, Sunday: By appointment only"
  },
  {
    id: 17,
    name: "Paws for Thought Dog Training",
    address: "Letterkenny, Co. Donegal",
    county: "Donegal",
    phone: "074 912 3456",
    email: "info@pawsforthought.ie",
    website: "https://www.pawsforthought.ie",
    rating: 4.7,
    reviewCount: 132,
    description: "Paws for Thought Dog Training serves Donegal and the Northwest with comprehensive training programs for dogs of all ages and breeds. Their approach focuses on positive reinforcement and building a strong relationship between dogs and their owners. Services include puppy socialization, basic and advanced obedience, and behavior modification for specific issues. The center offers both indoor and outdoor training facilities, allowing for year-round sessions in various environments. Paws for Thought specializes in working with rural dogs, addressing issues specific to country living such as livestock chasing and boundary training. They also offer specialized programs for hunting dogs, helping them develop appropriate skills while maintaining good household manners.",
    image: "https://via.placeholder.com/400x300?text=Paws+for+Thought",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Behavior Modification",
      "Rural Dog Training",
      "Hunting Dog Programs"
    ],
    specialties: [
      "Rural Dog Skills",
      "Livestock Respect Training",
      "Hunting Dog Development",
      "Boundary Training"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 18,
    name: "Canine Harmony Ireland",
    address: "Mullingar, Co. Westmeath",
    county: "Westmeath",
    phone: "044 934 5678",
    email: "info@canineharmony.ie",
    website: "https://www.canineharmony.ie",
    rating: 4.8,
    reviewCount: 165,
    description: "Canine Harmony Ireland in Mullingar offers holistic dog training services that address the physical, mental, and emotional needs of dogs. Their approach combines positive reinforcement training with appropriate boundary setting, creating well-balanced and confident dogs. Services include puppy foundations, basic and advanced obedience, and specialized behavior modification programs. Their facility features indoor and outdoor training areas, sensory enrichment zones, and agility equipment. Canine Harmony specializes in working with anxious and fearful dogs, providing gentle rehabilitation in a supportive environment. They also offer workshops on canine nutrition, enrichment activities, and natural remedies to support overall wellbeing.",
    image: "https://via.placeholder.com/400x300?text=Canine+Harmony+Ireland",
    services: [
      "Puppy Foundations",
      "Basic Obedience",
      "Advanced Obedience",
      "Anxiety Rehabilitation",
      "Holistic Wellbeing Workshops",
      "Sensory Enrichment"
    ],
    specialties: [
      "Holistic Approach",
      "Anxious Dog Rehabilitation",
      "Sensory Enrichment",
      "Canine Wellbeing"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 19,
    name: "Clever Canines Training Academy",
    address: "Drogheda, Co. Louth",
    county: "Louth",
    phone: "041 983 4567",
    email: "info@clevercanines.ie",
    website: "https://www.clevercanines.ie",
    rating: 4.6,
    reviewCount: 143,
    description: "Clever Canines Training Academy in Drogheda provides comprehensive dog training services for the Northeast region. Their team of certified trainers specializes in puppy education, obedience training, and behavior modification using reward-based methods. The academy offers both group classes and private sessions, tailored to each dog's needs and learning style. Their facility includes indoor and outdoor training areas, allowing for year-round sessions in various environments. Clever Canines is particularly known for their specialized programs in scent work, trick training, and canine fitness, providing mental and physical stimulation beyond basic obedience. They also offer day training options for busy owners who want professional help with their dog's education.",
    image: "https://via.placeholder.com/400x300?text=Clever+Canines",
    services: [
      "Puppy Education",
      "Basic Obedience",
      "Advanced Obedience",
      "Scent Work",
      "Trick Training",
      "Canine Fitness"
    ],
    specialties: [
      "Reward-Based Methods",
      "Canine Enrichment",
      "Scent Detection Skills",
      "Trick Training"
    ],
    hours: "Tuesday-Friday: 10:00am-8:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 20,
    name: "Wag & Train",
    address: "Tralee, Co. Kerry",
    county: "Kerry",
    phone: "066 712 3456",
    email: "info@wagandtrain.ie",
    website: "https://www.wagandtrain.ie",
    rating: 4.7,
    reviewCount: 154,
    description: "Wag & Train in Tralee offers positive, force-free dog training services throughout Kerry. Their approach focuses on building a strong relationship between dogs and their owners through clear communication and reward-based methods. Services include puppy socialization, basic and advanced obedience, and behavior modification for specific issues. The center provides both group classes and private sessions, tailored to each dog's needs and learning style. Wag & Train specializes in working with rescue dogs, helping them adjust to family life and overcome past challenges. They also offer specialized programs for beach and water safety, essential skills for dogs living in coastal Kerry.",
    image: "https://via.placeholder.com/400x300?text=Wag+and+Train",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Rescue Dog Rehabilitation",
      "Beach & Water Safety",
      "Private Sessions"
    ],
    specialties: [
      "Force-Free Methods",
      "Rescue Dog Integration",
      "Coastal Dog Skills",
      "Water Safety"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 21,
    name: "Canine Companions Training",
    address: "Carlow Town, Co. Carlow",
    county: "Carlow",
    phone: "059 913 4567",
    email: "info@caninecompanions.ie",
    website: "https://www.caninecompanions.ie",
    rating: 4.8,
    reviewCount: 138,
    description: "Canine Companions Training in Carlow provides comprehensive dog training services using positive, reward-based methods. Their team of certified trainers specializes in puppy education, basic and advanced obedience, and behavior modification for specific issues. The center offers both group classes and private sessions, tailored to each dog's needs and learning style. Their facility includes indoor and outdoor training areas, allowing for year-round sessions in various environments. Canine Companions is particularly known for their work with service and therapy dog candidates, providing specialized training to prepare dogs for these important roles. They also offer programs for senior dogs, helping them maintain cognitive function and physical abilities.",
    image: "https://via.placeholder.com/400x300?text=Canine+Companions",
    services: [
      "Puppy Education",
      "Basic Obedience",
      "Advanced Obedience",
      "Service Dog Preparation",
      "Therapy Dog Training",
      "Senior Dog Programs"
    ],
    specialties: [
      "Reward-Based Methods",
      "Service Dog Preparation",
      "Therapy Dog Training",
      "Senior Dog Support"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 22,
    name: "Paws & Reflect Dog Training",
    address: "Wexford Town, Co. Wexford",
    county: "Wexford",
    phone: "053 912 3456",
    email: "info@pawsandreflect.ie",
    website: "https://www.pawsandreflect.ie",
    rating: 4.7,
    reviewCount: 129,
    description: "Paws & Reflect Dog Training in Wexford offers a thoughtful approach to dog training, focusing on understanding canine behavior and building strong human-dog relationships. Their services include puppy socialization, basic and advanced obedience, and behavior modification for specific issues. The center provides both group classes and private sessions, tailored to each dog's needs and learning style. Paws & Reflect specializes in working with reactive and anxious dogs, creating safe and controlled environments for rehabilitation. They also offer specialized programs for beach and water safety, essential skills for dogs living in coastal Wexford. Their ongoing support ensures lasting results and continued development for both dogs and their owners.",
    image: "https://via.placeholder.com/400x300?text=Paws+and+Reflect",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Reactive Dog Rehabilitation",
      "Beach & Water Safety",
      "Anxiety Management"
    ],
    specialties: [
      "Reactive Dog Rehabilitation",
      "Anxiety Management",
      "Coastal Dog Skills",
      "Relationship Building"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 23,
    name: "Canine Scholars",
    address: "Athlone, Co. Westmeath",
    county: "Westmeath",
    phone: "090 647 8901",
    email: "info@caninescholars.ie",
    website: "https://www.caninescholars.ie",
    rating: 4.9,
    reviewCount: 147,
    description: "Canine Scholars in Athlone provides comprehensive dog training services for the Midlands region. Their approach focuses on developing well-mannered, confident dogs through positive reinforcement and clear communication. Services include puppy foundations, basic and advanced obedience, and specialized behavior modification programs. Their facility features indoor and outdoor training areas, allowing for year-round sessions in various environments. Canine Scholars specializes in working with families with children, ensuring safe and harmonious interactions between dogs and kids of all ages. They also offer specialized programs for dogs with special needs, including deaf and blind dogs, adapting training methods to accommodate these challenges.",
    image: "https://via.placeholder.com/400x300?text=Canine+Scholars",
    services: [
      "Puppy Foundations",
      "Basic Obedience",
      "Advanced Obedience",
      "Family Dog Training",
      "Special Needs Dog Programs",
      "Behavior Modification"
    ],
    specialties: [
      "Family Integration",
      "Child-Dog Safety",
      "Special Needs Dogs",
      "Positive Reinforcement Methods"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 24,
    name: "Canine Excellence Training",
    address: "Navan, Co. Meath",
    county: "Meath",
    phone: "046 902 3456",
    email: "info@canineexcellence.ie",
    website: "https://www.canineexcellence.ie",
    rating: 4.8,
    reviewCount: 168,
    description: "Canine Excellence Training in Navan offers premium dog training services throughout County Meath. Their team of certified trainers specializes in puppy education, obedience training, and behavior modification using balanced methods that combine positive reinforcement with clear boundaries. The center provides both group classes and private sessions, tailored to each dog's needs and learning style. Their facility includes indoor and outdoor training areas, allowing for year-round sessions in various environments. Canine Excellence is particularly known for their work with working breeds, helping them channel their energy and instincts appropriately. They also offer specialized programs in tracking, scent work, and competitive obedience for dogs and owners interested in canine sports.",
    image: "https://via.placeholder.com/400x300?text=Canine+Excellence",
    services: [
      "Puppy Education",
      "Basic Obedience",
      "Advanced Obedience",
      "Working Breed Programs",
      "Tracking & Scent Work",
      "Competitive Obedience"
    ],
    specialties: [
      "Balanced Training Methods",
      "Working Breed Management",
      "Canine Sports Preparation",
      "Scent Detection Skills"
    ],
    hours: "Tuesday-Friday: 10:00am-8:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  },
  {
    id: 25,
    name: "Pawsitive Outcomes",
    address: "Dundalk, Co. Louth",
    county: "Louth",
    phone: "042 933 4567",
    email: "info@pawsitiveoutcomes.ie",
    website: "https://www.pawsitiveoutcomes.ie",
    rating: 4.7,
    reviewCount: 152,
    description: "Pawsitive Outcomes in Dundalk provides force-free, science-based dog training services for the Northeast region. Their approach focuses on positive reinforcement and building a strong relationship between dogs and their owners. Services include puppy socialization, basic and advanced obedience, and behavior modification for specific issues. The center offers both group classes and private sessions, tailored to each dog's needs and learning style. Pawsitive Outcomes specializes in working with rescue dogs, particularly those from abroad, helping them adjust to Irish home life and overcome past challenges. They also offer specialized programs for border collies and other high-intelligence breeds, providing mental stimulation and appropriate outlets for their energy and drive.",
    image: "https://via.placeholder.com/400x300?text=Pawsitive+Outcomes",
    services: [
      "Puppy Socialization",
      "Basic Obedience",
      "Advanced Obedience",
      "Rescue Dog Rehabilitation",
      "Border Collie Programs",
      "Behavior Modification"
    ],
    specialties: [
      "Force-Free Methods",
      "Rescue Dog Integration",
      "High-Intelligence Breeds",
      "Mental Stimulation"
    ],
    hours: "Tuesday-Friday: 10:00am-7:00pm, Saturday: 9:00am-5:00pm, Sunday-Monday: Closed"
  }
];


export default trainingData;
