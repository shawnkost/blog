import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config"

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind(), react(), sitemap()],
  scopedStyleStrategy: 'where'
});
