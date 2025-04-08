<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
