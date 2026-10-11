import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/metadata";
import BlogPostContent from "@/components/blog/BlogPostContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts
        .filter((p) => p.category === "visa-immigration")
        .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return { title: "Post Not Found" };

    const title = `${post.title} | Next Path Global`;
    const description = post.excerpt;
    const url = `${siteConfig.url}/blog/visa-immigration/${post.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            siteName: siteConfig.name,
        },
        twitter: { card: "summary_large_image", title, description },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    const isTurkishCbi = post.slug === "turkish-citizenship-by-investment-2026-guide";

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Organization",
            name: post.author || "NextPath Global",
        },
        publisher: {
            "@type": "Organization",
            name: "NextPath Global Sdn Bhd",
            url: "https://nextpathglobal.my",
        },
        mainEntityOfPage: `${siteConfig.url}/blog/visa-immigration/${post.slug}`,
    };

    const faqSchema = isTurkishCbi
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Do I have to live in Türkiye?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. There is no minimum stay. You should plan for at least one visit for biometrics and the residence permit.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I buy more than one property?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Several properties can be combined as long as their total valuation reaches USD 400,000.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I buy an off-plan apartment?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, if the developer holds the title deed and the unit meets the valuation requirement.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I rent out the property during the three years?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. You can rent it, live in it or use it as a holiday home. You just cannot sell it for three years.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens after three years?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The no-sale annotation ends. You can keep or sell the property, and your citizenship remains.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Are my children included?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Children under 18 are included in your application. Children aged 18 or older need their own route.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is approval guaranteed?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Approval is a decision of the Turkish authorities. A clean, complete file gives you the best chance, which is where we focus.",
                    },
                },
            ],
        }
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <BlogPostContent
                post={post}
                backHref="/blog/visa-immigration"
                backLabel="Back to Visa & Immigration"
                ctaTitle={
                    isTurkishCbi
                        ? "Ready to Explore Turkish Citizenship by Investment?"
                        : "Ready to Apply for Your Malaysian Visa?"
                }
                ctaDescription={
                    isTurkishCbi
                        ? "Book a confidential consultation with NextPath Global. We will assess your family eligibility, review qualified properties, and plan your journey."
                        : "Contact us today for professional assistance with your visa application and residency planning."
                }
            />
        </>
    );
}
