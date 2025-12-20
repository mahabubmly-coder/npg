import { Metadata } from "next";
import InstitutionGrid from "@/components/study-malaysia/InstitutionGrid";
import { getColleges } from "@/data/institutions";

export const metadata: Metadata = {
    title: "Colleges in Malaysia | NextPath Global",
    description: "Explore colleges in Malaysia offering diploma and professional programs. Start your education journey with NextPath Global.",
    openGraph: {
        title: "Colleges in Malaysia | NextPath Global",
        description: "Explore colleges in Malaysia offering diploma and professional programs.",
    },
};

export default function CollegesPage() {
    const colleges = getColleges();

    return (
        <InstitutionGrid
            institutions={colleges}
            title="Colleges in Malaysia"
            subtitle="Discover quality college education with diploma programs and professional certifications"
            baseUrl="/study-malaysia/colleges"
        />
    );
}
