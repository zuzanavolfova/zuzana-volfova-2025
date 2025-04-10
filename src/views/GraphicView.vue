<template>
  <div class="graphic">
    <h2 class="graphic__title">{{ $t('graphic-h') }}</h2>

    <div class="graphic__content">
      <span>In progress. Please see old pages:</span>
      <a
        href="https://zuzana-volfova.netlify.app/grafika"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zuzana Volfová – Grafika
      </a>
    </div>
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
