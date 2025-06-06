import heroImage from '../assets/images/parks/ph.jpg';
// Hero image export for use in components
export { heroImage };

// Parks data array
export const parksData = [
    {
        id: 1,
        name: "Phoenix Park",
        address: "Phoenix Park, Dublin 8",
        county: "Dublin",
        phone: "01 820 5800",
        email: "phoenixparkvisitorcentre@opw.ie",
        website: "https://phoenixpark.ie",
        rating: 4.8,
        reviewCount: 1245,
        description: "Phoenix Park is one of Europe's largest enclosed recreational spaces, providing a vast green area for dogs to explore. While dogs must be kept on leads in certain areas, there are designated zones where they can run freely. The park spans 1,752 acres and offers numerous walking trails through woodland and open grassland, perfect for exercising your canine companion.",
        amenities: [
            "Designated off-leash areas",
            "Water fountains",
            "Waste bins",
            "Picnic areas",
            "Visitor center",
            "Parking"
        ],
        leashRules: "Dogs must be kept on leads near deer, playgrounds, and the visitor center. Off-leash permitted in designated areas.",
        size: "1,752 acres",
        hours: "Open 24 hours daily, Visitor Centre: 9:30am-5:30pm"
    },
    {
        id: 2,
        name: "St. Anne's Park",
        address: "Mount Prospect Avenue, Raheny, Dublin 5",
        county: "Dublin",
        phone: "01 222 5278",
        email: "parks@dublincity.ie",
        website: "https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/st-annes-park",
        rating: 4.7,
        reviewCount: 876,
        description: "St. Anne's Park is Dublin's second largest municipal park, spanning 240 acres. It features a dedicated dog park where your furry friends can run off-leash safely. The park offers beautiful rose gardens, woodland walks, and open playing fields. There are plenty of paths for on-leash walking throughout the rest of the park, making it a favorite destination for dog owners in North Dublin.",
        amenities: [
            "Dedicated dog park area",
            "Water fountains",
            "Waste bins",
            "Café",
            "Toilets",
            "Parking"
        ],
        leashRules: "Off-leash permitted in the dedicated dog park area only. Dogs must be on leads in all other areas of the park.",
        size: "240 acres",
        hours: "Monday-Sunday: 8:00am-9:30pm (summer), 8:00am-4:30pm (winter)"
    },
    {
        id: 3,
        name: "Killiney Hill",
        address: "Killiney Hill Road, Killiney, Co. Dublin",
        county: "Dublin",
        phone: "01 205 4700",
        email: "info@dlrcoco.ie",
        website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/killiney-hill-park",
        rating: 4.9,
        reviewCount: 732,
        description: "Killiney Hill offers spectacular panoramic views of Dublin Bay and the Wicklow Mountains. This 200-acre park is extremely popular with dog walkers due to its off-leash policy throughout most areas. The varied terrain includes woodland paths, open grassy areas, and rocky outcrops, providing an exciting and stimulating environment for dogs to explore. The park connects to nearby Dalkey Hill, extending your walking options.",
        amenities: [
            "Off-leash areas",
            "Waste bins",
            "Picnic areas",
            "Viewing points",
            "Parking"
        ],
        leashRules: "Dogs may be off-leash throughout most of the park, but should be kept under control. Leads required near the car park and picnic areas.",
        size: "200 acres",
        hours: "Open daily from dawn to dusk"
    },
    {
        id: 4,
        name: "Marlay Park",
        address: "Grange Road, Rathfarnham, Dublin 16",
        county: "Dublin",
        phone: "01 205 4700",
        email: "info@dlrcoco.ie",
        website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/marlay-park",
        rating: 4.6,
        reviewCount: 895,
        description: "Marlay Park features a dedicated dog park where your four-legged friends can socialize and play off-leash in a secure environment. The park spans 300 acres and includes woodland walks, extensive playing fields, and a craft courtyard. The dedicated dog park is divided into separate areas for small and large dogs, ensuring a safe experience for all canines. The wider park offers numerous walking trails where dogs can be exercised on leads.",
        amenities: [
            "Dedicated dog park with separate areas for small and large dogs",
            "Water stations",
            "Waste bins",
            "Café",
            "Toilets",
            "Parking"
        ],
        leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
        size: "300 acres",
        hours: "Monday-Sunday: 9:00am-9:00pm (summer), 9:00am-5:00pm (winter)"
    },
    {
        id: 5,
        name: "Shanganagh Park",
        address: "Shankill, Co. Dublin",
        county: "Dublin",
        phone: "01 205 4700",
        email: "info@dlrcoco.ie",
        website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/shanganagh-park",
        rating: 4.5,
        reviewCount: 412,
        description: "Shanganagh Park offers a spacious environment for dog walking with beautiful sea views. The park includes a dedicated dog exercise area where dogs can run off-leash safely. The 36-acre park connects to Shanganagh Cemetery and the coastline, providing extended walking routes. The dog exercise area is fully enclosed, making it ideal for training and socializing your pet in a secure environment.",
        amenities: [
            "Enclosed dog exercise area",
            "Waste bins",
            "Walking trails",
            "Parking"
        ],
        leashRules: "Off-leash permitted only in the dedicated dog exercise area. Dogs must be on leads in all other areas of the park.",
        size: "36 acres",
        hours: "Open daily from dawn to dusk"
    },
    {
        id: 6,
        name: "St. Catherine's Park",
        address: "Lucan, Co. Dublin",
        county: "Dublin",
        phone: "01 890 5000",
        email: "info@fingal.ie",
        website: "https://www.fingal.ie/stcatherinespark",
        rating: 4.6,
        reviewCount: 523,
        description: "St. Catherine's Park is a beautiful green space spanning across Dublin, Kildare, and Meath. The park features extensive woodland areas, open playing fields, and riverside walks along the Liffey. Dogs are welcome throughout the park, with certain areas designated for off-leash exercise. The varied landscape provides an interesting environment for dogs to explore, with plenty of scents and terrain to investigate.",
        amenities: [
            "Off-leash areas",
            "River access",
            "Waste bins",
            "Picnic areas",
            "Playground",
            "Parking"
        ],
        leashRules: "Dogs must be kept on leads near playgrounds and picnic areas. Off-leash permitted in designated areas.",
        size: "200 acres",
        hours: "Open daily from dawn to dusk"
    },
    {
        id: 7,
        name: "The Iveagh Gardens",
        address: "Clonmel Street, Dublin 2",
        county: "Dublin",
        phone: "01 475 7816",
        email: "info@opw.ie",
        website: "https://heritageireland.ie/places-to-visit/iveagh-gardens/",
        rating: 4.7,
        reviewCount: 389,
        description: "The Iveagh Gardens are a hidden gem in Dublin city center, offering a peaceful retreat from the urban bustle. These Victorian-era gardens feature formal lawns, a rustic grotto, and a cascade. While smaller than some other parks, the Iveagh Gardens provide a pleasant environment for a short dog walk. The gardens are less crowded than nearby St. Stephen's Green, making them ideal for dogs who prefer a calmer atmosphere.",
        amenities: [
            "Waste bins",
            "Water features",
            "Seating areas"
        ],
        leashRules: "Dogs must be kept on leads at all times within the gardens.",
        size: "8 acres",
        hours: "Monday-Saturday: 8:00am-6:00pm, Sunday: 10:00am-6:00pm"
    },
    {
        id: 8,
        name: "Pawsome Walks Dog Park",
        address: "Ballyogan Road, Carrickmines, Dublin 18",
        county: "Dublin",
        phone: "085 123 4567",
        email: "info@pawsomewalks.ie",
        website: "https://www.pawsomewalks.ie",
        rating: 4.9,
        reviewCount: 278,
        description: "Pawsome Walks is a purpose-built dog park designed specifically for off-leash exercise and socialization. The park features secure fencing, separate areas for small and large dogs, and various agility equipment to keep your pet engaged and active. The surface is a mix of grass and artificial turf, ensuring a clean environment even in wet weather. Regular events and meetups are organized for different dog breeds and age groups.",
        amenities: [
            "Secure fencing",
            "Separate areas for different sized dogs",
            "Agility equipment",
            "Water stations",
            "Waste bins",
            "Seating areas",
            "Parking"
        ],
        leashRules: "Off-leash permitted throughout the park. Dogs must be under voice control.",
        size: "3 acres",
        hours: "Monday-Sunday: 7:00am-9:00pm"
    },
    {
        id: 9,
        name: "Cabinteely Park",
        address: "Old Bray Road, Cabinteely, Dublin 18",
        county: "Dublin",
        phone: "01 205 4700",
        email: "info@dlrcoco.ie",
        website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/cabinteely-park",
        rating: 4.5,
        reviewCount: 612,
        description: "Cabinteely Park offers 110 acres of grassland, woodland, and ponds, providing a diverse environment for dog walking. The park features a dedicated dog exercise area where pets can run off-leash safely. The extensive network of paths through different landscapes ensures an interesting walk for both dogs and their owners. The park also houses Cabinteely House, a historic mansion with surrounding formal gardens.",
        amenities: [
            "Dedicated dog exercise area",
            "Waste bins",
            "Café",
            "Toilets",
            "Playground",
            "Parking"
        ],
        leashRules: "Off-leash permitted only in the dedicated dog exercise area. Dogs must be on leads in all other areas of the park.",
        size: "110 acres",
        hours: "Monday-Sunday: 8:00am-8:00pm (summer), 8:00am-5:00pm (winter)"
    },
    {
        id: 10,
        name: "Arklow Dog Park",
        address: "Arklow, Co. Wicklow",
        county: "Wicklow",
        phone: "0402 42700",
        email: "arklowmunicipaldistrict@wicklowcoco.ie",
        website: "https://www.wicklow.ie/Living/Services/Community/Parks-Open-Spaces/Arklow-Dog-Park",
        rating: 4.4,
        reviewCount: 187,
        description: "Arklow Dog Park is a dedicated space for dogs to exercise and socialize off-leash in a secure environment. The park features double-gated entry points for safety, separate areas for small and large dogs, and various agility equipment to provide mental and physical stimulation. The surface is designed to be mud-free, making it suitable for use year-round regardless of weather conditions.",
        amenities: [
            "Secure fencing",
            "Double-gated entry",
            "Separate areas for different sized dogs",
            "Agility equipment",
            "Waste bins",
            "Seating areas",
            "Parking"
        ],
        leashRules: "Off-leash permitted throughout the park. Dogs must be under voice control.",
        size: "1.5 acres",
        hours: "Monday-Sunday: 8:00am-8:00pm"
    },
    {
        id: 11,
        name: "Griffeen Valley Dog Park",
        address: "Griffeen Valley Park, Lucan, Co. Dublin",
        county: "Dublin",
        phone: "01 414 9000",
        email: "info@sdcc.ie",
        website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks-and-playgrounds/griffeen-valley-park/",
        rating: 4.6,
        reviewCount: 342,
        description: "Griffeen Valley Park includes a dedicated dog park where dogs can exercise off-leash in a secure environment. The dog park features separate areas for small and large dogs, ensuring a safe experience for all canines. The wider park offers extensive walking trails along the Griffeen River, providing additional on-leash walking opportunities. The park's varied landscape includes woodland, meadows, and riverside paths.",
        amenities: [
            "Secure dog park",
            "Separate areas for different sized dogs",
            "River access",
            "Waste bins",
            "Playground",
            "Sports facilities",
            "Parking"
        ],
        leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
        size: "200 acres (park), 2 acres (dog park)",
        hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
    },
    {
        id: 12,
        name: "Corkagh Park Dog Park",
        address: "Corkagh Park, Clondalkin, Dublin 22",
        county: "Dublin",
        phone: "01 414 9000",
        email: "info@sdcc.ie",
        website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks-and-playgrounds/corkagh-park/",
        rating: 4.5,
        reviewCount: 276,
        description: "Corkagh Park features a dedicated dog park where dogs can exercise off-leash in a secure environment. The dog park is fully enclosed and includes agility equipment to provide mental and physical stimulation for your pet. The wider park spans 300 acres and includes lakes, woodland, and open meadows, offering extensive on-leash walking opportunities. The park's diverse landscape ensures an interesting experience for both dogs and their owners.",
        amenities: [
            "Secure dog park",
            "Agility equipment",
            "Lakes",
            "Waste bins",
            "Café",
            "Playground",
            "Fishing facilities",
            "Parking"
        ],
        leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
        size: "300 acres (park), 2 acres (dog park)",
        hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
    },
    {
        id: 13,
        name: "Malahide Castle and Gardens",
        address: "Malahide, Co. Dublin",
        county: "Dublin",
        phone: "01 816 9538",
        email: "info@malahidecastleandgardens.ie",
        website: "https://www.malahidecastleandgardens.ie",
        rating: 4.7,
        reviewCount: 892,
        description: "Malahide Castle and Gardens offer extensive grounds for dog walking, with 260 acres of parkland to explore. Dogs are welcome throughout the parkland areas, though they are not permitted in the botanical gardens or inside the castle. The park features woodland walks, open lawns, and a coastal path connecting to Malahide village. The varied terrain and historical setting make for an interesting and stimulating environment for dogs to explore.",
        amenities: [
            "Waste bins",
            "Café",
            "Toilets",
            "Playground",
            "Visitor center",
            "Parking"
        ],
        leashRules: "Dogs must be kept on leads throughout the park. Not permitted in the botanical gardens or castle interior.",
        size: "260 acres",
        hours: "Monday-Sunday: 9:00am-5:30pm"
    },
    {
        id: 14,
        name: "Ardgillan Castle and Demesne",
        address: "Balbriggan, Co. Dublin",
        county: "Dublin",
        phone: "01 849 2212",
        email: "ardgillancastle@fingal.ie",
        website: "https://www.ardgillancastle.ie",
        rating: 4.8,
        reviewCount: 567,
        description: "Ardgillan Castle and Demesne offer 200 acres of parkland, woodland, and coastal paths for dog walking. The park features stunning views over the Irish Sea, with Balbriggan to the north and Skerries to the south. Dogs are welcome throughout the parkland areas, though they are not permitted in the rose garden or inside the castle. The varied landscape includes open meadows, woodland trails, and a large off-leash area for dogs to exercise freely.",
        amenities: [
            "Off-leash areas",
            "Waste bins",
            "Café",
            "Toilets",
            "Playground",
            "Visitor center",
            "Parking"
        ],
        leashRules: "Dogs must be kept on leads in formal garden areas. Off-leash permitted in designated areas.",
        size: "200 acres",
        hours: "Monday-Sunday: 9:00am-6:00pm"
    },
    {
        id: 15,
        name: "Bushy Park",
        address: "Terenure, Dublin 6W",
        county: "Dublin",
        phone: "01 222 5278",
        email: "parks@dublincity.ie",
        website: "https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/bushy-park",
        rating: 4.6,
        reviewCount: 445,
        description: "Bushy Park is a popular destination for dog owners in South Dublin, featuring extensive open spaces and woodland areas. The park includes a dedicated dog exercise area where pets can run off-leash safely. The park's varied landscape includes formal gardens, playing fields, and natural woodland, providing an interesting environment for dogs to explore. The park also features a river running through it, adding to the natural beauty and providing additional sensory experiences for dogs.",
        amenities: [
            "Dedicated dog exercise area",
            "River access",
            "Waste bins",
            "Playground",
            "Sports facilities",
            "Parking"
        ],
        leashRules: "Off-leash permitted only in the dedicated dog exercise area. Dogs must be on leads in all other areas of the park.",
        size: "20.5 hectares",
        hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
    }
];

export default parksData;

