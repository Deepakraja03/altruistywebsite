import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl md:mx-2 md:gap-10 md:w-72 shadow-md overflow-hidden">
      <img src={image} alt={title} className="md:w-full md:h-48 object-cover" />
      <div className="p-2">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default Card;
