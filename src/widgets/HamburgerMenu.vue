<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits<{
  openMenu: []
}>()
</script>
<template>
  <nav class="hamburger-menu" @click="$emit('openMenu')">
    <div class="hamburger" :style="{ display: isMenuOpen ? 'none' : 'block' }"></div>
    <div :class="['hamburger', { 'menu-open': isMenuOpen }]"></div>

    <div :class="['hamburger', { 'menu-open': isMenuOpen }]"></div>
    <div class="hamburger" :style="{ display: isMenuOpen ? 'none' : 'block' }"></div>
  </nav>
</template>

<style lang="scss" scoped>
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
  @media (min-width: 650px) {
    display: none;
  }
}

.hamburger {
  height: 3px;
  width: 100%;
  background-color: var(--primary-color);
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.hamburger:nth-child(2).menu-open {
  transform: rotate(45deg) translateY(12px);
  width: 120%;
  transform-origin: center;
}

.hamburger:nth-child(3).menu-open {
  transform: rotate(-45deg) translateY(-12px);
  width: 120%;
  transform-origin: center;
}
</style>
