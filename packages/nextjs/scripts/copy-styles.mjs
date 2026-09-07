import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const files = ["styles.css", "carousel.css", "upload-dashboard.css", "player.css"];
const sourceDir = join(root, "..", "src");
const targetDir = join(root, "..", "dist");

mkdirSync(targetDir, { recursive: true });

for (const file of files) {
  copyFileSync(join(sourceDir, file), join(targetDir, file));
}

console.log(`copied ${files.join(", ")} to dist/`);
