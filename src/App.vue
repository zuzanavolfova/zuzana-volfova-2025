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
  display: flex;
  flex-direction: column;
  background-color: var(--basic-background);
}
.router-view {
  flex: 1 0 auto;
}
</style>
