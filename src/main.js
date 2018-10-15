import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
    apiKey: "AIzaSyDfhxlFAnMRtuP0RxH-JNerO8H5Ul_zvZQ",
    authDomain: "vue-firebase-b51f4.firebaseapp.com",
    databaseURL: "https://vue-firebase-b51f4.firebaseio.com",
    projectId: "vue-firebase-b51f4",
    storageBucket: "vue-firebase-b51f4.appspot.com",
    messagingSenderId: "558287142031"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
      app = new Vue({
          render: h => h(App),
          router
      }).$mount('#app')
  }
});


