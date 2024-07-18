import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b148f.firebaseapp.com",
  projectId: "reactchat-b148f",
  storageBucket: "reactchat-b148f.appspot.com",
  messagingSenderId: "499432276535",
  appId: "1:499432276535:web:fee0b83b41819a3b26b5b2"
};

initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()