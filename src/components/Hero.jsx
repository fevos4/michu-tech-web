import React from 'react';

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex flex-col justify-between pt-16 md:pt-24" id='home'>
      <div className="grid md:grid-cols-2 md:p-24 p-6">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:mt-0 mt-4">
          <p className="md:text-5xl font-bold font-serif text-3xl text-gray-200">
            Transforming Ideas into Digital Solutions
          </p>
          <p className="py-3 md:mb-5 text-sm text-white">
            We are a technology company dedicated to creating innovative solutions that empower businesses.
          </p>
          <button 
            onClick={() => ('create-account')} 
            className="hover:bg-slate-400 rounded-full bg-[#0077B6] md:px-4 md:py-2 text-white px-2 py-2 md:w-auto w-40"
          >
            Explore Our Services
          </button>
        </div>
        <img
          src="/assets/hero.png"
          alt=""
          className="md:h-72 "
        />
      </div>
    </div>
  );
};

export default Hero;
