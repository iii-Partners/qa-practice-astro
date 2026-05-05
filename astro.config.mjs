// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  // Astro 5 forwards this `vite` block into its underlying Vite dev server.
  // Vite enforces a host allow-list (CVE-2025-30208) and rejects the e2b.app
  // preview subdomain by default. Allow the entire e2b.app domain (leading
  // dot = match all subdomains) so the matrix's preview navigation works.
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1'],
    },
  },
})
