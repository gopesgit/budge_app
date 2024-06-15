// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfpEWI_N_4Z2gZHWbogBeySXyVHJaoDqg",
  authDomain: "budge-app-gopes.firebaseapp.com",
  projectId: "budge-app-gopes",
  storageBucket: "budge-app-gopes.appspot.com",
  messagingSenderId: "705697889970",
  appId: "1:705697889970:web:58ea1920787ed0fc8d13ab",
  measurementId: "G-WTTXBZV902"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseapp);