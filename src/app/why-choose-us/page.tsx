import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Why Choose Us - Next Path Global",
    description: "Discover why students and travelers trust NextPath Global for education consultancy and travel services. Personalized guidance, trusted expertise, and comprehensive support.",
};

export default function WhyChooseUsPage() {
    const reasons = [
        {
            title: "Personalized Guidance",
            description: "Every student and traveler has unique dreams. We take the time to understand your goals and provide tailored solutions."
        },
        {
            title: "Trusted Expertise",
            description: "With years of experience in education consultancy and travel services, we ensure your journey is smooth, secure, and successful."
        },
        {
            title: "Transparency & Integrity",
            description: "Honesty is at the heart of everything we do. No hidden costs, no false promises—just clear and reliable support."
        },
        {
            title: "Strong Global Network",
            description: "From top universities to trusted travel partners, our connections open doors to opportunities worldwide."
        },
        {
            title: "Comprehensive Support",
            description: "Whether it's admission counselling, visa processing, flight arrangements, or travel planning, we stand beside you at every step."
        },
        {
            title: "Commitment to Success",
            description: "Your growth is our mission. We go beyond paperwork and bookings—we mentor, support, and empower you for the future."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto px-6 py-16 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-5xl">🌟</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Choose Us
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        At NextPath Global, we don't just provide services—we create life-changing journeys.
                        Here's why students and travelers trust us:
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                        With NextPath Global, you're not just choosing a service—you're choosing a partner who walks
                        with you on the path to <span className="text-primary font-bold">knowledge</span>,
                        {" "}<span className="text-secondary font-bold">opportunity</span>, and
                        {" "}<span className="text-primary font-bold">discovery</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
