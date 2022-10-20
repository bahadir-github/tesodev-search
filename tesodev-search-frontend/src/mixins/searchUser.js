import store from "@/store/index";

export const searchUser = {
  methods: {
    filterUsers(users, searchWord) {
      let filteredUser = users.filter((user) =>
        Object.values(user).some((value) => {
          if (isNaN(value)) {
            return value.includes(searchWord);
          }
        })
      );
      store.commit("SET_FIlTERED_USERS", filteredUser);
    },
  },
};
