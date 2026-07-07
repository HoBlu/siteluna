import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';

const ROOT = path.join(process.cwd(), 'public', 'image');
const BACKUP = path.join(ROOT, '_backup_before_renumber');
const TEMP = path.join(ROOT, '_gallery_new');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 85;

// Порядок как в galleryData (id файлов до обработки)
const galleryOrder = [
  // territory
  1, 2, 3, 4, 5, 6, 7, 8, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50,
  // houses outside
  9, 10, 11, 12, 23, 24, 25,
  // inside
  13, 14, 15, 16, 17, 18,
  // room
  19, 20, 21, 22, 26, 27, 28, 29, 30, 31,
  // gazebo
  32, 33,
  // bbq
  37, 38, 39,
  // pool
  34, 35, 36,
];

const videoOldId = 45;

function hashFile(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function resolveSource(id) {
  const candidates = [
    path.join(ROOT, `${id}.jpg`),
    path.join(ROOT, `${id}.jpeg`),
    path.join(ROOT, `${id}.jfif`),
    path.join(ROOT, `${id}.png`),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function main() {
  if (!fs.existsSync(TEMP)) fs.mkdirSync(TEMP, { recursive: true });

  const seenByHash = new Map();
  const uniqueSources = [];
  const skipped = [];

  for (const oldId of galleryOrder) {
    const src = resolveSource(oldId);
    if (!src) {
      skipped.push({ oldId, reason: 'file not found' });
      continue;
    }
    const h = hashFile(src);
    if (seenByHash.has(h)) {
      skipped.push({ oldId, reason: 'duplicate', duplicateOf: seenByHash.get(h) });
      continue;
    }
    seenByHash.set(h, oldId);
    uniqueSources.push({ oldId, src });
  }

  console.log(`Unique photos: ${uniqueSources.length}`);
  console.log(`Skipped: ${skipped.length}`);
  skipped.forEach((s) => console.log(`  - ${s.oldId}: ${s.reason}`));

  let newId = 1;
  const idMap = new Map(); // oldId -> newId

  for (const { oldId, src } of uniqueSources) {
    const out = path.join(TEMP, `${newId}.jpg`);
    await sharp(src)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(out);
    idMap.set(oldId, newId);
    console.log(`${path.basename(src)} -> ${newId}.jpg`);
    newId++;
  }

  const videoSrc = path.join(ROOT, `${videoOldId}.MOV`);
  const videoSrcAlt = path.join(ROOT, `${videoOldId}.mov`);
  const videoPath = fs.existsSync(videoSrc) ? videoSrc : fs.existsSync(videoSrcAlt) ? videoSrcAlt : null;
  let videoNewId = null;
  if (videoPath) {
    videoNewId = newId;
    const videoExt = path.extname(videoPath).toLowerCase() === '.mov' ? '.MOV' : '.mp4';
    fs.copyFileSync(videoPath, path.join(TEMP, `${videoNewId}${videoExt}`));
    idMap.set(videoOldId, videoNewId);
    console.log(`${path.basename(videoPath)} -> ${videoNewId}${videoExt}`);
    newId++;
  }

  // Сохранить маппинг для обновления galleryData
  const mapPath = path.join(process.cwd(), 'scripts', 'gallery-id-map.json');
  fs.writeFileSync(
    mapPath,
    JSON.stringify({ idMap: Object.fromEntries(idMap), skipped, photoCount: uniqueSources.length, videoNewId }, null, 2)
  );

  console.log('\nMap saved to scripts/gallery-id-map.json');
  console.log('Review _gallery_new/ then run with --apply to replace files.');
}

const apply = process.argv.includes('--apply');

async function applyChanges() {
  const mapPath = path.join(process.cwd(), 'scripts', 'gallery-id-map.json');
  if (!fs.existsSync(mapPath)) {
    console.error('Run without --apply first');
    process.exit(1);
  }

  if (!fs.existsSync(BACKUP)) fs.mkdirSync(BACKUP, { recursive: true });

  // Backup numbered files in root
  for (const f of fs.readdirSync(ROOT)) {
    if (/^\d+\.(jpg|jfif|png|MOV|mov|mp4)$/i.test(f)) {
      fs.renameSync(path.join(ROOT, f), path.join(BACKUP, f));
    }
  }

  for (const f of fs.readdirSync(TEMP)) {
    fs.copyFileSync(path.join(TEMP, f), path.join(ROOT, f));
  }

  console.log('Applied. Old files in public/image/_backup_before_renumber');
}

if (apply) {
  applyChanges();
} else {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
