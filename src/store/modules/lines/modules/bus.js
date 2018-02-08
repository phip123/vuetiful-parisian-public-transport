import * as types from "../mutation-types";
import { BUS } from "../../../../util/constants";
import * as fromGeneric from "./generic";

const options = {
  network: BUS,
  receive: types.RECEIVE_LINES_FOR_BUS,
  receiveSuccess: types.RECEIVE_LINES_FOR_BUS_SUCCESS,
  receiveFail: types.RECEIVE_LINES_FOR_BUS_FAIL
};

const totalBusses = state => fromGeneric.totalAll(state);
const getAllBusLines = ({ commit, state }) =>
  fromGeneric.getAll(commit, state, options);

const state = {};

const getters = { totalBusses };

const actions = { getAllBusLines };

const mutations = {};

export default {
  state: Object.assign(fromGeneric.genericState, state),
  getters,
  actions,
  mutations: Object.assign(fromGeneric.genericMutations(options), mutations)
};
