<script>
export default {
    name: 'ServiceComponent',
    handleScroll(event) {
            const infoTranslate = this.$refs.infoTranslate;
            const scrollOffset = event.target.scrollTop;
            const red = 190 - scrollOffset;
            const green = 233 - scrollOffset;

            infoTranslate.style.borderTopColor = `rgb(${red}, ${green}, 160)`;
        }
}
</script>

<template>
    <section class="info-about-service" id="infoAboutTransport">
        <div class="images">
            <div class="image" style="position: relative; left:45px">
                <img src="@/assets/others/airplane_about.jpeg" class="image-item">
            </div>
            <div class="image" style="margin-top: 20%; position: relative; left:20px">
                <img src="@/assets/others/shipping_about.jpeg" class="image-item">
            </div>
            <div class="image">
                <img src="@/assets/others/2.jpeg" class="image-item">
            </div>
        </div>
        <div class="info">
            <h1>Logistik xidmət</h1>
            <p> -Konteynerlərin sərfəli qiymətə sifarişi <br> -Qapıdan-qapıya çatdırılma və ya tələb olunan Karqoya təhvil
                <br> -Yükdaşımanın müddəti və ya istiqaməti barədə onlayn məlumat verilməsi</p>
        </div>
    </section>

    <section class="info-about-service" id="infoAboutTranslate">
        <div class="info" ref="infoTranslate" @scroll="handleScroll">
            <h1>təcrümə xidməti</h1>
            <p> Escado </p>
        </div>
        <div class="images" style="margin-right: 60px;">
            <div class="image" style="position: relative; left:45px">
                <img src="@/assets/others/airplane_about.jpeg" class="image-item">
            </div>
            <div class="image" style="margin-top: 20%; position: relative; left:20px">
                <img src="@/assets/others/shipping_about.jpeg" class="image-item">
            </div>
            <div class="image">
                <img src="@/assets/others/2.jpeg" class="image-item">
            </div>
        </div>
    </section>

    <section class="info-about-service" id="infoAboutVisa">
        <div class="images">
            <div class="image" style="position: relative; left:45px">
                <img src="@/assets/others/airplane_about.jpeg" class="image-item">
            </div>
            <div class="image" style="margin-top: 20%; position: relative; left:20px">
                <img src="@/assets/others/hotel.jpeg" class="image-item">
            </div>
            <div class="image">
                <img src="@/assets/others/passport.png" class="image-item">
            </div>
        </div>
        <div class="info">
            <h1 style="text-align: center;">Visa dəstəyi</h1>
            <p> - Dəvətnamənin göndərilməsi <br> - Anketin doldurulması <br> - Aviabiletin münasib qiymətə təşkili <br> -
                Hava limanında qarşılama <br> - Htelə yerləşdirmə </p>
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

#infoAboutTransport::before  {
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

#infoAboutTranslate::before  {
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


#infoAboutVisa::before  {
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

.image-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    /* Resmi üst kısmına hizala */
}

/* ... Your existing styles ... */

@media (max-width: 667px) {
  #infoAboutTransport  {    
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

