import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CardBox from './CardBox';

const BoxesCard = () => {

    const allBoxes = useLoaderData()
    console.log(allBoxes)

   
    return (
        <div className=''>

        <div className='text-center py-5 bg-gradient-to-r from-[#1f48a1b6] to-[#13abb19c]'>
            <h1 className='text-4xl font-bold py-4'>We Provide Best Services</h1>
            <p className='text-gray-600'>Join our subscription box service and receive carefully curated items delivered right to your doorstep. <br /> Perfect for those who love surprises!</p>
        </div>
        <div className='w-8/12  mx-auto my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                allBoxes.map(allBox => <CardBox allBox={allBox}></CardBox>)
            }
        </div>

        </div>
    );
};

export default BoxesCard;