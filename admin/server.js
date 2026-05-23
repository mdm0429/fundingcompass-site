/**
 * FundingCompass Local Admin
 * Run: node server.js
 * Opens at: http://localhost:3001
 */

const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { spawn } = require('child_process');
const matter  = require('gray-matter');

const app         = express();
const PORT        = 3001;
const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
const SITE_DIR    = path.join(__dirname, '..');
const NODE_BIN    = process.execPath; // use whichever node is running this server

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Helpers ──────────────────────────────────────────────────────────────────

const SECTION_ORDER = ['compare', 'guides', 'industries', 'providers', 'tools', 'legal', 'glossary', 'root'];
const SECTION_LABELS = {
  compare:    'Compare',
  guides:     'Guides',
  industries: 'Industries',
  providers:  'Providers',
  tools:      'Tools',
  legal:      'Site Pages',
  glossary:   'Glossary',
  root:       'Home',
};

function scanPages(dir, prefix = '') {
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      pages.push(...scanPages(full, prefix ? `${prefix}/${entry.name}` : entry.name));
    } else if (entry.name.endsWith('.md')) {
      const raw   = fs.readFileSync(full, 'utf8');
      const { data } = matter(raw);
      const filePath = prefix ? `${prefix}/${entry.name}` : entry.name;
      const section  = prefix ? prefix.split('/')[0] : 'root';
      pages.push({
        path:    filePath,
        title:   data.title   || entry.name.replace('.md', ''),
        section: section,
        lastReviewed: data.last_reviewed ? String(data.last_reviewed).substring(0, 10) : null,
      });
    }
  }
  return pages;
}

function resolveContentPath(p) {
  // Prevent path traversal
  const abs = path.resolve(CONTENT_DIR, p);
  if (!abs.startsWith(path.resolve(CONTENT_DIR))) throw new Error('Invalid path');
  return abs;
}

// ── API ───────────────────────────────────────────────────────────────────────

// List all pages grouped by section
app.get('/api/pages', (req, res) => {
  try {
    const pages = scanPages(CONTENT_DIR);
    // Sort within each section alphabetically by title
    pages.sort((a, b) => {
      const si = SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section);
      if (si !== 0) return si;
      return a.title.localeCompare(b.title);
    });
    res.json(pages);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get a single page
app.get('/api/page', (req, res) => {
  try {
    const filePath = resolveContentPath(req.query.path);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Not found' });
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);

    // Expose only editable fields — keep technical fields server-side
    res.json({
      title:        data.title        || '',
      description:  data.description  || '',
      lastReviewed: data.last_reviewed ? String(data.last_reviewed).substring(0, 10) : '',
      content:      content,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Save a page (only updates editable fields, preserves technical frontmatter)
app.post('/api/page', (req, res) => {
  try {
    const { path: p, title, description, lastReviewed, content } = req.body;
    const filePath = resolveContentPath(p);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Not found' });

    const raw  = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);

    // Merge — only touch the three editable fields
    const updatedData = { ...parsed.data };
    if (title        !== undefined) updatedData.title       = title;
    if (description  !== undefined) updatedData.description = description;
    if (lastReviewed !== undefined && lastReviewed !== '') {
      updatedData.last_reviewed = lastReviewed;
    }

    // Reconstruct file preserving body exactly as-is
    const newRaw = matter.stringify(content, updatedData);
    fs.writeFileSync(filePath, newRaw, 'utf8');
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Build — streams output via SSE
app.get('/api/build', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const send = (type, message) =>
    res.write(`data: ${JSON.stringify({ type, message })}\n\n`);

  send('info', 'Starting build…');

  const astro = path.join(SITE_DIR, 'node_modules/.bin/astro');
  const child = spawn(NODE_BIN, [astro, 'build'], { cwd: SITE_DIR });

  child.stdout.on('data', d => send('output', d.toString()));
  child.stderr.on('data', d => send('output', d.toString()));

  child.on('close', code => {
    if (code === 0) {
      send('success', 'Build complete — dist/ is ready to upload.');
    } else {
      send('error', `Build failed (exit ${code})`);
    }
    res.end();
  });

  req.on('close', () => child.kill());
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\nFundingCompass Admin  →  http://localhost:${PORT}\n`);
});
