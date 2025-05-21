<script setup lang="ts">
import { computed, ref } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import dataJson from './../assets/data/coding-data.json'
import type { CardData, SordDirection } from '../types/types'
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
  <div class="coding" aria-labelledby="coding-section-title">
    <h2 id="coding-section-title" class="coding__title">{{ $t('coding-h') }}</h2>
    <section class="coding__content" aria-labelledby="vue-section">
      <h3>Vue.js, React</h3>
      <div class="button-sort-container" role="group" aria-label="Sort Vue projects">
        <button
          class="button-sort"
          :class="{ active: activeButton.vue === 'asc' }"
          @click="changeSortDirection('vue', 'asc')"
          :aria-pressed="activeButton.vue === 'asc'"
          aria-label="Sort Vue projects A to Z"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton.vue === 'desc' }"
          @click="changeSortDirection('vue', 'desc')"
          :aria-pressed="activeButton.vue === 'desc'"
          aria-label="Sort Vue projects Z to A"
        >
          Z-A
        </button>
      </div>
      <div class="coding__content__items" role="list" aria-label="Vue and React project cards">
        <div
          class="coding__content__item"
          v-for="(item, index) in sortedVueData"
          :key="index"
          role="listitem"
        >
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
            :button-web-redirect="item.buttonWebRedirect ?? undefined"
          />
        </div>
      </div>
    </section>
    <section class="coding__content" aria-labelledby="javaSctipt-section">
      <h3 id="javaScript-section">JavaScript, TypeScript</h3>
      <div class="button-sort-container" role="group" aria-label="Sort JavaScript projects">
        <button
          class="button-sort"
          :class="{ active: activeButton.js === 'asc' }"
          @click="changeSortDirection('js', 'asc')"
          :aria-pressed="activeButton.js === 'asc'"
          aria-label="Sort JavaScript projects A to Z"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton.js === 'desc' }"
          @click="changeSortDirection('js', 'desc')"
          :aria-pressed="activeButton.js === 'desc'"
          aria-label="Sort JavaScript projects Z to A"
        >
          Z-A
        </button>
      </div>
      <div
        class="coding__content__items"
        role="list"
        aria-label="JavaScript and TypeScript project cards"
      >
        <div
          class="coding__content__item"
          v-for="(item, index) in sortedJavaScriptData"
          :key="index"
          role="listitem"
        >
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
            :button-web-redirect="item.buttonWebRedirect ?? undefined"
          />
        </div>
      </div>
    </section>
    <section class="coding__content" aria-labelledby="html-css-section">
      <h3 id="html-css-section">HTML, CSS</h3>
      <div class="button-sort-container" role="group" aria-label="Sort HTML and CSS projects">
        <button
          class="button-sort"
          :class="{ active: activeButton.html === 'asc' }"
          @click="changeSortDirection('html', 'asc')"
          :aria-pressed="activeButton.html === 'asc'"
          aria-label="Sort HTML and CSS projects A to Z"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton.html === 'desc' }"
          @click="changeSortDirection('html', 'desc')"
          :aria-pressed="activeButton.html === 'desc'"
          aria-label="Sort HTML and CSS projects Z to A"
        >
          Z-A
        </button>
      </div>
      <div class="coding__content__items" role="list" aria-label="HTML and CSS project cards">
        <div
          class="coding__content__item"
          v-for="(item, index) in sortedHtmlData"
          :key="index"
          role="listitem"
        >
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
            :button-web-redirect="item.buttonWebRedirect ?? undefined"
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
      margin: auto;
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
