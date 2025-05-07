import React from 'react';
import { Link } from 'react-router';



const MainSection = ({data}) => {

  
    console.log(data)
    return (
     <div>
         <div  className='bg-gradient-to-r from-[#2c96d3] to-[#16a890] py-5 shadow-xl rounded-lg'>
          <div className='text-center'>
          <h1 className='text-3xl font-bold py-3'>
            Design Wizard Collection
            </h1>
            <p className='text-lg '>Unlock your potential with coding essentials, tutorials, and resources delivered monthly.</p>
          </div>
            <div className='flex items-center justify-center mt-4'>
            <Link to='viewMore'><button className="btn btn-active btn-primary py-2 px-6">Visit Our Product</button></Link>
            </div>
        </div>

         
           
     </div>
    );
};

export default MainSection;