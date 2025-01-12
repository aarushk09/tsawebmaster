import { auth, firestore } from "./firestore.js";
import { doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

// Function to fetch and display rewards
async function displayRewards() {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            document.getElementById('points').innerText = userData.points;
        } else {
            console.error("No such user document!");
        }
    }
}

// Function to add 50 points
async function addPoints() {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        try {
            await updateDoc(userDocRef, {
                points: increment(50)
            });
            displayRewards(); // Refresh the displayed points
        } catch (error) {
            console.error("Error adding points:", error);
            alert("Failed to add points: " + error.message);
        }
    } else {
        alert("No user is logged in.");
    }
}

// Listen for auth state changes to display rewards when user logs in
auth.onAuthStateChanged((user) => {
    if (user) {
        displayRewards();
    } else {
        document.getElementById('points').innerText = '0';
    }
});

// Expose addPoints to global scope for button onclick
window.addPoints = addPoints;