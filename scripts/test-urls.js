/**
 * Test script to check all sitemap URLs for 500 errors
 * Run with: node scripts/test-urls.js
 */

const https = require('https');

const baseUrl = 'https://nextpathglobal.my';

// All URLs from your sitemap
const urls = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/book-appointment',
    '/why-choose-us',
    '/faq',
    '/payment-methods',
    '/privacy',
    '/terms',
    '/services/tourist-visa',
    '/services/study-abroad',
    '/services/pvip',
    '/services/mm2h',
    // Tourist visa countries
    '/services/tourist-visa/afghanistan',
    '/services/tourist-visa/argentina',
    '/services/tourist-visa/azerbaijan',
    '/services/tourist-visa/bangladesh',
    '/services/tourist-visa/brunei',
    '/services/tourist-visa/cambodia',
    '/services/tourist-visa/china',
    '/services/tourist-visa/egypt',
    '/services/tourist-visa/hong-kong',
    '/services/tourist-visa/indonesia',
    '/services/tourist-visa/japan',
    '/services/tourist-visa/laos',
    '/services/tourist-visa/malaysia',
    '/services/tourist-visa/maldives',
    '/services/tourist-visa/myanmar',
    '/services/tourist-visa/nepal',
    '/services/tourist-visa/pakistan',
    '/services/tourist-visa/papua-new-guinea',
    '/services/tourist-visa/philippines',
    '/services/tourist-visa/russia',
    '/services/tourist-visa/sabah',
    '/services/tourist-visa/singapore',
    '/services/tourist-visa/sri-lanka',
    '/services/tourist-visa/thailand',
    '/services/tourist-visa/turkey',
    '/services/tourist-visa/vietnam',
    // Blog
    '/blog',
    '/blog/study-in-malaysia',
    '/blog/travel-tourism',
    '/blog/updates-announcements',
    // Study Malaysia
    '/study-malaysia/universities',
    '/study-malaysia/university-colleges',
    '/study-malaysia/colleges',
];

async function testUrl(url) {
    return new Promise((resolve) => {
        const fullUrl = `${baseUrl}${url}`;

        https.get(fullUrl, (res) => {
            const status = res.statusCode;
            const result = {
                url,
                status,
                ok: status >= 200 && status < 400,
                error: status >= 500
            };

            if (status >= 500) {
                console.error(`❌ ${status} - ${url}`);
            } else if (status === 404) {
                console.warn(`⚠️  ${status} - ${url}`);
            } else if (status >= 300 && status < 400) {
                console.log(`↪️  ${status} - ${url} -> ${res.headers.location || 'unknown'}`);
            } else {
                console.log(`✅ ${status} - ${url}`);
            }

            resolve(result);
        }).on('error', (err) => {
            console.error(`💥 ERROR - ${url}: ${err.message}`);
            resolve({ url, status: 0, ok: false, error: true, message: err.message });
        });
    });
}

async function testAllUrls() {
    console.log(`Testing ${urls.length} URLs from sitemap...\n`);

    const results = [];

    // Test URLs in batches to avoid overwhelming the server
    const batchSize = 5;
    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(testUrl));
        results.push(...batchResults);

        // Small delay between batches
        if (i + batchSize < urls.length) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('SUMMARY');
    console.log('='.repeat(50));

    const errors = results.filter(r => r.error);
    const notFound = results.filter(r => r.status === 404);
    const redirects = results.filter(r => r.status >= 300 && r.status < 400);
    const success = results.filter(r => r.ok);

    console.log(`✅ Success: ${success.length}`);
    console.log(`↪️  Redirects: ${redirects.length}`);
    console.log(`⚠️  Not Found (404): ${notFound.length}`);
    console.log(`❌ Server Errors (5xx): ${errors.length}`);

    if (errors.length > 0) {
        console.log('\n🚨 PAGES WITH SERVER ERRORS:');
        errors.forEach(e => console.log(`  - ${e.url} (${e.status})`));
    }

    if (notFound.length > 0) {
        console.log('\n⚠️  PAGES NOT FOUND:');
        notFound.forEach(e => console.log(`  - ${e.url}`));
    }
}

testAllUrls().catch(console.error);
