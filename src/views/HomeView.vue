<script setup lang="ts">
import CarouselComponent from './../components/CarouselComponent.vue'
</script>

<template>
  <main class="home">
    <CarouselComponent />
  </main>
</template>
<style lang="scss" scoped>
.home {
  margin-top: 20px;
  padding: 10px;
  @media (min-width: 650px) {
    padding: 20px;
  }
}
</style>
