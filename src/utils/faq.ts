/**
 * Extract FAQ Q&A pairs from markdown source text.
 * Looks for bold questions (**Question?**) followed by answer paragraphs
 * in the "## Frequently Asked Questions" section.
 */
export function extractFaqs(markdownSource: string): Array<{ q: string; a: string }> {
  const faqSection = markdownSource.match(/## Frequently Asked Questions[\s\S]*/);
  if (!faqSection) return [];

  const text = faqSection[0];
  const pairs: Array<{ q: string; a: string }> = [];

  // Match **Question text** followed by answer paragraph
  const re = /\*\*([^*]+\?)\*\*\n([\s\S]+?)(?=\n\*\*[^*]+\?\*\*|\n## |\n---|\n\n---|\s*$)/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const q = match[1].trim();
    // Strip markdown formatting from answer (keep full text — no length cap)
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
