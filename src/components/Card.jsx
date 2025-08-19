import React from 'react';

const Card = ({ Icon, title, text }) => {
  return (
    <div className="px-4 py-6 my-2 hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg shadow-sm hover:shadow-lg border border-gray-300 md:border-0">
      <div className="flex items-start gap-x-4">
        {/* Icon */}
        <p className="bg-DarkLava text-white rounded-full px-3 py-2 text-sm md:text-base">
          {Icon}
        </p>

        {/* Content */}
        <div>
          <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-DarkLava capitalize break-words">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg tracking-tight">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
