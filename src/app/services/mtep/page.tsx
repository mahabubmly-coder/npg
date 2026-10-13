"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Rocket,
    Globe,
    CheckCircle2,
    Building2,
    Users,
    FileText,
    ArrowRight,
    MessageCircle,
    ShieldCheck,
    Briefcase,
    DollarSign,
    Calendar,
    Sparkles,
    Clock,
    HelpCircle,
    Cpu,
    TrendingUp,
    Award,
    Check,
    ChevronDown,
    Building,
    FileCheck2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function MTEPPage() {
    const [selectedTrack, setSelectedTrack] = useState<"newEntrepreneur" | "establishedEntrepreneur">("newEntrepreneur");
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const faqs = [
        {
            q: "What is the Malaysia Tech Entrepreneur Programme (MTEP)?",
            a: "MTEP is an initiative managed by the Malaysia Digital Economy Corporation (MDEC) alongside the Immigration Department of Malaysia (JIM). It provides foreign tech founders, startup innovators, and digital entrepreneurs with passes to establish, base, and grow their businesses in Malaysia."
        },
        {
            q: "What is the difference between the 1-Year Pass and 5-Year Pass?",
            a: "The 1-Year Pass (Professional Visit Pass) is designed for New Tech Entrepreneurs with an innovative digital product or idea but without a 3-year track record. It requires tenancy with an MDEC-approved Malaysia Digital Hub. The 5-Year Pass (Residence Pass) is for Established Tech Entrepreneurs with at least 3 years of business operations and 2 years of audited/financial track records."
        },
        {
            q: "What are the financial requirements for MTEP?",
            a: "Both tracks require applicants to hold a minimum of RM 50,000 in their personal bank account for at least 3 consecutive months prior to application. This must be held in a liquid Demand Deposit (Savings or Current/Cheque account). Fixed deposits, shares, bonds, gold, and cryptocurrencies are strictly not accepted."
        },
        {
            q: "Can I bring my family members / dependents?",
            a: "Under the 5-Year Established Tech Entrepreneur track, you can sponsor your legal spouse, dependent children, and parents. Under the 1-Year New Tech Entrepreneur Pass (PVP), dependents are not eligible during the initial 1-year phase. However, once you incorporate and scale, you may transition to a pass that supports family members."
        },
        {
            q: "How does MTEP differ from the DE Rantau Nomad Pass?",
            a: "DE Rantau is tailored strictly for remote workers and digital freelancers servicing overseas clients, and does not permit incorporating a local business or hiring local Malaysian staff. MTEP is specifically created for tech founders who want to establish a registered company, build intellectual property, and hire talent in Malaysia."
        },
        {
            q: "Can I incorporate a 100% foreign-owned company under MTEP?",
            a: "Yes! Malaysia allows 100% foreign equity ownership in digital and tech enterprises. Founders under MTEP can incorporate an entity (Sdn Bhd) and apply for Malaysia Digital (MD) status for significant tax exemptions and facilitation."
        }
    ];

    const techSectors = [
        { name: "Artificial Intelligence & ML", desc: "Predictive analytics, computer vision, LLMs & autonomous tech", icon: <Cpu className="text-primary" size={24} /> },
        { name: "FinTech & Digital Payments", desc: "Insurtech, wealthtech, open banking & digital payment gateways", icon: <DollarSign className="text-primary" size={24} /> },
        { name: "SaaS & Enterprise Cloud", desc: "B2B productivity, ERP, workflow automation & cloud solutions", icon: <Globe className="text-primary" size={24} /> },
        { name: "E-Commerce & LogiTech", desc: "Cross-border retail, supply chain optimization & fulfillment tech", icon: <TrendingUp className="text-primary" size={24} /> },
        { name: "HealthTech & BioTech", desc: "Telemedicine, diagnostic software & healthcare management systems", icon: <Sparkles className="text-primary" size={24} /> },
        { name: "Cybersecurity & IoT", desc: "Smart infrastructure, device telemetry & end-to-end security suite", icon: <ShieldCheck className="text-primary" size={24} /> },
    ];

    return (
        <div className="min-h-screen bg-white pb-20 overflow-hidden" ref={ref}>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/mtep/mtep-cover.jpg"
                        alt="Malaysia Tech Entrepreneur Programme - MTEP Visa"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/90 z-[1]" />

                {/* Decorative blur accents */}
                <motion.div
                    style={{ y, opacity }}
                    className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 to-primary/25 rounded-full blur-[130px] z-[2]"
                />
                <motion.div
                    style={{ y }}
                    className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] z-[2]"
                />

                <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-sm mb-8 backdrop-blur-md shadow-inner"
                        >
                            <Rocket size={18} className="text-secondary" />
                            <span>MDEC Official Startup Initiative</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight tracking-tight">
                            MTEP / <span className="text-secondary">Tech Entrepreneur Pass</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-light">
                            Launch and scale your digital startup from Malaysia. Secure a 1-year or 5-year pass under the Malaysia Tech Entrepreneur Programme (MTEP) by MDEC with 100% foreign company ownership.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/601116695249"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                            >
                                <MessageCircle size={22} />
                                Consult an MTEP Expert
                            </a>
                            <Link
                                href="#tracks"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-full transition-all hover:shadow-md flex items-center justify-center gap-2 text-lg"
                            >
                                Explore Application Tracks
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* Quick Highlights Bar */}
            <section className="py-10 bg-gradient-to-r from-gray-50 via-amber-50/40 to-gray-50 border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <Clock className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">Pass Duration</h4>
                            <p className="text-sm text-gray-600">1-Year (New) or 5-Year (Established)</p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <DollarSign className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">Proof of Funds</h4>
                            <p className="text-sm text-gray-600">Min. RM 50,000 for 3 consecutive months</p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <Building2 className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">100% Equity</h4>
                            <p className="text-sm text-gray-600">Full foreign ownership in tech startups</p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                            <Globe className="text-primary mb-2" size={32} />
                            <h4 className="font-bold text-gray-900 text-lg">ASEAN Gateway</h4>
                            <p className="text-sm text-gray-600">Direct access to 680M+ SEA market</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Track Selection Section */}
            <section id="tracks" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            MDEC Application Streams
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Choose Your Entrepreneur Track
                        </h2>
                        <p className="text-gray-600 text-lg">
                            MTEP categorizes foreign founders based on operational track record and business maturity. Select your track to inspect specific criteria:
                        </p>
                    </div>

                    {/* Interactive Selection Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                        {/* New Entrepreneur Card */}
                        <div
                            id="track-nte"
                            onClick={() => setSelectedTrack("newEntrepreneur")}
                            className={`cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 relative ${
                                selectedTrack === "newEntrepreneur"
                                    ? "border-primary bg-primary/5 shadow-xl scale-[1.02]"
                                    : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white"
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div
                                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mt-1 shrink-0 transition-all ${
                                        selectedTrack === "newEntrepreneur"
                                            ? "border-primary bg-primary text-white"
                                            : "border-gray-400 bg-white"
                                    }`}
                                >
                                    {selectedTrack === "newEntrepreneur" && (
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        New Tech Entrepreneur (NTE)
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-primary font-semibold text-xs rounded-full">
                                        1-Year Professional Visit Pass (PVP)
                                    </span>
                                </div>
                            </div>
                            <hr className="my-4 border-gray-200" />
                            <p className="text-gray-700 leading-relaxed text-base">
                                Ideal for <strong>aspiring founders, innovators, and prototype creators</strong> with a strong digital business proposition and pitch deck, but without 3+ years of operating history.
                            </p>
                        </div>

                        {/* Established Entrepreneur Card */}
                        <div
                            id="track-ete"
                            onClick={() => setSelectedTrack("establishedEntrepreneur")}
                            className={`cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 relative ${
                                selectedTrack === "establishedEntrepreneur"
                                    ? "border-primary bg-primary/5 shadow-xl scale-[1.02]"
                                    : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white"
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div
                                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mt-1 shrink-0 transition-all ${
                                        selectedTrack === "establishedEntrepreneur"
                                            ? "border-primary bg-primary text-white"
                                            : "border-gray-400 bg-white"
                                    }`}
                                >
                                    {selectedTrack === "establishedEntrepreneur" && (
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        Established Tech Entrepreneur (ETE)
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 font-semibold text-xs rounded-full">
                                        Up to 5-Year Residence Pass
                                    </span>
                                </div>
                            </div>
                            <hr className="my-4 border-gray-200" />
                            <p className="text-gray-700 leading-relaxed text-base">
                                Tailored for <strong>experienced founders & executives</strong> who possess at least 3 years of verifiable business operations and audited/historical financial statements.
                            </p>
                        </div>
                    </div>

                    {/* Dynamic Track Details Section */}
                    <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
                        {selectedTrack === "newEntrepreneur" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
                                    <div>
                                        <span className="text-xs uppercase tracking-widest text-primary font-bold">Track Overview</span>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                                            New Tech Entrepreneur (1-Year Pass)
                                        </h3>
                                    </div>
                                    <div className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                                        Renewable for 1 Additional Year
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                            <CheckCircle2 className="text-primary" size={20} />
                                            Key Requirements
                                        </h4>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Financial Proof:</strong> Minimum RM 50,000 personal bank balance held for 3 consecutive months in savings or current account.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Digital Hub Tenancy:</strong> Tenancy agreement signed with an MDEC-approved Malaysia Digital Hub (e.g., Common Ground, WORQ).</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Personal Bond:</strong> Personal bond endorsed by the accredited Malaysia Digital Hub or certified partner.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                                <span><strong>Pitch Deck & Roadmap:</strong> Comprehensive pitch deck articulating digital product, problem-solution fit, market size, and roadmap.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                            <Sparkles className="text-secondary" size={20} />
                                            Pass Privileges & Terms
                                        </h4>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span>Live and build your business in Malaysia for 1 year with full legal status.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span>Seamless access to Malaysia Digital Hub co-working networks, mentors, and events.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span>Option to renew for a 2nd year upon demonstrating commercial progress.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Clock className="text-amber-600 shrink-0 mt-0.5" size={18} />
                                                <span><strong>Dependents Note:</strong> Family sponsorship is not allowed during the initial 1-year PVP stage.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
                                    <div>
                                        <span className="text-xs uppercase tracking-widest text-amber-600 font-bold">Track Overview</span>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                                            Established Tech Entrepreneur (Up to 5-Year Pass)
                                        </h3>
                                    </div>
                                    <div className="bg-amber-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                                        Renewable for another 5 Years
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                            <CheckCircle2 className="text-amber-600" size={20} />
                                            Key Requirements
                                        </h4>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                                                <span><strong>Financial Proof:</strong> Minimum RM 50,000 personal liquid bank balance held for 3 consecutive months.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                                                <span><strong>Operating Track Record:</strong> Minimum 3 years of operational track record with financial/tax records for the latest 2 years.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                                                <span><strong>Malaysian Sponsor:</strong> Declaration form signed by a Malaysian corporate sponsor or recognized local entity.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                                                <span><strong>Good Standing:</strong> Valid Certificate of Good Conduct (CGC) from your home country or country of residence.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                            <Award className="text-amber-600" size={20} />
                                            Pass Privileges & Benefits
                                        </h4>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span>Long-term multi-entry residency in Malaysia for up to 5 years (renewable).</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span><strong>Family Friendly:</strong> Eligible to sponsor spouse, dependent children, and parents.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span>Setup a 100% foreign-owned Malaysian company (Sdn Bhd) and hire international talent.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <span>Fast-track qualification for Malaysia Digital (MD) corporate status and tax perks.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-sm text-gray-500">
                                Need help determining which track fits your profile and credentials?
                            </span>
                            <a
                                href="https://wa.me/601116695249?text=Hello,%20I%20would%20like%20to%20assess%20my%20eligibility%20for%20the%20MTEP%20Programme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md"
                            >
                                <MessageCircle size={16} />
                                Free Profile Assessment
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Targeted Tech Verticals */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Eligible Digital Sectors
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            What Type of Startups Qualify?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            MDEC targets high-impact digital ventures that drive technology innovation and economic value:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {techSectors.map((sector, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    {sector.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crucial Banking Rules Section */}
            <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-secondary text-gray-900 flex items-center justify-center font-black">
                                !
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold">
                                Critical Rule: RM 50,000 Liquid Funds Proof
                            </h3>
                        </div>
                        <p className="text-white/90 text-base md:text-lg mb-6 leading-relaxed">
                            MDEC enforces strict compliance regarding proof of funds. Applicants must demonstrate a minimum of <strong>RM 50,000 (or foreign currency equivalent)</strong> maintained consistently for at least <strong>3 consecutive months</strong> prior to application submission.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4">
                                <h4 className="font-bold text-emerald-300 mb-2 flex items-center gap-2">
                                    <CheckCircle2 size={18} /> Accepted Account Types
                                </h4>
                                <ul className="text-sm space-y-1 text-white/90">
                                    <li>- Personal Savings Account</li>
                                    <li>- Personal Current / Cheque Account</li>
                                    <li>- Official Demand Deposit bank statements with bank stamp</li>
                                </ul>
                            </div>
                            <div className="bg-rose-500/20 border border-rose-400/30 rounded-2xl p-4">
                                <h4 className="font-bold text-rose-300 mb-2 flex items-center gap-2">
                                    <HelpCircle size={18} /> Strictly NOT Accepted
                                </h4>
                                <ul className="text-sm space-y-1 text-white/90">
                                    <li>- Fixed Deposit / Term Deposit Certificates</li>
                                    <li>- Shareholdings, Stocks, Mutual Funds</li>
                                    <li>- Cryptocurrency wallets or Gold accounts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Workflow */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Process Breakdown
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            How to Apply with Next Path Global
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We guide you end-to-end from initial business pitch structuring to your physical pass endorsement in Kuala Lumpur:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 relative">
                            <span className="text-4xl font-black text-primary/20 mb-3 block">01</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Profile Pre-Screening</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our consultants evaluate your pitch deck, tech concept, academic credentials, and 3-month bank statements to ensure 100% compliance.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 relative">
                            <span className="text-4xl font-black text-primary/20 mb-3 block">02</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Hub or Sponsor Match</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We connect you with accredited Malaysia Digital Hubs (for NTE) to execute tenancy and personal bond, or arrange corporate sponsor documentation (for ETE).
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 relative">
                            <span className="text-4xl font-black text-primary/20 mb-3 block">03</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">MDEC Submission</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Formal filing via the MDEC MTEP portal. The approval committee reviews the startup value proposition (processing window ~4 to 6 weeks).
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 relative">
                            <span className="text-4xl font-black text-primary/20 mb-3 block">04</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Pass Endorsement</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Upon approval letter issuance, we coordinate with the Immigration Department of Malaysia (JIM) for official visa sticker endorsement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Document Checklist */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                                Preparation Checklist
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Required Documents for Submission
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Ensure you have the following documents ready before submitting your application:
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <FileCheck2 className="text-primary shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">Full Passport Copy</h4>
                                    <p className="text-sm text-gray-600">All pages scanned (including blank pages), minimum 14 months validity and at least 6 empty pages.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <FileCheck2 className="text-primary shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">3 Months Official Bank Statements</h4>
                                    <p className="text-sm text-gray-600">Demonstrating minimum RM 50,000 liquid balance for the latest 3 consecutive months with official bank certification.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <FileCheck2 className="text-primary shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">Startup Pitch Deck</h4>
                                    <p className="text-sm text-gray-600">Executive presentation covering business model, problem statement, technical stack, target market, milestones, and financial projections.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <FileCheck2 className="text-primary shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">Certificate of Good Conduct (CGC)</h4>
                                    <p className="text-sm text-gray-600">Official police clearance certificate issued by the competent authority in your home country or country of residence.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <FileCheck2 className="text-primary shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">Curriculum Vitae & Academic Certificates</h4>
                                    <p className="text-sm text-gray-600">Detailed resume showing tech industry experience, past projects, along with highest educational degree copies.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <FileCheck2 className="text-primary shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">Hub Agreement (NTE) or 3-Year Proof (ETE)</h4>
                                    <p className="text-sm text-gray-600">Tenancy agreement and signed bond with an approved Malaysia Digital Hub, or company incorporation and financial audits for established track.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Callout: DE Rantau vs MTEP */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-primary to-blue-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-2">
                                Choosing the Right Pathway
                            </span>
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                                DE Rantau vs. MTEP: Which Is Right for You?
                            </h3>
                            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-3xl">
                                Both programs are launched by MDEC, but cater to completely different professional objectives:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-extrabold text-xl text-white">DE Rantau Nomad Pass</h4>
                                        <span className="text-xs bg-white/20 text-white font-semibold px-3 py-1 rounded-full">Remote Workers</span>
                                    </div>
                                    <ul className="text-sm space-y-2 text-white/80">
                                        <li>- Work remotely for overseas employers or clients</li>
                                        <li>- Cannot register a local business or hire local staff</li>
                                        <li>- Income requirement: USD 24,000 / year</li>
                                        <li>- Duration: 3 to 12 months (renewable up to 2 years)</li>
                                    </ul>
                                    <Link
                                        href="/services/de-rantau-digital-nomad-visa"
                                        className="inline-flex items-center gap-2 text-secondary hover:underline font-bold text-sm mt-4"
                                    >
                                        View DE Rantau Details <ArrowRight size={14} />
                                    </Link>
                                </div>

                                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-secondary/40 shadow-inner">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-extrabold text-xl text-secondary">MTEP Startup Pass</h4>
                                        <span className="text-xs bg-secondary text-gray-900 font-bold px-3 py-1 rounded-full">Founders & Owners</span>
                                    </div>
                                    <ul className="text-sm space-y-2 text-white/90">
                                        <li>- Establish and operate a registered tech company in Malaysia</li>
                                        <li>- Hire domestic and expatriate talent freely</li>
                                        <li>- Bank balance requirement: RM 50,000 for 3 months</li>
                                        <li>- Duration: 1 to 5 years (renewable)</li>
                                    </ul>
                                    <a
                                        href="https://wa.me/601116695249?text=Hello,%20I%20am%20interested%20in%20MTEP%20and%20want%20to%20know%20more"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-secondary hover:underline font-bold text-sm mt-4"
                                    >
                                        Apply for MTEP Today <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Common queries about the Malaysia Tech Entrepreneur Programme:
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full text-left p-6 font-bold text-gray-900 flex justify-between items-center gap-4 hover:text-primary transition-colors"
                                >
                                    <span className="text-lg">{faq.q}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`shrink-0 transition-transform duration-300 text-gray-400 ${openFaq === index ? "rotate-180 text-primary" : ""}`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA & Direct Contact Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-blue-900 to-indigo-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                            Ready to Launch Your Tech Venture in Malaysia?
                        </h2>
                        <p className="text-white/80 text-lg">
                            Next Path Global handles your complete application docket, Malaysia Digital Hub matchmaking, and immigration facilitation. Speak directly with our advisors:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                        <a
                            href="https://wa.me/601116695249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md p-6 rounded-2xl text-center transition-all hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                            <p className="text-secondary font-mono font-bold text-lg mb-2">+60 11 1669 5249</p>
                            <span className="text-xs text-blue-200 group-hover:underline flex items-center justify-center gap-1">
                                Chat on WhatsApp <ArrowRight size={14} />
                            </span>
                        </a>

                        <a
                            href="https://wa.me/60172965249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md p-6 rounded-2xl text-center transition-all hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Client Relations</h4>
                            <p className="text-secondary font-mono font-bold text-lg mb-2">+60 17 296 5249</p>
                            <span className="text-xs text-blue-200 group-hover:underline flex items-center justify-center gap-1">
                                Chat on WhatsApp <ArrowRight size={14} />
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/book-appointment"
                            className="bg-secondary hover:bg-yellow-400 text-gray-900 font-extrabold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-yellow-400/20 text-lg flex items-center gap-2"
                        >
                            <Calendar size={20} />
                            Book Appointment Now
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 transition-all text-lg"
                        >
                            Submit Online Inquiry
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
