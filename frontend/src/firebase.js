import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2ZIXVIDINZlipZ536vHnCB9YplyqpjOg",
    authDomain: "hcr1-de7e7.firebaseapp.com",
    projectId: "hcr1-de7e7",
    storageBucket: "hcr1-de7e7.firebasestorage.app",
    messagingSenderId: "521660056183",
    appId: "1:521660056183:web:7e98c58f6a46ac390b7c72",
    measurementId: "G-673YGZXPKK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log('Firebase initialized:', app);


export { auth, db };
