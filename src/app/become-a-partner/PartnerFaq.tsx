"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
    highlight?: string;
}

const FAQ_DATA: FaqItem[] = [
    {
        question: "Is there any fee or financial commitment to join?",
        answer: "No, absolutely not. Applying to become an education partner with NextPath Global is 100% free. There are zero onboarding fees, zero monthly software dues, and no upfront charges whatsoever. We operate strictly on a success-sharing model.",
        highlight: "100% Free — zero onboarding or membership costs",
    },
    {
        question: "How and when are partner commissions disbursed?",
        answer: "Commissions are disbursed promptly via direct local bank transfer or international wire once the referred student's tuition fees have been verified and their visa/enrollment is officially cleared by the university or immigration authority. You receive an itemized commission statement for every student intake.",
        highlight: "Paid promptly upon student enrollment confirmation via direct bank transfer",
    },
    {
        question: "Do I need a registered corporate company to partner?",
        answer: "No registered company is required. We actively collaborate with individual teachers, school tutors, university professors, and independent counselors, as well as registered coaching centers, academies, and established education consultancies. We issue legal B2B partner agreements tailored to your individual or corporate status.",
        highlight: "Open to both individual educators and registered agencies",
    },
    {
        question: "How long does the application approval and onboarding take?",
        answer: "Our Partner Operations team reviews every application thoroughly and contacts you within 24 to 48 business hours via WhatsApp or email. Once we align on target study programs and sign our standard partnership MOU, you can start introducing prospective students immediately.",
        highlight: "Fast 24 to 48 hours response time",
    },
    {
        question: "Who handles the student's counselling, documents, and visa paperwork?",
        answer: "NextPath Global handles the heavy lifting! Our in-house licensed admissions and visa documentation team takes full charge of university liaisons, qualification assessments, EMGS visa submissions (for Malaysia), embassy filings, offer letter follow-ups, and student accommodation arrangements. You introduce the student and maintain the mentor relationship — we execute the paperwork.",
        highlight: "NextPath handles complete end-to-end admissions & student visa processing",
    },
    {
        question: "Can I refer students for programs other than Malaysia (e.g. Europe, China, or Residency)?",
        answer: "Yes! In addition to our premier network of 50+ Malaysian universities (Sunway, APU, Taylor's, UCSI, MAHSA, etc.), partners can refer students for accredited European institutions (Spain, Romania, Czech Republic), premier Chinese universities (clinical medicine / MBBS, engineering, business scholarships), and residency pathways like MM2H and PVIP.",
        highlight: "Comprehensive portfolio covering Malaysia, Spain, Europe, China & Residency",
    },
    {
        question: "What promotional materials and assistance do I receive?",
        answer: "You receive official digital brochures, tuition fee sheets, scholarship guides, program brochures, and presentation decks. Additionally, you are assigned a dedicated Partner Manager whom you can reach on WhatsApp for rapid university entry queries, course fee checks, and offer letter updates.",
        highlight: "Full turnkey marketing collateral and dedicated Partner Relations Manager",
    },
    {
        question: "What is the status of the automated Agent & Partner Portal dashboard?",
        answer: "We are currently engineering a robust digital self-service dashboard for our global partner network to log student leads, track admissions workflows in real-time, and manage commission invoices. While the web portal is in final testing, our partner desk provides dedicated, high-touch manual processing so you can refer and earn without delay.",
        highlight: "Portal in active rollout; full high-touch partner desk active today",
    },
];

export default function PartnerFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="space-y-4 max-w-4xl mx-auto">
            {FAQ_DATA.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={item.question}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                            isOpen
                                ? "bg-white border-primary/40 shadow-md ring-1 ring-primary/10"
                                : "bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white"
                        }`}
                    >
                        <button
                            type="button"
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                            className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                        >
                            <div className="flex items-start gap-3.5">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                    isOpen ? "bg-primary text-white" : "bg-blue-50 text-primary"
                                }`}>
                                    <HelpCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                                        {item.question}
                                    </h4>
                                    {item.highlight && !isOpen && (
                                        <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                                            <span>{item.highlight}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180 bg-blue-100 text-primary" : "text-gray-400 bg-gray-100"
                            }`}>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </button>

                        {isOpen && (
                            <div className="px-5 pb-6 sm:px-6 pt-0 animate-fadeIn text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100 mt-2">
                                <p className="pt-3">{item.answer}</p>
                                {item.highlight && (
                                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Key takeaway: {item.highlight}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
