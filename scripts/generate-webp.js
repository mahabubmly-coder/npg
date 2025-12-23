const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    webpQuality: 85,
    imageDir: path.join(__dirname, '../public/assets'),
    extensions: ['.jpg', '.jpeg', '.png'],
    skipPatterns: ['originals'],
};

// Statistics
const stats = {
    created: 0,
    skipped: 0,
    errors: 0,
    totalSize: 0,
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);

        // Skip originals directories
        if (CONFIG.skipPatterns.some(pattern => filePath.includes(pattern))) {
            return;
        }

        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getImageFiles(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (CONFIG.extensions.includes(ext)) {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

/**
 * Create WebP version of an image
 */
async function createWebP(filePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        const webpPath = filePath.replace(ext, '.webp');

        // Skip if WebP already exists
        if (fs.existsSync(webpPath)) {
            console.log(`⏭️  Skipping (WebP exists): ${path.basename(filePath)}`);
            stats.skipped++;
            return;
        }

        // Get original from backup if it exists, otherwise use current file
        const dir = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const backupPath = path.join(dir, 'originals', fileName);
        const sourcePath = fs.existsSync(backupPath) ? backupPath : filePath;

        // Create WebP
        const webpBuffer = await sharp(sourcePath)
            .webp({ quality: CONFIG.webpQuality })
            .toBuffer();

        fs.writeFileSync(webpPath, webpBuffer);
        stats.totalSize += webpBuffer.length;
        stats.created++;

        const sizeMB = (webpBuffer.length / 1024 / 1024).toFixed(2);
        console.log(`✅ Created: ${path.basename(webpPath)} (${sizeMB} MB)`);
    } catch (error) {
        console.error(`❌ Error: ${path.basename(filePath)} - ${error.message}`);
        stats.errors++;
    }
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  WebP Generator');
    console.log('=================\n');

    const imageFiles = getImageFiles(CONFIG.imageDir);
    console.log(`Found ${imageFiles.length} images\n`);

    for (const filePath of imageFiles) {
        await createWebP(filePath);
    }

    console.log('\n📊 Summary');
    console.log('==========');
    console.log(`✅ Created: ${stats.created} WebP files`);
    console.log(`⏭️  Skipped: ${stats.skipped} files`);
    console.log(`❌ Errors: ${stats.errors} files`);
    console.log(`💾 Total WebP size: ${(stats.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log('\n✨ Complete!');
}

main().catch(console.error);
