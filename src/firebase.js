// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8jDzhMdL_0xGlapwVUsuY4vw5RyQNjfQ",
  authDomain: "dhanasekar-1d7e9.firebaseapp.com",
  projectId: "dhanasekar-1d7e9",
  storageBucket: "dhanasekar-1d7e9.firebasestorage.app",
  messagingSenderId: "74055236077",
  appId: "1:74055236077:web:e6c2f3eb412b6343920fe4",
  measurementId: "G-TTFSXWXY53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db};