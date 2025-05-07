import React, { use, useState } from 'react';
import { AuthContext } from '../component/provider/AuthCotext';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';

const ForgotPassword = () => {

    const {restPassword} =use(AuthContext)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const defaultEmail = queryParams.get("email" )|| "";
    
    const [email , setEmail] = useState(defaultEmail)
    
    
    const handleReset = e =>{
        e.preventDefault()
        
        
     if(!email){
        toast.error("please enter your email")
        return
     }


        restPassword(email)
        .then(()=>{
            toast.success("please reset email")
            setTimeout(() => {
                window.location.href = "https://mail.google.com";
            }, 2000)


        })
        .catch(error =>{
            toast.error("Failed to send rest email")
        })
    }

    return (
        <div className="flex flex-col max-w-md container shadow-lg  mx-auto p-8 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Forgot  Password</h1>
		
	</div>
	<form onSubmit={handleReset} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
		
		</div>
	</form>
</div>
    );
};

export default ForgotPassword;