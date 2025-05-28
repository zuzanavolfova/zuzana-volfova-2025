<script setup lang="ts">
import imageData from './../assets/data/img-data.json'
const imagePromotionalData = imageData.promotional
const imageVectorData = imageData.vector
</script>
<template>
  <div class="graphic" aria-labelledby="graphic-section-title">
    <h2 id="graphic-section-title" class="graphic__title">{{ $t('graphic-h') }}</h2>

    <div class="graphic__content">
      <section aria-labelledby="promotional-section">
        <h3>{{ $t('promotional-graphics') }}</h3>
        <div class="graphic__content__items" aria-label="promotional items">
          <img
            src="./../assets/images/graphic/poukazka.jpg"
            alt="crafting-butterfly"
            height="220px"
            loading="lazy"
          />
        </div>
      </section>
      <section aria-labelledby="vector-graphic-section">
        <h3>{{ $t('vector-graphics') }}</h3>
        <div class="graphic__content__items" aria-label="vector graphic items">
          <img
            src="./../assets/images/graphic/children-circle.png"
            alt="children circle"
            height="220px"
            loading="lazy"
          />
          <img
            src="./../assets/images/graphic/klaun.png"
            alt="claun"
            height="220px"
            loading="lazy"
          />
          <img
            src="./../assets/images/graphic/icons-light.png"
            alt="icons"
            height="220px"
            loading="lazy"
          />
          <img
            src="./../assets/images/graphic/icons.png"
            alt="icons"
            height="220px"
            loading="lazy"
          />
          <img
            src="./../assets/images/graphic/motyl.png"
            alt="butterfly"
            height="220px"
            loading="lazy"
          />
          <img
            src="./../assets/images/graphic/responzive.png"
            alt="resposive screen"
            height="220px"
            loading="lazy"
          />
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
      & img {
        height: auto;
      }
    }
  }
}
</style>
