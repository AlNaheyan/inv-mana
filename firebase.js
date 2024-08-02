// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuRmiuaoAeeLzu6-pVh1k_zTFRNqXc3kg",
  authDomain: "inventory-management-53cde.firebaseapp.com",
  projectId: "inventory-management-53cde",
  storageBucket: "inventory-management-53cde.appspot.com",
  messagingSenderId: "384027611191",
  appId: "1:384027611191:web:f73d1fd098ac05439fafb2",
  measurementId: "G-LFGJXMX583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}