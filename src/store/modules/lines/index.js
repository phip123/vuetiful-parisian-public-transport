import metro from "./modules/metro";

export default {
  lines: {
    namespaced: true,
    modules: {
      metro: {
        namespaced: true,
        ...metro
      }
    }
  }
};
