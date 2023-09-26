<template>
  <div class="about-container">
    <div class="about-info">
      <h1 style="font-size: 40px; color: #064f56;">{{ $t('companyInfo.name') }}</h1>
      <p style="font-size: 25px; color: #064f56;">{{ $t('companyInfo.description') }}</p>
    </div>
    <div class="customer-satisfaction">
      <div class="customer-text">
        <h2 style="color: #064f56;">{{ $t('customerSatisfaction') }}</h2>
      </div>
      <div class="slider-container">
        <div class="slider-track">
          <div>
            <div v-for="(feedback, index) in customerFeedbacks" :key="index" class="customer-card">
              <div class="customer-avatar">
              
            </div>
            <div class="customer-name">
              <h3>{{ feedback.name }}</h3>
            </div>
            <div class="customer-feedback">
              <p>{{ feedback.feedback }}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      customerFeedbacks: [],
      loading: false
    }
  },
  mounted() {
    this.loading = false;
      var language = this.$i18n.locale;
      import(`@/locales/${language}.json`)
        .then(response => {
          this.customerFeedbacks = response.customerFeedbacks;
          this.loading = true;
        })
        .catch(error => {
          console.error('JSON verileri içe aktarılırken bir hata oluştu:', error);
          this.loading = false;
        });
  },
};
</script>

<style>
/* Stil yönergeleri buraya gelebilir */
.about-container {
  /* display: flex; */
  flex-wrap: wrap;
  font-family: Arial, sans-serif;
}

.about-info {
  /* flex: 1 1 100px; */
  padding: 100px;
  /* background-color: rgba(0, 128, 0, 0.591); */
  background-image: url('@/assets/world-map.png');
  background-size: cover;
  padding-bottom: 11%;
  /* background-image: url("@/assets/escado-logo.png"); */
  height: 100%;
  border-radius: 90px 30px 90px 30px;
  margin: 20px;
}

.about-info h1 {
  text-align: center;
  font-size: 24px;
}

.about-info p {
  font-size: 16px;
}

.about-logo {
  flex: 1 1 500px;
  display: flex;
  justify-content: flex-end;
  padding: 200px;
}

.about-logo .about-logo-img {
  width: 100%;
  height: auto;
}

.customer-satisfaction {
  padding: 30px;
  width: 100%;
}

.customer-text {
  padding: 25px;
  width: 33%;
  height: 85px;
  background-color: #a5cd3a;
  border-radius: 20px;
  text-align: center;
}

.customer-text:hover {
  /* background-color: rgba(217, 239, 220, 0.53);
  box-shadow:  0 0 1rem #1dde8189; */
}

.customer-text h1 {
  color: #595757;

}

.slider-container {
  padding: 20px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.slider-track {
  display: inline-block;
  white-space: nowrap;
}

.customer-card {
  width: 400px;
  display: inline-block;
  margin-right: 10px;
  height: auto;
  border: 5px solid #a5cd3a;
  border-radius: 45px 15px 45px 15px;


}

.customer-card:hover {
  background-color: rgba(217, 239, 220, 0.53);
  border: none;
  box-shadow: 0 0 1rem rgba(0, 128, 0, 0.591);
}

.customer-name {
  padding-left: 10px;
  padding-top: 10px;
}

.customer-feedback {
  width: 100%;
  /* Sizin istediğiniz genişlik */
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  /* Metni 4 satıra sınırla */
  -webkit-box-orient: vertical;
}

.slider-container::-webkit-scrollbar {
  width: 8px;
}

.slider-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.customer-feedback p {
  min-width: 20px;
  padding-left: 7px;
  font-size: 20px;
  /* Müşteri geri bildirimini daha küçük bir boyutta göstermek için font-size değerini ayarlayabilirsiniz */
}

@media (max-width: 667px) {
  .about-info {
    padding: 20px;
  }

  .about-logo {
    padding: 20px;
  }

  .about-info {
    background-color: #a5cd3a;
    background-image: none;
  }

  .customer-text {
    width: 100%;
  }
}</style>
