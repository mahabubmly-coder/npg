"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    TrendingUp,
    Sparkles,
    Cpu,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    MessageCircle,
    Calendar,
    Layers,
    Search,
    Compass,
    Target,
    Zap,
    Users,
    ChevronDown,
    Building2,
    Check,
    PhoneCall,
    Mail,
    Network,
    Lock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const servicesList = [
    {
        id: "strategy-consulting",
        title: "Strategy & Business Consulting",
        icon: <Compass className="text-secondary" size={28} />,
        lead: "Create a clear direction for your business with practical plans that connect long-term goals to everyday decisions.",
        badge: "Strategic Vision",
        items: [
            "Business strategy and growth planning",
            "Digital strategy and transformation roadmaps",
            "Innovation planning",
            "Business risk assessment"
        ]
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        icon: <Zap className="text-secondary" size={28} />,
        lead: "Improve how your business works by aligning people, processes, and technology.",
        badge: "Operational Agility",
        items: [
            "Business process and technology assessments",
            "Workflow improvement and automation",
            "Digital readiness assessments",
            "Change management and adoption support"
        ]
    },
    {
        id: "business-tech-advisory",
        title: "Business & Technology Advisory",
        icon: <Users className="text-secondary" size={28} />,
        lead: "Make informed decisions about technology, operations, and organizational change.",
        badge: "Executive Advisory",
        items: [
            "Technology investment and solution evaluation",
            "Business and IT alignment",
            "Workforce and organizational advisory",
            "Change planning and stakeholder alignment"
        ]
    },
    {
        id: "architecture-modernization",
        title: "Architecture & Technology Modernization",
        icon: <Layers className="text-secondary" size={28} />,
        lead: "Plan a technology environment that supports your current operations and future growth.",
        badge: "Cloud & Scalability",
        items: [
            "Application and infrastructure assessments",
            "Technology architecture planning",
            "Legacy system modernization roadmaps",
            "System integration and cloud planning"
        ]
    },
    {
        id: "ai-intelligent-automation",
        title: "Artificial Intelligence & Intelligent Automation",
        icon: <Cpu className="text-secondary" size={28} />,
        lead: "Identify practical opportunities to use AI, improve decision-making, and reduce repetitive work.",
        badge: "AI & Innovation",
        items: [
            "AI readiness, strategy, and roadmap development",
            "AI use-case identification and prioritization",
            "Predictive analytics and machine learning",
            "Language, document, and image processing",
            "Intelligent workflow automation"
        ]
    },
    {
        id: "cybersecurity-digital-trust",
        title: "Cybersecurity & Digital Trust",
        icon: <ShieldCheck className="text-secondary" size={28} />,
        lead: "Understand digital risks and build stronger foundations for protecting systems, information, and customer trust.",
        badge: "Security & Governance",
        items: [
            "Cybersecurity assessments",
            "Security governance and policy advisory",
            "Data protection and access management guidance",
            "Security improvement roadmaps"
        ]
    },
    {
        id: "program-delivery-management",
        title: "Program Delivery & Transformation Management",
        icon: <Target className="text-secondary" size={28} />,
        lead: "Move from planning to implementation with clear ownership, coordinated delivery, and measurable progress.",
        badge: "Execution Excellence",
        items: [
            "Program and project planning",
            "Transformation office support",
            "Vendor evaluation and coordination",
            "Stakeholder communication",
            "Delivery tracking and post-implementation reviews"
        ]
    }
];

const workSteps = [
    {
        step: "01",
        title: "Understand",
        description: "Assess your goals, challenges, processes, and existing technology.",
        details: "Comprehensive discovery sessions, stakeholder interviews, and current-state capability maturity mapping."
    },
    {
        step: "02",
        title: "Plan",
        description: "Define priorities, scope, and a practical roadmap.",
        details: "Pragmatic milestone schedules, business case modeling, technology architecture options, and ROI metrics."
    },
    {
        step: "03",
        title: "Deliver",
        description: "Coordinate implementation and support your teams through change.",
        details: "Agile program governance, cross-functional delivery leadership, vendor alignment, and user adoption support."
    },
    {
        step: "04",
        title: "Improve",
        description: "Review outcomes and identify the next opportunities for improvement.",
        details: "Post-launch performance benchmarking, process optimization, value realization tracking, and continuous innovation."
    }
];

