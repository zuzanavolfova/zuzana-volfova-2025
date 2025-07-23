<script setup lang="ts">
import CarouselComponent from './../components/CarouselComponent.vue'
</script>

<template>
  <main class="home">
    <div class="home__text">
      <h2>Frontend developer</h2>
      <div class="home__techstack">
        <p>Vue.js, React, JavaScript, TypeScript, Tailwind, Python</p>
        <p>HTML, CSS, BEM, SASS</p>
        <p>GitHub, Jira, Confluence, Azure, Sourcetree</p>
        <p>Claude AI, ChatGPT, GitHub Copilot, Vibe coding</p>

        <p>Figma, AdobeXD</p>
      </div>
    </div>
    <CarouselComponent />
  </main>
</template>
<style lang="scss" scoped>
.home {
  margin-top: 20px;
  padding: 10px;
  @media (min-width: 650px) {
    padding: 20px;
  }
  &__text {
    margin: 30px auto 40px auto;
    & h2 {
      position: relative;
      margin-bottom: 20px;
      text-align: center;
      font-weight: 400;
      width: auto;
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          to right,
          transparent 10%,
          var(--primary-color) 30%,
          var(--primary-color) 70%,
          transparent 90%,
          transparent 100%
        );
      }
    }
  }
  &__techstack p {
    font-size: 18px;
    text-align: center;
  }
}
</style>
