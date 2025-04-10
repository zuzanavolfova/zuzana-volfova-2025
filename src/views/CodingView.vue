<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import coddingDataJson from './../assets/data/coding-data.json'

const coddingData = coddingDataJson
</script>

<template>
  <div class="coding">
    <h2 class="coding__title">{{ $t('coding-h') }}</h2>
    <div class="coding__content">
      <h3>Vue.js, React</h3>
      <div class="coding__content__items">
        <div class="coding__content__item" v-for="(item, index) in coddingData" :key="index">
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
          />
        </div>
      </div>
      <div>
        <h3>HTML, CSS</h3>
      </div>
      <div>
        <h3>JavaScript</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.coding {
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
