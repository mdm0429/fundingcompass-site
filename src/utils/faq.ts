/**
 * Extract FAQ Q&A pairs from markdown source text.
 *
 * Supports two formats:
 *   1. <details><summary>Question</summary>Answer</details> (primary — used in all content files)
 *   2. **Question?** followed by answer paragraph (legacy fallback)
 */
export function extractFaqs(markdownSource: string): Array<{ q: string; a: string }> {
  const pairs: Array<{ q: string; a: string }> = [];

  // Format 1: <details><summary>Question</summary>Answer</details>
  // This is the primary format used across guides, industries, compare, and provider pages.
  const detailsRe = /<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g;
  let match;
  while ((match = detailsRe.exec(markdownSource)) !== null) {
    const q = match[1].trim();
    const a = match[2]
      .trim()
      .replace(/<[^>]+>/g, ' ')                        // strip HTML tags
      .replace(/\*\*(.*?)\*\*/g, '$1')                 // strip bold
      .replace(/\*(.*?)\*/g, '$1')                     // strip italic
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')         // strip links
      .replace(/\s+/g, ' ')                             // collapse whitespace
      .trim();
    if (q && a) pairs.push({ q, a });
  }

  if (pairs.length > 0) return pairs.slice(0, 8);

  // Format 2: **Question?** bold markdown format (legacy fallback)
  const faqSection = markdownSource.match(/## Frequently Asked Questions[\s\S]*/);
  if (!faqSection) return [];

  const text = faqSection[0];
  const re = /\*\*([^*]+\?)\*\*\n([\s\S]+?)(?=\n\*\*[^*]+\?\*\*|\n## |\n---|\n\n---|\s*$)/g;
  while ((match = re.exec(text)) !== null) {
    const q = match[1].trim();
    const a = match[2]
      .trim()
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\n+/g, ' ');
    if (q && a) pairs.push({ q, a });
  }

  return pairs.slice(0, 8);
}
