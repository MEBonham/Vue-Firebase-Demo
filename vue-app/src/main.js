import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
  apiKey: "AIzaSyDG3NX64aItkCYr6ZBK4qGvlx_3Ke8MEe8",
  authDomain: "vue-demo-73a6f.firebaseapp.com",
  databaseURL: "https://vue-demo-73a6f.firebaseio.com",
  projectId: "vue-demo-73a6f",
  storageBucket: "vue-demo-73a6f.appspot.com",
  messagingSenderId: "843157726219",
  appId: "1:843157726219:web:47f83cb8355195c3"
})

export const db = firebase.firestore()

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>
})