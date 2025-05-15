<template>
  <footer class="footer" role="contentinfo" aria-label="Contact information for Zuzana Volfová">
    <span class="footer__title" aria-label="Name"> Zuzana Volfová</span>
    <span aria-label="Phone number"> +420 728 881 941</span>
    <a
      class="footer__link"
      aria-label="Send an email to zuzka.volfova@gmail.com"
      href="mailto:zuzka.volfova@gmail.com"
      >zuzka.volfova@gmail.com</a
    >
    <a
      class="footer__link"
      role="link"
      aria-label="Visit Zuzana Volfová's LinkedIn profile"
      href="https://www.linkedin.com/in/zuzana-volfová"
      >LinkedIn</a
    >
  </footer>
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
