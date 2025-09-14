import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external access (LAN)
    port: 3000, // force port 3000
    strictPort: true, // fail if port 3000 is in use
  },
});
