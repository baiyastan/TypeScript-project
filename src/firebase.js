// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8KWERuvYUm90wj7-GxxWaURfLVK2V8Ac",
  authDomain: "user-okurmen-8f075.firebaseapp.com",
  projectId: "user-okurmen-8f075",
  storageBucket: "user-okurmen-8f075.appspot.com",
  messagingSenderId: "560247897917",
  appId: "1:560247897917:web:09515ec53438c465bd8f54",
  measurementId: "G-K80KYTG74P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
