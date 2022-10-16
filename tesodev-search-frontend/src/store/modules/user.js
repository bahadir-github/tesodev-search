import { apiClient } from "@/service/apiClient.js";

export const namespaced = true;

export const state = {
  users: {},
};

export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
};

export const actions = {
  async getUsers({ commit }) {
    const data = await apiClient.get("/data").then((response) => {
      return response.data;
    });
    const cols = await apiClient.get("/cols").then((response) => {
      return response.data;
    });
    let usersIds = Array.from(Array(100).keys());
    let userObj = usersIds.map((id, index) => {
      let user = { id: id };
      cols.forEach((col, colIndex) => {
        user[col] = data[index][colIndex];
      });
      return user;
    });
    commit("SET_USERS", userObj);
  },
};