export default function BusinessTransformationPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
            {/* ── 1. Hero Section ── */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/business-transformation/hero.jpg"
                        alt="Business and Digital Transformation Services - NextPath Global"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 z-[1]" />

                {/* Ambient dynamic glow spheres */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[140px] pointer-events-none z-[2]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[150px] pointer-events-none z-[2]" />

                <div className="container mx-auto px-6 relative z-10 pt-36 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Eyebrow badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs sm:text-sm mb-6 backdrop-blur-md shadow-inner"
                        >
                            <Sparkles size={16} className="text-secondary" />
                            <span>Enterprise Advisory & Digital Solutions</span>
                        </motion.div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight">
                            Business & Digital <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                                Transformation Services
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl sm:text-2xl text-amber-200/90 font-medium mb-5 tracking-wide">
                            Your next step toward smarter business
                        </p>

                        {/* Intro lead */}
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                            Connect your business goals with the right strategy, technology, and execution. Nextpath Global helps organizations improve operations, navigate change, and turn transformation plans into practical results.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="#contact"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base sm:text-lg"
                            >
                                <MessageCircle size={20} />
                                Discuss Your Requirements
                            </a>
                            <Link
                                href="/book-appointment"
                                className="w-full sm:w-auto bg-secondary hover:bg-yellow-400 text-slate-950 font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base sm:text-lg"
                            >
                                <Calendar size={20} />
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Subtle bottom fade to content */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent z-[3]" />
            </section>

            {/* ── 2. Value Highlights Ribbon ── */}
            <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                            <Compass size={24} />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">Strategic Alignment</span>
                        <span className="text-xs text-slate-500 mt-1">Connecting goals with everyday actions</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-3">
                            <Cpu size={24} />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">AI & Automation</span>
                        <span className="text-xs text-slate-500 mt-1">Smart workflows & decision intelligence</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-3">
                            <Layers size={24} />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">Modern Architecture</span>
                        <span className="text-xs text-slate-500 mt-1">Scalable, cloud-ready systems</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                            <ShieldCheck size={24} />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">Digital Trust</span>
                        <span className="text-xs text-slate-500 mt-1">Robust governance & cybersecurity</span>
                    </div>
                </div>
            </section>

            {/* ── 3. Our Services Section (7 Pillars) ── */}
            <section className="py-24 container mx-auto px-6" id="services">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                        Comprehensive Capabilities
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Our Services
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        End-to-end consulting and technical advisory crafted to modernize your enterprise, empower your workforce, and accelerate digital adoption.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={`bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                                index === 6 ? "md:col-span-2 lg:col-span-1" : ""
                            }`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-secondary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                                        {service.icon}
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                        {service.badge}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                                    {service.lead}
                                </p>

                                <div className="border-t border-slate-100 pt-5">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                        Key Focus Areas:
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                                                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check size={13} strokeWidth={2.5} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-slate-100">
                                <a
                                    href="#contact"
                                    className="text-primary hover:text-primary-hover font-semibold text-sm inline-flex items-center gap-1.5 group/btn"
                                >
                                    <span>Consult on this area</span>
                                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── 4. How We Work Section ── */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
                            Proven Methodology
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                            How We Work
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            A structured, results-driven four-phase approach designed to minimize operational disruption and deliver sustainable business value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workSteps.map((step, idx) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-8 backdrop-blur-sm relative hover:border-secondary/50 transition-all group"
                            >
                                <div className="text-4xl sm:text-5xl font-black text-slate-700 group-hover:text-secondary/70 transition-colors mb-4 font-mono">
                                    {step.step}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-amber-200/90 font-medium text-sm mb-3">
                                    {step.description}
                                </p>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    {step.details}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. Take the Next Step (CTA & Booking Section) ── */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="contact">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden border border-slate-700/50">
                        {/* Ambient decorative glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                                Ready to Begin?
                            </span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                                Take the Next Step
                            </h2>

                            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-10">
                                Whether you are planning a transformation, modernizing technology, or exploring AI, start with a conversation about what your business needs.
                            </p>

                            {/* Direct WhatsApp Consultation Desks */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-left">
                                <a
                                    href="https://wa.me/601116695249?text=Hello%20NextPath%20Global,%20I%20would%20like%20to%20discuss%20Business%20&%20Digital%20Transformation%20Services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 p-5 rounded-2xl transition-all hover:-translate-y-1 group backdrop-blur-md"
                                >
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 text-white shadow-md">
                                        <MessageCircle size={20} />
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-0.5">Corporate Advisory</h4>
                                    <p className="text-secondary font-mono font-bold text-sm mb-1">+60 11 1669 5249</p>
                                    <span className="text-xs text-blue-200 group-hover:underline flex items-center gap-1">
                                        Chat on WhatsApp <ArrowRight size={12} />
                                    </span>
                                </a>

                                <a
                                    href="https://wa.me/60172965249?text=Hello%20NextPath%20Global,%20I%20am%20interested%20in%20your%20Digital%20Transformation%20advisory."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 p-5 rounded-2xl transition-all hover:-translate-y-1 group backdrop-blur-md"
                                >
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 text-white shadow-md">
                                        <MessageCircle size={20} />
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-0.5">Strategic Solutions</h4>
                                    <p className="text-secondary font-mono font-bold text-sm mb-1">+60 17 296 5249</p>
                                    <span className="text-xs text-blue-200 group-hover:underline flex items-center gap-1">
                                        Chat on WhatsApp <ArrowRight size={12} />
                                    </span>
                                </a>

                                <a
                                    href="https://wa.me/601125368220?text=Hello%20NextPath%20Global,%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20Technology%20Modernization."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 p-5 rounded-2xl transition-all hover:-translate-y-1 group backdrop-blur-md sm:col-span-2 md:col-span-1"
                                >
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 text-white shadow-md">
                                        <MessageCircle size={20} />
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-0.5">Tech & AI Advisory</h4>
                                    <p className="text-secondary font-mono font-bold text-sm mb-1">+60 11 2536 8220</p>
                                    <span className="text-xs text-blue-200 group-hover:underline flex items-center gap-1">
                                        Chat on WhatsApp <ArrowRight size={12} />
                                    </span>
                                </a>
                            </div>

                            {/* Dual Primary Booking CTAs */}
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <Link
                                    href="/book-appointment"
                                    className="w-full sm:w-auto bg-secondary hover:bg-yellow-400 text-slate-950 font-extrabold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-yellow-400/20 text-lg flex items-center justify-center gap-2"
                                >
                                    <Calendar size={20} />
                                    Book Appointment Now
                                </Link>

                                <a
                                    href="https://wa.me/601116695249?text=Hello%20NextPath%20Global,%20I%20would%20like%20to%20talk%20about%20Business%20Transformation."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-primary/30 text-lg flex items-center justify-center gap-2"
                                >
                                    <PhoneCall size={20} />
                                    Talk to Nextpath Global
                                </a>

                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 transition-all text-lg flex items-center justify-center gap-2"
                                >
                                    <Mail size={20} />
                                    Submit Online Inquiry
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
