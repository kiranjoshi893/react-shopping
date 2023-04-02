// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZW6S5gluVjKNS0mTu_jRpoBtPhpZpfZI",
  authDomain: "react-shopping-3dab9.firebaseapp.com",
  projectId: "react-shopping-3dab9",
  storageBucket: "react-shopping-3dab9.appspot.com",
  messagingSenderId: "366273787037",
  appId: "1:366273787037:web:f98e5c92ae2300e0581074",
  measurementId: "G-R5QVBJDEJZ",
  databaseURL:"https://react-shopping-3dab9-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();
// const db = getFirestore(app)
// export {app, auth, db}
export {app}