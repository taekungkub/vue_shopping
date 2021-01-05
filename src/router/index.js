import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/v1",
    name: "v1",
    component: () => import("../views/product/Product_1.vue"),
  },
  {
    path: "/v2",
    name: "v2",
    component: () => import("../views/product/Product_2.vue"),
  },
  {
    path: "/product/:id",
    name: "detail",
    component: () => import("../views/details_product/Detail_1.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
