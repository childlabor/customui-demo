import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/index.scss"

Vue.config.productionTip = false;
import 'mycustomui/lib/styles/index.css';
import customUI from "mycustomui";

Vue.use(customUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
