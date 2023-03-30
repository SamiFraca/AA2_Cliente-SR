import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { createI18n } from 'vue-i18n'

const app = createApp(App);
const i18n = createI18n({
  locale: 'es', 
  messages: {
    es: {
      message: {
        welcome: 'Bienvenido'
      }
    },
    en: {
      message: {
        welcome: 'Welcome back'
      }
    }
  }
})
app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
