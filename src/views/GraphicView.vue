<script setup lang="ts">
import imageData from './../assets/data/img-data.json'
const imagePromotionalData = imageData.promotional
const imageVectorData = imageData.vector
const getImageUrl = (source: string) => {
  return new URL(`../assets/images/graphic`, import.meta.url).href + '/' + source
}
</script>
<template>
  <div class="graphic">
    <h2 class="graphic__title">{{ $t('graphic-h') }}</h2>

    <div class="graphic__content">
      <section>
        <h3>{{ $t('promotional-graphics') }}</h3>
        <div class="graphic__content__items">
          <div v-for="(image, key) in imagePromotionalData" :key="key">
            <img
              :src="getImageUrl(image.imageSource)"
              :alt="image.imageDescriptionShort"
              height="220px"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section>
        <h3>{{ $t('vector-graphics') }}</h3>
        <div class="graphic__content__items">
          <div v-for="(image, key) in imageVectorData" :key="key">
            <img
              :src="getImageUrl(image.imageSource)"
              :alt="image.imageDescriptionShort"
              height="220px"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.graphic {
  margin: 18px auto;
  padding: 18px;
  @media (min-width: 650px) {
    margin: 24px auto;
    padding: 24px;
  }
  &__title {
    text-align: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    &__title {
      text-align: center;
    }
    &__items {
      display: flex;
      flex-direction: column;
      gap: 28px;
      @media (min-width: 650px) {
        flex-direction: row;
        gap: 42px;
        flex-wrap: wrap;
        justify-content: center;
        padding: 24px;
      }
    }
  }
}
</style>
