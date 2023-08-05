// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm249IrjtoxfJ-2eKRJ9g2F6Rmcbir4ok",
  authDomain: "apple-f4be1.firebaseapp.com",
  projectId: "apple-f4be1",
  storageBucket: "apple-f4be1.appspot.com",
  messagingSenderId: "448413324180",
  appId: "1:448413324180:web:49aa9f2cfcf843c8cdb581",
  measurementId: "G-5K7BVZREXS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);