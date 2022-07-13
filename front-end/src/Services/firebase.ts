import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCuDGejiaJ9_2iKpBd0P2GnWKoGuMBu0Mo",
  authDomain: "jogodavelhagroisa.firebaseapp.com",
  projectId: "jogodavelhagroisa",
  storageBucket: "jogodavelhagroisa.appspot.com",
  messagingSenderId: "97256024363",
  appId: "1:97256024363:web:c15d3bc81726437509bd6e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();