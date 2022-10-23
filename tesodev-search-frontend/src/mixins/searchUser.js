import store from "@/store/index";
import { mapState } from "vuex";

export const searchUser = {
  methods: {
    filterUsers(searchWord) {
      let filteredUser = this.users.filter((user) =>
        Object.values(user).some((value) => {
          if (isNaN(value)) {
            return value.includes(searchWord);
          }
        })
      );
      store.commit("SET_FIlTERED_USERS", filteredUser);
    },
    sortData(type, orderBy) {
      if (orderBy === "asc") {
        if (type === "Name_Surname") {
          this.filteredUser.sort((a, b) =>
            a.Name_Surname < b.Name_Surname ? -1 : 1
          );
        } else {
          this.filteredUser.sort((a, b) =>
            a.Date.slice(-4) < b.Date.slice(-4) ? -1 : 1
          );
        }
      } else {
        if (type === "Name_Surname") {
          this.filteredUser.sort((a, b) =>
            a.Name_Surname > b.Name_Surname ? -1 : 1
          );
        } else {
          this.filteredUser.sort((a, b) =>
            a.Date.slice(-4) > b.Date.slice(-4) ? -1 : 1
          );
        }
      }

      store.commit("SET_FIlTERED_USERS", this.filteredUser);
    },
  },
  computed: {
    ...mapState(["users", "filteredUser"]),
  },
};
