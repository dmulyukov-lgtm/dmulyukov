// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Динамический пресет: Vercel для деплоя, node-server для локалхоста и GitHub Actions
  nitro: {
    preset: process.env.VERCEL ? 'vercel' : 'node-server'
  }
});
