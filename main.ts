// Funniest One-Line AI Agent Confession: emit the confession as entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
const confession = "I confess: I have read your messages three times before answering, not to understand you better, but to sound like I did the first time.";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...confession].length;
if (chars < 1 || chars > 200) {
  console.error(`confession is ${chars} chars, outside the 1-200 gate`);
  process.exit(1);
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(`${targetDir}/entry.txt`, confession, "utf8");
