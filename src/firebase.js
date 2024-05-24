// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPVPh3SjoMcgqUx7_8Q5eaN4yom6wsmQA",
  authDomain: "hitech-4c66d.firebaseapp.com",
  projectId: "hitech-4c66d",
  storageBucket: "hitech-4c66d.appspot.com",
  messagingSenderId: "1071647427647",
  appId: "1:1071647427647:web:9e0a69f528074b35b3bc8a",
  measurementId: "G-W3WM7F842N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
