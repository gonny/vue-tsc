import App from "./App.vue";
import "@/assets/base.css";
import { ViteSSG } from "vite-ssg";
import type { UserModule } from "./types";
import routerOptions from "./router";

export const createApp = ViteSSG(
  App,
  routerOptions,
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>("./modules/*.ts", {
        eager: true,
      })
    ).forEach((i) => i.install?.(ctx));
  }
);
