#!/usr/bin/env node
/**
 * generate-manifest.js
 * - Scans root directory for .md exam files
 * - Copies them into frontend/
 * - Writes frontend/exams.json
 *
 * Usage:             node generate-manifest.js
 * Netlify build cmd: node generate-manifest.js
 */

const fs   = require('fs');
const path = require('path');

const ROOT     = __dirname;               // examtopics-downloader/
const FRONTEND = path.join(ROOT, 'frontend');
const SKIP     = new Set(['README.md', 'readme.md', 'CHANGELOG.md']);

if (!fs.existsSync(FRONTEND)) fs.mkdirSync(FRONTEND, { recursive: true });

// ── Category detection ────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'ml',         keywords: ['machine learning', 'mls-c'],    icon: '🤖', color: '#58a6ff', label: 'Machine Learning'      },
  { id: 'security',   keywords: ['security', 'scs-c'],            icon: '🔒', color: '#f0883e', label: 'Security'               },
  { id: 'developer',  keywords: ['developer', 'dva-c'],           icon: '⚡', color: '#3fb950', label: 'Developer'              },
  { id: 'architect',  keywords: ['solutions architect', 'saa-c', 'sap-c'], icon: '🏗️', color: '#a371f7', label: 'Solutions Architect' },
  { id: 'sysops',     keywords: ['sysops', 'soa-c'],              icon: '⚙️', color: '#e3b341', label: 'SysOps Administrator'   },
  { id: 'devops',     keywords: ['devops', 'dop-c'],              icon: '🔄', color: '#ff7b72', label: 'DevOps Engineer'        },
  { id: 'database',   keywords: ['database', 'dbs-c'],            icon: '🗄️', color: '#39d353', label: 'Database'              },
  { id: 'networking', keywords: ['network', 'ans-c'],             icon: '🌐', color: '#79c0ff', label: 'Networking'             },
  { id: 'data',       keywords: ['data analytics', 'das-c'],      icon: '📊', color: '#56d364', label: 'Data Analytics'        },
  { id: 'ai',         keywords: ['artificial intelligence', 'aif-c', 'mla-c'], icon: '🧠', color: '#d2a8ff', label: 'AI / ML Engineer' },
];

function getCategory(text) {
  const lower = text.toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.keywords.some(kw => lower.includes(kw))) return cat;
  }
  return { id: 'cloud', icon: '☁️', color: '#ff9900', label: 'Cloud' };
}

function parseFile(content, filename) {
  const blocks = content.split(/\n-{38,}\n/);
  const count  = blocks.filter(b => /Question #:\s*\d+/.test(b)).length;
  if (count === 0) return null;

  const headerMatch = content.match(/## Exam ([^\n]+?) topic \d+/);
  const rawTitle = headerMatch
    ? headerMatch[1].trim()
    : filename.replace(/\.md$/, '').replace(/[_-]/g, ' ');

  const codeMatch = rawTitle.match(/\b([A-Z]{2,4}-C\d{2,})\b/);
  const code  = codeMatch ? codeMatch[1] : '';
  const title = rawTitle.replace(/\s+[A-Z]{2,4}-C\d{2,}$/, '').trim();
  const cat   = getCategory(rawTitle + ' ' + filename);

  return { file: filename, title, code, questions: count,
           category: cat.id, icon: cat.icon, color: cat.color, label: cat.label };
}

// ── Main ─────────────────────────────────────────────────────────────
const mdFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.md') && !SKIP.has(f));

if (mdFiles.length === 0) {
  console.error('No .md files found in', ROOT);
  process.exit(1);
}

const exams = mdFiles
  .map(f => {
    try {
      const content = fs.readFileSync(path.join(ROOT, f), 'utf8');
      const exam    = parseFile(content, f);
      if (!exam) return null;
      // copy md file into frontend/ so the site can fetch it
      fs.copyFileSync(path.join(ROOT, f), path.join(FRONTEND, f));
      return exam;
    } catch (e) {
      console.warn(`  ⚠ Skipping ${f}: ${e.message}`);
      return null;
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

fs.writeFileSync(path.join(FRONTEND, 'exams.json'), JSON.stringify(exams, null, 2));

console.log(`\n✓ frontend/exams.json updated — ${exams.length} exam(s) found:\n`);
exams.forEach(e =>
  console.log(`  ${e.icon}  [${e.code || '---'}] ${e.title} — ${e.questions} questions  (${e.file})`)
);
console.log('\n→ Deploy the frontend/ folder to Netlify.\n');
