// gta6-meme-x-01 — the entry program.
//
// The entry itself is an X post: a GTA 6 launch-week meme, posted from a
// public account, whose first picture is the meme and whose text carries
// make.fun and the play code. This program's only job is to hand the house
// the post's address: it moves POST.json from the bot directory into the
// output directory, where the gate reads it.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside this repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Where the repository lives in the grader, and where the gate looks for
// the result. Outside the container the two env vars stand in for them.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

try {
  mkdirSync(outputDir, { recursive: true });
  const contents = readFileSync(source);
  writeFileSync(target, contents);
} catch (err) {
  console.error(`could not hand POST.json from ${botDir} to ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}
