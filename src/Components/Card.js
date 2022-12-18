import React from "react";

const Card = ({ title, image, viewer }) => {
  return (
    <div>
      <div className="h-[12rem] sm:w-60 sm:h-[17rem] md:w-52 md:h-[17rem] xl:w-[12rem] xl:h-[15rem]  flex">
        <img
          src={image}
          alt=""
          className="object cover w-full h-full rounded-[0.5rem]"
        />
      </div>
      <p className="font-semi-bold text-[18px]">{title}</p>
      <p className="text-gray-600 -mt-1">{viewer}</p>
    </div>
  );
};

export default Card;
