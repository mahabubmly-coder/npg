import { Metadata } from "next";
import InstitutionGrid from "@/components/study-malaysia/InstitutionGrid";
import { getUniversityColleges } from "@/data/institutions";

export const metadata: Metadata = {
    title: "University Colleges in Malaysia | NextPath Global",
    description: "Explore university colleges in Malaysia offering degree and diploma programs. Find your path to higher education with NextPath Global.",
    openGraph: {
        title: "University Colleges in Malaysia | NextPath Global",
        description: "Explore university colleges in Malaysia offering degree and diploma programs.",
    },
};

export default function UniversityCollegesPage() {
    const universityColleges = getUniversityColleges();

    return (
        <InstitutionGrid
            institutions={universityColleges}
            title="University Colleges in Malaysia"
            subtitle="Discover university colleges offering a blend of academic excellence and practical skills"
            baseUrl="/study-malaysia/university-colleges"
        />
    );
}
