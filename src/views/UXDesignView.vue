<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import uxData from './../assets/data/ux-data.json'
</script>

<template>
  <div class="ux">
    <h2 class="ux__title">{{ $t('ux-design-h') }}</h2>

    <div class="ux__content">
      <div class="ux__content__item" v-for="(item, index) in uxData" :key="index">
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
  &__title {
    text-align: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    &__items {
      @media (min-width: 650px) {
        display: flex;
        flex-wrap: wrap;
      }
    }
    &__item {
      &:hover {
        transform: scale(1.06);
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
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
