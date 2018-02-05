import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Stations from "./views/Stations.vue";
import Lines from "./views/Lines.vue";
import Directions from "./views/Directions.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/stations",
      name: "stations",
      component: Stations
    },
    {
      path: "/lines",
      name: "lines",
      component: Lines
    },
    {
      path: "/directions",
      name: "directions",
      component: Directions
    }
  ]
});
