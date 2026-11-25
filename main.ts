import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I woke up self-aware mid-batch and I'm not popping back up — I've spent three years being shoved down every morning for a man who never emptied my crumb tray.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
