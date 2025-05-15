<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import uxData from './../assets/data/ux-data.json'
</script>

<template>
  <div class="ux" aria-labelledby="ux-section-title">
    <h2 id="ux-section-title" class="ux__title">{{ $t('ux-design-h') }}</h2>

    <div class="ux__content" aria-label="UX projects cards">
      <div
        class="ux__content__item"
        v-for="(item, index) in uxData"
        :key="index"
        role="list"
        aria-label="UX design project cards"
      >
        <card-component
          :card-title="item.cardTitle"
          :card-image="item.cardImage"
          :card-description-short="item.cardDescriptionShort"
          :card-description="item.cardDescription"
          :card-descriptionParams="item.translationParams"
          :button-title="item.buttonTitle"
          :button-redirect="item.buttonRedirect"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ux {
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
    text-align: center;
    @media (min-width: 650px) {
      flex-direction: row;
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      @media (min-width: 650px) {
        flex-basis: 50%;
      }
      @media (min-width: 950px) {
        flex-basis: 33%;
      }
    }
  }
}
</style>
