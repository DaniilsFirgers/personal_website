import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    // meta:{
    //     layout: 'DefaultLayout'
    // }
  },
];

export default routes;
