// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSZv5OgREEQGFWrUedZ6lL4CRj6up3Glc",
  authDomain: "moment-event-management.firebaseapp.com",
  projectId: "moment-event-management",
  storageBucket: "moment-event-management.appspot.com",
  messagingSenderId: "1078097428921",
  appId: "1:1078097428921:web:e3cf857619a5f1f814f668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;