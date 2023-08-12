import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home.vue';
import AboutPage from '../views/about.vue';
import LogistiServicePage from '../components/service_components/logistic_service.vue';
import VisaServicePage from '../components/service_components/visa_service.vue';
import TranslateServicePage from '../components/service_components/translate_service.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/logisticService',
    name: 'LogistiServicePage',
    component: LogistiServicePage,
  },
  {
    path: '/visaService',
    name: 'VisaServicePage',
    component: VisaServicePage,
  },
  {
    path: '/translateService',
    name: 'TranslateServicePage',
    component: TranslateServicePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;