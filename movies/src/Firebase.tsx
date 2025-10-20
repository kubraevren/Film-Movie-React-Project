import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkoe-AQcaV6q8Iw8f6-0kK8giYLf5LA4g",
    authDomain: "firabase-reactt.firebaseapp.com",
    projectId: "firabase-reactt",
    storageBucket: "firabase-reactt.firebasestorage.app",
    messagingSenderId: "914285538907",
    appId: "1:914285538907:web:11d1e25be38852e207997e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
