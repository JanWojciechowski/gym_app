
import { initializeApp } from "firebase/app";
import  {getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCTKj9J8c8zEcQDGyw-rf_sQbpx5ubYid0",
  authDomain: "my-gym-app-e3afe.firebaseapp.com",
  projectId: "my-gym-app-e3afe",
  storageBucket: "my-gym-app-e3afe.appspot.com",
  messagingSenderId: "855910743605",
  appId: "1:855910743605:web:06738d95d6bf3b46ec3b7c"
  };
  
  
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)