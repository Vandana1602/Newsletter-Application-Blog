//import { initializeApp } from "firebase/app";

let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyCA4l6HbmyuG04dY1scCQsM2z5_gAkPlrc",
    authDomain: "blogging-website-4805d.firebaseapp.com",
    projectId: "blogging-website-4805d",
    storageBucket: "blogging-website-4805d.appspot.com",
    messagingSenderId: "979349453891",
    appId: "1:979349453891:web:2ad4332808128269fce8f6",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();