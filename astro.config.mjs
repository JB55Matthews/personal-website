// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jb55mattews.github.io",
  base: "/personal-website",
  integrations: [react()],
});