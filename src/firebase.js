// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM0KHLWVzVtHbx36JM4fdeZf3vTxmPPw0",
  authDomain: "redux-testing-874f6.firebaseapp.com",
  projectId: "redux-testing-874f6",
  storageBucket: "redux-testing-874f6.firebasestorage.app",
  messagingSenderId: "158640481827",
  appId: "1:158640481827:web:579c170f02081b4940b396",
  measurementId: "G-LXMY06P0J3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
