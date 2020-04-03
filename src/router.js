import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import About from "./views/About";
import Press from "./views/Press";
import Home from "./views/Home";
import News from "./views/News";
import Partnerships from "./views/Partnerships";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/press",
      name: "press",
      components: {
        header: AppHeader,
        default: Press,
        footer: AppFooter
      }
    },
    {
      path: "/news",
      name: "news",
      components: {
        header: AppHeader,
        default: News,
        footer: AppFooter
      }
    },
    {
      path: "/partnerships",
      name: "partnerships",
      components: {
        header: AppHeader,
        default: Partnerships,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {selector: to.hash};
    } else {
      return {x: 0, y: 0};
    }
  }
});
