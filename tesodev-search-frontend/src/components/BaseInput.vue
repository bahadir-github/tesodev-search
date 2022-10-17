<template>
  <div class="start-div">
    <label class="form-label" :class="invalid ? 'invalid-label' : ''">{{
      labelText
    }}</label>
    <input
      :placeholder="placeholderInput"
      class="form-input"
      :class="invalid ? 'invalid-input' : ''"
    />
    <p v-if="invalid" class="input-error">Error</p>
  </div>
</template>

<script>
export default {
  props: {
    invalid: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
      default: "",
    },
    placeholderInput: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.start-div {
  text-align: start;
  width: 50%;
}
.invalid-label {
  color: #ff0000b2;
}
.invalid-input {
  border: 1.5px solid #ff0000;
}
</style>
