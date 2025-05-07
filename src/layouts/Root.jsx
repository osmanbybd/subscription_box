import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const Root = () => {
    return (
  <div>
   <header className='py-2 border border-gray-200 shadow-lg mb-4'>
   <Navbar></Navbar>
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