<script setup lang="ts">
import { computed } from 'vue'
import type { CardComponentProps } from '@/types/interfaces'

defineOptions({
  name: 'CardComponent'
})

const props = withDefaults(defineProps<CardComponentProps>(), {
  cardTitle: '',
  cardDescription: '',
  cardDescriptionParams: () => ({}),
  buttonTitle: 'gitHub-repo',
  fallbackUrl: 'https://github.com/zuzanavolfova'
})

const imageUrl = computed(() => {
  if (!props.cardImage) {
    return ''
  }

  try {
    return new URL(`../assets/images/${props.cardImage}`, import.meta.url).href
  } catch (error) {
    console.error('Failed to load image:', error)
    return ''
  }
})
const goToLink = (redirectPath: string | undefined): void => {
  const url = redirectPath || props.fallbackUrl
  window.open(url, '_blank')
}
</script>
<template>
  <div
    @click="goToLink(buttonWebRedirect)"
    :aria-label="`${$t('web')} - ${$t(cardTitle)}`"
    class="card__container"
  >
    <div class="card__item" role="region">
      <h4 class="card__item__title" :aria-label="`${cardTitle}`">{{ $t(cardTitle) }}</h4>
      <div class="card__item__image">
        <img :src="imageUrl" :alt="$t(cardTitle)" loading="lazy" />
      </div>

      <div class="card__item__perex">
        {{ $t(cardDescription || '', { value: $t(cardDescriptionParams?.value || '') }) }}
      </div>
      <button
        class="card__item__button"
        @click.stop="goToLink(buttonRedirect)"
        :aria-label="`${$t(buttonTitle)} - ${$t(cardTitle)}`"
      >
        {{ $t(buttonTitle) }}
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/styles/mixins' as *;
.card {
  &__container {
    cursor: pointer;
    margin: 28px;
    height: 380px;
    &:hover {
      transform: scale(1.06);
      transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
  &__item {
    box-shadow: 1px 1px 5px rgb(223, 223, 223);
    padding: 1rem;
    border-radius: 2px;
    height: 100%;
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 4;
    @media (prefers-color-scheme: dark) {
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
    &__title {
      height: 56px;
      @media (min-width: 1250px) {
        height: 28px;
      }
    }
    &__button {
      @include button;
    }
  }
}

img {
  height: 160px;
  max-width: 100%;
}
</style>
