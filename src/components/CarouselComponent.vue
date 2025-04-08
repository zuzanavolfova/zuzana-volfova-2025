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
        <img src="./../assets/images/volfova-zuzana-foto.jpg" class="d-block w-30" alt="..." />

        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('curriculum-h') }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./../assets/images/programovani.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('coding-h') }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./../assets/images/ux-design.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ $t('ux-design-h') }}</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./../assets/images/poukazka.jpg" class="d-block w-100" alt="..." />
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
.carousel-item > img {
  //TODO edit images
}
</style>
