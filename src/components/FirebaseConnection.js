// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function FirebaseConnection() {

  const firebaseConfig = {
    apiKey: "AIzaSyDnplGbG8yLk7P09MKcF4X-0GiLO62ZsVI",
    authDomain: "jewelry-app-f122c.firebaseapp.com",
    databaseURL: "https://jewelry-app-f122c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jewelry-app-f122c",
    storageBucket: "jewelry-app-f122c.appspot.com",
    messagingSenderId: "344080860581",
    appId: "1:344080860581:web:c4c2fb8de88cf6ccf0544c",
    measurementId: "G-1RC24EBJZ2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return getDatabase(app);

}