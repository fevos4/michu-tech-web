import React from 'react';

const Mission = () => {
  return (
    <div className="w-full p-6 md:px-24  text-lg bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">Our Mission and Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border hover:outline-none hover:ring ">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700 text-sm font-light">
              MichuTech IT Solutions PLC. is dedicated to empowering businesses through innovative technology solutions in Ethiopia and beyond. Our mission is to deliver exceptional website development, software development, system development, and graphic design services globally. We strive to enhance our clients' business performance by providing high-quality, tailored solutions that meet their unique needs. Our commitment is to contribute to the growth and success of businesses by leveraging the power of technology and fostering long-term partnerships.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border hover:outline-none hover:ring ">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700 text-sm font-light">
              MichuTech IT Solutions PLC. aims to lead the technology solutions industry, recognized for innovation, quality, and client satisfaction. We strive to be the go-to partner for businesses seeking excellence in website development, software development, system development, and graphic design services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
