import Vue from 'vue'
import App from './App'
import Fly from './utils/config'
import Store from './store/index'
import Tip from './utils/tips'

Vue.prototype.$http = Fly
Vue.prototype.$store = Store
Vue.prototype.$tip = Tip

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
