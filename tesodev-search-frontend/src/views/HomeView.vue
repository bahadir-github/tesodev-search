<template>
  <div class="home">
    <base-button btnClass="btn-default"></base-button>
    <base-input
      placeholderInput="sa"
      labelText="as"
      :invalid="true"
    ></base-input>
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
    };
  },
  async mounted() {
    await store.dispatch("user/getUsers");
  },
};
</script>
