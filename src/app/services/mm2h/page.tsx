"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Clock,
    Users,
    Car,
    Home,
    Globe,
    HeartPulse,
    FileCheck,
    CheckCircle,
    MessageCircle,
    Mail,
    ArrowRight,
    ShieldCheck,
    Briefcase
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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

export default function MM2H() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden" ref={ref}>
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20 relative">
                <motion.div
                    style={{ y }}
                    className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
                    >
                        Premium Residency Programme
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        MM2H – Malaysia <span className="text-primary">My Second Home</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Live, retire, or invest in Malaysia with the MM2H Programme! Get a 10-year renewable visa and enjoy the benefits of calling Malaysia your second home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Apply Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#requirements"
                            className="bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary font-bold py-4 px-8 rounded-full transition-all hover:shadow-md flex items-center justify-center gap-2"
                        >
                            Check Requirements
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* What is MM2H */}
            <section className="bg-gray-50 py-20 mb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What is MM2H?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Malaysia My Second Home (MM2H) is a long-term residency programme that allows foreigners to live in Malaysia for up to 10 years (renewable).
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                It is perfect for retirees, investors, and those seeking a better quality of life in a tropical paradise with affordable living costs.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="relative h-[300px] rounded-2xl shadow-xl border border-gray-100 overflow-hidden group"
                        >
                            <img
                                src="/assets/mm2h/mm2h-hero.png"
                                alt="Malaysia My Second Home"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Programme Benefits</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enjoy exclusive privileges as an MM2H pass holder.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {[
                        {
                            icon: <Clock size={32} />,
                            title: "10-Year Visa",
                            desc: "Stay in Malaysia for up to 10 years, renewable indefinitely."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "Family Inclusion",
                            desc: "Bring your spouse, unmarried children under 21, and parents."
                        },
                        {
                            icon: <Car size={32} />,
                            title: "Tax-Free Car",
                            desc: "Import one duty-free car or buy a locally-assembled car tax-free."
                        },
                        {
                            icon: <Home size={32} />,
                            title: "Property Purchase",
                            desc: "Buy unlimited properties with no additional approvals needed."
                        },
                        {
                            icon: <Globe size={32} />,
                            title: "Multiple Entry",
                            desc: "No restrictions on entry/exit – come and go as you please."
                        },
                        {
                            icon: <HeartPulse size={32} />,
                            title: "World-Class Healthcare",
                            desc: "Access Malaysia’s excellent private healthcare at affordable prices."
                        }
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Financial Requirements */}
            <section id="requirements" className="container mx-auto px-4 md:px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 text-white py-20 rounded-3xl shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Requirements (2025)</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Applicants must meet the following financial criteria.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="py-4 px-6 text-lg font-semibold text-primary">Category</th>
                                        <th className="py-4 px-6 text-lg font-semibold text-primary">Liquid Assets</th>
                                        <th className="py-4 px-6 text-lg font-semibold text-primary">Fixed Deposit (Malaysia)</th>
                                        <th className="py-4 px-6 text-lg font-semibold text-primary">Monthly Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="border-b border-gray-800 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-6 px-6 font-medium">Under 50 years</td>
                                        <td className="py-6 px-6 text-gray-300">RM 500,000</td>
                                        <td className="py-6 px-6 text-gray-300">RM 300,000</td>
                                        <td className="py-6 px-6 text-gray-300">RM 40,000</td>
                                    </motion.tr>
                                    <motion.tr
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-6 px-6 font-medium">50 years & above</td>
                                        <td className="py-6 px-6 text-gray-300">RM 500,000</td>
                                        <td className="py-6 px-6 text-gray-300">RM 300,000</td>
                                        <td className="py-6 px-6 text-gray-300">RM 40,000</td>
                                    </motion.tr>
                                </tbody>
                            </table>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="max-w-4xl mx-auto mt-8 p-6 bg-white/10 rounded-xl border border-white/10 flex items-start gap-4 backdrop-blur-sm"
                        >
                            <div className="text-primary mt-1"><Briefcase size={24} /></div>
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="font-bold text-white">Note:</span> After 1 year, you can withdraw up to RM 50,000 from the fixed deposit for approved purposes (property purchase, medical expenses, or children's education).
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Documents & Process */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Required Documents */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <FileCheck className="text-primary" /> Required Documents
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Valid Passport – All pages copy, minimum 18 months validity",
                                "Bank Statements – Last 3 months showing required liquid assets",
                                "Income Proof – Employment letter, pension statements, or business documents",
                                "Medical Report – From any registered hospital/clinic",
                                "Police Clearance – From home country (notarized)",
                                "Marriage Certificate – If applying with spouse (English version)",
                                "Birth Certificates – For dependent children",
                                "Passport Photos – Recent photos, white background",
                                "Resume/CV – Educational and professional background"
                            ].map((doc, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <div className="mt-1 min-w-5 text-primary">
                                        <CheckCircle size={20} />
                                    </div>
                                    <span className="text-gray-700">{doc}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Application Process */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <ShieldCheck className="text-primary" /> Application Process
                        </h2>
                        <div className="relative border-l-2 border-primary/20 ml-4 space-y-12">
                            {[
                                {
                                    step: "1",
                                    title: "Eligibility Check",
                                    desc: "Free consultation to verify financial and eligibility requirements"
                                },
                                {
                                    step: "2",
                                    title: "Document Prep",
                                    desc: "Complete document collection and verification assistance"
                                },
                                {
                                    step: "3",
                                    title: "Submission",
                                    desc: "Professional application submission to MM2H Centre"
                                },
                                {
                                    step: "4",
                                    title: "Approval & Pass",
                                    desc: "Receive conditional approval, open FD, collect MM2H pass"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative pl-10"
                                >
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-4 border-primary flex items-center justify-center font-bold text-gray-900 shadow-sm z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-2 text-gray-900 font-bold">
                                <Clock className="text-primary" size={20} /> Processing Time
                            </div>
                            <p className="text-gray-600">6-12 months | Pass Validity: 10 years (renewable)</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us & CTA */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                    >
                        Why Choose NextPath Global?
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    >
                        {[
                            "Expert MM2H Consultants",
                            "End-to-End Support",
                            "Bank Account Assistance",
                            "Property Guidance",
                            "Post-Approval Services",
                            "High Success Rate"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 hover:shadow-md transition-shadow"
                            >
                                <CheckCircle className="text-primary" size={20} />
                                <span className="font-medium text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Make Malaysia Your Second Home</h3>
                        <p className="text-gray-600 mb-8 text-lg">
                            Let NextPath Global guide you through the MM2H application. Expert consultation, complete support, and a high success rate.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/1234567890"
                                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={24} /> WhatsApp Us Now
                            </motion.a>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                                >
                                    <Mail size={24} /> Free Consultation
                                </motion.button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-500">
                            NextPath Global Sdn Bhd – Your trusted MM2H partner since 2019 🇲🇾
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
