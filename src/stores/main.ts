import { defineStore } from 'pinia'
import type { ImageProperties } from '../types/interfaces'

export const useStore = defineStore('dataStore', {
  state: () => ({
    availableLocale: [
      {
        title: 'cs',
        image: new URL('./../assets/icons/flags/cs_rounded_64.webp', import.meta.url).href,
      },
      {
        title: 'en',
        image: new URL('./../assets/icons/flags/en_rounded_64.webp', import.meta.url).href,
      },
    ] as ImageProperties[],
    currentLocale: 'cs',
  }),
})
