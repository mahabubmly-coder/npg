/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nextpathglobal.my',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*', '/server-sitemap.xml'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        additionalSitemaps: [
            'https://nextpathglobal.my/sitemap.xml',
        ],
    },
    // Transform function to set custom priorities
    transform: async (config, path) => {
        // High priority pages
        if (path === '/' || path === '/services' || path === '/book-appointment') {
            return {
                loc: path,
                changefreq: 'daily',
                priority: 1.0,
                lastmod: new Date().toISOString(),
            };
        }

        // Service pages
        if (path.startsWith('/services/')) {
            return {
                loc: path,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            };
        }

        // Blog pages
        if (path.startsWith('/blog/')) {
            return {
                loc: path,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }

        // Study Malaysia pages
        if (path.startsWith('/study-malaysia/')) {
            return {
                loc: path,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }

        // Default
        return {
            loc: path,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
    additionalPaths: async (config) => {
        const result = [];

        // Import blog posts data
        const { blogPosts } = await import('./src/data/blog.ts');

        // Add blog post detail pages
        blogPosts.forEach(post => {
            result.push({
                loc: `/blog/${post.category}/${post.slug}`,
                changefreq: 'monthly',
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
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            });
        });

        return result;
    },
}
