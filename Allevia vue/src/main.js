import { createApp } from "vue";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);

app.mount("#app");
