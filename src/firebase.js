// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubHBmLesRuYEKIfXTsoBKlAbFXz7wEZ8",
  authDomain: "proyecto-final-iparry.firebaseapp.com",
  projectId: "proyecto-final-iparry",
  storageBucket: "proyecto-final-iparry.firebasestorage.app",
  messagingSenderId: "543511611524",
  appId: "1:543511611524:web:78fab965b4f2033e2d5ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);