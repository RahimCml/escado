<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>ESCADO</h3>
            <p>
              ESCADO, logistika və nəqliyyat sahəsində aparıcı şirkətdir.
              Məqsədimiz müştərilərimizə ən yaxşı xidməti göstərmək və onların
              logistik ehtiyaclarını ödəməkdir.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="social-icons">
              <div class="icon-text">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <span>Instagram</span>
              </div>
              <div class="icon-text">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <span>Facebook</span>
              </div>
              <div class="icon-text">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span>Mail</span>
              </div>
            </div>
            <div class="contact-info">
              <div class="icon-text">
                <font-awesome-icon :icon="['fas', 'phone']" />
                <span>+1 123 456 7890</span>
              </div>
              <div class="icon-text">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                <span>123 Main Street, City, Country</span>
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

<script>
export default {
  name: "FooterComponent",
};
</script>

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

.legal-notice {
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 20px;
}
</style>
