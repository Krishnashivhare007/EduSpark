
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "eduspark-79ece.firebaseapp.com",
  projectId: "eduspark-79ece",
  storageBucket: "eduspark-79ece.firebasestorage.app",
  messagingSenderId: "102384090186",
  appId: "1:102384090186:web:104e402a0a191ce260fab3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}