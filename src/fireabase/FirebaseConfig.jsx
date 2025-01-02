import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Firebase configuration object containing credentials and project details
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "chandra-text-ecommerce.firebaseapp.com",
  projectId: "chandra-text-ecommerce",
  storageBucket: "chandra-text-ecommerce.appspot.com",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase with the provided configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

