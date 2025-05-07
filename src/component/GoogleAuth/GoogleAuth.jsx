import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../provider/AuthCotext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const GoogleAuth = () => {
    const {googleUser,setUser,githubUser} =use(AuthContext)
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () =>{

        googleUser(provider)
        .then((result) =>{
            toast.success("google log in success")
            setUser(result.user.photoURL)
        })
        .catch(() =>{
            toast.error("pla")
        })
    }


    const handleGithub = () =>{

        githubUser(githubProvider)
        .then((result) =>{

            const loginUser = result.user;
        
            if(!loginUser.email && loginUser?.providerData?.length){
                if(loginUser.providerData[0].email){
                    loginUser.email = loginUser.providerData[0].email;
                        setUser(loginUser)
                        console.log(loginUser)
                }
            }

        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <div className='space-y-6'>
              <h1 className='text-center  flex justify-center  items-center text-3xl font-bold text-white'>Welcome Back</h1>
            <p className='text-white'>Sign in to your account to manage your subscriptions and profile.</p>
                <div className='flex flex-col gap-3'>
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <FcGoogle size={25} />
                Login with Google
                </button>
                <button onClick={handleGithub} className="btn bg-white text-black border-[#e5e5e5]">
                <FaGithub size={25} />
                Login with GitHub
                </button>
                </div>
        </div>
    );
};

export default GoogleAuth;