import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUWgkRyPRCKMQkj5k4VA7aEfZccHSpvQQ",
  authDomain: "devcurso-1a615.firebaseapp.com",
  projectId: "devcurso-1a615",
  storageBucket: "devcurso-1a615.firebasestorage.app",
  messagingSenderId: "1026868593747",
  appId: "1:1026868593747:web:6326e59017cf3744c1b2a6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };