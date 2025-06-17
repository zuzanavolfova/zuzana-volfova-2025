<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import CardComponent from '../components/CardComponent.vue'
import type { CardData, SortDirection } from '../types/types'
import { getData } from './../stores/getters'

const data = ref<CardData[]>([])

const sordDirection = ref('desc' as SortDirection)
const activeButton = ref('desc' as SortDirection | null)

onMounted(async (): Promise<void> => {
  try {
    data.value = await getData()
  } catch (error) {
    console.error('Failed to load data:', error)
    data.value = []
  }
})

const sortData = (data: CardData[], direction: SortDirection): CardData[] => {
  return [...data].sort((a, b) => {
    const comparison = a.cardTitle.localeCompare(b.cardTitle)
    return direction === 'asc' ? comparison : -comparison
  })
}

const sortedData = computed<CardData[]>(() => sortData(data.value, sordDirection.value))

const changeSortDirection = (direction: 'asc' | 'desc'): void => {
  activeButton.value = direction
  sordDirection.value = direction
}
</script>

<template>
  <div class="coding" aria-labelledby="coding-section-title">
    <h2 id="coding-section-title" class="coding__title">{{ $t('coding-h') }}</h2>
    <section class="coding__content" aria-labelledby="vue-section">
      <h3>Vue.js, React</h3>
      <div class="button-sort-container" role="group" aria-label="Sort projects">
        <button
          class="button-sort"
          :class="{ active: activeButton === 'asc' }"
          @click="changeSortDirection('asc')"
          :aria-pressed="activeButton === 'asc'"
          aria-label="Sort projects A to Z"
        >
          A-Z
        </button>
        <button
          class="button-sort"
          :class="{ active: activeButton === 'desc' }"
          @click="changeSortDirection('desc')"
          :aria-pressed="activeButton === 'desc'"
          aria-label="Sort projects Z to A"
        >
          Z-A
        </button>
      </div>
      <div class="coding__content__items" role="list" aria-label="Project cards">
        <div
          class="coding__content__item"
          v-for="(item, index) in sortedData"
          :key="index"
          role="listitem"
        >
          <card-component
            :card-title="item.cardTitle"
            :card-image="item.cardImage"
            :card-description-short="item.cardDescriptionShort"
            :card-description="item.cardDescription"
            :button-redirect="item.buttonRedirect"
            :button-web-redirect="
              item.buttonWebRedirect ?? 'https://zuzanavolfova.github.io/zuzana-volfova-2025/#/'
            "
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
