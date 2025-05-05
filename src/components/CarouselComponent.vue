<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="./../assets/images/volfova-zuzana-foto.jpg"
          class="d-block w-30"
          alt="click to navigate to curriculum"
          @click="$router.push('/curriculum')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('curriculum-h') }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="./../assets/images/javaScript.png"
          class="d-block w-100"
          alt="click to navigate to coding"
          @click="$router.push('/coding')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('coding-h') }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="./../assets/images/ux-design.png"
          class="d-block w-100"
          alt="click to navigate to UX design"
          @click="$router.push('/UX')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('ux-design-h') }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="./../assets/images/poukazka.jpg"
          class="d-block w-100"
          alt="click to navigate to graphic"
          @click="$router.push('/graphic')"
          loading="lazy"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('graphic-h') }}</h5>
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
  border-radius: 0.5rem;
}
.carousel {
  @media (min-width: 650px) {
    height: 360px;
    margin: auto;
  }
}
.carousel-item h5 {
  color: white;
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
