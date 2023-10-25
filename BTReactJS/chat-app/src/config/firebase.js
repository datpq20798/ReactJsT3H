import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0KWRtSBtwF3J-BFJ-xbXoAglfixme4z8",
  authDomain: "final-project-t3h.firebaseapp.com",
  projectId: "final-project-t3h",
  storageBucket: "final-project-t3h.appspot.com",
  messagingSenderId: "415572067733",
  appId: "1:415572067733:web:95e696fe9532346603a29c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
