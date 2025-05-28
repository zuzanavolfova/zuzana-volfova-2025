<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SideBar from './../components/SideBar.vue'

const isDetailOpen = ref<boolean[]>(Array(10).fill(false))

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
  if (!isDetailOpen.value.some((open) => open)) return

  const clickedElement = event.target as HTMLElement
  if (clickedElement.classList.contains('cv__content__description__title')) return

  const isClickInsideDetail = Array.from(
    document.querySelectorAll('.cv__content__description__detail'),
  ).some((detail) => detail.contains(event.target as Node))

  if (!isClickInsideDetail) {
    closeDetail()
  }
}

const handleKeyDown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && isDetailOpen.value.some((open) => open)) {
    closeDetail()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="cv" aria-labelledby="cv-title">
    <h2 id="cv-title" class="cv__title">{{ $t('curriculum-h') }}</h2>

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
            <button
              @click="isOpen(0)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[0]"
              :aria-controls="'detail-0'"
              :id="'toggle-0'"
            >
              TypeScript
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[0]"
                class="cv__content__description__detail"
                :id="'detail-0'"
                role="region"
                :aria-labelledby="'toggle-0'"
              >
                <h6>TypeScript</h6>
                <span class="cv__content__description__subtitle"
                  >Udemy (Maximilian Schwarzmüller course)</span
                >
                <div>{{ $t('course-info', { lectures: '338', videoHours: '22.5' }) }}</div>
                <a
                  href="https://www.udemy.com/course/understanding-typescript/"
                  target="_blank"
                  role="link"
                  aria-label="Visit typeScript course detail"
                >
                  {{ $t('detail-ts-course') }}</a
                >
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(1)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[1]"
              :aria-controls="'detail-1'"
              :id="'toggle-1'"
            >
              Vue.js - The Complete Guide
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[1]"
                class="cv__content__description__detail"
                :id="'detail-1'"
                role="region"
                :aria-labelledby="'toggle-1'"
              >
                <h6>Vue.js - The Complete Guide</h6>
                <span class="cv__content__description__subtitle">
                  Udemy (Maximilian Schwarzmüller course)
                </span>
                <div>{{ $t('course-info', { lectures: '333', videoHours: '32' }) }}</div>
                <a
                  href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
                  target="_blank"
                  role="link"
                  aria-label="Visit javaScript course detail"
                >
                  {{ $t('detail-vue-course') }}</a
                >
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(2)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[2]"
              :aria-controls="'detail-2'"
              :id="'toggle-2'"
            >
              {{ $t('coding-course') }}
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[2]"
                class="cv__content__description__detail"
                :id="'detail-2'"
                role="region"
                :aria-labelledby="'toggle-2'"
              >
                <h6>{{ $t('coding-course') }}</h6>
                <span class="cv__content__description__subtitle">{{
                  $t('czechitas-semestr-course')
                }}</span>
                <div>HTML, CSS, BEM, SASS, 11ty figma, GIMP, GitHub, Visual Studio Code.</div>
                <a
                  href="https://www.czechitas.cz/kurzy/stan-se-koderkou"
                  target="_blank"
                  role="link"
                  aria-label="Visit codding course detail"
                >
                  {{ $t('detail-coding-course') }}</a
                >
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(3)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[3]"
              :aria-controls="'detail-3'"
              :id="'toggle-3'"
            >
              JavaScript1
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[3]"
                class="cv__content__description__detail"
                :id="'detail-3'"
                role="region"
                :aria-labelledby="'toggle-3'"
              >
                <h6>JavaScript1</h6>
                <span class="cv__content__description__subtitle">{{
                  $t('czechitas-semestr-course')
                }}</span>
                <div>JavaScript, GitHub, Visual Studio Code.</div>
                <a
                  href="https://www.czechitas.cz/kurzy/javascript-1-zaklady"
                  target="_blank"
                  role="link"
                  aria-label="Visit javaScript course detail"
                >
                  {{ $t('detail-javaScript-course') }}</a
                >
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(4)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[4]"
              :aria-controls="'detail-4'"
              :id="'toggle-4'"
            >
              UX design Professional Certificate
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[4]"
                class="cv__content__description__detail"
                :id="'detail-4'"
                role="region"
                :aria-labelledby="'toggle-4'"
              >
                <h6>UX design Professional Certificate</h6>
                <span class="cv__content__description__subtitle">{{
                  $t('czechitas-google-semestr-course')
                }}</span>
                <div>Figma, Adobe XD, Jamboard, Miro.</div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(5)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[5]"
              :aria-controls="'detail-5'"
              :id="'toggle-5'"
            >
              {{ $t('culture-management') }}
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[5]"
                class="cv__content__description__detail"
                :id="'detail-5'"
                role="region"
                :aria-labelledby="'toggle-5'"
              >
                <span class="cv__content__description__subtitle">Masarykova univerzita Brno</span>
                <h6>{{ $t('culture-management') }}</h6>
                <div>{{ $t('mgr-study-program') }}</div>
              </div>
            </transition>
          </div>
        </div>
        <div class="cv__content__description__work-experience">
          <div class="cv__content__description__item">
            <button
              @click="isOpen(6)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[6]"
              :aria-controls="'detail-6'"
              :id="'toggle-6'"
            >
              Vue.js frontend {{ $t('developer') }}
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[6]"
                class="cv__content__description__detail"
                :id="'detail-6'"
                role="region"
                :aria-labelledby="'toggle-6'"
              >
                <span class="cv__content__description__subtitle">Rieter CZ</span>
                <h6>Vue.js frontend {{ $t('developer') }}</h6>
                <div>
                  {{ $t('work-descr-rieter') }}
                </div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(7)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[7]"
              :aria-controls="'detail-7'"
              :id="'toggle-7'"
            >
              Back office manager
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[7]"
                class="cv__content__description__detail"
                :id="'detail-7'"
                role="region"
                :aria-labelledby="'toggle-7'"
              >
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
            <button
              @click="isOpen(8)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[8]"
              :aria-controls="'detail-8'"
              :id="'toggle-8'"
            >
              Manager
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[8]"
                class="cv__content__description__detail"
                :id="'detail-8'"
                role="region"
                :aria-labelledby="'toggle-8'"
              >
                <span class="cv__content__description__subtitle">HELLO Language School</span>
                <h6>Manager</h6>
                <div>
                  {{ $t('work-descr-hello') }}
                </div>
              </div>
            </transition>
          </div>
          <div class="cv__content__description__item">
            <button
              @click="isOpen(9)"
              class="cv__content__description__title"
              :aria-expanded="isDetailOpen[9]"
              :aria-controls="'detail-9'"
              :id="'toggle-9'"
            >
              {{ $t('coordinator-language-courses') }}
            </button>
            <transition name="fade">
              <div
                v-if="isDetailOpen[9]"
                class="cv__content__description__detail"
                :id="'detail-9'"
                role="region"
                :aria-labelledby="'toggle-9'"
              >
                <span class="cv__content__description__subtitle">Jazyková škola HELLO</span>
                <h6>{{ $t('coordinator-language-courses') }}</h6>
                <div>
                  {{ $t('work-descr-hello-coordinator') }}
                </div>
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
      top: 54px;
      display: flex;
      flex-direction: column;
      gap: 82px;
      @media (min-width: 650px) {
        gap: calc(82px - 28px);
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
        top: 112%;
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
        background: transparent;
        border: none;
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
a {
  color: var(--text-dark-grey);
}
</style>
