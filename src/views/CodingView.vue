<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import dataJson from './../assets/data/coding-data.json'

const vueData = dataJson.vue
const htmlCssData = dataJson.htmlCss
const javaScriptData = dataJson.javaScript
</script>

<template>
  <div class="coding">
    <h2 class="coding__title">{{ $t('coding-h') }}</h2>
    <div class="coding__content">
      <h3>Vue.js, React</h3>
      <div class="coding__content__items">
        <div class="coding__content__item" v-for="(item, index) in vueData" :key="index">
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
          />
        </div>
      </div>
      <div class="coding__content">
        <h3>HTML, CSS</h3>
        <div class="coding__content__items">
          <div class="coding__content__item" v-for="(item, index) in htmlCssData" :key="index">
            <card-component
              :card-title="item.cardTitle"
              :card-image="item.cardImage"
              :card-description-short="item.cardDescriptionShort"
              :card-description="item.cardDescription"
              :button-redirect="item.buttonRedirect"
            />
          </div>
        </div>
      </div>
      <div class="coding__content">
        <h3>JavaScript, TypeScript</h3>
      </div>
      <div class="coding__content__items">
        <div class="coding__content__item" v-for="(item, index) in javaScriptData" :key="index">
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
          />
        </div>
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
