<template>
  <div>
    <button v-on="$listeners" v-bind="$attrs" class="btn" :class="btnClass">
      <img
        src="@/assets/images/btnIcon.png"
        alt="btn"
        class="btn-icon"
        v-if="withIcon"
      />
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      required: false,
    },
    btnText: {},
    withIcon: {},
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
