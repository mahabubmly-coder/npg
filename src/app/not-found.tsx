'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl border-2 border-primary"
                    >
                        <Search size={20} />
                        Browse Services
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">Looking for something specific?</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/services/tourist-visa" className="text-primary hover:underline">
                            Tourist Visa
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/services/study-abroad" className="text-primary hover:underline">
                            Study Abroad
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/study-malaysia/universities" className="text-primary hover:underline">
                            Universities
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/blog" className="text-primary hover:underline">
                            Blog
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/contact" className="text-primary hover:underline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
