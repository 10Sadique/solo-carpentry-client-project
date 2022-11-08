import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from '@firebase/auth';
import React from 'react';
import { useEffect, useState, createContext } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        });
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        setLoading,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
