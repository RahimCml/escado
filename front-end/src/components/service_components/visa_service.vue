<script>
export default {
    name: 'VisaServicePage'
}
</script>

<template> 

    <div class="info-about-transport">
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
          <div class="info-visa">
            <h1 style="text-align: center;">Visa dəstəyi</h1>
            <p> - Dəvətnamənin göndərilməsi <br> - Anketin doldurulması <br> - Aviabiletin münasib qiymətə təşkili <br> - Hava limanında qarşılama <br> - Htelə yerləşdirmə </p>
          </div>
        </div>
    </template>
    
    <style>
    
    .info-about-transport {
      display: flex;
      flex-wrap: wrap;
      font-family: Arial, sans-serif;
    }
    
    .info-visa {
      flex: 1 1 100px;
      padding: 100px;
      /* background-color: rgba(0, 128, 0, 0.591); */
      height: 100%;
      border-radius: 90px 30px 90px 30px;
      margin: 20px;
    }
    
    .images {
      flex: 1 1 100px;
      display: flex;
      justify-content: flex-end;
      /* Resimleri sağ tarafta hizala */
    }
    
    .image {
      width: 33.33%;
      height: 300px;
      margin-top: 50px;
      /* İstediğiniz boyutu burada belirtebilirsiniz */
      overflow: hidden;
      /* Resimlerin taşan kısımlarını gizle */
      border: 5px solid rgb(190, 233, 160);
      /* Border özelliği ile kenarlık oluştur */
      border-radius: 100px 40px 100px 40px;
    }
    
    .image-item {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      /* Resmi üst kısmına hizala */
    }
    </style>
    
    