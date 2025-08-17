// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import {getFirestore, collection,getDocs,getDoc} from 'firebase/firestore';

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyANlPjtq5aPKoYrgif01KmSUvfJwcsxKrY",
  authDomain: "my-firebase-login-13d8f.firebaseapp.com",
  projectId: "my-firebase-login-13d8f",
  storageBucket: "my-firebase-login-13d8f.appspot.com",
  messagingSenderId: "784024431731",
  appId: "1:784024431731:web:858767b51eac4e0626ce06",
  measurementId: "G-X4RM2YR06T"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
