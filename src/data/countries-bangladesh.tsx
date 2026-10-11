import {
    Clock, CreditCard, Calendar, Plane, Users, FileText, Building, Camera,
    MapPin, Utensils, Landmark, DollarSign, Shield, GraduationCap, Globe,
    Leaf, Anchor, Mountain, Sun, Briefcase, Lightbulb
} from "lucide-react";
import React from "react";

export interface DocumentCategory {
    category: string;
    icon?: React.ReactNode;
    documents: string[];
}

export interface BangladeshCountryData {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    coverImage: string;
    quickFacts: {
        icon: React.ReactNode;
        label: string;
        value: string;
    }[];
    documentCategories: DocumentCategory[];
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
    importantNotes?: string[];
    whatsappNumbers?: string[];
    visaType?: string;
}

export const bangladeshCountries: BangladeshCountryData[] = [
    {
        slug: "thailand",
        name: "Thailand",
        visaType: "E-Visa",
        tagline: "The Land of Smiles",
        description: "From pristine beaches to golden temples, bustling night markets to peaceful mountain villages – Thailand offers unforgettable experiences for every traveler. Apply for your Thailand E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/thailand.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "5-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "5,500 BDT" },
            { icon: <DollarSign size={20} />, label: "Fee (Multiple Entry)", value: "27,500 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "90 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Double Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "No objection certificate (NOC)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Personal or Company bank statement for the last 06 months",
                    "Renewal trade license copy with notary public (english translated)",
                    "Visiting card",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Memorandum for limited company form page XII (One photo copy)",
                    "Company letter head pad",
                    "Personal or company bank solvency certificate",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Govt Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "GO (Government order) for official passport",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "BMDC certificate for doctor (Scan copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Company letter head pad",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Visiting card",
                    "BAR council certificate (One photo copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "ID card (Student) one photocopy both sides",
                    "Leave letter from school or college original copy",
                    "Parents bank statement (Last 06 months) & solvency certificate (Minimum balance BDT 70,000 for each applicant)",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Non-student Child",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Birth certificate",
                    "Parents bank statement (Last 06 months) & solvency certificate (Minimum balance BDT 70,000 for each applicant)",
                ],
            },
            {
                category: "Housewife",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Hotel booking confirmed (Level 1 Hotel)",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Retired Person",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Retirement document (Retired Person) one photo copy",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
            {
                category: "Unemployed",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Proof of Residence (Present): A copy of National ID Card and Latest Utility Bill such as electricity, telephone, gas or water bill (not more than 3 months old) copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Sun size={32} />, title: "Tropical Paradise", description: "World-famous beaches, crystal-clear waters, and stunning islands await you" },
            { icon: <Utensils size={32} />, title: "Food Heaven", description: "Delicious street food, world-class restaurants, and authentic Thai cuisine" },
            { icon: <Landmark size={32} />, title: "Rich Culture", description: "Ancient temples, traditional festivals, and warm Thai hospitality" },
            { icon: <DollarSign size={32} />, title: "Great Value", description: "Affordable luxury, shopping paradise, and excellent value for money" },
        ],
        destinations: [
            { name: "Bangkok", highlights: "Grand Palace, Wat Pho, Floating Markets, Chatuchak Weekend Market", image: "/assets/destinations/bangkok.webp" },
            { name: "Phuket", highlights: "Patong Beach, Phi Phi Islands, Big Buddha, Old Phuket Town", image: "/assets/destinations/phuket.webp" },
            { name: "Chiang Mai", highlights: "Doi Suthep Temple, Night Bazaar, Elephant Sanctuary, Old City", image: "/assets/destinations/chiang-mai.webp" },
            { name: "Krabi", highlights: "Railay Beach, Tiger Cave Temple, Four Islands Tour, Emerald Pool", image: "/assets/destinations/krabi.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents for your category" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in 5-10 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "malaysia",
        name: "Malaysia",
        visaType: "E-Visa",
        tagline: "Truly Asia",
        description: "Experience the ultimate Asian destination – from Kuala Lumpur's futuristic skyline to pristine tropical islands, lush rainforests, and multicultural harmony. Apply for your Malaysia E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/malaysia.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "3-5 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "4,500 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "180 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Multiple Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "No objection certificate (NOC)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Renewal trade license copy with notary public (english translated)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Memorandum for limited company form page XII (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Company letter head pad",
                    "Personal or company bank solvency certificate",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Govt Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "GO (Government order) for official passport",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "BMDC certificate for doctor (Scan copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Company letter head pad",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "BAR council certificate (One photo copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Visiting Card",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Student",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "ID card (Student) one photocopy both sides",
                    "NOC (Student) original copy",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Non-student Child",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "Birth certificate",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Housewife",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Retired Person",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Retirement document (Retired Person) one photo copy",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
            {
                category: "Unemployed",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 50 mm, Matt paper)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or Company bank statement of last 06 months and minimum balance BDT 80,000 for each applicant",
                ],
            },
        ],
        whyChoose: [
            { icon: <Building size={32} />, title: "Modern Cities", description: "Iconic Petronas Twin Towers, world-class shopping malls, vibrant street life" },
            { icon: <Utensils size={32} />, title: "Food Paradise", description: "Nasi lemak, satay, roti canai – an extraordinary culinary fusion" },
            { icon: <Sun size={32} />, title: "Stunning Islands", description: "Langkawi, Penang, Perhentian Islands with pristine tropical beaches" },
            { icon: <Leaf size={32} />, title: "Nature & Wildlife", description: "Ancient rainforests, Cameron Highlands tea plantations, and rich biodiversity" },
        ],
        destinations: [
            { name: "Kuala Lumpur", highlights: "Petronas Towers, Batu Caves, Chinatown, Shopping", image: "/assets/destinations/kuala-lumpur.webp" },
            { name: "Penang", highlights: "George Town UNESCO Site, Street Food, Beaches, Culture", image: "/assets/destinations/penang.webp" },
            { name: "Langkawi", highlights: "Island Paradise, Cable Car, Beaches, Duty-Free Shopping", image: "/assets/destinations/langkawi.webp" },
            { name: "Cameron Highlands", highlights: "Tea Plantations, Cool Climate, Strawberry Farms, Nature", image: "/assets/destinations/cameron.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents for your category" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in 3-5 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "singapore",
        name: "Singapore",
        visaType: "E-Visa",
        tagline: "The Lion City",
        description: "Experience the futuristic cityscape, world-class attractions, lush gardens, and rich cultural heritage of Singapore. Apply for your Singapore Visa with LOI with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/singapore.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "8-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "6,000 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "60 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Multiple Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "No objection certificate (NOC)",
                    "Employee Id card copy (One photo copy)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                    "Visiting Card",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Personal or Company bank statement for the last 06 months",
                    "Renewal trade license copy with notary public (english translated)",
                    "Memorandum for limited company form page XII (One photo copy)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Company letter head pad",
                    "NID or birth certificate (must) one photo copy",
                    "Personal or company bank solvency certificate",
                    "Hotel booking confirmed (Level 1 Hotel)",
                    "Visiting Card",
                ],
            },
            {
                category: "Retired Person",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Retirement document (Retired Person) one photo copy",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Visiting card",
                    "BMDC certificate for doctor (Scan copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "Company letter head pad",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Visiting card",
                    "BAR council certificate (One photo copy)",
                    "Marriage certificate copy (if spouse name not mentioned in the passport)",
                    "Recent 2 copy photograph(35*45 mm) taken in last 3 months (Matt paper, white background only)",
                    "Personal bank solvency certificate",
                    "Personal bank statement of last 06 months",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel booking confirmed (Level 1 Hotel)",
                ],
            },
        ],
        whyChoose: [
            { icon: <Building size={32} />, title: "Modern Marvels", description: "Marina Bay Sands, Gardens by the Bay, Jewel Changi, futuristic skyline" },
            { icon: <Globe size={32} />, title: "Global Hub", description: "Premier business and tourism destination with world-class safety and infrastructure" },
            { icon: <Utensils size={32} />, title: "Culinary Hotspot", description: "Michelin-starred hawker stalls, multicultural flavors, international dining" },
            { icon: <Shield size={32} />, title: "Safe & Seamless", description: "Consistently ranked among the world's safest and cleanest travel destinations" },
        ],
        destinations: [
            { name: "Marina Bay", highlights: "Marina Bay Sands, Gardens by the Bay, Merlion Park", image: "/assets/destinations/marina-bay.webp" },
            { name: "Sentosa Island", highlights: "Universal Studios, Beaches, Adventure Cove Waterpark", image: "/assets/destinations/sentosa.webp" },
            { name: "Cultural Districts", highlights: "Chinatown, Little India, Kampong Glam (Arab Street)", image: "/assets/destinations/cultural-districts.webp" },
            { name: "Orchard Road", highlights: "World-Class Shopping Malls, Luxury Brands, Dining", image: "/assets/destinations/shopping.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents for your category" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Singapore Visa with LOI — receive approval in 8-10 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "indonesia",
        name: "Indonesia",
        visaType: "Sticker Visa",
        tagline: "Wonderful Indonesia",
        description: "Explore the tropical paradise of Indonesia – from Bali's iconic beaches and ancient temples to Komodo dragons, volcanic lakes, and rich traditional arts. Apply for your Sticker Visa for Indonesia with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/indonesia.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "8-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "14,500 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "60 Days" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry / Multiple Entry" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "No objection certificate (NOC)",
                    "Employee Id card copy (One photo copy)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel reservation",
                    "Visiting Card",
                    "Recent 2 copy photographs taken in the last 3 months (white background only, photo size 4X6 cm)",
                    "Bank Statement showing a minimum of USD$ 2,000 (two thousand US dollars) for each applicant",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "07 Months Valid Passport With Old Passport (If have)",
                    "Renewal trade license copy with notary public (english translated)",
                    "Blank page of office pad (two copy)",
                    "Personal bank solvency certificate",
                    "NID or birth certificate (must) one photo copy",
                    "Hotel reservation",
                    "Visiting Card",
                    "Recent 2 copy photographs taken in the last 3 months (white background only, photo size 4X6 cm)",
                    "Bank Statement showing a minimum of USD$ 2,000 (two thousand US dollars) for each applicant",
                ],
            },
        ],
        whyChoose: [
            { icon: <Sun size={32} />, title: "Tropical Paradise", description: "World-class beaches in Bali, Lombok, and Raja Ampat" },
            { icon: <Landmark size={32} />, title: "Ancient Temples", description: "Borobudur, Prambanan, Tanah Lot, and rich spiritual heritage" },
            { icon: <Leaf size={32} />, title: "Natural Wonders", description: "Volcanoes, Komodo dragons, lush jungles, and vibrant marine life" },
            { icon: <Utensils size={32} />, title: "Rich Culture & Cuisine", description: "Rendang, nasi goreng, traditional batik art, and warm Indonesian hospitality" },
        ],
        destinations: [
            { name: "Bali", highlights: "Ubud, Kuta, Uluwatu Temple, Rice Terraces, Beach Clubs", image: "/assets/destinations/bali.webp" },
            { name: "Jakarta", highlights: "National Monument, Old Town (Kota Tua), Shopping, Fine Dining", image: "/assets/destinations/jakarta.webp" },
            { name: "Yogyakarta", highlights: "Borobudur Temple, Prambanan, Sultan's Palace, Mount Merapi", image: "/assets/destinations/yogyakarta.webp" },
            { name: "Lombok & Gili", highlights: "Pristine Beaches, Mount Rinjani, Gili Islands Diving", image: "/assets/destinations/lombok.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required documents including 4X6 cm photos and USD$ 2,000 bank statement" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Sticker Visa — receive approval in 8-10 working days" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "sri-lanka",
        name: "Sri Lanka",
        visaType: "ETA",
        tagline: "Pearl of the Indian Ocean",
        description: "Tropical paradise offering pristine beaches, ancient temples, lush tea plantations, and incredible wildlife. Discover this island gem with fast 1-day ETA processing. Apply for your Sri Lanka ETA with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/sri-lanka.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "1 Working Day (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "3,500 BDT" },
            { icon: <Calendar size={20} />, label: "Validity", value: "6 Months (Stay permit 30 days)" },
            { icon: <Plane size={20} />, label: "Entry Type", value: "Single Entry (ETA)" },
            { icon: <Users size={20} />, label: "Who Can Apply", value: "Anyone can apply from anywhere in the world" },
        ],
        documentCategories: [
            {
                category: "Job Holder",
                documents: [
                    "Passport: Clear scanned copy of the information/bio-data page",
                    "Visa Copy: Required if currently residing outside your home country",
                    "Professional Details: Trade License / Business Card — As proof of professional details and business credentials",
                    "Photograph: 1 recent passport-sized photo (35 × 45 mm, white background)",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Passport: Clear scanned copy of the information/bio-data page",
                    "Visa Copy: Required if currently residing outside your home country",
                    "Professional Details: Trade License / Business Card — As proof of professional details and business credentials",
                    "Photograph: 1 recent passport-sized photo (35 × 45 mm, white background)",
                ],
            },
            {
                category: "Govt Job Holder",
                documents: [
                    "Passport: Clear scanned copy of the information/bio-data page",
                    "Visa Copy: Required if currently residing outside your home country",
                    "Professional Details: Trade License / Business Card — As proof of professional details and business credentials",
                    "Photograph: 1 recent passport-sized photo (35 × 45 mm, white background)",
                ],
            },
            {
                category: "Student",
                documents: [
                    "Passport: Clear scanned copy of the information/bio-data page",
                    "Visa Copy: Required if currently residing outside your home country",
                    "Professional Details: Trade License / Business Card — As proof of professional details and business credentials",
                    "Photograph: 1 recent passport-sized photo (35 × 45 mm, white background)",
                ],
            },
            {
                category: "General / Other",
                documents: [
                    "Passport: Clear scanned copy of the information/bio-data page",
                    "Visa Copy: Required if currently residing outside your home country",
                    "Professional Details: Trade License / Business Card — As proof of professional details and business credentials",
                    "Photograph: 1 recent passport-sized photo (35 × 45 mm, white background)",
                ],
            },
        ],
        whyChoose: [
            { icon: <Sun size={32} />, title: "Beautiful Beaches", description: "Pristine coastline with golden sands and crystal-clear waters" },
            { icon: <Leaf size={32} />, title: "Tea Country", description: "Visit lush tea plantations and scenic hill stations like Nuwara Eliya" },
            { icon: <Landmark size={32} />, title: "Ancient Heritage", description: "UNESCO sites including Sigiriya Rock and ancient temples" },
            { icon: <Users size={32} />, title: "Wildlife Safari", description: "Spot elephants, leopards, and diverse wildlife in national parks" },
        ],
        destinations: [
            { name: "Colombo", highlights: "Galle Face, Temples, Shopping, Colonial Architecture", image: "/assets/destinations/colombo.webp" },
            { name: "Kandy", highlights: "Temple of Tooth, Cultural Shows, Botanical Gardens", image: "/assets/destinations/kandy.webp" },
            { name: "Sigiriya", highlights: "Rock Fortress, Ancient Frescoes, UNESCO Heritage Site", image: "/assets/destinations/sigiriya.webp" },
            { name: "Galle", highlights: "Dutch Fort, Beaches, Historic Town, Coastal Beauty", image: "/assets/destinations/galle.webp" },
        ],
        process: [
            { step: 1, title: "Prepare Documents", description: "Gather all required documents" },
            { step: 2, title: "Submit Application", description: "Send to NextPath Global" },
            { step: 3, title: "Processing", description: "We handle your ETA application" },
            { step: 4, title: "Get Your ETA", description: "Receive an approved ETA in 1 day" },
        ],
        importantNotes: [
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "armenia",
        name: "Armenia",
        visaType: "E-Visa",
        tagline: "Land of Ancient Heritage",
        description: "Discover Armenia – one of the world's oldest civilizations with stunning monasteries, breathtaking mountain landscapes, and warm hospitality. Apply for your Armenia E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/armenia.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "5-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,000 BDT" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 21 Days" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Single Entry - 21 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current biopage, visa seal, entry exit seal",
                    "Picture (soft copy - size: Passport size)",
                    "Bank statement & Solvency (Last 06 months) — Hard/Scan Copy",
                    "Invitation letter — Hard/Scan Copy",
                    "Visiting card",
                    "NID / Birth certificate",
                    "Family NID/Birth certificate (If applicable)",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard/Scan Copy",
                    "Employee ID card — Hard/Scan Copy",
                    "Salary certificate / Pay slip — Hard/Scan Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license — Hard/Scan Copy",
                    "Company pad — Hard/Scan Copy",
                    "Memorandum for limited company page XII — Hard/Scan Copy",
                    "Certificate of Incorporation (for ltd. company) — Hard/Scan Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID card (both side) — Hard/Scan Copy",
                    "NOC from institution — Hard/Scan Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (if applicable) — Hard/Scan Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "G.O. and verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard/Scan Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Landmark size={32} />, title: "Ancient Monasteries", description: "UNESCO World Heritage sites including Geghard and Haghpat monasteries" },
            { icon: <Mountain size={32} />, title: "Mountain Landscapes", description: "Stunning views of Mount Ararat, Dilijan National Park, and Lake Sevan" },
            { icon: <Utensils size={32} />, title: "Culinary Traditions", description: "Delicious Armenian cuisine with lavash bread, khorovats, and fine wines" },
            { icon: <Globe size={32} />, title: "Rich Culture", description: "One of the oldest civilizations with a unique alphabet and vibrant traditions" },
        ],
        destinations: [
            { name: "Yerevan", highlights: "Republic Square, Cascade Complex, Vernissage Market, Cafés", image: "/assets/destinations/yerevan.webp" },
            { name: "Lake Sevan", highlights: "Sevanavank Monastery, Crystal Blue Waters, Beaches", image: "/assets/destinations/lake-sevan.webp" },
            { name: "Dilijan", highlights: "National Park, Haghartsin Monastery, Lush Forests", image: "/assets/destinations/dilijan.webp" },
            { name: "Tatev", highlights: "Tatev Monastery, Wings of Tatev Cable Car, Gorges", image: "/assets/destinations/tatev.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in 5-10 working days" },
        ],
        importantNotes: [
            "Visa fees and conditions may change anytime as per Embassy / High Commission's decisions.",
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "hong-kong",
        name: "Hong Kong",
        visaType: "E-Visa",
        tagline: "Asia's World City",
        description: "Experience the dazzling skyline, vibrant street markets, world-class cuisine, and rich cultural heritage of Hong Kong. Apply for your Hong Kong E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/hong-kong.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "30 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,500 BDT (Visa Fee: 330 HKD)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 3 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passports",
                    "Picture (Size: 35 x 45)",
                    "Bank statement & Solvency (Last 06 months) — Hard/Scan Copy",
                    "TIN certificate, Tax certificate (Last 03 years) — Hard/Scan Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID/Birth certificate",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard/Scan Copy",
                    "Employee ID card — Hard/Scan Copy",
                    "Salary certificate / Pay slip — Hard/Scan Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license — Hard/Scan Copy",
                    "Company pad — Hard/Scan Copy",
                    "Memorandum for limited company page XII — Hard/Scan Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID card (both side) — Hard/Scan Copy",
                    "NOC from institution — Hard/Scan Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (if applicable) — Hard/Scan Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "G.O. and verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard/Scan Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Building size={32} />, title: "Iconic Skyline", description: "Victoria Harbour, towering skyscrapers, and the dazzling Symphony of Lights" },
            { icon: <Utensils size={32} />, title: "Food Paradise", description: "Dim sum, roast goose, egg waffles, and Michelin-starred street food" },
            { icon: <DollarSign size={32} />, title: "Shopping Capital", description: "World-class malls, night markets, and duty-free electronics" },
            { icon: <Landmark size={32} />, title: "Cultural Fusion", description: "East meets West – temples, colonial architecture, and vibrant traditions" },
        ],
        destinations: [
            { name: "Victoria Peak", highlights: "Panoramic Views, Peak Tram, Sky Terrace 428", image: "/assets/destinations/victoria-peak.webp" },
            { name: "Tsim Sha Tsui", highlights: "Avenue of Stars, Harbour Views, Shopping, Museums", image: "/assets/destinations/tsim-sha-tsui.webp" },
            { name: "Lantau Island", highlights: "Tian Tan Buddha, Ngong Ping 360, Tai O Fishing Village", image: "/assets/destinations/lantau.webp" },
            { name: "Mong Kok", highlights: "Temple Street Night Market, Ladies' Market, Street Food", image: "/assets/destinations/mong-kok.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in approximately 30 working days" },
        ],
        importantNotes: [
            "Visa fees and conditions may change anytime as per Embassy / High Commission's decisions.",
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "australia",
        name: "Australia",
        visaType: "E-Visa",
        tagline: "Land Down Under",
        description: "Explore the vast beauty of Australia – from the Great Barrier Reef and Sydney Opera House to stunning outback landscapes and diverse wildlife. Apply for your Australia E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/australia.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "10-30 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Multiple Entry)", value: "10,500 BDT (Visa Fee: 253.50 AUD)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Multiple Entry - 3 Years" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 90 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passport's biopage, visa seal, entry exit seal",
                    "Bank statement & Solvency (Last 06 months) — Hard/Scan Copy",
                    "TIN certificate, Tax return (last 03 years) — Hard/Scan Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID / Birth certificate",
                    "Family NID/Birth certificate (Parents, Siblings, Spouse, Children)",
                    "Summary of bank, properties & other financial assets",
                    "Family Picture (Any Occasion {tour/celebration})",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard/Scan Copy",
                    "Employee ID card — Hard/Scan Copy",
                    "Salary certificate / Pay slip — Hard/Scan Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license — Hard/Scan Copy",
                    "Company pad — Hard/Scan Copy",
                    "Memorandum for limited company page XII — Hard/Scan Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID card (both side) — Hard/Scan Copy",
                    "NOC from institution — Hard/Scan Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (if applicable) — Hard/Scan Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "G.O. and verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard/Scan Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Anchor size={32} />, title: "Great Barrier Reef", description: "World's largest coral reef system with incredible marine biodiversity" },
            { icon: <Landmark size={32} />, title: "Iconic Landmarks", description: "Sydney Opera House, Harbour Bridge, and Uluru (Ayers Rock)" },
            { icon: <Leaf size={32} />, title: "Unique Wildlife", description: "Kangaroos, koalas, platypus, and the world's most unique animals" },
            { icon: <Sun size={32} />, title: "Stunning Beaches", description: "Bondi Beach, Gold Coast, and thousands of pristine coastal stretches" },
        ],
        destinations: [
            { name: "Sydney", highlights: "Opera House, Harbour Bridge, Bondi Beach, Darling Harbour", image: "/assets/destinations/sydney.webp" },
            { name: "Melbourne", highlights: "Street Art, Coffee Culture, Great Ocean Road, Sports Capital", image: "/assets/destinations/melbourne.webp" },
            { name: "Gold Coast", highlights: "Surfers Paradise, Theme Parks, Hinterland, Nightlife", image: "/assets/destinations/gold-coast.webp" },
            { name: "Great Barrier Reef", highlights: "Snorkeling, Diving, Marine Life, Island Hopping", image: "/assets/destinations/great-barrier-reef.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents including financial summaries" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your E-Visa — receive approval in 10-30 working days" },
        ],
        importantNotes: [
            "Visa fees and conditions may change anytime as per Embassy / High Commission's decisions.",
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "canada",
        name: "Canada",
        visaType: "Sticker Visa",
        tagline: "True North Strong and Free",
        description: "Experience Canada's breathtaking natural beauty – from the Rocky Mountains and Niagara Falls to vibrant multicultural cities. Apply for your Canada Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/canada.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "10-30 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Multiple Entry)", value: "10,500 BDT (Visa Fee: 185 CAD)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Multiple Entry - 10 Years" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 180 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passport's biopage, visa seal, entry exit seal",
                    "Picture (soft copy - size: 31 mm x 36mm)",
                    "Bank statement & Solvency (Last 06 months) — Hard/Scan Copy",
                    "TIN certificate, Tax return (last 03 years) — Hard/Scan Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID / Birth certificate",
                    "Family NID/Birth certificate (Parents, Siblings, Spouse, Children)",
                    "Summary of bank, properties & other financial assets",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard/Scan Copy",
                    "Employee ID card — Hard/Scan Copy",
                    "Salary certificate / Pay slip — Hard/Scan Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license — Hard/Scan Copy",
                    "Company pad — Hard/Scan Copy",
                    "Memorandum for limited company page XII — Hard/Scan Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID card (both side) — Hard/Scan Copy",
                    "NOC from institution — Hard/Scan Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (if applicable) — Hard/Scan Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "G.O. and verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard/Scan Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Mountain size={32} />, title: "Rocky Mountains", description: "Stunning Banff, Jasper National Parks with world-class skiing and hiking" },
            { icon: <Globe size={32} />, title: "Multicultural Cities", description: "Toronto, Vancouver, Montreal – diverse, safe, and vibrant urban experiences" },
            { icon: <Leaf size={32} />, title: "Natural Wonders", description: "Niagara Falls, Northern Lights, and vast pristine wilderness" },
            { icon: <Shield size={32} />, title: "Safe & Welcoming", description: "One of the world's safest and most welcoming countries for visitors" },
        ],
        destinations: [
            { name: "Toronto", highlights: "CN Tower, Niagara Falls, Royal Ontario Museum, Multicultural Neighborhoods", image: "/assets/destinations/toronto.webp" },
            { name: "Vancouver", highlights: "Stanley Park, Granville Island, Mountains & Ocean, Whistler", image: "/assets/destinations/vancouver.webp" },
            { name: "Banff", highlights: "Rocky Mountains, Lake Louise, Hot Springs, Wildlife", image: "/assets/destinations/banff.webp" },
            { name: "Montreal", highlights: "Old Montreal, Notre-Dame Basilica, Festivals, French Culture", image: "/assets/destinations/montreal.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents including financial summaries" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Sticker Visa — receive approval in 10-30 working days" },
        ],
        importantNotes: [
            "Visa fees and conditions may change anytime as per Embassy / High Commission's decisions.",
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
    {
        slug: "brunei",
        name: "Brunei",
        visaType: "Sticker Visa",
        tagline: "Abode of Peace",
        description: "Discover the hidden gem of Southeast Asia – Brunei offers pristine rainforests, golden-domed mosques, and a peaceful atmosphere of royal heritage. Apply for your Brunei Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/brunei.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "5-7 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,000 BDT (Visa Fee: 20 BND)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 3 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passports",
                    "Picture (passport size)",
                    "Bank statement & Solvency (Last 06 months) — Hard Copy",
                    "TIN certificate — Hard Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID, Birth certificate",
                    "Bank checkbook",
                    "ATM card (if applicable)",
                    "Confirm air ticket",
                    "Invitation letter (if applicable) — (passport copy, professional documents, bank, utility bill)",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard Copy",
                    "Employee ID card — Hard Copy",
                    "Salary certificate / Pay slip — Hard Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license — Hard Copy",
                    "Company pad — Hard Copy",
                    "Memorandum for limited company page XII — Hard Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID card (both side) — Hard Copy",
                    "NOC from institution — Hard Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (if applicable) — Hard Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "G.O. and verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Landmark size={32} />, title: "Royal Heritage", description: "Sultan Omar Ali Saifuddien Mosque and the magnificent Royal Regalia Museum" },
            { icon: <Leaf size={32} />, title: "Pristine Rainforests", description: "Ulu Temburong National Park with untouched ancient rainforest canopy walks" },
            { icon: <Shield size={32} />, title: "Safe & Peaceful", description: "One of the safest countries in Southeast Asia with a welcoming culture" },
            { icon: <Anchor size={32} />, title: "Water Village", description: "Kampong Ayer – the world's largest water village settlement on stilts" },
        ],
        destinations: [
            { name: "Bandar Seri Begawan", highlights: "Omar Ali Saifuddien Mosque, Royal Regalia Museum, Kampong Ayer", image: "/assets/destinations/bandar-seri-begawan.webp" },
            { name: "Ulu Temburong", highlights: "National Park, Canopy Walk, Pristine Rainforest, Waterfalls", image: "/assets/destinations/ulu-temburong.webp" },
            { name: "Jerudong", highlights: "Jerudong Park, Empire Hotel, Beach Resorts", image: "/assets/destinations/jerudong.webp" },
            { name: "Tutong", highlights: "Tasek Merimbun Heritage Park, Beaches, Nature Reserves", image: "/assets/destinations/tutong.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Sticker Visa — receive approval in 5-7 working days" },
        ],
        importantNotes: [
            "Visa fees and conditions may change anytime as per Embassy / High Commission's decisions.",
            "Please contact the Visa department for Document processing after the payment.",
            "Visa rate may change without any prior notice.",
        ],
        whatsappNumbers: [
            "+8801410232265",
            "+8801410237493",
            "+8801410237495",
        ],
    },
];
