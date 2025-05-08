    import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthCotext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
    
    const Login = () => {

        const {LoginUser,setLoading}= use(AuthContext)
        const [email, setEmail] =useState('')
        const [showPassword , setShowPassword] = useState(false)
        const navigate = useNavigate();
        const location = useLocation()
        const handleLogin =e =>{
        e.preventDefault()


            const email = e.target.email.value;
            const password = e.target.password.value;

            // console.log(email,password)

            LoginUser(email,password)
            .then(result => {
                // console.log(result)
                navigate(location.state || '/')
                toast.success("log In successFully")
                setLoading(true)
            })
            .catch(error =>{
                console.log(error)
                toast.error("wrong Password")
            })

        }


        return (
            <div className="w-full max-w-6xl  mx-auto  space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 flex flex-col lg:flex-row md:flex-row justify-between">
         <div className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full md:w-1/2 mb-0 rounded-lg p-3 flex justify-center  items-center flex-col space-y-6'>
          <GoogleAuth></GoogleAuth>
          </div>
         
          <div className='border border-gray-200 shadow-lg m-4 md:m-10 p-6 md:p-10'>
          <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6 px-10">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                    <input onChange={(e) => setEmail(e.target.va)}  type="email" name="email" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-lg" />
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md shadow-lg border border-gray-200" />

                <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 top-10 '>
                    {showPassword ? <IoIosEye size={20} /> : <IoIosEyeOff size={20}/>}
                </span>


                    <div  className="flex justify-end text-xs dark:text-gray-600">
                        <Link to={`/forgot-password?email=${encodeURIComponent(email)}`} className='underline'>Forgot Password?</Link>
                    </div>
                </div>
                <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600 py-6">Don't have an account?
                <Link to='/auth/register' className="underline dark:text-gray-800">Sign up</Link>
            </p>
            
          </div>
          
        </div>
        );
    };
    
    export default Login;