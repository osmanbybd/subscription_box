import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';

const AuthLogin = () => {








    
    return (
        <div>
            <div className='border p-2 border-gray-200 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg mb-4'>
            <Navbar></Navbar>
            </div>
            <div className='bg-gray-200 min-h-[92vh] py-5 lg:py-9 px-4 lg:px6  '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLogin;