"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Globe,
    GraduationCap,
    Plane,
    Users,
    CheckCircle,
    CheckCircle2,
    ArrowRight,
    Target,
    Eye,
    Home,
    Crown,
    MessageCircle,
    Mail,
    Building2,
    ShieldCheck,
    Rocket,
    Briefcase,
    FileSignature,
    BadgeCheck,
    Ticket,
    Hotel,
    MapPin,
    Phone,
    Sparkles,
    Landmark,
    Shield,
    Clock,
    Award,
    ExternalLink
} from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-white pb-20 overflow-hidden">
            {/* 1. Hero Section with Cover Photo */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/about/about-cover.webp"
                        alt="NextPath Global team - Your trusted partner in education, residency, and travel"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-[1]" />
                {/* Decorative blur accents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-[2]"
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] z-[2]"
                />

                <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1.5 px-5 rounded-full bg-white/15 text-white font-semibold text-sm mb-6 backdrop-blur-md border border-white/20 shadow-sm">
                            Your Trusted Global Partner
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                            <span className="text-secondary">NextPath Global</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                            A premier cross-border consultancy specializing in Global Education, Residency by Investment (MM2H & PVIP), Turkish Citizenship, Digital Nomad & Tech Passes, Corporate Mobility, and Worldwide Visa Solutions.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            <Link
                                href="#services"
                                className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-base"
                            >
                                Explore Our Services <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-8 py-3.5 rounded-full font-semibold transition-all inline-flex items-center gap-2 text-base"
                            >
                                Speak to an Advisor
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom fade into content */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* 2. Who We Are */}
            <section className="container mx-auto px-6 mb-24 pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <Sparkles size={14} /> Corporate Profile
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Who We Are
                        </h2>
                        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                            <p>
                                <span className="font-bold text-gray-900">NEXTPATH GLOBAL SDN BHD (ROC: 1637994-A)</span> is a multidisciplinary international consultancy headquartered at <span className="font-semibold text-gray-800">The Intermark, Vista Tower, Kuala Lumpur</span>, with strategic regional operations in Dhaka, Bangladesh.
                            </p>
                            <p>
                                What began as a dedicated higher education consultancy has evolved into an integrated global mobility powerhouse. Today, NextPath Global delivers full-spectrum advisory for ambitious students, high-net-worth investors, multinational corporations, digital innovators, and international travelers.
                            </p>
                            <p>
                                Our team brings together licensed immigration advisors, university admission experts, corporate relocation specialists, and visa processing managers. We operate with strict regulatory compliance, transparent documentation, and personalized end-to-end support.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                                    <GraduationCap className="text-primary mt-1 shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Global Education</h4>
                                        <p className="text-sm text-gray-500">Official university pathways across Malaysia, Spain, & China.</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                                    <Crown className="text-secondary mt-1 shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Residency & Golden Visas</h4>
                                        <p className="text-sm text-gray-500">MM2H & PVIP long-term residence advisory.</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                                    <Landmark className="text-primary mt-1 shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Citizenship by Investment</h4>
                                        <p className="text-sm text-gray-500">Turkish CBI second passport acquisition.</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                                    <Plane className="text-secondary mt-1 shrink-0" size={22} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">Global Visa & Travel</h4>
                                        <p className="text-sm text-gray-500">Tourist visas for 40+ countries & corporate concierge.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="font-medium text-gray-900 italic border-l-4 border-primary pl-4 pt-1">
                                "Every journey—whether for higher education, golden residency, business expansion, or leisure exploration—shapes a brighter, borderless future."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <Image
                                src="/assets/about/office.webp"
                                alt="NextPath Global Corporate Office at The Intermark Vista Tower, Kuala Lumpur"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                        <Building2 size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Corporate Headquarters</div>
                                        <div className="font-bold text-gray-900 text-sm">The Intermark, Vista Tower, Kuala Lumpur</div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    SSM Registered Entity: <strong>1637994-A</strong> • Regional Office: <strong>Dhaka, Bangladesh</strong>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Mission & Vision */}
            <section className="bg-gray-50 py-24 mb-24 border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
                            Our Guiding Philosophy
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                            Mission, Vision & Core Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                        <Target size={28} />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider font-semibold text-primary">Purpose</span>
                                        <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                    </div>
                                </div>
                                <ul className="space-y-3.5 text-gray-600">
                                    {[
                                        "Deliver honest, ethical, and tailored admissions consultation for world-class universities.",
                                        "Facilitate seamless MM2H, PVIP, and Turkish Citizenship applications for global families.",
                                        "Empower corporate clients and tech founders with compliant employment passes and MDEC visas.",
                                        "Provide fast-track, hassle-free tourist visa processing for 40+ destinations worldwide.",
                                        "Uphold meticulous document legalisation, police clearance, and travel concierge standards."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-base">
                                            <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                                        <Eye size={28} />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider font-semibold text-secondary">Aspiration</span>
                                        <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    To stand as Southeast Asia's foremost and most trusted cross-border gateway for global education, golden residency, citizenship by investment, and international mobility.
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    We strive to empower ambitious individuals, visionary entrepreneurs, and multi-generational families to expand their horizons, establish international residences, and build secure global futures with total confidence.
                                </p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm font-semibold text-primary">
                                <Award size={18} /> Committed to Global Standards & Regulatory Ethics
                            </div>
                        </motion.div>
                    </div>

                    {/* 4 Core Values */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Integrity & Ethics",
                                desc: "Transparent advice, zero hidden fees, and strict adherence to official legal protocols.",
                                icon: <Shield size={24} className="text-primary" />
                            },
                            {
                                title: "Client Centricity",
                                desc: "Personalized case management with dedicated consultants for every single applicant.",
                                icon: <Users size={24} className="text-secondary" />
                            },
                            {
                                title: "Global Reach",
                                desc: "Partnerships spanning universities, government bodies, and embassies across the world.",
                                icon: <Globe size={24} className="text-primary" />
                            },
                            {
                                title: "Speed & Excellence",
                                desc: "Optimized processing systems delivering industry-leading approval timelines.",
                                icon: <Rocket size={24} className="text-secondary" />
                            }
                        ].map((val, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4 border border-gray-100">
                                    {val.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2">{val.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Comprehensive Core Services Section */}
            <section id="services" className="container mx-auto px-6 mb-24 scroll-mt-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full">
                        Full Service Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
                        Our Core Services
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        From university admissions and global visas to elite residency programs and citizenship by investment, discover our comprehensive advisory solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 1. Study Abroad */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <GraduationCap size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    Education
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                Global Study Abroad
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                End-to-end higher education consultancy. Direct partnerships with top-tier universities in Malaysia, premier business schools in Spain (C3S), and scholarship programs in China.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Personalized course & university matching</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>EMGS student visa & approval letter (eVAL)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Accommodation & airport reception support</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                            <Link
                                href="/services/study-abroad"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Explore Study Abroad <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/student-assessment"
                                className="text-xs text-gray-500 hover:text-primary underline"
                            >
                                Free Assessment
                            </Link>
                        </div>
                    </motion.div>

                    {/* 2. MM2H Programme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Home size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                    Residency
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                MM2H (Malaysia My Second Home)
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Comprehensive advisory and application lodgement for Malaysia's prestigious 10 to 20-year renewable long-term residency across Platinum, Gold, and Silver tiers.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Multi-entry 10-20 year renewable visa</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Property purchase rights & tax exemptions</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Inclusion of spouse, children, and parents</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/services/mm2h"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Learn About MM2H <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 3. PVIP Programme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Crown size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    Elite Visa
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                PVIP (Premium Visa Programme)
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Malaysia's ultimate 20-year elite residency designed for global high-net-worth investors, entrepreneurs, and executives seeking total flexibility.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>20 years residency (renewable in 5-year blocks)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Unrestricted rights to work, study, & run businesses</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>No minimum physical stay requirement in Malaysia</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/services/pvip"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                View PVIP Details <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 4. Turkish Citizenship by Investment */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.24 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Landmark size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                    Citizenship
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                Turkish Citizenship by Investment
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Direct pathway to a second passport and citizenship through qualifying real estate ($400,000) or bank deposits ($500,000) with complete legal conveyancing.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Visa-free access to 110+ countries worldwide</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Eligibility for USA E-2 Investor Visa treaty</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Full citizenship granted within 3 to 6 months</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/turkish-citizenship-by-investment"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Turkish CBI Guide <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 5. De Rantau & MTEP Visas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.32 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Rocket size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    Digital & Tech
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                DE Rantau & MTEP Tech Passes
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Official MDEC-certified programs for remote workers and tech founders looking to base themselves in Malaysia's booming digital economy.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span><strong>De Rantau:</strong> 12-24 months nomad pass for remote talents</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span><strong>MTEP:</strong> 1-5 years founder pass with 100% foreign ownership</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Fast-track MDEC endorsement & dependent inclusion</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                            <Link
                                href="/services/de-rantau-digital-nomad-visa"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                De Rantau <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/services/mtep"
                                className="text-sm font-bold text-gray-700 hover:text-primary inline-flex items-center gap-1"
                            >
                                MTEP Pass <ArrowRight size={14} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 6. Employment Pass & Corporate Mobility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.40 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Briefcase size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                    Corporate
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                Employment Pass & Corporate Mobility
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Expatriate corporate mobility solutions for companies and skilled executives, including Employment Pass (Category I, II, & III) and business establishment in Malaysia.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>ESD company account registration & quota applications</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>EP Category I, II, & III work visa sponsorship</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>SSM company incorporation & corporate bank setups</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/services/employment-pass"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Employment Pass Guide <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 7. Worldwide Tourist Visas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.48 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Plane size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    Travel & Tourism
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                Tourist Visas (40+ Countries)
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Professional holiday, business, and transit visa processing for clients applying from Malaysia and Bangladesh with tailored document verification and high success rates.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Schengen Area, UK, USA, Canada, & Australia</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Japan, South Korea, China, Turkey, Egypt, & New Zealand</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Fast-track e-Visas for Singapore, Thailand, & Dubai</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                            <Link
                                href="/services/tourist-visa"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Explore Tourist Visas <ArrowRight size={16} />
                            </Link>
                            <span className="text-xs text-gray-400">Malaysia & Bangladesh</span>
                        </div>
                    </motion.div>

                    {/* 8. Hospitality & Travel Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.56 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-secondary/15 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Ticket size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                    Concierge
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                Air Ticketing & Global Hotels
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Comprehensive travel management offering discounted international airfares, customized flight routes, flexible ticketing, and pre-screened worldwide hotel accommodations.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Competitive commercial flight rates worldwide</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Exclusive corporate rates for boutique & luxury hotels</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-secondary" />
                                    <span>Flight itinerary reservations for visa compliance</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Book Travel Concierge <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* 9. Legal Attestation & Verification */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.64 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <BadgeCheck size={32} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    Legal Support
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                                Document Attestation & PCC
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Official legalization, apostille, and governmental certification services ensuring your personal and corporate credentials are recognized globally.
                            </p>
                            <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Good Conduct & Police Clearance Certificates (PCC)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Ministry of Foreign Affairs (MOFA) attestation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span>Notarization & certified multilingual translation</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Request Attestation <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Impact Stats */}
            <section className="bg-primary py-20 mb-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                            Proven Track Record
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                            Our Global Impact in Numbers
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto text-base">
                            Trusted by thousands of international students, global investors, digital professionals, and travelers across the world.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                        {[
                            { value: "4,000+", label: "Happy Clients & Students" },
                            { value: "40+", label: "Countries Covered" },
                            { value: "3,000+", label: "Successful Visas & Passes" },
                            { value: "98%", label: "Application Approval Rate" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                            >
                                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-secondary">{stat.value}</div>
                                <div className="text-white/90 font-medium text-sm md:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Us / Core Advantages */}
            <section className="container mx-auto px-6 mb-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
                        Why NextPath Global
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">
                        The NextPath Global Advantage
                    </h2>
                    <p className="text-gray-600">
                        Distinguished by regulatory expertise, institutional partnerships, and unwavering commitment to client outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: "Official Government & University Networks",
                            desc: "Direct coordination with accredited Malaysian universities, MDEC digital initiatives, and global immigration agencies ensures authentic, priority processing.",
                            icon: <Landmark className="text-primary" size={28} />
                        },
                        {
                            title: "Dual Headquarters in KL & Dhaka",
                            desc: "Physical corporate offices in the heart of Kuala Lumpur (The Intermark Vista Tower) and Dhaka provide accessible, face-to-face consultation and local support.",
                            icon: <Building2 className="text-secondary" size={28} />
                        },
                        {
                            title: "End-to-End Compliance & Transparency",
                            desc: "Zero hidden charges. Every application undergoes multi-tier document vetting before government submission to ensure maximum approval probability.",
                            icon: <ShieldCheck className="text-primary" size={28} />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. How We Work (Our Proven 4-Step Process) */}
            <section className="container mx-auto px-6 mb-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
                        Seamless Lifecycle
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">
                        How We Work
                    </h2>
                    <p className="text-gray-600">
                        Our structured 4-step methodology ensures efficiency, accuracy, and peace of mind at every milestone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                    {[
                        {
                            step: "01",
                            title: "Profile Assessment",
                            desc: "Free comprehensive evaluation of your goals, qualifications, budget, and destination eligibility."
                        },
                        {
                            step: "02",
                            title: "Document Strategy",
                            desc: "Meticulous verification, legalisation, translation, and customized portfolio preparation."
                        },
                        {
                            step: "03",
                            title: "Official Submission",
                            desc: "Swift lodgement with relevant universities, government ministries, or immigration departments."
                        },
                        {
                            step: "04",
                            title: "Approval & Arrival",
                            desc: "Timely delivery of approved visas, residency cards, pre-departure guidance, and arrival support."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm"
                        >
                            <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center text-xl font-extrabold text-primary mx-auto mb-6 shadow-md">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 8. Office Locations */}
            <section className="bg-gray-50 py-20 mb-20 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
                            Physical Presence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3 text-gray-900">
                            Visit Our Offices
                        </h2>
                        <p className="text-gray-600">
                            We welcome in-person consultations at both our Kuala Lumpur Headquarters and Dhaka Office.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Kuala Lumpur HQ */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <Building2 size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Malaysia Headquarters</span>
                                        <h3 className="text-xl font-bold text-gray-900">NextPath Global</h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                    <span>
                                        Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia.
                                    </span>
                                </p>
                                <div className="text-xs text-gray-500 mb-6">
                                    ROC Registration No: <strong>1637994-A</strong>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/601116695249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-gray-800 hover:text-primary bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
                                >
                                    <MessageCircle size={14} className="text-[#25D366]" /> +60 11 1669 5249
                                </a>
                                <a
                                    href="https://wa.me/60172965249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-gray-800 hover:text-primary bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
                                >
                                    <MessageCircle size={14} className="text-[#25D366]" /> +60 17 296 5249
                                </a>
                            </div>
                        </div>

                        {/* Dhaka Office */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
                                        <Building2 size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-secondary uppercase tracking-wider">Bangladesh Regional Office</span>
                                        <h3 className="text-xl font-bold text-gray-900">NextPath Global (Dhaka)</h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                                    <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                                    <span>
                                        House No- 18, Road No- 11, Dhaka- 1229, Bangladesh.
                                    </span>
                                </p>
                                <div className="text-xs text-gray-500 mb-6">
                                    Serving students, travelers, and investors across South Asia.
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/8801410237495"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-gray-800 hover:text-primary bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
                                >
                                    <MessageCircle size={14} className="text-[#25D366]" /> +88 014 1023 7495
                                </a>
                                <a
                                    href="mailto:info@nextpathglobal.my"
                                    className="text-xs font-bold text-gray-800 hover:text-primary bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
                                >
                                    <Mail size={14} className="text-primary" /> info@nextpathglobal.my
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA Section */}
            <section className="container mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider mb-4">
                            Start Your Application Today
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                            Ready to Begin Your Next Chapter?
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
                            Whether you are applying for university admission, long-term golden residency, citizenship by investment, corporate employment passes, or a worldwide tourist visa, our licensed advisors are ready to assist.
                        </p>

                        <div className="flex flex-col gap-5 items-center justify-center">
                            <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
                                <a
                                    href="https://wa.me/601116695249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                                >
                                    <MessageCircle size={18} className="text-[#25D366]" /> +60 11 1669 5249
                                </a>
                                <a
                                    href="https://wa.me/60172965249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                                >
                                    <MessageCircle size={18} className="text-[#25D366]" /> +60 17 296 5249
                                </a>
                                <a
                                    href="https://wa.me/8801410237495"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                                >
                                    <MessageCircle size={18} className="text-[#25D366]" /> +88 014 1023 7495
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center mt-2">
                                <Link
                                    href="/contact"
                                    className="bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base"
                                >
                                    <Mail size={18} /> Contact Our Office
                                </Link>
                                <Link
                                    href="/student-assessment"
                                    className="bg-secondary hover:bg-secondary-hover text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base"
                                >
                                    <GraduationCap size={18} /> Free Student Assessment
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
