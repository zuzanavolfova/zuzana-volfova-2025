<template>
  <div class="graphic">
    <h2 class="graphic__title">{{ $t('graphic-h') }}</h2>

    <div class="graphic__content"></div>
  </div>
</template>
<style lang="scss" scoped>
.graphic {
  margin: 18px auto;
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
  }
}
</style>
