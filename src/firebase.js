import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCANp_fcLGh3a9_BzBqVIRNIXQNnogc2kM",
  authDomain: "chat-dbd29.firebaseapp.com",
  projectId: "chat-dbd29",
  storageBucket: "chat-dbd29.appspot.com",
  messagingSenderId: "672991292829",
  appId: "1:672991292829:web:178e946a1f78232ecd9374"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
