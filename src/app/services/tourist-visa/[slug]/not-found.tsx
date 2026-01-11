import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-md w-full mx-4">
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-8 h-8 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Country Not Found
                    </h2>

                    <p className="text-gray-600 mb-6">
                        We couldn't find visa information for this country. It may not be available yet or the URL might be incorrect.
                    </p>

                    <Link
                        href="/services/tourist-visa"
                        className="inline-block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        View all available countries
                    </Link>

                    <Link
                        href="/contact"
                        className="block mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                        Contact us for assistance
                    </Link>
                </div>
            </div>
        </div>
    );
}
