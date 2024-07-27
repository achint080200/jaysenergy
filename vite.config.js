// import { sync } from "glob";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  preview: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        about: resolve(__dirname, "./about.html"),
        contact: resolve(__dirname, "./contact.html"),
        projects: resolve(__dirname, "./projects.html"),
        services: resolve(__dirname, "./services.html"),
      },
      output: {
        dir: resolve(__dirname, "dist"),
      },
    },
    assetsDir: "src/assets",
  },
});
