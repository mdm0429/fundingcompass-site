/**
 * RSS 2.0 feed — all guide, compare, industry, and provider review pages.
 * Utility pages (glossary, privacy, contact, tools) are excluded.
 * Linked from <head> on every page via Layout.astro.
 */
import { getCollection } from 'astro:content';

const SITE      = 'https://fundingcompass.guide';
const SITE_NAME = 'FundingCompass';
const FEED_URL  = `${SITE}/rss.xml`;

// Paths to EXCLUDE from the feed
const EXCLUDE_PREFIXES = [
  'legal/',
  'tools/',
  'glossary',
  'index',
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRFC822(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toUTCString();
}

export async function GET() {
  const entries = await getCollection('pages');

  const feedEntries = entries
    .filter(e => !EXCLUDE_PREFIXES.some(p => e.id.startsWith(p)))
    .sort((a, b) => {
      const da = new Date(a.data.last_reviewed ?? '2026-01-01').getTime();
      const db = new Date(b.data.last_reviewed ?? '2026-01-01').getTime();
      return db - da;
    });

  const items = feedEntries.map(e => {
    const title       = escapeXml(e.data.title);
    const description = escapeXml(e.data.description ?? '');
    const link        = e.data.canonical;
    const pubDate     = toRFC822(e.data.last_reviewed ?? '2026-05-01');
    return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
  }).join('\n');

  const now = new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE}</link>
    <description>Independent guides to invoice factoring, equipment financing, merchant cash advances, and SBA loans for small businesses.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
