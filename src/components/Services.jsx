import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id='services'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Application Development</h3>
            <p className="mt-2 text-sm text-gray-500">
              Crafting robust and scalable applications tailored to your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Website Development</h3>
            <p className="mt-2 text-sm text-gray-500">
              Building interactive and user-friendly websites to enhance your online presence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Web Design</h3>
            <p className="mt-2 text-sm text-gray-500">
              Creating visually appealing and intuitive designs for a seamless user experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Consultancy</h3>
            <p className="mt-2 text-sm text-gray-500">
              Providing expert advice and solutions to optimize your technology strategy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Tutorials on Web Development</h3>
            <p className="mt-2 text-sm text-gray-500">
              Offering comprehensive tutorials to enhance your skills in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
