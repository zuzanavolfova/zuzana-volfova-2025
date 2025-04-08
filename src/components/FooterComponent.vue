<template>
  <div class="footer">
    <span class="footer__title"> Zuzana Volfová</span>
    <span> +420 728 881 941</span>
    <a class="footer__link" href="mailto:zuzka.volfova@gmail.com">zuzka.volfova@gmail.com</a>
    <a class="footer__link" href="www.linkedin.com/in/zuzana-volfová-90001530">LinkedIn</a>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  width: 100%;
  color: var(--text-dark-grey);
  padding: 12px 0;
  border-top: 1px solid var(--light-background);
  &__title {
    font-weight: 600;
  }
  &__link {
    color: var(--text-dark-grey);
    text-decoration: none;
  }
}
</style>
