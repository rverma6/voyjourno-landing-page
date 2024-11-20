// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwqBsugsvpUib1-xeIyED8W46yZUHatVo",
  authDomain: "voyjourno-2f5f6.firebaseapp.com",
  projectId: "voyjourno-2f5f6",
  storageBucket: "voyjourno-2f5f6.firebasestorage.app",
  messagingSenderId: "694347066517",
  appId: "1:694347066517:web:b1211d03731b18d564ff9c",
  measurementId: "G-R1ZRTPKPH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);