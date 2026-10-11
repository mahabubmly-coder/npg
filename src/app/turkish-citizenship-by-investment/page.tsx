"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    Shield,
    Globe,
    Building2,
    Landmark,
    Users,
    Clock,
    FileCheck,
    ChevronDown,
    ChevronUp,
    MessageCircle,
    ArrowRight,
    Calculator,
    AlertCircle,
    MapPin,
    Phone,
    Scale,
    Sparkles,
    Check,
    Send
} from "lucide-react";
import { submitTurkishCitizenshipForm } from "@/app/actions";

export default function TurkishCitizenshipPage() {
    // Calculator state
    const [propertyPrice, setPropertyPrice] = useState<number>(400000);
    const [vatRate, setVatRate] = useState<number>(0.01); // 1% or 20%

    // Form state
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [pdpaAccepted, setPdpaAccepted] = useState(false);

    // FAQ Accordion state
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Calculations
    const vatAmount = Math.round(propertyPrice * vatRate);
    const titleDeedTax = Math.round(propertyPrice * 0.02); // 2% buyer share
    const legalNotaryValuation = Math.round(propertyPrice * 0.01); // 1%
    const fixedFees = 8000; // Legal ($5,000) + Translation & Notarisation ($2,000) + Bank service ($1,000)
    const estimatedTotal = propertyPrice + vatAmount + titleDeedTax + legalNotaryValuation + fixedFees;

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!pdpaAccepted) {
            setErrorMessage("Please accept the PDPA consent before submitting.");
            setFormStatus("error");
            return;
        }

        setFormStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        try {
            const result = await submitTurkishCitizenshipForm(formData);
            if (result.success) {
                setFormStatus("success");
            } else {
                setFormStatus("error");
                setErrorMessage(result.error || "Submission failed. Please contact us via WhatsApp.");
            }
        } catch (err) {
            setFormStatus("error");
            setErrorMessage("An unexpected error occurred. Please reach out via WhatsApp.");
        }
    };

    const faqs = [
        {
            q: "Is approval guaranteed?",
            a: "No one can guarantee it. The decision belongs to the Turkish authorities. What we can do is make sure your file is complete, correct and consistent, which is what keeps it moving."
        },
        {
            q: "Do I need to move to Türkiye?",
            a: "No. There's no minimum stay. You'll need one trip for biometrics, and after that it's your choice."
        },
        {
            q: "Will I lose money on the property?",
            a: "Property values can go up or down, and returns in US dollars also depend on the exchange rate. That's why we help you choose well-located, well-valued property and show you the real costs up front."
        },
        {
            q: "Can I pay in instalments?",
            a: "Payment terms depend on the property and current regulations. We'll explain the options for each shortlisted unit. The full qualifying amount must be paid and documented before the citizenship file is submitted."
        },
        {
            q: "Can I use the passport to enter Europe or the US visa-free?",
            a: "No. Schengen, the UK, the US and Canada still need visas. The passport's main benefits are across Asia, the Middle East and Latin America, and the right to live, work, and do business freely in Türkiye."
        },
        {
            q: "My child is 19. Are they included?",
            a: "Children under 18 are included in the same family application. Older children need their own independent application. Contact our team to explore tailored options."
        },
        {
            q: "What documents will I need?",
            a: "A valid passport, birth and marriage certificates, police clearance, and proof of funds, translated and attested. We'll give you a personalized step-by-step checklist upon consultation."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9] text-[#1E293B]">
            {/* HERO SECTION */}
            <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
                {/* Background Hero Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/citizenship/turkish-hero.jpg"
                        alt="Family on Istanbul terrace overlooking Bosphorus at golden hour"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    {/* Brand Navy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/60 backdrop-blur-[1px]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl py-12">
                    <div className="max-w-3xl">
                        {/* Gold Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/50 text-[#E5C961] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                            <Sparkles size={14} className="text-[#E5C961]" />
                            <span>Turkish Citizenship by Investment</span>
                        </div>

                        {/* Serif Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6 tracking-tight">
                            One Investment. <br className="hidden sm:inline" />
                            A Second Passport for Your Whole Family.
                        </h1>

                        {/* Clean Body Text */}
                        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                            Own property in Türkiye worth USD 400,000 and your family can apply for Turkish citizenship. Spouse and children under 18 are included. No requirement to live there. Your money stays in a real asset you can sell after three years.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                            <a
                                href="#consultation-form"
                                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C9A227] hover:bg-[#B8921F] text-[#0B1F3A] font-bold text-base shadow-lg shadow-[#C9A227]/20 transition-all transform hover:-translate-y-0.5 text-center"
                            >
                                <MessageCircle size={20} />
                                <span>Book a Private Consultation</span>
                            </a>
                            <a
                                href="#cost-breakdown"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/25 backdrop-blur-sm transition-all text-center"
                            >
                                <Calculator size={19} className="text-[#E5C961]" />
                                <span>Get the Full Cost Breakdown</span>
                            </a>
                        </div>

                        {/* Trust credentials line */}
                        <div className="pt-6 border-t border-white/15 flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                            <Shield className="text-[#C9A227] shrink-0" size={18} />
                            <span>Licensed consultancy · Offices in Kuala Lumpur &amp; Dhaka · Turkish legal and developer partners in Istanbul</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 · PROOF STRIP */}
            <section className="bg-[#0B1F3A] border-y border-[#C9A227]/30 py-8 relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center divide-x-0 md:divide-x divide-white/10">
                        <div className="p-3">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E5C961] mb-1">
                                USD 400K
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300 font-medium">
                                Minimum property value
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E5C961] mb-1">
                                Whole family
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300 font-medium">
                                Spouse + children under 18
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E5C961] mb-1">
                                0 days
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300 font-medium">
                                Required stay in Türkiye
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E5C961] mb-1">
                                110+
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300 font-medium">
                                Visa-free / VOA destinations
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 · THE PROBLEM */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <div className="inline-block text-[#C9A227] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3">
                        The Global Reality
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] leading-tight mb-8">
                        Your passport shouldn&apos;t decide where your family can go.
                    </h2>
                    <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-5 text-left md:text-center max-w-3xl mx-auto">
                        <p>
                            You&apos;ve built a business, a career and a future for your children. Then a visa queue, a rejected application or a sudden travel ban reminds you how much depends on one passport.
                        </p>
                        <p className="font-medium text-[#0B1F3A]">
                            A second citizenship gives your family options: easier travel, another place to live, study or do business, and a real Plan B if things change at home.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-left">
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-[#C9A227]/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                                <Globe size={24} className="text-[#C9A227]" />
                            </div>
                            <h3 className="font-serif font-bold text-lg text-[#0B1F3A] mb-2">Border Freedom</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Avoid tedious visa waits and scrutiny. Travel with dignity across Asia, Latin America, and the Middle East.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-[#C9A227]/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                                <Landmark size={24} className="text-[#C9A227]" />
                            </div>
                            <h3 className="font-serif font-bold text-lg text-[#0B1F3A] mb-2">Real Estate Asset</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Not a government donation. Your capital remains locked in tangible titled prime property in Istanbul.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-[#C9A227]/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                                <Users size={24} className="text-[#C9A227]" />
                            </div>
                            <h3 className="font-serif font-bold text-lg text-[#0B1F3A] mb-2">Family Security</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Protect your spouse and children for life. Permanent citizenship passed to future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 · WHY TÜRKIYE */}
            <section className="py-20 bg-[#F8FAFC] border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-14">
                        <div className="text-[#C9A227] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Programme Advantages
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
                            Why families choose Türkiye
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-1 divide-y divide-gray-100">
                            {[
                                {
                                    benefit: "Own an asset",
                                    desc: "Your money buys real property you can live in, rent out or use as a holiday home. It isn't a donation.",
                                    icon: Building2
                                },
                                {
                                    benefit: "Sell after 3 years",
                                    desc: "Once the 3-year hold ends you can sell. Your citizenship stays for life.",
                                    icon: Clock
                                },
                                {
                                    benefit: "Whole family, one file",
                                    desc: "Your spouse and children under 18 apply with you under the same investment.",
                                    icon: Users
                                },
                                {
                                    benefit: "No relocation",
                                    desc: "There's no minimum stay and no language test. Plan for one trip for biometrics.",
                                    icon: Shield
                                },
                                {
                                    benefit: "Travel further",
                                    desc: "Visa-free or visa-on-arrival access to 110+ destinations, including Japan, Singapore, South Korea, Hong Kong, Malaysia, Thailand, Qatar, Brazil and South Africa.",
                                    icon: Globe
                                },
                                {
                                    benefit: "A country you can actually live in",
                                    desc: "A G20 economy of 88M+ people. Istanbul has world-class hospitals, international schools and flights to 300+ destinations.",
                                    icon: Landmark
                                },
                                {
                                    benefit: "Full citizen rights",
                                    desc: "Live, work, study and run a business in Türkiye, with access to public healthcare and education.",
                                    icon: Scale
                                },
                            ].map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={idx} className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-[#FDFCF9] transition-colors">
                                        <div className="md:w-1/3 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center shrink-0">
                                                <IconComponent size={20} />
                                            </div>
                                            <span className="font-serif font-bold text-lg text-[#0B1F3A]">{item.benefit}</span>
                                        </div>
                                        <div className="md:w-2/3 text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {item.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 · IS IT RIGHT FOR YOU? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="text-[#C9A227] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Self Assessment
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
                            This is for you if…
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {[
                            "You have USD 450,000 or more in funds you can show came from legitimate sources",
                            "You're comfortable keeping the property for at least 3 years",
                            "You want stronger travel access and a genuine Plan B for your family",
                            "Your home country allows dual citizenship, or you've taken advice on what giving it up would mean"
                        ].map((point, index) => (
                            <div key={index} className="p-5 rounded-xl bg-[#F8FAFC] border border-gray-200/80 flex items-start gap-3.5">
                                <div className="w-6 h-6 rounded-full bg-[#C9A227]/15 text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5">
                                    <Check size={16} className="stroke-[3]" />
                                </div>
                                <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{point}</span>
                            </div>
                        ))}
                    </div>

                    {/* Honest Note Callout */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1F3A] text-white border-l-4 border-[#C9A227]">
                        <div className="flex items-center gap-3 mb-3 text-[#E5C961]">
                            <AlertCircle size={22} />
                            <h3 className="font-serif font-bold text-lg sm:text-xl">
                                Honest note for Malaysian &amp; Bangladeshi applicants
                            </h3>
                        </div>
                        <div className="text-gray-200 text-sm sm:text-base leading-relaxed space-y-3">
                            <p>
                                <strong>Malaysian citizens:</strong> Malaysia does not allow dual citizenship. If you are a Malaysian citizen, talk to us and an independent lawyer before you apply. If you are a permanent resident (PR), expatriate, or foreign business owner based in Malaysia, this restriction does not apply to your Malaysian residency status.
                            </p>
                            <p>
                                <strong>Bangladeshi applicants:</strong> We will help you check the current dual-citizenship rules and Government Certificate process first to ensure your application is completely legally compliant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6 · HOW IT WORKS */}
            <section className="py-20 bg-[#0B1F3A] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="text-[#E5C961] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Step-by-Step Roadmap
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                            From first call to passport in 5 clear steps
                        </h2>
                    </div>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:left-7 md:before:left-1/2 before:w-0.5 before:bg-[#C9A227]/30 before:hidden md:before:block">
                        {[
                            {
                                step: "1",
                                title: "Private consultation",
                                desc: "We check eligibility, dual-citizenship position, family members and documents. You get an honest yes or no."
                            },
                            {
                                step: "2",
                                title: "Property shortlist and real cost",
                                desc: "Citizenship-eligible properties in Istanbul, each with its all-in cost: taxes, legal fees and valuation. A small deposit (around 1%) reserves your chosen unit."
                            },
                            {
                                step: "3",
                                title: "Valuation, payment and title deed",
                                desc: "A licensed valuation confirms eligibility before full payment. Funds go by bank transfer directly to the seller. Your title deed is issued with the 3-year annotation."
                            },
                            {
                                step: "4",
                                title: "Documents and biometrics",
                                desc: "We prepare and attest your family documents in Dhaka or Kuala Lumpur. One trip to Türkiye for fingerprints and your residence permit."
                            },
                            {
                                step: "5",
                                title: "Citizenship approval and passports",
                                desc: "The file is submitted and approved by the Turkish authorities. Collect your IDs and passports in Türkiye or at a Turkish consulate. Typical timeline: about 6 months."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex flex-col md:flex-row items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[#C9A227]/50 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#C9A227] text-[#0B1F3A] font-serif font-bold text-xl flex items-center justify-center shrink-0">
                                    {item.step}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif font-bold text-xl text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#consultation-form"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C9A227] hover:bg-[#B8921F] text-[#0B1F3A] font-bold text-base shadow-lg transition-transform transform hover:-translate-y-0.5"
                        >
                            <span>Start with a Private Consultation</span>
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 7 · TRANSPARENT PRICING & INTERACTIVE CALCULATOR */}
            <section id="cost-breakdown" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-14">
                        <div className="text-[#C9A227] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Transparent Investment
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] mb-4">
                            What it really costs, with no hidden surprises
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base">
                            Most agents only quote USD 400,000. Here&apos;s the full picture, using indicative figures from our Turkish legal partners:
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mb-12 rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0B1F3A] text-white">
                                    <th className="p-4 sm:p-5 font-serif font-semibold text-sm sm:text-base">Fee Item</th>
                                    <th className="p-4 sm:p-5 font-serif font-semibold text-sm sm:text-base text-right">USD 400,000 property</th>
                                    <th className="p-4 sm:p-5 font-serif font-semibold text-sm sm:text-base text-right">USD 500,000 property</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 font-medium text-gray-900">Property price</td>
                                    <td className="p-4 sm:p-5 text-right font-semibold text-gray-900">USD 400,000</td>
                                    <td className="p-4 sm:p-5 text-right font-semibold text-gray-900">USD 500,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 text-gray-700">VAT (1%)*</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 4,000</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 5,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 text-gray-700">Title deed tax, buyer share (2%)</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 8,000</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 10,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 text-gray-700">Notary, valuation and legal charges (1%)</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 4,000</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 5,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 text-gray-700">Citizenship legal fee, whole family</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 5,000</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 5,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 text-gray-700">Translation and notarisation</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 2,000</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 2,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50/80">
                                    <td className="p-4 sm:p-5 text-gray-700">Local bank account service</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 1,000</td>
                                    <td className="p-4 sm:p-5 text-right text-gray-700">USD 1,000</td>
                                </tr>
                                <tr className="bg-[#FAF5E4] font-bold text-[#0B1F3A]">
                                    <td className="p-4 sm:p-5 font-serif text-base sm:text-lg">Estimated total</td>
                                    <td className="p-4 sm:p-5 text-right text-base sm:text-lg text-[#C9A227]">USD 424,000</td>
                                    <td className="p-4 sm:p-5 text-right text-base sm:text-lg text-[#C9A227]">USD 528,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mb-12 leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                        *VAT is 20% on units with more than 150 m² net area and on commercial property. An exemption may apply to your first Turkish property. Title deed tax is normally 4% and is often shared with the seller on new projects. Final figures are confirmed in writing per property. NextPath&apos;s consultancy fee is quoted separately and in writing before you commit.
                    </p>

                    {/* INTERACTIVE COST CALCULATOR */}
                    <div className="bg-[#F8FAFC] rounded-2xl border-2 border-[#C9A227]/30 p-6 sm:p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-[#E5C961] flex items-center justify-center">
                                <Calculator size={20} />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-xl text-[#0B1F3A]">
                                    Interactive Cost Calculator
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500">
                                    Estimate all-in costs dynamically based on your target property budget
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Property Price:</label>
                                        <span className="text-lg font-bold font-serif text-[#0B1F3A]">
                                            USD {propertyPrice.toLocaleString()}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="400000"
                                        max="1000000"
                                        step="10000"
                                        value={propertyPrice}
                                        onChange={(e) => setPropertyPrice(Number(e.target.value))}
                                        className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>USD 400K (Minimum)</span>
                                        <span>USD 1M+</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Property Classification / VAT:
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setVatRate(0.01)}
                                            className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all ${
                                                vatRate === 0.01
                                                    ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-sm"
                                                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            Standard / &lt;150m² (1% VAT)
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setVatRate(0.20)}
                                            className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold text-center transition-all ${
                                                vatRate === 0.20
                                                    ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-sm"
                                                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            Commercial / &gt;150m² (20% VAT)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Live Output Card */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
                                <div className="text-xs uppercase tracking-wider font-semibold text-[#C9A227] pb-1 border-b border-gray-100">
                                    Detailed Cost Breakdown
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Property Value:</span>
                                    <span className="font-medium text-gray-900">USD {propertyPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Estimated VAT ({Math.round(vatRate * 100)}%):</span>
                                    <span className="font-medium text-gray-900">USD {vatAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Title Deed Tax (2% Buyer Share):</span>
                                    <span className="font-medium text-gray-900">USD {titleDeedTax.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Valuation &amp; Notary (1%):</span>
                                    <span className="font-medium text-gray-900">USD {legalNotaryValuation.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Family Legal, Translation &amp; Banking:</span>
                                    <span className="font-medium text-gray-900">USD {fixedFees.toLocaleString()}</span>
                                </div>
                                <div className="pt-3 border-t-2 border-[#0B1F3A]/10 flex justify-between items-baseline">
                                    <span className="font-bold text-gray-900">Estimated Total:</span>
                                    <span className="font-serif font-bold text-2xl text-[#C9A227]">
                                        USD {estimatedTotal.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8 · WHY NEXTPATH GLOBAL */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="text-[#C9A227] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Integrity &amp; Local Presence
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
                            Why families trust NextPath Global
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Face-to-face, close to home",
                                desc: "Meet us at Level 41, The Intermark Vista Tower in Kuala Lumpur, or at our Dhaka office. You don't have to rely on someone you only know from WhatsApp.",
                                icon: MapPin
                            },
                            {
                                title: "Licensed and registered",
                                desc: "NextPath Global Sdn Bhd, ROC 1637994-A / SSM 202501036584. Fully compliant corporate advisory.",
                                icon: Shield
                            },
                            {
                                title: "Honesty first",
                                desc: "We tell you about the dual-citizenship question, the real costs and the risks up front. We never promise approval or guaranteed profit.",
                                icon: Scale
                            },
                            {
                                title: "Your money goes to the seller",
                                desc: "Property payments go by bank transfer directly to the seller's account, with zero cash handling and no middlemen.",
                                icon: Landmark
                            },
                            {
                                title: "End-to-end, then beyond",
                                desc: "Documents, legal coordination and passport collection, plus rental management, furnishing and insurance through our Istanbul partners.",
                                icon: FileCheck
                            },
                            {
                                title: "Your language",
                                desc: "Dedicated senior advisors speaking Bengali, English, and Bahasa Melayu.",
                                icon: Users
                            }
                        ].map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={idx} className="bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#C9A227]/40 shadow-sm hover:shadow transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 text-[#C9A227] flex items-center justify-center mb-5">
                                        <IconComponent size={22} />
                                    </div>
                                    <h3 className="font-serif font-bold text-lg text-[#0B1F3A] mb-3">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 9 · FAQ */}
            <section className="py-20 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-14">
                        <div className="text-[#C9A227] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Clear Answers
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A]">
                            Questions we hear every week
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-serif font-bold text-base sm:text-lg text-[#0B1F3A] hover:bg-gray-50/60 transition-colors"
                                    aria-expanded={openFaq === index}
                                >
                                    <span>{faq.q}</span>
                                    {openFaq === index ? (
                                        <ChevronUp size={20} className="text-[#C9A227] shrink-0" />
                                    ) : (
                                        <ChevronDown size={20} className="text-gray-400 shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FDFCF9]">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 10 · FINAL CTA & LEAD FORM */}
            <section id="consultation-form" className="py-20 bg-[#0B1F3A] text-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <div className="text-[#E5C961] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
                            Take The First Step
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            Give your family more options, starting with one conversation.
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                            Book a private, no-obligation consultation. In 30 minutes you&apos;ll know whether Turkish citizenship fits your family, your all-in budget, and your next step.
                        </p>

                        {/* Direct WhatsApp Quick Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            <a
                                href="https://wa.me/60172965249?text=Hi%20NextPath%20Global%2C%20I%20would%20like%20to%20book%20a%20private%20consultation%20regarding%20Turkish%20Citizenship%20by%20Investment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm transition-transform transform hover:-translate-y-0.5 shadow-md"
                            >
                                <MessageCircle size={18} />
                                <span>WhatsApp Kuala Lumpur (+60 17-296 5249)</span>
                            </a>
                            <a
                                href="https://wa.me/8801402179802?text=Hi%20NextPath%20Global%2C%20I%20would%20like%20to%20book%20a%20private%20consultation%20regarding%20Turkish%20Citizenship%20by%20Investment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-transform transform hover:-translate-y-0.5"
                            >
                                <MessageCircle size={18} className="text-[#E5C961]" />
                                <span>WhatsApp Dhaka (+880 1402-179802)</span>
                            </a>
                        </div>
                    </div>

                    {/* Lead Form Card */}
                    <div className="bg-white text-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto border border-gray-100">
                        <div className="mb-6 pb-4 border-b border-gray-100">
                            <h3 className="font-serif font-bold text-2xl text-[#0B1F3A]">
                                Request a Confidential Consultation
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Complete this brief form and our senior citizenship advisor will get back to you within 24 hours.
                            </p>
                        </div>

                        {formStatus === "success" ? (
                            <div className="p-8 text-center bg-[#FAF5E4] rounded-2xl border border-[#C9A227]/40">
                                <div className="w-14 h-14 rounded-full bg-[#C9A227] text-white flex items-center justify-center mx-auto mb-4">
                                    <Check size={28} className="stroke-[3]" />
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-[#0B1F3A] mb-2">
                                    Consultation Request Received
                                </h4>
                                <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base mb-6 leading-relaxed">
                                    Thank you. Our senior partner will review your enquiry and contact you on WhatsApp to coordinate your private session.
                                </p>
                                <a
                                    href="https://wa.me/60172965249?text=Hi%20NextPath%20Global%2C%20I%20just%20submitted%20a%20Turkish%20Citizenship%20consultation%20request%20on%20your%20website."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1F3A] text-white font-semibold text-sm hover:bg-[#071527] transition-colors"
                                >
                                    <MessageCircle size={18} className="text-[#E5C961]" />
                                    <span>Connect immediately on WhatsApp</span>
                                </a>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                {formStatus === "error" && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="e.g. Mahabub Hasan"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            WhatsApp Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            required
                                            placeholder="e.g. +60 17 296 5249"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Country of Citizenship *
                                        </label>
                                        <input
                                            type="text"
                                            name="citizenship"
                                            required
                                            placeholder="e.g. Bangladesh / Malaysia / Other"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Country of Current Residence
                                        </label>
                                        <input
                                            type="text"
                                            name="residence"
                                            placeholder="e.g. Malaysia / Bangladesh / UAE"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Family Members
                                        </label>
                                        <select
                                            name="familyMembers"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm bg-white"
                                        >
                                            <option value="Single applicant">Single applicant</option>
                                            <option value="Couple (Spouse)">Couple (Spouse)</option>
                                            <option value="Family of 3-4">Family of 3-4</option>
                                            <option value="Family of 5+">Family of 5+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Budget Range
                                        </label>
                                        <select
                                            name="budget"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm bg-white"
                                        >
                                            <option value="USD 400,000 – 500,000">USD 400,000 – 500,000</option>
                                            <option value="USD 500,000 – 750,000">USD 500,000 – 750,000</option>
                                            <option value="USD 750,000+">USD 750,000+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Preferred Office
                                        </label>
                                        <select
                                            name="office"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm bg-white"
                                        >
                                            <option value="Kuala Lumpur (The Intermark)">Kuala Lumpur (The Intermark)</option>
                                            <option value="Dhaka Office">Dhaka Office</option>
                                            <option value="Online Video Consultation">Online Video Consultation</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                        Email Address (Optional)
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0B1F3A] text-sm"
                                    />
                                </div>

                                <div className="pt-2">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={pdpaAccepted}
                                            onChange={(e) => setPdpaAccepted(e.target.checked)}
                                            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0B1F3A] focus:ring-[#0B1F3A]"
                                            required
                                        />
                                        <span className="text-xs text-gray-600 leading-relaxed">
                                            I consent to NextPath Global processing my information in accordance with the Malaysian Personal Data Protection Act 2010 (PDPA) and contacting me regarding citizenship advisory. View our <Link href="/privacy" className="text-[#0B1F3A] underline font-medium hover:text-[#C9A227]">Privacy Policy</Link>.
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === "loading"}
                                    className="w-full py-4 rounded-xl bg-[#0B1F3A] hover:bg-[#071527] text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    {formStatus === "loading" ? (
                                        <span>Submitting...</span>
                                    ) : (
                                        <>
                                            <Send size={18} className="text-[#E5C961]" />
                                            <span>Request Private Consultation</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Office Locations Strip */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 pt-12 border-t border-white/10 text-sm">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2 font-serif font-bold text-lg text-[#E5C961] mb-2">
                                <MapPin size={18} />
                                <span>Kuala Lumpur Office</span>
                            </div>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak, Kampung Datuk Keramat, 50400 Kuala Lumpur
                            </p>
                            <p className="text-gray-400 text-xs">
                                WhatsApp: +60 11-1669 5249 · +60 17-296 5249 · Hours: 10:00 am – 8:00 pm
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2 font-serif font-bold text-lg text-[#E5C961] mb-2">
                                <MapPin size={18} />
                                <span>Dhaka Office</span>
                            </div>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                House No. 18, Road No. 11, Dhaka 1229, Bangladesh
                            </p>
                            <p className="text-gray-400 text-xs">
                                WhatsApp: +880 1402-179802 · +880 1410-237495 · Hours: 10:00 am – 6:00 pm
                            </p>
                        </div>
                    </div>

                    <div className="text-center text-xs text-gray-400 mt-8">
                        nextpathglobal.my · NextPath Global Sdn Bhd (ROC: 1637994-A / SSM 202501036584)
                    </div>
                </div>
            </section>

            {/* FOOTER DISCLAIMER */}
            <section className="py-8 bg-[#071527] text-gray-400 text-xs border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl leading-relaxed text-center">
                    Information on this page is general and doesn&apos;t constitute legal, tax or investment advice. Citizenship approval is at the sole discretion of the Republic of Türkiye. Programme rules, taxes and visa-free access may change. Property values can go down as well as up. Figures are indicative as of October 2026 and are confirmed in writing for each client.
                </div>
            </section>
        </div>
    );
}
