// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "task-zenith.firebaseapp.com",
  projectId: "task-zenith",
  storageBucket: "task-zenith.appspot.com",
  messagingSenderId: "683978965801",
  appId: "1:683978965801:web:0c9c0ee8b353148b69ad38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);