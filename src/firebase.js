// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://bedtime-stories-3ac11-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "bedtime-stories-3ac11.appspot.com",
  messagingSenderId: "722463809114",
  appId: "1:722463809114:web:60862cf4c7a40982658263",
  measurementId: "G-44GRG36TEF"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;