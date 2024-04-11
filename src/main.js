import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Import Pinia

import './assets/main.css'; // Import your CSS file

const app = createApp(App);

// Initialize Pinia and use it in your app
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
