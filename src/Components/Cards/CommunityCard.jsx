import React from 'react';

const CommunityCard = ({ image, title, description, register }) => {
  return (
    <div className="relative rounded-xl mx-14 md:gap-3 md:h-96 md:w-full shadow-md overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        alt={title}
      ></div>
      <div className="relative z-10 p-4 h-full flex flex-col justify-between text-center text-white">
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-lg mx-4">{description}</p>
        <div className="my-5 flex justify-center" style={{ height: '50px' }}>
          <button className="bg-[#28316B] text-white px-12 py-2 rounded-3xl hover:bg-white hover:border-2 hover:border-[#28316B] hover:text-[#28316B] duration-300 transition-transform transform hover:scale-110 focus:outline-none text-lg">{register}</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;