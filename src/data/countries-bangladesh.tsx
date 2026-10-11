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
    {
        slug: "india",
        name: "India",
        visaType: "Sticker Visa",
        tagline: "Incredible India",
        description: "Experience the vibrant culture, ancient heritage, stunning landscapes, and culinary diversity of India – from the Taj Mahal to Kerala's backwaters. Apply for your India Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/india.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "10-15 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single/Multiple Entry)", value: "6,000 BDT" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "01 / 03 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current Passport (Valid At Least 06 Months), Previous All Passports",
                    "Last India Visa Copy and Entry-Exit Date",
                    "Personal Bank Statement & Solvency (Last 06 Months, Minimum Balance BDT 60,000)",
                    "Photo (02×02) (No Sunglass, No Cap or Tupi)",
                    "Visiting Card",
                    "NID/Birth Certificate",
                    "Utility Bill",
                    "Marriage Certificate/Nikah Nama (For Married Person)",
                    "Medical Documents (Last 06 Month-Prescription & Reports — If Medical Visa)",
                    "Business Invitation Letter (If Business Visa)",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC From Current Organization — Hard Copy",
                    "Salary Certificate — Hard Copy",
                    "Office ID Card — Hard Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Valid Trade License — Hard Copy",
                    "Company Letterhead Pad — Hard Copy",
                    "Business Bank Statement & Solvency Certificate (Last 06 Months - Optional)",
                    "Memorandum For Limited Company Page XII (For Share Holders) — Hard Copy",
                    "BIN, ERC, IRC, LC, Work Order Or Any Relevant Documents — Hard Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC Or Higher Certificate — Hard Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "G.O (Government Order) — Hard Copy",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "BAR Council Certificate — Hard Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "Student ID Copy — Hard Copy",
                    "Father's Professional Details And Bank Details As Above — Hard Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Landmark size={32} />, title: "Iconic Monuments", description: "Taj Mahal, Red Fort, Jaipur's palaces, and centuries of architectural marvels" },
            { icon: <Utensils size={32} />, title: "Culinary Diversity", description: "From biryani to dosa, street food to fine dining – a food lover's paradise" },
            { icon: <Mountain size={32} />, title: "Diverse Landscapes", description: "Himalayas, beaches of Goa, deserts of Rajasthan, and lush Kerala backwaters" },
            { icon: <Globe size={32} />, title: "Rich Culture", description: "Festivals, spirituality, yoga, Bollywood, and incredible warmth of the people" },
        ],
        destinations: [
            { name: "Delhi", highlights: "Red Fort, India Gate, Qutub Minar, Chandni Chowk, Shopping", image: "/assets/destinations/delhi.webp" },
            { name: "Agra", highlights: "Taj Mahal, Agra Fort, Fatehpur Sikri, Mehtab Bagh", image: "/assets/destinations/agra.webp" },
            { name: "Jaipur", highlights: "Amber Fort, Hawa Mahal, City Palace, Pink City Markets", image: "/assets/destinations/jaipur.webp" },
            { name: "Mumbai", highlights: "Gateway of India, Marine Drive, Bollywood, Street Food", image: "/assets/destinations/mumbai.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Sticker Visa — receive approval in 10-15 working days" },
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
        slug: "japan",
        name: "Japan",
        visaType: "Sticker Visa",
        tagline: "Land of the Rising Sun",
        description: "Discover Japan – where ancient tradition meets cutting-edge technology. From serene temples and cherry blossoms to neon-lit cities and world-class cuisine. Apply for your Japan Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/japan.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "7-10 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,000 BDT" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 3 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passports",
                    "Picture (Size: 45 x 45) — Hard Copy",
                    "Bank statement & Solvency (Last 06 months) — Hard Copy",
                    "TIN certificate, (Last 3 years tax return + certificate) — Hard Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID / Birth certificate",
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
            { icon: <Landmark size={32} />, title: "Ancient Temples", description: "Kyoto's golden pavilions, Nara's sacred deer park, and centuries-old shrines" },
            { icon: <Lightbulb size={32} />, title: "Modern Innovation", description: "Tokyo's neon skyline, bullet trains, robotics, and cutting-edge technology" },
            { icon: <Utensils size={32} />, title: "World-Class Cuisine", description: "Sushi, ramen, wagyu beef, and more Michelin stars than any other country" },
            { icon: <Leaf size={32} />, title: "Natural Beauty", description: "Cherry blossoms, Mount Fuji, hot springs, and stunning seasonal landscapes" },
        ],
        destinations: [
            { name: "Tokyo", highlights: "Shibuya Crossing, Senso-ji Temple, Akihabara, Tsukiji Market", image: "/assets/destinations/tokyo.webp" },
            { name: "Kyoto", highlights: "Fushimi Inari, Kinkaku-ji, Bamboo Grove, Geisha District", image: "/assets/destinations/kyoto.webp" },
            { name: "Osaka", highlights: "Osaka Castle, Dotonbori, Street Food Capital, Universal Studios", image: "/assets/destinations/osaka.webp" },
            { name: "Mount Fuji", highlights: "Iconic Peak, Hakone Hot Springs, Lake Kawaguchi, Scenic Views", image: "/assets/destinations/mount-fuji.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Sticker Visa — receive approval in 7-10 working days" },
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
        slug: "morocco",
        name: "Morocco",
        visaType: "Sticker Visa",
        tagline: "Gateway to Africa",
        description: "Explore the enchanting world of Morocco – vibrant souks, majestic Sahara dunes, ancient medinas, and stunning coastal cities. Apply for your Morocco Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/morocco.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "15-30 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,000 BDT (Visa Fee: 9,500 BDT)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 3 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passports",
                    "Picture (Size: Passport Size) — Hard Copy",
                    "Bank statement & Solvency (Last 06 months) — Hard Copy",
                    "TIN certificate, Tax certificate (Last 3 years) — Hard Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "Birth certificate",
                    "Travel Insurance",
                    "Family Picture (If applicable)",
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
            { icon: <Landmark size={32} />, title: "Ancient Medinas", description: "Explore UNESCO-listed Fez and Marrakech medinas with vibrant souks and riads" },
            { icon: <Sun size={32} />, title: "Sahara Desert", description: "Camel treks, desert camps under starlit skies, and golden sand dunes" },
            { icon: <Utensils size={32} />, title: "Exotic Cuisine", description: "Tagine, couscous, mint tea, and a fusion of Berber, Arab, and French flavors" },
            { icon: <Globe size={32} />, title: "Cultural Mosaic", description: "A unique blend of African, Arab, and European influences across stunning landscapes" },
        ],
        destinations: [
            { name: "Marrakech", highlights: "Jemaa el-Fnaa, Majorelle Garden, Souks, Bahia Palace", image: "/assets/destinations/marrakech.webp" },
            { name: "Fez", highlights: "Ancient Medina, Tanneries, Bou Inania Madrasa, Crafts", image: "/assets/destinations/fez.webp" },
            { name: "Chefchaouen", highlights: "Blue City, Mountain Views, Artisan Shops, Photography", image: "/assets/destinations/chefchaouen.webp" },
            { name: "Sahara Desert", highlights: "Merzouga Dunes, Camel Treks, Desert Camps, Stargazing", image: "/assets/destinations/sahara.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Student, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all required common and category-specific documents including travel insurance" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Sticker Visa — receive approval in 15-30 working days" },
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
        slug: "new-zealand",
        name: "New Zealand",
        visaType: "E-Visa",
        tagline: "The Land of the Long White Cloud",
        description: "Discover breathtaking fjords, snow-capped alpine peaks, lush rolling meadows, and Maori culture. Apply for your New Zealand Visitor E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/new-zealand.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "15-30 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Multiple Entry)", value: "10,500 BDT (Visa Fee: 441 NZD)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry: 18 Months | Multiple Entry: 12 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Single Entry: 09 Months | Multiple Entry: 06 Months (Each Stay)" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passport's biopage, visa seal, entry exit seal — Hard / Scan Copy",
                    "Picture (Soft copy - passport size)",
                    "Bank statement & solvency (Last 06 months) — Hard / Scan Copy",
                    "TIN Certificate, Tax return (Last 03 years) — Hard / Scan Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID / Birth certificate",
                    "Summary of Bank, properties & other financial assets",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard / Scan Copy",
                    "Employee ID card — Hard / Scan Copy",
                    "Salary certificate / Pay slip — Hard / Scan Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license — Hard / Scan Copy",
                    "Company pad — Hard / Scan Copy",
                    "Memorandum for limited company page XII — Hard / Scan Copy",
                    "BIN certificate (If available)",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID card (Both side) — Hard / Scan Copy",
                    "NOC from institution — Hard / Scan Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (If applicable) — Hard / Scan Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "GO And verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard / Scan Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Mountain size={32} />, title: "Spectacular Nature", description: "Milford Sound, Southern Alps, geothermal wonders, and pristine glacial lakes" },
            { icon: <Sun size={32} />, title: "Outdoor Adventure", description: "World-class hiking, skydiving, skiing, and thrilling road trips" },
            { icon: <Globe size={32} />, title: "Rich Maori Culture", description: "Experience indigenous traditions, haka performances, and warm Kiwi hospitality" },
            { icon: <Camera size={32} />, title: "Iconic Landscapes", description: "Explore the magical filming locations of Hobbiton and the Lord of the Rings" },
        ],
        destinations: [
            { name: "Queenstown", highlights: "Adventure Capital, Lake Wakatipu, Milford Sound, Remarkables", image: "/assets/destinations/queenstown.webp" },
            { name: "Auckland", highlights: "Sky Tower, Waiheke Island, Viaduct Harbour, Volcanic Cones", image: "/assets/destinations/auckland.webp" },
            { name: "Rotorua", highlights: "Geothermal Geysers, Mud Pools, Maori Cultural Villages, Redwoods", image: "/assets/destinations/rotorua.webp" },
            { name: "Christchurch", highlights: "Garden City, Avon River Punting, TranzAlpine Train, Port Hills", image: "/assets/destinations/christchurch.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather all common and category-specific financial and civil documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We submit your New Zealand E-Visa application — receive decision in 15-30 working days" },
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
        slug: "russia",
        name: "Russia",
        visaType: "Sticker Visa",
        tagline: "The Realm of Imperial Splendor",
        description: "From the grand palaces of Saint Petersburg to Moscow's iconic Red Square and the endless vistas of Siberia. Apply for your Russia Tourist Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/russia.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "15-20 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,000 BDT (Visa Fee: 6,800 BDT)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 03 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Each Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passports",
                    "Picture (Size: 35 x 45) — Hard Copy",
                    "Bank statement & Solvency (Last 06 months) — Hard Copy",
                    "TIN certificate, Tax certificate (Last 03 years) — Hard Copy",
                    "Visiting card",
                    "Travel Insurance",
                    "NID / Birth certificate",
                    "Confirm Hotel, air ticket, invitation letter copy",
                    "Family Picture",
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
            { icon: <Landmark size={32} />, title: "Iconic Architecture", description: "Kremlin, Saint Basil's Cathedral, Hermitage Museum, and Winter Palace" },
            { icon: <Globe size={32} />, title: "Rich Cultural Legacy", description: "World-class ballet, classical music, literature, and imperial heritage" },
            { icon: <Sun size={32} />, title: "White Nights of St. Petersburg", description: "Experience summer midnight sun, illuminated bridges, and grand canal boat tours" },
            { icon: <Mountain size={32} />, title: "Vast Natural Wonders", description: "Lake Baikal, Kamchatka volcanoes, Caucasus mountains, and picturesque taiga" },
        ],
        destinations: [
            { name: "Moscow", highlights: "Red Square, Kremlin, Saint Basil's, Bolshoi Theatre, Arbat Street", image: "/assets/destinations/moscow.webp" },
            { name: "Saint Petersburg", highlights: "The Hermitage, Peterhof Palace, Church of the Savior on Spilled Blood, Nevsky Prospect", image: "/assets/destinations/saint-petersburg.webp" },
            { name: "Kazan", highlights: "Kazan Kremlin, Qol Sharif Mosque, Millennium Bridge, Volga River", image: "/assets/destinations/kazan.webp" },
            { name: "Sochi", highlights: "Black Sea Coast, Rosa Khutor Alpine Resort, Olympic Park, Waterfalls", image: "/assets/destinations/sochi.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather passport, bank solvency, travel insurance, invitation letter & category documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We process your Russia Sticker Visa — receive approval in 15-20 working days" },
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
        slug: "philippines",
        name: "Philippines",
        visaType: "E-Visa",
        tagline: "Pearl of the Orient Seas",
        description: "Explore 7,000+ tropical islands with powdery white beaches, turquoise lagoons, world-class diving spots, and vibrant festive culture. Apply for your Philippines E-Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/philippines.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "15-20 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee (Single Entry)", value: "4,000 BDT (Visa Fee: 8,550 BDT)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single Entry - 03 Months" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Single Entry - 30 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passports",
                    "Picture (Size: 2x2)",
                    "Bank statement & Solvency (Last 03 months, minimum balance 2,00,000 per person) — Hard Copy",
                    "TIN certificate",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID / Birth certificate",
                ],
            },
            {
                category: "Job Holder",
                documents: [
                    "NOC from employer — Hard Copy",
                    "Employee ID card — Hard Copy",
                ],
            },
            {
                category: "Businessman",
                documents: [
                    "Trade license notarized — Hard Copy",
                    "Company pad — Hard Copy",
                ],
            },
            {
                category: "Student",
                documents: [
                    "School/College/University ID Card (Both side) — Hard Copy",
                    "NOC from institution — Hard Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (If applicable) — Hard Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "GO And verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard Copy",
                ],
            },
            {
                category: "Advocate / Lawyer",
                documents: [
                    "BAR council certificate — Hard Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Sun size={32} />, title: "Paradise Beaches", description: "Boracay, Palawan, and Siargao boasting world-renowned white sands and crystal waters" },
            { icon: <Leaf size={32} />, title: "Island Hopping", description: "Over 7,000 tropical islands featuring hidden lagoons, limestone cliffs, and coral reefs" },
            { icon: <Globe size={32} />, title: "Warm Hospitality", description: "English-speaking locals known globally for their infectious warmth and cheerful spirit" },
            { icon: <Utensils size={32} />, title: "Unique Cuisine", description: "Savor flavorful dishes like Adobo, Lechon, Halo-Halo, and fresh tropical seafood" },
        ],
        destinations: [
            { name: "Boracay", highlights: "White Beach, Willy's Rock, Sunset Paraw Sailing, Nightlife", image: "/assets/destinations/boracay.webp" },
            { name: "Palawan (El Nido)", highlights: "Big & Small Lagoons, Nacpan Beach, Limestone Karsts, Scuba Diving", image: "/assets/destinations/palawan.webp" },
            { name: "Cebu", highlights: "Kawasan Falls, Whale Sharks in Oslob, Magellan's Cross, Bantayan Island", image: "/assets/destinations/cebu.webp" },
            { name: "Manila", highlights: "Intramuros, Rizal Park, San Agustin Church, BGC Skyline", image: "/assets/destinations/manila.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, Lawyer, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather passport, 2x2 photo, 3-month bank statement (min 200,000 BDT) and category documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We submit your Philippines E-Visa application — receive approval in 15-20 working days" },
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
        slug: "schengen",
        name: "Schengen",
        visaType: "Sticker Visa",
        tagline: "Explore 29 European Nations",
        description: "Travel freely across 29 European countries with a single visa. Explore iconic landmarks, historic cities, alpine wonders, and cultural capitals. Apply for your Schengen Tourist Sticker Visa with NextPath Global from Bangladesh.",
        coverImage: "/assets/countries/schengen.webp",
        quickFacts: [
            { icon: <Clock size={20} />, label: "Processing Time", value: "14 Working Days (Estimated only)" },
            { icon: <DollarSign size={20} />, label: "Fee", value: "8,500 BDT (Visa Fees: Depends on Country)" },
            { icon: <Calendar size={20} />, label: "Visa Duration", value: "Single / Multiple Entry - 05 to 730 Days" },
            { icon: <Plane size={20} />, label: "Stay Duration", value: "Single / Multiple Entry - 05 to 90 Days" },
        ],
        documentCategories: [
            {
                category: "Common Documents (All Applicants)",
                documents: [
                    "Current & previous passport's biopage, visa seal, entry exit seal — Hard Copy",
                    "Picture (Size: 35x45)",
                    "Bank statement & Solvency (Last 06 months) — Hard Copy",
                    "TIN Certificate, Tax return (Last 03 years) — Hard Copy",
                    "Visiting card",
                    "Marriage certificate / Nikahnama (If applicable)",
                    "NID / Birth Certificate",
                    "Summary of bank, properties & other financial assets",
                    "Insurance — Hard Copy",
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
                    "School/College/University ID card (Both side) — Hard Copy",
                    "NOC from institution — Hard Copy",
                ],
            },
            {
                category: "Doctor",
                documents: [
                    "BMDC certificate for doctor (If applicable) — Hard Copy",
                ],
            },
            {
                category: "Govt. Employee",
                documents: [
                    "GO And verbal or letter of introduction LOI (Issued by foreign ministry of Bangladesh office) — Hard Copy",
                ],
            },
        ],
        whyChoose: [
            { icon: <Globe size={32} />, title: "29 Countries in One", description: "Seamless borderless travel across France, Germany, Italy, Switzerland, Spain, and more" },
            { icon: <Landmark size={32} />, title: "World Heritage & Culture", description: "Eiffel Tower, Colosseum, Sagrada Familia, Louvre, and timeless historic capitals" },
            { icon: <Mountain size={32} />, title: "Alpine Landscapes", description: "Swiss Alps, Norwegian fjords, Mediterranean coastlines, and fairy-tale castles" },
            { icon: <Utensils size={32} />, title: "Culinary Excellence", description: "Savor world-renowned cuisines, from Italian pasta and French pastries to Spanish tapas" },
        ],
        destinations: [
            { name: "Paris, France", highlights: "Eiffel Tower, Louvre Museum, Champs-Élysées, Notre-Dame", image: "/assets/destinations/paris.webp" },
            { name: "Rome, Italy", highlights: "Colosseum, Vatican City, Trevi Fountain, Pantheon", image: "/assets/destinations/rome.webp" },
            { name: "Zurich & Interlaken, Switzerland", highlights: "Swiss Alps, Jungfraujoch, Lake Zurich, scenic train routes", image: "/assets/destinations/switzerland.webp" },
            { name: "Barcelona, Spain", highlights: "Sagrada Familia, Park Güell, Gothic Quarter, Barceloneta Beach", image: "/assets/destinations/barcelona.webp" },
        ],
        process: [
            { step: 1, title: "Select Category", description: "Choose your applicant category (Job Holder, Businessman, Doctor, etc.)" },
            { step: 2, title: "Prepare Documents", description: "Gather passport, financial proof, travel insurance, assets & category documents" },
            { step: 3, title: "Make Payment", description: "Complete payment then contact our Visa department" },
            { step: 4, title: "Submit & Receive", description: "We assist with Schengen appointment booking & dossier processing — receive decision in approx. 14 working days" },
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

