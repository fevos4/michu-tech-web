import React from 'react';

const MichuTechPage = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">MICHUTECH</p>
            <p>Connect to your future</p>
          </div>
          
        </div>
      </header>

      <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-8 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">About MichuTech</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Code of Conducts</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Community and Mentors</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="mb-2">Phone: +251-98-616-4444 / +251-98-626-4444</p>
                <p className="mb-4">Email: michutechitsolutionsplc@gmail.com</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><i className="fab fa-youtube"></i></a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <hr className="border-gray-400 my-4" />
          <p className="text-sm">&copy; 2024 MichuTech IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MichuTechPage;