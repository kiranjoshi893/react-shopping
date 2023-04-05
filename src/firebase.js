// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useContext } from "react";
import { createContext } from "react";
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
  databaseURL:"https://react-shopping-3dab9-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext)  
export const FirebaseProvide = (props) => {
  // const signInWithEmailAndPassword = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password)
  // }
  const loginInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const putData = (key, data) => {set(ref(db, key), data)}
  return (
    <FirebaseContext.Provider value={{loginInWithEmailAndPassword, putData}}>{props.children}</FirebaseContext.Provider>
  )
}

export {app, auth, db}