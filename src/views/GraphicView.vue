<script setup lang="ts"></script>
<template>
  <div class="graphic" aria-labelledby="graphic-section-title">
    <h2 id="graphic-section-title" class="graphic__title">{{ $t('graphic-h') }}</h2>

    <div class="graphic__content">
      <section aria-labelledby="promotional-section">
        <h3 id="promotional-section">{{ $t('promotional-graphics') }}</h3>
        <figure class="graphic__content__items" aria-label="promotional items">
          <img src="./../assets/images/graphic/poukazka.webp" alt="" loading="lazy" />
        </figure>
      </section>
      <section aria-labelledby="vector-graphic-section">
        <h3 id="vector-graphic-section">{{ $t('vector-graphics') }}</h3>
        <figure class="graphic__content__items" aria-label="vector graphic items">
          <img
            src="./../assets/images/graphic/children-circle.webp"
            alt="children circle"
            loading="lazy"
          />
          <img src="./../assets/images/graphic/klaun.webp" alt="claun" loading="lazy" />
          <img src="./../assets/images/graphic/icons-light.webp" alt="icons" loading="lazy" />
          <img src="./../assets/images/graphic/icons.webp" alt="icons" loading="lazy" />
          <img src="./../assets/images/graphic/motyl.webp" alt="butterfly" loading="lazy" />
          <img
            src="./../assets/images/graphic/responzive.webp"
            alt="resposive screen"
            loading="lazy"
          />
        </figure>
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
        max-width: 100%;
        @media (min-width: 650px) {
          max-width: 600px;
        }
      }
    }
  }
}
</style>
