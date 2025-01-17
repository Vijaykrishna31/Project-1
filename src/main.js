import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faPhone);

// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

const app = createApp(App)
app.use(router)
app.mount('#app')