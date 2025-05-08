import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthCotext';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';


const Register = () => {

    const {createUser,setUser,updateUser} =use(AuthContext)
     const navigate = useNavigate()     
     const [showPassword, setShowPassword] =useState(false)
    

        const handleRegister = (e) =>{
            e.preventDefault()
            const name = e.target.name.value;
            const photo = e.target.photo.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            

            // console.log(name, photo,email, password)


                const regaxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
                if(!regaxPassword.test(password)){
                    alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character")
                    return
                }
                if(name.length < 5){
                    alert("name more  than 5 ceracters")
                    return
                }



            createUser(email,password)
            .then(result => {
                
                const user = result.user
                updateUser({displayName: name, photoURL:photo})
                .then(()=>{
                    setUser({...user, displayName: name, photoURL:photo})
                    navigate('/')
                    toast.success("registration is successFully")


                })
                .catch(error =>{
                    console.log(error)
                    setUser(user)
                }) 

            })
            .catch(error => {
                console.log(error)
            })


        }



    return (
        <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">

    {/*NAME  */}
        <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                <input  type="text" name="name" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-lg" />
            </div>
        {/* photo url */}
        <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Photo Url</label>
                <input  type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-lg" />
            </div>
                {/* email */}
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                <input  type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-lg" />
            </div>
            {/* password */}
            <div className="space-y-1 text-sm relative">
                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                <input type={showPassword ? "text" : "password" } name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-lg" />
                <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 top-10 '>
                                   {showPassword ? <IoIosEye size={20} /> : <IoIosEyeOff size={20}/>}
                               </span>
            </div>
            <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign Up</button>
        </form>
   
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
            <Link to='/auth/login' className="underline dark:text-gray-800">Sign in</Link>
        </p>
    </div>
    );
};

export default Register;