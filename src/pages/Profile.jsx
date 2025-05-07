import React, { use, useState } from 'react';
import { AuthContext } from '../component/provider/AuthCotext';

const Profile = () => {

    const {user,updateUser,setUser} = use(AuthContext)
    const [showForm , setShowForm] =useState(false)
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdate = e=>{
        e.preventDefault()


        updateUser({displayName: name , photoURL: photo})
        setUser((prev) => ({...prev, displayName:name, photoURL:photo}))
    }





    return (
        <div className='container mx-auto'>
           <div className='text-center py-5'>
           <h1 className='text-4xl font-bold'>My Account</h1>
           <p className='text-gray-600 font-semibold py-3'>Manage your profile, subscriptions, and account settings.</p>
           </div>
            <div className='bg-white shadow-xl rounded-lg flex flex-col lg:flex-row md:flex-row items-center gap-5 my-4 justify-around py-5 lg:w-6/12 mx-auto w-8/12  '>
                <div className='text-center space-y-4'>
                    <img className='w-52 h-52 rounded-full' src={user?.photoURL} alt="" />
                    <h1 className='text-xl font-bold flex flex-col'>{user?.displayName}</h1>
                    <h1 className='flex flex-col text-xl font-semibold'> {user?.email}</h1>
                    <div onClick={() => setShowForm(!showForm)}>
                        {
                            showForm ? <button className="btn btn-soft btn-error">cancel</button> :<button className="btn btn-accent">Update Profile</button>
                        }
                    </div>

                </div>
                <div className='space-y-6'>
                    <div><h1 className='text-xl font-bold'>Account Information</h1></div>
                    <h1 className='text-xl font-bold flex flex-col'><span className='text-sm font-medium'> Full Name</span> {user?.displayName}</h1>
                    <h1 className='flex flex-col text-xl font-semibold'><span className='text-sm font-medium '>Email </span> {user?.email}</h1>
                </div>
            </div>



          {
            showForm && (
                <div>
                <div className="flex flex-col w-7/12 mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
    
        <form onSubmit={handleUpdate} noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Name</label>
                    <input 
    
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    type="text"
                     name="name"
                      id="email"
                       placeholder="name" 
                       className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Photo URL</label>
                        
                    </div>
                    <input
                    value={photo}
                    onChange={(e)=> setPhoto(e.target.value)}
                    type="text" name="photo" id="password" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                </div>
                
            </div>
        </form>
    </div>
                </div>
            )
          }
        </div>
    );
};

export default Profile;