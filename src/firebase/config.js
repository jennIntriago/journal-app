// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE9Q1M_N8bMp2P2BPr0tsbJfpklZM_poo",
  authDomain: "journal-app-ee5af.firebaseapp.com",
  projectId: "journal-app-ee5af",
  storageBucket: "journal-app-ee5af.appspot.com",
  messagingSenderId: "49906112008",
  appId: "1:49906112008:web:4e791368e88a8c03cf23bd",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//para la autenticacion
export const FirebaseAuth = getAuth(FirebaseApp);
//para la base de datos
export const FirebaseDB = getFirestore(FirebaseApp);
