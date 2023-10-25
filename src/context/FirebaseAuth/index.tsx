import React from "react";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkaHN0dHetQTBKUBu2todRLszbCimgCJ0",
  authDomain: "sbottpractice.firebaseapp.com",
  projectId: "sbottpractice",
  storageBucket: "sbottpractice.appspot.com",
  messagingSenderId: "232741341393",
  appId: "1:232741341393:web:fb98eac2900f4dc10d9df0",
  measurementId: "G-GRLT82BQYC",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };
