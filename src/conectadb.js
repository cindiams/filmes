import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDQ5b6fUotsQQIuXFg_ehH6D7eeJ7fCI3A",
  authDomain: "listafilmes---react.firebaseapp.com",
  projectId: "listafilmes---react",
  storageBucket: "listafilmes---react.appspot.com",
  messagingSenderId: "146994754713",
  appId: "1:146994754713:web:8423ea842d4015dc13f408"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);