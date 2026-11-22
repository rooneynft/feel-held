import { mkdirSync, writeFileSync } from "node:fs";

const text = [
  "The cat sleeps on the folded sweater.",
  "Her breathing moves the wool,",
  "slow as a tide that forgot",
  "the shore. The room is warm.",
  "Outside the window, rain",
  "finds the glass and stays there,",
  "a whole small weather, held still.",
  "You watch it. It does not ask.",
  "It only keeps being rain.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
