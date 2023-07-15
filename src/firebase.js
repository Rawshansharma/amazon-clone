// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyCW97VigMIFpfWwr-wH3yXXof0hRH2cqJc",
  authDomain: "clone-97750.firebaseapp.com",
  projectId: "clone-97750",
  storageBucket: "clone-97750.appspot.com",
  messagingSenderId: "112749921519",
  appId: "1:112749921519:web:9d54f113fc0a4557cf871a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export  {app,auth};