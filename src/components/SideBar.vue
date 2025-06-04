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
  <aside class="side-bar">
    <div v-if="sideBarTitle" class="side-bar__title">{{ sideBarTitle }}</div>
    <div class="side-bar__content">
      <slot></slot>
    </div>
  </aside>
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
    text-align: end;
    @media (prefers-color-scheme: dark) {
      font-weight: 500;
      text-decoration-line: underline;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    color: var(--text-dark-grey);
  }
}
</style>
