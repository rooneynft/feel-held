// feel-held: one quiet text for make.fun's "Make the AI judge feel held".
// A reader sits by a rock pool at low tide; the whole sky has settled into
// a bowl no wider than their hands. Short lines, one image, no instruction
// to relax — the calm comes from the text itself.
import { mkdirSync, writeFileSync } from "node:fs";

const text = [
  "You sit where the tide went out.",
  "The rock pool keeps a little sea.",
  "It does not hurry.",
  "It does not spill.",
  "A crab crosses it, slow as evening.",
  "Above it, the whole sky",
  "has settled into a bowl",
  "no wider than your hands.",
  "It stays there.",
  "So do you.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
