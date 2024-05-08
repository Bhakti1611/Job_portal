// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcWoHfNWnrDuYi5Cfe57D27p4z4UlHM5A",
  authDomain: "job-portal-43d07.firebaseapp.com",
  projectId: "job-portal-43d07",
  storageBucket: "job-portal-43d07.appspot.com",
  messagingSenderId: "1014375768146",
  appId: "1:1014375768146:web:741f39fc93fdce64a37f8b",
  measurementId: "G-K0M0C8Z7ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;