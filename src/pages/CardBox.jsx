import React, { useEffect } from 'react';
import { Link } from 'react-router';
import 'aos/dist/aos.css';
import Aos from 'aos';
const CardBox = ({allBox}) => {


    useEffect(()=>{
        Aos.init({
            duration: 1000, once:true
        })
    },[])


    console.log(allBox)

    const {thumbnail,category,price,frequency,id} =allBox

    return (
        <div data-aos="zoom-in">
            <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 transform transition duration-300 hover:scale-105 cursor-pointer">
	<img src={thumbnail} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">{category}</h2>
	</div>
	<div className='flex justify-between items-center'>
        <h1 className='text-lg font-bold'>{price}$</h1>
        <h1 className='text-lg font-bold'>{frequency}</h1>
    </div>
    <Link to={`/category/${id}`}><button className="btn btn-neutral btn-outline mt-4">View More</button></Link>
</div>
        </div>
    );
};

export default CardBox;