import { Metadata } from "next";
import InstitutionGrid from "@/components/study-malaysia/InstitutionGrid";
import { getUniversities } from "@/data/institutions";

export const metadata: Metadata = {
    title: "Universities in Malaysia | NextPath Global",
    description: "Explore top public and private universities in Malaysia. Find the perfect institution for your higher education journey with NextPath Global.",
    openGraph: {
        title: "Universities in Malaysia | NextPath Global",
        description: "Explore top public and private universities in Malaysia. Find the perfect institution for your higher education journey.",
    },
};

export default function UniversitiesPage() {
    const universities = getUniversities();

    const filters = [
        { label: "All Universities", value: "all" as const },
        { label: "Public Universities", value: "public" as const },
        { label: "Private Universities", value: "private" as const },
        { label: "Foreign Branch Campus", value: "foreign-branch" as const },
    ];

    return (
        <InstitutionGrid
            institutions={universities}
            title="Universities in Malaysia"
            subtitle="Discover world-class public universities, renowned private institutions, and prestigious international branch campuses"
            baseUrl="/study-malaysia/universities"
            filters={filters}
        />
    );
}
