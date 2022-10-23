<template>
  <div class="start-div">
    <label class="form-label" :class="invalid ? 'invalid-label' : ''">{{
      labelText
    }}</label>
    <img
      v-if="iconInput"
      src="@/assets/images/searchIcon.png"
      class="search-icon"
    />
    <input
      ref="input"
      type="text"
      :placeholder="placeholderInput"
      class="form-input"
      :class="[
        invalid ? 'invalid-input' : '',
        iconInput ? 'form-input-icon' : '',
      ]"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    />
    <p v-if="invalid" class="input-error">{{ errorText }}</p>
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
    input: {},
    iconInput: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
/*
.start-div {
  text-align: start;
  width: 50%;
}*/
.invalid-label {
  color: #ff0000b2;
}
.invalid-input {
  border: 1.5px solid #ff0000;
}
.search-icon {
  position: absolute;
  left: 15px;
  top: 22px;
  width: 18px;
  height: 18px;
}
</style>
