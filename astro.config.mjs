// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  // Astro forwards `vite` config to its underlying Vite dev server. The
  // sandbox prep wrapper at /tmp/.viiibin/vite-dev.config.ts only applies to
  // projects with a top-level vite.config — Astro's vite is internal, so we
  // need to set allowedHosts here directly to bypass Vite's CVE-2025-30208
  // host check (the e2b.app preview subdomain is not localhost).
  vite: {
    server: {
      allowedHosts: true,
    },
  },
})
