// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 1. FIRESTORE IMPORT KIYA

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoVJ5M02XI9zzZkpvjV3pfFmP4szfVR0s",
  authDomain: "digisaloon-2599a.firebaseapp.com",
  projectId: "digisaloon-2599a",
  storageBucket: "digisaloon-2599a.firebasestorage.app",
  messagingSenderId: "723898149136",
  appId: "1:723898149136:web:a337fa48b67d59c15c1d95",
  measurementId: "G-0CB89TLTKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. FIRESTORE KO INITIALIZE KARKE EXPORT KIYA
export const db = getFirestore(app);