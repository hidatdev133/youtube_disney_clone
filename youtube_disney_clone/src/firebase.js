import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"; // Import storage from compatibility mode

const firebaseConfig = {
    apiKey: "AIzaSyD3GmRB27Uw0u4rAHPeIH7nJoc2KJt48Nk",
    authDomain: "disneyplus-clone-5e417.firebaseapp.com",
    projectId: "disneyplus-clone-5e417",
    storageBucket: "disneyplus-clone-5e417.appspot.com",
    messagingSenderId: "531457260478",
    appId: "1:531457260478:web:27ebeceab30a884c9097ef",
    measurementId: "G-ZVD0R9CTRJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(); // Initialize storage

export { auth, provider, storage };
export default db;
