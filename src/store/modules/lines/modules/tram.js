import * as types from "../mutation-types";
import { TRAM } from "../../../../util/constants";
import * as fromGeneric from "./generic";

const options = {
  network: TRAM,
  receive: types.RECEIVE_LINES_FOR_TRAM,
  receiveSuccess: types.RECEIVE_LINES_FOR_TRAM_SUCCESS,
  receiveFail: types.RECEIVE_LINES_FOR_TRAM_FAIL
};

const getAllTramLines = ({ commit, state }) =>
  fromGeneric.getAll(commit, state, options);
const totalTrams = state => fromGeneric.totalAll(state);

const state = {};

const getters = { totalTrams };

const actions = { getAllTramLines };

const mutations = {};

export default {
  state: Object.assign(fromGeneric.genericState, state),
  getters,
  actions,
  mutations: Object.assign(fromGeneric.genericMutations(options), mutations)
};
