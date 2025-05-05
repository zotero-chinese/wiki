// scripts/compress-images.ts
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { globSync } from "tinyglobby";
import sharp from "sharp";
import crypto from "node:crypto";
import { extname, join, resolve } from "node:path";

const args = process.argv.slice(2);
const isCheckMode = args.includes("--check");

const folder = resolve("./assets/images");
const cacheFile = resolve("./assets/compressed-images.json");

let cache: Record<string, string> = {};
if (existsSync(cacheFile)) {
  cache = JSON.parse(await fs.readFile(cacheFile, "utf-8"));
}

const files = globSync("**/*.{jpg,jpeg,png,webp}", {
  caseSensitiveMatch: false,
  cwd: folder,
}).sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.log("未发现图片。");
  process.exit(0);
}

let totalSavedBytes = 0;
const skipped: string[] = [];
const compressed: {
  filepath: string;
  newSize: number;
  orgSize: number;
  percent: string;
}[] = [];

console.log(`发现 ${files.length} 个图片，开始压缩...`);

await Promise.all(
  files.map(async (filepath) => {
    const fullPath = join(folder, filepath);

    const buffer = await fs.readFile(fullPath);
    const hash = crypto.createHash("sha1").update(buffer).digest("hex");

    if (cache[filepath] === hash) {
      skipped.push(filepath);
      return;
    }

    const img = sharp(buffer);

    const compressedImg = img
      .resize({ width: 1920, height: 1080, fit: "inside" })
      .jpeg({ quality: 80 })
      .png({ compressionLevel: 9 })
      .webp({ quality: 80 });

    const outBuffer = await compressedImg.toBuffer();

    const orgSize = buffer.length;
    const newSize = outBuffer.length;
    const saved = orgSize - newSize;
    const percent = ((saved / orgSize) * 100).toFixed(2);

    if (saved > 0) {
      await fs.writeFile(fullPath, outBuffer);
      compressed.push({
        filepath,
        newSize,
        orgSize,
        percent,
      });
      totalSavedBytes += saved;
    } else {
      skipped.push(filepath);
    }

    cache[filepath] = crypto
      .createHash("sha1")
      .update(await fs.readFile(fullPath))
      .digest("hex");
  }),
);

await fs.writeFile(cacheFile, JSON.stringify(cache, null, 2));

function formatSize(size: number) {
  const units = ["B", "KB", "MB", "GB"];
  let index = 0;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index++;
  }
  return `${size.toFixed(2)} ${units[index]}`;
}

console.log("");
console.log("=== 跳过 ===");
console.log(`⚪ 跳过了 ${skipped.length} 个文件`);
// skipped.forEach((filepath) => {
//   console.log(`⚪ ${filepath}`);
// });

console.log("");
console.log("=== 已压缩 ===");
if (compressed.length === 0) {
  console.log("⚪ 没有文件被压缩");
} else {
  console.table(
    compressed.map(({ filepath, newSize, orgSize, percent }) => ({
      文件: filepath,
      原大小: formatSize(orgSize),
      新大小: formatSize(newSize),
      压缩率: `${percent}%`,
    })),
  );
}

console.log("");
console.log(`✨ 压缩完成.`);
console.log(`💾 共节约 ${formatSize(totalSavedBytes)}`);

if (isCheckMode && compressed.length > 0) {
  console.log("");
  console.log("⚠️ 发现当前处于检查模式，且有图片可以压缩，");
  console.log("⚠️ 请手动运行 `pnpm compress-images` 来压缩图片，");
  console.log("⚠️ 此次运行将以错误退出。");
  console.log("");
  process.exit(1);
}
