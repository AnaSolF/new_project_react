// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtkJkcq0WZRI3aZx_LzoI_qTL_6OZMDiE",
  authDomain: "mynewprojectreact.firebaseapp.com",
  projectId: "mynewprojectreact",
  storageBucket: "mynewprojectreact.appspot.com",
  messagingSenderId: "1017290438938",
  appId: "1:1017290438938:web:b4d2395f91d34ae99554a3",
  measurementId: "G-FXGMHP15P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);