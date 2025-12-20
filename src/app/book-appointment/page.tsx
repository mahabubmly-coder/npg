import { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
    title: "Book Appointment | NextPath Global",
    description: "Schedule an appointment with NextPath Global for visa services, MM2H, PVIP, and more. Our team will help you with your immigration needs.",
};

export default function BookAppointment() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Book an <span className="text-primary">Appointment</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Schedule a consultation with our experts. Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <AppointmentForm />
                </div>
            </div>
        </div>
    );
}
