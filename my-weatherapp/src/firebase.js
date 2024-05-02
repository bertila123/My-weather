
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "679edc4ad8be4de8e0a15ea088c2b3e7",
  authDomain: "weather-app-e3d6d.firebaseapp.com",
  projectId: "weather-app-e3d6d",
  storageBucket: "weather-app-e3d6d.appspot.com",
  messagingSenderId: "1067628796614",
  appId: "1:1067628796614:web:6a60d66e901866b368d5c7",
  measurementId: "G-4044F58XCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider();
