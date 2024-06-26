import React from 'react';

const VolunteerCard = ({ image, title, date, location, description, register }) => {
  return (
    <div className="bg-white rounded-xl mx-5 md:gap-3 md:h-96 md:w-64 shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-2 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-1 text-center">{title}</h3>
        <p className="text-sm text-gray-600 mb-1"><span className='font-semibold text-black'>Date:</span> {date}</p>
        <p className="text-sm text-gray-600 mb-1"><span className='font-semibold text-black'>Location:</span> {location}</p>
        <p className="text-sm text-gray-800 mb-2"><span className='font-semibold text-black'>Description:</span> {description}</p>
        <button className="bg-[#28316B] flex items-center justify-center text-white px-4 py-1 my-1 rounded-3xl hover:bg-white hover:border-2 hover:border-[#28316B] hover:text-[#28316B] transition duration-300 hover:scale-110 focus:outline-none self-center">{register}</button>
      </div>
    </div>
  );
};

export default VolunteerCard;