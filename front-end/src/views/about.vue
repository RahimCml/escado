<template>
  <div class="about-container">
    <div class="about-info">
      <h1>{{ companyInfo.name }}</h1>
      <p style="font-size: 25px">{{ companyInfo.description }}</p>
    </div>
    <div class="customer-satisfaction">
      <div class="customer-text">
        <h1>Müştəri məmnuniyyəti</h1>
      </div>
      <div class="slider-container">
        <div class="slider-track">
          <div
            class="customer-card"
            v-for="customer in customers"
            :key="customer.name"
          >
            <div class="customer-avatar"></div>
            <div class="customer-name">
              <h3>{{ customer.name }}</h3>
            </div>
            <div class="customer-feedback">
              <p>{{ customer.feedback }}</p>
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
      customers: [
        {
          name: ' Hümbətov Orxan',
          feedback: 'Escado ilə əməkdaşlıq etməklə həm zamanda həmdə keyfiyyətdə qazanc əldə etdim. Sürət və keyfiyyət'
        },
        {
          name: 'Əsədov Murad',
          feedback: 'Daha öncələrdə başqa şirkətlərlə əməkdaşlıq etmişdim lakin zaman baxımından Escado məni irəli saldı'
        },
        {
          name: 'Quluzadə Vəli',
          feedback: 'Almaq istədiyim məişət avadanlığını mənim üçün araşdırdılar və ucuz qiymətə mənim üçün ən qisa zamanda gətirdilər. Təşəkkürlər Escado'
        }
      ],
      companyInfo: {
        name: 'Escado',
        description: 'Escado sizə çindən Azərbaycana karqo və digər xidmətləri göstərir. 2010-cu ildən Çində fəaliyyətə başlayan şirkətimiz Azərbaycan, Türkiyə, Rusiya, Özbəkistan, Qazaxıstan, Gürcüstan kimi ölkələrdə müxtəlif sahələrdə müştərilərə əməkdaşlıq edir. Uzun illərin təcrübəsinə əsaslanaraq sizi əmin edə bilərik ki, Şirkətimiz ilə tərəfdaşlıq biznesinizin inkişaf etməsinə böyük töhfə verəcək. Şüarımız "Müştəri Məmnuniyyətidir"',
      },
    };
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
  border: 5px solid  rgba(0, 128, 0, 0.591);
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
  height: 100px;
  background-color: rgba(0, 128, 0, 0.591);
  border-radius: 20px;
  text-align: center;
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
  border: 5px solid  rgba(0, 128, 0, 0.466);
  border-radius: 45px 15px 45px 15px;


}

.customer-card:hover {
  background-color: rgba(217, 239, 220, 0.53);
  border: none;
  box-shadow: 0 0 1rem  rgba(0, 128, 0, 0.591);;
}

.customer-name {

  padding-left: 10px;
    padding-top: 10px;
}

.customer-feedback {
  width: 100%; /* Sizin istediğiniz genişlik */
  white-space: normal;
  text-overflow: ellipsis;    
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Metni 4 satıra sınırla */
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
  font-size: 20px; /* Müşteri geri bildirimini daha küçük bir boyutta göstermek için font-size değerini ayarlayabilirsiniz */
}

@media (max-width: 768px) {
  .about-info {
    padding: 20px;
  }

  .about-logo {
    padding: 20px;
  }

.customer-text { 
  width: 100%;
}
}
</style>
