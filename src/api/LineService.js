import axios from "axios";
import { LINE_API } from "../util/constants";

export default {
  async getLinesForNetwork({ id }) {
    return axios.get(`${LINE_API}/${id}`);
  }
};
