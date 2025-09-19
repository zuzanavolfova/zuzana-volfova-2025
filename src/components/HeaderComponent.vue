<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HamburgerMenu from './../widgets/HamburgerMenu.vue'
import i18next from 'i18next'
import { useStore } from './../stores/main'
import { useRouter } from 'vue-router'

import { createClickOutsideHandler } from './../stores/actions'
import MenuNavigationSmall from './../widgets/MenuNavigationSmall.vue'
import MenuNavigationDesktop from '../widgets/MenuNavigationDesktop.vue'
import LocaleComponent from './../widgets/LocaleComponent.vue'

const store = useStore()
const router = useRouter()

const isMenuOpen = ref<boolean>(false)
const isLocaleMenuOpen = ref<boolean>(false)

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
        @keydown.enter="handleMenuIsOpen()"
        @keydown.space="handleMenuIsOpen()"
      />
      <Transition name="menu">
        <MenuNavigationSmall
          v-if="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
          :menu-items="menuItems"
          @navigate="handleNavigation"
        />
      </Transition>
      <MenuNavigationDesktop :menu-items="menuItems" @navigate="handleNavigation" />
    </menu>
    <LocaleComponent
      :is-locale-menu-open="isLocaleMenuOpen"
      :is-scrolled="isScrolled"
      @change-locale="changeLocale"
      @click="isLocaleMenuOpen = !isLocaleMenuOpen"
      @keydown.enter.prevent="isLocaleMenuOpen = !isLocaleMenuOpen"
      @keydown.space.prevent="isLocaleMenuOpen = !isLocaleMenuOpen"
    />
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
      margin: 8px 40px;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease-out;
}
.menu-enter-from {
  transform: translateX(-100%);
}
.menu-leave-to {
  transform: translateX(-100%);
}
</style>
