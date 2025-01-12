import { auth, firestore } from "./firestore.js"

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
    const fullName = document.getElementById("signup-name").value; // Add a fullname field in your form

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log(user);

        // Add user details to Firestore
        await setDoc(doc(firestore, "users", user.uid), {
            fullName: fullName,
            email: email,
            createdAt: new Date().toISOString()
        });

        alert("User signed up successfully!");
        showLogin(); // Redirect to login form
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        // Add your redirect or post-login logic here
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});