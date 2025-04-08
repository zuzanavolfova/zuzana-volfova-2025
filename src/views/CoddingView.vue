<template>
  <div class="codding">
    <h2 class="codding__title">{{ $t('coding-h') }}</h2>

    <div class="codding__content"></div>
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
    justify-content: center;
    width: 100%;
    &__title {
      text-align: center;
    }
  }
}
</style>
