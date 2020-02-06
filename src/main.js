import Vue from 'vue'
import App from './App.vue'
import Vue2Editor from "vue2-editor";

Vue.config.productionTip = false
Vue.use(Vue2Editor);

new Vue({
  render: h => h(App),
}).$mount('#app')
