
import 'swiper/css';
import 'swiper/css/navigation';

// import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';
import './swiper.css'
import { FaCog, FaGift, FaLeaf, FaRegClock, FaTeamspeak } from 'react-icons/fa';

const Header = () => {







    return (
       
        <div className='shadow-lg bg-gradient-to-br from-[#135deg] via-[#3a8dde] to-[#9b59b6]opacity-100 w-full min-h-[50vh]'>

     <div className='flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-4 lg:p-4 p-8'>
     <div  className=''>
            <h1 className='lg:text-5xl md:text-2xl text-xl font-bold py-2'> Discover Your Perfect <br /> Subscription Box</h1>
            <p className='text-lg '>Curated monthly boxes filled with tech gadgets, wellness items, global treats, and <br /> more — tailored just for your lifestyle. Find your next favorite surprise!</p>
          <div className='my-4'>
          <button className="btn btn-primary px-5 py-6">Explore more</button>
          </div>
          </div>
          <div>
          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
         <SwiperSlide>
         <div className=" text-white p-6 rounded-xl text-center">
         <div className='flex justify-center items-center py-4'>
         <FaGift  size={40} className='text-green-400'></FaGift>
         </div>
    <h2 className="text-2xl font-bold text-black">20% OFF</h2>
    <p className="text-sm mt-2 text-black">On your first subscription</p>
  </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className=" text-white p-6 rounded-xl text-center">
         <div className='flex justify-center items-center py-3'>
          <FaRegClock className='text-purple-500' size={40}></FaRegClock>
         </div>
        <h2 className="text-2xl font-bold text-black">Tech Essentials</h2>
        <p className="text-sm mt-2 text-black">Get the latest tech gadgets every month!</p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" text-white p-6 rounded-xl text-center">
        <div className='flex justify-center items-center py-3'>
          <FaLeaf className='text-purple-500' size={40}></FaLeaf>
         </div>
    <h2 className="text-2xl font-bold text-black">Global Treats</h2>
    <p className="text-sm mt-2 text-black">Taste snacks from around the world—quarterly delivery!</p>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" text-white p-6 rounded-xl text-center">
        <div className='flex justify-center items-center py-3'>
          <FaCog className='text-purple-500' size={40}></FaCog>
         </div>
    <h2 className="text-2xl font-bold text-black">Eco-Friendly</h2>
    <p className="text-sm mt-2 text-black">Sustainable products for a green lifestyle.</p>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" text-white p-6 rounded-xl text-center">
        <div className='flex justify-center items-center py-3'>
          <FaTeamspeak className='text-purple-500' size={40}></FaTeamspeak>
         </div>
    <h2 className="text-2xl font-bold text-black">Creative Crafters</h2>
    <p className="text-sm mt-2 text-black">DIY craft kits to unleash your creative side every month.</p>
  </div>
        </SwiperSlide>
       
      
      </Swiper>
          </div>
     </div>

        </div>
    );
};

export default Header;