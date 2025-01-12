// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHouvpD3AU0DC3rB0WCNkaKYG1iZeqAwA",
    authDomain: "webmaster-5b278.firebaseapp.com",
    projectId: "webmaster-5b278",
    storageBucket: "webmaster-5b278.firebasestorage.app",
    messagingSenderId: "852794630816",
    appId: "1:852794630816:web:fda9cee57c024dd70b1fc5",
    measurementId: "G-FLM3H1KC32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export Firebase services for reuse
export { app, auth, firestore };