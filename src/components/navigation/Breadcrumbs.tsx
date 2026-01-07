'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/metadata';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const allItems = [{ name: 'Home', url: '/' }, ...items];
    const breadcrumbSchema = generateBreadcrumbSchema(allItems);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="py-4">
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="Home"
                        >
                            <Home className="w-4 h-4" />
                        </Link>
                    </li>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <li key={item.url} className="flex items-center space-x-2">
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                {isLast ? (
                                    <span className="text-gray-900 font-medium" aria-current="page">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.url}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
