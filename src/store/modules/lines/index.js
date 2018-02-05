import metro from "./modules/metro";
import * as types from "./mutation-types";

const getters = {
  hasErrorAll: state => {
    const allErrors = [state.metro.errorAll];
    return allErrors.find(e => e.error) || { error: false, text: "" };
  },
  isLoadingAll: state => {
    const allLoading = [state.metro.loadingAll];
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
      }
    }
  }
};
