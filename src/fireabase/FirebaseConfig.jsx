import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Firebase configuration object containing credentials and project details
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-uPzL8C5XPJ3BuPvJjLe-jcm4646x1As",
  authDomain: "chandra-text-ecommerce.firebaseapp.com",
  projectId: "chandra-text-ecommerce",
  storageBucket: "chandra-text-ecommerce.appspot.com",
  messagingSenderId: "150191786853",
  appId: "1:150191786853:web:c497df4f9d93bc4f13af8c"
};
// Initialize Firebase with the provided configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication services using the Firebase app instance
const fireDB = getFirestore(app);// Firestore database instance
const auth = getAuth(app);// Authentication instance
// Export Firestore database and Authentication instances for use in other parts of the application
export {fireDB, auth}