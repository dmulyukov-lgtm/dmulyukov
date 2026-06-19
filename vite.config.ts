// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Если мы на Vercel - добавляем настройку. Если в GitHub Actions - блок nitro даже не появится.
  ...(process.env.VERCEL ? { nitro: { preset: 'vercel' } } : {})
});
