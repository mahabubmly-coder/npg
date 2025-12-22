"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PaymentMethods() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Payment <span className="text-primary">Methods</span>
                    </h1>
                </motion.div>
            </section>

            {/* Under Construction Section */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="bg-gray-50 rounded-3xl p-12 md:p-16 border border-gray-100">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                            <Construction size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Under Construction</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We're working on bringing you detailed information about our payment methods.
                            This page will be available soon with all the payment options we accept.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                        >
                            <ArrowLeft size={20} />
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
