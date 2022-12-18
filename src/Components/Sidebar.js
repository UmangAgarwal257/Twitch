import React from "react";
import { GrChannel } from "react-icons/gr";
import NPC from "../assets/NPC.png";
import NPC2 from "../assets/NPC2.jpg";
import NPC3 from "../assets/NPC3.png";
import NPC4 from "../assets/NPC4.jpg";
import Chad from "../assets/Chad.webp";
import Chad2 from "../assets/Chad2.jpg";
import Chad3 from "../assets/Chad3.png";
import Chad4 from "../assets/Chad4.png";
import Cringe from "../assets/Cringe.jpg";
import Weeb from "../assets/Weeb.jpg";
import Channel from "./Channel";

const Sidebar = () => {
  const channels = [
    { Profile: NPC, name: "Npc 1", playing: "MineCraft", viewers: "35.6k" },
    { Profile: Chad, name: "Chad 1", playing: "Elden Ring", viewers: "13.7k" },
    {
      Profile: Weeb,
      name: "Weeb",
      playing: "Genshin Impact",
      viewers: "56.2k",
    },
    { Profile: NPC2, name: "Npc 2", playing: "Gta V", viewers: "5.6k" },
    { Profile: Chad2, name: "Chad 2", playing: "RDR 2", viewers: "18k" },
    { Profile: Cringe, name: "Cringe", playing: "Fortnite", viewers: "109.4k" },
    { Profile: NPC3, name: "Npc 3", playing: "Valorant", viewers: "13k" },
    { Profile: Chad3, name: "Chad 3", playing: "Sekiro", viewers: "2.5k" },
    { Profile: NPC4, name: "Npc 4", playing: "Dota 2", viewers: "14k" },
    { Profile: Chad4, name: "Chad 4", playing: "God Of War", viewers: "12.6k" },
  ];
  return (
    <div className="sticky top-[4.5rem] sm:top-[3.5rem] bg-[#e9e9e9] p-2 border-r w-[18rem] h-full z-20">
      {/* title */}
      <div className="whitespace-nowrap flex justify-center">
        <p className="hidden lg:flex text-[12px] font-bold">
          RECOMMENDED CHANNELS
          <div className="lg:hidden">
            <GrChannel />
          </div>
        </p>
      </div>
      {/* Recommended */}
      <div className="flex flex-col gap-2 pt-4">
        {channels.map((channel) => (
          <Channel
            profile={channel.Profile}
            name={channel.name}
            playing={channel.playing}
            viewers={channel.viewers}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
