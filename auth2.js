import { auth, firestore } from "./firestore.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

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
document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const fullName = document.getElementById("signup-name").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add user details to Firestore with points initialized to 0
        await setDoc(doc(firestore, "users", user.uid), {
            fullName: fullName,
            email: email,
            createdAt: new Date().toISOString(),
            points: 0 // Initialize points
        });

        showLogin();
        alert("Signup successful! Please log in.");
    } catch (error) {
        console.error("Error signing up:", error);
        alert("Signup failed: " + error.message);
    }
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to rewards page after successful login
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error logging in:", error);
        alert("Login failed: " + error.message);
    }
});

// Listen for Auth State Changes (Optional: for maintaining UI state)
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user.uid);
        // Optionally, redirect to rewards page if already logged in
        if (window.location.pathname.endsWith("login.html")) {
            window.location.href = "rewards.html";
        }
    } else {
        console.log("No user is signed in.");
        // Optionally, stay on login/signup page
    }
});