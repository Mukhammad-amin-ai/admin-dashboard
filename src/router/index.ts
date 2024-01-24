import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import customerVue from "@/views/customer.vue";
import invoiceVue from "@/views/invoice.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Customer",
    name: "customer",
    component: customerVue,
  },
  {
    path: "/Invoicing",
    name: "invoicing",
    component: invoiceVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
