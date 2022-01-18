import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
import {
  initializeApp
} from "firebase/app";


//global, plugins, utils
import global from './global'
const firebaseConfig = {
  apiKey: "AIzaSyAMSe85eseyaWZF_jXPcA87jYiKmyJcRVo",

  authDomain: "toplyvo-f59c0.firebaseapp.com",

  projectId: "toplyvo-f59c0",

  storageBucket: "toplyvo-f59c0.appspot.com",

  messagingSenderId: "1040199139491",

  appId: "1:1040199139491:web:f6c9bed92ecf3d35c97f16"


};

const app = createApp(App).use(router).use(store).use(initializeApp(firebaseConfig))
global(app)

app.mount('#app')