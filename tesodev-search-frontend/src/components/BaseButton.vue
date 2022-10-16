<template>
  <button v-bind="$attrs" class="btn" :class="btnClass">asdasdasdas</button>
</template>

<script>
export default {
  props: {
    btnClass: {
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
