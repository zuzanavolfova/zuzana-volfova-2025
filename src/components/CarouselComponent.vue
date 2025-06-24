<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    aria-label="Main content carousel"
  >
    <div class="carousel-indicators" role="tablist" aria-label="Slide selector">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
        role="tab"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        role="tab"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        role="tab"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="3"
        aria-label="Slide 4"
        role="tab"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item active"
        role="group"
        aria-roledescription="slide"
        aria-label="Slide 1 of 4"
      >
        <img
          src="./../assets/images/cv.webp"
          class="d-block w-30"
          alt="lick to navigate to curriculum"
          @click="$router.push('/curriculum')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ $t('curriculum-h') }}</h2>
        </div>
      </div>
      <div
        class="carousel-item"
        role="group"
        aria-roledescription="slide"
        aria-label="Slide 2 of 4"
      >
        <img
          src="./../assets/images/javaScript.webp"
          class="d-block w-100"
          alt="click to navigate to coding"
          @click="$router.push('/coding')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ $t('coding-h') }}</h2>
        </div>
      </div>
      <div
        class="carousel-item"
        role="group"
        aria-roledescription="slide"
        aria-label="Slide 3 of 4"
      >
        <img
          src="./../assets/images/ux-design.webp"
          class="d-block w-100"
          alt="click to navigate to UX design"
          @click="$router.push('/UX')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ $t('ux-design-h') }}</h2>
        </div>
      </div>
      <div
        class="carousel-item"
        role="group"
        aria-roledescription="slide"
        aria-label="Slide 4 of 4"
      >
        <img
          src="./../assets/images/poukazka.webp"
          class="d-block w-100"
          alt="click to navigate to graphic"
          @click="$router.push('/graphic')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ $t('graphic-h') }}</h2>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 4px;
}
.carousel {
  @media (min-width: 650px) {
    height: 360px;
    margin: auto;
  }
}
.carousel-item h2 {
  color: white !important;
  font-size: 20px;
}
.carousel-item > img {
  height: 160px;
  width: 100%;
  object-fit: contain;
  margin: auto;
  @media (min-width: 650px) {
    height: 360px;
  }
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23808080' stroke='%23808080' stroke-width='0.2' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0.5l3.5 3.5-3.5 3.5-1-1L4.25 4l-2.5-2.5L2.75 0.5z'/%3e%3c/svg%3e");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23808080' stroke='%23808080' stroke-width='0.2' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0.5l-3.5 3.5 3.5 3.5 1-1L3.75 4l2.5-2.5L5.25 0.5z'/%3e%3c/svg%3e");
}
</style>
