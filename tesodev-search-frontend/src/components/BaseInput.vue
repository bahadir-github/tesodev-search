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
      :placeholder="placeholderInput"
      class="form-input"
      :value="inputValue"
      :class="
        (invalid ? 'invalid-input' : '', iconInput ? 'form-input-icon' : '')
      "
      @input="$emit('input', $event.target.value)"
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
    inputValue: {
      type: String,
    },
    iconInput: {
      type: Boolean,
      default: false,
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
  top: 15px;
  width: 18px;
  height: 18px;
}
</style>
