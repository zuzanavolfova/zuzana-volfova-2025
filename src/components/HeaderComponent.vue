<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import HamburgerMenu from './../widgets/HamburgerMenu.vue'
import i18next from 'i18next'
import { useStore } from './../stores/main'
import { useRouter } from 'vue-router'

import { createClickOutsideHandler } from './../stores/actions'
import MenuNavigationSmall from './../widgets/MenuNavigationSmall.vue'

const store = useStore()
const router = useRouter()

const isMenuOpen = ref<boolean>(false)
const isLocaleMenuOpen = ref<boolean>(false)
const locale = computed<string>(() => store.currentLocale)

const menuItems: Array<{ path: string; label: string }> = [
  { path: '/', label: 'home-h' },
  { path: '/coding', label: 'coding-h' },
  { path: '/UX', label: 'ux-design-h' },
  { path: '/graphic', label: 'graphic-h' },
  { path: '/curriculum', label: 'curriculum-h' },
]

const changeLocale = async (val: string): Promise<void> => {
  await i18next.changeLanguage(val)
  store.currentLocale = val
  isLocaleMenuOpen.value = false
}

const isScrolled = ref<boolean>(false)

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50
}

const handleNavigation = (path: string) => {
  router.push(path)
  isMenuOpen.value = false
}
const handleClickOutsideMenu = createClickOutsideHandler(
  ['.header__menu__hamburger__container'],
  ['hamburger'],
  isMenuOpen,
)

const handleClickOutsideLocale = createClickOutsideHandler(
  ['.header__locale__dropdown'],
  ['header__locale'],
  isLocaleMenuOpen,
)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutsideMenu)
  document.addEventListener('click', handleClickOutsideLocale)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutsideMenu)
  document.removeEventListener('click', handleClickOutsideLocale)
})

const handleMenuIsOpen = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <div class="header">
    <h1 class="header__title">
      <a href="/" @click.prevent="$router.push('/')" aria-label="ZUZANA VOLFOVÁ - Homepage"
        >ZUZANA VOLFOVÁ</a
      >
    </h1>
    <menu class="header__menu" :class="{ 'header__menu--scrolled': isScrolled }">
      <HamburgerMenu
        class="header__menu__hamburger"
        @open-menu="handleMenuIsOpen()"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-nav"
        aria-label="Main menu"
        role="button"
        tabindex="0"
        @keydown.enter="handleMenuIsOpen"
        @keydown.space="handleMenuIsOpen"
      />
      <MenuNavigationSmall
        v-if="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
        :menu-items="menuItems"
        @navigate="handleNavigation"
      />
      <nav class="header__menu__container" aria-label="Desktop navigation">
        <div
          v-for="item in menuItems"
          :key="item.path"
          class="header__menu__item"
          tabindex="0"
          role="link"
          @click="handleNavigation(item.path)"
          @keydown.enter="handleNavigation(item.path)"
          @keydown.space.prevent="handleNavigation(item.path)"
        >
          {{ $t(item.label) }}
        </div>
      </nav>
    </menu>
    <div
      class="header__locale"
      tabindex="0"
      role="button"
      aria-haspopup="true"
      :aria-expanded="isLocaleMenuOpen ? 'true' : 'false'"
      aria-controls="locale-dropdown"
      @click="isLocaleMenuOpen = !isLocaleMenuOpen"
      @keydown.enter="isLocaleMenuOpen = !isLocaleMenuOpen"
      @keydown.space="isLocaleMenuOpen = !isLocaleMenuOpen"
      :class="{
        'header__locale--active': isLocaleMenuOpen,
        'header__locale--scrolled': isScrolled,
      }"
    >
      {{ $t(locale) }}
    </div>
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
        @click="changeLocale(item.title)"
        @keydown.enter="changeLocale(item.title)"
        @keydown.space="changeLocale(item.title)"
      >
        <img class="header__locale__dropdown__image" :src="item.image" :alt="item.title" />
        <span class="header__locale__dropdown__title">{{ $t(item.title) }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  min-height: 100px;
  overflow: visible;
  &__title {
    text-align: center;
    padding: 8px;
    cursor: pointer;
    & a {
      color: var(--primary-color);
      text-decoration: none;
    }
  }
  &__menu {
    position: fixed;
    width: 100%;
    border-bottom: 1px solid var(--light-background);
    padding: 6px 8px;
    background: white;
    z-index: 1000;
    @media (min-width: 900px) {
      max-width: 1250px;
      margin: 0 auto;
    }
    &--scrolled {
      top: 0;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.871);
      padding: 10px;
    }
    &__hamburger {
      justify-self: center;
      margin: 8px;
    }
    &__container {
      display: none;
      @media (min-width: 650px) {
        display: flex;
        justify-content: space-between;
        color: var(--text-medium-grey);
        padding: 8px 80px;
        max-width: 1250px;
      }
    }
    &__item {
      cursor: pointer;
      font-size: 18px;
      color: var(--text-medium-grey);
      font-weight: 600;
      &:hover {
        transform: scale(1.2);
        transition: width 0.3s ease;
      }
    }
  }
  &__locale {
    position: fixed;
    right: 40px;
    top: 68px;
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
  }
  &__locale__dropdown {
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
