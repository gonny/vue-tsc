import { type RouteRecordRaw } from "vue-router";
import type { RouterOptions } from "vite-ssg";
import EntryEditor from "./../components/EntryEditor.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: EntryEditor,
  },
];

const routerOptions: RouterOptions = {
  routes,
  base: import.meta.env.BASE_URL,
};

export { routes };

export default routerOptions;
