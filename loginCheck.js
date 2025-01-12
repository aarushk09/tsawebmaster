import { auth } from "./firestore.js";
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js';

console.log("login Checked!!!")
// Check if the user is logged in on page load
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is not logged in, redirect to the login page
    window.location.href = 'login.html';  // Redirect to login page
    console.log("No login Checked!!!")
  }
});