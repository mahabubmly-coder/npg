const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    // Quality settings
    jpegQuality: 85,  // 85 is a sweet spot for quality vs size
    pngQuality: 90,   // PNG compression quality
    webpQuality: 85,  // WebP quality

    // Directories to process
    imageDir: path.join(__dirname, '../public'),

    // File extensions to process
    extensions: ['.jpg', '.jpeg', '.png'],

    // Skip these files/directories
    skipPatterns: ['node_modules', '.git', 'backup', 'originals'],
};

// Statistics tracking
const stats = {
    processed: 0,
    skipped: 0,
    errors: 0,
    originalSize: 0,
    compressedSize: 0,
    webpSize: 0,
};

/**
 * Get all image files recursively from a directory
 */
function getImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        // Skip patterns
        if (CONFIG.skipPatterns.some(pattern => filePath.includes(pattern))) {
            return;
        }

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
 * Format bytes to human readable format
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Compress a single image
 */
async function compressImage(filePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        const originalSize = fs.statSync(filePath).size;
        stats.originalSize += originalSize;

        console.log(`\nProcessing: ${path.relative(CONFIG.imageDir, filePath)}`);
        console.log(`  Original size: ${formatBytes(originalSize)}`);

        // Create backup directory if it doesn't exist
        const backupDir = path.join(path.dirname(filePath), 'originals');
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }

        // Backup original file
        const fileName = path.basename(filePath);
        const backupPath = path.join(backupDir, fileName);
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(filePath, backupPath);
        }

        // Load image
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Compress original format
        let compressedBuffer;
        if (ext === '.png') {
            compressedBuffer = await image
                .png({ quality: CONFIG.pngQuality, compressionLevel: 9 })
                .toBuffer();
        } else {
            // JPEG
            compressedBuffer = await image
                .jpeg({ quality: CONFIG.jpegQuality, progressive: true })
                .toBuffer();
        }

        // Write compressed version
        fs.writeFileSync(filePath, compressedBuffer);
        const compressedSize = compressedBuffer.length;
        stats.compressedSize += compressedSize;

        console.log(`  Compressed size: ${formatBytes(compressedSize)} (${Math.round((1 - compressedSize / originalSize) * 100)}% reduction)`);

        // Create WebP version
        const webpPath = filePath.replace(ext, '.webp');
        const webpBuffer = await sharp(backupPath)
            .webp({ quality: CONFIG.webpQuality })
            .toBuffer();

        fs.writeFileSync(webpPath, webpBuffer);
        const webpSize = webpBuffer.length;
        stats.webpSize += webpSize;

        console.log(`  WebP size: ${formatBytes(webpSize)} (${Math.round((1 - webpSize / originalSize) * 100)}% reduction)`);

        stats.processed++;
    } catch (error) {
        console.error(`  ❌ Error processing ${filePath}:`, error.message);
        stats.errors++;
    }
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  Image Compression Tool');
    console.log('========================\n');
    console.log(`Scanning directory: ${CONFIG.imageDir}\n`);

    // Get all image files
    const imageFiles = getImageFiles(CONFIG.imageDir);

    // Filter out SVG files (they're already optimized)
    const filesToProcess = imageFiles.filter(f => !f.endsWith('.svg'));

    console.log(`Found ${filesToProcess.length} images to process\n`);
    console.log('Starting compression...\n');

    // Process each image
    for (const filePath of filesToProcess) {
        await compressImage(filePath);
    }

    // Print summary
    console.log('\n\n📊 Compression Summary');
    console.log('=====================');
    console.log(`✅ Processed: ${stats.processed} images`);
    console.log(`⏭️  Skipped: ${stats.skipped} images`);
    console.log(`❌ Errors: ${stats.errors} images`);
    console.log('\n📦 Size Comparison:');
    console.log(`Original total: ${formatBytes(stats.originalSize)}`);
    console.log(`Compressed total: ${formatBytes(stats.compressedSize)} (${Math.round((1 - stats.compressedSize / stats.originalSize) * 100)}% reduction)`);
    console.log(`WebP total: ${formatBytes(stats.webpSize)} (${Math.round((1 - stats.webpSize / stats.originalSize) * 100)}% reduction)`);
    console.log(`\n💾 Space saved: ${formatBytes(stats.originalSize - stats.compressedSize)}`);
    console.log(`💾 Additional WebP savings: ${formatBytes(stats.compressedSize - stats.webpSize)}`);
    console.log('\n✨ Compression complete!');
    console.log('📁 Original images backed up in "originals" folders');
}

// Run the script
main().catch(console.error);
