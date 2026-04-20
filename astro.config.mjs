import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dhkam1102.github.io',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { assets: '_astro' },
});
