import React from "react";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
  Auth,
  User,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

export async function login({
  auth,
  email,
  password,
}: {
  auth: Auth;
  email: string;
  password: string;
}): Promise<{ resp?: any; error?: any } | void> {
  console.log("auth---", auth, "emaikl---", email, "pass---", password);

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("userCredential----", userCredential);

      return { resp: userCredential.user, error: null };
    })
    .catch((error) => {});
}

export function googleSignIn(auth: any) {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
}

export function FacebookSignIn(auth: any) {
  const faceookAuthProvider = new FacebookAuthProvider();
  return signInWithPopup(auth, faceookAuthProvider);
}
