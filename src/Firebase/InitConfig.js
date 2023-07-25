// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAskXOV-t9tPjXfddCdf4xPoG_sVA9pNSs",
  authDomain: "newprojectreact-f6751.firebaseapp.com",
  projectId: "newprojectreact-f6751",
  storageBucket: "newprojectreact-f6751.appspot.com",
  messagingSenderId: "913809740688",
  appId: "1:913809740688:web:4247f10f96532612625915",
  measurementId: "G-WN6VSD29GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);