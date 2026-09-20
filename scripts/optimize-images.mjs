// One-off: converts model-output PNGs (from the cnu1328 profile repo) and the
// profile photo into web-sized WebP files under public/images/.
// Usage: node scripts/optimize-images.mjs [sourceDir]
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = process.argv[2] ?? "../cnu1328/doc_images";
const OUT = "public/images/work";
const MAX_WIDTH = 1600;
const QUALITY = 78;

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const src = path.join(SRC, file);
  const out = path.join(OUT, file.replace(/\.(png|jpe?g)$/i, ".webp"));
  before += (await stat(src)).size;
  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(out);
  after += (await stat(out)).size;
  console.log(`${file} -> ${path.basename(out)}`);
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(`\n${files.length} files: ${mb(before)} -> ${mb(after)}`);
