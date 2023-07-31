<script>
import { ref } from "vue";
import FooterComponent from "@/components/footerComponent.vue";

export default {
  name: "HomePage",
  components: {
    FooterComponent
  },
  setup() {
    const activeTab = ref("truck"); // Varsayılan aktif sekme
    return { activeTab };
  },
  data() {
    return {
      activeColumn: 0, // 0: Hiçbir kolon seçili değil, 1: 1. kolon seçili, 2: 2. kolon seçili, 3: 3. kolon seçili
      selectedCol: 1,
    };
  },
  methods: {
    showInfo(colIndex) {
      this.selectedCol = colIndex;
    },
  },
};
</script>

<template>
  <div class="home-page">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/boat-sea-ocean-tanker.jpg" class="d-block w-100" alt="..." />
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
          <img src="@/assets/truck-logistic.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Quru logistikası</h5>
            <p>Daha ətrafli məlumatlar...</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="home-container">
      <div class="home-container-card">
        <div class="row">
          <div :class="['col', { active: selectedCol === 1 }]" @click="showInfo(1)">
            <font-awesome-icon class="icons" :icon="['fas', 'plane-departure']" />
            <h1 class="texts">Hava Yolu</h1>
            <p class="texts">Hava yolu vasitəsi ilə 10 dan çox ölkədən təslimat</p>
          </div>
          <div :class="['col', { active: selectedCol === 2 }]" @click="showInfo(2)">
            <font-awesome-icon class="icons" :icon="['fas', 'truck-fast']" />
            <h1 class="texts">Quru Yolu</h1>
            <p class="texts">Quru yolu vasitəsi ilə 30 dan çox ölkədən təslimat</p>

          </div>
          <div :class="['col', { active: selectedCol === 3 }]" @click="showInfo(3)">
            <font-awesome-icon class="icons" :icon="['fas', 'anchor']" />
            <h1 class="texts">Dəniz Yolu</h1>
            <h3 class="texts">30+</h3>
            <p class="texts">Dəniz yolu vasitəsi ilə 20 dan çox ölkədən təslimat</p>
          </div>
        </div>
      </div>
      <div class="home-container-info">
        <div v-if="selectedCol === 1" class="info">
          <h1>5 ildən artıq zamandır hava logistika ilə xidmətinizdəyik. </h1>
        </div>
        <div v-if="selectedCol === 2" class="info">
          <h1>Quru haqqinda</h1>
        </div>

        <div v-if="selectedCol === 3" class="info">
          <h1>Location haqqinda</h1>
        </div>
      </div>
    </div>
    <FooterComponent />
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
  width: 100%;
  /* Resimlerin genişliği 100% olacak şekilde ayarlanır */
  height: 600px;
  /* İstediğiniz yüksekliği buradan ayarlayabilirsiniz */
  object-fit: cover;
  /* Resimlerin boyutunu koruyarak uygun şekilde sığmasını sağlar */
}

.carousel-control-prev-icon {
  margin-right: 40%;
}

.carousel-control-next-icon {
  margin-left: 40%;
}

.home-container {
  background-image: url('@/assets/EXP.png');
  background-size: cover;
  padding-bottom: 11%;

}

.home-container-card {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-top: 60px;
  padding-bottom: 10px;
}

.home-container .row {
  display: flex;
  gap: 50px;
  /* Sütunlar arasına 20px mesafe bırakın */
  width: 70%;
}

.home-container .row .col {
  background-color: transparent;
  /* Kolonların arka planını saydam yapar */
  text-align: center;
  padding: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 15px;
}

.home-container .row .col:hover {
  box-shadow: 0 0 1rem grey;

}


.home-container .row .col img {
  width: 70%;
  height: 100px;
}

.home-container .row .col.active {
  /* background-color: rgb(232, 227, 227); */
  box-shadow: 0 0 1rem grey;

} 

.icons {
  height: 20%;
  color: #4a715ecf;
}

.texts {
  color: #4a715ecf;
}

.info {
  margin-top: 10px;
  padding: 10px;
  /* background-color: #f9f9f9;
  border: 1px solid #ccc; */
  text-align: center;
}

/* .home-container .col:hover {
  color: white;
  background-color: green;
} */

@media (max-width: 868px) {
  .home-container {
    background-image: none;
  }

  .home-container .row .col {
    height: 300px;
    width: 400px;
    background-image: url('@/assets/EXP.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;


  }

  .carousel-item img {
    max-height: 500px;
    /* 768 piksel genişlikte veya daha küçük ekranlarda yüksekliği 500px yapar */
  }
}

@media (max-width: 576px) {
  .carousel-item img {
    max-height: 300px;
    /* 576 piksel genişlikte veya daha küçük ekranlarda yüksekliği 300px yapar */
  }
}
</style>
