import { auth, firestore } from "./firestore.js";
import { doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

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
            document.getElementById('points').innerText = '0';
        }
    } else {
        document.getElementById('points').innerText = '0';
    }
}

// Function to add points
async function addPoints(amount = 50) {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        try {
            await updateDoc(userDocRef, {
                points: increment(amount)
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

// Function to remove points
async function removePoints(amount = 50) {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        try {
            // Fetch current points to ensure they don't go negative
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                const currentPoints = userDoc.data().points;
                if (currentPoints >= amount) {
                    await updateDoc(userDocRef, {
                        points: increment(-amount)
                    });
                    displayRewards(); // Refresh the displayed points
                } else {
                    alert("Insufficient points to remove.");
                }
            }
        } catch (error) {
            console.error("Error removing points:", error);
            alert("Failed to remove points: " + error.message);
        }
    } else {
        alert("No user is logged in.");
    }
}

// Listen for auth state changes to display rewards when user logs in
onAuthStateChanged(auth, (user) => {
    if (user) {
        displayRewards();
    } else {
        document.getElementById('points').innerText = '0';
    }
});

// Expose functions to global scope for button onclick
window.addPoints = addPoints;
window.removePoints = removePoints;