import { auth, firestore } from "./firestore.js";
import { 
    doc, 
    getDoc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

/**
 * Displays the user's current points and updates the progress bar.
 */
async function displayRewards() {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const points = Math.min(Math.floor(userData.points || 0), 100); // Cap points at 100
            document.getElementById('points').innerText = `${points}/100`;

            // Update progress bar
            const progressFill = document.getElementById('progress-fill');
            const progressPercentage = (points / 100) * 100;
            progressFill.style.width = `${progressPercentage}%`;

            // Show goal message if points >= 100
            const goalMessage = document.getElementById('goal-message');
            if (points >= 100) {
                goalMessage.style.display = 'block';
            } else {
                goalMessage.style.display = 'none';
            }
        } else {
            console.error("No such user document!");
            document.getElementById('points').innerText = '0/100';
            resetProgressBar();
        }
    } else {
        document.getElementById('points').innerText = '0/100';
        resetProgressBar();
    }
}

/**
 * Resets the progress bar and hides the goal message.
 */
function resetProgressBar() {
    document.getElementById('progress-fill').style.width = '0%';
    document.getElementById('goal-message').style.display = 'none';
}

/**
 * Updates the user's points based on the cart total from localStorage.
 */
async function updatePoints() {
    const user = auth.currentUser;
    if (user) {
        try {
            // Retrieve cart total from local storage
            const cartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;
            const points = Math.min(Math.floor(cartTotal), 100); // 1 point per dollar spent, cap at 100

            const userDocRef = doc(firestore, "users", user.uid);
            await setDoc(userDocRef, { points: points }, { merge: true });

            displayRewards();
        } catch (error) {
            console.error("Error updating points:", error);
        }
    }
}

/**
 * Initializes the rewards display based on authentication state.
 */
function initializeRewards() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            updatePoints();
        } else {
            displayRewards();
        }
    });
}

// Initialize the rewards system when the script loads
initializeRewards();
