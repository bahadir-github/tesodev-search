<template>
  <button v-on="$listeners" v-bind="$attrs" class="btn" :class="btnClass">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      required: false,
    },
    btnText: {
      type: String,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.btn2123123123 {
  background-color: aqua;
}
</style>
