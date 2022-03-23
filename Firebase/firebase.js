
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

  const firebaseConfig = {
    apiKey: "AIzaSyChJa8pQtRMD83Zy_WVJLbTwyesFc7vZw0",
    authDomain: "my-corss-gym-app.firebaseapp.com",
    projectId: "my-corss-gym-app",
    storageBucket: "my-corss-gym-app.appspot.com",
    messagingSenderId: "603871497161",
    appId: "1:603871497161:web:784d4f905ca3e9980df618"
  };
  
  
 // firebase.initializeApp(firebaseConfig);


   const app = firebase.initializeApp(firebaseConfig)
   const db = getFirestore(app);

export { db }