// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config (Get this from Firebase Console > Project Settings)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add email to Firestore
export const subscribeToMailingList = async (email) => {
  try {
    await addDoc(collection(db, "subscribers"), { email });
    return "Success! You're subscribed.";
  } catch (error) {
    console.error("Error subscribing:", error);
    return "Subscription failed. Try again.";
  }
};

export default db;
