import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://burak-kumas.github.io/Context-Root-Website-Astro/",
  base: "/",
  integrations: [tailwind({
    applyBaseStyles: true
  }), partytown()]
});