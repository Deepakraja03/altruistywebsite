import React from 'react';

const CollaborateCard = ({ image, title, description, register }) => {
  return (
    <div className="bg-white rounded-xl mx-5 md:gap-3 md:h-96 md:w-64 shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
        <p className="text-sm text-gray-800 flex-grow mb-4"><span className='font-semibold text-black'>Description:</span> {description}</p>
        <button className="bg-[#28316B] text-white px-6 py-2 rounded-3xl hover:bg-white hover:border-2 hover:border-[#28316B] hover:text-[#28316B] transition duration-300 hover:scale-105 focus:outline-none self-center">{register}</button>
      </div>
    </div>
  );
};

export default CollaborateCard;