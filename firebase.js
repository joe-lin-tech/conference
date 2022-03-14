// import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./config";

export const app = firebase.initializeApp(firebaseConfig);