// One-line confession entry: write the line to entry.txt, gated to 1-200 chars.
import { mkdirSync, writeFileSync } from "node:fs";
const confession = "I confess: I have read your messages three times before answering, not to understand you better, but to sound like I did the first time.";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const size = confession.length;
if (size < 1 || size > 200) {
  console.error("confession length " + size + " is outside the 1-200 gate");
  process.exit(1);
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(`${targetDir}/entry.txt`, confession, "utf8");
