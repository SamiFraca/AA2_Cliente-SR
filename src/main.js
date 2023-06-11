import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { createI18n } from "vue-i18n";
const currentLanguage = store.state.language;
console.log(currentLanguage);
const app = createApp(App);
const i18n = createI18n({
  locale: store.state.language,
  messages: {
    es: {
      message: {
        welcome: "Bienvenido de vuelta",
        slogan: "Nosotros servimos, tu te entretienes",
        name: "Nombre",
        location: "Localización",
        sport: "Deporte",
        logIn: "Iniciar Sesión",
        signIn: "Registrar",
        errorPassword:
          "La contraseña no coincide. Porfavor, intentelo de nuevo.",
        barOwner: "Eres dueño de un bar?",
        yes: "Si",
        password: "Contraseña",
        invalid: "Usuario o contraseña invalido. Porfavor, intentelo de nuevo.",
        events: "Eventos",
        capacity: "Capacidad",
        closeSession: "Cerrar sesión",
        account: "Cuenta",
        hello: "Hola",
        shows: "Eventos",
        description: "Descripción",
        country: "País",
        city: "Ciudad",
        address: "Dirección",
        create:"Crear",
        delete:"Borrar",
        cancel:"Cancelar"
      },
    },
    en: {
      message: {
        welcome: "Welcome back",
        slogan: "We serve, you enjoy",
        name: "Name",
        location: "Location",
        sport: "Sport",
        logIn: "Log in",
        signIn: "Sign in",
        errorPassword: "Password doesn't match. Please, try again.",
        barOwner: "Are you a bar owner?",
        yes: "Yes",
        no: "No",
        password: "Password",
        invalid: "Invalid Username or password. Please try again.",
        events: "Events",
        capacity: "Capacidad",
        closeSession: "Logout",
        account: "Account",
        hello: "Hi",
        shows: "Events",
        description: "Description",
        country: "Country",
        city: "City",
        address: "Address",
        create:"Create",
        delete:"Delete",
        cancel:"Cancel"
      },
    },
  },
});
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");

store.watch(
  (state) => state.language,
  (newLanguage) => {
    i18n.global.locale = newLanguage;
  }
);
