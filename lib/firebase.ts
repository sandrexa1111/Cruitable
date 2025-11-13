import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDeJ7lcQPpscyqz334JZ9cDSyOWKM-4qWc",
  authDomain: "cruitable-mvp.firebaseapp.com",
  projectId: "cruitable-mvp",
  storageBucket: "cruitable-mvp.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
