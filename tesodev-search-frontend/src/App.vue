<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script setup>
import FooterView from "./views/FooterView.vue";
</script>

<style>
#app {
  font-family: Roboto;
}
.container {
  max-width: 1280px;
  margin: auto;
  padding-top: 27px;
}
</style>
