import React from 'react';

const Top = () => {
  return (
    <div className="bg-white py-8 md:p-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span role="img" aria-label="camping">🏕️</span>
          </h2>
            <h2 className="text-2xl font-bold text-[#0099FF] mb-4">We Are Here for You</h2>
            <h3 className="text-3xl font-bold mb-4">To Guide You to <span className='text-[#0099FF]'>Connect to your Future</span></h3>
            <p className="text-gray-700 mb-6">
              <span className='text-[#0099FF] font-bold'>At MichuTech IT Solutions PLC</span>, we serve as your bridge to a future enhanced by digital solutions and cutting-edge application development. Our offerings include mobile and desktop applications, medical solutions, and expertise in AI and machine learning. Additionally, we provide consultancy services to guide you through the application development process, along with training programs focused on web development. With MichuTech's support, you can confidently connect to your future. Invite your friends and family to embark on thrilling adventures through valleys and to the summit of mountains, all facilitated by MichuTech's state-of-the-art solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;