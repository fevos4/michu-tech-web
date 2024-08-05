import React from 'react';


const ProjectCompletionImage = () => {
  return (
    <div className="relative  w-full">
    <img
  src="/assets/boat.jpg"
  alt="Kayak in the water"
  className="object-cover h-80 sm:h-96 md:h-screen-3/4 w-full"
/>
      <div className="absolute top-1/2 left-1/5 transform -translate-y-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex flex-col items-center mr-4">
              <div className="w-5 h-5 border-2 border-gray-600 rounded-full bg-white"></div>
              <div className="h-20 border-l-2 border-gray-600"></div>
              <div className="w-5 h-5 border-2 border-green-500 rounded-full bg-green-500"></div>
            </div>
            <div>
              <span className="text-gray-500">Project Completion</span>
              <span className="text-green-500 font-bold ml-2">Beta Release</span>
              <h3 className="text-xl font-bold mt-1">Application Development</h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center mr-4">
              <div className="w-5 h-5 border-2 border-green-500 rounded-full bg-green-500"></div>
              <div className="h-20 border-l-2 border-green-500"></div>
              <div className="w-5 h-5 border-2 border-green-500 rounded-full bg-white"></div>
            </div>
            <div>
              <span className="text-gray-500">Project Design</span>
              <h3 className="text-xl font-bold mt-1">Document Development</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompletionImage;
