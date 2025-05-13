<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SideBar from './../components/SideBar.vue'

const isDetailOpen = ref<boolean[]>([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
])

const isOpen = (position: number): void => {
  for (let i = 0; i < isDetailOpen.value.length; i++) {
    if (i === position) {
      isDetailOpen.value[position] = !isDetailOpen.value[position]
    } else isDetailOpen.value[i] = false
  }
}

const closeDetail = (): void => {
  isDetailOpen.value = isDetailOpen.value.map(() => false)
}

const handleClickOutside = (event: MouseEvent): void => {
  // If no details are open, nothing to do
  if (!isDetailOpen.value.some((open) => open)) return

  // Check if click was on detail title
  const clickedElement = event.target as HTMLElement
  if (clickedElement.classList.contains('cv__content__description__title')) return

  // Check if click was inside one of the open details
  const isClickInsideDetail = Array.from(
    document.querySelectorAll('.cv__content__description__detail'),
  ).some((detail) => detail.contains(event.target as Node))

  if (!isClickInsideDetail) {
    closeDetail()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="cv">
    <h2 class="cv__title">{{ $t('curriculum-h') }}</h2>

    <div class="cv__content">
      <div class="cv__content__side-bars">
        <SideBar class="cv__content__side-bar" :side-bar-title="$t('education-h')">
          <div class="cv__content__side-bar__year">
            <div>2024 - 2025</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
          <div class="cv__content__side-bar__year logn-year">
            <div>2022</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
          <div class="cv__content__side-bar__year year-gap"></div>
          <div class="cv__content__side-bar__year">
            <div>2021 - 2022</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
          <div class="cv__content__side-bar__year">
            <div>2010 - 2012</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
        </SideBar>
        <SideBar class="cv__content__side-bar" :side-bar-title="$t('work-experience-h')">
          <div class="cv__content__side-bar__year">
            <div>2022 - 2025</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
          <div class="cv__content__side-bar__year">
            <div>2015 - 2016</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
          <div class="cv__content__side-bar__year">
            <div>2014</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
          <div class="cv__content__side-bar__year">
            <div>2013 - 2014</div>
            <div class="cv__content__side-bar__year-point"></div>
          </div>
        </SideBar>
      </div>
      <div class="cv__content__description">
        <div class="cv__content__description__education">
          <div class="cv__content__description__item">
            <span @click="isOpen(0)" class="cv__content__description__title">TypeScript</span>
            <transition name="fade">
              <div v-if="isDetailOpen[0]" class="cv__content__description__detail">
                <h6>TypeScript</h6>
                <span class="cv__content__description__subtitle"
                  >Udemy (Maximilian Schwarzmüller course)</span
                >
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(1)" class="cv__content__description__title"
              >Vue.js - The Complete Guide</span
            >
            <transition name="fade">
              <div v-if="isDetailOpen[1]" class="cv__content__description__detail">
                <h6>Vue.js - The Complete Guide</h6>
                <span class="cv__content__description__subtitle"
                  >Udemy (Maximilian Schwarzmüller course)</span
                >
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(2)" class="cv__content__description__title">{{
              $t('coding-course')
            }}</span>
            <transition name="fade">
              <div v-if="isDetailOpen[2]" class="cv__content__description__detail">
                <h6>{{ $t('coding-course') }}</h6>
                <span class="cv__content__description__subtitle">{{
                  $t('czechitas-semestr-course')
                }}</span>
                <div>HTML, CSS, BEM, SASS, 11ty figma, GIMP, GitHub, Visual Studio Code.</div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(3)" class="cv__content__description__title">JavaScript1</span>
            <transition name="fade">
              <div v-if="isDetailOpen[3]" class="cv__content__description__detail">
                <h6>JavaScript1</h6>
                <span class="cv__content__description__subtitle">{{
                  $t('czechitas-semestr-course')
                }}</span>
                <div>JavaScript, GitHub, Visual Studio Code.</div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(4)" class="cv__content__description__title"
              >UX design Professional Certificate</span
            >
            <transition name="fade">
              <div v-if="isDetailOpen[4]" class="cv__content__description__detail">
                <h6>UX design Professional Certificate</h6>
                <span class="cv__content__description__subtitle">{{
                  $t('czechitas-google-semestr-course')
                }}</span>
                <div>Figma, Adobe XD, Jamboard, Miro.</div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(5)" class="cv__content__description__title">{{
              $t('culture-management')
            }}</span>
            <transition name="fade">
              <div v-if="isDetailOpen[5]" class="cv__content__description__detail">
                <span class="cv__content__description__subtitle">Masarykova univerzita Brno</span>
                <h6>{{ $t('culture-management') }}</h6>
                <div>{{ $t('mgr-study-program') }}</div>
              </div>
            </transition>
          </div>
        </div>
        <div class="cv__content__description__work-experience">
          <div class="cv__content__description__item">
            <span @click="isOpen(6)" class="cv__content__description__title"
              >Vue.js frontend {{ $t('developer') }}</span
            >
            <transition name="fade">
              <div v-if="isDetailOpen[6]" class="cv__content__description__detail">
                <span class="cv__content__description__subtitle">Rieter CZ</span>
                <h6>Vue.js frontend {{ $t('developer') }}</h6>
                <div>
                  {{ $t('work-descr-rieter') }}
                </div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(7)" class="cv__content__description__title"
              >Back office manager</span
            >
            <transition name="fade">
              <div v-if="isDetailOpen[7]" class="cv__content__description__detail">
                <span class="cv__content__description__subtitle"
                  >KROUPAHELÁN advokátní kancelář, s.r.o.</span
                >
                <h6>Back office manager</h6>
                <div>
                  {{ $t('work-descr-KHAK') }}
                </div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(8)" class="cv__content__description__title">Manager</span>
            <transition name="fade">
              <div v-if="isDetailOpen[8]" class="cv__content__description__detail">
                <span class="cv__content__description__subtitle">HELLO Language School</span>
                <h6>Manager</h6>
                <div>
                  {{ $t('work-descr-hello') }}
                </div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <span @click="isOpen(9)" class="cv__content__description__title">{{
              $t('coordinator-language-courses')
            }}</span>
            <transition name="fade">
              <div v-if="isDetailOpen[9]" class="cv__content__description__detail">
                <span class="cv__content__description__subtitle">Jazyková škola HELLO</span>
                <h6>{{ $t('coordinator-language-courses') }}</h6>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cv {
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
    justify-content: center;
    width: 100%;
    &__title {
      text-align: center;
    }

    &__side-bar {
      background-color: transparent;
      margin-top: 16px;
      &__year {
        display: flex;
        justify-content: end;
        align-items: center;
        @media (prefers-color-scheme: dark) {
          & div {
            font-weight: 500;
          }
        }
      }
      &__year-point {
        height: 6px;
        width: 12px;
        background-color: var(--primary-color);
        border-radius: 8px;
        position: relative;
        left: 6px;
        margin-left: 8px;
      }
    }
    &__description {
      position: relative;
      top: 56px;
      display: flex;
      flex-direction: column;
      gap: 86px;
      @media (min-width: 650px) {
        gap: calc(86px - 28px);
      }
      &__education {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 24px);
      }
      &__work-experience {
        display: grid;
        grid-template-rows: repeat(4, 24px);
      }
      &__item {
        position: relative;
        height: 24px;
        width: 100%;
        max-width: 200px;
        @media (min-width: 650px) {
          max-width: 600px;
        }
      }
      &__detail {
        position: absolute;
        top: 100%;
        left: -90px;
        z-index: 100;
        margin: 0 20px;
        padding: 6px 8px;
        box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
        background-color: white;
        @media (min-width: 650px) {
          left: -60px;
          padding: 12px 24px;
        }
      }
      &__title {
        color: var(--primary-color);
        font-weight: 600;
        margin-left: 16px;
        max-width: calc(100% - 16px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        position: relative;
        display: inline-block;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 0px;
          height: 3px;
          background-color: var(--primary-color);
          transition: width 0.6s ease;
          z-index: 9999;
        }
        &:hover::after {
          width: 100%;
        }
      }
      &__subtitle {
        font-weight: 600;
        color: var(--text-dark-grey);
      }
    }
  }
  .year-gap {
    height: calc(2 * 24px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
.cv__content__description__detail h6 {
  display: block;
  @media (min-width: 650px) {
    display: none;
  }
}
</style>
