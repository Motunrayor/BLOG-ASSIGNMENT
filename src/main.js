import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
// import  VueQuillEditor from 'vue-quill-editor'

// import 'quill/dist/quill.snow.css'
// import { Button, Input, Select } from 'iview'

// Vue.use(Vuex)
// vue.use(VueQuillEditor);

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
