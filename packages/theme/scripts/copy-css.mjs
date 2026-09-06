import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const from = join(root, "..", "src", "tailwind.css");
const to = join(root, "..", "dist", "tailwind.css");

mkdirSync(dirname(to), { recursive: true });
copyFileSync(from, to);
console.log("copied tailwind.css to dist/");
