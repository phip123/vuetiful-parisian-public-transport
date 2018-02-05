import Vue from "vue";
import Vuex from "vuex";
import lines from "./modules/lines";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  namespaced: true,
  modules: {
    ...lines
  },
  strict: debug
});