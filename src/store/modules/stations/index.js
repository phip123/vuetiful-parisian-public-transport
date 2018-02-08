import * as types from "./mutation-types";
import StationService from "../../../api/StationService";

const state = {
  all: {},
  loadingAll: false,
  errorAll: { text: "", error: false }
};

export function stationsForLine(state, line) {
  if (state.all[line]) {
    return state.all[line];
  } else {
    return [];
  }
}

const getters = {
  hasErrorAllStations: state => {
    return state.errorAll.error;
  },
  isLoadingAllStations: state => {
    return state.loadingAll;
  },
  stationsForLine: state => line => {
    return stationsForLine(state, line);
  }
};

const actions = {
  resetStationsError({ commit }) {
    commit(types.RESET_ERROR);
  },

  getStationsForLine
};

async function getStationsForLine(commit, state, line, options) {
  commit(options.receiveStations);
  if (state.stations[line]) {
    commit(options.receiveStationsSuccess, {
      line,
      stations: state.stations[line]
    });
  } else {
    try {
      const stations = await StationService.getStationsForLine(line);
      if (stations.status === 200) {
        commit(options.receiveStationsSuccess, {
          line,
          stations: stations.data
        });
      } else {
        commit(options.receiveStationsFail);
      }
    } catch (ex) {
      commit(options.receiveStationsFail);
    }
  }
}

const mutations = {
  [types.RECEIVE_STATIONS_FOR_LINE](state) {
    state.loadingAll = true;
  },

  [types.RECEIVE_STATIONS_FOR_LINE_SUCCESS](state, { line, stations }) {
    state.all[line] = stations;
    state.loadingAll = false;
  },

  [types.RECEIVE_STATIONS_FOR_LINE_FAIL](state) {
    state.errorAll = {
      error: true,
      text: `Failed loading stations`
    };

    state.loadingAll = false;
  },

  [types.RESET_ERROR](state) {
    state.errorAll = { error: false, text: "" };
  }
};

export default {
  stations: {
    state,
    getters,
    actions,
    mutations
  }
};
