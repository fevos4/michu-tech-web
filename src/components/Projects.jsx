import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id='projects'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span role="img" aria-label="camping">🏕️</span> Our Projects
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="relative bg-gray-100 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="inline-block p-3 rounded-full bg-blue-500">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 3.93 2.99 7.16 6.82 7.93L12 22l.18-5.07C16.01 16.16 19 12.93 19 9c0-3.87-3.13-7-7-7zm0 2c1.42 0 2.78.55 3.78 1.46a5.33 5.33 0 011.56 3.74 5.34 5.34 0 01-1.56 3.75A5.333 5.333 0 0112 14a5.333 5.333 0 01-3.78-1.55 5.33 5.33 0 01-1.56-3.75c0-1.41.55-2.77 1.56-3.74A5.333 5.333 0 0112 4zm0 3c-.88 0-1.7.35-2.34.93-.62.57-.95 1.32-.95 2.07 0 .75.33 1.5.95 2.07A3.334 3.334 0 0012 13a3.334 3.334 0 002.34-.93c.62-.57.95-1.32.95-2.07 0-.75-.33-1.5-.95-2.07A3.334 3.334 0 0012 7z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">Washlink</h3>
            <p className="mt-2 text-sm text-gray-500">
              WashLink is a mobile application designed to facilitate users in accessing laundry services through nearby washing machines. The platform offers users the convenience of initiating laundry services either through a dedicated short code or via the user-friendly mobile application.
            </p>
          </div>
          <div className="relative bg-gray-100 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="inline-block p-3 rounded-full bg-blue-500">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 3.93 2.99 7.16 6.82 7.93L12 22l.18-5.07C16.01 16.16 19 12.93 19 9c0-3.87-3.13-7-7-7zm0 2c1.42 0 2.78.55 3.78 1.46a5.33 5.33 0 011.56 3.74 5.34 5.34 0 01-1.56 3.75A5.333 5.333 0 0112 14a5.333 5.333 0 01-3.78-1.55 5.33 5.33 0 01-1.56-3.75c0-1.41.55-2.77 1.56-3.74A5.333 5.333 0 0112 4zm0 3c-.88 0-1.7.35-2.34.93-.62.57-.95 1.32-.95 2.07 0 .75.33 1.5.95 2.07A3.334 3.334 0 0012 13a3.334 3.334 0 002.34-.93c.62-.57.95-1.32.95-2.07 0-.75-.33-1.5-.95-2.07A3.334 3.334 0 0012 7z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center">MichuGojo</h3>
            <p className="mt-2 text-sm text-gray-500">
              MichuGojo is a mobile application that streamlines the process of renting homes. It empowers users to conveniently browse and select their desired residence from a curated collection of available properties. Property owners can effortlessly showcase their homes by uploading photos and details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
