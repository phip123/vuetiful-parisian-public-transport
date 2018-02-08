import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Buefy from "buefy";
import { sync } from "vuex-router-sync";
import "buefy/lib/buefy.css";

Vue.use(Buefy, {
  defaultIconPack: "mdi"
});

Vue.config.productionTip = false;

const unsync = sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
