<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <RouterView class="router-view" />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  width: 100%;
  background-color: var(--basic-background);
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.router-view {
  flex: 1;
  width: 100%;
}
</style>
