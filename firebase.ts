import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX2iVvqkfpJoKdg30mQrQ5DqxKawXkVps",  
    authDomain: "saas-translator-chat-app-yt.firebaseapp.com",  
    projectId: "saas-translator-chat-app-yt",  
    storageBucket: "saas-translator-chat-app-yt.appspot.com", 
    messagingSenderId: "421398909196",
    appId: "1:421398909196:web:6da50e7f25265f2b0af929"  
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export {db, auth, functions}
