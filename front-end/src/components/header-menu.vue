<script>
export default {
  name: "HeaderMenu",
  components: {},
  data() {
  },
};
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="@/assets/escado.png" alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Ana səyfə</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Haqqımızda</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Xidmətlər
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" to="/logisticService">Logistika xidməti</router-link></li>
                <li><router-link class="dropdown-item" to="/translateService">Tərcümə xidməti</router-link></li>
                <li><router-link class="dropdown-item" to="/visaService">bilet xidməti</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="">Əlaqə</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style>
  /* Diğer stil kodları */
  .navbar {
    background-color: #ffffff; /* Arka plan rengini beyaz yapın */
  }
  
  .navbar-nav {
    padding-right: 10%;
  }
  
  .navbar-brand img {
    width: 100px; /* Resim genişliği istediğiniz boyuta göre ayarlayın */
  }
  
  .navbar-nav .nav-link {
    position: relative;
    margin: 0 10px; /* Menü öğeleri arasında 10px mesafe */
    border-radius: 20px; /* Köşeleri yuvarlak yapma */
    font-size: 18px; /* Text boyutunu 18px yapma */
    display: flex;
    align-items: center; /* Texti dikey ortala */
  }
  
  .navbar-nav .nav-link:hover {
    background-color: #13bc6a;
    color: #ffffff;
  }
  
  .navbar-nav .nav-link:hover a {
    color: white; /* Sadece text rengini beyaz yapın */
  }

  /* .navbar-nav .nav-link.active { */
    /* background-color: rgb(17, 143, 17); */
    /* } */
  </style>
  