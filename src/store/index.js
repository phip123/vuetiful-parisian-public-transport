import Vue from "vue";
import Vuex from "vuex";
import lines from "./modules/lines";
import stations from "./modules/stations";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    ...lines,
    ...stations
  },
  strict: debug
});
