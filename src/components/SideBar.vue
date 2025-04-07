<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  sideBarTitle: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="side-bar">
    <div v-if="sideBarTitle" class="side-bar__title">{{ sideBarTitle }}</div>
    <div class="side-bar__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-bar {
  display: flex;
  flex-direction: column;
  width: var(--side-bar-width);
  background-color: white;
  color: var(--primary-color);
  border-right: 1px solid var(--primary-color);
  &__title {
    font-size: 18px;
    padding: 6px 8px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    color: var(--text-dark-grey);
  }
}
</style>
