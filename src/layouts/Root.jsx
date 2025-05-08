import React, { Suspense } from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';
import Loading from '../component/Loading';

const Root = () => {
    return (
  <div>
   <header className='py-2 border  border-gray-200 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg mb-4'>
 <Suspense fallback={<Loading></Loading>}>
 <Navbar></Navbar>
 </Suspense>
   </header>
    <div className='min-h-[63vh] bg-gray-100'>
    <Outlet></Outlet>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
    );
};

export default Root;