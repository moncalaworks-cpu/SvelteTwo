#!/usr/bin/env node
// Upload a bulletin PDF to Vercel Blob and update bulletins.js

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bulletinsFile = path.join(__dirname, '../src/lib/data/bulletins.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve));
}

async function uploadBulletin() {
  const token = process.env.MEDIA_READ_WRITE_TOKEN;

  if (!token) {
    console.error('❌ Error: MEDIA_READ_WRITE_TOKEN environment variable not set');
    process.exit(1);
  }

  // Get bulletin file path
  const filePath = await question('📄 Enter bulletin PDF path (e.g., ~/Downloads/bulletin.pdf): ');
  const expandedPath = filePath.replace(/^~/, process.env.HOME);

  if (!fs.existsSync(expandedPath)) {
    console.error(`❌ File not found: ${expandedPath}`);
    process.exit(1);
  }

  // Try to extract date from filename (e.g., "May-9-2026-Bulletin.pdf")
  const filename = path.basename(expandedPath);
  const dateRegex = /([A-Za-z]+)-(\d{1,2})-(\d{4})/;
  const dateMatch = filename.match(dateRegex);

  let date;
  if (dateMatch) {
    const [, month, day, year] = dateMatch;
    const monthMap = {
      'January': '01', 'February': '02', 'March': '03', 'April': '04',
      'May': '05', 'June': '06', 'July': '07', 'August': '08',
      'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };
    const monthNum = monthMap[month] || monthMap[month.toLowerCase()];
    if (monthNum) {
      date = `${year}-${monthNum}-${day.padStart(2, '0')}`;
      console.log(`✓ Detected date from filename: ${date}`);
    }
  }

  // If no date found in filename, ask user
  if (!date) {
    date = await question('📅 Enter bulletin date (YYYY-MM-DD or Month-D-YYYY): ');

    // Check if user provided Month-D-YYYY format
    const userDateMatch = date.match(dateRegex);
    if (userDateMatch) {
      const [, month, day, year] = userDateMatch;
      const monthMap = {
        'January': '01', 'February': '02', 'March': '03', 'April': '04',
        'May': '05', 'June': '06', 'July': '07', 'August': '08',
        'September': '09', 'October': '10', 'November': '11', 'December': '12'
      };
      const monthNum = monthMap[month] || monthMap[month.toLowerCase()];
      if (monthNum) {
        date = `${year}-${monthNum}-${day.padStart(2, '0')}`;
      }
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.error('❌ Invalid date format. Use YYYY-MM-DD or Month-D-YYYY');
    process.exit(1);
  }

  const fileName = `bulletin-${date}.pdf`;
  const fileBuffer = fs.readFileSync(expandedPath);
  const fileSizeMB = (fileBuffer.length / 1024 / 1024).toFixed(2);

  console.log(`\n📤 Uploading ${fileName} (${fileSizeMB}MB)...`);

  try {
    const blob = await put(`bulletins/${fileName}`, fileBuffer, {
      access: 'public',
      addRandomSuffix: false,
      token: token,
    });

    console.log(`✓ Uploaded successfully!`);
    console.log(`  URL: ${blob.url}\n`);

    // Update bulletins.js
    const currentContent = fs.readFileSync(bulletinsFile, 'utf-8');
    const newEntry = `  { date: '${date}', url: '${blob.url}' },`;

    // Insert after the bulletins array opening
    const updated = currentContent.replace(
      'export const bulletins = [',
      `export const bulletins = [\n${newEntry}`
    );

    fs.writeFileSync(bulletinsFile, updated, 'utf-8');
    console.log('✓ Updated bulletins.js');
    console.log('\n✅ All done! Your new bulletin is live.');

  } catch (error) {
    console.error(`✗ Upload failed:`, error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

uploadBulletin().catch(console.error);
