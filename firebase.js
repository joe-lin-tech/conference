import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";


export const app = typeof window !== 'undefined' && initializeApp(firebaseConfig);