//Imports:
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

/**Sjekker om appen har en BaseURL hvis appen er publisert på nettet
 * hvis den ikke er det vil den bruke en baseURL fra localhost.
 * Dette vil gjøre det lettere når man kommuniserer med endepunktene i backend.
*/
if(process.env.VUE_APP_API_URL)
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
else
    axios.defaults.baseURL = 'http://localhost:8085/qs';
 
//Oppretter app, store og router og mounter appen    
createApp(App).use(store).use(router).mount("#app");
