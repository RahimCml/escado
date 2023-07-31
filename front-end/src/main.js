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

// Add the imported icons to the library
library.add(fas, fab);

const app = createApp(App);
app.use(router);
app.use(Antd);

// Make FontAwesomeIcon globally available in your components
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';