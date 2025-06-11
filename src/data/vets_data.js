// Vets data with real Irish veterinary clinics
const vetsData = [
    // Keeping existing entries (id: 1–11)...
    {
        id: 1,
        name: "Grey Abbey Vets",
        address: "123 Main Street, Kildare Town, Co. Kildare",
        county: "Kildare",
        phone: "(045) 522 390",
        email: "info@greyabbeyvets.ie",
        website: "https://www.greyabbeyvets.com",
        rating: 4.9,
        reviewCount: 187,
        description: "Grey Abbey Vets is a modern, fully-equipped veterinary practice dedicated to providing exceptional care for dogs and other pets.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Microchipping",
            "Surgery",
            "Dental care",
            "X-ray and ultrasound",
            "Laboratory testing",
            "Emergency services"
        ],
        specialties: [
            "Canine medicine",
            "Orthopedic surgery",
            "Geriatric care"
        ],
        hours: "Monday-Friday: 8:00am-7:00pm, Saturday: 9:00am-4:00pm, Sunday: Emergency only"
    },
    {
        id: 2,
        name: "The Animal Hospital",
        address: "37A Main Rd, Tallaght, Co. Dublin",
        county: "Dublin",
        phone: "01 4515930",
        email: " ",
        website: " ",
        rating: 4.8,
        reviewCount: 0,
        description: "State-of-the-art facility offering comprehensive medical, surgical, and emergency care for dogs.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: [
            "Ambulance Service",
            "Annual Health Examination",
            "Canine Vaccines",
            "Clinic Service",
            "Dental Procedure",
            "Dog Grooming",
            "Flea Treatment",
            "Health Checks",
            "Large Animal",
            "Oral Health",
            "Pet Care",
            "Preventative Health Care",
            "Puppy Party",
            "Veterinary Practice",
            "Veterinary Surgeries",
            "Vets Practice"
        ],
        specialties: [
            "Emergency and critical care",
        ],
        hours: "Sunday - Monday 9.00 am - 7.30 pm, Saturday 9.30 am - 4.00 pm, 7 days a week"
    },
    {
        id: 3,
        name: "Village Vets",
        address: "Avondale Terrace, 1 Avondale Square, Dunboyne, Co. Meath, A86 RF66",
        county: "Meath",
        phone: "(01) 825 1125",
        email: "info@villagevets.ie",
        website: "https://www.villagevets.ie/clinics/dunboyne-vets",
        rating: 4.7,
        reviewCount: 176,
        description: "Village Vets is a community-focused network of clinics with personalized care for dogs.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: [
            "Preventative care",
            "Vaccinations",
            "Microchipping",
            "Surgery",
            "Dental care",
            "Nutritional counseling",
            "Behavior consultations",
            "Puppy wellness programs"
        ],
        specialties: [
            "Preventative medicine",
            "Dental health",
            "Weight management"
        ],
        hours: "Monday-Friday: 9:00 am-7:00pm, Saturday: 9:00am-1:00pm, Sunday: Closed"
    },
    {
        id: 4,
        name: "Blacklion Pet Hospital",
        address: "12 Veterinary Way, Greystones, Co. Wicklow",
        county: "Wicklow",
        phone: "(01) 287 5283",
        email: "reception@vets.ie",
        website: "https://www.vets.ie/?utm_source=gmb&utm_medium=organic&utm_campaign=attribute",
        rating: 4.9,
        reviewCount: 215,
        description: "Compassionate veterinary care with modern facilities in Greystones.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: [
            "Wellness care",
            "Vaccinations",
            "Surgery",
            "Dental procedures",
            "Digital radiography",
            "Ultrasound",
            "In-house laboratory",
            "Pharmacy"
        ],
        specialties: [
            "Fear-free practice",
            "Soft tissue surgery",
            "Senior dog care"
        ],
        hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-12:00pm, Sunday: 10:00am-1:00pm (emergencies only)"
    },
    {
        id: 5,
        name: "Palmerstown Veterinary Clinic",
        address: "Old Lucan Road, Palmerstown Lower, Dublin, D20 HC86",
        county: "Dublin",
        phone: "01 623 70 44",
        email: "info@palmerstownvet.ie",
        website: "https://www.palmerstownvets.ie",
        rating: 4.6,
        reviewCount: 142,
        description: "Family-run veterinary practice offering trusted care in a warm setting.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Microchipping",
            "Neutering",
            "Dental care",
            "Geriatric care",
            "Nutritional advice",
            "Minor surgical procedures"
        ],
        specialties: [
            "Breed-specific health management",
            "Geriatric medicine",
            "Preventative care"
        ],
        hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-1:00pm, Sunday: Closed"
    },
    {
        id: 6,
        name: "Veterinary Specialists Ireland",
        address: "Clonmahon, Summerhill, Co. Meath",
        county: "Meath",
        phone: "046 955 7551",
        email: "info@vetspecialists.ie",
        website: "https://vetspecialists.ie",
        rating: 4.9,
        reviewCount: 98,
        description: "A referral-only veterinary hospital offering cutting-edge diagnostics and treatment across specialties such as neurology, oncology, and orthopaedics.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: ["Advanced diagnostics", "Specialist consultations", "MRI/CT imaging", "Emergency surgery"],
        specialties: ["Neurology", "Orthopaedics", "Oncology"],
        hours: "Monday-Friday: 8:00am-6:00pm, Emergency on-call 24/7"
    },
    {
        id: 7,
        name: "All Care Veterinary Hospital",
        address: "Park Road, Killarney, Co. Kerry",
        county: "Kerry",
        phone: "064 6637333",
        email: "allcarevetskillarney@gmail.com",
        website: "https://www.allcarevets.ie",
        rating: 4.8,
        reviewCount: 132,
        description: "Trusted family-run veterinary hospital providing compassionate care with modern facilities in the heart of Kerry.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: ["Routine checkups", "Dental surgery", "X-ray", "Spay & neuter", "Microchipping"],
        specialties: ["Small animal surgery", "Preventative care"],
        hours: "Monday-Friday: 8:30am-6:00pm, Saturday: 9:00am-6:00pm"
    },
    {
        id: 8,
        name: "Sunbeam Veterinary Hospital",
        address: "Northpoint Business Park, Cork, T23 FXY9",
        county: "Cork",
        phone: "+353 21 439 1600",
        email: "info@sunbeamvets.com",
        website: "https://www.sunbeamvets.com",
        rating: 4.7,
        reviewCount: 201,
        description: "Sunbeam offers top-tier veterinary services across Cork with branches in Blackpool, Passage West, and Cobh.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: ["Vaccinations", "Diagnostics", "Surgery", "Dental care", "Puppy classes"],
        specialties: ["Rehabilitation", "Canine behavior", "Chronic pain management"],
        hours: "Monday-Saturday: 8:00am-7:00pm, Sunday: Emergencies only"
    },
    {
        id: 9,
        name: "Adare Veterinary Clinic",
        address: "Adare Veterinary Clinic,Curraghbeg, Adare, Co. Limerick, V94EW6R",
        county: "Limerick",
        phone: "061 396390",
        email: "info@adarevets.com",
        website: "https://www.adarevets.com",
        rating: 4.8,
        reviewCount: 87,
        description: "Friendly and experienced veterinary team in Adare offering complete pet care and diagnostics.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: ["Examinations", "Microchipping", "Surgery", "Flea/tick treatment"],
        specialties: ["Dermatology", "Puppy care", "Diagnostics"],
        hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-1:00pm"
    },
    {
        id: 10,
        name: "All Creatures Veterinary Clinic",
        address: "Lanesboro Road,Roscommon Town Co. Roscommon",
        county: "Roscommon",
        phone: "090 662 6898",
        email: "allcreatures1234@gmail.com",
        website: "https://allcreaturesvets.ie",
        rating: 4.7,
        reviewCount: 94,
        description: "Providing compassionate and professional pet care in Roscommon for over 20 years.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        services: ["Vaccinations", "Diagnostics", "Surgery", "Dental work", "Pet travel documentation"],
        specialties: ["General practice", "Canine wellness", "Soft tissue surgery"],
        hours: "Monday-Friday: 9:00am-5:30pm, Saturday: 9:00am-12:00pm"
    },
    {
        id: 11,
        name: "Vet Me Featured Listing",
        website: "https://www.vetme.ie",
        description: "Provide Comprehensive list of vet clinics in Irealand",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
    },
    // Adding new real Irish veterinary clinics
    {
        id: 12,
        name: "Animal Welfare Veterinary Clinic",
        address: "40 Charlemont Street, Dublin 2",
        county: "Dublin",
        phone: "(01) 6714303",
        email: "info@animalwelfareclinic.ie",
        website: "http://animalwelfareclinic.ie/",
        rating: 4.8,
        reviewCount: 156,
        description: "INDEPENDENTLY owned and run companion animal veterinary clinic situated in the heart of Dublin. Caring for Dublin pets for over 35 years with traditional, caring and personal service.",
        image: "/src/assets/images/vets/vet_generic_1.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Microchipping",
            "Surgery",
            "Dental care",
            "Nutritional advice"
        ],
        specialties: [
            "Companion animal medicine",
            "Preventative care",
            "Long-term client relationships"
        ],
        hours: "Mon-Fri: 9:30am-7:00pm, Saturdays: 10am-1pm, Sundays: Closed, Bank Holidays: 12-2pm"
    },
    {
        id: 13,
        name: "Fairview Veterinary Hospital",
        address: "13 Fairview Strand, Dublin 3",
        county: "Dublin",
        phone: "(01) 833 8217",
        email: "info@fairviewvet.ie",
        website: "https://www.fairviewvet.ie/",
        rating: 4.7,
        reviewCount: 128,
        description: "Established in 1974 by Michael Tuite snr MRCVS, providing top quality veterinary care to clients on the Northside of Dublin for over 40 years.",
        image: "/src/assets/images/vets/vet_generic_3.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Dental care",
            "Pet Health Club membership",
            "New pet consultations"
        ],
        specialties: [
            "Small animal medicine",
            "Preventative care",
            "Pet Health Club"
        ],
        hours: "Monday-Friday: 8:00am-6:00pm, Saturday: 9:00am-1:00pm, Sunday: Closed"
    },
    {
        id: 14,
        name: "Dublin Bay Vets",
        address: "5 Main Street, Clongriffin, Dublin 13",
        county: "Dublin",
        phone: "01 539 2330",
        email: "clinic@dublinbayvets.ie",
        website: "https://dublinbayvets.ie/",
        rating: 4.8,
        reviewCount: 144,
        description: "Modern veterinary clinic accepting all new patient registrations. Collaborative approach between vet and pet owner, adhering to highest standards of veterinary medicine. Specializes in helping nervous pets.",
        image: "/src/assets/images/vets/vet_generic_4.png",
        services: [
            "New patient registrations",
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Nervous pet care"
        ],
        specialties: [
            "Nervous pet handling",
            "Collaborative pet care",
            "Modern facilities"
        ],
        hours: "Monday-Wednesday: 07:00-19:00, Thursday: 07:00-19:00, Friday: 07:00-19:00"
    },
    {
        id: 15,
        name: "Abbeyville Veterinary Hospital - Togher",
        address: "1 Clashduv Road, Togher, Cork, T12 ET29",
        county: "Cork",
        phone: "021 431 7019",
        email: "info@abbeyvillevet.ie",
        website: "https://abbeyvillevet.ie/",
        rating: 4.9,
        reviewCount: 203,
        description: "Established over 70 years ago, Abbeyville Veterinary Hospital is a leading facility in Cork, providing a wide range of veterinary services for all types of pets.",
        image: "/src/assets/images/vets/vet_generic_5.png",
        services: [
            "Medical services",
            "Surgical procedures",
            "Obstetrical services",
            "Routine checkups",
            "Emergency care"
        ],
        specialties: [
            "Small animal medicine",
            "Surgical expertise",
            "Legacy of excellence"
        ],
        hours: "Monday-Friday: 8:00am-6:00pm, Saturday: 10:00am-4:00pm (Closed 1:00pm-2:00pm), Sunday: Closed"
    },
    {
        id: 16,
        name: "Barna Veterinary Clinic",
        address: "Apartment 5, An Coirnéal, Seapoint, Co. Galway, H91 V6KV",
        county: "Galway",
        phone: "(00353) 91867008",
        email: "info@barnavetclinic.ie",
        website: "https://www.barnavetclinic.ie/",
        rating: 4.8,
        reviewCount: 144,
        description: "When choosing a vets to care for your companion you want a practice that doesn't only offer the best clinical expertise but a genuine passion for animals too. At Barna Vet Clinic that is exactly what you'll find.",
        image: "/src/assets/images/vets/vet_generic_6.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Dental care",
            "Nose-to-tail checkups"
        ],
        specialties: [
            "Genuine passion for animals",
            "Nurturing environment",
            "Comprehensive pet care"
        ],
        hours: "Monday-Friday: 8:00am-6:00pm, Saturday: 10:00am-4:00pm (Closed 1:00pm-2:00pm), Sunday: Closed"
    },
    {
        id: 17,
        name: "Moycullen Veterinary Clinic",
        address: "Gairdin Mháire, Killarainy, Co. Galway, H91 W9X7",
        county: "Galway",
        phone: "091 868572",
        email: "info@barnavetclinic.ie",
        website: "https://www.barnavetclinic.ie/",
        rating: 4.9,
        reviewCount: 82,
        description: "Sister clinic to Barna Veterinary Clinic, offering the same high standards of care in the Moycullen area. Our Clinical Director Leanne comes from a longstanding veterinary background – her grandfather even set up the first partner practice in Ireland.",
        image: "/src/assets/images/vets/vet_generic_1.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Dental care",
            "Nutritional advice"
        ],
        specialties: [
            "Family veterinary tradition",
            "Personalized pet care",
            "Welcoming environment"
        ],
        hours: "Monday-Wednesday: 8:30am-6:00pm (closed for lunch 1:30pm-2:30pm), Thursday-Friday: 8:30am-6:00pm (closed for lunch 1:30pm-2:30pm)"
    },
    {
        id: 18,
        name: "Rockhall Veterinary - Henry Street",
        address: "22 Henry Street, Limerick, V94WN8W",
        county: "Limerick",
        phone: "(061) 314 203",
        email: "info@rockhallveterinary.ie",
        website: "https://rockhallveterinary.ie/",
        rating: 4.7,
        reviewCount: 118,
        description: "Rockhall Veterinary provides comprehensive veterinary care at multiple locations across Limerick. The Henry Street location offers convenient city center access with modern facilities.",
        image: "/src/assets/images/vets/vet_generic_3.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Dental care",
            "Emergency services"
        ],
        specialties: [
            "City center location",
            "Multiple clinic network",
            "Emergency care"
        ],
        hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-1:00pm, Emergency service available"
    },
    {
        id: 19,
        name: "Rockhall Veterinary - Clare Street",
        address: "66 Clare Street, Limerick, V94TW93",
        county: "Limerick",
        phone: "(061) 415 000",
        email: "info@rockhallveterinary.ie",
        website: "https://rockhallveterinary.ie/",
        rating: 4.8,
        reviewCount: 96,
        description: "Part of the Rockhall Veterinary network, the Clare Street location provides comprehensive veterinary services with experienced staff and modern facilities.",
        image: "/src/assets/images/vets/vet_generic_4.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Dental care",
            "Laboratory services"
        ],
        specialties: [
            "Comprehensive veterinary care",
            "Modern diagnostic equipment",
            "Experienced veterinary team"
        ],
        hours: "Monday-Friday: 9:00am-6:00pm, Saturday: 9:00am-1:00pm, Emergency service available"
    },
    {
        id: 20,
        name: "Treaty Veterinary Hospital",
        address: "High Road, Thomondgate, Limerick, V94 K2YW",
        county: "Limerick",
        phone: "061 328 511",
        email: "mail@tvh.ie",
        website: "https://treatyveterinaryhospital.ie/limerick/",
        rating: 4.9,
        reviewCount: 157,
        description: "Treaty Veterinary Hospital provides comprehensive veterinary care with 24/7 emergency services. Modern facilities and experienced staff ensure the highest standard of care for your pets.",
        image: "/src/assets/images/vets/vet_generic_5.png",
        services: [
            "Wellness examinations",
            "Vaccinations",
            "Surgery",
            "Dental care",
            "24/7 Emergency services"
        ],
        specialties: [
            "24/7 emergency care",
            "Hospital-grade facilities",
            "Comprehensive veterinary services"
        ],
        hours: "Monday-Friday: 8:30am-6:30pm, Saturday: 9:00am-1:00pm, Emergency Service 24/7"
    }
];
export default vetsData;
