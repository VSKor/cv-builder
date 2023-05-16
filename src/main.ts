import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './icon-font/icons.scss';
import './styles/main.scss';
import { setupQuasar } from '@/plugins/quasar';

const app = createApp(App);

app.use(createPinia());
app.use(router);
setupQuasar(app);

app.mount('#app');
