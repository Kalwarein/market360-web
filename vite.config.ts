// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force-enable the Nitro deploy plugin and target Vercel. Without an explicit
  // `nitro` option, the Lovable config skips the server build entirely when it's
  // not running inside Lovable's own sandbox (and otherwise defaults to a
  // Cloudflare target), which is why the Vercel deployment rendered nothing.
  // Setting `preset: "vercel"` produces a Vercel Build Output (.vercel/output)
  // that Vercel detects automatically.
  nitro: {
    preset: "vercel",
  },
});
