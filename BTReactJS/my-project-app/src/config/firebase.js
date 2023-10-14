import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0KWRtSBtwF3J-BFJ-xbXoAglfixme4z8",
  authDomain: "final-project-t3h.firebaseapp.com",
  projectId: "final-project-t3h",
  storageBucket: "final-project-t3h.appspot.com",
  messagingSenderId: "415572067733",
  appId: "1:415572067733:web:1ef7030efe03666e03a29c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)