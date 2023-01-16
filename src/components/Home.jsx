import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#050e04]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-cyan-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          PRIYANKA KUMAR
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Software Engineering Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-m'>
        I am an aspiring student who wants to explore different things in the field of technology. 
        I love developing innovative, useful softwares and improving already-existing applications.
        </p>
        {/* <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600'>
            View Skills
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

