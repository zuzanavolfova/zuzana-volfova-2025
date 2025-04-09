<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
})
</script>
<template>
  <div class="card__container">
    <div class="card__item">
      <h4 class="card__item__heading">{{ cardTitle }}</h4>
      <p class="card__item__image">
        <a href="#"
          ><img :src="cardImage" :alt="cardDescriptionShort" width="300" height="200"
        /></a>
      </p>
      <p class="card__item__perex">{{ cardDescription }}</p>
      <p>
        <button>{{ buttonTitle }}</button>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, calc(300px + 4em)));
    grid-template-rows: repeat(4, auto);
    column-gap: 4rem;
    padding: 1em;
    margin: 2em;
    max-width: 1000px;
  }
  &__item {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 4;
  }
}

img {
  height: auto;
  max-width: 100%;
}
</style>
