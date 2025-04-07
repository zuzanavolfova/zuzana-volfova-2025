<script setup lang="ts">
import SideBar from './../components/SideBar.vue'
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
        <span class="cv__description__title">TypeScript</span>
        <span class="cv__description__title">Vue.js - The Complete Guide</span>
        <span class="cv__description__title">Coding</span>
        <span class="cv__description__title">JavaScript1</span>
        <span class="cv__description__title">UX design Professional Certificate</span>
        <span class="cv__description__title">Culture Management</span>
      </div>
      <div class="cv__description__work-experience">
        <span class="cv__description__title">Vue.js frontend developer</span>
        <span class="cv__description__title">Back office manager</span>
        <span class="cv__description__title">Manager</span>
        <span class="cv__description__title">Coordinator of Language Courses</span>
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
    &__title {
      color: var(--primary-color);
      font-weight: 600;
      margin-left: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.year-gap {
  height: calc(2 * 24px);
}
</style>
