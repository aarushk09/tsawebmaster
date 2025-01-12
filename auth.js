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
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Function to switch between login and signup forms
function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("signup-form").classList.add("hidden");
}

function showSignup() {
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
}

// Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Add user details to Firestore
            setDoc(doc(firestore, "users", user.uid), {
                fullName: fullName,
                email: email,
                createdAt: new Date().toISOString()
            });
            alert("User signed up successfully!");
            showLogin(); // Redirect to login form
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Login successful!");
            // Add your redirect or post-login logic here
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});