import React from 'react';
import Header from '../component/Header';
import MainSection from './MainSection';
import FeadBack from './FeadBack';
import Chooseus from './Chooseus';

const Home = () => {

    

    return (
        <div className=' '>
           <div className=' '>
           <Header></Header>
           </div>
           <div className='my-24 container mx-auto'>
            <MainSection></MainSection>
           </div>
           <div className='mt-10 container mx-auto'>
            <FeadBack></FeadBack>
           </div>
           <div className='container mx-auto'>
            <Chooseus></Chooseus>
           </div>




        </div>
    );
};

export default Home;