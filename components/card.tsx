import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  imageUrl: string;
  buttonBgColor: string;
  className?: string;
}

function Card({
  title,
  description,
  bgColor,
  textColor,
  imageUrl,
  buttonBgColor,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-lg h-[250px] max-w-[90%] md:h-[300px] md:w-[600px]   mx-2 md:mx-4 flex  justify-between items-center ${bgColor} ${className}`}
    >
      <div
        className={`rounded-lg h-full w-full bg-cover bg-center bg-no-repeat `}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={`p-4 ${textColor}`}>
          <h1 className="text-m md:leading-10 font-bold mb-2 md:text-3xl md:w-1/2 ">
            {title}
          </h1>
          <p className="text-sm md:text-l mb-4 md:w-1/2">{description}</p>
          <button
            className={` px-9 py-2 sm:text-sm md:text-base md:px-8 md:py-2 rounded-lg ${buttonBgColor} hover:scale-105 transition-all duration-300 `}
          >
            Detaylar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
