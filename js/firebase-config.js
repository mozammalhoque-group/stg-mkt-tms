// Firebase মডিউল ইমপোর্ট করা
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// .env ফাইল থেকে ডেটা নিয়ে কনফিগারেশন
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Firebase অ্যাপ ইনিশিয়ালাইজ করা
const app = initializeApp(firebaseConfig);

// অন্যান্য ফাইল থেকে ব্যবহারের জন্য export করা
export const auth = getAuth(app);
export const db = getFirestore(app);