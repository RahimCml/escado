<script>


export default {
  name: "HeaderMenu",
  data() {
    return {
      selectedLanguage: "az", // Başlangıçta İngilizce olarak ayarlanmıştır
      loading: false
    };
  },
  methods: {
    changeLanguage() {
      this.loading = true
      // Burada seçilen dil değiştiğinde, Vue I18n ile dil ayarını güncelleyin
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="@/assets/escado-logo.png" alt="Logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"> {{ $t('home') }} </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"> {{ $t('about') }} </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              {{ $t('services') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="serviceComponent#infoAboutTransport">
                  {{ $t('logisticsService') }}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="serviceComponent#infoAboutTranslate">
                  {{ $t('translationService') }}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="serviceComponent#infoAboutVisa">
                  {{ $t('ticketService') }}
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">{{ $t('contact') }}</router-link>
          </li>
        </ul>
        <select v-model="selectedLanguage" @change="changeLanguage">
          <option value="az">Azərbaycan</option>
          <option value="en">English</option> 
          <option value="zh">中文</option>
          <option value="ru">Русский</option>
          <!-- Diğer dil seçeneklerini buraya ekleyin -->
        </select>
      </div>
    </div>
  </nav>
</template>

  
<style>

:root {
    --main-color: #a5cd3a;
    --background-color: #064f56;
    --grey-color: #7f8281;
    --text-color: #ffffff;
}
/* Diğer stil kodları */
.navbar {
  background-color: #ffffff;
  /* Arka plan rengini beyaz yapın */
}

.navbar-nav {
  padding-right: 10%;
}

.navbar-brand img {
  width: 100px;
  /* Resim genişliği istediğiniz boyuta göre ayarlayın */
}

router-link {
  font-size: 100px;
  color: #064f56;
}

.navbar-nav .nav-link {
  position: relative;
  margin: 0 10px;
  /* Menü öğeleri arasında 10px mesafe */
  border-radius: 20px;
  /* Köşeleri yuvarlak yapma */
  font-size: 22px;
  /* Text boyutunu 18px yapma */
  display: flex;
  align-items: center;
}

.navbar-nav .nav-link:hover {
  background-color: #a5cd3a;
  color: #7f8281;
}

.navbar-nav .nav-link:hover a {
  color: white;
  /* Sadece text rengini beyaz yapın */
}

/* .navbar-nav .nav-link.active { */
/* background-color: rgb(17, 143, 17); */
/* } */
</style>
  