import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA7rRr19uh6G5m8xBNxBQ1IDYg2pM8pq7w",
    authDomain: "twitter-clone-fe220.firebaseapp.com",
    projectId: "twitter-clone-fe220",
    storageBucket: "twitter-clone-fe220.appspot.com",
    messagingSenderId: "997754770596",
    appId: "1:997754770596:web:0bfb6b5a2d0d0602250231"
  };


  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();
  
  export default app;
  export { db, storage };