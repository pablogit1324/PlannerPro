// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWlEKJbmbm204DYiry_vvZhb9qV-_ewZE",
    authDomain: "plannerpro-ec5b5.firebaseapp.com",
    projectId: "plannerpro-ec5b5",
    storageBucket: "plannerpro-ec5b5.appspot.com",
    messagingSenderId: "175295344396",
    appId: "1:175295344396:web:9666e11a897d077a64a329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

