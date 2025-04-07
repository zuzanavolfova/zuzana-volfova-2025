<script setup lang="ts">
import SideBar from './../components/SideBar.vue'
</script>

<template>
  <div>
    <SideBar class="cv" :side-bar-title="$t('education-h')">
      <div class="cv__year">
        <div>2024 - 2025</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2022</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2022</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2021 - 2022</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2010 - 2012</div>
        <div class="cv__year-point"></div>
      </div>
    </SideBar>
    <SideBar class="cv" :side-bar-title="$t('work-experience-h')">
      <div class="cv__year">
        <div>2022 - 2025</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2015 - 2016</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2014</div>
        <div class="cv__year-point"></div>
      </div>
      <div class="cv__year">
        <div>2013 - 2014</div>
        <div class="cv__year-point"></div>
      </div>
    </SideBar>
  </div>
</template>
<style lang="scss" scoped>
.cv {
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
</style>
