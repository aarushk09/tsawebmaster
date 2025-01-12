import { auth, firestore } from "./firestore.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Function to fetch and display rewards
async function displayRewards() {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const points = userData.points || 0;
            document.getElementById('points').innerText = points > 100 ? '100' : points;

            // Update progress bar
            const progressFill = document.getElementById('progress-fill');
            const progressPercentage = points > 100 ? 100 : (points / 100) * 100;
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
            document.getElementById('points').innerText = '0';

            // Reset progress bar
            document.getElementById('progress-fill').style.width = '0%';
            document.getElementById('goal-message').style.display = 'none';
        }
    } else {
        document.getElementById('points').innerText = '0';

        // Reset progress bar
        document.getElementById('progress-fill').style.width = '0%';
        document.getElementById('goal-message').style.display = 'none';
    }
}

// Function to update points based on orders
async function updatePoints() {
    const user = auth.currentUser;
    if (user) {
        const ordersRef = collection(firestore, "orders");
        const q = query(ordersRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        let totalSpent = 0;
        querySnapshot.forEach((doc) => {
            const order = doc.data();
            totalSpent += order.total || 0;
        });

        const points = totalSpent; // 1 point per dollar spent

        const userDocRef = doc(firestore, "users", user.uid);
        await setDoc(userDocRef, { points: points }, { merge: true });

        displayRewards();
    }
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        updatePoints();
    } else {
        displayRewards();
    }
});