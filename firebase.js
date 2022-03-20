import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


export const app = typeof window !== 'undefined' && initializeApp(firebaseConfig);
export const auth = app && getAuth(app);
export const firestore = app && getFirestore(app);