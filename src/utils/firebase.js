// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAibp_IIcbOKn1HHw0REFH7E5HCVwvexTo",
  authDomain: "clone-2560d.firebaseapp.com",
  projectId: "clone-2560d",
  storageBucket: "clone-2560d.appspot.com",
  messagingSenderId: "67980560830",
  appId: "1:67980560830:web:af3c52355753bfd09e51ef",
  measurementId: "G-XML4M6GCC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);