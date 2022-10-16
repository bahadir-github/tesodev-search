<template>
  <div class="home">
    <base-button btnClass="btn-default"></base-button>
    <base-input
      placeholderInput="sa"
      labelText="as"
      :invalid="true"
    ></base-input>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store/index";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  components: {
    HelloWorld,
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      obj: {},
    };
  },
  async mounted() {
    await store.dispatch("user/getUsers");
  },
};
</script>
