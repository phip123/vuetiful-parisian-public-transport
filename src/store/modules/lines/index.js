import metro from "./modules/metro";
import bus from "./modules/bus";
import tram from "./modules/tram";
import rer from "./modules/rer";
import * as types from "./mutation-types";

const getters = {
  hasErrorAll: state => {
    const allErrors = [
      state.metro.errorAll,
      state.bus.errorAll,
      state.tram.errorAll,
      state.rer.errorAll
    ];
    return allErrors.find(e => e.error) || { error: false, text: "" };
  },
  isLoadingAll: state => {
    const allLoading = [
      state.metro.loadingAll,
      state.bus.loadingAll,
      state.tram.loadingAll,
      state.rer.loadingAll
    ];
    return allLoading.find(l => l) || false;
  }
};

const actions = {
  resetErrors({ commit }) {
    commit(types.RESET_ERROR);
  }
};

const mutations = {};

export default {
  lines: {
    getters,
    actions,
    mutations,
    modules: {
      metro: {
        ...metro
      },
      bus: {
        ...bus
      },
      tram: {
        ...tram
      },
      rer: {
        ...rer
      }
    }
  }
};
