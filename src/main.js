import { createApp } from "vue";
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import Vuex from "vuex";
import storeState from "./store";
// import axios from 'axios';

// const apiURL = '127.0.0.1:8000';

const store = new Vuex.Store(storeState);

createApp(App).use(router).use(store).mount('#app');