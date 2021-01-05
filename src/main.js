import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import formatCurrency from "./filter/formatCurrency";

Vue.config.productionTip = false;
Vue.filter("formatCurrency", formatCurrency);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
