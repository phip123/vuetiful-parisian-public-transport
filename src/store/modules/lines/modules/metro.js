import * as types from "../mutation-types";
import Line from "../../../../models/Line";
import LineService from "../../../../api/LineService";
import { METRO } from "../../../../util/constants";

const state = {
  all: []
};

const getters = {};

const actions = {
  async getAllLines({ commit }) {
    const lines = await LineService.getLinesForNetwork(METRO);
    commit(types.RECEIVE_LINES_FOR_METRO, lines.data);
  }
};

const mutations = {
  [types.RECEIVE_LINES_FOR_METRO](state, lines) {
    state.all = lines;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
