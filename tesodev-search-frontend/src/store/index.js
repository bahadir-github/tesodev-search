import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
