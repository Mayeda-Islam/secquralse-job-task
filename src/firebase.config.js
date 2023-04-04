// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApXMH0URfX71JTv4MjHQJOTJVCqPBYH_8",
  authDomain: "secquralse-job-task.firebaseapp.com",
  projectId: "secquralse-job-task",
  storageBucket: "secquralse-job-task.appspot.com",
  messagingSenderId: "711732962594",
  appId: "1:711732962594:web:3c9cfeb17721dfb985717b",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const db = getDatabase();
