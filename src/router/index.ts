import { createRouter, createWebHistory } from "vue-router";
import authRouter from "@/modules/auth/router"
import shopRouter from "@/modules/shop/router"
const routes = [
  {
    path: "/",
    ...authRouter
  },
  {
    path: "/shop",
    ...shopRouter
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
