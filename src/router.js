import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const routes = [{ path: "/", component: Home, name: "home" }];

const router = new Router({
  base: "/junior/",
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
});

export default router;
