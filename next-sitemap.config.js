/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nextpathglobal.my',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    additionalPaths: async (config) => {
        const result = [];

        // Import blog posts data
        const { blogPosts } = await import('./src/data/blog.ts');

        // Add blog post detail pages
        blogPosts.forEach(post => {
            result.push({
                loc: `/blog/${post.category}/${post.slug}`,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date(post.date).toISOString(),
            });
        });

        // Import institutions data
        const { institutions } = await import('./src/data/institutions.ts');

        // Add institution detail pages
        institutions.forEach(institution => {
            const basePath = institution.category === 'university'
                ? '/study-malaysia/universities'
                : institution.category === 'university-college'
                    ? '/study-malaysia/university-colleges'
                    : '/study-malaysia/colleges';

            result.push({
                loc: `${basePath}/${institution.slug}`,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            });
        });

        return result;
    },
}
