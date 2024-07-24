// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPkpdGnrSWj139qMOhhIz6mLJBFvXMSkM",
  authDomain: "mechanical-555c7.firebaseapp.com",
  projectId: "mechanical-555c7",
  storageBucket: "mechanical-555c7.appspot.com",
  messagingSenderId: "101647061983",
  appId: "1:101647061983:web:6edbcee2e4a6580970ea6a",
  measurementId: "G-BM23R9TEV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);