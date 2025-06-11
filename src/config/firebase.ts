// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database'; // Import Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNFlEg8oQZDvosHwF3RP4-Et-8EJh0Qwo",
    authDomain: "dogdays-bb394.firebaseapp.com",
    projectId: "dogdays-bb394",
    storageBucket: "dogdays-bb394.firebasestorage.app",
    messagingSenderId: "730200299370",
    appId: "1:730200299370:web:a6eca9fd5948b0ffa6b713",
    measurementId: "G-MF2856EVXT",
    databaseURL: "https://dogdays-bb394-default-rtdb.firebaseio.com/" // Add your Realtime Database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Realtime Database and get a reference to the service
export const rtdb = getDatabase(app);

export default app;


