// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCigsa44FEAxLhgc94SCL3eT7iK982G_SE",
  authDomain: "house-market-place-app-56ec0.firebaseapp.com",
  projectId: "house-market-place-app-56ec0",
  storageBucket: "house-market-place-app-56ec0.appspot.com",
  messagingSenderId: "141403006261",
  appId: "1:141403006261:web:097a0736624847ede8587c",
  measurementId: "G-FDH30F5QGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();