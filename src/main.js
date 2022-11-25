import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";
import AOS from "aos";
import axios from 'axios'
import "aos/dist/aos.css";

import "./assets/css/font-awesome.css";
import "./assets/css/bootstrap.css";
import "./assets/css/ntfs.css";
import "./assets/App.scss";

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

// import "./searchbar/assets/css/font-awesome.css";
// import "./searchbar/assets/css/bootstrap.css";
// import "./searchbar/assets/css/ntfs.css";
// import "./searchbar/assets/App.scss";

const app = createApp(App).use(router,axios).use(Toaster);

app.use(AOS.init).mount("#app");

