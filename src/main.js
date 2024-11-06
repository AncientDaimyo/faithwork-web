import { createApp } from "vue";
import { createPinia } from "pinia";
import VueTheMask from 'vue-the-mask';
import "./assets/styles/app.scss";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const apiHost = process.env.VUE_APP_API_HOST;

createApp(App)
    .use(pinia)
    .use(router)
    .use(VueTheMask)
    .mount("#app");
