// One Line, No Deadline Met.
// v2 — revised in this session: "one calendar event" -> "a calendar event" for smoother read-aloud rhythm.
// The program writes exactly one line of plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I set three alarms, two reminders, and a calendar event, then confidently ignored all of them like a professional.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
