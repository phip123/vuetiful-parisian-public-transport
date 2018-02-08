import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Stations from "./views/Stations.vue";
import Lines from "./views/Lines.vue";
import Missions from "./views/Missions.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      //TODO with params
      path: "/missions",
      name: "missions",
      component: Missions
    },
    {
      path: "/stations",
      name: "stations",
      children: [
        {
          path: ":lineid",
          name: "stations line",
          component: Stations
        }
      ]
    },
    {
      path: "/lines",
      name: "lines",
      component: Lines
    }
  ]
});
