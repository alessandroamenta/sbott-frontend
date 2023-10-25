import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  Auth,
  UserCredential,
} from "firebase/auth";
import { auth } from "../FirebaseAuth/index";
import axios from "axios";

export type AuthContext = {
  authState: {
    isAuthenticated: boolean;
    auth: Auth;
  };
  setAuth: Dispatch<SetStateAction<{ isAuthenticated: boolean; auth: Auth }>>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  googleSignIn: (auth: Auth) => Promise<UserCredential>;
};

export const AuthContext = createContext<AuthContext>({
  authState: {
    isAuthenticated: false,
    auth: getAuth(),
  },
  setAuth: () => undefined,
  signIn: (email: string, password: string) =>
    Promise.resolve({} as UserCredential),
  googleSignIn: () => Promise.resolve({} as UserCredential),
});

export const useAuthContext = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<{
    isAuthenticated: boolean;
    auth: Auth;
  }>({
    isAuthenticated: false,
    auth: getAuth(),
  });

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (auth: Auth): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
      setAuthState(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ authState, setAuth: setAuthState, signIn, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
