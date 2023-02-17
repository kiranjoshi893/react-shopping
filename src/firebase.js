// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvFL-renKBCmnWm3GfsiSNFpKI2u3eAg0",
  authDomain: "react-test-ffdd9.firebaseapp.com",
  projectId: "react-test-ffdd9",
  storageBucket: "react-test-ffdd9.appspot.com",
  messagingSenderId: "923692639560",
  appId: "1:923692639560:web:0ae0409d35da9b29de3f7d",
  measurementId: "G-XBR0BDYCNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app)

export {app, auth, db}