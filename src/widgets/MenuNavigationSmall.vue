<script setup lang="ts">
import type { MenuItem } from './../types/interfaces'

const props = defineProps<{
  menuItems: MenuItem[]
}>()

const emit = defineEmits<{ navigate: [path: string] }>()
</script>

<template>
  <nav class="header__menu__hamburger__container" aria-label="Mobile navigation">
    <div
      v-for="item in props.menuItems"
      :key="item.path"
      tabindex="0"
      role="link"
      @click="emit('navigate', item.path)"
      @keydown.enter="emit('navigate', item.path)"
      @keydown.space.prevent="emit('navigate', item.path)"
    >
      {{ $t(item.label) }}
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header__menu__hamburger__container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  text-align: center;
  padding: 8px 0;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--extra-light-background);
  z-index: 1000;
  box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
  div {
    cursor: pointer;
    padding: 8px 12px;
    width: 100%;
    &:hover {
      background-color: white;
    }
  }
}
</style>
