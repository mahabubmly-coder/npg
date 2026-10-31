"use client";

import React, { useState } from "react";
import { submitPartnerApplication } from "@/app/actions";
import { CheckCircle2, AlertCircle, Loader2, Send, MessageCircle, Sparkles, Building, User, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";

const ROLE_OPTIONS = [
    "Teacher or Private Tutor",
    "Lecturer, Professor or Academic Trainer",
    "Education Consultant or Student Counsellor",
    "School or College Administrator / Principal",
    "Education Agency / Coaching Center Representative",
    "Other Education Professional",
];

const REACH_OPTIONS = [
    "1 – 5 students per year",
    "6 – 15 students per year",
    "16 – 30 students per year",
    "30+ students per year",
];

const PROGRAM_OPTIONS = [
    "Study in Malaysia (Universities & Colleges)",
    "Study in Spain & Europe",
    "Study in China (Scholarships & MBBS)",
    "Residency & Migration (MM2H / PVIP / Work Permits)",
    "All Study Abroad & Residency Programs",
];

export default function PartnerApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedPrograms, setSelectedPrograms] = useState<string[]>([
        "Study in Malaysia (Universities & Colleges)",
    ]);
    const [submittedName, setSubmittedName] = useState("");
    const [submittedPhone, setSubmittedPhone] = useState("");

    const toggleProgram = (prog: string) => {
        if (selectedPrograms.includes(prog)) {
            if (selectedPrograms.length > 1) {
                setSelectedPrograms(selectedPrograms.filter((p) => p !== prog));
            }
        } else {
            setSelectedPrograms([...selectedPrograms, prog]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.set("destinations", selectedPrograms.join(", "));

        const name = (formData.get("name") as string) || "";
        const phone = (formData.get("phone") as string) || "";
        setSubmittedName(name);
        setSubmittedPhone(phone);

        try {
            const result = await submitPartnerApplication(formData);
            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Failed to submit your application. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("An unexpected error occurred. Please contact us directly via WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === "success") {
        const waText = encodeURIComponent(
            `Hello NextPath Global! My name is ${submittedName}. I have just submitted my Partner Application on your website and would like to connect with your Partner Relations team.`
        );
        const waLink = `https://wa.me/601116695249?text=${waText}`;

        return (
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-xl text-center animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> Application Received
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Thank You, {submittedName}!
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto text-base sm:text-lg mb-6 leading-relaxed">
                    Your partner application has been successfully logged with our Senior Partner Relations Desk.
                    We review every submission carefully and will get in touch with you via WhatsApp ({submittedPhone || "your provided number"}) or email within <strong className="text-gray-900">24 to 48 business hours</strong>.
                </p>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 max-w-md mx-auto mb-6 text-sm text-gray-600 text-left space-y-2">
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                        <span>⚡ Next Steps:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                        <li>Direct review by our Regional Partner Coordinator</li>
                        <li>Digital Partner Prospectus & Commission Guide sent to you</li>
                        <li>Introductory call to align on student pathways & support</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp Now
                    </a>
                    <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="w-full sm:w-auto px-6 py-3.5 text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold rounded-xl transition-colors"
                    >
                        Submit Another Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-xl space-y-6"
            noValidate={false}
        >
            <div className="border-b border-gray-100 pb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5" /> B2B Partner Onboarding
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Partner Registration Form
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    Takes only ~3 minutes. Free to apply. We reply to every applicant.
                </p>
            </div>

            {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-800 text-sm">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="font-semibold">Submission Issue</p>
                        <p className="mt-0.5">{errorMessage}</p>
                        <div className="mt-2">
                            <a
                                href="https://wa.me/601116695249?text=Hello%20NextPath%20Global,%20I%20am%20having%20trouble%20submitting%20the%20Partner%20Application%20form"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-red-900 hover:underline text-xs"
                            >
                                <MessageCircle className="w-3.5 h-3.5" /> Contact via WhatsApp instead →
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="partner-name" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            id="partner-name"
                            name="name"
                            type="text"
                            required
                            placeholder="e.g. Dr. Tan Wei Ming / Prof. Rahman"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="partner-email" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Work / Primary Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            id="partner-email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@institution.com or personal"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Row 2: Phone / WhatsApp & Country/City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="partner-phone" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        WhatsApp / Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            id="partner-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="e.g. +60 12-345 6789 or +880 17..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                    <span className="text-[12px] text-gray-400 mt-1 block">Include your country code for fast WhatsApp communication.</span>
                </div>

                <div>
                    <label htmlFor="partner-location" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Country & City of Residence <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            id="partner-location"
                            name="location"
                            type="text"
                            required
                            placeholder="e.g. Kuala Lumpur, Malaysia or Dhaka, BD"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Row 3: Role & Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="partner-role" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        What is your primary role? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Briefcase className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                            id="partner-role"
                            name="role"
                            required
                            defaultValue=""
                            className="w-full pl-10 pr-8 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Select your profession / role</option>
                            {ROLE_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="partner-experience" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Years of Experience in Education <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <GraduationCap className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                            id="partner-experience"
                            name="experience"
                            type="number"
                            min="0"
                            max="50"
                            required
                            placeholder="e.g. 5"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Reach Estimate */}
            <div>
                <label htmlFor="partner-reach" className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Estimated Student or Referral Reach (Annual)
                </label>
                <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                        id="partner-reach"
                        name="reach"
                        defaultValue={REACH_OPTIONS[1]}
                        className="w-full pl-10 pr-8 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer"
                    >
                        {REACH_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
                <span className="text-[12px] text-gray-400 mt-1 block">A rough estimate is fine. There are no minimum quotas.</span>
            </div>

            {/* Programs of Interest */}
            <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Programs / Destinations of Interest to Your Students
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PROGRAM_OPTIONS.map((prog) => {
                        const isSelected = selectedPrograms.includes(prog);
                        return (
                            <button
                                type="button"
                                key={prog}
                                onClick={() => toggleProgram(prog)}
                                className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                                    isSelected
                                        ? "border-primary bg-blue-50/70 text-primary font-semibold shadow-sm"
                                        : "border-gray-200 bg-gray-50/40 text-gray-700 hover:border-gray-300"
                                }`}
                            >
                                <span>{prog}</span>
                                <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                                    isSelected ? "bg-primary border-primary text-white" : "border-gray-300 bg-white"
                                }`}>
                                    {isSelected && <span className="text-[10px]">✓</span>}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Why do you want to join */}
            <div>
                <label htmlFor="partner-why" className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Why do you want to join NextPath Global? (Optional)
                </label>
                <textarea
                    id="partner-why"
                    name="why"
                    rows={3}
                    placeholder="Tell us a little about your student network, your current teaching/counseling background, or specific programs you'd like to collaborate on..."
                    className="w-full p-3.5 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-y"
                />
                <span className="text-[12px] text-gray-400 mt-1 block">A few sentences are more than enough.</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting Your Application...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            <span>Submit Partner Application</span>
                        </>
                    )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                    🔒 By submitting, you agree to our privacy policy. Your information is kept strictly confidential and never shared with third parties.
                </p>
            </div>
        </form>
    );
}
