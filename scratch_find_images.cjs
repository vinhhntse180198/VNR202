const https = require('https');
const zlib = require('zlib');

https.get('https://cand.com.vn/Kinh-te/Nguoi-truong-doan-dam-phan-WTO-nam-ay-i672688/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    let buf = Buffer.concat(chunks);
    if (res.headers['content-encoding'] === 'gzip') buf = zlib.gunzipSync(buf);
    const d = buf.toString('utf8');
    const re = /<img[^>]+src=["']([^"']+)["'][^>]*>([\s\S]*?)(?=<\/div>|<\/td>|<\/p>|<img|$)/gi;
    let m;
    while (m = re.exec(d)) {
      if (m[1].includes('cand.vn/images')) {
        console.log('IMG:', m[1]);
        console.log('CAPTION/NEAR:', m[2].replace(/<[^>]+>/g, ' ').trim().slice(0, 200));
      }
    }
  });
});
