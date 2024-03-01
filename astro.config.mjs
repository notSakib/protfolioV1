import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    // syntaxHighlight: 'prism'
  },
  integrations: [
    tailwind({
      // applyBaseStyles: false
    }), 
    expressiveCode(),
    mdx(), 
  ]
});