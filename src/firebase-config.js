// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Импортируем GoogleAuthProvider
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAl_FF0crMciDgFz2GbxfmdckwVLh6bsc",
  authDomain: "chat-37895.firebaseapp.com",
  projectId: "chat-37895",
  storageBucket: "chat-37895.firebasestorage.app",
  messagingSenderId: "261724549728",
  appId: "1:261724549728:web:ae97d01868076dbbf7c905",
  measurementId: "G-JEPVGQMVZ5"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const serverTimestampFn = serverTimestamp;
export { provider }; 