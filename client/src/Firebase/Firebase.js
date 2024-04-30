import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn4pJvloMWfI4BJY68CW2ldme-8U8R740",
  authDomain: "twitter-clone-bd31e.firebaseapp.com",
  projectId: "twitter-clone-bd31e",
  storageBucket: "twitter-clone-bd31e.appspot.com",
  messagingSenderId: "117272968738",
  appId: "1:117272968738:web:8e1f97a3157aa54c81d47b",
  measurementId: "G-32G8EZ1N12",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

export default db;
