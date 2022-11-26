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

var VueScrollTo = require('vue-scrollto');

axios.defaults.baseURL = 'https://searchbar-suggestion-api.herokuapp.com/'


const app = createApp(App).use(router,axios).use(Toaster).use(VueScrollTo);

app.use(AOS.init).mount("#app");

