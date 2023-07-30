<template>
  <div class="home-page">
    <HeaderMenu />
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/boat-sea-ocean-tanker.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Gəmi logistikası</h5>
            <p>Daha ətrafli məlumatlar...</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/airplane-logistic.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>havva yolu logistikası</h5>
            <p>Daha ətrafli məlumatlar...</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/truck-logistic.jpeg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Quru logistikası</h5>
            <p>Daha ətrafli məlumatlar...</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="home-container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
  </div>
</template>

<script>
import HeaderMenu from "../components/header-menu.vue";

export default {
  name: "HomePage",
  components: {
    HeaderMenu,
  },
};
</script>

<style>
/* Stil kodları buraya gelecek */

.home-page {
  position: relative;
}

.carousel {
  z-index: 1;
}

/* Resimlerin boyutunu sabitlemek için */
.carousel-item img {
  width: 100%; /* Resimlerin genişliği 100% olacak şekilde ayarlanır */
  height: 600px; /* İstediğiniz yüksekliği buradan ayarlayabilirsiniz */
  object-fit: cover; /* Resimlerin boyutunu koruyarak uygun şekilde sığmasını sağlar */
}

.carousel-control-prev-icon {
  margin-right: 40%;
}
.carousel-control-next-icon {
  margin-left: 40%;
}

@media (max-width: 768px) {
  .carousel-item img {
    max-height: 500px; /* 768 piksel genişlikte veya daha küçük ekranlarda yüksekliği 500px yapar */
  }
}

@media (max-width: 576px) {
  .carousel-item img {
    max-height: 300px; /* 576 piksel genişlikte veya daha küçük ekranlarda yüksekliği 300px yapar */
  }
}
</style>
