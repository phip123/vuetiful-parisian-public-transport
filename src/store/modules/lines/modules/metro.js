import * as types from "../mutation-types";
import { METRO } from "../../../../util/constants";
import * as fromGeneric from "./generic";

const options = {
  network: METRO,
  receive: types.RECEIVE_LINES_FOR_METRO,
  receiveSuccess: types.RECEIVE_LINES_FOR_METRO_SUCCESS,
  receiveFail: types.RECEIVE_LINES_FOR_METRO_FAIL
};

const totalMetros = state => fromGeneric.totalAll(state);
const getAllMetroLines = ({ commit, state }) =>
  fromGeneric.getAll(commit, state, options);

const state = {};

const getters = { totalMetros };

const actions = { getAllMetroLines };

const mutations = {};

export default {
  state: Object.assign(fromGeneric.genericState, state),
  getters,
  actions,
  mutations: Object.assign(fromGeneric.genericMutations(options), mutations)
};
