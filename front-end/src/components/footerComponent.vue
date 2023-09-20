
<script>
export default {
  name: "FooterComponent",
};
</script>

<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>ESCADO</h3>
            <p>
              {{ $t('footer.text') }}
            </p>
          </div>
          <div class="col-lg-6">
            <div class="social-icons">
              <div class="icon-text">
                <a class="router-to-social" href="https://www.instagram.com/escadoaz/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                  <span> Instagram </span>
                </a>
              </div>
              <div class="icon-text">
                <a class="router-to-social" href="https://www.facebook.com/profile.php?id=100091400173458&mibextid=b06tZ0">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                  <span>Facebook</span>
                </a>
              </div>
              <div class="icon-text">
                <a class="router-to-social" href="mailto:escado@gmail.com">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  <span>Mail</span>
                </a>
              </div>
            </div>
            <div class="contact-info">
              <div class="icon-text">
                <a class="router-to-social" href="tel: +994 55 361 43 23">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  <span>+994 55 361 43 23</span>
                </a>
              </div>
              <div class="icon-text">
                <a class="router-to-social" href="https://goo.gl/maps/xGXz1bnvN4Vd9rLUA">
                  <font-awesome-icon :icon="['fas', 'location-dot']" /> </a>
                <span>
                  <a class="router-to-social" href="https://goo.gl/maps/xGXz1bnvN4Vd9rLUA">57 Xocasən yolu, Bakı 1063</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="legal-notice">
        &copy; 2023 ESCADO. All rights reserved. | Terms of Service | Privacy
        Policy
      </div>
    </footer>
  </div>
</template>

<style>
/* Your styles here */

.footer {
  background-color: #f9f9f9;
  padding: 30px 0;
}

.footer h3 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer p {
  color: #666;
  font-size: 16px;
}

.social-icons {
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  margin-top: 20px;
  margin-left: 50px;
}


.contact-info {
  margin-left: 50px;
}

.icon-text {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon-text span {
  margin-left: 10px;
}

.router-to-social {
  text-decoration: none;
  color: #4a715ecf;
}

.legal-notice {
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 20px;
}
</style>
