import * as types from "../mutation-types";
import { RER } from "../../../../util/constants";
import * as fromGeneric from "./generic";

const options = {
  network: RER,
  receive: types.RECEIVE_LINES_FOR_RER,
  receiveSuccess: types.RECEIVE_LINES_FOR_RER_SUCCESS,
  receiveFail: types.RECEIVE_LINES_FOR_RER_FAIL
};

const totalRers = state => fromGeneric.totalAll(state);
const getAllRerLines = ({ commit, state }) =>
  fromGeneric.getAll(commit, state, options);

const state = {};

const getters = { totalRers };

const actions = { getAllRerLines };

const mutations = {};

export default {
  state: Object.assign(fromGeneric.genericState, state),
  getters,
  actions,
  mutations: Object.assign(fromGeneric.genericMutations(options), mutations)
};
