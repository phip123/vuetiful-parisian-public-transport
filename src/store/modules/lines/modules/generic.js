import LineService from "../../../../api/LineService";
import * as types from "../mutation-types";

export const genericGetters = {};

export function totalAll(state) {
  return state.all.length;
}

export function genericState() {
  return {
    all: [],
    errorAll: { text: "", error: false },
    loadingAll: false
  };
}

export function genericActions(options) {}

export async function getAll(commit, state, options) {
  commit(options.receive);
  if (state.all.length === 0) {
    try {
      const lines = await LineService.getLinesForNetwork(options.network);
      if (lines.status === 200) {
        commit(options.receiveSuccess, lines.data);
      } else {
        commit(options.receiveFail);
      }
    } catch (ex) {
      commit(options.receiveFail);
    }
  } else {
    commit(options.receiveSuccess, state.all);
  }
}

export function genericMutations(options) {
  return {
    [options.receive](state) {
      state.loadingAll = true;
    },

    [options.receiveSuccess](state, lines) {
      state.all = lines;
      state.loadingAll = false;
    },

    [options.receiveFail](state) {
      state.errorAll = {
        error: true,
        text: `Failed loading all ${options.network} lines`
      };
      state.loadingAll = false;
    },

    [types.RESET_ERROR](state) {
      state.errorAll = { error: false, text: "" };
    }
  };
}
