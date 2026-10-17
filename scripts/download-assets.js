const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const summaryPath = path.join(__dirname, '../docs/research/shekareyehospital/extracted-summary.json');
const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));

const targetDir = path.join(__dirname, '../public/sites/shekareyehospital');
fs.mkdirSync(targetDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    // If already downloaded and size > 0
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve({ url, dest, status: 'already_exists' });
    }
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return resolve({ url, dest, status: `failed_status_${res.statusCode}` });
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve({ url, dest, status: 'ok', size: fs.statSync(dest).size });
      });
    });
    req.on('error', (err) => resolve({ url, dest, status: `error: ${err.message}` }));
    req.setTimeout(15000, () => {
      req.destroy();
      resolve({ url, dest, status: 'timeout' });
    });
  });
}

async function main() {
  const assetMap = {};
  console.log(`Downloading ${summary.uniqueImages.length} images...`);
  
  for (let i = 0; i < summary.uniqueImages.length; i++) {
    const imgUrl = summary.uniqueImages[i];
    const urlObj = new URL(imgUrl);
    const cleanBasename = path.basename(urlObj.pathname).replace(/[^\w.-]/g, '_');
    const localFilename = `${i.toString().padStart(2, '0')}_${cleanBasename}`;
    const destPath = path.join(targetDir, localFilename);
    const relLocalPath = `/sites/shekareyehospital/${localFilename}`;

    const res = await downloadFile(imgUrl, destPath);
    console.log(`[${i+1}/${summary.uniqueImages.length}] ${imgUrl} -> ${localFilename} (${res.status})`);
    
    assetMap[imgUrl] = {
      localPath: relLocalPath,
      filename: localFilename,
      status: res.status,
      size: res.size || 0
    };
  }

  const manifestPath = path.join(__dirname, '../docs/research/shekareyehospital/asset-map.json');
  fs.writeFileSync(manifestPath, JSON.stringify(assetMap, null, 2));
  console.log('Asset map written to docs/research/shekareyehospital/asset-map.json');
}

main().catch(console.error);
