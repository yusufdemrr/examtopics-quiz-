#!/usr/bin/env node
/**
 * update-exams.js
 * Re-downloads all registered exams to pick up new questions,
 * then regenerates the frontend manifest.
 *
 * Usage:  node update-exams.js
 *
 * To add a new exam:
 *   1. Add an entry to exams-registry.json
 *   2. Run: node update-exams.js
 */

const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const ROOT     = __dirname;
const EXAMS    = path.join(ROOT, 'exams');
const REGISTRY = path.join(ROOT, 'exams-registry.json');

if (!fs.existsSync(REGISTRY)) {
  console.error('exams-registry.json not found.');
  process.exit(1);
}

function countQuestions(filePath) {
  if (!fs.existsSync(filePath)) return 0;
  const blocks = fs.readFileSync(filePath, 'utf8').split(/\n-{38,}\n/);
  return blocks.filter(b => /Question #:\s*\d+/.test(b)).length;
}

const registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));

console.log(`\n🔄  Updating ${registry.length} exam(s) — this may take a while...\n`);
console.log('─'.repeat(60));

let updated  = 0;
let skipped  = 0;
let failed   = 0;

for (const entry of registry) {
  const finalPath = path.join(EXAMS, entry.file);
  const tmpPath   = path.join(EXAMS, `_tmp_${entry.file}`);
  const cmd = `go run ./cmd/main.go -p ${entry.provider} -s "${entry.search}" -no-cache -o ${tmpPath}`;

  const oldCount = countQuestions(finalPath);
  console.log(`\n📥  ${entry.file}  [-s "${entry.search}"]  (current: ${oldCount} questions)`);

  try {
    execSync(cmd, { stdio: 'inherit', cwd: ROOT });

    const newCount = countQuestions(tmpPath);

    if (newCount === 0) {
      fs.unlinkSync(tmpPath);
      console.log(`⏭  Skipped — new download returned 0 questions, keeping old file.`);
      skipped++;
    } else if (newCount < oldCount) {
      fs.unlinkSync(tmpPath);
      console.log(`⏭  Skipped — new: ${newCount} < old: ${oldCount}, keeping old file.`);
      skipped++;
    } else {
      fs.renameSync(tmpPath, finalPath);
      console.log(`✓  Updated: ${oldCount} → ${newCount} questions`);
      updated++;
    }
  } catch {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`⚠  Failed: ${entry.file}`);
    failed++;
  }
}

console.log('\n' + '─'.repeat(60));
console.log(`\n📊  Results: ${updated} updated, ${skipped} skipped (no improvement), ${failed} failed\n`);

console.log('🗂  Regenerating manifest...\n');
execSync('node generate-manifest.js', { stdio: 'inherit', cwd: ROOT });
