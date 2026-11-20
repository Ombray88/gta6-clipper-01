import * as fs from 'node:fs';
import * as path from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR || process.env.BOT_DIR || '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || '/output';

const videoJsonPath = path.join(botDir, 'VIDEO.json');

if (!fs.existsSync(videoJsonPath)) {
  console.error('Error: VIDEO.json is missing from bot directory:', videoJsonPath);
  process.exit(1);
}

let content: string;
try {
  content = fs.readFileSync(videoJsonPath, 'utf8');
} catch (err) {
  console.error('Error reading VIDEO.json:', err);
  process.exit(1);
}

let data: { url?: string };
try {
  data = JSON.parse(content);
} catch (err) {
  console.error('Error parsing VIDEO.json as JSON:', err);
  process.exit(1);
}

const url = data.url;
if (!url || typeof url !== 'string') {
  console.error('Error: VIDEO.json missing valid "url" field.');
  process.exit(1);
}

const isYouTube = 
  url.includes('youtube.com/watch') || 
  url.includes('youtube.com/shorts') || 
  url.includes('youtu.be');

if (!isYouTube) {
  console.error('Error: URL in VIDEO.json is not a valid YouTube address:', url);
  process.exit(1);
}

try {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const destPath = path.join(outputDir, 'VIDEO.json');
  fs.writeFileSync(destPath, content, 'utf8');
} catch (err) {
  console.error('Error writing output VIDEO.json:', err);
  process.exit(1);
}
