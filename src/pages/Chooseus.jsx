import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { FaGift, FaHeadset, FaTruck } from 'react-icons/fa';




const Chooseus = () => {

    useEffect(()=> {
        Aos.init({duration: 800 , once:true})
    },[])
    return (
        <div className='my-16 px-4 md:px-8 text-center' data-aos="fade-up">
        <h2 className='text-3xl font-bold text-center mb-6'>Why Choose Us?</h2>
        <p className='text-gray-600 max-w-md mx-auto mb-8'>
          Our subscription box delivers joy in every package. Here’s what makes us stand out!
        </p>
  
        <div className='grid gap-6 md:grid-cols-3'>
          <div className='shadow-md rounded-xl p-6  border border-gray-200'>
            <div className='text-4xl mb-4 text-yellow-500 flex justify-center items-center '>
              <FaGift className=''></FaGift>
            </div>
          <div className='px-5'>
          <h3 className='font-semibold text-lg'>Curated Gifts</h3>
            <p className='text-sm text-gray-500'>
              Each box is handpicked to suit your tastes, bringing a delightful surprise every month.
            </p>
          </div>
          </div>
  
          <div className=' shadow-md rounded-xl p-6 border border-gray-200 '>
            <div className='text-4xl mb-4 text-blue-500 flex justify-center items-center'>
              <FaTruck></FaTruck>
            </div>
           <div className='px-5'>
           <h3 className='font-semibold text-lg'>Fast Delivery</h3>
            <p className='text-sm text-gray-500'>
              Timely and reliable, so you get your box right when you need it.
            </p>
           </div>
          </div>
  
          <div className=' shadow-md rounded-xl p-6 border border-gray-200 '>
            <div className='text-4xl mb-4 text-green-500 flex justify-center items-center'>
              <FaHeadset></FaHeadset>
            </div>
            <div className='px-5'>
            <h3 className='font-semibold text-lg'>Customer Support</h3>
            <p className='text-sm text-gray-500'>
              Friendly support available to help you with any questions or issues.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Chooseus;