<template>
  <div style="height: 1000px">
    <div class="add-new">
      <base-button
        btnClass="btn-default"
        btnText="Add new record"
      ></base-button>
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
          <base-input v-model="abc" class="input" iconInput="true"></base-input>
          <base-button btnClass="btn-default" btnText="Search"></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store/index";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      obj: {},
      abc: "",
    };
  },
  async mounted() {
    await store.dispatch("user/getUsers");
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
  margin: auto;
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
</style>
