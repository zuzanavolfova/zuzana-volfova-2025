<script setup lang="ts"></script>

<template>
  <div class="hamburger-menu" @click="$emit('openMenu')">
    <div class="hamburger"></div>
    <div class="hamburger"></div>
    <div class="hamburger"></div>
    <div class="hamburger"></div>
  </div>
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
}
</style>
