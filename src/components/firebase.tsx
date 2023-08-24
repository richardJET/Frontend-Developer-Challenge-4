// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-DkDDSBcn7sD0MLPw46FU1Dle5cG0Hck",
    authDomain: "fdc2-7ec14.firebaseapp.com",
    databaseURL: "https://fdc2-7ec14-default-rtdb.firebaseio.com",
    projectId: "fdc2-7ec14",
    storageBucket: "fdc2-7ec14.appspot.com",
    messagingSenderId: "491690590558",
    appId: "1:491690590558:web:9de003a0ef85713d78cfcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
