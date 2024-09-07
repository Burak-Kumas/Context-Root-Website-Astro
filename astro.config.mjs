import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  outDir: "dist",
  site: "https://burak-kumas.github.io",
  base: "/Context-Root-Website-Astro/",
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    partytown(),
    sitemap(),
  ],
});
