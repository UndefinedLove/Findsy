
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDfn1S2ug2m7hr8zibxvL1-b6L00Uww8",
  authDomain: "connectme-ef686.firebaseapp.com",
  projectId: "connectme-ef686",
  storageBucket: "connectme-ef686.appspot.com",
  messagingSenderId: "445448790361",
  appId: "1:445448790361:web:2b6c187205f5af90eeec48",
  measurementId: "G-H8NPJ81C1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 const auth = getAuth(app);
 const imgDB = getStorage(app);
 const db = getFirestore(app);

export {auth, imgDB, db, app};