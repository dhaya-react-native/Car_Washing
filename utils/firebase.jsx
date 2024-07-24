// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJPURyc8No2A29cFNSkBnoSMei4j6Zss",
  authDomain: "car-washing-16054.firebaseapp.com",
  databaseURL: "https://car-washing-16054-default-rtdb.firebaseio.com",
  projectId: "car-washing-16054",
  storageBucket: "car-washing-16054.appspot.com",
  messagingSenderId: "1049549990456",
  appId: "1:1049549990456:web:e5051974112f05c80594cd",
  measurementId: "G-HH7L3EXM1Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
