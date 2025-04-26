// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCX2PTI-cPgdE20z7hDnYIsQcZfhPSLExE',
  authDomain: 'furiagg-chat.firebaseapp.com',
  projectId: 'furiagg-chat',
  storageBucket: 'furiagg-chat.firebasestorage.app',
  messagingSenderId: '1040416718603',
  appId: '1:1040416718603:web:0adbe65a1ed3c30b472c0e',
  measurementId: 'G-1R4JYQY4JV',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
