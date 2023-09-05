import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("./Pages/Welcome.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("./Pages/Products.vue"),
    children: [
      {
        path: "",
        name: "",
        component: () => import("./Pages/Product.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
