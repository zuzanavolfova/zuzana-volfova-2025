<template>
  <div class="ux">
    <h2 class="ux__title">{{ $t('ux-design-h') }}</h2>

    <div class="ux__content"></div>
  </div>
</template>
<style lang="scss" scoped>
.ux {
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
