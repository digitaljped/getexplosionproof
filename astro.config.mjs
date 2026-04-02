// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.getexplosionproof.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
