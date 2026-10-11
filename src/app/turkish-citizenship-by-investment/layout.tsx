import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Turkish Citizenship by Investment | NextPath Global",
    description: "Second passport for your whole family through a USD 400,000 Turkish property. Clear costs, honest advice, offices in Kuala Lumpur and Dhaka. Book a consultation.",
    alternates: {
        canonical: "https://nextpathglobal.my/turkish-citizenship-by-investment",
    },
    openGraph: {
        title: "Turkish Citizenship by Investment | NextPath Global",
        description: "Second passport for your whole family through a USD 400,000 Turkish property. Clear costs, honest advice, offices in Kuala Lumpur and Dhaka. Book a consultation.",
        url: "https://nextpathglobal.my/turkish-citizenship-by-investment",
        siteName: "NextPath Global",
        images: [
            {
                url: "/assets/citizenship/turkish-hero.jpg",
                width: 1200,
                height: 675,
                alt: "Turkish Citizenship by Investment - NextPath Global",
            },
        ],
        locale: "en_MY",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Turkish Citizenship by Investment | NextPath Global",
        description: "Second passport for your whole family through a USD 400,000 Turkish property. Clear costs, honest advice, offices in Kuala Lumpur and Dhaka.",
        images: ["/assets/citizenship/turkish-hero.jpg"],
    },
};

export default function TurkishCitizenshipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
