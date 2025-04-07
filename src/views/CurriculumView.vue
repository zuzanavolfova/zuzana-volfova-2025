<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<template>
  <div class="cv">
    <div class="cv__side-bars">
      <SideBar class="cv__side-bar" :side-bar-title="$t('education-h')">
        <div class="cv__side-bar__year">
          <div>2024 - 2025</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
        <div class="cv__side-bar__year logn-year">
          <div>2022</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
        <div class="cv__side-bar__year year-gap"></div>
        <div class="cv__side-bar__year">
          <div>2021 - 2022</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
        <div class="cv__side-bar__year">
          <div>2010 - 2012</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
      </SideBar>
      <SideBar class="cv__side-bar" :side-bar-title="$t('work-experience-h')">
        <div class="cv__side-bar__year">
          <div>2022 - 2025</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
        <div class="cv__side-bar__year">
          <div>2015 - 2016</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
        <div class="cv__side-bar__year">
          <div>2014</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
        <div class="cv__side-bar__year">
          <div>2013 - 2014</div>
          <div class="cv__side-bar__year-point"></div>
        </div>
      </SideBar>
    </div>
    <div class="cv__description">
      <div class="cv__description__education">
        <div class="cv__description__item">
          <span @click="isOpen(0)" class="cv__description__title">TypeScript</span
          ><transition name="fade">
            <div v-if="isDetailOpen[0]" class="cv__description__detail">
              <span class="cv__description__subtitle">Udemy (Maximilian Schwarzmüller course)</span>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(1)" class="cv__description__title">Vue.js - The Complete Guide</span
          ><transition name="fade">
            <div v-if="isDetailOpen[1]" class="cv__description__detail">
              <span class="cv__description__subtitle">Udemy (Maximilian Schwarzmüller course)</span>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(2)" class="cv__description__title">Coding</span>
          <transition name="fade">
            <div v-if="isDetailOpen[2]" class="cv__description__detail">
              <span class="cv__description__subtitle">Czechitas - semester course</span>
              <div>HTML, CSS, BEM, SASS, 11ty figma, GIMP, GitHub, Visual Studio Code.</div>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(3)" class="cv__description__title">JavaScript1</span
          ><transition name="fade">
            <div v-if="isDetailOpen[3]" class="cv__description__detail">
              <span class="cv__description__subtitle">Czechitas - semester course</span>
              <div>JavaScript, GitHub, Visual Studio Code.</div>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(4)" class="cv__description__title"
            >UX design Professional Certificate</span
          ><transition name="fade">
            <div v-if="isDetailOpen[4]" class="cv__description__detail">
              <span class="cv__description__subtitle">Czechitas, Google - semester course</span>
              <div>Figma, Adobe XD, Jamboard, Miro.</div>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(5)" class="cv__description__title">Culture Management</span
          ><transition name="fade">
            <div v-if="isDetailOpen[5]" class="cv__description__detail">
              <span class="cv__description__subtitle">Masarykova univerzita Brno</span>
              <div>Master’s degree programme.</div>
            </div>
          </transition>
        </div>
      </div>
      <div class="cv__description__work-experience">
        <div class="cv__description__item">
          <span @click="isOpen(6)" class="cv__description__title">Vue.js frontend developer</span
          ><transition name="fade">
            <div v-if="isDetailOpen[6]" class="cv__description__detail">
              <span class="cv__description__subtitle">Rieter CZ</span>
              <div>
                Development of HMI Framework for industry machines. Cooperation with UX designers,
                technical evaluation of UX designs and implementation in the framework. Cooperation
                with frontend and backend developers in international team. UX design, Vue.js, HTML,
                CSS, scss, Tailwind, JavaScript, Python Visual Studio Code, Git, SourceTree, Bash,
                Postman
              </div>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(7)" class="cv__description__title">Back office manager</span
          ><transition name="fade">
            <div v-if="isDetailOpen[7]" class="cv__description__detail">
              <span class="cv__description__subtitle">KROUPAHELÁN advokátní kancelář, s.r.o.</span>
              <div>
                Cooperation in the development of websites www.kontrolasmluv.cz and
                www.kroupahelan.cz. Design and implementation of effective process of recruitment.
                Management and optimization of DMS and CRM.
              </div>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(8)" class="cv__description__title">Manager</span
          ><transition name="fade">
            <div v-if="isDetailOpen[8]" class="cv__description__detail">
              <span class="cv__description__subtitle">HELLO Language School</span>
              <div>
                Team management, organization of Cambridge English Exams. Search for new business
                opportunities.
              </div>
            </div>
          </transition>
        </div>
        <div class="cv__description__item">
          <span @click="isOpen(9)" class="cv__description__title"
            >Coordinator of Language Courses</span
          >
          <div v-if="isDetailOpen[9]" class="cv__description__detail">
            <span class="cv__description__subtitle">Jazyková škola HELLO</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cv {
  display: flex;
  &__side-bar {
    margin-top: 16px;
    &__year {
      display: flex;
      justify-content: end;
      align-items: center;
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
    }
    &__detail {
      position: absolute;
      top: 100%;
      left: -20px;
      z-index: 100;
      padding: 6px 8px;
      border: 1px solid var(--text-medium-grey);
      box-shadow: 1px 2px 6px rgba(124, 124, 124, 0.5);
      background-color: white;
    }
    &__title {
      color: var(--primary-color);
      font-weight: 600;
      margin-left: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__subtitle {
      font-weight: 600;
      color: var(--text-medium-grey);
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
