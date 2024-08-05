import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <div className="bg-gray-100 md:p-24 p-6" id='contact'>
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-blue-600 text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-600 text-xl">GET IN TOUCH</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="md:col-span-1">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32"
                ></textarea>
              </div>
            </form>
            <button 
            onClick={() => ('create-account')} 
            className="hover:bg-slate-400 rounded-full bg-[#0077B6] md:px-4 md:py-2 text-white px-2 py-2 md:w-auto w-40"
          >
            Submit
          </button>
          </div>
          <div className="md:col-span-1 flex flex-col justify-center space-y-4 text-left">
            <div className="flex items-center space-x-2">
            <CiMail className='text-blue-400'/>
              <span>michutechitsolutionsplc@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
            <FaPhoneAlt className='text-blue-400'/>
              <span>(+251) 98-616-4444 / (+251) 98-626-4444</span>
            </div>
            <div className="flex items-center space-x-2">
            <FaLinkedin className='text-blue-400'/>
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center space-x-2">
            <FaGithub className='text-blue-400'/>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
