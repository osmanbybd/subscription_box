import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthCotext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebae.init';

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null)
    const [loading, setLoading] = useState(false)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }          

    const LoginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    
    }


    const logOut = () =>{
        return signOut(auth)
    }


    const updateUser = (UpdateData) =>{
        return updateProfile(auth.currentUser, UpdateData)
    }

    	const restPassword = (email) =>{
            return sendPasswordResetEmail(auth,email)
        }

        const googleUser = (provider) =>{
            return signInWithPopup(auth,provider)
        }
    
        const githubUser =(githubProvider) =>{
            return signInWithPopup(auth,githubProvider)
        }


        useEffect(()=>{

            const unsubScribe = onAuthStateChanged(auth, currentUser=>{

                setUser(currentUser)
                setLoading(false)
            })

            return () =>{
                unsubScribe()
            }

        },[])


    const userInfo = {
        createUser,
        LoginUser,
        user,
        logOut,
        setUser,
        updateUser,
        restPassword,
        googleUser,
        githubUser,
        loading,
        setLoading
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;