<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue'

const props = defineProps({
  cardTitle: {
    type: String,
    required: false,
  },
  cardImage: {
    type: String,
    required: false,
  },
  cardDescriptionShort: {
    type: String,
    required: false,
  },
  cardDescription: {
    type: String,
    required: false,
  },
  buttonTitle: {
    type: String,
    required: false,
    default: 'GitHub repository',
  },
  buttonRedirect: {
    type: String,
    required: false,
  },
})
const imageUrl = ref('')

watchEffect(async () => {
  if (!props.cardImage) {
    imageUrl.value = ''
    return
  }

  try {
    imageUrl.value = new URL(`../assets/images/${props.cardImage}`, import.meta.url).href
  } catch (error) {
    console.error('Failed to load image:', error)
    imageUrl.value = ''
  }
})
</script>
<template>
  <div class="card__container">
    <div class="card__item">
      <h4 class="card__item__title">{{ cardTitle }}</h4>
      <p class="card__item__image">
        <img :src="imageUrl" :alt="cardImage" height="80px" />
      </p>

      <p class="card__item__perex">{{ cardDescription }}</p>
      <p>
        <button class="card__item__button">{{ buttonTitle }}</button>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/mixins';
.card {
  &__container {
    margin: 28px;
    height: 380px;
  }
  &__item {
    box-shadow: 1px 1px 5px rgb(223, 223, 223);
    padding: 1rem;
    border-radius: 2px;
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
