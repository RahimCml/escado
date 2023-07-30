<script>
import { ref } from "vue";

export default {
  name: "HomePage",
  components: {
  },
  setup() {
    const activeTab = ref("truck"); // Varsayılan aktif sekme
    return { activeTab };
  },
  data() {
    return {
      activeColumn: 0, // 0: Hiçbir kolon seçili değil, 1: 1. kolon seçili, 2: 2. kolon seçili, 3: 3. kolon seçili
    };
  },
};
</script>

<template>
  <div class="home-page">
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
          <img
            src="@/assets/airplane-logistic.jpeg"
            class="d-block w-100"
            alt="..."
          />
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
          <img src="@/assets/icons/icon-airplane.png" alt="Kamyon Resmi" />
          <h1>Hava Yolu</h1>
          <p>Hava yolu vasitəsi ilə 10 dan çox ölkədən təslimat</p>
        </div>
        <div class="col">
          <img src="@/assets/icons/icon-truck.png" alt="Location Resmi" />
          <h1>Quru Yolu</h1>
          <p>Quru yolu vasitəsi ilə 30 dan çox ölkədən təslimat</p>
        </div>
        <div class="col">
          <img src="@/assets/icons/icon-location.png" alt="Uçak Resmi" />
          <h1>Ölkələr</h1>

          <h3>30+</h3>
          <p>ölkədən logistik destək</p>
        </div>
      </div>
    </div>
  </div>
</template>

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

.home-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.home-container .row {
  display: flex;
  gap: 50px; /* Sütunlar arasına 20px mesafe bırakın */
  width: 70%;
}
.home-container .row .col {
  background-color: transparent; /* Kolonların arka planını saydam yapar */
  text-align: center;
  padding: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: background-color 0.3s, color 0.3s;
}

.home-container .row .col:hover {
  box-shadow: 0 0 1rem grey;

}

.home-container .row .col p:hover {
  background-color: rgb(38, 108, 38);
  color: white; /* İkon altındaki metinlerin arka planını beyaz yapar */
}

.home-container .row .col img {
  width: 70%;
  height: 100px;
}
.text {
  font-size: 18px;
}

/* .home-container .col:hover {
  color: white;
  background-color: green;
} */

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
