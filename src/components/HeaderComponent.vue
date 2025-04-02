<script setup lang="ts">
import { ref } from 'vue'
import HamburgerMenu from './../widgets/HamburgerMenu.vue'

import i18next from 'i18next'

const isMenuOpen = ref(false)
</script>

<template>
  <div class="header">
    <h1 class="header__title">ZUZANA VOLFOVÁ</h1>
    <menu class="header__menu">
      <HamburgerMenu class="header__menu__hamburger" @open-menu="isMenuOpen = !isMenuOpen" />
      <div v-if="isMenuOpen">
        <div>{{ $t('coding-h') }}</div>
        <div>{{ $t('ux-design-h') }}</div>
        <div>{{ $t('graphic-h') }}</div>
        <div>{{ $t('curriculum-h') }}</div>
      </div>
    </menu>
    <div class="header__locale">{{ i18next.language }}</div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  &__title {
    text-align: center;
    padding: 8px;
  }
  &__menu {
    padding: 6px 20px;
    &__hamburger {
      justify-self: center;
    }
  }
  &__locale {
    position: absolute;
    right: 40px;
    top: 62px;
    width: 32px;
    height: 32px;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--text-dark-grey);
    border: 1px solid var(--text-medium-grey);
    box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
  }
}
</style>
