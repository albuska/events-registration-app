import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/events-registration-app",
  server: {
    open: "/events-registration-app",
    port: 3000,
  },
});
