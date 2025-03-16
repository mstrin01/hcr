// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ZIXVIDINZlipZ536vHnCB9YplyqpjOg",
  authDomain: "hcr1-de7e7.firebaseapp.com",
  projectId: "hcr1-de7e7",
  storageBucket: "hcr1-de7e7.firebasestorage.app",
  messagingSenderId: "521660056183",
  appId: "1:521660056183:web:7e98c58f6a46ac390b7c72",
  measurementId: "G-673YGZXPKK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Define `auth` before exporting
const analytics = getAnalytics(app);

// Export Firebase instances
export { app, auth, analytics };
