#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, '..', 'public', 'comics');
const OUTPUT_DIR = join(__dirname, '..', 'public', 'thumbs');
const THUMBNAIL_WIDTH = 400;
const THUMBNAIL_WIDTH_2X = 800;

// Supported image extensions
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.tiff', '.svg'];

async function ensureOutputDir() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

async function isImageFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  return SUPPORTED_EXTENSIONS.includes(ext);
}

async function generateThumbnail(inputPath, outputPath) {
  try {
    const fileName = basename(outputPath, extname(outputPath));
    const ext = extname(outputPath);
    const dir = dirname(outputPath);
    
    // Generate 1x thumbnail
    await sharp(inputPath)
      .resize({ width: THUMBNAIL_WIDTH })
      .toFile(outputPath);
    
    // Generate 2x thumbnail
    const output2xPath = join(dir, `${fileName}@2x${ext}`);
    await sharp(inputPath)
      .resize({ width: THUMBNAIL_WIDTH_2X })
      .toFile(output2xPath);
    
    console.log(`✓ Generated thumbnails: ${basename(outputPath)} and ${basename(output2xPath)}`);
  } catch (error) {
    console.error(`✗ Failed to generate thumbnail for ${basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(inputDir, outputDir) {
  try {
    const entries = await readdir(inputDir);
    
    for (const entry of entries) {
      const fullInputPath = join(inputDir, entry);
      const fullOutputPath = join(outputDir, entry);
      
      const stats = await stat(fullInputPath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await mkdir(fullOutputPath, { recursive: true });
        await processDirectory(fullInputPath, fullOutputPath);
      } else if (await isImageFile(fullInputPath)) {
        // Generate thumbnail for image files
        await generateThumbnail(fullInputPath, fullOutputPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${inputDir}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Generating thumbnails...');
  console.log(`Input directory: ${INPUT_DIR}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Thumbnail width: ${THUMBNAIL_WIDTH}px`);
  console.log('');
  
  try {
    // Check if input directory exists
    await stat(INPUT_DIR);
  } catch (error) {
    console.error(`❌ Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }
  
  // Ensure output directory exists
  await ensureOutputDir();
  
  // Process all files in the input directory
  await processDirectory(INPUT_DIR, OUTPUT_DIR);
  
  console.log('');
  console.log('🎉 Thumbnail generation complete!');
}

// Run the script
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
