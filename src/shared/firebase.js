import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2_6bCNwBIddw31Ph2T0OGL59SVws85-8",
    authDomain: "image-community-c76ff.firebaseapp.com",
    projectId: "image-community-c76ff",
    storageBucket: "image-community-c76ff.appspot.com",
    messagingSenderId: "796483177222",
    appId: "1:796483177222:web:e92217c74c7c1decd9ac87",
    measurementId: "G-PK3NBYCDE7"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export {auth, apiKey};