import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';


// Import FontAwesome icons and library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { createI18n } from "vue-i18n";


// Add the imported icons to the library
library.add(fas, fab);
const i18n = createI18n({
    locale: "az", // Başlangıçta kullanılacak dil
    messages: {
      en: require("./locales/en.json"),
      az: require("./locales/az.json"),
      zh: require("./locales/zh.json"),
      ru: require("./locales/ru.json"),
      // Diğer dilleri buraya ekleyin
    },
  });

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(i18n);


// Make FontAwesomeIcon globally available in your components
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';