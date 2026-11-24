// The Vacuum's Alibi: One Line, 200 Characters — make.fun bounty entry
// A program that writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Pure Node 22 standard library: no network, no model calls, no dependencies.
// Deterministic: running it twice writes byte-identical output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "I did not miss that spot. I performed a strategic retreat after the dust bunny under your bed filed a formal complaint about my suction technique.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
  console.log(`wrote entry.txt: ${LINE.length} characters`);
}

main();
