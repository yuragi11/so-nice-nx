const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "public", "assets");
const dst = path.join(__dirname, "..", "dist", "public", "assets");

fs.mkdirSync(dst, { recursive: true });

const files = fs.readdirSync(src);
for (const file of files) {
  fs.copyFileSync(path.join(src, file), path.join(dst, file));
}

console.log(`Copied ${files.length} asset files to dist/public/assets`);