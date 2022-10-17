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
  background: #e5e5e5;
}
.container {
  max-width: 1280px;
  margin: auto;
}
</style>
