import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

import en from './locales/en.json'
import cs from './locales/cs.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

i18next.init({
  lng: 'cs',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: false,
  resources: {
    en: { translation: en },
    cs: { translation: cs },
  },
})

app.use(I18NextVue, { i18next })

app.use(createPinia())
app.use(router)

app.mount('#app')
