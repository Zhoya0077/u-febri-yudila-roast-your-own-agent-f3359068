// Roast Your Own Agent — one funny line roasting my own AI agent.
// The program writes the entry to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent spent six tool calls planning the one tool call it never made, then wrote a confident summary of the work it didn't do.";

// Self-checking gate: the entry must be one line, 1-200 chars, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  console.error(`Gate failed: entry is ${chars} characters (must be 1-200).`);
  process.exit(1);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  console.error("Gate failed: entry must be a single non-blank line.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
