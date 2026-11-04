const https = require('https');
const fs = require('fs');

const url = 'https://bcp.cdnchinhphu.vn/Uploaded/truonggiangthanh/2021_01_25/DhX.jpg';
const fallbackUrl = 'https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/truonggiangthanh/2021_01_25/DhX.jpg';

function download(u, dest) {
  return new Promise((resolve, reject) => {
    https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      console.log('Downloading', u, 'Status:', res.statusCode);
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved to', dest, 'Size:', fs.statSync(dest).size);
          resolve(true);
        });
      } else {
        resolve(false);
      }
    }).on('error', reject);
  });
}

async function start() {
  const ok = await download(url, 'public/images/dai_hoi_x.jpg');
  if (!ok) {
    await download(fallbackUrl, 'public/images/dai_hoi_x.jpg');
  }
}

start();

