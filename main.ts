// One-Star Review of Something Essential — main.ts
// Writes a single deadpan one-star review of gravity to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review = "One star. Gravity has dropped everything I own at least once and refuses to apologise, let alone pick any of it up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
if (review.length < 1 || review.length > 160) {
  throw new Error("review must be 1-160 characters");
}
if (review.includes("\n")) {
  throw new Error("review must be a single line");
}
if (review.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}
writeFileSync(join(outDir, "entry.txt"), review, "utf8");

// Done: one line, no trailing newline, gate-checked before writing.
