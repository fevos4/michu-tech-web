import React from 'react';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const JoinUsSection = () => {
  return (
    <div className="bg-[#292C27] py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-white text-4xl font-bold mb-4">Join Us Now!</h2>
          <p className="text-gray-400 mb-8">Available on iOS and Android</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-white flex gap-4 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
            >
              <FaApple className='text-2xl'/> App Store
            </a>
            <a
              href="#"
              className="bg-gray-800 flex gap-4 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              <FaGooglePlay className='text-2xl '/> Play Store
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default JoinUsSection;
