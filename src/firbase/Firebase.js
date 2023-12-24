// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtvqp2fA3IPzRplGvKH05epV3tMMqEs5s",
  authDomain: "full-stackk.firebaseapp.com",
  projectId: "full-stackk",
  storageBucket: "full-stackk.appspot.com",
  messagingSenderId: "1029389456047",
  appId: "1:1029389456047:web:7286616ff51da814d2fa5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);