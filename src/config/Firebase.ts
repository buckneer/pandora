// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Nv5Y8kTpUcXP0q4TCbuikMtDkcqacWU",
  authDomain: "pandora-ad7a2.firebaseapp.com",
  projectId: "pandora-ad7a2",
  storageBucket: "pandora-ad7a2.firebasestorage.app",
  messagingSenderId: "560108203345",
  appId: "1:560108203345:web:a915d0c51d76a134ec3770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default {db};