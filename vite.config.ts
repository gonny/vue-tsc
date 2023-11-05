import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import generateSitemap from "vite-ssg-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    svgLoader(),
    // imagetools({
    //   defaultDirectives: (url) => {
    //     if (url.searchParams.has('format') && url.searchParams.getAll('format').some((e) => { return e.includes('webp') })) {
    //       return new URLSearchParams({
    //         effort: '6',
    //         smartSubsample: 'true',
    //         quality: '70',
    //       })
    //     }
    //     return new URLSearchParams()
    //   },
    // }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    // WebfontDownload(),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      generateSitemap();
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/],
  },
});
