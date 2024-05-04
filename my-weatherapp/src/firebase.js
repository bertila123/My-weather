
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyA7XE4kDifQnHQNAdlsunNg5hiGx9LDe9o",
  authDomain: "weather-app-2-a8bf7.firebaseapp.com",
  projectId: "weather-app-2-a8bf7",
  storageBucket: "weather-app-2-a8bf7.appspot.com",
  messagingSenderId: "577447497759",
  appId: "1:577447497759:web:846debbf405553ac39c52a",
  measurementId: "G-6KFRFP6FV7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);
