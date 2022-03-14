// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { firebaseConfig } from "./config";


// export const app = initializeApp(firebaseConfig);

let instance

export function getFirebase() {
    if (typeof window !== 'undefined') {
        if (instance) return instance;
        // instance = initializeApp(firebaseConfig);
        instance = firebase.initializeApp(firebaseConfig);
        return instance;
    }
    return null;
}