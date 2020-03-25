import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Button } from 'mint-ui';

import Vuex from 'vuex'

Vue.use(Vuex)
Vue.component(Button.name, Button);


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(MintUI)


const store = new Vuex.Store({
  state: {
    count: []
  },
  mutations: {
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
