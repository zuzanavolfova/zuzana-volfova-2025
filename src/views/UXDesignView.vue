<template>
  <div class="ux">
    <h2 class="ux__title">{{ $t('ux-design-h') }}</h2>

    <div class="ux__content">
      <span>In progress. Please see old pages:</span>
      <a
        href="https://zuzana-volfova.netlify.app/ux-design/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zuzana Volfová – UX design
      </a>
    </div>
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
