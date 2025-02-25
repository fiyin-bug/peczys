// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config (Get this from Firebase Console > Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyA7YKM28qsr0GKcs3mgGoa5_DLd16HNxos",
  authDomain: "pecz-9e6bb.firebaseapp.com",
  projectId: "pecz-9e6bb",
  storageBucket: "pecz-9e6bb.firebasestorage.app",
  messagingSenderId: "613104678652",
  appId: "1:613104678652:web:9a3de7b19ab37d56c1c979",
  measurementId: "G-TZHE618S5X"
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

export default Firebase;
