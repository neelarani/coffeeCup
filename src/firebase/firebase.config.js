// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNQUCYMcr6R-Ayj2fj9ZhOsRjvjMK_w5U",
  authDomain: "coffeecup-4a9fe.firebaseapp.com",
  projectId: "coffeecup-4a9fe",
  storageBucket: "coffeecup-4a9fe.firebasestorage.app",
  messagingSenderId: "392928363488",
  appId: "1:392928363488:web:69e1d9e603516f0d43e185",
  measurementId: "G-YFDCYRS58Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)