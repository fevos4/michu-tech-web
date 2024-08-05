import React from 'react';

const PartnersSection = () => {
  return (
    <div className="bg-blue-900 py-12">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12 text-center">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex justify-center">
            <img src="/arki-logo.png" alt="Arki" className="h-12" />
          </div>
          <div className="flex justify-center">
            <img src="/wings-logo.png" alt="WINGS Education & Media" className="h-12" />
          </div>
          <div className="flex justify-center">
            <img src="/washlink-logo.png" alt="Wash Link" className="h-12" />
          </div>
          <div className="flex justify-center">
            <img src="/veh-tech-logo.png" alt="VEH Tech" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;