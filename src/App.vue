<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  background-color: var(--basic-background)
}
</style>
