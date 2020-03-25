import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(MintUI)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: [],
    count1: 0,
  },
  mutations: {
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
