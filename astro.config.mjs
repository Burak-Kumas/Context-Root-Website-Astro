import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  site: "https://burak-kumas.github.io/",
  base: "my-repo",
  integrations: [tailwind()],
});
