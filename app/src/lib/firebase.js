// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEPS2MB-I7fo6LpbrBwFJAmSpd1_16pUQ",
  authDomain: "x-calibur-90.firebaseapp.com",
  projectId: "x-calibur-90",
  storageBucket: "x-calibur-90.appspot.com",
  messagingSenderId: "878835280347",
  appId: "1:878835280347:web:b9c60fdb697a75ac179ffe",
  measurementId: "G-J3R3H6TH6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);