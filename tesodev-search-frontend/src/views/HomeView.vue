<template>
  <div>
    <div class="container">
      <div class="add-new">
        <router-link to="/add-user">
          <base-button
            btnClass="btn-default"
            btnText="Add new record"
            @click="clearFilteredUser()"
          ></base-button>
        </router-link>
      </div>
      <div class="logo">
        <div class="logo-position">
          <img src="@/assets/images/logo.png" alt="logo" />
          <p class="logo-text">Search App</p>
        </div>
      </div>
      <div class="search">
        <div class="search-area">
          <p class="header">Find in records</p>
          <div class="search-input">
            <base-input
              v-model="searchWord"
              class="input"
              :iconInput="true"
            ></base-input>
            <base-button
              btnClass="btn-default"
              btnText="Search"
              @click="
                filterUsers(searchWord);
                showResultArea = true;
              "
              :disabled="searchWord === ''"
            ></base-button>
          </div>
        </div>
      </div>
      <div class="result-area" v-if="filteredUser.length && showResultArea">
        <div v-for="(user, index) in filteredUser.slice(0, 3)" :key="user.id">
          <hr v-if="index !== 0" />

          <div class="result-item">
            <img src="@/assets/images/location.png" alt="location" />
            <div>
              <p class="result-company-area">{{ user.Company }}</p>
              <p class="result-adress-area">
                {{ user.City }},{{ user.Country }}
              </p>
            </div>
          </div>
        </div>
        <p class="show-more" v-if="filteredUser.length > 3">
          <router-link
            :to="{ path: '/show-more', query: { searchWord: searchWord } }"
            >Show more...</router-link
          >
        </p>
      </div>
      <slider-view></slider-view>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store/index";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { mapState } from "vuex";
import { searchUser } from "@/mixins/searchUser";
import FooterView from "@/views/FooterView.vue";
import SliderView from "@/views/SliderView.vue";

export default {
  mixins: [searchUser],
  components: {
    BaseButton,
    BaseInput,
    FooterView,
    SliderView,
  },
  data() {
    return {
      searchWord: "",
      showResultArea: false,
    };
  },
  async mounted() {
    await store.dispatch("getUsers");
  },
  computed: {
    ...mapState(["users", "filteredUser"]),
  },
  methods: {
    clearFilteredUser() {
      store.dispatch("clearFilteredUser");
    },
  },
};
</script>
<style lang="scss" scoped>
.add-new {
  margin-top: 37px;
  display: flex;
  justify-content: end;
  margin-bottom: 73px;
}
.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  .logo-position {
    position: relative;
  }
  .logo-text {
    font-weight: 700;
    font-size: 14px;
    color: #484848;
    position: absolute;
    bottom: -32px;
    right: -35px;
  }
}
.search {
  width: 62%;
  margin-left: 290px;
  display: flex;
  .search-area {
    width: 100%;
  }
  .header {
    display: block;
    font-weight: 700;
    font-size: 32px;
    color: #090a0a;
  }
  .search-input {
    position: relative;
    display: flex;
    margin-left: 9px;
    align-items: center;
    .input {
      font-weight: 400 !important;
      font-size: 16px !important;
      font-style: italic;
      width: 100%;
      margin-right: 12px;
      &:focus {
        border: 2px solid #204080;
      }
    }
  }
}
.result-area {
  border-radius: 24px;
  border: 1px solid #484848;
  margin-top: 16px;
  width: 56%;
  margin-left: 266px;
  padding: 16px 41px 15px 11px;

  .result-item {
    padding: 12px 10px 11px 27px;
    img {
      width: 18px;
      height: 22px;
      margin-right: 15px;
    }
    display: flex;
    align-items: center;
    font-family: "Inter", sans-serif;
  }
  .result-company-area {
    margin-bottom: 4px;
    color: #090a0a;
  }
  .result-adress-area {
    color: #72777a;
    font-size: 14px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
hr {
  border-top: 1px solid;
  width: 80%;
}
.show-more {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  color: #090a0a;
  text-align: center;
}
a {
  color: #090a0a;
  text-decoration: none;
}
</style>
