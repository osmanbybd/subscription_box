import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStarHalfAlt } from 'react-icons/fa';


   

const FeadBack = () => {


        const [customars, setCustomars] = useState([])
        const [showAll, setShowAll] = useState(false)

    useEffect(() => {


        AOS.init({duration: 800 , once:true})

        fetch('details.json')
        .then(res => res.json())
        .then((data) => setCustomars(data))

    },[])

        const displayCard =  showAll ? customars : customars.slice(0 , 6)

    return (
        <div  className='my-10 space-y-7 mx-5'>
            <h1 className='text-3xl font-bold text-center'>What Our Customers Say</h1>
            <p className='text-center text-gray-600'>Discover a curated collection of premium products every month, tailored to your interests and lifestyle. Each box is packed with <br /> handpicked items designed to inspire, simplify, or delight — delivered straight to your door.</p>
         <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4' data-aos="fade-up" >
         {
                displayCard.map(customar => 
                    
                    <div className='text-center border border-gray-200 shadow-xl   p-15 ' >
                        <img className='w-19 h-19 rounded-full mx-auto bg-gray-300 p-2' src={customar.photo} alt="" />
                        <h1 className='text-xl font-bold py-5'>{customar.name}</h1>
                        <h1 className='text-lg text-gray-500'>{customar.quote}</h1>
                        <hr className='border-dashed border-gray-300 my-4' />
                        <div className='flex justify-between '>
                            <h1 className='text-xl font-bold'>{customar.location}</h1>
                            <h1 className='text-xl font-bold'>{customar.date}</h1>
                        </div>
                        <div className='mt-5'>
                        <h1 className='flex justify-end items-center text-xl font-bold gap-2'><FaStarHalfAlt className='text-yellow-500' /> {customar.rating}</h1>
                        </div>
                    </div>

                )
            }
         </div>
         <div className='text-center'>
         <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">{showAll? 'Show Less' : 'Show All'} </button>
         </div>

        </div>
    );
};

export default FeadBack;