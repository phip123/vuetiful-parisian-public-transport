import axios from "axios";
import { STATIONS_API } from "../util/constants";

export default {
  async getStationsForLine({ id }) {
    return axios.get(`${STATIONS_API}/${id}`);
  }
};
