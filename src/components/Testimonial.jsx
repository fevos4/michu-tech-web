import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
            What Peoples Say About MichuTech?
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <img
                src="/path/to/yonatan-wube-image.jpg"
                alt="Mr. Yonatan Wube"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Mr. Yonatan Wube</h3>
                <p className="text-gray-600 mt-1">CEO, Arki Sport Betting</p>
                <p className="text-gray-700 mt-4">
                  MichuTech IT Solutions is a startup company founded by a team of
                  dedicated and highly motivated young professionals. Their
                  commitment to excellence is reflected in their diligent work
                  ethic, consistently delivering projects on time and providing
                  transparent progress updates as needed. I highly recommend
                  collaborating with MichuTech for their professional and reliable
                  services.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <img
                src="/path/to/sisay-girma-image.jpg"
                alt="Mr. Sisay Girma"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Mr. Sisay Girma</h3>
                <p className="text-gray-600 mt-1">Project Manager, Wings Education and Media</p>
                <p className="text-gray-700 mt-4">
                  MichuTech IT Solutions stands out as a startup venture crafted by
                  a group of driven and enthusiastic young professionals. Their
                  diligent efforts and commitment to delivering top-notch projects
                  are commendable. I wholeheartedly endorse collaborating with
                  them, as they consistently meet deadlines and keep stakeholders
                  informed of their progress at every step. Working with MichuTech
                  is a valuable experience due to their professionalism and
                  dedication to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
