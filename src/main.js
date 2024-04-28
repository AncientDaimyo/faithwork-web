import { createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
// import axios from 'axios';

// const apiURL = '127.0.0.1:8000';
createApp(App).use(router).mount('#app');
// app.config.globalProperties.axios = axios;
// app.config.globalProperties.apiUrl = apiURL;