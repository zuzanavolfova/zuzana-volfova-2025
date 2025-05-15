<script setup lang="ts">
import { computed, ref } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import dataJson from './../assets/data/coding-data.json'
import type { CardData, SordDirection } from './../types/interfaces'
const vueData = ref<CardData[]>(dataJson.vue)
const htmlCssData = ref<CardData[]>(dataJson.htmlCss)
const javaScriptData = ref<CardData[]>(dataJson.javaScript)

const sortDirections = ref({
  vue: 'asc' as SordDirection,
  html: 'asc' as SordDirection,
  js: 'asc' as SordDirection,
})

const activeButton = ref({
  vue: null as SordDirection | null,
  html: null as SordDirection | null,
  js: null as SordDirection | null,
})

const sortData = (data: CardData[], direction: string): CardData[] => {
  return [...data].sort((a, b) => {
    const comparison = a.cardTitle.localeCompare(b.cardTitle)
    return direction === 'asc' ? comparison : -comparison
  })
}

const sortedVueData = computed<CardData[]>(() => sortData(vueData.value, sortDirections.value.vue))
const sortedHtmlData = computed<CardData[]>(() =>
  sortData(htmlCssData.value, sortDirections.value.html),
)
const sortedJavaScriptData = computed<CardData[]>(() =>
  sortData(javaScriptData.value, sortDirections.value.js),
)
const changeSortDirection = (section: 'vue' | 'html' | 'js', direction: 'asc' | 'desc'): void => {
  if (section === 'vue') {
    sortDirections.value.vue = direction
  }
  if (section === 'html') {
    sortDirections.value.html = direction
  }
  if (section === 'js') {
    sortDirections.value.js = direction
  }
  activeButton.value[section] = direction
}
</script>

<template>
  <div class="coding">
    <h2 class="coding__title">{{ $t('coding-h') }}</h2>
    <section class="coding__content">
      <h3>Vue.js, React</h3>
      <div class="button-sort-container">
        <button
          class="button-sort"
          :class="{ active: activeButton.vue === 'asc' }"
          @click="changeSortDirection('vue', 'asc')"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton.vue === 'desc' }"
          @click="changeSortDirection('vue', 'desc')"
        >
          Z-A
        </button>
      </div>
      <div class="coding__content__items">
        <div class="coding__content__item" v-for="(item, index) in sortedVueData" :key="index">
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
          />
        </div>
      </div>
    </section>
    <section class="coding__content">
      <h3>HTML, CSS</h3>
      <div class="button-sort-container">
        <button
          class="button-sort"
          :class="{ active: activeButton.html === 'asc' }"
          @click="changeSortDirection('html', 'asc')"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton.html === 'desc' }"
          @click="changeSortDirection('html', 'desc')"
        >
          Z-A
        </button>
      </div>
      <div class="coding__content__items">
        <div class="coding__content__item" v-for="(item, index) in sortedHtmlData" :key="index">
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
          />
        </div>
      </div>
    </section>
    <section class="coding__content">
      <h3>JavaScript, TypeScript</h3>
      <div class="button-sort-container">
        <button
          class="button-sort"
          :class="{ active: activeButton.js === 'asc' }"
          @click="changeSortDirection('js', 'asc')"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton.js === 'desc' }"
          @click="changeSortDirection('js', 'desc')"
        >
          Z-A
        </button>
      </div>
      <div class="coding__content__items">
        <div
          class="coding__content__item"
          v-for="(item, index) in sortedJavaScriptData"
          :key="index"
        >
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.coding {
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
    &__items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-template-rows: auto auto 1fr auto;
      gap: 18px;
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
.active {
  color: var(--primary-color);
  font-weight: 600;
}
</style>
