import React from 'react';
import { FaMap } from "react-icons/fa";

const About = () => {

  return (
    <div className="w-full bg-white h-screen flex flex-col md:px-24 relative" id='about'>
      <div className="flex items-center justify-between relative">
        <div
          className="overflow-x-auto whitespace-nowrap scroll-smooth px-6 py-6 custom-scrollbar"
        >
          <div className="inline-block w-full md:w-1/3 px-2 py-8">
            <div className='flex gap-4'>
              <FaMap className='text-3xl text-[#0099FF]' />
              <div>
                <h2 className='font-bold text-1xl'>MichuTech Washlink</h2>
                <p>Washlink, Wear Clean</p>
              </div>
            </div>
            <img src="/assets/washlink.png" alt="Washlink" className="md:h-72 md:w-72 mt-4" />
          </div>
          <div className="inline-block w-full md:w-1/3 px-2 py-8">
            <div className='flex gap-4'>
              <FaMap className='text-3xl text-[#0099FF]' />
              <div>
                <h2 className='font-bold text-1xl'>MichuGojo</h2>
                <p>Get your next hour at MichuGojo</p>
              </div>
            </div>
            <img src="/assets/home.avif" alt="MichuGojo" className="md:h-72 md:w-72 mt-4" />
          </div>
          <div className="inline-block w-full md:w-1/3 px-2 py-8">
            <div className='flex gap-4'>
              <FaMap className='text-3xl text-[#0099FF]' />
              <div>
                <h2 className='font-bold text-1xl'>MichuTech Medical Solutions</h2>
                <p>Medical Solutions, Medical Care</p>
              </div>
            </div>
            <img src="/assets/med.avif" alt="Medical Solutions" className="md:h-72 md:w-72 mt-4" />
          </div>
          <div className="inline-block w-full md:w-1/3 px-2 py-8">
            <div className='flex gap-4'>
              <FaMap className='text-3xl text-[#0099FF]' />
              <div>
                <h2 className='font-bold text-1xl'>MichuTech Machine Learning Projects</h2>
                <p>Machine Learning Projects, Automation</p>
              </div>
            </div>
            <img src="/assets/ML.avif" alt="Machine Learning Projects" className="md:h-72 md:w-72 mt-4" />
          </div>
        </div>
      </div>

      {/* Text Box at the Bottom Right */}
      <div className="flex justify-center items-center shadow-md rounded-3xl bg-[#020887] text-gray-300 py-6 md:py-8 m-4 w-80 md:w-1/2 mt-4 md:mt-8 absolute bottom-0 right-4 mb-4 md:mb-8">
        <div className="flex flex-col justify-center w-full px-4 md:px-6">
          <p className="md:text-2xl text-xl font-bold mb-3 md:mb-4">
            Want to develop any Software <br /> And Not Knowing The Way?
          </p>
          <p className="text-sm md:text-base leading-relaxed whitespace-normal">
            Whether you're taking your first steps or you're a seasoned developer seeking innovative solutions, our dedicated team of experts is prepared to collaborate with you. From concept to execution, we're committed to transforming your ideas into powerful, functional software that meets your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
