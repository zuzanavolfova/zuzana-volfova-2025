<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import HamburgerMenu from './../widgets/HamburgerMenu.vue'
import i18next from 'i18next'
import { useStore } from './../stores/main'

const store = useStore()
const isMenuOpen = ref<boolean>(false)
const isLocaleMenuOpen = ref<boolean>(false)
const locale = computed<string>(() => store.currentLocale)

const changeLocale = async (val: string): Promise<void> => {
  await i18next.changeLanguage(val)
  store.currentLocale = val
  isLocaleMenuOpen.value = false
}

const isScrolled = ref<boolean>(false)

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="header">
    <h1 class="header__title" @click="$router.push('/')">ZUZANA VOLFOVÁ</h1>
    <menu class="header__menu" :class="{ 'header__menu--scrolled': isScrolled }">
      <HamburgerMenu class="header__menu__hamburger" @open-menu="isMenuOpen = !isMenuOpen" />
      <div v-if="isMenuOpen" @click="isMenuOpen = false" class="header__menu__hamburger__container">
        <div @click="$router.push('/')">{{ $t('home-h') }}</div>
        <div @click="$router.push('/codding')">{{ $t('coding-h') }}</div>
        <div @click="$router.push('/UX')">{{ $t('ux-design-h') }}</div>
        <div @click="$router.push('/graphic')">{{ $t('graphic-h') }}</div>
        <div @click="$router.push('/curriculum')">{{ $t('curriculum-h') }}</div>
      </div>
      <div class="header__menu__container">
        <div class="header__menu__item" @click="$router.push('/')">{{ $t('home-h') }}</div>
        <div class="header__menu__item" @click="$router.push('/codding')">{{ $t('coding-h') }}</div>
        <div class="header__menu__item" @click="$router.push('/UX')">{{ $t('ux-design-h') }}</div>
        <div class="header__menu__item" @click="$router.push('/graphic')">
          {{ $t('graphic-h') }}
        </div>
        <div class="header__menu__item" @click="$router.push('/curriculum')">
          {{ $t('curriculum-h') }}
        </div>
      </div>
    </menu>
    <div
      class="header__locale"
      @click="isLocaleMenuOpen = !isLocaleMenuOpen"
      :class="{
        'header__locale--active': isLocaleMenuOpen,
        'header__locale--scrolled': isScrolled,
      }"
    >
      {{ $t(locale) }}
    </div>
    <div v-if="isLocaleMenuOpen" class="header__locale__dropdown">
      <div class="header__locale__dropdown__arrow"></div>
      <div
        v-for="(item, index) in store.availableLocale"
        :key="index"
        class="header__locale__dropdown__item"
        @click="changeLocale(item.title)"
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
  }
  &__menu {
    position: fixed;
    width: 100%;
    padding: 6px 8px;
    background: white;
    z-index: 1000;
    &--scrolled {
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.546);
      padding: 10px;
    }
    &__hamburger {
      justify-self: center;
      margin: 8px;

      &__container {
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
    }
    &__container {
      display: none;
      @media (min-width: 650px) {
        display: flex;
        justify-content: space-between;
        color: var(--text-dark-grey);
        padding: 8px 80px;
        max-width: 1250px;
      }
    }
    &__item {
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        // border-bottom: 2px dotted var(--primary-color);
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
    border: 1px solid var(--text-medium-grey);
    box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
    padding: 0 4px;
    z-index: 1001;
    cursor: pointer;
    transition: background-color 0.3s ease;
    @media (min-width: 650px) {
      top: 10px;
      right: 10px;
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
    position: absolute;
    right: 20px;
    top: 110px;
    @media (min-width: 650px) {
      right: 10px;
      top: 60px;
    }
    width: 100px;
    height: auto;
    padding: 6px 0;
    border: 1px solid var(--text-medium-grey);
    box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
    background-color: var(--extra-light-background);
    cursor: pointer;
    z-index: 1000;
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
