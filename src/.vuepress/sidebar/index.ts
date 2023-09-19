import { userGuide } from "./user-guide";
import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/user-guide/": userGuide,
  "/plugin-dev-guide/": "structure",
  "/csl-dev-guide/": "structure",
  "/about/": "structure",
  "/": "structure",
});
