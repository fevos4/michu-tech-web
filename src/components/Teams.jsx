import React from 'react';

const teamMembers = [
  {
    name: 'Falema Garedow',
    position: 'CEO, Scientific Director',
    imageUrl: '/path/to/image1.jpg', 
  },
  {
    name: 'Gemechis Sheleme',
    position: 'Chief Financial and HR Officer (CFO)',
    imageUrl: '/path/to/image2.jpg',
  },
  {
    name: 'Dr.Samuel Tesfaye',
    position: 'Board Member',
    imageUrl: '/path/to/image3.jpg',
  },
  {
    name: 'Nabiyat Lemma',
    position: 'Chief Marketing and Promotion Officer',
    imageUrl: '/path/to/image4.jpg',
  },

  {
    name: 'Belay Birhanu',
    position: 'CTO',
    imageUrl: '/path/to/image3.jpg',
  },
  {
    name: 'Elsa Abira',
    position: 'Sales and Marketing',
    imageUrl: '/path/to/image4.jpg',
  },
];

const TeamSection = () => {
  return (
    <div className="w-full p-6 md:px-24 md:mb-5 text-lg bg-gray-100" id='team'>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">Our Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-700 font-light text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
