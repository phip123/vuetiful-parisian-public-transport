import * as types from "../mutation-types";
import Line from "../../../../models/Line";
import LineService from "../../../../api/LineService";
import { METRO } from "../../../../util/constants";

const state = {
  all: [],
  errorAll: { text: "", error: false },
  loadingAll: false
};

const getters = {};

const actions = {
  async getAllMetroLines({ commit }) {
    commit(types.RECEIVE_LINES_FOR_METRO);
    try {
      const lines = await LineService.getLinesForNetwork(METRO);
      if (lines.status === 200) {
        commit(types.RECEIVE_LINES_FOR_METRO_SUCCESS, lines.data);
      } else {
        commit(types.RECEIVE_LINES_FOR_METRO_FAIL);
      }
    } catch (ex) {
      commit(types.RECEIVE_LINES_FOR_METRO_FAIL);
    }
  }
};

const mutations = {
  [types.RECEIVE_LINES_FOR_METRO](state) {
    state.loadingAll = true;
  },

  [types.RECEIVE_LINES_FOR_METRO_SUCCESS](state, lines) {
    state.all = lines;
    state.loadingAll = false;
  },

  [types.RECEIVE_LINES_FOR_METRO_FAIL](state) {
    state.errorAll = { error: true, text: "Failed loading all metro lines" };
    state.loadingAll = false;
  },

  [types.RESET_ERROR](state) {
    state.errorAll = { error: false, text: "" };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
