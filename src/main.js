import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

if(process.env.VUE_APP_API_URL)
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
else
    axios.defaults.baseURL = 'http://localhost:8085/qs';
    
createApp(App).use(store).use(router).mount("#app");
