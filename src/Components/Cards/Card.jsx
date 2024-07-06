import React from 'react';

const Card = ({ image, title }) => {
  return (
    // <div className="bg-white rounded-xl mx-2 md:gap-10 md:w-72 shadow-md overflow-hidden">
    //   <img src={image} alt={title} className="md:h-48 h-44 w-full object-cover" />
    //   <div className="p-2">
    //     <h3 className="text-sm font-semibold">{title}</h3>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center mx-0 md:gap-0 md:w-72">
      <img src={image} alt={title} className="md:h-40 md:w-40 h-20 w-20 rounded-full" />
      <div className="mt-2">
        <h3 className="text-sm w-24 font-semibold text-center md:text-lg md:w-80">{title}</h3>
      </div>
    </div>
  );
}

export default Card;