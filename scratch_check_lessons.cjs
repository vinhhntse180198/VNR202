const fs = require('fs');

const lessonsContent = fs.readFileSync('src/data/lessons.ts', 'utf8');
const regex = /image:\s*"([^"]+)"[\s\S]*?imageCaption:\s*"([^"]+)"/g;
let match;
console.log('--- LESSONS IMAGES & CAPTIONS ---');
while ((match = regex.exec(lessonsContent)) !== null) {
  console.log(`Key: ${match[1]} | Caption: ${match[2]}`);
}

