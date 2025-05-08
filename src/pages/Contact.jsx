import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div className='container mx-auto  flex flex-col items-center'>
        <img className='w-[300px]' src="404.png" alt="" />
        <h1 className='text-3xl font-bold p-5'>404 Page Not Found</h1>
      <div className=' flex flex-col lg:flex-row gap-4'>
      <Link to='/'>
         <button className="inline-flex items-center cursor-pointer justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            GO HOME
            </button>
         </Link>
         <Link to='/auth/login'>
         <button className="inline-flex items-center cursor-pointer justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-orange-600 border border-transparent rounded-full md:w-auto hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
           Log In
            </button>
         </Link>
      </div>
 </div> 
    );
};

export default Contact;