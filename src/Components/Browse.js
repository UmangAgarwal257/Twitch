import React from "react";
import joystick from "../assets/joystick.png";
import Category from "./Category";
import mic from "../assets/mic.png";
import headphone from "../assets/headphone.png";
import trophy from "../assets/trophy.png";
import paint from "../assets/paint.png";

const Browse = () => {
  const categories = [
    {
      title: "Games",
      icon: joystick,
      css: "w-[3rem] h-[3rem] top-[0.1rem] right-0 -rotate-45",
    },
    {
      title: "IRL",
      icon: mic,
      css: "w-[2rem] h-[2rem] -top-[0.3rem] right-3 -rotate-45",
    },
    {
      title: "Music",
      icon: headphone,
      css: "w-[3rem] h-[3rem] -top-[0.3rem] right-0 -rotate-45",
    },
    {
      title: "Esports",
      icon: trophy,
      css: "w-[3.5rem] h-[3.5rem] -top-[0.2rem] -right-2 -rotate-45",
    },
    {
      title: "Creative",
      icon: paint,
      css: "w-[3.5rem] h-[3.5rem] -top-[0.2rem] -right-2 -rotate-45",
    },
  ];
  return (
    <div className="">
      {/* Title */}
      <h1 className="text-[55px] font-bold">Explore</h1>
      {/* Categories */}
      <div className="flex flex-wrap gap-x-8 lg:gap-x-12 gap-y-6">
        {categories.map((category) => (
          <Category
            title={category.title}
            icon={category.icon}
            css={category.css}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
