#!/usr/bin/env node
// Upload optimized videos to Vercel Blob storage

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const videosDir = path.join(__dirname, '../public/videos');

async function uploadVideos() {
  const token = process.env.MEDIA_READ_WRITE_TOKEN;

  if (!token) {
    console.error('❌ Error: MEDIA_READ_WRITE_TOKEN environment variable not set');
    console.log('\nTo get your token:');
    console.log('  1. Go to https://vercel.com/dashboard');
    console.log('  2. Select your project');
    console.log('  3. Settings → Storage → Blob');
    console.log('  4. Copy the BLOB_READ_WRITE_TOKEN');
    console.log('\nThen run:');
    console.log('  export BLOB_READ_WRITE_TOKEN=your_token_here');
    console.log('  node scripts/upload-videos-blob.js');
    process.exit(1);
  }

  if (!fs.existsSync(videosDir)) {
    console.error(`❌ Videos directory not found: ${videosDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(videosDir).filter(f =>
    f.endsWith('.mp4') || f.endsWith('.webm')
  );

  if (files.length === 0) {
    console.log('ℹ️  No videos found. First run:');
    console.log('  bash scripts/optimize-videos.sh /path/to/your/videos');
    process.exit(0);
  }

  console.log(`🎬 Uploading ${files.length} videos to Vercel Blob...\n`);

  for (const file of files) {
    const filePath = path.join(videosDir, file);
    const fileSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
    const fileBuffer = fs.readFileSync(filePath);

    try {
      const blob = await put(`videos/${file}`, fileBuffer, {
        access: 'public',
        addRandomSuffix: false,
        token: token,
      });

      console.log(`✓ ${file} (${fileSize}MB)`);
      console.log(`  URL: ${blob.url}\n`);
    } catch (error) {
      console.error(`✗ Failed to upload ${file}:`, error.message);
    }
  }

  console.log('✅ Upload complete!');
  console.log('\nUpdate your video elements with the Blob URLs:');
  console.log('  <source src="https://your-blob-url.blob.vercel-storage.com/videos/name.mp4" />');
}

uploadVideos().catch(console.error);
