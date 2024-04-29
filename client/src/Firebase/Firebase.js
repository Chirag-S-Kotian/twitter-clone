import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiojMSRlcTNI30qf13lMWu4PblMtP-lrg",
  authDomain: "twitter-clone-99a0b.firebaseapp.com",
  projectId: "twitter-clone-99a0b",
  storageBucket: "twitter-clone-99a0b.appspot.com",
  messagingSenderId: "1085811518860",
  appId: "1:1085811518860:web:b9a44d76296e431dfabaa9",
  measurementId: "G-965R1DH59Y",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

export default db;
