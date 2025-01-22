// firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADNT-_pUReK1Dp4NF9kp1zKkBcHdmbZ5I",
    authDomain: "portfolio-9c96b.firebaseapp.com",
    projectId: "portfolio-9c96b",
    storageBucket: "portfolio-9c96b.firebasestorage.app",
    messagingSenderId: "993608305109",
    appId: "1:993608305109:web:ba857de62f86916fb0d55c",
    measurementId: "G-KJW40ZWQBN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
