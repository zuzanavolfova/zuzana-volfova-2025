<script setup lang="ts">
import type { MenuItem } from './../types/interfaces'

defineOptions({
  name: 'MenuNavigationDesktop'
})

const props = defineProps<{
  menuItems: MenuItem[]
}>()

const emit = defineEmits<{ navigate: [path: string] }>()

</script>
<template>
  <nav class="header__menu__container" aria-label="Desktop navigation">
    <div
      v-for="item in props.menuItems"
      :key="item.path"
      class="header__menu__item"
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
.header__menu__container {
  display: none;
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    color: var(--text-medium-grey);
    padding: 8px 80px;
    max-width: 1250px;
  }
}
.header__menu__item {
  cursor: pointer;
  font-size: 18px;
  color: var(--text-medium-grey);
  font-weight: 600;
  &:hover {
    transform: scale(1.2);
    transition: width 0.3s ease;
  }
}
</style>
