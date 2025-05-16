import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4e2CGWhxWFR21NOdRrNp8kHWybo8G4mo",
  authDomain: "ec-shop-2f981.firebaseapp.com",
  projectId: "ec-shop-2f981",
  storageBucket: "ec-shop-2f981.firebasestorage.app",
  messagingSenderId: "506713076516",
  appId: "1:506713076516:web:27b432f54e3842e36a79b1",
  measurementId: "G-GW3K0FXZM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };