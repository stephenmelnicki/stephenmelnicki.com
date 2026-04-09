import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanityIntegration from "@sanity/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
  loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");

export default defineConfig({
  site: "https://stephenmelnicki.com",
  adapter: netlify(),
  integrations: [
    sitemap(),
    sanityIntegration({
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
      dataset: PUBLIC_SANITY_STUDIO_DATASET,
      useCdn: false,
      apiVersion: "2026-04-08",
    }),
    react(),
  ],
});
