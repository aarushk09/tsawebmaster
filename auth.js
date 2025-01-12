// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

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

// Function to switch between login and signup forms
function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("signup-form").classList.add("hidden");
}

function showSignup() {
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
}

// Handle user signup
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Create rewards document for the new user
        await setDoc(doc(firestore, "rewards", user.uid), {
            points: 0,
            rewards: []
        });
        showLogin();
    } catch (error) {
        console.error("Error signing up:", error);
    }
});

// Handle user login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error logging in:", error);
    }
});

// Listen for auth state changes
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, fetch rewards
        const rewardsDoc = await getDoc(doc(firestore, "rewards", user.uid));
        if (rewardsDoc.exists()) {
            const rewardsData = rewardsDoc.data();
            // Example: Store rewards data or update UI as needed
            console.log("User rewards:", rewardsData);
        } else {
            // Create rewards document if it doesn't exist
            await setDoc(doc(firestore, "rewards", user.uid), {
                points: 0,
                rewards: []
            });
        }
    } else {
        // User is signed out
        console.log("User signed out");
    }
});