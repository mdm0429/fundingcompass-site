import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://fundingcompass.guide',
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, {
        rel: ['nofollow', 'noopener'],
        target: '_blank',
        test: (node) => typeof node.properties?.href === 'string' &&
          node.properties.href.startsWith('http') &&
          !node.properties.href.includes('fundingcompass.guide'),
      }],
    ],
  },
});
