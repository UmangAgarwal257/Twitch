import React from "react";
import { FiSearch } from "react-icons/fi";
import Chat from "../assets/chat.jpg";
import Card from "./Card";
import Valorant from "../assets/valorant.jpg";
import Minecraft from "../assets/Minecraft.jpg";
import Genshin from "../assets/Genshin.jpg";
import GTA from "../assets/GTA V.webp";
import Elden from "../assets/Elden Ring.jpg";

const Cards = () => {
  const cards = [
    { title: "VALORANT", image: Valorant, viewer: "122k viewers" },
    { title: "Just Chatting", image: Chat, viewer: "430k viewers" },
    { title: "Minecraft", image: Minecraft, viewer: "175k viewers" },
    { title: "Genshin Impact", image: Genshin, viewer: "88k viewers" },
    { title: "GTA V", image: GTA, viewer: "113k viewers" },
    { title: "Elden Ring", image: Elden, viewer: "25k viewers" },
    { title: "VALORANT", image: Valorant, viewer: "122k viewers" },
    { title: "Just Chatting", image: Chat, viewer: "430k viewers" },
    { title: "Minecraft", image: Minecraft, viewer: "175k viewers" },
    { title: "Genshin Impact", image: Genshin, viewer: "88k viewers" },
    { title: "GTA V", image: GTA, viewer: "113k viewers" },
    { title: "Elden Ring", image: Elden, viewer: "25k viewers" },
    { title: "VALORANT", image: Valorant, viewer: "122k viewers" },
    { title: "Just Chatting", image: Chat, viewer: "430k viewers" },
    { title: "Minecraft", image: Minecraft, viewer: "175k viewers" },
    { title: "Genshin Impact", image: Genshin, viewer: "88k viewers" },
    { title: "GTA V", image: GTA, viewer: "113k viewers" },
    { title: "Elden Ring", image: Elden, viewer: "25k viewers" },
    { title: "VALORANT", image: Valorant, viewer: "122k viewers" },
    { title: "Just Chatting", image: Chat, viewer: "430k viewers" },
    { title: "Minecraft", image: Minecraft, viewer: "175k viewers" },
    { title: "Genshin Impact", image: Genshin, viewer: "88k viewers" },
    { title: "GTA V", image: GTA, viewer: "113k viewers" },
    { title: "Elden Ring", image: Elden, viewer: "25k viewers" },
    { title: "VALORANT", image: Valorant, viewer: "122k viewers" },
    { title: "Just Chatting", image: Chat, viewer: "430k viewers" },
    { title: "Minecraft", image: Minecraft, viewer: "175k viewers" },
    { title: "Genshin Impact", image: Genshin, viewer: "88k viewers" },
    { title: "GTA V", image: GTA, viewer: "113k viewers" },
    { title: "Elden Ring", image: Elden, viewer: "25k viewers" },
    { title: "VALORANT", image: Valorant, viewer: "122k viewers" },
    { title: "Just Chatting", image: Chat, viewer: "430k viewers" },
    { title: "Minecraft", image: Minecraft, viewer: "175k viewers" },
    { title: "Genshin Impact", image: Genshin, viewer: "88k viewers" },
    { title: "GTA V", image: GTA, viewer: "113k viewers" },
    { title: "Elden Ring", image: Elden, viewer: "25k viewers" },
  ];
  return (
    <div>
      {/* Title */}
      <div className="w-full font-bold text-[20px] flex items-center pt-10 gap-5">
        <p>Categories</p>
        <p>Live Channels</p>
      </div>
      {/* Filter */}
      <div className="relative flex items-center pt-5 ">
        <p className="font-bold ">Filter By Tag</p>
        <input
          type="search"
          placeholder="Search Category Tags"
          className=" outline-0 bg-[#e9e9e9] rounded-sm ml-2"
        />
        <FiSearch className="" />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6  pt-5 gap-4">
        {cards.map((card) => (
          <Card title={card.title} image={card.image} viewer={card.viewer} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
