"use client";

import HeroScene from "@/components/3d/HeroScene";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Student Visa",
    description: "Expert guidance for your study abroad journey.",
    icon: <GraduationCap size={40} className="text-primary" />,
    link: "/services",
  },
  {
    title: "Business Visa",
    description: "Expand your business horizons globally.",
    icon: <Briefcase size={40} className="text-primary" />,
    link: "/services",
  },
  {
    title: "Immigration",
    description: "Seamless immigration processes for you and your family.",
    icon: <Globe size={40} className="text-primary" />,
    link: "/services",
  },
  {
    title: "Work Permit",
    description: "Secure your dream job in international markets.",
    icon: <ShieldCheck size={40} className="text-primary" />,
    link: "/services",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            Your Gateway to <br />
            <span className="text-primary">Global Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Next Path Global provides expert immigration and visa consulting services to help you achieve your dreams abroad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive visa and immigration solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Why Choose Us */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose <span className="text-primary">Next Path Global?</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We combine years of experience with a personalized approach to ensure your application success. Our dedicated team supports you at every step.
              </p>
              <ul className="space-y-4">
                {[
                  "98% Visa Success Rate",
                  "Expert Legal Consultants",
                  "Transparent Process",
                  "24/7 Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-200 group shadow-2xl">
              {/* Placeholder for an image if we had one, or a nice gradient block */}
              <div className="absolute inset-0 bg-white flex items-center justify-center">
                <Globe size={120} className="text-primary/20 group-hover:text-primary/40 transition-all duration-700 transform group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
