import Vue from "vue";
import Vuex from "vuex";
import { apiClient } from "@/service/apiClient.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    filteredUser: [],
    addedUser: [],
  },
  getters: {},
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
      if (state.addedUser.length > 0) {
        state.users.push(...state.addedUser);
      }
    },
    SET_FIlTERED_USERS(state, filteredUser) {
      state.filteredUser = filteredUser;
    },
    SET_NEW_USER(state, user) {
      state.addedUser.push(user);
    },
  },
  actions: {
    async getUsers({ commit }) {
      const data = await apiClient.get("users").then((response) => {
        return response.data;
      });
      const cols = await apiClient.get("cols").then((response) => {
        return response.data;
      });
      let usersIds = Array.from(Array(100).keys());
      let createdUsers = usersIds.map((id, index) => {
        let user = {};
        cols.forEach((col, colIndex) => {
          user[col] = data[index][colIndex];
        });
        return user;
      });
      commit("SET_USERS", createdUsers);
    },
    addUser({ commit }, user) {
      commit("SET_NEW_USER", user);
    },
  },
});
