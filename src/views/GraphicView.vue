<template>
  <div class="graphic">
    <h2 class="graphic__title">{{ $t('graphic-h') }}</h2>

    <div class="graphic__content">
      <section>
        <h2>{{ $t('promotional-graphics') }}</h2>
      </section>
      <section>
        <h2>{{ $t('vector-graphics') }}</h2>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.graphic {
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
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    &__title {
      text-align: center;
    }
  }
}
</style>
