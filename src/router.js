import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/biodiversidad",
    name: "biodiversidad",
    component: () => import("./components/SitioList")
  },
  {
    path: "/biodiversidad/:id",
    name: "sitio-details",
    component: () => import("./components/Sitio")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
