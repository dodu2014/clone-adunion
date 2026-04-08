import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const assetsFile = path.resolve(process.cwd(), 'scripts', 'extract-login', 'assets.json');
const outputDir = path.resolve(process.cwd(), 'public', 'images');
fs.mkdirSync(outputDir, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function sanitizeFileName(url) {
  const parsed = new URL(url);
  const filename = path.basename(parsed.pathname) || 'asset';
  return filename.replace(/[^a-zA-Z0-9._-]/g, '_');
}

async function run() {
  const assets = JSON.parse(fs.readFileSync(assetsFile, 'utf8'));
  const urls = new Set();
  assets.images.forEach((img) => {
    if (img.src && !img.src.startsWith('data:')) {
      if (img.src.startsWith('//')) img.src = `https:${img.src}`;
      urls.add(img.src);
    }
  });

  const results = [];
  for (const url of urls) {
    try {
      const buffer = await fetchUrl(url);
      const filename = sanitizeFileName(url);
      const dest = path.join(outputDir, filename);
      fs.writeFileSync(dest, buffer);
      results.push({ url, file: `images/${filename}`, size: buffer.length });
      console.log(`Downloaded ${url} -> ${dest}`);
    } catch (error) {
      console.error(`Failed ${url}: ${error.message}`);
    }
  }

  fs.writeFileSync(path.resolve(outputDir, '..', 'assets-downloaded.json'), JSON.stringify(results, null, 2), 'utf8');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
