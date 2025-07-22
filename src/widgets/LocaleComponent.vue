<script setup lang="ts">
import { useStore } from './../stores/main'
import { computed } from 'vue'

defineOptions({
  name: 'LocaleComponent'
})

defineProps({
  isLocaleMenuOpen: {
    type: Boolean,
    required: false,
  },
  isScrolled: {
    type: Boolean,
    required: false,
  },
})

const store = useStore()
const locale = computed<string>(() => store.currentLocale)
const emit = defineEmits<{ changeLocale: [val: string] }>()
</script>
<template>
  <div
    class="header__locale"
    tabindex="0"
    role="button"
    aria-haspopup="true"
    :aria-expanded="isLocaleMenuOpen ? 'true' : 'false'"
    aria-controls="locale-dropdown"
    :class="{
      'header__locale--active': isLocaleMenuOpen,
      'header__locale--scrolled': isScrolled,
    }"
  >
    {{ $t(locale) }}
    <div
      v-if="isLocaleMenuOpen"
      class="header__locale__dropdown"
      role="menu"
      aria-label="Language selection"
    >
      <div class="header__locale__dropdown__arrow" aria-hidden="true"></div>
      <div
        v-for="(item, index) in store.availableLocale"
        :key="index"
        class="header__locale__dropdown__item"
        role="menuitem"
        tabindex="0"
        @click="emit('changeLocale', item.title)"
        @keydown.enter="emit('changeLocale', item.title)"
        @keydown.space="emit('changeLocale', item.title)"
      >
        <img class="header__locale__dropdown__image" :src="item.image" :alt="item.title" loading="lazy" />
        <span class="header__locale__dropdown__title">{{ $t(item.title) }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header__locale {
  position: fixed;
  right: 40px;
  top: 66px;
  width: auto;
  min-width: 32px;
  height: 32px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-dark-grey);
  box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
  padding: 0 4px;
  z-index: 1001;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media (prefers-color-scheme: dark) {
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 650px) {
    top: 10px;
    right: 10px;
    width: 32px;
    margin: 8px;
  }
  @media (min-width: 1250px) {
    position: fixed;
    right: calc(50% - 600px);
    width: 32px;
    margin: 8px;
  }
  &--active {
    background-color: var(--light-background);
  }
  &:hover {
    background-color: var(--light-background);
  }
  &:active {
    background-color: var(--light-background);
  }
  &--scrolled {
    top: 10px;
  }
  &__dropdown {
    position: fixed;
    right: 20px;
    top: 110px;
    width: 100px;
    height: auto;
    padding: 6px 0;
    box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
    background-color: var(--extra-light-background);
    cursor: pointer;
    z-index: 1000;
    @media (min-width: 650px) {
      right: 10px;
      top: 60px;
    }
    @media (min-width: 1250px) {
      right: calc(50% - 600px);
    }

    &::before {
      content: '';
      position: absolute;
      top: -9px;
      right: 20px;
      width: 30px;
      height: 14px;
      background: var(--extra-light-background);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      @media (min-width: 650px) {
        right: 8px;
      }
    }
    &__item {
      display: flex;
      align-items: center;
      padding: 6px 0;
      &:hover {
        background-color: white;
      }
    }
    &__image {
      width: 44px;
    }
    &__title {
      text-transform: uppercase;
    }
  }
}
</style>
