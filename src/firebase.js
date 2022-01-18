import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAMSe85eseyaWZF_jXPcA87jYiKmyJcRVo",

  authDomain: "toplyvo-f59c0.firebaseapp.com",

  projectId: "toplyvo-f59c0",

  storageBucket: "toplyvo-f59c0.appspot.com",

  messagingSenderId: "1040199139491",

  appId: "1:1040199139491:web:f6c9bed92ecf3d35c97f16"


};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export default {}