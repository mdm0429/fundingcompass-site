import { getCollection } from 'astro:content';

const SITE = 'https://fundingcompass.guide';

// Static pages with canonical paths derived from frontmatter
export async function GET() {
  const entries = await getCollection('pages');

  const urls: string[] = [];

  for (const entry of entries) {
    const canonical = entry.data.canonical;
    const lastmod = entry.data.last_reviewed ?? '2026-05-01';
    urls.push(`  <url>\n    <loc>${canonical}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>`);
  }

  // Also add the contact page (maps from legal/contact to /contact/)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
