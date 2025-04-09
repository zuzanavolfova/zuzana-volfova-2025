<script setup lang="ts">
import CardComponent from './../components/CardComponent.vue'
</script>

<template>
  <div class="codding">
    <h2 class="codding__title">{{ $t('coding-h') }}</h2>
    <div class="codding__content">
      <div class="codding__content__item">
        <h3>Vue.js, React</h3>
        <card-component
          card-title="Zuzana Volfova websites"
          card-image="./../assets/images/image.png"
          card-description-short="redirect to GitHub"
          card-description="Vue.js, Pinia, Typescript, Bootstrap, HitHub"
        />
      </div>
      <div>
        <h3>HTML, CSS</h3>
      </div>
      <div>
        <h3>JavaScript</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.codding {
  margin: 18px auto;
  &__title {
    text-align: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: space-around;
    &__item {
      display: grid;
      grid-template-rows: 1fr 2fr;
    }
  }
}
</style>
