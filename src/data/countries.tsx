
import {
    Clock, CreditCard, Calendar, Plane, Users, FileText, Building, Camera,
    MapPin, Utensils, Landmark, DollarSign, Shield, GraduationCap, Globe,
    Leaf, Anchor, Mountain, Sun, Briefcase
} from "lucide-react";
import React from "react";

export interface CountryData {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    coverImage: string; // We will use placeholders or gradients for now
    quickFacts: {
        icon: React.ReactNode;
        label: string;
        value: string;
    }[];
    requirements: {
        icon: React.ReactNode;
        document: string;
        requirement: string;
    }[];
    whyChoose: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
    destinations: {
        name: string;
        highlights: string;
        image?: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
}

export const countries: CountryData[] = [
    {
        slug: "cambodia",
        name: "Cambodia",
        tagline: "Kingdom of Wonder",
        description: "Home to the magnificent Angkor Wat and warm Khmer hospitality, Cambodia offers a perfect blend of ancient wonders, tropical beaches, and vibrant culture.",
        coverImage: "/assets/countries/cambodia.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "1 Working Day" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 380" },
            { icon: <Calendar size={20} />, label: "Validity", value: "90 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Living/Travelling in Malaysia" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Original Passport", requirement: "Required" },
            { icon: <Building size={20} />, document: "Malaysian Visa", requirement: "Valid for at least 6 months" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "1 copy (35 × 45 mm, white background)" },
        ],
        whyChoose: [
            { icon: <Landmark size={32} />, title: "Angkor Wat", description: "World’s largest religious monument and UNESCO World Heritage Site" },
            { icon: <Sun size={32} />, title: "Beautiful Beaches", description: "Pristine islands like Koh Rong and relaxing coastal towns" },
            { icon: <Users size={32} />, title: "Warm People", description: "Friendly Khmer hospitality and welcoming culture" },
            { icon: <DollarSign size={32} />, title: "Budget-Friendly", description: "Affordable travel destination with great value for money" },
        ],
        destinations: [
            { name: "Siem Reap", highlights: "Angkor Wat, Ta Prohm Temple, Pub Street, Night Markets", image: "/assets/destinations/siem-reap.jpg" },
            { name: "Phnom Penh", highlights: "Royal Palace, Silver Pagoda, Central Market, Riverside", image: "/assets/destinations/phnom-penh.jpg" },
            { name: "Sihanoukville", highlights: "Beaches, Island Hopping, Water Sports, Seafood", image: "/assets/destinations/sihanoukville.jpg" },
            { name: "Battambang", highlights: "Bamboo Train, Bat Caves, Countryside Tours, French Architecture", image: "/assets/destinations/battambang.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 1 day" },
        ],
    },
    {
        slug: "thailand",
        name: "Thailand",
        tagline: "The Land of Smiles",
        description: "From pristine beaches to golden temples, bustling night markets to peaceful mountain villages – Thailand offers unforgettable experiences for every traveler.",
        coverImage: "/assets/countries/thailand.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "2-3 Working Days" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 320" },
            { icon: <Calendar size={20} />, label: "Validity", value: "60 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Living/Travelling in Malaysia" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Passport", requirement: "Full-page scanned copy" },
            { icon: <Building size={20} />, document: "Malaysian Visa", requirement: "Copy" },
            { icon: <Landmark size={20} />, document: "Bank Statement", requirement: "Last 3 months, min balance RM 3,000" },
            { icon: <Briefcase size={20} />, document: "Professional Details", requirement: "Trade License/Name Card/ID Card" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "35 × 45 mm, White background" },
        ],
        whyChoose: [
            { icon: <Sun size={32} />, title: "Tropical Paradise", description: "World-famous beaches, crystal-clear waters, and stunning islands" },
            { icon: <Utensils size={32} />, title: "Food Heaven", description: "Delicious street food, world-class restaurants, and authentic Thai cuisine" },
            { icon: <Landmark size={32} />, title: "Rich Culture", description: "Ancient temples, traditional festivals, and warm Thai hospitality" },
            { icon: <DollarSign size={32} />, title: "Great Value", description: "Affordable luxury, shopping paradise, and excellent value for money" },
        ],
        destinations: [
            { name: "Bangkok", highlights: "Grand Palace, Wat Pho, Floating Markets, Chatuchak Weekend Market", image: "/assets/destinations/bangkok.jpg" },
            { name: "Phuket", highlights: "Patong Beach, Phi Phi Islands, Big Buddha, Old Phuket Town", image: "/assets/destinations/phuket.jpg" },
            { name: "Chiang Mai", highlights: "Doi Suthep Temple, Night Bazaar, Elephant Sanctuary, Old City", image: "/assets/destinations/chiang-mai.jpg" },
            { name: "Krabi", highlights: "Railay Beach, Tiger Cave Temple, Four Islands Tour, Emerald Pool", image: "/assets/destinations/krabi.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 2-3 days" },
        ],
    },
    {
        slug: "singapore",
        name: "Singapore",
        tagline: "Your Gateway to the Lion City",
        description: "Modern metropolis meets cultural heritage. World-class education meets business excellence. This is Singapore – where your dreams take flight.",
        coverImage: "/assets/countries/singapore.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "3-5 Working Days" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 380" },
            { icon: <Calendar size={20} />, label: "Validity", value: "60 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single/Multiple Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Living/Travelling in Malaysia" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Passport", requirement: "Valid for at least 6 months" },
            { icon: <Building size={20} />, document: "Malaysian Visa", requirement: "Valid for at least 3 months" },
            { icon: <Briefcase size={20} />, document: "Employment/Study Letter", requirement: "From your Company, University, or College" },
            { icon: <FileText size={20} />, document: "Introduction Letter", requirement: "Issued by the Bangladesh High Commission in Malaysia" },
            { icon: <Landmark size={20} />, document: "Bank Statement", requirement: "Last 3 months, min balance RM 7,000" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "1 copy (35 × 45 mm, white background)" },
        ],
        whyChoose: [
            { icon: <Building size={32} />, title: "Business Hub", description: "Asia’s premier financial centre with endless opportunities for growth and innovation" },
            { icon: <GraduationCap size={32} />, title: "World-Class Education", description: "Home to globally ranked universities (NUS #8, NTU #26 globally)" },
            { icon: <Shield size={32} />, title: "Safety First", description: "Ranked as one of the world’s safest cities with excellent public services" },
            { icon: <Globe size={32} />, title: "Cultural Melting Pot", description: "Four official languages and a harmonious blend of diverse cultures" },
        ],
        destinations: [
            { name: "Marina Bay", highlights: "Marina Bay Sands, Gardens by the Bay, Merlion Park", image: "/assets/destinations/marina-bay.jpg" },
            { name: "Cultural Districts", highlights: "Chinatown, Little India, Kampong Glam (Arab Street)", image: "/assets/destinations/cultural-districts.jpg" },
            { name: "Sentosa Island", highlights: "Universal Studios, Beaches, Adventure Cove Waterpark", image: "/assets/destinations/sentosa.jpg" },
            { name: "Shopping Paradise", highlights: "Orchard Road, Bugis Street, VivoCity, Jewel Changi", image: "/assets/destinations/shopping.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 3-5 days" },
        ],
    },
    {
        slug: "laos",
        name: "Laos",
        tagline: "The Land of a Million Elephants",
        description: "Discover the serene beauty of Laos, where ancient temples meet untouched nature, and traditional culture thrives in peaceful riverside towns.",
        coverImage: "/assets/countries/laos.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "1 Working Day" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 550" },
            { icon: <Calendar size={20} />, label: "Validity", value: "90 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Living/Travelling in Malaysia" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Original Passport", requirement: "Required" },
            { icon: <Building size={20} />, document: "Malaysian Visa", requirement: "Copy" },
            { icon: <Landmark size={20} />, document: "Bank Statement", requirement: "Last 1 month, min balance RM 7,000" },
            { icon: <Briefcase size={20} />, document: "Employment/Study Letter", requirement: "From a Company, University or College" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "1 copy (2 × 2 inches, White background)" },
        ],
        whyChoose: [
            { icon: <Leaf size={32} />, title: "Natural Beauty", description: "Stunning waterfalls, lush jungles, and the mighty Mekong River" },
            { icon: <Landmark size={32} />, title: "Ancient Heritage", description: "UNESCO World Heritage sites and beautifully preserved temples" },
            { icon: <Sun size={32} />, title: "Peaceful Atmosphere", description: "Relaxed pace of life is perfect for travellers seeking tranquillity" },
            { icon: <Globe size={32} />, title: "Authentic Experience", description: "Untouched by mass tourism, traditional Lao culture thrives" },
        ],
        destinations: [
            { name: "Luang Prabang", highlights: "Royal Palace, Night Market, Kuang Si Falls, Alms Giving Ceremony", image: "/assets/destinations/luang-prabang.jpg" },
            { name: "Vientiane", highlights: "Pha That Luang, Patuxai Monument, Buddha Park, Mekong Riverside", image: "/assets/destinations/vientiane.jpg" },
            { name: "Vang Vieng", highlights: "Limestone Karsts, Blue Lagoon, Tham Chang Cave, River Tubing", image: "/assets/destinations/vang-vieng.jpg" },
            { name: "4000 Islands", highlights: "Irrawaddy Dolphins, Khone Phapheng Falls, Island Life, Kayaking", image: "/assets/destinations/4000-islands.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 1 day" },
        ],
    },
    {
        slug: "vietnam",
        name: "Vietnam",
        tagline: "Timeless Charm, Modern Energy",
        description: "From the bustling streets of Hanoi to the serene beauty of Ha Long Bay, Vietnam offers an unforgettable journey through history, culture, and natural wonders.",
        coverImage: "/assets/countries/vietnam.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "3-5 Working Days" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 350" },
            { icon: <Calendar size={20} />, label: "Validity", value: "90 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Anyone (Except BD/AFG)" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Passport", requirement: "Copy" },
            { icon: <Building size={20} />, document: "Visa Copy", requirement: "If residing outside the country" },
            { icon: <Briefcase size={20} />, document: "Professional Details", requirement: "Trade License/Name Card" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "35 × 45 mm, White background" },
        ],
        whyChoose: [
            { icon: <Mountain size={32} />, title: "Natural Wonders", description: "Ha Long Bay, Sapa rice terraces, pristine beaches, and lush countryside" },
            { icon: <Utensils size={32} />, title: "Culinary Paradise", description: "World-famous pho, banh mi, fresh spring rolls, and vibrant street food culture" },
            { icon: <Landmark size={32} />, title: "Rich History", description: "Ancient temples, French colonial architecture, and fascinating war history" },
            { icon: <DollarSign size={32} />, title: "Affordable Travel", description: "Excellent value for money with budget-friendly accommodation and dining" },
        ],
        destinations: [
            { name: "Hanoi", highlights: "Old Quarter, Ho Chi Minh Mausoleum, Temple of Literature, Water Puppet Show", image: "/assets/destinations/hanoi.webp" },
            { name: "Ho Chi Minh City", highlights: "Notre Dame Cathedral, Ben Thanh Market, Cu Chi Tunnels, Mekong Delta", image: "/assets/destinations/ho-chi-minh-city.jpg" },
            { name: "Ha Long Bay", highlights: "Overnight Cruises, Limestone Karsts, Kayaking, Floating Villages", image: "/assets/destinations/ha-long-bay.jpg" },
            { name: "Hoi An", highlights: "Ancient Town, Japanese Bridge, Lantern Festival, Tailor Shops", image: "/assets/destinations/hoi-an.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 3-5 days" },
        ],
    },
    {
        slug: "china",
        name: "China",
        tagline: "Ancient Civilization, Modern Wonder",
        description: "Experience 5,000 years of history meets cutting-edge innovation. From the Great Wall to futuristic cities, pandas to palaces – China offers endless fascination.",
        coverImage: "/assets/countries/china.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "10-15 Working Days" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 999" },
            { icon: <Calendar size={20} />, label: "Validity", value: "90 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single/Double Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Living in Malaysia (Long-term visa)" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Passport", requirement: "Valid for at least 6 months" },
            { icon: <Building size={20} />, document: "Malaysian Visa", requirement: "Valid for at least 3 months" },
            { icon: <Briefcase size={20} />, document: "Employment/Study Letter", requirement: "From Company / University / College" },
            { icon: <Landmark size={20} />, document: "Bank Statement", requirement: "Last 3 months, min balance RM 10,000" },
            { icon: <Plane size={20} />, document: "Travel History", requirement: "Previous visa copies or entry/exit stamps" },
            { icon: <FileText size={20} />, document: "NID Card", requirement: "National Identity Card copy" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "1 copy (35 × 45 mm, white background)" },
        ],
        whyChoose: [
            { icon: <Landmark size={32} />, title: "Historic Wonders", description: "Great Wall, Forbidden City, Terracotta Warriors, ancient temples" },
            { icon: <Building size={32} />, title: "Modern Cities", description: "Shanghai skyline, Beijing innovation, Shenzhen technology hub" },
            { icon: <Utensils size={32} />, title: "Incredible Cuisine", description: "Eight major cuisines, dim sum, Peking duck, street food paradise" },
            { icon: <Leaf size={32} />, title: "Natural Beauty", description: "Pandas, karst mountains, the Yangtze River, and diverse landscapes" },
        ],
        destinations: [
            { name: "Beijing", highlights: "Great Wall, Forbidden City, Temple of Heaven, Summer Palace", image: "/assets/destinations/beijing.avif" },
            { name: "Shanghai", highlights: "The Bund, Yu Garden, Oriental Pearl Tower, French Concession", image: "/assets/destinations/shanghai.jpg" },
            { name: "Xi’an", highlights: "Terracotta Warriors, Ancient City Wall, Muslim Quarter", image: "/assets/destinations/xian.jpg" },
            { name: "Guilin", highlights: "Li River Cruise, Karst Mountains, Rice Terraces, Reed Flute Cave", image: "/assets/destinations/guilin.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 10-15 days" },
        ],
    },
    {
        slug: "papua-new-guinea",
        name: "Papua New Guinea",
        tagline: "Last Frontier",
        description: "Discover one of the world’s most culturally diverse countries! Experience tribal cultures, pristine rainforests, coral reefs, and untouched natural beauty.",
        coverImage: "/assets/countries/png.png",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "3-5 Working Days" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "RM 150" },
            { icon: <Calendar size={20} />, label: "Validity", value: "60 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Living/Travelling in Malaysia" },
        ],
        requirements: [
            { icon: <FileText size={20} />, document: "Original Passport", requirement: "Required" },
            { icon: <Building size={20} />, document: "Malaysian Visa Copy", requirement: "Required" },
            { icon: <Briefcase size={20} />, document: "Employment/Study Letter", requirement: "From the Company, University or College" },
            { icon: <Landmark size={20} />, document: "Bank Statement", requirement: "Last 3 months, min balance RM 7,000" },
            { icon: <Camera size={20} />, document: "Photograph", requirement: "1 copy (35 × 45 mm, white background)" },
        ],
        whyChoose: [
            { icon: <Users size={32} />, title: "Cultural Diversity", description: "Over 800 languages, unique tribal cultures, traditional ceremonies, and authentic experiences" },
            { icon: <Leaf size={32} />, title: "Pristine Nature", description: "Untouched rainforests, exotic birds of paradise, diverse wildlife, and eco-tourism" },
            { icon: <Anchor size={32} />, title: "World-Class Diving", description: "WWII wrecks, vibrant coral reefs, marine biodiversity, diving paradise" },
            { icon: <Mountain size={32} />, title: "Adventure Travel", description: "Hiking, trekking, exploration, off-the-beaten-path destinations" },
        ],
        destinations: [
            { name: "Port Moresby", highlights: "Capital City, National Museum, Parliament, Cultural Centre", image: "/assets/destinations/port-moresby.jpg" },
            { name: "Kokoda Track", highlights: "Historic WWII Trail, Mountain Trekking, Adventure Challenge", image: "/assets/destinations/kokoda-track.jpg" },
            { name: "Sepik River", highlights: "Traditional Villages, River Cruises, Indigenous Art, Tribal Culture", image: "/assets/destinations/sepik-river.jpg" },
            { name: "Tufi", highlights: "Fjord-like Scenery, World-Class Diving, WWII Wrecks, Marine Life", image: "/assets/destinations/tufi.jpg" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your visa application" },
            { step: 4, title: "Get Your Visa", description: "Receive an approved visa in 3-5 days" },
        ],
    },
];
