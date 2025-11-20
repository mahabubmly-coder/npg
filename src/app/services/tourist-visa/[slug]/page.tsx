import React from "react";
import { notFound } from "next/navigation";
import { countries } from "@/data/countries";
import CountryPageTemplate from "@/components/visa/CountryPageTemplate";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return countries.map((country) => ({
        slug: country.slug,
    }));
}

export default async function CountryPage({ params }: PageProps) {
    const { slug } = await params;
    const country = countries.find((c) => c.slug === slug);

    if (!country) {
        notFound();
    }

    return <CountryPageTemplate country={country} />;
}
