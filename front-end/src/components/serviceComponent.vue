<script>
export default {
  name: "ServiceComponent",
  handleScroll(event) {
    const infoTranslate = this.$refs.infoTranslate;
    const scrollOffset = event.target.scrollTop;
    const red = 190 - scrollOffset;
    const green = 233 - scrollOffset;

    infoTranslate.style.borderTopColor = `rgb(${red}, ${green}, 160)`;
  },
};
</script>

<template>
  <section class="info-about-service" id="infoAboutTransport">
    <div class="images">
      <div class="image" style="position: relative; left: 45px">
        <img class="image-item" id="infoAboutTransport1" />
      </div>
      <div
        class="image"
        style="margin-top: 20%; position: relative; left: 20px"
      >
        <img class="image-item" id="infoAboutTransport2"/>
      </div>
      <div class="image">
        <img class="image-item" id="infoAboutTransport3" />
      </div>
    </div>
    <div class="info">
      <h1>{{ $t("transportInfo.title") }}</h1>
      <ul>
        <li>
          {{ $t("transportInfo.description1") }}
        </li>
        <li>
          {{ $t("transportInfo.description2") }}
        </li>
        <li>
          {{ $t("transportInfo.description3") }}
        </li>
      </ul>
    </div>
  </section>

  <section class="info-about-service" id="infoAboutTranslate">
    <div class="info" ref="infoTranslate" @scroll="handleScroll">
      <h1>{{ $t("translateInfo.title") }}</h1>
      <ul>
        <li>
          {{ $t("translateInfo.description1") }}
        </li>
        <li>
          {{ $t("translateInfo.description2") }}
        </li>
        <li>
          {{ $t("translateInfo.description3") }}
        </li>
      </ul>
    </div>
    <div class="images" style="margin-right: 60px">
      <div class="image" style="position: relative; left: 45px">
        <img class="image-item" id="infoTranslate1" />
      </div>
      <div
        class="image"
        style="margin-top: 20%; position: relative; left: 20px"
      >
        <img class="image-item" id="infoTranslate2" />
      </div>
      <div class="image">
        <img  class="image-item" id="infoTranslate3" />
      </div>
    </div>
  </section>

  <section class="info-about-service" id="infoAboutVisa">
    <div class="images">
      <div class="image" style="position: relative; left: 45px">
        <img class="image-item" id="infoAboutVisa1" />
      </div>
      <div
        class="image"
        style="margin-top: 20%; position: relative; left: 20px"
      >
        <img class="image-item" id="infoAboutVisa2" />
      </div>
      <div class="image">
        <img class="image-item"  id="infoAboutVisa3" />
      </div>
    </div>
    <div class="info">
      <h1 style="text-align: center">{{ $t("visaInfo.title") }}</h1>
      <ul>
        <li>
          {{ $t("visaInfo.description1") }}
        </li>
        <li>
          {{ $t("visaInfo.description2") }}
        </li>
        <li>
          {{ $t("visaInfo.description3") }}
        </li>
        <li>
          {{ $t("visaInfo.description4") }}
        </li>
        <li>
          {{ $t("visaInfo.description5") }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.info-about-service {
  padding-top: 150px;
  display: flex;
  flex-wrap: wrap;
  font-family: Arial, sans-serif;
}

#infoAboutTransport {
  padding: 10px;
  position: relative;
}

#infoAboutTransport::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 5px; /* Renklendirme genişliği */
  height: 100%; /* Renklendirme yüksekliği */
  margin: 20px;
  background-color: rgb(190, 233, 160);
}

#infoAboutTranslate {
  padding: 30px;
  position: relative;
  flex: 1 1 100px;
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  border-top: 5px solid rgb(190, 233, 160); /* Top border style */
}

#infoAboutTranslate::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px; /* Renklendirme genişliği */
  height: 100%; /* Renklendirme yüksekliği */
  /* margin: 20px; */
  background-color: rgb(190, 233, 160);
}

.info {
  flex: 1 1 100px;
  padding: 100px;
  height: 100%;
  border-radius: 90px 30px 90px 30px;
  margin: 20px;
}

.info-translate {
  flex: 1 1 100px;
  padding: 100px;
  height: 100%;
  border-radius: 90px 30px 90px 30px;
  margin: 20px;
}

#infoAboutVisa {
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  border-top: 5px solid rgb(190, 233, 160); /* Top border style */
}

#infoAboutVisa::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 5px; /* Renklendirme genişliği */
  height: 100%; /* Renklendirme yüksekliği */
  background-color: rgb(190, 233, 160);
}

.images {
  /* flex: 1 1 100px; */
  display: flex;
  justify-content: flex-end;
  /* Resimleri sağ tarafta hizala */
}


#infoAboutTransport1, #infoAboutTransport2, #infoAboutTransport3 {
    
}


#infoAboutTransport1 {
    background-image: url('@/assets/others/airplane_about.jpeg');

}

#infoAboutTransport2 {
    background-image: url('@/assets/others/shipping_about.jpeg');

}

#infoAboutTransport3 {
    background-image: url('@/assets/others/2.jpeg');
}

/*translate*/

#infoTranslate1 {
    background-image: url('@/assets/translate.jpeg');

}

#infoTranslate3 {
    background-image: url('@/assets/translatee.jpeg');

}

#infoTranslate2 {
    background-image: url('@/assets/Translator_China.png');

}



/*visa*/

#infoAboutVisa1 {
    background-image: url('@/assets/others/airplane_about.jpeg');
}

#infoAboutVisa2 {
    background-image: url('@/assets/others/hotel.jpeg');
}

#infoAboutVisa3 {
    background-image: url('@/assets/others/passport.png');
}







.image-item {
  background-size: cover;
  background-repeat: round;
  object-fit: cover;
  object-position: top;
  /* Resmi üst kısmına hizala */
}

/* ... Your existing styles ... */

@media (max-width: 667px) {
  #infoAboutTransport {
    flex-direction: column;
    align-items: center;
  }

  .info {
    flex: 1 1 100%;
    padding: 40px; /* Adjust padding as needed */
    margin: 20px;
    border-radius: 15px;
  }

  .images {
    justify-content: center;
    margin-top: 20px;
    margin-right: 60px;
  }

  .image {
    width: 100%;
    height: auto;
    max-height: 300px; /* Adjust max-height as needed */
    margin-top: 20px;
    border-radius: 15px;
  }
}
</style>
