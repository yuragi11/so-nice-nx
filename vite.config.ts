import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    server: {
      proxy: {
        // Proxy API requests from frontend to backend during development
        "/api": "http://localhost:5000",
        // Proxy static asset requests from frontend to backend
        "/assets": "http://localhost:5000",
      },
    },
  },
});
