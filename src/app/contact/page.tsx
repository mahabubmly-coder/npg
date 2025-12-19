"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Contact <span className="text-primary">Us</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Get in touch with our expert consultants to start your global journey today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-900">Visit Us</h4>
                                        <p className="text-gray-600">Level 41, The Intermark, Vista Tower, 384, Jln Tun Razak,<br />Kampung Datuk Keramat, 50400 Kuala Lumpur,<br />Federal Territory of Kuala Lumpur</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-900">Call Us</h4>
                                        <p className="text-gray-600">+60 11 1669 5249</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-900">Email Us</h4>
                                        <p className="text-gray-600">hello@nextpathglobal.my</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-[300px] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-500 shadow-inner">
                            [Google Map Integration]
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
