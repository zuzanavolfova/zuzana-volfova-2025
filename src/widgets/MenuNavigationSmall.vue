<script setup lang="ts">
import type { MenuItem } from './../types/interfaces'

const props = defineProps<{
  menuItems: MenuItem[]
}>()

const emit = defineEmits<{ navigate: [path: string] }>()
</script>

<template>
  <nav class="menu-hamburger__container" aria-label="Mobile navigation">
    <div
      v-for="item in props.menuItems"
      :key="item.path"
      tabindex="0"
      role="link"
      @click="emit('navigate', item.path)"
      @keydown.enter="emit('navigate', item.path)"
      @keydown.space.prevent="emit('navigate', item.path)"
    >
      <span class="menu-hamburger__item">{{ $t(item.label) }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.menu-hamburger {
  &__container {
    position: absolute;
    width: 75vw;
    height: 650px;
    left: 0;
    padding: 18px 24px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--extra-light-background);
    z-index: 1000;
    box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
    div {
      cursor: pointer;
      padding: 12px 12px;
      width: 100%;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid rgba(124, 124, 124, 0.5);
    }
  }
  &__item {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-medium-grey);
    width: 100%;
  }
}
</style>
