import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import db from "@astrojs/db";

export default defineConfig({
  integrations: [tailwind(), react(), db()],
});