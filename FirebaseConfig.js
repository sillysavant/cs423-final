import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6EZIZucBUeu-2oilH1Fp7zGTWCuTGPjo",
  authDomain: "workit-907b9.firebaseapp.com",
  projectId: "workit-907b9",
  storageBucket: "workit-907b9.appspot.com",
  messagingSenderId: "419405320954",
  appId: "1:419405320954:web:e2ab9713572e5a32c02f43",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FILESTORE_DB = getFirestore(FIREBASE_APP);
