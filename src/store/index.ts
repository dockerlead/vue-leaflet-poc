import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";
import { map } from "./modules/map";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0"
  },
  mutations: {},
  actions: {},
  modules: {
    map
  }
});
