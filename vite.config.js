import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  base: "/Fast-React-Pizzaria/Home",
  plugins: [
    react(),
    eslint({
      overrideConfig: {
        rules: {
          "no-unused-vars": "warn",
        },
      },
    }),
  ],
});