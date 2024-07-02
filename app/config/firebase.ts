import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2tdQJBPRxtRTbE3nRBmOJ_cuqeIGCNW0",
  authDomain: "dev-jargah.firebaseapp.com",
  projectId: "dev-jargah",
  storageBucket: "dev-jargah.appspot.com",
  messagingSenderId: "861509867640",
  appId: "1:861509867640:web:f8d2182078287d28b1f58d",
  measurementId: "G-V2YYCWS7YE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
