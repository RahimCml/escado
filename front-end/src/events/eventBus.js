import { createApp } from 'vue';

const app = createApp({});
const EventBus = app.config.globalProperties.$bus = new app;

export default EventBus;