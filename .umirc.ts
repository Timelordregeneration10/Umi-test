import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "npm",
  publicPath: "/Umi-test/",
  history: {
    type: "hash",
  },
});
